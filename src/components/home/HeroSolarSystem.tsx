import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Sparkles, 
  Layers, 
  Maximize2, 
  Globe, 
  Search, 
  Bell, 
  ChevronRight, 
  Sliders, 
  ShieldCheck, 
  ArrowUpRight,
  TrendingUp,
  Cpu,
  RefreshCw,
  Zap,
  MousePointer
} from 'lucide-react';
import { COMPONENTS_LITE, TOTALS, type ComponentLite } from '../../data/lite';
import { AtherButton, AtherBadge, AtherChart } from '../ui/AtherUIElements';
import { SnapBlock, SnapItem } from './SnapPage';
import BUNDLE from '../../data/bundleStats.json';

// The solar system: elliptical rings of planets. Inner rings move faster and the middle ring runs the other way.
// Phones get two compact rings that fit the screen width.
const RING_SETS = {
  // radius as a share of the outer radius, how fast it turns, and how many planets ride it
  wide: [
    { f: 0.65, speed: 1, count: 5 },
    { f: 0.83, speed: -0.7, count: 7 },
    { f: 1, speed: 0.5, count: 9 },
  ],
  small: [
    { f: 0.7, speed: 1, count: 4 },
    { f: 1, speed: -0.7, count: 7 },
  ],
} as const;
type RingSpec = { readonly f: number; readonly speed: number; readonly count: number };
type Ring = { readonly r: number; readonly speed: number; readonly count: number };

/** Components people reach for first; the rest of the library fills any gaps. */
const PICKS = [
  'button', 'input', 'dropdown', 'checkbox', 'switch', 'tabs', 'dialog-box', 'card', 'badge', 'avatar', 'tooltip', 'popover',
  'snackbar', 'advanced-data-table', 'tree', 'timeline', 'carousel', 'command-palette', 'accordion', 'pagination', 'smart-stepper',
];

interface OrbitSlot {
  comp: ComponentLite;
  rx: number;
  ry: number;
  speed: number;
  phase: number;
}

function buildSlots(rings: readonly Ring[]): OrbitSlot[] {
  const picked = PICKS.flatMap((id) => {
    const c = COMPONENTS_LITE.find((x) => x.id === id);
    return c ? [c] : [];
  });
  const total = rings.reduce((n, r) => n + r.count, 0);
  const pool = [...picked, ...COMPONENTS_LITE.filter((c) => !picked.includes(c))].slice(0, total);
  const slots: OrbitSlot[] = [];
  let k = 0;
  rings.forEach((ring, ri) => {
    for (let j = 0; j < ring.count && k < pool.length; j++) {
      slots.push({ comp: pool[k++], rx: ring.r, ry: ring.r, speed: ring.speed, phase: (360 / ring.count) * j + ri * 23 });
    }
  });
  return slots;
}

/** Position of one planet on its elliptical orbit, with a depth illusion (closer = bigger, brighter, in front). */
function planetStyle(slot: OrbitSlot, angle: number, hovered: boolean) {
  const rad = ((angle * slot.speed + slot.phase) * Math.PI) / 180;
  const x = Math.cos(rad) * slot.rx;
  const y = Math.sin(rad) * slot.ry;
  const zDepth = Math.sin(rad); // -1 (back) to +1 (front)
  const scale = 0.85 + (zDepth + 1) * 0.15; // 0.85 to 1.15
  return {
    transform: `translate(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px)) scale(${scale.toFixed(3)})`,
    zIndex: String(hovered ? 40 : zDepth > 0 ? 25 : 5),
    opacity: String(hovered ? 1 : 0.75 + (zDepth + 1) * 0.125),
  };
}

interface HeroSolarSystemProps {
  onSelectComponent: (comp: ComponentLite) => void;
  onExploreCatalog: () => void;
  onOpenPlayground: (componentId?: string) => void;
}

