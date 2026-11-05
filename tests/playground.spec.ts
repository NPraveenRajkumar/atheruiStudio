import { test, expect, Page } from '@playwright/test';
import fs from 'node:fs';
import { PREVIEW } from '../src/data/previewTemplates';

// Round trip for the Design Studio: change every control, then check that
//   1. the live element on the canvas has the value,
//   2. the generated HTML, pasted into a blank page, gives an element with the same value,
//   3. editing the data source updates the element and the code.
// Props that disagree when changed together are retried one at a time: if they pass alone, two props are
// interacting (a watcher that resets another prop), which is noted but is not a Design Studio bug.
// A sample of components runs by default; PG_FULL=1 runs all of them, PG_ONLY=<regex> picks some by tag.

const lite = JSON.parse(fs.readFileSync('src/data/componentsLite.json', 'utf8'));
const all = (lite.components as { id: string; tag: string }[]).filter((c) => !process.env.PG_ONLY || new RegExp(process.env.PG_ONLY).test(c.tag));
const STEP = process.env.PG_FULL || process.env.PG_ONLY ? 1 : 8;
const components = all.filter((_, i) => i % STEP === 0);

// Overlays close themselves (outside click, no trigger) and `shake` plays an animation and resets, so these cannot be
// held from outside. The generated code must still carry them, so that is checked instead of the element.
const SELF_MANAGED = new Set(['open', 'shake']);

// Props that only accept one format. Free text would make the component throw, which says nothing about the studio.
// A value is used as given; null leaves the prop alone. Keys are "prop" or "tag.prop".
const TEST_VALUES: Record<string, string | null> = {
  rootMargin: '10px',
  observerRootMargin: '10px',
  lazyLoadMargin: '10px',
  threshold: '0.5',
  // Equal bounds make a gauge or knob divide by zero
  min: '1',
  max: '99',
  step: '2',
  minValue: '1',
  maxValue: '99',
  'ui-speedometer.size': '220',
  'ui-speedometer.startAngle': '-100',
  'ui-speedometer.endAngle': '100',
  menuActions: '[]',
  // Normalises the colour differently from an attribute than from a property, so the two cannot be compared
  'ui-color-picker.value': null,
  'ui-code-preview.activeLang': null,
};

// Data props with a strict item shape (the gauge wants { min, max, color }); an invented item makes it throw,
// so the data step is skipped for them.
const NO_DATA_EDIT = new Set(['ui-speedometer']);

// Components that fail on their own in the bundled library, whatever the studio does. test.fail keeps the suite green
// and turns red the moment one is fixed, so the entry gets removed.
const LIBRARY_DEFECTS: Record<string, string> = {
  'ui-navigation-item': 'render throws "Cannot read properties of undefined (reading \'children\')" without data',
  'lm-container': 'render throws when it has no panels',
  'lm-panel': 'render throws when it has no parent layout',
  'lm-tabs': 'render throws when it has no tabs',
  'ui-accordion': 'throws "t is not iterable" without items',
  'ui-list': 'throws "Cannot read properties of undefined (reading \'length\')" without items',
  'ui-otp-input': 'throws "Cannot read properties of undefined (reading \'split\')" for some prop values',
  'ui-progress': 'mounts cleanly but throws "Cannot read properties of undefined (reading \'length\')" after some prop changes',
  'ui-snackbar': 'renders outside the preview stage, so the element is never on the canvas',
  'ui-dialog-box': 'removes itself from the stage when props change',
};

const ignorable = (text: string) => /Failed to load resource|favicon|ERR_|net::|iconoir|ionicons|unsplash/i.test(text);

interface Changed {
  name: string;
  kind: 'boolean' | 'number' | 'select' | 'text';
  set: string | number | boolean;
}

