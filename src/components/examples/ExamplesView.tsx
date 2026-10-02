import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Copy, Check, Code2, ListTree, Loader2 } from 'lucide-react';
import { ALL_COMPONENTS } from '../../data/components';
import { LiveElement } from '../ui/LiveElement';
import { ComponentPicker, ComponentPickerDrawer } from '../common/ComponentPicker';
import { ComponentItem } from '../../types';
import { DataSourcePanel } from '../common/DataSourcePanel';
import { dataPropsOf, sampleFor } from '../../data/sample';

interface Demo {
  title: string;
  description: string;
  html: string;
}
type DemoMap = Record<string, Demo[]>;

/** Component id -> demo keys in demos.json (where the key differs from the id). */
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

const kebab = (s: string) => s.replace(/([A-Z])/g, '-$1').toLowerCase();

/** HTML + script snippet that assigns each data prop to the element. */
const dataSnippet = (tag: string, data: Record<string, unknown>) => {
  const assigns = Object.entries(data)
    .map(([k, v]) => `  el.${k} = ${JSON.stringify(v, null, 2).split('\n').join('\n  ')};`)
    .join('\n');
  return `<${tag}></${tag}>\n\n<script>\n  const el = document.querySelector('${tag}');\n${assigns}\n</script>`;
};

/** Card content produced either from a recorded demo or from the component's props. */
interface Example {
  key: string;
  title: string;
  description: string;
  code: string;
  render: React.ReactNode;
}

