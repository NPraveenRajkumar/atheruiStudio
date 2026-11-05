import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Copy, Check, Code2, Database, ListTree, Loader2, Grid3x3 } from 'lucide-react';
import { ALL_COMPONENTS } from '../../data/components';
import { LiveElement } from '../ui/LiveElement';
import { ComponentPicker, ComponentPickerDrawer } from '../common/ComponentPicker';
import { ComponentItem } from '../../types';
import { DataSourceDialog } from '../common/DataSourceDialog';
import { dataPropsOf, forElement, sampleFor } from '../../data/sample';
import demoFixes from '../../data/demoFixes.json';
import demoModules from '../../data/demoModules.json';
import { VARIANT_RULES, flagContext } from '../../data/variantContext';
import { harvestModule, clearHarvest, reviveMoved, HarvestedBlock } from '../../utils/harvestDemo';
import { iconForExample } from './exampleIcons';
import { PREVIEW } from '../../data/previewTemplates';
import { useTheme } from '../../context/ThemeContext';
import { gridStyle, usePreviewGrid } from '../../utils/previewGrid';

interface Demo {
  title: string;
  description: string;
  html: string;
}
type DemoMap = Record<string, Demo[]>;

const MODULES = demoModules as Record<string, { file: string; fn: string }>;

/** Component id -> real demo modules (where the module key differs from the id). */
const MODULE_ALIASES: Record<string, string[]> = {
  button: ['button', 'button-group'],
  'dialog-box': ['dialog'],
  'smart-context-menu': ['smart-menu'],
  dropdown: ['dropdown', 'dropdown-subtitle'],
};
const realKeysFor = (id: string): string[] =>
  id.startsWith('demo:') ? [id.slice(5)].filter((k) => MODULES[k]) : (MODULE_ALIASES[id] ?? [id]).filter((k) => MODULES[k]);

/** Mounts a harvested live block inside a card. */
const NodeHost: React.FC<{ node: HTMLElement }> = ({ node }) => {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    // Scroll-nav demos (tooltip) hide every section but the active one; each card shows its section on its own
    if (node.style.display === 'none') node.style.display = '';
    el.appendChild(node);
    reviveMoved(node);
    return () => {
      if (node.parentElement === el) el.removeChild(node);
    };
  }, [node]);
  return <div ref={host} className="w-full" />;
};

const normTitle = (t: string) => t.replace(/[^\p{L}\p{N}]+/gu, ' ').trim().toLowerCase();
const FIXES = demoFixes as Record<string, Record<string, string>>;

/**
 * Some snapshots in demos.json were saved with unresolved template expressions (`${sizes.map(...)}`) and truncated
 * markup. Where the real demo module could be run to re-capture the block, the fixed markup replaces it;
 * the rest are flagged so they show an explanation instead of garbled text.
 */
const repairDemo = (key: string, d: Demo): Demo & { incomplete?: boolean } => {
  const body = d.html.replace(/<script[\s\S]*?<\/script>/g, '');
  if (!body.includes('${')) return d;
  const h3 = (d.html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/)?.[1] ?? '').replace(/<[^>]+>/g, '');
  const fixed = FIXES[key]?.[normTitle(h3 || d.title)];
  if (!fixed) return { ...d, incomplete: true };
  const scripts = (d.html.match(/<script[\s\S]*?<\/script>/g) ?? []).filter((sc) => !sc.includes('${')).join('\n');
  return { ...d, html: fixed + scripts };
};

/** Component id -> recorded demo keys in demos.json (where the key differs from the id). */
const DEMO_KEYS: Record<string, string[]> = {
  button: ['button', 'split-button'],
  'dialog-box': ['dialog', 'smart-dialog'],
  'aside-panel': ['aside'],
  'smart-context-menu': ['multi-level-context-menu', 'smart-menu'],
  dropdown: ['dropdown', 'dropdown-subtitle'],
};

/** First readable paragraph of a demo, used when the demo has no description of its own. */
const firstParagraph = (html: string) => {
  const tpl = document.createElement('template');
  tpl.innerHTML = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const p = Array.from(tpl.content.querySelectorAll('p')).find((el) => (el.textContent ?? '').trim().length > 12);
  return (p?.textContent ?? '').replace(/\s+/g, ' ').trim();
};


