import React, { useState } from 'react';
import { 
  Palette, 
  Type, 
  Box, 
  Move, 
  Layers, 
  Sparkles, 
  Copy, 
  Check,
  Compass,
  Zap,
  Activity
} from 'lucide-react';
import { DESIGN_TOKENS, TokenCategory } from '../../data/designTokens';
import { ALL_COMPONENTS } from '../../data/components';

export const DesignSystemView: React.FC = () => {
  const [selectedTokenCat, setSelectedTokenCat] = useState<string>('colors');
  const [copiedVar, setCopiedVar] = useState<string | null>(null);

  const activeCategory = DESIGN_TOKENS.find((c) => c.id === selectedTokenCat) || DESIGN_TOKENS[0];

  const handleCopyVar = (cssVar: string) => {
    navigator.clipboard.writeText(`var(${cssVar})`);
    setCopiedVar(cssVar);
    setTimeout(() => setCopiedVar(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#05070f] text-slate-100 py-12 px-4 md:px-8 text-left">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Design Tokens & Foundations</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AtherUI Design Token System
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            CSS custom properties read by the {ALL_COMPONENTS.length} components. Set them on a theme or parent element to restyle the library.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8 overflow-x-auto">
          {DESIGN_TOKENS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedTokenCat(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedTokenCat === cat.id
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Detail & Description */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-1">{activeCategory.name}</h2>
          <p className="text-xs text-slate-400">{activeCategory.description}</p>
        </div>

        {/* Tokens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeCategory.tokens.map((token, idx) => {
            const isCopied = copiedVar === token.cssVar;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 backdrop-blur-xl transition-all flex flex-col justify-between"
              >
                {/* Visual Preview Swatch */}
                <div className="mb-4">
                  {token.previewType === 'color' && (
                    <div 
                      className="w-full h-20 rounded-xl border border-white/10 shadow-inner flex items-center justify-center font-mono text-xs font-bold"
                      style={{ backgroundColor: token.value }}
                    >
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white border border-white/10">
                        {token.value}
                      </span>
                    </div>
                  )}

                  {token.previewType === 'text' && (
                    <div className="h-20 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-3 text-center">
                      <span className="text-white font-bold truncate" style={{ fontSize: '1.25rem' }}>
                        Aa Display
                      </span>
                    </div>
                  )}

                  {token.previewType === 'spacing' && (
                    <div className="h-20 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      <div 
                        className="bg-sky-500/40 border border-sky-400 rounded"
                        style={{ width: token.value, height: token.value }}
                      />
                    </div>
                  )}

                  {token.previewType === 'radius' && (
                    <div className="h-20 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      <div 
                        className="w-16 h-12 bg-sky-500/20 border border-sky-400"
                        style={{ borderRadius: token.value }}
                      />
                    </div>
                  )}

                  {token.previewType === 'timing' && (
                    <div className="h-20 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                      <div className="w-full h-1 bg-slate-800 relative rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-sky-400 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Token Details */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-white">{token.name}</h3>
                    <span className="text-xs font-mono text-slate-400">{token.value}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {token.description}
                  </p>

                  <button
                    onClick={() => handleCopyVar(token.cssVar)}
                    className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-sky-400 transition-colors cursor-pointer"
                  >
                    <span>{token.cssVar}</span>
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