/**
 * Renders demo markup and runs its inline scripts. `document` lookups inside a demo are scoped to its
 * own card, so two demos that reuse the same element ids do not collide.
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

export const ExamplesView: React.FC = () => {
  const [demos, setDemos] = useState<DemoMap | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [shown, setShown] = useState<Record<string, boolean>>({});
  const [selectedId, setSelectedId] = useState('button');

  // The recorded demos are large; load them only when this page is opened.
  useEffect(() => {
    import('../../data/demos.json')
      .then((m) => setDemos((m.default ?? m) as unknown as DemoMap))
      .catch(() => setDemos({}));
  }, []);

  const demosFor = (c: ComponentItem): Demo[] =>
    demos ? (c.id.startsWith('demo:') ? demos[c.id.slice(5)] ?? [] : (DEMO_KEYS[c.id] ?? [c.id]).flatMap((k) => demos[k] ?? [])) : [];

  const hasProps = (c: ComponentItem) => c.props.some((p) => !p.readonly && ((p.options?.length ?? 0) > 1 || p.type === 'boolean'));
  const hasExamples = (c: ComponentItem) => hasProps(c) || demosFor(c).length > 0 || Object.keys(sampleFor(c.id)).length > 0;

  // Demos that belong to no component (dashboards, pages, forms) are listed as full-page demos
  const orphans = useMemo(() => {
    if (!demos) return [];
    const used = new Set<string>([...ALL_COMPONENTS.map((c) => c.id), ...Object.values(DEMO_KEYS).flat()]);
    return Object.keys(demos)
      .filter((k) => !used.has(k) && demos[k].length)
      .map((k) => ({ id: `demo:${k}`, name: k.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ') }));
  }, [demos]);

  const orphan = selectedId.startsWith('demo:') ? orphans.find((o) => o.id === selectedId) : undefined;
  const realComp = ALL_COMPONENTS.find((c) => c.id === selectedId);
  const comp: ComponentItem =
    realComp ??
    (orphan
      ? ({ id: orphan.id, name: orphan.name, tag: '', category: 'Utility', description: '', totalProps: 0, totalEvents: 0, variantsCount: 0, status: 'stable', color: '#38bdf8', props: [], events: [], slots: [], usageCode: { html: '', stencil: '', react: '', angular: '', vue: '' } } as ComponentItem)
      : ALL_COMPONENTS[0]);

  // Data source for the prop-based examples (recorded demos bring their own data)
  const sampleData = useMemo(() => {
    const sample = sampleFor(comp.id);
    return Object.fromEntries(dataPropsOf(comp).filter((p) => sample[p.name] !== undefined).map((p) => [p.name, sample[p.name]]));
  }, [comp]);
  const [data, setData] = useState<Record<string, unknown>>(sampleData);
  useEffect(() => setData(sampleData), [sampleData]);

  const examples: Example[] = useMemo(() => {
    const recorded = demosFor(comp).map((d, i) => ({
      key: `demo-${i}`,
      title: d.title,
      description: d.description || firstParagraph(d.html),
      code: d.html.trim(),
      render: <DemoStage html={d.html} />,
    }));

    // Variant matrix generated from the component's real props.
    const hasSlot = comp.slots.some((s) => s.name === 'default');
    const labelProp = comp.props.find((p) => ['label', 'cardTitle', 'title', 'text'].includes(p.name) && p.type === 'string');
    const base: Record<string, unknown> = labelProp ? { [labelProp.name]: comp.name } : {};
    const themeProp = comp.props.find((p) => p.name === 'theme' && p.options?.includes('dark'));
    if (themeProp) base.theme = 'dark';
    const snippet = (name: string, value: unknown) => {
      const attrs: string[] = [];
      if (labelProp) attrs.push(`${kebab(labelProp.name)}="${comp.name}"`);
      attrs.push(typeof value === 'boolean' ? kebab(name) : `${kebab(name)}="${value}"`);
      return `<${comp.tag} ${attrs.join(' ')}>${hasSlot ? comp.name : ''}</${comp.tag}>`;
    };
    const live = (props: Record<string, unknown>) => (
      <LiveElement tag={comp.tag} props={{ ...base, ...data, ...props }} text={hasSlot ? comp.name : undefined} />
    );
    const generated: Example[] = [];
    comp.props
      .filter((p) => !p.readonly && (p.options?.length ?? 0) > 1)
      .forEach((p) => {
        generated.push({
          key: `prop-${p.name}`,
          title: `${p.name} values`,
          description: p.description,
          code: p.options!.map((o) => snippet(p.name, o)).join('\n'),
          render: (
            <>
              {p.options!.map((o) => (
                <div key={o} className="flex flex-col items-center gap-2">
                  {live({ [p.name]: o })}
                  <span className="text-[10px] font-mono text-neutral-500">{o}</span>
                </div>
              ))}
            </>
          ),
        });
      });
    const flags = comp.props.filter((p) => !p.readonly && p.type === 'boolean');
    if (flags.length)
      generated.push({
        key: 'flags',
        title: 'Boolean flags',
        description: 'Each flag switched on individually.',
        code: flags.map((p) => snippet(p.name, true)).join('\n'),
        render: (
          <>
            {flags.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2">
                {live({ [p.name]: true })}
                <span className="text-[10px] font-mono text-neutral-500">{p.name}</span>
              </div>
            ))}
          </>
        ),
      });
    if (Object.keys(data).length) {
      generated.unshift({
        key: 'data-source',
        title: 'Rendered from data source',
        description: `Uses the ${Object.keys(data).join(', ')} data from the Data Source panel.`,
        code: dataSnippet(comp.tag, data),
        render: live({}),
      });
    }
    return [...recorded, ...generated];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comp, demos, data]);

  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [selectedId]);

  const copy = (code: string, key: string) => {
    navigator.clipboard.writeText(code);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex bg-black text-slate-100 text-left">
      {/* Left: component list */}
      <ComponentPicker
        selectedId={comp.id}
        onSelect={setSelectedId}
        filter={demos ? hasExamples : hasProps}
        extra={orphans.length ? { title: 'Full-page demos', items: orphans } : undefined}
        className="hidden md:flex w-60 shrink-0"
      />

      {/* Center: example cards */}
      <div ref={mainRef} className="flex-1 overflow-y-auto min-w-0 py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <ComponentPickerDrawer
            selectedId={comp.id}
            onSelect={setSelectedId}
            filter={demos ? hasExamples : hasProps}
            extra={orphans.length ? { title: 'Full-page demos', items: orphans } : undefined}
          />
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">{comp.name} Examples</h1>
            <p className="text-xs text-neutral-400 mt-1 font-mono">{comp.tag ? `<${comp.tag}> · ` : ''}{examples.length} examples</p>
          </div>

          <DataSourcePanel comp={comp} data={data} onChange={(name, v) => setData((d) => ({ ...d, [name]: v }))} />

          {!demos && (
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> Loading demos…
            </div>
          )}

          {examples.map((ex, i) => (
            <section
              key={`${comp.id}-${ex.key}`}
              ref={(el) => {
                cardRefs.current[ex.key] = el;
              }}
              className="rounded-2xl bg-black border border-neutral-900 p-6 scroll-mt-6"
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
                className="rounded-xl border border-neutral-900 bg-black p-8 min-h-[140px] flex items-center justify-center overflow-x-auto"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
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
          {examples.map((ex, i) => (
            <button
              key={ex.key}
              onClick={() => cardRefs.current[ex.key]?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="w-full text-left px-4 py-1.5 text-xs text-neutral-400 hover:text-white hover:bg-neutral-900 border-l-2 border-transparent hover:border-emerald-400 cursor-pointer"
            >
              <span className="text-neutral-600 font-mono mr-2">{i + 1}</span>
              {ex.title}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};
