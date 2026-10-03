import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react';
import type { ComponentLite } from '../../data/lite';
import { SnapItem } from './SnapPage';

/* ----- tiny drawing kit: every shape is a translucent tint of the theme, so the scenes work in light and dark ----- */
type Tone = 'a' | 'b' | 'c';
const tint = (c: Tone, o: number): React.CSSProperties => ({ background: `rgba(var(--cg-${c}), ${o})` });
const ink = (o: number): React.CSSProperties => ({ background: `color-mix(in srgb, var(--app-text) ${Math.round(o * 100)}%, transparent)` });

const Bar: React.FC<{ w: number; o?: number; c?: Tone; h?: number }> = ({ w, o = 0.16, c, h = 8 }) => (
  <i className="block rounded-full shrink-0" style={{ width: `${w}%`, height: h, ...(c ? tint(c, o + 0.25) : ink(o)) }} />
);
const Dot: React.FC<{ c?: Tone; s?: number }> = ({ c, s = 10 }) => (
  <i className="block rounded-full shrink-0" style={{ width: s, height: s, ...(c ? tint(c, 0.7) : ink(0.22)) }} />
);
const Chip: React.FC<{ w: number; c?: Tone; h?: number }> = ({ w, c, h = 22 }) => (
  <i className="block rounded-lg shrink-0" style={{ width: w, height: h, ...(c ? tint(c, 0.55) : ink(0.14)) }} />
);
const Panel: React.FC<{ children?: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className = '', style }) => (
  <div
    className={`rounded-xl border p-3 ${className}`}
    style={{ borderColor: 'var(--cg-edge)', background: 'color-mix(in srgb, var(--app-text) 6%, transparent)', ...style }}
  >
    {children}
  </div>
);
const Row: React.FC<{ children: React.ReactNode; hot?: boolean; indent?: number }> = ({ children, hot, indent = 0 }) => (
  <div className="flex items-center gap-2 rounded-lg px-1.5 py-1" style={{ marginLeft: indent * 14, ...(hot ? tint('a', 0.16) : null) }}>
    {children}
  </div>
);