export const HeroSolarSystem: React.FC<HeroSolarSystemProps> = ({
  onSelectComponent,
  onExploreCatalog,
  onOpenPlayground
}) => {
  // People who ask the OS for less motion get a still orbit (they can still press Resume)
  const [isRotating, setIsRotating] = useState(
    () => !(typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
  );
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [hoveredComponent, setHoveredComponent] = useState<ComponentLite | null>(null);
  const [activeMetricTab, setActiveMetricTab] = useState<'latency' | 'memory' | 'threads'>('latency');
  const [dashboardRowChecked, setDashboardRowChecked] = useState<Record<string, boolean>>({
    'node-1': true,
    'node-2': true,
    'node-3': false
  });

  // Orbit animation. The angle lives in a ref and each frame writes the planets' transforms directly, so the
  // hero is not re-rendered 60 times a second (that re-render was what made scrolling the home page choppy).
  // The loop only runs while the hero is on screen and the tab is visible.
  const heroRef = useRef<HTMLDivElement>(null);
  const [small, setSmall] = useState(() => typeof window !== 'undefined' && window.matchMedia?.('(max-width: 640px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const on = () => setSmall(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  // The orbit radius comes from the stage's own size, so the circles fit any window
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageBox, setStageBox] = useState({ w: 1000, h: 560 });
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setStageBox((b) => (Math.abs(b.w - width) < 2 && Math.abs(b.h - height) < 2 ? b : { w: width, h: height }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const outer = Math.max(110, Math.min(stageBox.h / 2 - 26, stageBox.w / 2 - (small ? 48 : 70)));
  const specs: readonly RingSpec[] = small ? RING_SETS.small : RING_SETS.wide;
  const rings: Ring[] = useMemo(() => specs.map((sp) => ({ r: Math.round(sp.f * outer), speed: sp.speed, count: sp.count })), [specs, Math.round(outer)]); // eslint-disable-line react-hooks/exhaustive-deps
  const slots = useMemo(() => buildSlots(rings), [rings]);
  // The sample window has to fit inside the inner ring: its half-diagonal is about 413px at full size
  const sunScale = Math.max(0.28, (rings[0].r - 34) / 413);
  const slotsRef = useRef(slots);
  slotsRef.current = slots;
  const angleRef = useRef(0);
  const focusPauseRef = useRef(false);
  const planetRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoveredIdRef = useRef<string | null>(null);
  hoveredIdRef.current = hoveredComponent?.id ?? null;

  useEffect(() => {
    if (!isRotating) return;
    let raf = 0;
    let last: number | null = null;
    let onScreen = true;
    const frame = (time: number) => {
      if (last !== null) {
        if (!focusPauseRef.current) angleRef.current = (angleRef.current + (time - last) * 0.015 * rotationSpeed) % 360;
        slotsRef.current.forEach((slot, idx) => {
          const el = planetRefs.current[idx];
          if (el) Object.assign(el.style, planetStyle(slot, angleRef.current, hoveredIdRef.current === slot.comp.id));
        });
      }
      last = time;
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (!raf && onScreen && !document.hidden) {
        last = null;
        raf = requestAnimationFrame(frame);
      }
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    if (heroRef.current) io.observe(heroRef.current);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);
    start();
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRotating, rotationSpeed, small]);

  return (
    <div ref={heroRef} className="relative w-full bg-black">
      {/* ============ BLOCK 1: headline and calls to action ============ */}
      <SnapBlock id="intro" label="Overview" variant={1} className="items-center px-4 py-10">
      {/* Top Banner / Value Proposition Header */}
      <div className="relative z-20 text-center max-w-4xl mx-auto mb-8 px-4">
        <SnapItem i={0}>
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 text-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Universal StencilJS Web Components for Enterprise</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">atomicuilibrary v{BUNDLE.version}</span>
        </div>
        </SnapItem>

        <SnapItem i={1}>
        <h1 className="text-[1.85rem] leading-[1.15] sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight sm:leading-[1.1] mb-4 break-words">
          The Solar System of <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400">
            Autonomous UI Components
          </span>
        </h1>
        </SnapItem>

        <SnapItem i={2}>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-6">
          Framework-agnostic design system compiled with StencilJS. Components that load on demand, keep their styles inside Shadow DOM, and work the same in React, Angular, Vue and Next.js.
        </p>
        </SnapItem>

        {/* Primary Call to Actions */}
        <SnapItem i={3}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <AtherButton
            variant="neon"
            size="lg"
            glow
            startIcon={<Zap className="w-4 h-4" />}
            onClick={() => onOpenPlayground('button')}
          >
            Launch Design Studio
          </AtherButton>

          <AtherButton
            variant="secondary"
            size="lg"
            startIcon={<Layers className="w-4 h-4" />}
            onClick={onExploreCatalog}
          >
            Explore {TOTALS.components} Components
          </AtherButton>
        </div>
        </SnapItem>
      </div>
      {/* Scroll cue */}
      <div className="absolute bottom-7 left-0 right-0 flex justify-center pointer-events-none">
        <SnapItem i={5}>
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-slate-400">
            <span>Scroll</span>
            <span className="block w-px h-9 bg-gradient-to-b from-sky-400 to-transparent animate-pulse" />
          </div>
        </SnapItem>
      </div>
      </SnapBlock>

      {/* ============ BLOCK 2: the solar system ============ */}
      <SnapBlock id="orbit" label="Solar system" variant={2} className="items-center px-4 py-6">
      <SnapItem i={0} className="w-full flex justify-center">
      {/* ========================================================
          SOLAR SYSTEM STAGE: CENTER BROWSER + ORBITING PLANETS
          ======================================================== */}
      <div
        ref={stageRef}
        className="relative w-full max-w-[1240px] h-[440px] sm:h-[min(700px,calc(100dvh-var(--header-h,3.5rem)-9rem))] flex items-center justify-center z-10 my-2"
      >
        {/* Orbit paths: one circle per ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" aria-hidden>
          {rings.map((ring, idx) => (
            <div
              key={idx}
              className="absolute rounded-full border border-sky-500/20"
              style={{ width: ring.r * 2, height: ring.r * 2, boxShadow: idx === 1 ? '0 0 30px rgba(56, 189, 248, 0.08)' : 'none' }}
            />
          ))}
        </div>

        
        {small ? (
          <div className="glass-card relative z-10 w-32 h-32 !rounded-full flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-extrabold font-mono text-white">{TOTALS.components}</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400">components</span>
          </div>
        ) : (
          <>
        {/* CENTER FLOATING BROWSER WINDOW (The "Sun" Application) */}
        <div className="glass-card relative w-full max-w-[700px] h-[440px] overflow-hidden flex flex-col z-10" style={{ transform: `scale(${sunScale})` }}>
          
          {/* Browser Chrome Header */}
          <div className="h-10 bg-slate-950/80 border-b border-white/10 px-4 flex items-center justify-between select-none">
            {/* Window control traffic lights */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
            </div>

            {/* Browser URL Bar */}
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/90 rounded-lg border border-slate-700/60 text-[11px] text-slate-300 font-mono w-72 justify-center">
              <Globe className="w-3 h-3 text-sky-400" />
              <span>sample-app/dashboard</span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-[10px] text-slate-400 font-mono">Sample data</span>
              <Maximize2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Browser Inner Dashboard Application */}
          <div className="flex-1 p-5 overflow-hidden flex flex-col gap-4 text-left bg-gradient-to-b from-slate-950 to-slate-950">
            {/* App Subheader */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-slate-950 font-bold text-xs shadow-md">
                  A
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white tracking-wide">Enterprise Mission Control</h3>
                  <p className="text-[10px] text-slate-400">Powered by AtherUI Stencil Components</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <AtherBadge variant="glow" pulse color="sky">
                  Sample app
                </AtherBadge>
                <button aria-label="Notifications (sample)" className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white">
                  <Bell className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Dashboard Quick Metric Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 transition-colors">
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Components</span>
                  <Zap className="w-3 h-3 text-sky-400" />
                </div>
                <div className="text-base font-bold text-white font-mono mt-1">{TOTALS.components}</div>
                <div className="text-[9px] text-emerald-400">in the catalog</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-colors">
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Lazy chunks</span>
                  <Cpu className="w-3 h-3 text-purple-400" />
                </div>
                <div className="text-base font-bold text-white font-mono mt-1 tabular-nums">{BUNDLE.lazyChunks}</div>
                <div className="text-[9px] text-purple-400">load on demand</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Core entry</span>
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="text-base font-bold text-white font-mono mt-1">{BUNDLE.entryJsKb} KB</div>
                <div className="text-[9px] text-cyan-400">gzipped</div>
              </div>
            </div>

            {/* Interactive Telemetry Chart & Table Split */}
            <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
              {/* Telemetry Chart Component */}
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-slate-200">Sample chart</span>
                  <span className="text-[9px] font-mono text-sky-400">AtherChart</span>
                </div>
                <AtherChart 
                  data={[42, 58, 65, 80, 74, 92, 108, 115, 128, 142]} 
                  height={80}
                  color="#38bdf8"
                />
              </div>

              {/* Interactive Telemetry Table Component */}
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold text-slate-200">Framework setup</span>
                  <span className="text-[9px] text-emerald-400 font-medium">3 guides</span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  {[
                    { id: 'node-1', name: 'React', state: 'Active', latency: 'ref + events' },
                    { id: 'node-2', name: 'Next.js', state: 'Streaming', latency: 'client only' },
                    { id: 'node-3', name: 'Angular', state: 'Ready', latency: 'CUSTOM_ELEMENTS_SCHEMA' }
                  ].map((row) => (
                    <div 
                      key={row.id}
                      onClick={() => setDashboardRowChecked(prev => ({ ...prev, [row.id]: !prev[row.id] }))}
                      className="flex items-center justify-between p-1.5 rounded-lg bg-slate-950/60 border border-white/5 hover:border-sky-500/30 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${dashboardRowChecked[row.id] ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                        <span className="text-slate-300 text-[10px]">{row.name}</span>
                      </div>
                      <span className="text-slate-400 font-mono text-[9px]">{row.latency}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/5">
                  <span className="text-[9px] text-slate-400">Lazy-loaded on demand</span>
                  <AtherButton size="sm" variant="outline" onClick={() => onOpenPlayground('table')} className="text-[10px] py-1 px-2">
                    Inspect Grid
                  </AtherButton>
                </div>
              </div>
            </div>

          </div>
        </div>

          </>
        )}

        {/* ORBITING COMPONENT PLANETS (Real Math-Based 2D/3D Projection) */}
        {slots.map((slot, idx) => {
          const comp = slot.comp;
          const isHovered = hoveredComponent?.id === comp.id;

          return (
            <div
              key={comp.id}
              ref={(el) => {
                planetRefs.current[idx] = el;
              }}
              className="absolute top-1/2 left-1/2 select-none will-change-transform"
              style={planetStyle(slot, angleRef.current, isHovered)}
            >
              {/* Planetary UI Orb / Trigger */}
              <div
                onMouseEnter={() => setHoveredComponent(comp)}
                onMouseLeave={() => setHoveredComponent(null)}
                className={`relative group transition-all duration-300 flex items-center justify-center ${
                  isHovered ? 'scale-125' : 'hover:scale-110'
                }`}
              >
                {/* Glow ring */}
                <div 
                  className="absolute -inset-2 rounded-2xl blur-md opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: comp.color }}
                />

                {/* Orb Container */}
                {/* Near-opaque instead of backdrop-blur: a blur under a moving chip is repainted every frame */}
                <button
                  type="button"
                  onClick={() => onSelectComponent(comp)}
                  onFocus={() => {
                    focusPauseRef.current = true; // a moving target cannot be keyboard-operated, so the orbit holds still
                    setHoveredComponent(comp);
                  }}
                  onBlur={() => {
                    focusPauseRef.current = false;
                    setHoveredComponent(null);
                  }}
                  aria-label={`Open ${comp.name} documentation`}
                  className="relative px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-xl bg-slate-900/95 border border-white/20 flex items-center gap-2 shadow-2xl text-[10px] sm:text-xs font-semibold text-white cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2"
                >
                  <span
                    aria-hidden
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: comp.color, boxShadow: `0 0 10px ${comp.color}` }}
                  />
                  <span>{comp.name}</span>
                </button>

                {/* Floating Detailed Hover Card */}
                {isHovered && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 p-4 rounded-xl bg-slate-900/95 border border-sky-500/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(56,189,248,0.2)] text-left z-50 pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectComponent(comp);
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-white">{comp.name}</span>
                      <code className="text-[10px] text-sky-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 font-mono">
                        {comp.tag}
                      </code>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                      {comp.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 border-t border-slate-800 pt-2 mb-3">
                      <div>Props: <strong className="text-white">{comp.totalProps}</strong></div>
                      <div>Events: <strong className="text-white">{comp.totalEvents}</strong></div>
                      <div>Variants: <strong className="text-white">{comp.variantsCount}</strong></div>
                      <div>Status: <strong className="text-emerald-400">{comp.status}</strong></div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-sky-400 font-medium">
                      <span>Click for full API</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      </SnapItem>

      {/* Solar System Bottom Controls */}
      <SnapItem i={1} className="relative z-20 flex justify-center mt-2">
      <div className="relative z-20 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
        >
          {isRotating ? <Pause className="w-3.5 h-3.5 text-sky-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          <span>{isRotating ? 'Pause Orbit' : 'Resume Orbit'}</span>
        </button>

        <span className="text-slate-600">|</span>

        <div className="flex items-center gap-2">
          <span className="text-slate-400">Velocity:</span>
          {[0.5, 1, 2].map((spd) => (
            <button
              key={spd}
              onClick={() => setRotationSpeed(spd)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                rotationSpeed === spd ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              {spd}x
            </button>
          ))}
        </div>

        <span className="hidden sm:inline text-slate-600">|</span>

        <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
          <MousePointer className="w-3 h-3 text-sky-400" />
          <span>Hover any orb to inspect, click for API specs</span>
        </div>
      </div>
      </SnapItem>
      </SnapBlock>
    </div>
  );
};
