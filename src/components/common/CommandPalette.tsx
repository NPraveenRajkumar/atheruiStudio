import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Layers, BookOpen, Palette, ArrowRight, Play, Sliders, Boxes, Download, Zap, type LucideIcon } from 'lucide-react';
import { COMPONENTS_LITE, findLite, loadSearchIndex, type SearchIndex } from '../../data/lite';
import { DOC_ARTICLES } from '../../data/docs';

interface CommandPaletteProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onNavigate: (view: string, itemId?: string) => void;
}

interface Item {
  key: string;
  group: string;
  icon: LucideIcon;
  tone: string;
  label: string;
  code?: string;
  hint?: string;
  run: () => void;
  /** Shift+Enter alternative (components open in the Design Studio) */
  alt?: () => void;
}

/** Lower is better: 0 starts with the query, 1 contains it, null does not match. */
const rank = (text: string, q: string) => {
  const t = text.toLowerCase();
  if (t.startsWith(q)) return 0;
  return t.includes(q) ? 1 : null;
};

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  // Prop and event names are a separate file, fetched the first time the palette opens
  const [index, setIndex] = useState<SearchIndex | null>(null);
  useEffect(() => {
    if (isOpen && !index) loadSearchIndex().then(setIndex);
  }, [isOpen, index]);
  const listRef = useRef<HTMLDivElement>(null);

  // Ctrl/Cmd+K toggles the palette from anywhere; Escape closes it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onOpen();
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onOpen, onClose]);

  // A fresh search each time it opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelected(0);
    }
  }, [isOpen]);

  const go = (view: string, id?: string) => () => {
    onNavigate(view, id);
    onClose();
  };

  const items = useMemo<Item[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return [
        { key: 'q-studio', group: 'Quick navigation', icon: Play, tone: 'text-sky-400', label: 'Launch Design Studio', run: go('playground') },
        { key: 'q-catalog', group: 'Quick navigation', icon: Boxes, tone: 'text-emerald-400', label: 'Browse the component catalog', run: go('catalog') },
        { key: 'q-docs', group: 'Quick navigation', icon: BookOpen, tone: 'text-purple-400', label: 'Read the documentation', run: go('docs') },
        { key: 'q-examples', group: 'Quick navigation', icon: Sliders, tone: 'text-amber-400', label: 'Variant examples', run: go('examples') },
        { key: 'q-theme', group: 'Quick navigation', icon: Palette, tone: 'text-pink-400', label: 'Open Theme Studio & token builder', run: go('themes') },
        { key: 'q-install', group: 'Quick navigation', icon: Download, tone: 'text-sky-400', label: 'Installation guide', run: go('install') },
      ];
    }
    const out: Item[] = [];

    // Components by name, tag or category
    COMPONENTS_LITE.flatMap((c) => {
      const r = [rank(c.name, q), rank(c.tag, q), rank(c.category, q)].filter((x): x is number => x !== null);
      return r.length ? [{ c, score: Math.min(...r) }] : [];
    })
      .sort((a, b) => a.score - b.score)
      .slice(0, 6)
      .forEach(({ c }) =>
        out.push({
          key: `c-${c.id}`,
          group: 'Components',
          icon: Layers,
          tone: 'text-sky-400',
          label: c.name,
          code: `<${c.tag}>`,
          hint: 'Docs · ⇧↵ Design Studio',
          run: go('docs', c.id),
          alt: go('playground', c.id),
        })
      );

    // Props and events, so "showFilterPanel" or "inputChange" finds the component that owns it
    if (q.length >= 3) {
      const hits: { key: string; label: string; owner: string; id: string; kind: string; score: number }[] = [];
      for (const [name, attr, id] of index?.props ?? []) {
        const s = [rank(name, q), attr ? rank(attr, q) : null].filter((x): x is number => x !== null);
        if (s.length) hits.push({ key: `p-${id}-${name}`, label: name, owner: findLite(id)?.name ?? id, id, kind: 'prop', score: Math.min(...s) });
      }
      for (const [name, id] of index?.events ?? []) {
        const s = rank(name, q);
        if (s !== null) hits.push({ key: `e-${id}-${name}`, label: name, owner: findLite(id)?.name ?? id, id, kind: 'event', score: s });
      }
      hits
        .sort((a, b) => a.score - b.score || a.label.length - b.label.length)
        .slice(0, 6)
        .forEach((h) =>
          out.push({ key: h.key, group: 'Props and events', icon: Zap, tone: 'text-amber-400', label: h.label, code: h.kind, hint: `on ${h.owner}`, run: go('docs', h.id) })
        );
    }

    // Guides by title or summary
    DOC_ARTICLES.filter((d) => rank(d.title, q) !== null || d.summary.toLowerCase().includes(q))
      .slice(0, 4)
      .forEach((d) => out.push({ key: `g-${d.id}`, group: 'Guides', icon: BookOpen, tone: 'text-purple-400', label: d.title, hint: d.readTime, run: go('docs', d.id) }));
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, index]);

  useEffect(() => setSelected(0), [query]);
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${selected}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [selected]);

  if (!isOpen) return null;

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(items.length - 1, s + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(0, s - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const it = items[selected];
      if (it) (e.shiftKey && it.alt ? it.alt : it.run)();
    }
  };

  let lastGroup = '';
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-950/80 animate-fade-in" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="w-full max-w-xl bg-slate-900 border border-sky-500/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.15)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-4 h-4 text-sky-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-results"
            aria-activedescendant={items[selected] ? `palette-${items[selected].key}` : undefined}
            aria-label="Search components, props, events and guides"
            placeholder="Search components, props, events and guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            className="w-full bg-transparent border-0 outline-none text-sm text-white placeholder:text-slate-400"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">ESC</kbd>
        </div>

        <div ref={listRef} id="palette-results" role="listbox" className="max-h-80 overflow-y-auto p-2 text-left">
          {items.map((it, i) => {
            const header = it.group !== lastGroup;
            lastGroup = it.group;
            return (
              <React.Fragment key={it.key}>
                {header && <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-3 pb-1">{it.group}</div>}
                <button
                  id={`palette-${it.key}`}
                  data-index={i}
                  role="option"
                  aria-selected={i === selected}
                  onClick={it.run}
                  onMouseMove={() => setSelected(i)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-xs text-left cursor-pointer transition-colors ${
                    i === selected ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <it.icon className={`w-3.5 h-3.5 shrink-0 ${it.tone}`} aria-hidden />
                    <span className="truncate">{it.label}</span>
                    {it.code && <code className="text-[10px] text-slate-400 font-mono shrink-0">{it.code}</code>}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-slate-400 shrink-0">
                    {it.hint}
                    {i === selected && <ArrowRight className="w-3 h-3" aria-hidden />}
                  </span>
                </button>
              </React.Fragment>
            );
          })}
          {query && items.length === 0 && (
            <div className="py-8 text-center text-xs text-slate-400">Nothing matches "{query}". Try a component name, a prop such as "variant", or a guide topic.</div>
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2 border-t border-slate-800 bg-slate-950/60 text-[10px] text-slate-400">
          <span>↑↓ to move · ↵ to open · ⇧↵ for the Design Studio</span>
          <span>{items.length} result{items.length === 1 ? '' : 's'}</span>
        </div>
      </div>
    </div>
  );
};
