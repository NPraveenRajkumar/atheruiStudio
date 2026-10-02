import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Copy, Check, RotateCcw, Monitor, Tablet, Smartphone, Sliders, Code2, Eye } from 'lucide-react';
import { ALL_COMPONENTS } from '../../data/components';
import { ComponentProp, Framework } from '../../types';
import { ComponentPicker, ComponentPickerDrawer } from '../common/ComponentPicker';
import { useTheme } from '../../context/ThemeContext';
import { DataSourcePanel } from '../common/DataSourcePanel';
import { dataPropsOf, isDataProp, sampleFor } from '../../data/sample';
import { PREVIEW } from '../../data/previewTemplates';
import { mountPreview, Mounted } from '../../utils/mountPreview';

interface PlaygroundViewProps {
  initialComponentId?: string;
}

type Control =
  | { kind: 'boolean' }
  | { kind: 'number' }
  | { kind: 'select'; options: string[] }
  | { kind: 'text' };

type Values = Record<string, string | number | boolean | undefined>;

const unquote = (s: string) => s.replace(/^['"]|['"]$/g, '');

/** Decide which control (if any) edits a prop, based on its real type. Complex types return null. */
function controlFor(p: ComponentProp): Control | null {
  if (p.readonly) return null;
  if (p.options?.length) return { kind: 'select', options: p.options };
  const t = p.type.trim();
  if (t === 'boolean') return { kind: 'boolean' };
  if (t === 'number') return { kind: 'number' };
  if (t === 'string' || /^(number \| string|string \| number)$/.test(t)) return { kind: 'text' };
  return null;
}

function defaultValue(p: ComponentProp, c: Control): string | number | boolean | undefined {
  const d = p.default.trim();
  if (c.kind === 'boolean') return d === 'true';
  if (c.kind === 'number') return d === '' || isNaN(Number(d)) ? undefined : Number(d);
  if (c.kind === 'select') return d ? unquote(d) : undefined;
  return d ? unquote(d) : '';
}

const PRIORITY = ['label', 'cardTitle', 'title', 'text', 'value', 'variant', 'color', 'size', 'shape', 'type', 'disabled', 'loading', 'selected', 'checked', 'open', 'placeholder'];
const LABEL_PROPS = ['label', 'cardTitle', 'title', 'text'];
const GROUPS: [string, RegExp][] = [
  ['Content', /^(label|cardTitle|title|text|value|defaultValue|placeholder|description|subtitle|helperText|errorText|infoText|hintTooltip|ghostText|name|href|target|rel)$/],
  ['Appearance', /^(variant|color|size|shape|density|elevation|rounded|pill|circle|glass|gradient|glow|bordered|border|borderRadius|animation|pattern|theme|ripple|noRipple|reveal|tilt|magnetic|hoverable|backdropSheen)/i],
  ['State', /^(disabled|loading|selected|checked|open|visible|active|readonly|required|invalid|collapsed|closed|flipped|indeterminate|progress|loadingPosition)$/],
  ['Icon & Media', /^(icon|avatar|img|cover|ribbon|clearIcon|passwordIcon|passwordVisibleIcon)/i],
  ['Badge & Counter', /^(badge|counter)/i],
  ['Layout', /^(width|height|minWidth|maxWidth|fullWidth|grow|align|justify|layout|position|aspectRatio|displayMode|inline|cols|rows|minRows|maxRows|autoResize)/i],
  ['Accessibility & i18n', /^(aria|rtl|tabIndex|customTabIndex|autofocus|enterkeyhint|inputmode)/i],
];
const groupOf = (name: string) => (GROUPS.find(([, re]) => re.test(name)) ?? ['Behavior'])[0];
const GROUP_ORDER = [...GROUPS.map(([g]) => g), 'Behavior'];
const pascal = (t: string) => t.split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join('');
const kebab = (s: string) => s.replace(/([A-Z])/g, '-$1').toLowerCase();
const same = (a: unknown, b: unknown) => a === b || (a === undefined && b === '') || (a === '' && b === undefined);

export const PlaygroundView: React.FC<PlaygroundViewProps> = ({ initialComponentId = 'button' }) => {
  const [selectedCompId, setSelectedCompId] = useState(initialComponentId);
  const [framework, setFramework] = useState<Framework>('HTML');
  const [copied, setCopied] = useState(false);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const { theme } = useTheme();
  // The canvas starts in the app theme but can be switched on its own to check both looks
  const [canvas, setCanvas] = useState<'black' | 'light'>(theme === 'dark' ? 'black' : 'light');
  useEffect(() => setCanvas(theme === 'dark' ? 'black' : 'light'), [theme]);
  const [slotText, setSlotText] = useState('Content');
  const [log, setLog] = useState('Ready for interaction');

  const comp = ALL_COMPONENTS.find((c) => c.id === selectedCompId) || ALL_COMPONENTS[0];

  const controls = useMemo(
    () =>
      comp.props
        .map((p) => ({ prop: p, control: controlFor(p) }))
        .filter((x): x is { prop: ComponentProp; control: Control } => x.control !== null)
        .sort((a, b) => {
          const ra = PRIORITY.indexOf(a.prop.name);
          const rb = PRIORITY.indexOf(b.prop.name);
          return (ra < 0 ? 999 : ra) - (rb < 0 ? 999 : rb) || a.prop.name.localeCompare(b.prop.name);
        }),
    [comp]
  );
  const grouped = useMemo(() => {
    const m = new Map<string, typeof controls>();
    controls.forEach((c) => {
      const g = groupOf(c.prop.name);
      m.set(g, [...(m.get(g) ?? []), c]);
    });
    return GROUP_ORDER.filter((g) => m.has(g)).map((g) => ({ group: g, items: m.get(g)! }));
  }, [controls]);
  const [closedGroups, setClosedGroups] = useState<Record<string, boolean>>({});

  // Resizable inspector: width is a percentage of the area right of the component list
  const areaRef = useRef<HTMLDivElement>(null);
  const [inspectorPct, setInspectorPct] = useState<number>(() => {
    try {
      const saved = Number(localStorage.getItem('playground.inspectorPct'));
      return saved >= 20 && saved <= 75 ? saved : 50;
    } catch {
      return 50;
    }
  });
  const [dragging, setDragging] = useState(false);

  const startResize = (e: React.PointerEvent) => {
    e.preventDefault();
    setDragging(true);
    const move = (ev: PointerEvent) => {
      const rect = areaRef.current?.getBoundingClientRect();
      if (!rect) return;
      const pct = ((rect.right - ev.clientX) / rect.width) * 100;
      setInspectorPct(Math.min(75, Math.max(20, pct)));
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  useEffect(() => {
    try {
      localStorage.setItem('playground.inspectorPct', String(Math.round(inspectorPct)));
    } catch {
      /* storage unavailable */
    }
  }, [inspectorPct]);
  const complexProps = comp.props.filter((p) => !controlFor(p) && !p.readonly && !isDataProp(p));
  const dataProps = useMemo(() => dataPropsOf(comp), [comp]);

  // Data source: structured inputs (items, columns, options, regions...) seeded with real sample data
  const sampleData = useMemo(() => {
    const sample = sampleFor(comp.id);
    return Object.fromEntries(dataProps.filter((p) => sample[p.name] !== undefined).map((p) => [p.name, sample[p.name]]));
  }, [comp, dataProps]);
  const [data, setData] = useState<Record<string, unknown>>(sampleData);
  useEffect(() => setData(sampleData), [sampleData]);
  const hasDefaultSlot = comp.slots.some((s) => s.name === 'default' || s.name === '');

  const initialValues = useMemo(() => {
    const v: Values = {};
    let seeded = false;
    controls.forEach(({ prop, control }) => {
      let d = defaultValue(prop, control);
      // Seed one text prop so the component is visible on the canvas
      if (control.kind === 'text' && LABEL_PROPS.includes(prop.name) && !d && !seeded) {
        d = comp.name;
        seeded = true;
      }
      // Match the dark canvas when the component has its own theme switch
      if (prop.name === 'theme' && control.kind === 'select' && control.options.includes('dark')) d = 'dark';
      const forced = (PREVIEW[comp.tag]?.props ?? {})[prop.name];
      if (forced !== undefined) d = forced as typeof d;
      v[prop.name] = d;
    });
    return v;
  }, [controls, comp]);

  const [values, setValues] = useState<Values>(initialValues);
  useEffect(() => setValues(initialValues), [initialValues]);
  useEffect(() => setSelectedCompId(initialComponentId), [initialComponentId]);

  // Live render the real custom element (inside its parent / with its children when a template exists)
  const stageRef = useRef<HTMLDivElement>(null);
  const targetsRef = useRef<HTMLElement[]>([]);
  const [ready, setReady] = useState(0);
  const spec = PREVIEW[comp.tag] ?? {};

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let cancelled = false;
    let mounted: Mounted | null = null;
    targetsRef.current = [];
    setLog(`Loading <${comp.tag}>…`);
    mountPreview(comp.tag, stage).then((m) => {
      if (cancelled) {
        if (!('missing' in m)) m.cleanup();
        return;
      }
      if ('missing' in m) {
        setLog(`<${comp.tag}> is not defined in the bundled library version`);
        return;
      }
      mounted = m;
      targetsRef.current = m.targets;
      m.targets.forEach((el) =>
        comp.events.forEach((e) =>
          el.addEventListener(e.name, (ev: Event) => {
            const detail = (ev as CustomEvent).detail;
            let text = '';
            try {
              text = detail === undefined || detail === null ? '' : typeof detail === 'object' ? JSON.stringify(detail) : String(detail);
            } catch {
              text = '[unserializable]';
            }
            setLog(`${e.name}${text ? ' → ' + text.slice(0, 80) : ''}`);
          })
        )
      );
      setLog(m.spec.hint ?? 'Ready for interaction');
      setReady((n) => n + 1);
    });
    return () => {
      cancelled = true;
      mounted?.cleanup();
    };
  }, [comp]);

  useEffect(() => {
    targetsRef.current.forEach((el: any) => {
      controls.forEach(({ prop }) => {
        el[prop.name] = values[prop.name] === '' ? undefined : values[prop.name];
      });
    });
  }, [values, controls, comp, ready]);

  useEffect(() => {
    targetsRef.current.forEach((el: any) => {
      dataProps.forEach((p) => {
        el[p.name] = data[p.name];
      });
    });
  }, [data, dataProps, comp, ready]);

  useEffect(() => {
    if (!hasDefaultSlot || spec.children) return;
    targetsRef.current.forEach((el) => (el.textContent = slotText));
  }, [slotText, hasDefaultSlot, comp, ready]);

  const changed = controls.filter(({ prop, control }) => {
    const v = values[prop.name];
    return v !== undefined && v !== '' && !same(v, defaultValue(prop, control));
  });

  const code = useMemo(() => {
    const tag = comp.tag;
    const inner = hasDefaultSlot ? `\n  ${slotText}\n` : '';
    const attr = (name: string, p: ComponentProp, v: unknown) => (typeof v === 'boolean' ? (v ? name : null) : `${name}="${v}"`);
    const wrap = (open: string, name: string) => `<${open}>${inner}</${name}>`;
    const items = changed.map(({ prop }) => ({ prop, v: values[prop.name] }));
    const a = (fn: (prop: ComponentProp, v: unknown) => string | null) => {
      const parts = items.map(({ prop, v }) => fn(prop, v)).filter(Boolean) as string[];
      return parts.length ? ' ' + parts.join(' ') : '';
    };
    const htmlAttrs = a((p, v) => attr(p.attr || kebab(p.name), p, v));
    const dataSet = dataProps.filter((p) => data[p.name] !== undefined);
    const json = (name: string, indent = '') =>
      JSON.stringify(data[name], null, 2)
        .split('\n')
        .map((l, i) => (i === 0 ? l : indent + l))
        .join('\n');
    const bind = (fmt: (n: string) => string) => (dataSet.length ? ' ' + dataSet.map((p) => fmt(p.name)).join(' ') : '');
    switch (framework) {
      case 'HTML': {
        const script = dataSet.length
          ? `\n\n<script>\n  const el = document.querySelector('${tag}');\n${dataSet.map((p) => `  el.${p.name} = ${json(p.name, '  ')};`).join('\n')}\n</script>`
          : '';
        return wrap(tag + htmlAttrs, tag) + script;
      }
      case 'Stencil': {
        const s = a((p, v) => (typeof v === 'string' ? `${p.name}="${v}"` : `${p.name}={${v}}`)) + bind((n) => `${n}={this.${n}}`);
        const fields = dataSet.map((p) => `  ${p.name} = ${json(p.name, '  ')};`).join('\n\n');
        return (fields ? `// in your component class\n${fields}\n\n` : '') + wrap(tag + s, tag);
      }
      case 'React': {
        const s =
          a((p, v) => (typeof v === 'string' ? `${p.name}="${v}"` : typeof v === 'boolean' && v ? p.name : `${p.name}={${v}}`)) +
          bind((n) => `${n}={${n}}`);
        const consts = dataSet.map((p) => `const ${p.name} = ${json(p.name)};`).join('\n\n');
        return `${consts ? consts + '\n\n' : ''}export default function Example() {\n  return ${wrap(tag + s, tag)};\n}`;
      }
      case 'Angular': {
        const s =
          a((p, v) => (typeof v === 'string' ? `${p.attr || kebab(p.name)}="${v}"` : `[${p.name}]="${v}"`)) + bind((n) => `[${n}]="${n}"`);
        const fields = dataSet.map((p) => `  ${p.name} = ${json(p.name, '  ')};`).join('\n\n');
        return (fields ? `// component.ts\n${fields}\n\n// component.html\n` : '') + wrap(tag + s, tag);
      }
      default: {
        const s =
          a((p, v) => (typeof v === 'string' ? `${p.attr || kebab(p.name)}="${v}"` : `:${p.attr || kebab(p.name)}="${v}"`)) +
          bind((n) => `:${n}="${n}"`);
        const consts = dataSet.map((p) => `const ${p.name} = ${json(p.name)};`).join('\n\n');
        return `${consts ? `<script setup>\n${consts}\n</script>\n\n` : ''}<template>\n  ${wrap(pascal(tag) + s, pascal(tag))}\n</template>`;
      }
    }
  }, [comp, changed, values, framework, slotText, hasDefaultSlot, data, dataProps]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setVal = (name: string, v: string | number | boolean | undefined) => setValues((s) => ({ ...s, [name]: v }));
  const viewportClass = { desktop: 'w-full', tablet: 'max-w-[768px]', mobile: 'max-w-[375px]' }[viewport];
  // Fixed colours (not palette classes) so the canvas stays black or white whatever the app theme is
  const canvasClass = canvas === 'black' ? 'bg-[#000000] text-[#ffffff]' : 'bg-[#ffffff] text-[#0f172a]';
  const inputCls =
    'w-full bg-black border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500';

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col bg-black text-slate-100">
      <div className="h-14 border-b border-neutral-900 bg-black px-6 flex items-center justify-between gap-4 select-none shrink-0">
        <div className="flex items-center gap-3">
          <ComponentPickerDrawer selectedId={comp.id} onSelect={setSelectedCompId} />
          <Sliders className="w-4 h-4 text-sky-400" />
          <h1 className="text-sm font-bold text-white tracking-tight">Interactive Live Playground</h1>
          <span className="text-neutral-700 hidden sm:inline">|</span>
          <span className="text-xs font-mono text-sky-300">&lt;{comp.tag}&gt;</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-black p-1 rounded-lg border border-neutral-800">
            {([['desktop', Monitor], ['tablet', Tablet], ['mobile', Smartphone]] as const).map(([m, Icon]) => (
              <button
                key={m}
                onClick={() => setViewport(m)}
                title={m}
                className={`p-1.5 rounded-md cursor-pointer ${viewport === m ? 'bg-sky-500/20 text-sky-400' : 'text-neutral-400 hover:text-white'}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
          <div className="flex items-center bg-black p-1 rounded-lg border border-neutral-800 text-xs">
            {(['black', 'light'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCanvas(c)}
                className={`px-2 py-0.5 rounded text-[11px] cursor-pointer capitalize ${canvas === c ? 'bg-sky-500/20 text-sky-300 font-medium' : 'text-neutral-400 hover:text-white'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setValues(initialValues);
              setData(sampleData);
              setLog('Props reset to defaults');
            }}
            className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg bg-black hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden min-h-0">
      <ComponentPicker selectedId={comp.id} onSelect={setSelectedCompId} className="hidden md:flex w-56 shrink-0" />
      <div ref={areaRef} className={`flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0 ${dragging ? 'select-none cursor-col-resize' : ''}`}>
        <div className="flex-1 flex flex-col min-w-0 min-h-0">
        {/* Live render of the real custom element */}
        <div className="flex-[3] flex flex-col border-b border-neutral-900 overflow-hidden bg-black min-h-0">
          <div className="h-9 px-4 border-b border-neutral-900 bg-black flex items-center gap-2 text-xs text-neutral-400 shrink-0">
            <Eye className="w-3.5 h-3.5 text-sky-400" />
            <span>Live Render Canvas</span>
            <span className="font-mono text-neutral-600">&lt;{comp.tag}&gt;</span>
          </div>
          <div className="flex-1 overflow-auto p-6 flex items-start justify-center">
            <div data-theme={canvas === 'black' ? 'dark' : 'light'} className={`${viewportClass} min-h-[300px] rounded-2xl border border-neutral-800 p-8 flex items-center justify-center overflow-auto ${canvasClass}`}>
              <div ref={stageRef} className="max-w-full w-full flex justify-center" />
            </div>
          </div>
          <div className="h-10 px-4 border-t border-neutral-900 bg-black flex items-center gap-2 text-xs shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-neutral-300 text-[11px] truncate">{log}</span>
          </div>
        </div>

        {/* Generated code */}
        <div className="flex-[2] flex flex-col bg-black overflow-hidden text-left min-h-[180px]">
          <div className="p-3 border-b border-neutral-900 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              Generated Code
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="px-3 py-2 border-b border-neutral-900 flex items-center gap-1 overflow-x-auto shrink-0">
            {(['HTML', 'React', 'Stencil', 'Angular', 'Vue'] as Framework[]).map((fw) => (
              <button
                key={fw}
                onClick={() => setFramework(fw)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md cursor-pointer ${
                  framework === fw ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {fw}
              </button>
            ))}
          </div>
          <div className="flex-1 p-4 overflow-auto font-mono text-xs text-sky-200 leading-relaxed bg-black">
            <pre className="whitespace-pre-wrap font-mono">{code}</pre>
          </div>
          {comp.events.length > 0 && (
            <div className="p-3 border-t border-neutral-900 text-[11px] text-neutral-400 max-h-32 overflow-auto shrink-0">
              <span className="text-sky-400 font-semibold">Events:</span>{' '}
              <span className="font-mono">{comp.events.map((e) => e.name).join(', ')}</span>
            </div>
          )}
        </div>
        </div>
        {/* Props inspector — generated from the component's real props */}
        {/* Drag handle: resize the canvas / inspector split (double-click resets to 50%) */}
        <div
          role="separator"
          aria-orientation="vertical"
          title="Drag to resize · double-click to reset"
          onPointerDown={startResize}
          onDoubleClick={() => setInspectorPct(50)}
          className={`hidden lg:block w-1.5 shrink-0 cursor-col-resize border-l border-neutral-900 transition-colors ${
            dragging ? 'bg-sky-500/60' : 'bg-black hover:bg-sky-500/40'
          }`}
        />
        <div
          style={{ flexBasis: `${inspectorPct}%` }}
          className="lg:shrink-0 lg:grow-0 min-w-0 w-full lg:w-auto bg-black p-4 overflow-y-auto space-y-3 text-left"
        >
          <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
            <span className="text-xs font-bold text-white tracking-wider uppercase">Props Inspector</span>
            <span className="text-[10px] font-mono text-sky-300">
              {controls.length} editable / {comp.props.length}
            </span>
          </div>

          <DataSourcePanel comp={comp} data={data} onChange={(name, v) => setData((d) => ({ ...d, [name]: v }))} />

          {hasDefaultSlot && (
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300">Slot content</label>
              <input value={slotText} onChange={(e) => setSlotText(e.target.value)} className={inputCls} />
            </div>
          )}

          {controls.length === 0 && <p className="text-xs text-neutral-500">This component has no primitive props to edit.</p>}

          {grouped.map(({ group, items }) => {
            const open = !closedGroups[group];
            const touched = items.filter(({ prop }) => !same(values[prop.name], initialValues[prop.name])).length;
            return (
              <div key={group} className="border border-neutral-900 rounded-xl">
                <button
                  onClick={() => setClosedGroups((st) => ({ ...st, [group]: open }))}
                  className="w-full flex items-center justify-between px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-neutral-300 hover:text-white cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    {open ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                    {group}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">
                    {touched > 0 && <span className="text-sky-400 mr-1.5">{touched} changed</span>}
                    {items.length}
                  </span>
                </button>
                {open && (
                  <div className="px-3 pb-3 grid gap-x-4 gap-y-3 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] border-t border-neutral-900 pt-3">
                    {items.map(({ prop, control }) => (

                  <div key={prop.name} className="space-y-1">
                    {control.kind === 'boolean' ? (
                      <label className="flex items-center justify-between text-xs text-neutral-300 cursor-pointer">
                        <span className="font-mono">{prop.name}</span>
                        <input
                          type="checkbox"
                          checked={!!values[prop.name]}
                          onChange={(e) => setVal(prop.name, e.target.checked)}
                          className="w-4 h-4 accent-sky-500"
                        />
                      </label>
                    ) : (
                      <>
                        <label className="text-xs font-medium text-neutral-300 font-mono">{prop.name}</label>
                        {control.kind === 'select' ? (
                          <select
                            value={String(values[prop.name] ?? '')}
                            onChange={(e) => setVal(prop.name, e.target.value === '' ? undefined : e.target.value)}
                            className={inputCls}
                          >
                            <option value="">(unset)</option>
                            {control.options.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={control.kind === 'number' ? 'number' : 'text'}
                            value={String(values[prop.name] ?? '')}
                            onChange={(e) =>
                              setVal(prop.name, control.kind === 'number' ? (e.target.value === '' ? undefined : Number(e.target.value)) : e.target.value)
                            }
                            className={inputCls}
                          />
                        )}
                      </>
                    )}
                    {prop.description && <p className="text-[10px] text-neutral-500 leading-snug">{prop.description}</p>}
                  </div>
                
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {complexProps.length > 0 && (
            <div className="pt-3 border-t border-neutral-900">
              <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1.5">Set via JavaScript</p>
              <ul className="space-y-1">
                {complexProps.map((p) => (
                  <li key={p.name} className="text-[11px] font-mono text-neutral-400">
                    {p.name}
                    <span className="text-neutral-600"> : {p.type.length > 40 ? p.type.slice(0, 40) + '…' : p.type}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};