/** Drives the real inspector controls (no pointer events, so an open overlay cannot block them). */
async function changeControls(page: Page, tag: string, only?: string[]): Promise<Changed[]> {
  return page.evaluate(
    ([t, names, values]) => {
      const out: { name: string; kind: string; set: string | number | boolean }[] = [];
      const setNative = (el: HTMLInputElement | HTMLSelectElement, value: string) => {
        const proto = el instanceof HTMLSelectElement ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(proto, 'value')!.set!.call(el, value);
      };
      document.querySelectorAll<HTMLElement>('[data-prop]').forEach((el) => {
        const name = el.dataset.prop!;
        if (names && !names.includes(name)) return;
        const override = name in values ? values[name] : `${t}.${name}` in values ? values[`${t}.${name}`] : undefined;
        if (override === null) return;
        if (el instanceof HTMLInputElement && el.type === 'checkbox') {
          const next = !el.checked;
          el.click();
          out.push({ name, kind: 'boolean', set: next });
        } else if (el instanceof HTMLSelectElement) {
          const current = el.value;
          const opt = Array.from(el.options).find((o) => o.value !== '' && o.value !== current);
          if (!opt) return;
          setNative(el, opt.value);
          el.dispatchEvent(new Event('change', { bubbles: true }));
          out.push({ name, kind: 'select', set: opt.value });
        } else if (el instanceof HTMLInputElement && el.type === 'number') {
          const v = override !== undefined ? Number(override) : el.value === '7' ? 8 : 7;
          setNative(el, String(v));
          el.dispatchEvent(new Event('input', { bubbles: true }));
          out.push({ name, kind: 'number', set: v });
        } else if (el instanceof HTMLInputElement) {
          // Text that needs escaping goes into free-text props; others (a CSS selector, a URL) get a plain value
          const v = override ?? (/label|title|text|description|placeholder|heading|alt|caption|hint/i.test(name) ? 'a"b&c' : 'pg-test');
          setNative(el, v);
          el.dispatchEvent(new Event('input', { bubbles: true }));
          out.push({ name, kind: 'text', set: v });
        }
      });
      return out as Changed[];
    },
    [tag, only ?? null, TEST_VALUES] as const
  );
}

/** Reads props off the element on the canvas. */
const readLive = (page: Page, tag: string, names: string[]) =>
  page.evaluate(
    ([t, ns, idx]) => {
      // In a group only one child is edited (the others are neutral siblings)
      const el = document.querySelectorAll(`[data-testid="pg-stage"] ${t}`)[idx] as any;
      return el ? Object.fromEntries(ns.map((n) => [n, el[n]])) : null;
    },
    [tag, names, PREVIEW[tag]?.parent?.controlled ?? 0] as const
  );

/** Parses the generated markup into a fresh element and reads the same props back. */
const readFromCode = (page: Page, tag: string, markup: string, names: string[]) =>
  page.evaluate(
    async ([t, html, ns]) => {
      const box = document.createElement('div');
      box.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.appendChild(box);
      // Keep a reference: some components move themselves out of their container when they connect
      const tpl = document.createElement('template');
      tpl.innerHTML = html;
      const el = tpl.content.firstElementChild as any;
      if (!el) return null;
      box.appendChild(el);
      await customElements.whenDefined(t);
      await el.componentOnReady?.();
      const res = Object.fromEntries(ns.map((n) => [n, el[n]]));
      el.remove();
      box.remove();
      return res;
    },
    [tag, markup, names] as const
  );

/** Opens the component and waits until the studio has switched to it (a direct link first mounts the default one). */
async function open(page: Page, c: { id: string; tag: string }) {
  // Leave the page first: going to the same URL with only a hash would keep the previous state
  await page.goto('about:blank');
  await page.goto(`/#playground/${c.id}`);
  await expect(page.getByTestId('pg-code')).toBeVisible({ timeout: 20_000 });
  const defined = await page.evaluate(async (t) => {
    await Promise.race([customElements.whenDefined(t), new Promise((r) => setTimeout(r, 4000))]);
    return !!customElements.get(t);
  }, c.tag);
  test.skip(!defined, `<${c.tag}> is not in the bundled library`);
  await expect(page.locator(`[data-testid="pg-stage"] ${c.tag}`).first()).toBeAttached({ timeout: 10_000 });
  await expect(page.getByTestId('pg-code')).toContainText(`<${c.tag}`);
  await page.waitForTimeout(400);
}

