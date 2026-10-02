import React, { useState, useEffect, useRef } from 'react';
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
import { ALL_COMPONENTS } from '../../data/components';
import { ComponentItem } from '../../types';
import { AtherButton, AtherBadge, AtherChart } from '../ui/AtherUIElements';

interface HeroSolarSystemProps {
  onSelectComponent: (comp: ComponentItem) => void;
  onExploreCatalog: () => void;
  onOpenPlayground: (componentId?: string) => void;
}

export const HeroSolarSystem: React.FC<HeroSolarSystemProps> = ({
  onSelectComponent,
  onExploreCatalog,
  onOpenPlayground
}) => {
  const [isRotating, setIsRotating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [hoveredComponent, setHoveredComponent] = useState<ComponentItem | null>(null);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [activeMetricTab, setActiveMetricTab] = useState<'latency' | 'memory' | 'threads'>('latency');
  const [dashboardRowChecked, setDashboardRowChecked] = useState<Record<string, boolean>>({
    'node-1': true,
    'node-2': true,
    'node-3': false
  });
  const [liveCounter, setLiveCounter] = useState(14820);

  // Rotation animation loop
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== null && isRotating) {
        const delta = time - previousTimeRef.current;
        setCurrentAngle((prev) => (prev + (delta * 0.015 * rotationSpeed)) % 360);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isRotating, rotationSpeed]);

  // Periodic heartbeat for live dashboard
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounter((prev) => prev + Math.floor(Math.random() * 5) - 2);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Solar system orbiting components
  const orbitingComponents = ALL_COMPONENTS.slice(0, 10);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-4">
      {/* Deep Space Background Atmosphere */}
      <div className="absolute inset-0 bg-[#05070f] z-0" />
      
      {/* Aurora Radial Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-sky-500/15 via-purple-600/10 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 right-10 w-[600px] h-[600px] bg-gradient-to-t from-cyan-500/10 via-sky-600/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Floating Starfield Particles */}
      <div className="absolute inset-0 grid-subtle opacity-30 pointer-events-none z-0" />

      {/* Concentric Orbit Rings in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        {[240, 320, 400, 480, 560].map((radius, idx) => (
          <div
            key={radius}
            className="absolute rounded-full border border-sky-500/[0.08] -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              boxShadow: idx === 1 || idx === 3 ? '0 0 25px rgba(56, 189, 248, 0.03)' : 'none'
            }}
          />
        ))}
      </div>

      {/* Top Banner / Value Proposition Header */}
      <div className="relative z-20 text-center max-w-4xl mx-auto mb-8 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-medium mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Universal StencilJS Web Components for Enterprise</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">v3.4.2 Released</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
          The Solar System of <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400">
            Autonomous UI Components
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-6">
          Framework-agnostic design system compiled with StencilJS. Sub-millisecond hydration, zero style leakage, and complete freedom across React, Angular, Vue, and Next.js.
        </p>

        {/* Primary Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <AtherButton
            variant="neon"
            size="lg"
            glow
            startIcon={<Zap className="w-4 h-4" />}
            onClick={() => onOpenPlayground('button')}
          >
            Launch Live Playground
          </AtherButton>

          <AtherButton
            variant="secondary"
            size="lg"
            startIcon={<Layers className="w-4 h-4" />}
            onClick={onExploreCatalog}
          >
            Explore {ALL_COMPONENTS.length} Components
          </AtherButton>
        </div>
      </div>

      {/* ========================================================
          SOLAR SYSTEM STAGE: CENTER BROWSER + ORBITING PLANETS
          ======================================================== */}
      <div className="relative w-full max-w-[1240px] h-[640px] flex items-center justify-center z-10 my-4">
        
        {/* CENTER FLOATING BROWSER WINDOW (The "Sun" Application) */}
        <div className="relative w-full max-w-[700px] h-[440px] bg-slate-900/90 backdrop-blur-2xl border border-sky-500/30 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(56,189,248,0.12)] overflow-hidden flex flex-col z-10 transition-transform duration-500 hover:scale-[1.01]">
          
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
              <span>ather://app.core/telemetry-v3</span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-[10px] text-emerald-400 font-mono">60 FPS</span>
              <Maximize2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Browser Inner Dashboard Application */}
          <div className="flex-1 p-5 overflow-hidden flex flex-col gap-4 text-left bg-gradient-to-b from-[#090d1c] to-[#060913]">
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
                  Live Stream
                </AtherBadge>
                <button className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white">
                  <Bell className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Dashboard Quick Metric Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 transition-colors">
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Hydration Time</span>
                  <Zap className="w-3 h-3 text-sky-400" />
                </div>
                <div className="text-base font-bold text-white font-mono mt-1">0.38 ms</div>
                <div className="text-[9px] text-emerald-400 flex items-center gap-1 mt-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> -62% vs Monolithic
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-colors">
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Web Components</span>
                  <Cpu className="w-3 h-3 text-purple-400" />
                </div>
                <div className="text-base font-bold text-white font-mono mt-1 tabular-nums">
                  {liveCounter.toLocaleString()}
                </div>
                <div className="text-[9px] text-purple-400">W3C Shadow DOM</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Accessibility Score</span>
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="text-base font-bold text-white font-mono mt-1">100 / 100</div>
                <div className="text-[9px] text-cyan-400">WCAG 2.2 AAA</div>
              </div>
            </div>

            {/* Interactive Telemetry Chart & Table Split */}
            <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
              {/* Telemetry Chart Component */}
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-slate-200">Execution Velocity</span>
                  <span className="text-[9px] font-mono text-sky-400">Stencil V4 Compiler</span>
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
                  <span className="text-[11px] font-semibold text-slate-200">Edge Framework Nodes</span>
                  <span className="text-[9px] text-emerald-400 font-medium">3 Online</span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  {[
                    { id: 'node-1', name: 'React 19 Wrapper', state: 'Active', latency: '0.2ms' },
                    { id: 'node-2', name: 'Next.js App Router', state: 'Streaming', latency: '0.4ms' },
                    { id: 'node-3', name: 'Angular 19 Directive', state: 'Ready', latency: '0.3ms' }
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
                  <span className="text-[9px] text-slate-400">Auto-hydration active</span>
                  <AtherButton size="sm" variant="outline" onClick={() => onOpenPlayground('table')} className="text-[10px] py-1 px-2">
                    Inspect Grid
                  </AtherButton>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ORBITING COMPONENT PLANETS (Real Math-Based 2D/3D Projection) */}
        {orbitingComponents.map((comp, idx) => {
          // Calculate angle for this component
          const speedMultiplier = (comp.orbitSpeed || 40) / 40;
          const angleDeg = (currentAngle * speedMultiplier + (comp.angleOffset || idx * 36)) % 360;
          const angleRad = (angleDeg * Math.PI) / 180;
          
          // Elliptical orbit projection
          const radiusX = (comp.orbitRadius || 240) + 140;
          const radiusY = (comp.orbitRadius || 240) * 0.42 + 60;
          
          const x = Math.cos(angleRad) * radiusX;
          const y = Math.sin(angleRad) * radiusY;

          // Depth illusion based on Y coordinate (closer = bigger & higher z-index)
          const zDepth = Math.sin(angleRad); // -1 (back) to +1 (front)
          const scale = 0.85 + (zDepth + 1) * 0.15; // 0.85 to 1.15
          const zIndex = zDepth > 0 ? 25 : 5;
          const opacity = 0.75 + (zDepth + 1) * 0.125;

          const isHovered = hoveredComponent?.id === comp.id;

          return (
            <div
              key={comp.id}
              className="absolute top-1/2 left-1/2 transition-transform duration-75 select-none"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
                zIndex: isHovered ? 40 : zIndex,
                opacity: isHovered ? 1 : opacity
              }}
            >
              {/* Planetary UI Orb / Trigger */}
              <div
                onMouseEnter={() => setHoveredComponent(comp)}
                onMouseLeave={() => setHoveredComponent(null)}
                onClick={() => onSelectComponent(comp)}
                className={`relative group cursor-pointer transition-all duration-300 flex items-center justify-center ${
                  isHovered ? 'scale-125' : 'hover:scale-110'
                }`}
              >
                {/* Glow ring */}
                <div 
                  className="absolute -inset-2 rounded-2xl blur-md opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: comp.color }}
                />

                {/* Orb Container */}
                <div className="relative px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/20 backdrop-blur-xl flex items-center gap-2 shadow-2xl text-xs font-semibold text-white">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: comp.color, boxShadow: `0 0 10px ${comp.color}` }}
                  />
                  <span>{comp.name}</span>
                </div>

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
                      <div>WCAG: <strong className="text-emerald-400">100% AAA</strong></div>
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

      {/* Solar System Bottom Controls */}
      <div className="relative z-20 mt-4 flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl backdrop-blur-md text-xs text-slate-300">
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

        <span className="text-slate-600">|</span>

        <div className="flex items-center gap-1.5 text-slate-400">
          <MousePointer className="w-3 h-3 text-sky-400" />
          <span>Hover any orb to inspect, click for API specs</span>
        </div>
      </div>
    </div>
  );
};
