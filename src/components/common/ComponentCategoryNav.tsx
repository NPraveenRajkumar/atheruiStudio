import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, FormInput, LayoutGrid, MessageSquare, Navigation, Table2, Wrench, type LucideIcon } from 'lucide-react';
import { COMPONENTS_LITE, CATEGORIES_LITE, type ComponentLite } from '../../data/lite';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Forms: FormInput,
  'Data Display': Table2,
  Navigation,
  Feedback: MessageSquare,
  Layout: LayoutGrid,
  Utility: Wrench,
};

interface Props {
  collapsed: boolean;
  onSelect: (componentId: string) => void;
}

const ItemButton: React.FC<{ comp: ComponentLite; onClick: () => void; dupNames: Set<string>; className?: string }> = ({ comp, onClick, dupNames, className = '' }) => (
  <button
    onClick={onClick}
    title={comp.tag}
    className={`w-full flex items-center gap-2 text-left text-[12px] text-slate-400 hover:text-white hover:bg-slate-900/60 cursor-pointer transition-colors ${className}`}
  >
    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: comp.color }} />
    <span className="truncate">
      {comp.name}
      {dupNames.has(comp.name) && <span className="ml-1 font-mono text-[10px] text-slate-500">{comp.tag}</span>}
    </span>
  </button>
);

/** Collapsed sidebar: one icon per category. Hover or click opens a popover listing its components. */
const CategoryFlyout: React.FC<{ cat: string; items: ComponentLite[]; dupNames: Set<string>; onSelect: (id: string) => void }> = ({ cat, items, dupNames, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const btn = useRef<HTMLButtonElement>(null);
  const pop = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const Icon = CATEGORY_ICONS[cat] ?? LayoutGrid;

  const show = () => {
    window.clearTimeout(timer.current);
    const r = btn.current?.getBoundingClientRect();
    if (r) {
      // Keep the popover on screen: align with the icon, but never below the viewport
      const height = Math.min(items.length * 32 + 52, window.innerHeight - 16);
      setTop(Math.max(8, Math.min(r.top, window.innerHeight - height - 8)));
      setLeft(r.right + 6);
    }
    setOpen(true);
  };
  const hideSoon = () => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!btn.current?.contains(t) && !pop.current?.contains(t)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <>
      <button
        ref={btn}
        onClick={() => (open ? setOpen(false) : show())}
        onMouseEnter={show}
        onMouseLeave={hideSoon}
        aria-haspopup="menu"
        aria-expanded={open}
        title={cat}
        className={`w-full flex justify-center p-2.5 rounded-xl cursor-pointer transition-colors ${
          open ? 'bg-sky-500/15 text-sky-300' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/60'
        }`}
      >
        <Icon className="w-4 h-4" />
      </button>
      {open &&
        createPortal(
          <div
            ref={pop}
            role="menu"
            onMouseEnter={show}
            onMouseLeave={hideSoon}
            style={{ top, left, maxHeight: window.innerHeight - 16 }}
            className="fixed z-50 w-56 overflow-y-auto rounded-xl border border-slate-800 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/60 py-2"
          >
            <div className="px-3 pb-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
              <span>{cat}</span>
              <span className="font-mono text-slate-500">{items.length}</span>
            </div>
            {items.map((c) => (
              <ItemButton
                key={c.id}
                comp={c}
                dupNames={dupNames}
                className="px-3 py-1.5"
                onClick={() => {
                  setOpen(false);
                  onSelect(c.id);
                }}
              />
            ))}
          </div>,
          document.body
        )}
    </>
  );
};

/** Components grouped by category: an accordion in the expanded sidebar, popover flyouts in the collapsed one. */
export const ComponentCategoryNav: React.FC<Props> = ({ collapsed, onSelect }) => {
  const [openCats, setOpenCats] = useState<Record<string, boolean>>({});
  const groups = useMemo(() => CATEGORIES_LITE.map((cat) => ({ cat, items: COMPONENTS_LITE.filter((c) => c.category === cat) })).filter((g) => g.items.length), []);
  const dupNames = useMemo(() => {
    const seen = new Map<string, number>();
    COMPONENTS_LITE.forEach((c) => seen.set(c.name, (seen.get(c.name) ?? 0) + 1));
    return new Set([...seen].filter(([, n]) => n > 1).map(([name]) => name));
  }, []);

  if (collapsed) {
    return (
      <div className="pt-2 border-t border-slate-800/80 space-y-1">
        {groups.map(({ cat, items }) => (
          <CategoryFlyout key={cat} cat={cat} items={items} dupNames={dupNames} onSelect={onSelect} />
        ))}
      </div>
    );
  }

  return (
    <div className="pt-2 border-t border-slate-800/80 space-y-0.5">
      <div className="px-3 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Components</div>
      {groups.map(({ cat, items }) => {
        const Icon = CATEGORY_ICONS[cat] ?? LayoutGrid;
        const isOpen = !!openCats[cat];
        return (
          <div key={cat}>
            <button
              onClick={() => setOpenCats((s) => ({ ...s, [cat]: !s[cat] }))}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-900/60 cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{cat}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-slate-500">{items.length}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? '' : '-rotate-90'}`} />
              </span>
            </button>
            {isOpen && (
              <div className="ml-5 border-l border-slate-800/80 py-0.5">
                {items.map((c) => (
                  <ItemButton key={c.id} comp={c} dupNames={dupNames} className="pl-4 pr-3 py-1.5" onClick={() => onSelect(c.id)} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
