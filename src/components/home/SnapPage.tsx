import React, { useEffect, useRef, useState } from 'react';
import { Lock, Unlock } from 'lucide-react';

const prefersReducedMotion = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** One full-screen block of the home page. Children marked with <SnapItem> animate in while the block is active. */
export const SnapBlock: React.FC<{ id: string; label: string; variant?: 1 | 2 | 3 | 4; className?: string; children: React.ReactNode }> = ({
  id,
  label,
  variant = 1,
  className = '',
  children,
}) => (
  <section id={`snap-${id}`} data-label={label} aria-label={label} className={`snap-block relative w-full flex flex-col justify-center overflow-hidden ${className}`}>
    {/* Cinematic backdrop: colour aurora, glass orbs, a light beam that sweeps in, a grid and a vignette */}
    <div aria-hidden className={`cine-stage cine-v${variant}`}>
      <div className="cine-aurora" />
      <div className="cine-grid" />
      <div className="cine-orb cine-orb-a" />
      <div className="cine-orb cine-orb-b" />
      <div className="cine-beam" />
      <div className="cine-vignette" />
    </div>
    {children}
  </section>
);

/** Staggered enter animation: `i` is the position in the sequence (0 appears first). */
export const SnapItem: React.FC<{ i?: number; className?: string; children: React.ReactNode }> = ({ i = 0, className = '', children }) => (
  <div className={`snap-item ${className}`} style={{ ['--i' as string]: i }}>
    {children}
  </div>
);

interface BlockInfo {
  id: string;
  label: string;
}

/**
 * Wraps the home page blocks: switches on one-block-per-scroll snapping for the page, marks the block that is on
 * screen (data-active drives the enter animation, set straight on the element so nothing re-renders) and shows a
 * dot pager to jump between blocks.
 */
