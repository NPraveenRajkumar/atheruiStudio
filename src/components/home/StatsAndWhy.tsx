import React, { useState } from 'react';
import { CATEGORIES_LITE, TOTALS } from '../../data/lite';
import BUNDLE from '../../data/bundleStats.json';
import { 
  Zap, 
  ShieldCheck, 
  Palette, 
  Cpu, 
  BookOpen,
  Check, 
  ArrowRight, 
  BarChart3,
  Layers,
  Sparkles
} from 'lucide-react';
import { AtherButton, AtherBadge } from '../ui/AtherUIElements';
import { SnapBlock, SnapItem } from './SnapPage';

export const StatsAndWhy: React.FC<{
  onExploreThemes: () => void;
  onExplorePlayground: () => void;
}> = ({ onExploreThemes, onExplorePlayground }) => {
  const [selectedBenchmark, setSelectedBenchmark] = useState<'first' | 'component' | 'all'>('first');

  // Every figure here is measured or counted from the library; nothing is estimated.
  const totalProps = TOTALS.props;
  const stats = [
    { metric: `${TOTALS.components}`, label: 'Components', sub: `Across ${CATEGORIES_LITE.length} categories`, icon: Layers, color: '#38bdf8' },
    { metric: '8', label: 'Form-associated controls', sub: 'Join native <form> submit and validation', icon: Check, color: '#10b981' },
    { metric: `${BUNDLE.entryJsKb} KB`, label: 'Core entry, gzipped', sub: `${BUNDLE.lazyChunks} component chunks load on demand`, icon: Zap, color: '#a855f7' },
    { metric: totalProps.toLocaleString('en-US'), label: 'Documented props', sub: 'Plus events and slots, each with a reference', icon: BookOpen, color: '#06b6d4' },
  ];

  // Download footprint, from scripts/measure-bundle.mjs
  const footprint = {
    first: [
      { label: 'Core entry (JavaScript)', kb: BUNDLE.entryJsKb, note: 'Registers every component tag', bar: 'from-sky-400 to-cyan-400' },
      { label: 'Global stylesheet (design tokens)', kb: BUNDLE.entryCssKb, note: 'Colours, spacing and themes', bar: 'from-purple-400 to-pink-400' },
    ],
    component: [
      { label: 'Median component', kb: BUNDLE.medianChunkKb, note: 'Fetched only when its tag appears on the page', bar: 'from-emerald-400 to-teal-400' },
      { label: 'Largest component', kb: BUNDLE.largestChunkKb, note: 'The heaviest single chunk', bar: 'from-amber-400 to-orange-400' },
    ],
    all: [{ label: `All ${BUNDLE.lazyChunks} component chunks`, kb: BUNDLE.allChunksKb, note: 'Only if a page used every component', bar: 'from-sky-400 to-purple-400' }],
  }[selectedBenchmark];
  const maxKb = Math.max(...footprint.map((r) => r.kb));

  return (
    <SnapBlock id="why" label="Why AtherUI" variant={3} className="px-4 py-8">
      {/* Background glow lines */}
      {/* Gradients, not blur filters: a large blur is expensive to repaint while scrolling */}
      <div className="absolute top-1/2 left-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12), transparent 68%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent 68%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SnapItem i={0}>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why AtherUI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 cine-title">
            Built on web standards
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            AtherUI compiles to W3C Custom Elements with StencilJS: standard tags that load on demand, keep their styles inside Shadow DOM, and work in any framework.
          </p>
        </div>
        </SnapItem>

        {/* 4 Large Animated Counter Cards */}
        <SnapItem i={1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card relative p-5 group"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}40` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                <div 
                  className="text-4xl font-extrabold font-mono tracking-tight mb-1 text-white"
                  style={{ textShadow: `0 0 25px ${item.color}30` }}
                >
                  {item.metric}
                </div>

                <div className="text-sm font-semibold text-slate-200 mb-1">
                  {item.label}
                </div>

                <div className="text-xs text-slate-400">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
        </SnapItem>

        {/* Interactive Benchmark Comparison Dashboard */}
        <SnapItem i={2}>
        <div className="glass-card p-5 sm:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-sky-400" />
                What you download
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Measured from {BUNDLE.library} {BUNDLE.version}, gzipped. Re-run it with <code className="font-mono">npm run measure</code>.
              </p>
            </div>

            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
              {([
                { id: 'first', label: 'On first load' },
                { id: 'component', label: 'Per component' },
                { id: 'all', label: 'Everything' },
              ] as const).map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBenchmark(b.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedBenchmark === b.id ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {footprint.map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-slate-200">
                    <strong>{row.label}</strong>
                    <span className="ml-2 text-slate-400 font-normal">{row.note}</span>
                  </span>
                  <span className="font-mono text-sky-400">{row.kb} KB</span>
                </div>
                <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className={`h-full bg-gradient-to-r ${row.bar} rounded-full`} style={{ width: `${Math.max(4, (row.kb / maxKb) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Standard custom elements: use the same tags in React, Vue, Angular or plain HTML.
            </div>

            <div className="flex items-center gap-3">
              <AtherButton variant="outline" size="sm" onClick={onExploreThemes}>
                Inspect Tokens
              </AtherButton>
              <AtherButton variant="primary" size="sm" onClick={onExplorePlayground}>
                Test in Design Studio
              </AtherButton>
            </div>
          </div>
        </div>
        </SnapItem>
      </div>
    </SnapBlock>
  );
};