/** Compares the canvas and the generated HTML for the props that were changed. Returns one line per disagreement. */
async function compare(page: Page, tag: string, changed: Changed[]) {
  const problems: Record<string, string> = {};
  const names = changed.map((x) => x.name);
  if (!names.length) return { problems, markup: '' };
  const live = await readLive(page, tag, names);
  expect(live, 'the element is on the canvas').not.toBeNull();
  const compared = changed.filter((x) => !SELF_MANAGED.has(x.name));
  for (const x of compared) {
    if (live![x.name] !== x.set) problems[x.name] = `set ${JSON.stringify(x.set)}, element has ${JSON.stringify(live![x.name])}`;
  }

  // Click through the DOM: an overlay opened by a prop can cover the tabs
  await page.getByTestId('pg-frameworks').getByRole('button', { name: 'HTML', exact: true }).evaluate((b: HTMLElement) => b.click());
  const code = await page.getByTestId('pg-code').innerText();
  const [markup] = code.split(/\n\n<script>/);
  const scriptProps = Array.from(code.matchAll(/^ {2}el\.(\w+) = /gm)).map((m) => m[1]);
  const fromCode = await readFromCode(page, tag, markup, names);
  expect(fromCode, 'the generated HTML makes an element').not.toBeNull();
  for (const x of compared) {
    if (!scriptProps.includes(x.name) && fromCode![x.name] !== live![x.name] && !problems[x.name]) {
      problems[x.name] = `canvas ${JSON.stringify(live![x.name])}, generated HTML gives ${JSON.stringify(fromCode![x.name])}`;
    }
  }
  for (const x of changed.filter((x) => SELF_MANAGED.has(x.name) && x.set === true)) {
    if (!new RegExp(String.raw`\s${x.name}(\s|>)`).test(markup)) problems[x.name] = `${x.name} is missing from the generated HTML`;
  }
  return { problems, markup };
}

test.describe('design studio round trip', () => {
  test.describe.configure({ timeout: 120_000 });

  for (const c of components) {
    test(`${c.tag}: controls, generated code and data agree`, async ({ page }) => {
      if (LIBRARY_DEFECTS[c.tag]) test.fail(true, LIBRARY_DEFECTS[c.tag]);

      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => m.type() === 'error' && !ignorable(m.text()) && errors.push(m.text()));

      await open(page, c);

      // 1 and 2: every control reaches the element and the generated HTML reproduces it
      const changed = await changeControls(page, c.tag);
      await page.waitForTimeout(150);
      const { problems } = await compare(page, c.tag, changed);

      // Disagreements may come from two props interacting, so each one is retried alone
      const real: string[] = [];
      for (const name of Object.keys(problems).slice(0, 12)) {
        await open(page, c);
        const alone = await compare(page, c.tag, await changeControls(page, c.tag, [name]));
        if (alone.problems[name]) real.push(`${name}: ${alone.problems[name]}`);
        else test.info().annotations.push({ type: 'interaction', description: `${name} only fails together with other props (${problems[name]})` });
      }
      expect.soft(real, 'props that fail even when changed alone').toEqual([]);

      // 3: the data source drives the element and the code
      await open(page, c);
      const fields = page.locator('textarea[data-field]');
      if ((await fields.count()) > 0 && !NO_DATA_EDIT.has(c.tag)) {
        await page.getByRole('button', { name: /Data Source/ }).first().click();
        const field = fields.first();
        const prop = (await field.getAttribute('data-field'))!;
        const current = (await field.inputValue()) || '[]';
        let next: unknown;
        let marker = '__pg__';
        try {
          const v = JSON.parse(current);
          // Add an item shaped like the existing ones (a list of colours takes a string, not an object)
          const first = Array.isArray(v) ? v[0] : undefined;
          const item = typeof first === 'string' ? '__pg__' : typeof first === 'number' ? 12345 : { ...(first ?? {}), id: '__pg__', label: '__pg__' };
          next = Array.isArray(v) ? [...v, item] : { ...(v ?? {}), __pg__: 1 };
          if (typeof item === 'number') marker = String(item);
        } catch {
          next = [{ id: '__pg__', label: '__pg__' }];
        }
        await field.fill(JSON.stringify(next));
        await page.waitForTimeout(200);
        const onElement = (await readLive(page, c.tag, [prop]))?.[prop];
        // A string prop that carries JSON receives the JSON text
        const got = typeof onElement === 'string' ? onElement : JSON.stringify(onElement);
        expect.soft(got, `${prop} on the element after editing the data source`).toBe(JSON.stringify(next));
        expect.soft(await page.getByTestId('pg-code').innerText(), 'code after editing the data source').toContain(marker);
      }

      expect(errors, 'console and page errors').toEqual([]);
    });
  }
});