/** One illustrated scene per featured component (the card's "screenshot"). */
const SCENES: Record<string, () => React.ReactElement> = {
  'advanced-data-table': () => (
    <Panel className="space-y-1.5">
      <div className="flex gap-2 pb-1">
        <Bar w={24} o={0.3} c="a" />
        <Bar w={30} o={0.22} />
        <Bar w={18} o={0.22} />
        <Bar w={18} o={0.22} />
      </div>
      {[34, 26, 40, 30, 22, 36, 28, 32].map((w, r) => (
        <Row key={r} hot={r === 2}>
          <Dot c={(['a', 'b', 'c'] as Tone[])[r % 3]} s={12} />
          <Bar w={w} />
          <Bar w={[20, 28, 18, 24, 30, 16, 22, 26][r]} />
          <Bar w={12} c={r % 3 === 1 ? 'c' : undefined} o={0.12} />
        </Row>
      ))}
    </Panel>
  ),
  'dialog-box': () => (
    <div className="relative h-full min-h-[190px]">
      <Panel className="absolute left-0 right-8 top-0 bottom-10 opacity-60" />
      <Panel className="absolute left-7 right-0 top-9 bottom-0 space-y-2.5" style={{ boxShadow: '0 22px 44px -18px rgba(0,0,0,0.55)' }}>
        <div className="flex items-center gap-1.5">
          <Dot c="a" />
          <Dot />
          <Dot />
          <Bar w={36} o={0.3} />
        </div>
        <Bar w={92} />
        <Bar w={72} />
        <Bar w={82} />
        <div className="flex justify-end gap-2 pt-2">
          <Chip w={44} />
          <Chip w={56} c="a" />
        </div>
      </Panel>
    </div>
  ),
  tabs: () => (
    <div className="space-y-3">
      <div className="flex gap-1.5">
        <Chip w={58} c="a" h={26} />
        <Chip w={50} h={26} />
        <Chip w={64} h={26} />
        <Chip w={40} h={26} />
      </div>
      <Panel className="space-y-2.5">
        <Bar w={46} o={0.3} c="b" />
        <Bar w={90} />
        <Bar w={76} />
        <Bar w={84} />
        <div className="flex gap-2 pt-1">
          <Chip w={70} c="a" />
          <Chip w={54} />
        </div>
      </Panel>
    </div>
  ),
  'command-palette': () => (
    <Panel className="space-y-1.5" style={{ boxShadow: '0 22px 44px -18px rgba(0,0,0,0.5)' }}>
      <div className="flex items-center gap-2 rounded-lg px-2 py-1.5" style={ink(0.1)}>
        <Dot c="a" s={12} />
        <Bar w={46} o={0.24} />
        <span className="ml-auto text-[9px] font-mono opacity-60">⌘K</span>
      </div>
      {[0, 1, 2, 3, 4].map((r) => (
        <Row key={r} hot={r === 1}>
          <Dot c={(['a', 'b', 'c', 'b', 'a'] as Tone[])[r]} s={12} />
          <Bar w={[50, 40, 56, 34, 46][r]} />
          <Chip w={26} h={14} />
        </Row>
      ))}
    </Panel>
  ),
  tree: () => (
    <Panel className="space-y-0.5">
      {[
        [0, 'a'],
        [1, 'b'],
        [2, undefined],
        [2, 'c'],
        [1, undefined],
        [0, 'a'],
        [1, undefined],
        [1, 'b'],
      ].map(([lvl, c], r) => (
        <Row key={r} indent={lvl as number} hot={r === 3}>
          <i className="block w-2.5 h-2.5 rounded-[3px] shrink-0" style={ink(0.28)} />
          <Dot c={c as Tone | undefined} s={12} />
          <Bar w={[44, 36, 30, 38, 34, 42, 28, 32][r]} />
        </Row>
      ))}
    </Panel>
  ),
  timeline: () => (
    <div className="relative pl-6 space-y-3">
      <i className="absolute left-[7px] top-2 bottom-2 w-0.5 rounded" style={ink(0.2)} />
      {(['a', 'b', 'c', 'a'] as Tone[]).map((c, r) => (
        <div key={r} className="relative">
          <i className="absolute -left-[22px] top-3 w-3.5 h-3.5 rounded-full border-2" style={{ borderColor: 'var(--cg-edge)', ...tint(c, 0.85) }} />
          <Panel className="space-y-1.5 !py-2">
            <Bar w={[54, 44, 60, 40][r]} o={0.28} />
            <Bar w={[84, 70, 76, 66][r]} />
          </Panel>
        </div>
      ))}
    </div>
  ),
  carousel: () => (
    <div className="space-y-3">
      <div className="relative h-[170px]">
        <Panel className="absolute left-0 top-5 bottom-5 w-[34%] opacity-60" style={tint('b', 0.18)} />
        <Panel className="absolute right-0 top-5 bottom-5 w-[34%] opacity-60" style={tint('c', 0.18)} />
        <Panel className="absolute left-[14%] right-[14%] top-0 bottom-0 space-y-2" style={{ ...tint('a', 0.2), boxShadow: '0 22px 44px -18px rgba(0,0,0,0.55)' }}>
          <div className="h-[88px] rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(var(--cg-a),0.55), rgba(var(--cg-b),0.5))' }} />
          <Bar w={64} o={0.3} />
          <Bar w={44} />
        </Panel>
      </div>
      <div className="flex justify-center gap-1.5">
        <Dot c="a" />
        <Dot />
        <Dot />
        <Dot />
      </div>
    </div>
  ),
  snackbar: () => (
    <div className="relative h-[190px]">
      {(['c', 'b', 'a'] as Tone[]).map((c, i) => (
        <Panel
          key={c}
          className="absolute left-0 right-0 flex items-center gap-2.5"
          style={{ bottom: i * 26, transform: `scale(${1 - (2 - i) * 0.06})`, transformOrigin: 'bottom center', opacity: 0.6 + i * 0.2, ...(i === 2 ? { boxShadow: '0 20px 40px -16px rgba(0,0,0,0.5)' } : null) }}
        >
          <Dot c={c} s={18} />
          <div className="flex-1 space-y-1.5">
            <Bar w={50} o={0.28} />
            <Bar w={80} />
          </div>
          <Chip w={34} h={18} />
        </Panel>
      ))}
    </div>
  ),
  'file-upload': () => (
    <div className="space-y-3">
      <div className="rounded-xl border-2 border-dashed py-5 flex flex-col items-center gap-2" style={{ borderColor: 'rgba(var(--cg-a), 0.5)', ...tint('a', 0.08) }}>
        <Dot c="a" s={30} />
        <Bar w={46} o={0.26} />
        <Bar w={30} />
      </div>
      {[70, 40].map((p, r) => (
        <Panel key={r} className="!py-2 space-y-1.5">
          <div className="flex items-center gap-2">
            <Dot c={r ? 'b' : 'c'} s={12} />
            <Bar w={40} o={0.24} />
          </div>
          <i className="block h-1.5 rounded-full" style={ink(0.1)}>
            <i className="block h-full rounded-full" style={{ width: `${p}%`, ...tint('a', 0.8) }} />
          </i>
        </Panel>
      ))}
    </div>
  ),
  'transfer-list': () => (
    <div className="flex items-center gap-2">
      {[0, 1].map((side) => (
        <Panel key={side} className="flex-1 space-y-1">
          <Bar w={50} o={0.28} />
          {[0, 1, 2, 3, 4].map((r) => (
            <Row key={r} hot={side === 0 && r === 1}>
              <i className="block w-2.5 h-2.5 rounded-[3px] shrink-0" style={r === 1 && side === 0 ? tint('a', 0.8) : ink(0.24)} />
              <Bar w={[60, 50, 70, 44, 56][r]} />
            </Row>
          ))}
        </Panel>
      ))}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-1.5">
        <Dot c="a" s={22} />
        <Dot s={22} />
      </div>
    </div>
  ),
  dock: () => (
    <div className="flex items-end justify-center gap-2 h-[150px]">
      {([40, 48, 62, 78, 62, 48, 40] as number[]).map((s, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <i className="block rounded-2xl" style={{ width: s, height: s, ...tint((['a', 'b', 'c'] as Tone[])[i % 3], i === 3 ? 0.8 : 0.45), boxShadow: i === 3 ? '0 14px 30px -10px rgba(var(--cg-a),0.7)' : undefined }} />
          <Dot s={4} c={i === 3 ? 'a' : undefined} />
        </div>
      ))}
    </div>
  ),
  speedometer: () => (
    <div className="space-y-3">
      <svg viewBox="0 0 120 78" className="w-full" aria-hidden>
        <path d="M14 68 A46 46 0 0 1 106 68" fill="none" strokeWidth="11" strokeLinecap="round" style={{ stroke: 'color-mix(in srgb, var(--app-text) 14%, transparent)' }} />
        <path d="M14 68 A46 46 0 0 1 84 28" fill="none" strokeWidth="11" strokeLinecap="round" style={{ stroke: 'rgb(var(--cg-a))' }} />
        <path d="M84 28 A46 46 0 0 1 106 68" fill="none" strokeWidth="11" strokeLinecap="round" opacity="0.35" style={{ stroke: 'rgb(var(--cg-c))' }} />
        <line x1="60" y1="68" x2="82" y2="40" strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--app-text)' }} />
        <circle cx="60" cy="68" r="5" style={{ fill: 'var(--app-text)' }} />
      </svg>
      <div className="flex gap-2">
        <Panel className="flex-1 !py-2 space-y-1.5">
          <Bar w={50} o={0.26} />
          <Bar w={34} c="a" />
        </Panel>
        <Panel className="flex-1 !py-2 space-y-1.5">
          <Bar w={44} o={0.26} />
          <Bar w={60} c="c" />
        </Panel>
      </div>
    </div>
  ),
};

