import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Menu, Search, X } from 'lucide-react';
import { ALL_COMPONENTS, CATEGORIES } from '../../data/components';
import { ComponentItem } from '../../types';

interface ComponentPickerProps {
  selectedId: string;
  onSelect: (id: string) => void;
  /** Restrict the list (e.g. only components that have variants). */
  filter?: (c: ComponentItem) => boolean;
  /** Extra group listed after the categories (for example full-page demos). */
  extra?: { title: string; items: { id: string; name: string }[] };
  className?: string;
}

/** Searchable, category-grouped list that shows every component at once. */
export const ComponentPicker: React.FC<ComponentPickerProps> = ({ selectedId, onSelect, filter, extra, className = '' }) => {
  const [query, setQuery] = useState('');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const items = ALL_COMPONENTS.filter((c) => (!filter || filter(c)) && (!q || c.name.toLowerCase().includes(q) || c.tag.includes(q)));
    return CATEGORIES.map((cat) => ({ cat, items: items.filter((c) => c.category === cat) })).filter((g) => g.items.length);
  }, [query, filter]);

  const extraItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (extra?.items ?? []).filter((i) => !q || i.name.toLowerCase().includes(q));
  }, [extra, query]);
  // Names shared by more than one component get their tag shown underneath
  const dupNames = useMemo(() => {
    const seen = new Map<string, number>();
    ALL_COMPONENTS.forEach((c) => seen.set(c.name, (seen.get(c.name) ?? 0) + 1));
    return new Set([...seen].filter(([, n]) => n > 1).map(([name]) => name));
  }, []);
  const total = groups.reduce((n, g) => n + g.items.length, 0) + extraItems.length;

  return (
    <aside className={`flex flex-col bg-black border-r border-neutral-900 min-h-0 ${className}`}>
      <div className="p-3 border-b border-neutral-900 shrink-0">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components…"
            className="w-full bg-black border border-neutral-800 rounded-lg pl-8 pr-2 py-1.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-sky-500"
          />
        </div>
        <p className="text-[10px] text-neutral-500 mt-1.5">{total} components</p>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {groups.map(({ cat, items }) => {
          const isCollapsed = collapsed[cat] && !query;
          return (
            <div key={cat} className="mb-1">
              <button
                onClick={() => setCollapsed((s) => ({ ...s, [cat]: !s[cat] }))}
                className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-300 cursor-pointer"
              >
                <span className="flex items-center gap-1">
                  {isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  {cat}
                </span>
                <span className="font-mono text-neutral-600">{items.length}</span>
              </button>
              {!isCollapsed &&
                items.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onSelect(c.id)}
                    title={c.tag}
                    className={`w-full text-left pl-7 pr-3 py-1.5 text-xs truncate cursor-pointer border-l-2 ${
                      c.id === selectedId
                        ? 'bg-sky-500/10 text-sky-300 border-sky-400'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border-transparent'
                    }`}
                  >
                    {c.name}
                    {dupNames.has(c.name) && <span className="block text-[10px] font-mono text-neutral-600 truncate">{c.tag}</span>}
                  </button>
                ))}
            </div>
          );
        })}
        {extra && extraItems.length > 0 && (
          <div className="mb-1">
            <div className="flex items-center justify-between px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              <span>{extra.title}</span>
              <span className="font-mono text-neutral-600">{extraItems.length}</span>
            </div>
            {extraItems.map((i) => (
              <button
                key={i.id}
                onClick={() => onSelect(i.id)}
                className={`w-full text-left pl-7 pr-3 py-1.5 text-xs truncate cursor-pointer border-l-2 ${
                  i.id === selectedId ? 'bg-sky-500/10 text-sky-300 border-sky-400' : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border-transparent'
                }`}
              >
                {i.name}
              </button>
            ))}
          </div>
        )}
        {total === 0 && <p className="px-3 py-4 text-xs text-neutral-500">No components match “{query}”.</p>}
      </div>
    </aside>
  );
};

/** Small-screen replacement for the side list: a button that opens the picker as a slide-over. */
export const ComponentPickerDrawer: React.FC<ComponentPickerProps & { label?: string }> = ({ onSelect, label = 'Components', ...rest }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 cursor-pointer"
      >
        <Menu className="w-3.5 h-3.5" /> {label}
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <ComponentPicker
            {...rest}
            onSelect={(id) => {
              onSelect(id);
              setOpen(false);
            }}
            className="w-72 max-w-[85vw] shadow-2xl"
          />
          <button aria-label="Close" onClick={() => setOpen(false)} className="flex-1 bg-black/70 cursor-pointer">
            <X className="w-5 h-5 text-neutral-400 m-4" />
          </button>
        </div>
      )}
    </div>
  );
};
