/**
 * Runs a real demo module (public/assets/js/demos/*.js) and harvests the `.demo-block` elements it renders,
 * one tab at a time. The harvested nodes are live: template expressions are already resolved and the module's
 * event handlers and element references still work, because the nodes are moved, not copied.
 */
export interface HarvestedBlock {
  id: string;
  tab: string;
  title: string;
  description: string;
  /** Live element; append it into a card. */
  node: HTMLElement;
  /** Static markup for the Copy / Show Code actions. */
  code: string;
}

interface ModuleInfo {
  file: string;
  fn: string;
}

// Native import: Vite must not rewrite or bundle files that are served from /public
const nativeImport = new Function('u', 'return import(u)') as (u: string) => Promise<Record<string, () => unknown>>;

const STAGE_ID = 'demo-harvest-stage';

/** The interactive playground tabs / blocks belong in the Design Studio, not in the variant gallery. */
const isPlayground = (text: string) => /playground|workbench/i.test(text);

function getStage(): HTMLElement {
  let stage = document.getElementById(STAGE_ID);
  if (!stage) {
    stage = document.createElement('div');
    stage.id = STAGE_ID;
    stage.setAttribute('data-theme', 'light');
    // Rendered (so elements hydrate and measure) but out of sight
    stage.style.cssText = 'position:fixed;left:-20000px;top:0;width:1100px;pointer-events:none;';
    stage.className = 'demo-scope';
    document.body.appendChild(stage);
  }
  return stage;
}

const settle = (root: HTMLElement, quiet = 450, max = 3000) =>
  new Promise<void>((resolve) => {
    let timer: number;
    const done = () => {
      obs.disconnect();
      window.clearTimeout(timer);
      window.clearTimeout(cap);
      resolve();
    };
    const obs = new MutationObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(done, quiet);
    });
    obs.observe(root, { childList: true, subtree: true, attributes: false });
    timer = window.setTimeout(done, quiet);
    const cap = window.setTimeout(done, max);
  });

const cleanCode = (el: HTMLElement) => {
  const clone = el.cloneNode(true) as HTMLElement;
  clone.querySelectorAll('[data-harvested]').forEach((n) => n.removeAttribute('data-harvested'));
  clone.removeAttribute('data-harvested');
  clone.querySelectorAll('.hydrated').forEach((n) => {
    n.classList.remove('hydrated');
    if (!n.getAttribute('class')) n.removeAttribute('class');
  });
  return clone.outerHTML.replace(/\s+class=""/g, '').replace(/\s+hydrated/g, '');
};