/** Small inline avatar picture so avatar props have something to decorate (no network needed). */
const AVATAR_SRC =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="#6366f1"/><text x="32" y="42" font-size="28" text-anchor="middle" fill="#fff" font-family="sans-serif">AL</text></svg>');

/** An icon name that exists in each icon library the component supports. */
const ICON_BY_LIBRARY: Record<string, string> = {
  lucide: 'star',
  fontawesome: 'star',
  ionicons: 'star-outline',
  bootstrap: 'star',
  remixicon: 'star-line',
  google: 'star',
  icons8: 'star',
  iconoir: 'star',
  emoji: '⭐',
};

/**
 * A prop value on its own often changes nothing you can see (badgeColor needs a badge, loadingPosition needs
 * loading, align needs a width...). This returns the companion props that make the chosen value visible.
 */
const contextFor = (comp: ComponentItem, name: string, option?: unknown): Record<string, unknown> => {
  const has = (n: string) => comp.props.some((p) => p.name === n);
  const ctx: Record<string, unknown> = {};
  const add = (n: string, v: unknown) => {
    if (has(n) && n !== name) ctx[n] = v;
  };
  if (/^badge/.test(name)) add('badge', '8');
  if (/^counter/.test(name)) add('counter', 5);
  if (/^avatar/.test(name)) {
    add('avatarSrc', AVATAR_SRC);
    add('avatarAlt', 'Ada Lovelace');
  }
  if (/^description/.test(name)) {
    add('description', 'Supporting description');
    // The description sits above / below / left / right of the label, so the control needs room
    add('fullWidth', true);
    add('icon', 'zap');
    if (has('iconLibrary')) ctx.iconLibrary = 'lucide';
  }
  // A colour tints outline / soft buttons; the default look hides it
  if (name === 'color') {
    const variant = comp.props.find((p) => p.name === 'variant');
    const pick = ['soft', 'solid', 'primary'].find((v) => variant?.options?.includes(v));
    if (pick) ctx.variant = pick;
  }
  if (/^subtitle/.test(name)) add('subtitle', 'Subtitle text');
  if (/^icon/.test(name)) {
    add('icon', name === 'iconLibrary' && typeof option === 'string' ? ICON_BY_LIBRARY[option] ?? 'star' : 'star');
    if (name !== 'iconLibrary' && has('iconLibrary')) ctx.iconLibrary = 'lucide';
    if (has('library')) ctx.library = 'lucide';
  }
  // Components that name the icon set `library` need an icon, or every value looks the same
  if (name === 'library') add('icon', typeof option === 'string' ? ICON_BY_LIBRARY[option] ?? 'star' : 'star');
  if (/^loading/.test(name)) add('loading', true);
  if (name === 'align' || name === 'justify') {
    add('width', '240px');
  }
  if (name === 'target' || name === 'rel') add('href', '#');
  return ctx;
};

/** The values a colour prop really understands; the option lists also hold unrelated variant names. */
const SEMANTIC_COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'none'];

/** Colour props (badgeColor, counterColor, color...) only show values that produce a colour. */
const displayOptions = (name: string, options: string[]) => {
  if (/colou?r$/i.test(name) && !/^custom/i.test(name)) {
    const semantic = SEMANTIC_COLORS.filter((c) => options.includes(c));
    if (semantic.length >= 3) return semantic;
  }
  return options;
};

const kebab = (s: string) => s.replace(/([A-Z])/g, '-$1').toLowerCase();

/** HTML + script snippet that assigns each data prop to the element. */
const dataSnippet = (tag: string, data: Record<string, unknown>) => {
  const assigns = Object.entries(data)
    .map(([k, v]) => `  el.${k} = ${JSON.stringify(v, null, 2).split('\n').join('\n  ')};`)
    .join('\n');
  return `<${tag}></${tag}>\n\n<script>\n  const el = document.querySelector('${tag}');\n${assigns}\n</script>`;
};

/** Card content produced from a recorded demo or from the component's props. */
interface Example {
  key: string;
  title: string;
  description: string;
  code: string;
  render: React.ReactNode;
}

/**
 * Renders recorded demo markup and runs its inline scripts.
 * `document` lookups inside a demo are scoped to its own card, so two demos that reuse element ids do not collide.
 */