export interface FeaturedRailItem {
  id: string;
  icon: LucideIcon;
  blurb: string;
  comp: ComponentLite;
}

/** Horizontal rail of tall preview cards: illustrated scene, category and size pills, icon and title over a fade. */
export const FeaturedRail: React.FC<{ items: FeaturedRailItem[]; onSelect: (c: ComponentLite) => void }> = ({ items, onSelect }) => {
  const rail = useRef<HTMLDivElement>(null);
  const page = (dir: 1 | -1) => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    rail.current?.scrollBy({ left: dir * 584, behavior: reduce ? 'auto' : 'smooth' });
  };
  return (
    <div className="relative">
      <div
        ref={rail}
        className="flex gap-5 overflow-x-auto pb-5 pt-1 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType: 'x proximity',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)',
        }}
      >
        {items.map(({ id, icon: Icon, blurb, comp }, idx) => {
          const Scene = SCENES[id];
          return (
            <SnapItem key={id} i={1 + idx * 0.3} className="shrink-0" >
              <button
                onClick={() => onSelect(comp)}
                aria-label={`${comp.name}: open documentation`}
                className="glass-card group relative block w-[272px] text-left cursor-pointer"
                style={{ height: 'clamp(300px, calc(100dvh - var(--header-h, 3.5rem) - 300px), 400px)', scrollSnapAlign: 'start' }}
              >
                {/* The scene (the card's "screenshot") */}
                <div className="absolute inset-0 px-4 pt-14 pb-40 overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.05]" aria-hidden>
                  {Scene ? <Scene /> : null}
                </div>
                {/* Fade so the title always reads */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[58%] pointer-events-none"
                  style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--cg-base) 96%, transparent) 0%, color-mix(in srgb, var(--cg-base) 78%, transparent) 50%, transparent 100%)' }}
                />
                {/* Pills */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: 'color-mix(in srgb, var(--app-text) 10%, transparent)', color: 'var(--app-text)' }}>
                    {comp.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{ background: 'linear-gradient(135deg, rgb(var(--cg-a)), rgb(var(--cg-b)))', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}>
                    {comp.totalProps} props
                  </span>
                </div>
                {/* Icon, title, summary */}
                <div className="absolute inset-x-4 bottom-4">
                  <span className="mb-3 flex w-11 h-11 items-center justify-center rounded-xl border" style={{ borderColor: 'var(--cg-edge)', background: 'color-mix(in srgb, var(--app-text) 8%, transparent)', color: 'var(--app-text)' }}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-[22px] font-extrabold leading-tight text-white">{comp.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400 line-clamp-2">{blurb}</p>
                </div>
              </button>
            </SnapItem>
          );
        })}
      </div>
      <div className="flex justify-center gap-3 mt-1">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            onClick={() => page(dir)}
            aria-label={dir === 1 ? 'Show more components' : 'Show previous components'}
            className="glass-card !rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
            style={{ color: 'var(--app-text)' }}
          >
            {dir === 1 ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        ))}
      </div>
    </div>
  );
};
