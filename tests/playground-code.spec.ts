import { test, expect } from '@playwright/test';
import { ALL_COMPONENTS } from '../src/data/components';
import { buildCode, controlFor, defaultValue, attrOf, CodeProp, PropValue } from '../src/utils/playgroundCode';
import type { ComponentItem, ComponentProp, Framework } from '../src/types';

// Pure checks of the code generator: no browser, so every component runs in seconds.

const FRAMEWORKS: Framework[] = ['HTML', 'Stencil', 'React', 'Angular', 'Vue'];
const TRICKY = 'a"b&c';

/** A value different from the default for every editable prop. */
function changedProps(c: ComponentItem): CodeProp[] {
  const out: CodeProp[] = [];
  for (const prop of c.props) {
    const control = controlFor(prop);
    if (!control) continue;
    const d = defaultValue(prop, control);
    let value: PropValue | undefined;
    if (control.kind === 'boolean') value = !d;
    else if (control.kind === 'number') value = d === 7 ? 8 : 7;
    else if (control.kind === 'select') value = control.options.find((o) => o !== d);
    else value = TRICKY;
    if (value !== undefined) out.push({ prop, value });
  }
  return out;
}

/** Reads the attributes off the opening tag the way a browser would. */
function parseAttrs(html: string): Record<string, string> {
  const open = html.match(/^<[\w-]+((?:\s+[^\s=>]+(?:="[^"]*")?)*)\s*>/)?.[1] ?? '';
  const out: Record<string, string> = {};
  for (const m of open.matchAll(/([^\s=>]+)(?:="([^"]*)")?/g)) {
    out[m[1]] = (m[2] ?? '').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  }
  return out;
}

const prop = (over: Partial<ComponentProp>): ComponentProp => ({ name: 'x', attr: 'x', type: 'boolean', default: '', description: '', ...over });

test.describe('generated code', () => {
  test('a boolean set to false is written out, so it does not fall back to a default of true', () => {
    const p = prop({ name: 'showArrow', attr: 'show-arrow', default: 'true' });
    const html = buildCode({ tag: 'ui-x', framework: 'HTML', props: [{ prop: p, value: false }], dataProps: [], data: {} });
    expect(html).toBe('<ui-x show-arrow="false"></ui-x>');
    expect(buildCode({ tag: 'ui-x', framework: 'HTML', props: [{ prop: p, value: true }], dataProps: [], data: {} })).toBe('<ui-x show-arrow></ui-x>');
  });

  test('false is explicit in every framework', () => {
    const p = prop({ name: 'showArrow', attr: 'show-arrow', default: 'true' });
    const expected: Record<Framework, string> = {
      HTML: 'show-arrow="false"',
      Stencil: 'showArrow={false}',
      React: 'showArrow={false}',
      Angular: '[showArrow]="false"',
      Vue: ':show-arrow="false"',
    };
    for (const fw of FRAMEWORKS) {
      expect(buildCode({ tag: 'ui-x', framework: fw, props: [{ prop: p, value: false }], dataProps: [], data: {} }), fw).toContain(expected[fw]);
    }
  });

  test('a prop with no attribute is set as a property, not as an attribute that is ignored', () => {
    const p = prop({ name: 'rawValue', attr: undefined, type: 'string' });
    const html = buildCode({ tag: 'ui-x', framework: 'HTML', props: [{ prop: p, value: 'hi' }], dataProps: [], data: {} });
    expect(html).toContain("el.rawValue = \"hi\";");
    expect(html.split('\n')[0]).toBe('<ui-x></ui-x>');
  });

  test('data is written out, and </script> in it cannot end the script block', () => {
    const items = prop({ name: 'items', attr: undefined, type: 'Item[]' });
    const data = { items: [{ label: '</script><b>' }] };
    const html = buildCode({ tag: 'ui-x', framework: 'HTML', props: [], dataProps: [items], data });
    expect(html.match(/<\/script>/g)).toHaveLength(1);
    expect(html).toContain('\\u003c/script>');
    for (const fw of FRAMEWORKS) {
      const code = buildCode({ tag: 'ui-x', framework: fw, props: [], dataProps: [items], data });
      expect(code, fw).toContain('items');
    }
  });

  test('slot text is escaped', () => {
    const html = buildCode({ tag: 'ui-x', framework: 'HTML', props: [], slotText: '<b>&</b>', dataProps: [], data: {} });
    expect(html).toContain('&lt;b>&amp;&lt;/b>');
  });

  test('values with quotes and ampersands survive in every attribute-based framework', () => {
    const p = prop({ name: 'label', attr: 'label', type: 'string' });
    for (const fw of ['HTML', 'Angular'] as Framework[]) {
      const html = buildCode({ tag: 'ui-x', framework: fw, props: [{ prop: p, value: TRICKY }], dataProps: [], data: {} });
      expect(parseAttrs(html).label, fw).toBe(TRICKY);
    }
  });
});

test.describe('every component: all editable props reach the HTML', () => {
  for (const c of ALL_COMPONENTS) {
    test(c.tag, () => {
      const props = changedProps(c);
      const html = buildCode({ tag: c.tag, framework: 'HTML', props, dataProps: [], data: {} });
      const tag = html.split('\n')[0];
      const attrs = parseAttrs(tag);
      const wrong: string[] = [];
      for (const { prop: p, value } of props) {
        const a = attrOf(p);
        if (!a) {
          if (!html.includes(`el.${p.name} = ${JSON.stringify(value)};`)) wrong.push(`${p.name}: no attribute and not set as a property`);
        } else if (typeof value === 'boolean') {
          if (value ? !(a in attrs) || attrs[a] !== '' : attrs[a] !== 'false') wrong.push(`${p.name}: boolean ${value} written as ${JSON.stringify(attrs[a])}`);
        } else if (attrs[a] !== String(value)) {
          wrong.push(`${p.name}: wrote ${JSON.stringify(attrs[a])}, expected ${JSON.stringify(String(value))}`);
        }
      }
      expect(wrong).toEqual([]);
    });
  }

  test('the other frameworks mention every changed prop', () => {
    const missing: string[] = [];
    for (const c of ALL_COMPONENTS) {
      const props = changedProps(c);
      for (const fw of ['Stencil', 'React', 'Angular', 'Vue'] as Framework[]) {
        const code = buildCode({ tag: c.tag, framework: fw, props, dataProps: [], data: {} });
        for (const { prop: p, value } of props) {
          // React/Stencil/Angular(property) use the prop name; Vue and Angular(attribute) use the attribute
          const names = [p.name, attrOf(p) ?? ''].filter(Boolean);
          const found = names.some((n) => new RegExp(`(^|[\\s\\[:])${n}[=\\]]`).test(code) || (value === true && new RegExp(`\\s${n}(\\s|>)`).test(code)));
          if (!found) missing.push(`${fw} ${c.tag}.${p.name}`);
        }
      }
    }
    expect(missing).toEqual([]);
  });
});