export const SnapPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const root = useRef<HTMLDivElement>(null);
  const [blocks, setBlocks] = useState<BlockInfo[]>([]);
  const [active, setActive] = useState(0);

  // Some people do not want a page that decides where to stop: "free scroll" turns snapping and the wheel handling
  // off, and the choice is remembered.
  const [free, setFree] = useState(() => {
    try {
      return localStorage.getItem('ather_free_scroll') === '1';
    } catch {
      return false;
    }
  });
  const freeRef = useRef(free);
  freeRef.current = free;
  const toggleFree = () =>
    setFree((v) => {
      try {
        localStorage.setItem('ather_free_scroll', v ? '0' : '1');
      } catch {
        /* storage unavailable */
      }
      return !v;
    });

  // Snapping belongs to the home view only: add the class to <html> while mounted and keep the sticky header clear
  useEffect(() => {
    if (free) return;
    const html = document.documentElement;
    const setPad = () => html.style.setProperty('--snap-pad', `${document.querySelector('header')?.getBoundingClientRect().height ?? 56}px`);
    html.classList.add('snap-home');
    setPad();
    window.addEventListener('resize', setPad);
    // Switching between the sidebar and top bar layouts changes the header height; the app writes --header-h inline
    const wrapper = root.current?.closest<HTMLElement>('[style*="--header-h"]');
    const mo = new MutationObserver(() => requestAnimationFrame(setPad));
    if (wrapper) mo.observe(wrapper, { attributes: true, attributeFilter: ['style'] });
    return () => {
      html.classList.remove('snap-home');
      html.style.removeProperty('--snap-pad');
      window.removeEventListener('resize', setPad);
      mo.disconnect();
    };
  }, [free]);

  useEffect(() => {
    const els = Array.from(root.current?.querySelectorAll<HTMLElement>('.snap-block') ?? []);
    setBlocks(els.map((e) => ({ id: e.id, label: e.dataset.label ?? '' })));
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((e) => (e.dataset.active = 'true'));
      return;
    }
    // A block is active while it overlaps the middle band of the window. Using a band instead of a visible
    // percentage keeps blocks taller than the window (small screens) from never activating.
    const live = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          const el = en.target as HTMLElement;
          if (en.isIntersecting) live.add(el);
          else live.delete(el);
          el.dataset.active = String(en.isIntersecting);
        });
        const first = els.findIndex((e) => live.has(e));
        if (first >= 0) setActive(first);
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  // Wheel / trackpad: one gesture moves exactly one block. CSS snapping alone cannot promise that: a hard flick or
  // trackpad momentum carries several blocks, and a gentle notch can fall back to where it started. Touch and keyboard
  // keep using the CSS snap points.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px) and (min-height: 601px)');
    let lockUntil = 0;
    let lastWheel = 0;
    let locked = false;

    // Snap targets in page order: every block (aligned to its top) and the footer (aligned to the window bottom)
    const targets = () => {
      const list: { el: HTMLElement; end: boolean }[] = Array.from(root.current?.querySelectorAll<HTMLElement>('.snap-block') ?? []).map((el) => ({ el, end: false }));
      const foot = document.querySelector<HTMLElement>('.snap-foot');
      if (foot) list.push({ el: foot, end: true });
      return list;
    };
    const current = (list: { el: HTMLElement; end: boolean }[]) => {
      const pad = parseFloat(document.documentElement.style.getPropertyValue('--snap-pad')) || 56;
      let best = 0;
      let bestDist = Infinity;
      list.forEach(({ el, end }, i) => {
        const r = el.getBoundingClientRect();
        const dist = end ? Math.abs(r.bottom - window.innerHeight) : Math.abs(r.top - pad);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      return best;
    };

    const onWheel = (ev: WheelEvent) => {
      if (freeRef.current || !desktop.matches || ev.ctrlKey || Math.abs(ev.deltaX) > Math.abs(ev.deltaY)) return; // free scroll, pinch zoom, sideways scroll
      // Let real scrollable controls (text areas, lists in a dialog...) scroll themselves
      if ((ev.target as HTMLElement | null)?.closest?.('textarea, select, [data-no-snap], ui-dialog-box, ui-popover')) return;
      ev.preventDefault();
      const now = performance.now();
      const gap = now - lastWheel;
      lastWheel = now;
      if (Math.abs(ev.deltaY) < 3) return;
      // Momentum keeps sending events after a swipe: stay locked until the move is over AND the events have stopped
      if (locked) {
        if (now < lockUntil || gap < 90) return;
        locked = false;
      }
      const list = targets();
      const next = current(list) + (ev.deltaY > 0 ? 1 : -1);
      if (next < 0 || next >= list.length) return;
      locked = true;
      lockUntil = now + 800;
      const { el, end } = list[next];
      el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: end ? 'end' : 'start' });
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  // The frosted-glass blur is expensive to repaint, so it is off while the page is moving (see cinematic.css)
  useEffect(() => {
    const html = document.documentElement;
    let timer = 0;
    const onScroll = () => {
      if (!html.classList.contains('snap-moving')) html.classList.add('snap-moving');
      window.clearTimeout(timer);
      timer = window.setTimeout(() => html.classList.remove('snap-moving'), 160);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      html.classList.remove('snap-moving');
    };
  }, []);

  // Cursor spotlight on glass cards: hand the pointer position to the CSS, at most once per frame
  const spot = useRef({ raf: 0, x: 0, y: 0, card: null as HTMLElement | null });
  const onPointerMove = (e: React.PointerEvent) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>('.glass-card');
    if (!card) return;
    const s = spot.current;
    s.card = card;
    s.x = e.clientX;
    s.y = e.clientY;
    if (s.raf) return;
    s.raf = requestAnimationFrame(() => {
      s.raf = 0;
      if (!s.card) return;
      const r = s.card.getBoundingClientRect();
      s.card.style.setProperty('--mx', `${s.x - r.left}px`);
      s.card.style.setProperty('--my', `${s.y - r.top}px`);
    });
  };

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });

  return (
    <div ref={root} onPointerMove={onPointerMove} style={{ counterReset: 'snap' }}>
      {children}
      <nav aria-label="Page sections" className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2.5">
        {blocks.map((b, i) => (
          <button
            key={b.id}
            onClick={() => go(b.id)}
            aria-label={b.label}
            aria-current={i === active ? 'true' : undefined}
            className="group relative flex items-center justify-end w-5 h-5 cursor-pointer"
          >
            <span className="absolute right-7 whitespace-nowrap text-[11px] font-medium px-2 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-200 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none">
              {b.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === active ? 'w-2 h-5 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]' : 'w-2 h-2 bg-slate-600 group-hover:bg-slate-300'
              }`}
            />
          </button>
        ))}
        <button
          onClick={toggleFree}
          aria-pressed={free}
          aria-label={free ? 'Page scrolling is free. Turn block snapping back on' : 'Turn block snapping off and scroll freely'}
          title={free ? 'Free scroll is on. Click to snap by section again' : 'Snapping by section. Click to scroll freely'}
          className="mt-2 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer border border-slate-700 bg-slate-900/90 text-slate-300 hover:text-white hover:border-sky-500/60 transition-colors"
        >
          {free ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
        </button>
      </nav>
    </div>
  );
};