const humanize = (raw: string) =>
  raw
    .replace(/^(ui|lm)-/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

/** "Tab 1", "Demo 2", "Section 3" and the like say nothing about what the example shows. */
const isGeneric = (t: string) => !t.trim() || /^(tab|demo|section|example|item|button)\s*\d*$/i.test(t.trim());

/** The best name a tab button offers: label property or attribute, visible text, aria-label, title, then its id. */
function tabName(tb: HTMLElement): string {
  const candidates = [
    (tb as unknown as { label?: unknown }).label,
    tb.getAttribute('label'),
    tb.textContent,
    tb.getAttribute('aria-label'),
    tb.getAttribute('title'),
    tb.id ? humanize(tb.id.replace(/^(btn|button|tab)[-_]?/i, '').replace(/(btn|button|tab)$/i, '')) : '',
  ];
  for (const c of candidates) {
    const t = typeof c === 'string' ? c.replace(/\s+/g, ' ').trim() : '';
    if (t && !isGeneric(t)) return t;
  }
  return '';
}

/** Names a block from its content when it has no heading: first inner heading, else the main component it shows. */
function deriveTitle(block: HTMLElement): string {
  const heading = block.querySelector('h1, h2, h3, h4, h5, h6, legend, .demo-title, [slot="title"]');
  const ht = (heading?.textContent ?? '').replace(/\s+/g, ' ').trim();
  if (ht && !isGeneric(ht)) return ht;
  const comps = Array.from(block.querySelectorAll('*')).filter((e) => /^ui-|^lm-/i.test(e.tagName) && !/^ui-(button|icon|label|divider)$/i.test(e.tagName));
  const main = comps[0];
  if (!main) return '';
  const name = humanize(main.tagName.toLowerCase());
  const mode = ['variant', 'type', 'mode', 'orientation', 'shape'].map((a) => main.getAttribute(a)).find((v) => v && v !== 'default');
  return mode ? `${name} · ${humanize(mode)}` : name;
}

/** Pulls the title and first description paragraph out of a block (the card header shows them instead). */
function detach(block: HTMLElement, fallbackTitle: string) {
  let title = fallbackTitle;
  let description = '';
  const h = block.querySelector(':scope > h3, :scope > h2, :scope > h4, :scope > .card-header-icon') as HTMLElement | null;
  if (h) {
    title = (h.textContent ?? '').trim() || fallbackTitle;
    const next = h.nextElementSibling;
    h.remove();
    if (next && next.tagName === 'P') {
      description = (next.textContent ?? '').replace(/\s+/g, ' ').trim();
      next.remove();
    }
  }
  if (!h && isGeneric(title)) title = deriveTitle(block) || title;
  flattenWrapper(block);
  return { title, description };
}

/**
 * Many demos wrap their content in a styled panel (background, shadow, border). The card already provides a
 * container, so a second box inside it looks doubled; strip the decoration from single-child wrapper chains.
 */
function flattenWrapper(block: HTMLElement) {
  let el: HTMLElement | null = block;
  for (let depth = 0; depth < 3 && el; depth++) {
    const kids = Array.from(el.children).filter((c) => c.tagName !== 'SCRIPT') as HTMLElement[];
    if (kids.length !== 1) return;
    const child = kids[0];
    const st = child.getAttribute('style') ?? '';
    if (/background|box-shadow|border/i.test(st) && !child.tagName.startsWith('UI-')) {
      child.style.background = 'transparent';
      child.style.boxShadow = 'none';
      child.style.border = '0';
      child.style.borderRadius = '0';
      child.style.padding = '0';
      child.style.margin = '0';
      child.style.maxWidth = 'none';
    }
    el = child;
  }
}

export async function harvestModule(
  key: string,
  info: ModuleInfo,
  onBlock: (b: HarvestedBlock) => void,
  isCancelled: () => boolean,
  title0 = key
): Promise<void> {
  const stage = getStage();
  const section = document.createElement('div');
  section.id = key;
  stage.appendChild(section);

  let counter = 0;
  // A demo often renders its first tab on load, and clicking that tab renders the same block again
  const seen = new Set<string>();
  const emit = (b: Omit<HarvestedBlock, 'id'>) => {
    const sig = `${b.title}|${(b.node.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 300)}`;
    if (seen.has(sig)) return;
    seen.add(sig);
    onBlock({ id: `${key}-${counter++}`, ...b });
  };
  const harvest = (tab: string) => {
    const blocks = Array.from(section.querySelectorAll('.demo-block, .demo-card, .demo-card-elite')).filter(
      (b) => !b.hasAttribute('data-harvested') && !b.parentElement?.closest('[data-harvested]')
    ) as HTMLElement[];
    // Outer blocks first; skip blocks nested inside another unharvested block
    const top = blocks.filter((b) => !blocks.some((o) => o !== b && o.contains(b)));
    top.forEach((b) => {
      b.setAttribute('data-harvested', '1');
      const code = cleanCode(b);
      const { title, description } = detach(b, tab);
      if (isPlayground(tab) || isPlayground(title) || isPlayground(b.id)) return;
      emit({ tab, title, description, node: b, code });
    });
    return top.length;
  };

  try {
    const mod = await nativeImport(`/assets/js/demos/${info.file}`);
    if (isCancelled()) return;
    await mod[info.fn]();
    await settle(section, 600, 3500);
    if (isCancelled()) return;

    // Tabs: the module's own nav buttons. Usually inside .demo-controls-wrapper, otherwise the first element that
    // holds three or more ui-button children.
    let tabs = Array.from(section.querySelectorAll('.demo-controls-wrapper ui-button, .demo-grid-wrapper > ui-button')) as HTMLElement[];
    if (!tabs.length) {
      // Buttons inside a component (ui-code-preview's JS/TS/HTML/CSS switcher) are its own UI, not demo tabs
      const nav = Array.from(section.querySelectorAll('*')).find(
        (el) =>
          Array.from(el.children).filter((c) => c.tagName === 'UI-BUTTON').length >= 3 &&
          !el.closest('ui-code-preview')
      );
      if (nav) tabs = Array.from(nav.children).filter((c) => c.tagName === 'UI-BUTTON') as HTMLElement[];
    }
    const navRoot = tabs[0]?.parentElement ?? null;

    /** Where the active tab renders: a *Container element, else the last top-level child that is not the nav. */
    const contentRoot = (): HTMLElement | null => {
      const named = section.querySelector('[id$="DemoContainer"], [id$="Container"]') as HTMLElement | null;
      if (named && !named.contains(navRoot)) return named;
      const tops = Array.from(section.children).filter(
        (c) => !(navRoot && c.contains(navRoot)) && c.tagName !== 'SCRIPT' && c.tagName !== 'STYLE'
      ) as HTMLElement[];
      return tops[tops.length - 1] ?? null;
    };
    /** Takes whatever the content root rendered as one block (for tabs without .demo-block wrappers). */
    const takeContent = (label: string): boolean => {
      const root = contentRoot();
      // A root that still holds harvested blocks belongs to a scroll-nav demo whose sections were already taken
      if (!root || root.hasAttribute('data-harvested') || root.querySelector('[data-harvested]')) return false;
      if ((root.textContent ?? '').trim().length < 20 && !root.querySelector('ui-button, ui-input, ui-card')) return false;
      const holder = document.createElement('div');
      while (root.firstChild) holder.appendChild(root.firstChild);
      if (!holder.firstChild) return false;
      holder.setAttribute('data-harvested', '1');
      const { title, description } = detach(holder, label);
      if (isPlayground(label) || isPlayground(title)) return true;
      emit({ tab: label, title, description, node: holder, code: cleanCode(holder) });
      return true;
    };
    /**
     * Some "tabs" are really actions: they open a dialog / drawer straight on document.body instead of rendering a
     * demo (dialog: Nested, Auth). Close what they opened and offer a card whose button runs the same action.
     */
    const launcherCard = (label: string, tab: HTMLElement) => {
      const holder = document.createElement('div');
      holder.setAttribute('data-harvested', '1');
      holder.style.cssText = 'display:flex;justify-content:center;padding:8px 0;';
      const btn = document.createElement('ui-button');
      btn.setAttribute('label', `Open ${label}`);
      btn.setAttribute('variant', 'primary');
      // The original tab stays in the off-screen stage with its listener, so clicking it replays the action
      btn.addEventListener('click', () => ((tab.shadowRoot?.querySelector('button') as HTMLElement | null) ?? tab).click());
      holder.appendChild(btn);
      emit({ tab: label, title: label, description: 'Opens when you press the button.', node: holder, code: cleanCode(tab) });
    };
    const closeOpened = (before: Set<Element>): boolean => {
      const opened = Array.from(document.body.children).filter(
        (c) => !before.has(c) && c.id !== STAGE_ID && /^UI-/.test(c.tagName)
      ) as (HTMLElement & { hide?: () => unknown })[];
      opened.forEach((el) => {
        el.hide?.();
        window.setTimeout(() => el.isConnected && el.remove(), 400);
      });
      return opened.length > 0;
    };

    const firstLabel = (tabs[0] && tabName(tabs[0])) || title0;
    const firstCount = harvest(firstLabel);
    if (!firstCount && !tabs.length) takeContent(title0);

    for (let i = 0; i < tabs.length; i++) {
      if (isCancelled()) return;
      const tb = tabs[i];
      const label = tabName(tb) || 'Tab ' + (i + 1);
      const inner = tb.shadowRoot?.querySelector('button') as HTMLElement | null;
      const before = new Set(Array.from(document.body.children));
      (inner ?? tb).click();
      await settle(section, 500, 3000);
      const openedOverlay = closeOpened(before);
      if (!harvest(label) && !takeContent(label) && openedOverlay && !isPlayground(label)) launcherCard(label, tb);
    }
  } catch (e) {
    console.warn(`Demo module ${key} failed`, e);
    throw e;
  }
}

type TooltipEl = HTMLElement & {
  trigger?: string;
  showDelay?: number;
  hideDelay?: number;
  show?: () => Promise<void>;
  hide?: () => Promise<void>;
  toggle?: () => Promise<void>;
};
const rewired = new WeakSet<Element>();

/**
 * ui-tooltip removes its trigger listeners in disconnectedCallback and only adds them in componentDidLoad, so a
 * harvested tooltip goes deaf once it is moved into a card. Re-attach hover / click / focus through its public
 * show() / hide() / toggle() methods (call after the node is in place).
 */
function rewireTooltips(root: HTMLElement) {
  root.querySelectorAll<TooltipEl>('ui-tooltip').forEach((tt) => {
    const target = tt.querySelector<HTMLElement>('[slot="target"]');
    if (rewired.has(tt) || !target || typeof tt.show !== 'function') return;
    rewired.add(tt);
    let timer = 0;
    const later = (fn: () => void, ms = 0) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(fn, ms);
    };
    const show = () => later(() => tt.show?.(), tt.showDelay);
    const hide = () => later(() => tt.hide?.(), tt.hideDelay);
    switch (tt.trigger ?? 'hover') {
      case 'hover':
        target.addEventListener('mouseenter', show);
        target.addEventListener('mouseleave', hide);
        break;
      case 'click':
        target.addEventListener('click', () => tt.toggle?.());
        break;
      case 'focus':
        target.addEventListener('focusin', show);
        target.addEventListener('focusout', hide);
        break;
    }
  });
}

/**
 * ui-popover has the same move problem as ui-tooltip, but it re-runs its trigger setup whenever `trigger`
 * changes, so bouncing that property re-attaches its listeners.
 */
function rewirePopovers(root: HTMLElement) {
  root.querySelectorAll<HTMLElement & { trigger?: string }>('ui-popover').forEach((pop) => {
    const trigger = pop.trigger;
    if (rewired.has(pop) || !trigger || trigger === 'manual') return;
    rewired.add(pop);
    pop.trigger = 'manual';
    pop.trigger = trigger;
  });
}

/** Re-attaches listeners that components dropped when a harvested block was moved into its card. */
export function reviveMoved(root: HTMLElement) {
  rewireTooltips(root);
  rewirePopovers(root);
}

/** Removes everything the harvest left in the off-screen stage (call when the selected component changes). */
export function clearHarvest() {
  document.getElementById(STAGE_ID)?.replaceChildren();
}