const DemoStage: React.FC<{ html: string }> = ({ html }) => {
  const host = useRef<HTMLDivElement>(null);
  const [scriptError, setScriptError] = useState<string | null>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    setScriptError(null);
    // Demos were recorded with other hosting prefixes; serve their assets from /assets here
    const fixPaths = (t: string) => t.replace(/\/(?:build|atom)\/assets\//g, '/assets/');
    const tpl = document.createElement('template');
    tpl.innerHTML = fixPaths(html);
    const scripts = Array.from(tpl.content.querySelectorAll('script'));
    const codes = scripts.map((s) => fixPaths(s.textContent ?? ''));
    scripts.forEach((s) => s.remove());

    // The card header already shows the title and description, so drop the demo's own copy.
    const h3 = tpl.content.querySelector('.demo-block > h3');
    if (h3) {
      const next = h3.nextElementSibling;
      h3.remove();
      if (next && next.tagName === 'P') next.remove();
    }
    el.innerHTML = '';
    el.appendChild(tpl.content);

    const scoped = new Proxy(document, {
      get(target, key) {
        if (key === 'getElementById') return (id: string) => el.querySelector(`#${CSS.escape(id)}`);
        if (key === 'querySelector') return (sel: string) => el.querySelector(sel);
        if (key === 'querySelectorAll') return (sel: string) => el.querySelectorAll(sel);
        const v = (target as any)[key];
        return typeof v === 'function' ? v.bind(target) : v;
      },
    });
    codes.forEach((code) => {
      try {
        new Function('document', 'container', code)(scoped, el);
      } catch (e) {
        console.warn('Demo script failed', e);
        setScriptError((e as Error).message);
      }
    });
    return () => {
      el.innerHTML = '';
    };
  }, [html]);

  return (
    <div className="w-full">
      <div ref={host} className="w-full flex flex-wrap items-center justify-center gap-4" />
      {scriptError && (
        <p className="mt-4 text-[11px] text-amber-400/90 text-center">
          Interactive part unavailable: {scriptError}. This recorded demo relies on helper code that is not included in demos.json.
        </p>
      )}
    </div>
  );
};

