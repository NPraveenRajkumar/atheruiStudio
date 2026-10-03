import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Copy, Check, Code2, Zap, Layers, BookOpen, ListTree } from 'lucide-react';
import { DOC_ARTICLES, DOC_CATEGORIES, DocBlock } from '../../data/docs';
import { ComponentItem, Framework } from '../../types';
import { ALL_COMPONENTS } from '../../data/components';
import { ComponentPicker, ComponentPickerDrawer } from '../common/ComponentPicker';

const FRAMEWORKS: Framework[] = ['HTML', 'React', 'Stencil', 'Angular', 'Vue'];

const CodeBlock: React.FC<{ code: string; title?: string }> = ({ code, title }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-2xl border border-neutral-900 bg-black overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-900 text-xs text-neutral-400">
        <span className="font-mono text-sky-400">{title ?? 'Example'}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="flex items-center gap-1 hover:text-white cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre tabIndex={0} aria-label={title ? `${title} code` : 'Code sample'} className="p-4 text-xs font-mono text-sky-200 overflow-x-auto leading-relaxed focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400">{code}</pre>
    </div>
  );
};

/** Full documentation page for one component (props, events, slots, usage). */
const ComponentDoc: React.FC<{ comp: ComponentItem }> = ({ comp }) => {
  const [framework, setFramework] = useState<Framework>('HTML');
  const [propQuery, setPropQuery] = useState('');
  const refs = {
    overview: useRef<HTMLElement>(null),
    props: useRef<HTMLElement>(null),
    events: useRef<HTMLElement>(null),
    slots: useRef<HTMLElement>(null),
    usage: useRef<HTMLElement>(null),
  };
  const props = useMemo(() => {
    const q = propQuery.trim().toLowerCase();
    return comp.props.filter((p) => !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }, [comp, propQuery]);

  const nav = [
    { id: 'overview', label: 'Overview', icon: BookOpen, count: undefined as number | undefined },
    { id: 'props', label: 'Props', icon: ListTree, count: comp.props.length },
    { id: 'events', label: 'Events', icon: Zap, count: comp.events.length },
    { id: 'slots', label: 'Slots', icon: Layers, count: comp.slots.length },
    { id: 'usage', label: 'Usage', icon: Code2, count: undefined },
  ] as const;
  const go = (id: keyof typeof refs) => refs[id].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const heading = (icon: React.ReactNode, text: string) => (
    <h2 className="flex items-center gap-2 text-lg font-bold text-white border-b border-neutral-900 pb-3 mb-4">
      {icon}
      {text}
    </h2>
  );

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 p-6 md:p-10 space-y-12">
        <section ref={refs.overview} className="scroll-mt-6">
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
            <span className="text-sky-400">{comp.category}</span>
            <span>/</span>
            <code className="font-mono">&lt;{comp.tag}&gt;</code>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">{comp.name}</h1>
          <p className="text-sm text-neutral-300 mt-2 leading-relaxed max-w-3xl">{comp.description}</p>
        </section>

        <section ref={refs.props} className="scroll-mt-6">
          {heading(<ListTree className="w-5 h-5 text-sky-400" />, 'Props Reference')}
          <div className="relative mb-3 max-w-xs">
            <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              value={propQuery}
              onChange={(e) => setPropQuery(e.target.value)}
              placeholder="Filter props…"
              className="w-full bg-black border border-neutral-800 rounded-lg pl-8 pr-2 py-1.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="rounded-2xl border border-neutral-900 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-400 border-b border-neutral-900">
                  <th className="px-4 py-3 font-semibold">Property</th>
                  <th className="px-4 py-3 font-semibold">Attribute</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Default</th>
                  <th className="px-4 py-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {props.map((p) => (
                  <tr key={p.name} className="border-b border-neutral-900/70 last:border-0 align-top hover:bg-neutral-950">
                    <td className="px-4 py-3">
                      <code className="font-mono text-emerald-400">{p.name}</code>
                      {p.required && <span className="ml-1.5 text-[10px] text-rose-400">required</span>}
                    </td>
                    <td className="px-4 py-3 font-mono text-neutral-400">{p.attr ?? '—'}</td>
                    <td className="px-4 py-3">
                      {p.type.length > 48 ? (
                        <details className="group">
                          <summary className="cursor-pointer list-none">
                            <code className="font-mono text-indigo-300">{p.type.slice(0, 48)}…</code>
                            <span className="ml-1 text-[10px] text-sky-400 group-open:hidden">show all</span>
                          </summary>
                          <code className="block mt-1 font-mono text-indigo-300 break-words max-w-xs">{p.type}</code>
                        </details>
                      ) : (
                        <code className="font-mono text-indigo-300">{p.type}</code>
                      )}
                    </td>
                    <td className="px-4 py-3 font-mono text-emerald-300">{p.default || '—'}</td>
                    <td className="px-4 py-3 text-neutral-300 min-w-[200px]">{p.description || <span className="text-neutral-600">—</span>}</td>
                  </tr>
                ))}
                {props.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-neutral-500">
                      No props match "{propQuery}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section ref={refs.events} className="scroll-mt-6">
          {heading(<Zap className="w-5 h-5 text-sky-400" />, 'Events')}
          {comp.events.length === 0 ? (
            <p className="text-sm text-neutral-500">This component emits no events.</p>
          ) : (
            <div className="rounded-2xl border border-neutral-900 overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-400 border-b border-neutral-900">
                    <th className="px-4 py-3 font-semibold">Event</th>
                    <th className="px-4 py-3 font-semibold">Detail</th>
                    <th className="px-4 py-3 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.events.map((e) => (
                    <tr key={e.name} className="border-b border-neutral-900/70 last:border-0 align-top">
                      <td className="px-4 py-3 font-mono text-emerald-400">{e.name}</td>
                      <td className="px-4 py-3 font-mono text-indigo-300">{e.detail}</td>
                      <td className="px-4 py-3 text-neutral-300">{e.description || <span className="text-neutral-600">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section ref={refs.slots} className="scroll-mt-6">
          {heading(<Layers className="w-5 h-5 text-sky-400" />, 'Slots')}
          {comp.slots.length === 0 ? (
            <p className="text-sm text-neutral-500">This component has no slots.</p>
          ) : (
            <ul className="space-y-2">
              {comp.slots.map((s) => (
                <li key={s.name} className="text-xs text-neutral-300">
                  <code className="font-mono text-emerald-400">{s.name}</code>
                  {s.description && <span className="text-neutral-400"> — {s.description}</span>}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section ref={refs.usage} className="scroll-mt-6">
          {heading(<Code2 className="w-5 h-5 text-sky-400" />, 'Usage')}
          <div className="flex items-center gap-1 mb-3">
            {FRAMEWORKS.map((fw) => (
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
          <CodeBlock title={framework} code={comp.usageCode[framework.toLowerCase() as keyof typeof comp.usageCode]} />
        </section>
      </div>

      {/* On this page */}
      <nav className="hidden xl:block w-52 shrink-0 sticky top-0 self-start p-6">
        <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
          <ListTree className="w-3 h-3" /> On this page
        </div>
        <div className="space-y-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-neutral-400 hover:text-white hover:bg-neutral-900 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <n.icon className="w-3.5 h-3.5" />
                {n.label}
              </span>
              {n.count !== undefined && <span className="text-[10px] font-mono text-neutral-500">{n.count}</span>}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

/** Renders **bold** and `code` inside guide text. */
const Inline: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      if (part.startsWith('`') && part.endsWith('`'))
        return (
          <code key={i} className="font-mono text-[0.85em] text-sky-300 bg-neutral-900 border border-neutral-800 rounded px-1 py-0.5">
            {part.slice(1, -1)}
          </code>
        );
      return <React.Fragment key={i}>{part}</React.Fragment>;
    })}
  </>
);

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Block: React.FC<{ block: DocBlock }> = ({ block }) => {
  if ('h' in block)
    return (
      <h2 id={slug(block.h)} className="text-lg font-bold text-white pt-6 scroll-mt-6">
        {block.h}
      </h2>
    );
  if ('p' in block)
    return (
      <p>
        <Inline text={block.p} />
      </p>
    );
  if ('list' in block) {
    const ListTag = block.ordered ? 'ol' : 'ul';
    return (
      <ListTag className={`space-y-1.5 pl-5 ${block.ordered ? 'list-decimal' : 'list-disc'} marker:text-neutral-500`}>
        {block.list.map((item, i) => (
          <li key={i}>
            <Inline text={item} />
          </li>
        ))}
      </ListTag>
    );
  }
  if ('code' in block) return <CodeBlock title={block.title} code={block.code} />;
  if ('note' in block)
    return (
      <div
        className={`rounded-xl border px-4 py-3 text-[13px] ${
          block.tone === 'warn' ? 'border-amber-500/30 bg-amber-500/5 text-amber-100/90' : 'border-sky-500/30 bg-sky-500/5 text-sky-100/90'
        }`}
      >
        <Inline text={block.note} />
      </div>
    );
  return (
    <div className="rounded-2xl border border-neutral-900 overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-400 border-b border-neutral-900">
            {block.table.head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.table.rows.map((row, i) => (
            <tr key={i} className="border-b border-neutral-900/70 last:border-0 align-top">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 ${j === 0 ? 'text-neutral-100' : 'text-neutral-300'}`}>
                  <Inline text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Article: React.FC<{ id: string; onOpen: (id: string) => void }> = ({ id, onOpen }) => {
  const index = Math.max(0, DOC_ARTICLES.findIndex((a) => a.id === id));
  const article = DOC_ARTICLES[index];
  const prev = DOC_ARTICLES[index - 1];
  const next = DOC_ARTICLES[index + 1];
  const headings = article.body.flatMap((b) => ('h' in b ? [b.h] : []));
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 p-6 md:p-12 max-w-4xl space-y-8">
        <div className="border-b border-neutral-900 pb-6">
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
            <span className="text-sky-400">{article.category}</span>
            <span>/</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">{article.title}</h1>
          <p className="text-sm text-neutral-300 mt-2 leading-relaxed">{article.summary}</p>
        </div>
        <div className="text-neutral-300 text-sm leading-relaxed space-y-4">
          {article.body.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 pt-6 border-t border-neutral-900">
          {prev ? (
            <button onClick={() => onOpen(prev.id)} className="text-left rounded-xl border border-neutral-900 hover:border-neutral-700 p-3 cursor-pointer">
              <span className="block text-[10px] uppercase tracking-wider text-neutral-500">Previous</span>
              <span className="text-sm text-white">{prev.title}</span>
            </button>
          ) : (
            <span />
          )}
          {next && (
            <button onClick={() => onOpen(next.id)} className="text-right rounded-xl border border-neutral-900 hover:border-neutral-700 p-3 cursor-pointer">
              <span className="block text-[10px] uppercase tracking-wider text-neutral-500">Next</span>
              <span className="text-sm text-white">{next.title}</span>
            </button>
          )}
        </div>
      </div>
      {headings.length > 1 && (
        <nav className="hidden xl:block w-52 shrink-0 sticky top-0 self-start p-6">
          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
            <ListTree className="w-3 h-3" /> On this page
          </div>
          <div className="space-y-1">
            {headings.map((h) => (
              <button
                key={h}
                onClick={() => document.getElementById(slug(h))?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-neutral-400 hover:text-white hover:bg-neutral-900 cursor-pointer"
              >
                {h}
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export const DocsView: React.FC<{ initialId?: string; onSelect?: (id: string) => void }> = ({ initialId, onSelect }) => {
  // A link can name a guide or a component; guides win if the ids ever overlap
  const asView = (id?: string): { kind: 'article' | 'component'; id: string } =>
    id && !DOC_ARTICLES.some((a) => a.id === id) ? { kind: 'component', id } : { kind: 'article', id: id ?? 'overview' };
  // Either a guide article or a component page is shown, always inline (never a dialog).
  const [view, setView] = useState<{ kind: 'article' | 'component'; id: string }>(asView(initialId));
  // A component or guide picked elsewhere (catalog, home, a shared link) opens directly
  useEffect(() => {
    if (initialId) setView(asView(initialId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialId]);
  const [docSearch, setDocSearch] = useState('');
  const mainRef = useRef<HTMLElement>(null);

  const articles = DOC_ARTICLES.filter(
    (a) => a.title.toLowerCase().includes(docSearch.toLowerCase()) || a.summary.toLowerCase().includes(docSearch.toLowerCase())
  );
  const comp = view.kind === 'component' ? ALL_COMPONENTS.find((c) => c.id === view.id) : undefined;

  const open = (v: { kind: 'article' | 'component'; id: string }) => {
    setView(v);
    onSelect?.(v.id);
    mainRef.current?.scrollTo({ top: 0 });
  };

  return (
    <div className="w-full h-[calc(100dvh-var(--header-h,3.5rem))] bg-black text-slate-100 flex text-left">
      <aside className="hidden md:flex w-72 shrink-0 flex-col border-r border-neutral-900 min-h-0">
        <div className="p-3 border-b border-neutral-900 shrink-0 space-y-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              placeholder="Search guides…"
              value={docSearch}
              onChange={(e) => setDocSearch(e.target.value)}
              className="w-full bg-black border border-neutral-800 rounded-lg pl-8 pr-2 py-1.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-sky-500"
            />
          </div>
          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block px-1">Guides</span>
          <div className="max-h-64 overflow-y-auto space-y-0.5">
            {DOC_CATEGORIES.map((cat) => {
              const items = articles.filter((a) => a.category === cat);
              if (!items.length) return null;
              return (
                <div key={cat} className="pb-1">
                  <span className="block px-2.5 pt-1.5 pb-0.5 text-[10px] text-neutral-600">{cat}</span>
                  {items.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => open({ kind: 'article', id: a.id })}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs truncate cursor-pointer ${
                        view.kind === 'article' && view.id === a.id ? 'bg-sky-500/15 text-sky-300' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                      }`}
                    >
                      {a.title}
                    </button>
                  ))}
                </div>
              );
            })}
            {articles.length === 0 && <p className="px-2.5 py-2 text-xs text-neutral-500">No guides match.</p>}
          </div>
        </div>
        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-4 pt-3 shrink-0">Components</span>
        <ComponentPicker
          selectedId={view.kind === 'component' ? view.id : ''}
          onSelect={(id) => open({ kind: 'component', id })}
          className="flex-1 border-r-0"
        />
      </aside>

      <main ref={mainRef} className="flex-1 overflow-y-auto min-w-0">
        <div className="md:hidden p-3 border-b border-neutral-900">
          <ComponentPickerDrawer selectedId={view.kind === 'component' ? view.id : ''} onSelect={(id) => open({ kind: 'component', id })} />
        </div>
        {comp ? <ComponentDoc key={comp.id} comp={comp} /> : <Article id={view.id} onOpen={(id) => open({ kind: 'article', id })} />}
      </main>
    </div>
  );
};
