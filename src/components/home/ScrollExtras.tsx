import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const reducedMotion = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Thin reading-progress bar along the top of the window. Updated once per frame at most, and only by writing a
 * transform, so it never triggers layout while scrolling.
 */
export const ScrollProgress: React.FC = () => {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const se = document.scrollingElement ?? document.documentElement;
      const max = se.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, se.scrollTop / max) : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div aria-hidden className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none">
      <div ref={bar} className="h-full origin-left bg-gradient-to-r from-sky-400 via-purple-400 to-emerald-400" style={{ transform: 'scaleX(0)' }} />
    </div>
  );
};

/** Floating "back to top" button, shown once the reader is past the first screen. */
export const BackToTop: React.FC = () => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' })}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center bg-slate-900/95 border border-sky-500/40 text-sky-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:text-white hover:border-sky-400 transition-all duration-300 cursor-pointer ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