export const ExamplesView: React.FC<{ initialId?: string; onSelect?: (id: string) => void }> = ({ initialId, onSelect }) => {
  const [demos, setDemos] = useState<DemoMap | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [shown, setShown] = useState<Record<string, boolean>>({});
  // Previews follow the app theme (surface-themes.css adapts the demos' hard-coded colours to the dark surface);
  // the Preview surface toggle overrides it until the app theme changes again
  const { theme: appTheme } = useTheme();
  const [surface, setSurface] = useState<'light' | 'dark'>(appTheme);
  useEffect(() => setSurface(appTheme), [appTheme]);
  const [showGrid, setShowGrid] = usePreviewGrid();
  const [selectedId, setSelectedIdState] = useState(initialId ?? 'button');
  const setSelectedId = (id: string) => {
    setSelectedIdState(id);
    onSelect?.(id);
  };
  useEffect(() => {
    if (initialId) setSelectedIdState(initialId);
  }, [initialId]);
  const [dataOpen, setDataOpen] = useState(false);
  const [harvested, setHarvested] = useState<HarvestedBlock[]>([]);
  const [harvesting, setHarvesting] = useState(false);
  const [harvestError, setHarvestError] = useState<string | null>(null);

  // Demo stylesheet (.demo-block, .demo-controls-wrapper ...): the original CSS with every selector scoped to .demo-scope
  useEffect(() => {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = '/assets/styles/demo.scoped.css';
    document.head.appendChild(l);
    return () => l.remove();
  }, []);

  // The recorded demos are large; load them only when this page is opened.
  useEffect(() => {
    import('../../data/demos.json')
      .then((m) => setDemos((m.default ?? m) as unknown as DemoMap))
      .catch(() => setDemos({}));
  }, []);

  const demosFor = (c: ComponentItem): (Demo & { incomplete?: boolean })[] => {
    if (!demos) return [];
    const keys = c.id.startsWith('demo:') ? [c.id.slice(5)] : DEMO_KEYS[c.id] ?? [c.id];
    return keys.flatMap((k) => (demos[k] ?? []).filter((d) => !/playground|workbench/i.test(d.title)).map((d) => repairDemo(k, d)));
  };

  const hasProps = (c: ComponentItem) => c.props.some((p) => !p.readonly && ((p.options?.length ?? 0) > 1 || p.type === 'boolean'));
  const hasExamples = (c: ComponentItem) =>
    hasProps(c) || realKeysFor(c.id).length > 0 || demosFor(c).length > 0 || Object.keys(sampleFor(c.id)).length > 0;

  const comp: ComponentItem = ALL_COMPONENTS.find((c) => c.id === selectedId) ?? ALL_COMPONENTS[0];

  // Data source for the prop-based examples (demos bring their own data)
  const sampleData = useMemo(() => {
    const sample = sampleFor(comp.id);
    return Object.fromEntries(dataPropsOf(comp).filter((p) => sample[p.name] !== undefined).map((p) => [p.name, sample[p.name]]));
  }, [comp]);
  const [data, setData] = useState<Record<string, unknown>>(sampleData);
  useEffect(() => setData(sampleData), [sampleData]);

  // Run the real demo module(s) for the selected component and collect the blocks they render
  useEffect(() => {
    const keys = realKeysFor(comp.id);
    clearHarvest();
    setHarvested([]);
    setHarvestError(null);
    if (!keys.length) {
      setHarvesting(false);
      return;
    }
    let cancelled = false;
    setHarvesting(true);
    (async () => {
      for (const k of keys) {
        try {
          await harvestModule(k, MODULES[k], (b) => !cancelled && setHarvested((prev) => [...prev, b]), () => cancelled, `${comp.name} demo`);
        } catch (e) {
          if (!cancelled) setHarvestError(`${k}: ${(e as Error).message}`);
        }
        if (cancelled) return;
      }
      if (!cancelled) setHarvesting(false);
    })();
    return () => {
      cancelled = true;
      clearHarvest();
    };
  }, [comp.id]);

  const examples: Example[] = useMemo(() => {
    // Live blocks from the real demo modules (template expressions resolved, handlers intact)
    const harvestedCards: Example[] = harvested.map((b) => ({
      key: b.id,
      title: b.title,
      description: b.description,
      code: b.code,
      render: <NodeHost node={b.node} />,
    }));
    // Recorded snapshots are only the fallback for components that have no real demo module
    const recorded = (realKeysFor(comp.id).length ? [] : demosFor(comp)).map((d, i) => ({
      key: `demo-${i}`,
      title: d.title,
      description: d.description || firstParagraph(d.html),
      code: d.html.trim(),
      render: d.incomplete ? (
        <p className="text-xs text-amber-500 text-center max-w-md">
          This snapshot in demos.json is incomplete (its template expressions and part of the markup were not saved), so it cannot be rendered.
        </p>
      ) : (
        <DemoStage html={d.html} />
      ),
    }));

    // Variant matrix generated from the component's real props.
    const hasSlot = comp.slots.some((s) => s.name === 'default');
    const rules = VARIANT_RULES[comp.id];
    const labelProp = comp.props.find((p) => ['label', 'cardTitle', 'title', 'text'].includes(p.name) && p.type === 'string');
    const base: Record<string, unknown> = labelProp ? { [labelProp.name]: comp.name } : {};
    Object.entries(rules?.base ?? {}).forEach(([k, v]) => {
      if (comp.props.some((p) => p.name === k)) base[k] = v;
    });
    const themeProp = comp.props.find((p) => p.name === 'theme' && p.options?.includes('dark'));
    if (themeProp) base.theme = surface; // components with their own theme prop follow the preview surface

    /** Companion props for a value: component-specific rules first, then the generic ones. */
    const contextOf = (name: string, value: unknown): Record<string, unknown> => {
      const specific = typeof value === 'boolean' ? flagContext(comp.id, name) : rules?.context?.(name, value);
      return specific ?? contextFor(comp, name, value);
    };
    const snippet = (name: string, value: unknown) => {
      const merged: Record<string, unknown> = { ...base, ...contextOf(name, value), [name]: value };
      delete merged.theme;
      const attrs = Object.entries(merged)
        .filter(([, v]) => v !== undefined && v !== '' && v !== false)
        .map(([k, v]) => {
          if (k === 'avatarSrc') return 'avatar-src="…"';
          if (typeof v === 'boolean') return kebab(k);
          return `${kebab(k)}="${String(v).replace(/"/g, '&quot;').replace(/\n/g, ' ')}"`;
        });
      return `<${comp.tag} ${attrs.join(' ')}>${hasSlot ? comp.name : ''}</${comp.tag}>`;
    };
    // Data the component cannot render without (items, columns, nodes...) goes into every card. Optional enhancements
    // (an input's autocomplete suggestions, say) would otherwise pop up in every single variant, so they only appear
    // in the "Rendered from data source" card.
    const REQUIRED_DATA = /^(items|options|data|columns|nodes|events|regions|panels|actions|steps|commands|values|avatars|snippets|tabs|sourceItems|targetItems|milestones|swatches|messages|bottomItems|topItems|menuItems|filterOptions|marks|customSteps)$/;
    const requiredData = Object.fromEntries(Object.entries(data).filter(([k]) => REQUIRED_DATA.test(k)));
    const serialise = (src: Record<string, unknown>) =>
      Object.fromEntries(Object.entries(src).map(([k, v]) => [k, forElement(comp.props.find((p) => p.name === k), v)]));
    const live = (props: Record<string, unknown>, withAllData = false) => (
      <LiveElement
        tag={comp.tag}
        props={{ ...base, ...serialise(withAllData ? data : requiredData), ...props }}
        text={hasSlot ? comp.name : undefined}
      />
    );
    // Form fields need a fixed width so a row of them lines up
    const itemWidth = comp.id === 'input' ? 'w-60' : '';
    const generated: Example[] = [];
    comp.props
      .filter((p) => !p.readonly && (p.options?.length ?? 0) > 1 && !rules?.skip?.includes(p.name))
      .forEach((p) => {
        const curated = rules?.options?.[p.name]?.filter((o) => p.options!.includes(o));
        const options = curated && curated.length >= 2 ? curated : displayOptions(p.name, p.options!);
        generated.push({
          key: `prop-${p.name}`,
          title: `${p.name} values`,
          description: p.description,
          code: options.map((o) => snippet(p.name, o)).join('\n'),
          render: (
            <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 w-full">
              {options.map((o) => {
                const ctx = contextOf(p.name, o);
                return (
                  <div key={o} className={`flex flex-col items-center gap-3 ${ctx.fullWidth ? 'w-64' : itemWidth}`}>
                    {live({ ...ctx, [p.name]: o })}
                    <span className="text-xs font-mono text-sky-300/90">{o}</span>
                  </div>
                );
              })}
            </div>
          ),
        });
      });
    // An overlay's open flag is driven by its trigger button, so an off/on pair for it would show nothing
    const openProp = PREVIEW[comp.tag]?.opener?.prop;
    const flags = comp.props.filter(
      (p) => !p.readonly && p.type === 'boolean' && p.name !== openProp && !rules?.skip?.includes(p.name)
    );
    if (flags.length)
      generated.push({
        key: 'flags',
        title: 'Boolean flags',
        description: 'Each flag shown off and on side by side, so the difference is visible.',
        code: flags.map((p) => snippet(p.name, true)).join('\n'),
        render: (
          <div className="grid grid-cols-1 gap-4 w-full">
            {flags.map((p) => {
              const ctx = contextOf(p.name, true);
              return (
                <div key={p.name} className="rounded-lg border border-neutral-800 p-4 flex flex-col gap-3 min-w-0">
                  <div>
                    <span className="text-xs font-mono text-sky-300">{p.name}</span>
                    {p.description && <p className="text-[11px] text-neutral-400 mt-1 leading-snug">{p.description}</p>}
                  </div>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
                    {([false, true] as const).map((on) => (
                      <div key={String(on)} className="flex flex-col items-center gap-2 min-w-0">
                        <div className={`flex items-center justify-center min-h-16 w-full min-w-0 [&>*]:max-w-full ${itemWidth}`}>
                          {live({ ...ctx, [p.name]: on })}
                        </div>
                        <span className={`text-[10px] font-mono ${on ? 'text-emerald-400' : 'text-neutral-500'}`}>
                          {p.name}={String(on)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ),
      });
    (rules?.extras ?? []).forEach((x) => {
      const attrsOf = (props: Record<string, unknown>) =>
        Object.entries({ ...base, ...props })
          .filter(([, v]) => v !== undefined && v !== '' && v !== false)
          .map(([k, v]) => {
            if (typeof v === 'string' && v.startsWith('data:')) return `${kebab(k)}="…"`;
            return typeof v === 'boolean' ? kebab(k) : `${kebab(k)}="${String(v).replace(/"/g, '&quot;')}"`;
          })
          .join(' ');
      generated.push({
        key: x.key,
        title: x.title,
        description: x.description,
        code: x.items.map((i) => `<${comp.tag} ${attrsOf(i.props)}></${comp.tag}>`).join('\n'),
        render: (
          <div className="flex flex-wrap items-end justify-center gap-x-10 gap-y-6 w-full">
            {x.items.map((i) => (
              <div key={i.label} className="flex flex-col items-center gap-3">
                {live(i.props)}
                <span className="text-xs font-mono text-sky-300/90">{i.label}</span>
              </div>
            ))}
          </div>
        ),
      });
    });
    if (Object.keys(data).length) {
      generated.unshift({
        key: 'data-source',
        title: 'Rendered from data source',
        description: `Uses the ${Object.keys(data).join(', ')} data from the Data Source panel.`,
        code: dataSnippet(comp.tag, data),
        render: live({}, true),
      });
    }
    return [...harvestedCards, ...recorded, ...generated];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comp, demos, data, harvested, surface]);

  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
    setDataOpen(false);
  }, [selectedId]);

  const copy = (code: string, key: string) => {
    navigator.clipboard.writeText(code);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full h-[calc(100dvh-var(--header-h,3.5rem))] flex bg-black text-slate-100 text-left">
      {/* Left: component list */}
      <ComponentPicker
        selectedId={comp.id}
        onSelect={setSelectedId}
        filter={demos ? hasExamples : hasProps}
        className="hidden md:flex w-60 shrink-0"
      />

      {/* Center: example cards */}
      <div ref={mainRef} className="flex-1 overflow-y-auto min-w-0 pb-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          {/* Title bar stays pinned while the cards scroll underneath */}
          <div className="sticky top-0 z-20 -mx-4 md:-mx-8 px-4 md:px-8 py-3 bg-black/95 border-b border-neutral-900 space-y-3">
          <ComponentPickerDrawer
            selectedId={comp.id}
            onSelect={setSelectedId}
            filter={demos ? hasExamples : hasProps}
          />
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">{comp.name} Examples</h1>
              <p className="text-xs text-neutral-400 mt-1 font-mono">
                {comp.tag ? `<${comp.tag}> · ` : ''}
                {examples.length} examples
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              {dataPropsOf(comp).length > 0 && (
                <button
                  onClick={() => setDataOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900 text-neutral-200 cursor-pointer"
                  title="View and edit the data this component receives"
                >
                  <Database className="w-3.5 h-3.5 text-sky-400" />
                  Data Source
                  <span className="font-mono text-[10px] text-neutral-500">
                    {dataPropsOf(comp).filter((p) => data[p.name] !== undefined).length}/{dataPropsOf(comp).length}
                  </span>
                </button>
              )}
              <button
                onClick={() => setShowGrid(!showGrid)}
                role="switch"
                aria-checked={showGrid}
                title="Show grid lines in the previews"
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border cursor-pointer ${
                  showGrid ? 'border-sky-500/40 bg-sky-500/15 text-sky-300' : 'border-neutral-800 hover:text-white'
                }`}
              >
                <Grid3x3 className="w-3.5 h-3.5" />
                Grid
              </button>
              <span>Preview surface</span>
              <div className="flex items-center p-0.5 rounded-lg border border-neutral-800">
                {(['light', 'dark'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSurface(m)}
                    className={`px-2.5 py-1 rounded-md capitalize cursor-pointer ${surface === m ? 'bg-sky-500/20 text-sky-300' : 'hover:text-white'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
          </div>

          <DataSourceDialog
            open={dataOpen}
            onClose={() => setDataOpen(false)}
            comp={comp}
            data={data}
            onChange={(name, v) => setData((d) => ({ ...d, [name]: v }))}
            onReset={() => setData(sampleData)}
          />

          {!demos && (
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> Loading demos…
            </div>
          )}

          {harvesting && (
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> Rendering demo variants… ({harvested.length} ready)
            </div>
          )}
          {harvestError && <p className="text-xs text-rose-400">Some demos failed to start: {harvestError}</p>}

          {examples.map((ex, i) => (
            <section
              key={`${comp.id}-${ex.key}`}
              ref={(el) => {
                cardRefs.current[ex.key] = el;
              }}
              className="rounded-2xl bg-black border border-neutral-900 p-4 scroll-mt-28"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Example {i + 1}</div>
                  <h3 className="text-base font-bold text-white mt-1">{ex.title}</h3>
                  {ex.description && <p className="text-xs text-neutral-400 mt-1 max-w-2xl">{ex.description}</p>}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => copy(ex.code, ex.key)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900 text-neutral-300 text-xs cursor-pointer"
                    >
                      {copied === ex.key ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied === ex.key ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={() => setShown((s) => ({ ...s, [ex.key]: !s[ex.key] }))}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900 text-neutral-300 text-xs cursor-pointer"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>{shown[ex.key] ? 'Hide Code' : 'Show Code'}</span>
                    </button>
                </div>
              </div>

              <div
                data-theme={surface}
                // relative: absolutely positioned bits of a demo (ui-list's screen-reader helper and minimap) are
                // placed against this box, not the page, so they cannot stretch the page with empty space
                className={`demo-scope relative rounded-xl border border-neutral-800 p-4 min-h-[96px] flex items-center justify-center overflow-x-auto [&_ui-list]:relative [&_.demo-block]:mb-0 [&_.demo-block]:w-full [&_.demo-card]:w-full [&_.demo-card-elite]:w-full [&_.demo-card-elite]:!p-0 [&_.demo-card-elite]:!bg-transparent [&_.demo-card-elite]:!border-0 [&_.demo-card-elite]:!shadow-none [&_.demo-grid-3]:!grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] ${
                  comp.id === 'loader' ? 'relative overflow-hidden min-h-[180px]' : ''
                } ${surface === 'light' ? 'bg-[#ffffff] text-[#0f172a]' : 'bg-[#0b0f19] text-[#e2e8f0]'}`}
                style={{
                  // A transform makes this box the containing block for position:fixed, so a fullscreen loader
                  // covers its own card instead of the whole page and the rest of the page stays usable
                  ...(comp.id === 'loader' ? { transform: 'translateZ(0)' } : {}),
                  ...(showGrid ? gridStyle(surface === 'dark') : {}),
                }}
              >
                {ex.render}
              </div>

              {shown[ex.key] && (
                <pre className="mt-4 rounded-xl border border-neutral-900 bg-black p-4 text-xs font-mono text-sky-200 overflow-x-auto leading-relaxed max-h-96">
                  {ex.code}
                </pre>
              )}
            </section>
          ))}

          {demos && examples.length === 0 && <p className="text-sm text-neutral-500">No examples available for this component yet.</p>}
        </div>
      </div>

      {/* Right: example index (kept on the right so it never competes with the component list) */}
      <aside className="hidden xl:flex w-64 shrink-0 flex-col border-l border-neutral-900 min-h-0">
        <div className="px-4 pt-6 pb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 shrink-0">
          <ListTree className="w-3 h-3" /> Examples &amp; Demos
        </div>
        <div className="flex-1 overflow-y-auto pb-6">
          {examples.map((ex) => (
              <button
                key={ex.key}
                onClick={() => cardRefs.current[ex.key]?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="w-full flex items-center gap-2 text-left px-4 py-1.5 text-xs text-neutral-400 hover:text-white hover:bg-neutral-900 border-l-2 border-transparent hover:border-emerald-400 cursor-pointer"
              >
                {React.createElement(iconForExample(ex.key, ex.title), { className: 'w-3.5 h-3.5 shrink-0 text-emerald-500/80' })}
                <span className="min-w-0 truncate">{ex.title}</span>
              </button>
            ))}
        </div>
      </aside>
    </div>
  );
};
