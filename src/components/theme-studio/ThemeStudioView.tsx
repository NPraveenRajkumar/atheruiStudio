import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Copy, 
  Check, 
  RotateCcw, 
  Sliders, 
  Download, 
  Code2, 
  Layers, 
  Eye,
  CheckCircle2,
  Bell,
  Search
} from 'lucide-react';
import { ThemeConfig } from '../../types';
import { AtherButton, AtherInput, AtherBadge, AtherCard } from '../ui/AtherUIElements';

const PRESET_THEMES: ThemeConfig[] = [
  {
    id: 'deep-space',
    name: 'Deep Space (Default)',
    primaryColor: '#38bdf8', // Electric Blue
    accentColor: '#a855f7', // Neon Purple
    bgCanvas: '#05070f',
    surfaceColor: '#0c101d',
    borderColor: '#1e293b',
    borderRadius: '12px',
    fontFamily: 'Plus Jakarta Sans',
    glowStrength: '0.4',
    spacingScale: 1
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    primaryColor: '#f43f5e', // Hot Pink
    accentColor: '#06b6d4', // Cyan
    bgCanvas: '#090514',
    surfaceColor: '#160d2e',
    borderColor: '#3b1c6e',
    borderRadius: '4px',
    fontFamily: 'JetBrains Mono',
    glowStrength: '0.8',
    spacingScale: 1.1
  },
  {
    id: 'midnight',
    name: 'Midnight Obsidian',
    primaryColor: '#818cf8', // Indigo
    accentColor: '#38bdf8', // Sky
    bgCanvas: '#020408',
    surfaceColor: '#090e17',
    borderColor: '#152136',
    borderRadius: '16px',
    fontFamily: 'Syne',
    glowStrength: '0.3',
    spacingScale: 1
  },
  {
    id: 'enterprise',
    name: 'Enterprise Slate',
    primaryColor: '#2563eb', // Corporate Blue
    accentColor: '#0d9488', // Teal
    bgCanvas: '#0b1120',
    surfaceColor: '#1e293b',
    borderColor: '#334155',
    borderRadius: '8px',
    fontFamily: 'Plus Jakarta Sans',
    glowStrength: '0.15',
    spacingScale: 0.95
  },
  {
    id: 'glass',
    name: 'Frosted Glass',
    primaryColor: '#06b6d4',
    accentColor: '#ec4899',
    bgCanvas: '#030712',
    surfaceColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    fontFamily: 'Plus Jakarta Sans',
    glowStrength: '0.5',
    spacingScale: 1
  },
  {
    id: 'light-clean',
    name: 'Pristine Light',
    primaryColor: '#0284c7',
    accentColor: '#7c3aed',
    bgCanvas: '#f8fafc',
    surfaceColor: '#ffffff',
    borderColor: '#e2e8f0',
    borderRadius: '10px',
    fontFamily: 'Plus Jakarta Sans',
    glowStrength: '0.1',
    spacingScale: 1
  }
];

export const ThemeStudioView: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeConfig>(PRESET_THEMES[0]);
  const [copiedType, setCopiedType] = useState<'css' | 'json' | null>(null);

  const handleApplyPreset = (preset: ThemeConfig) => {
    setActiveTheme(preset);
  };

  const updateProp = <K extends keyof ThemeConfig>(key: K, value: ThemeConfig[K]) => {
    setActiveTheme((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  // Generate CSS string
  const cssOutput = `/* Variables read by the ui-* components */
[data-theme='custom'] {
  --color-primary: ${activeTheme.primaryColor};
  --color-primary-hover: ${activeTheme.accentColor};
  --bg-secondary: ${activeTheme.bgCanvas};
  --bg-primary: ${activeTheme.surfaceColor};
  --border-default: ${activeTheme.borderColor};
  --button-border-radius: ${activeTheme.borderRadius};
  --font-family: '${activeTheme.fontFamily}', sans-serif;
}`;

  const jsonOutput = JSON.stringify(activeTheme, null, 2);

  const copyCode = (content: string, type: 'css' | 'json') => {
    navigator.clipboard.writeText(content);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-black text-slate-100 py-10 px-4 md:px-8 text-left">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <Palette className="w-3.5 h-3.5" />
              <span>Theme Studio & Token Builder</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real-Time Theme Engine
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Customize colors, radiance, typography, and corner curves. Changes reflect instantly across all encapsulated shadow DOM components.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => copyCode(cssOutput, 'css')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
            >
              {copiedType === 'css' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy CSS Variables</span>
            </button>
            <button
              onClick={() => copyCode(jsonOutput, 'json')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 font-bold text-xs hover:bg-sky-400 transition-colors cursor-pointer"
            >
              {copiedType === 'json' ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>Export JSON Tokens</span>
            </button>
          </div>
        </div>

        {/* Preset Carousel */}
        <div className="mb-8">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            Select Starting Preset
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PRESET_THEMES.map((theme) => {
              const isSelected = activeTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleApplyPreset(theme)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-sky-400 shadow-md shadow-sky-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                    <span 
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: theme.accentColor }}
                    />
                  </div>
                  <div className="text-xs font-bold text-white truncate">{theme.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Studio Split Layout: Left Controls, Right Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ======================================================
              LEFT: THEME CUSTOMIZER CONTROLS (5 COLS)
              ====================================================== */}
          <div className="lg:col-span-5 space-y-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sliders className="w-4 h-4 text-sky-400" />
              Theme Parameters
            </h2>

            {/* Color Pickers */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center justify-between mb-1.5">
                  <span>Primary Interactive Color</span>
                  <span className="font-mono text-[11px] text-slate-400">{activeTheme.primaryColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    aria-label="Primary Interactive Color (picker)"
                    value={activeTheme.primaryColor.startsWith('#') ? activeTheme.primaryColor : '#38bdf8'}
                    onChange={(e) => updateProp('primaryColor', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <input
                    aria-label="Primary Interactive Color (hex value)"
                    type="text"
                    value={activeTheme.primaryColor}
                    onChange={(e) => updateProp('primaryColor', e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center justify-between mb-1.5">
                  <span>Secondary Accent / Aurora Aura</span>
                  <span className="font-mono text-[11px] text-slate-400">{activeTheme.accentColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    aria-label="Secondary Accent / Aurora Aura (picker)"
                    value={activeTheme.accentColor.startsWith('#') ? activeTheme.accentColor : '#a855f7'}
                    onChange={(e) => updateProp('accentColor', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <input
                    aria-label="Secondary Accent / Aurora Aura (hex value)"
                    type="text"
                    value={activeTheme.accentColor}
                    onChange={(e) => updateProp('accentColor', e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center justify-between mb-1.5">
                  <span>Canvas Background</span>
                  <span className="font-mono text-[11px] text-slate-400">{activeTheme.bgCanvas}</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    aria-label="Canvas Background (picker)"
                    value={activeTheme.bgCanvas.startsWith('#') ? activeTheme.bgCanvas : '#05070f'}
                    onChange={(e) => updateProp('bgCanvas', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <input
                    aria-label="Canvas Background (hex value)"
                    type="text"
                    value={activeTheme.bgCanvas}
                    onChange={(e) => updateProp('bgCanvas', e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-white"
                  />
                </div>
              </div>
            </div>

            {/* Corner Curvature (Border Radius) */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                <span>Corner Curvature (Radius)</span>
                <span className="font-mono text-sky-400 text-xs">{activeTheme.borderRadius}</span>
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {[
                  { label: 'None', val: '0px' },
                  { label: 'SM', val: '4px' },
                  { label: 'MD', val: '8px' },
                  { label: 'LG', val: '14px' },
                  { label: 'Pill', val: '9999px' }
                ].map((r) => (
                  <button
                    key={r.val}
                    onClick={() => updateProp('borderRadius', r.val)}
                    className={`py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${
                      activeTheme.borderRadius === r.val
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Family */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-xs font-medium text-slate-300">Typography Font Family</label>
              <div className="grid grid-cols-3 gap-2">
                {['Plus Jakarta Sans', 'Syne', 'JetBrains Mono'].map((ff) => (
                  <button
                    key={ff}
                    onClick={() => updateProp('fontFamily', ff)}
                    className={`py-2 text-xs rounded-lg border transition-colors cursor-pointer ${
                      activeTheme.fontFamily === ff
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {ff.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================
              RIGHT: LIVE THEME PREVIEW CANVAS (7 COLS)
              ====================================================== */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Dynamic Preview Canvas</span>
              <span className="font-mono text-sky-400 text-[11px]">Instant Token Evaluation</span>
            </div>

            {/* Real Styled Preview Box */}
            <div 
              className="flex-1 p-8 rounded-2xl border transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col gap-6"
              style={{
                backgroundColor: activeTheme.bgCanvas,
                borderColor: activeTheme.borderColor,
                fontFamily: `'${activeTheme.fontFamily}', sans-serif`,
                color: activeTheme.bgCanvas === '#f8fafc' ? '#0f172a' : '#f8fafc'
              }}
            >
              {/* Aurora Glow Reflection */}
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[90px] pointer-events-none transition-all duration-500"
                style={{
                  backgroundColor: activeTheme.accentColor,
                  opacity: parseFloat(activeTheme.glowStrength) * 0.4
                }}
              />

              {/* Sample Mini Header */}
              <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: activeTheme.borderColor }}>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 flex items-center justify-center font-bold text-sm text-slate-950 shadow-md"
                    style={{ 
                      backgroundColor: activeTheme.primaryColor,
                      borderRadius: activeTheme.borderRadius
                    }}
                  >
                    A
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight">Active Workspace</h3>
                    <p className="text-[11px] opacity-60">Theme: {activeTheme.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span 
                    className="px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm"
                    style={{ 
                      backgroundColor: activeTheme.primaryColor,
                      borderRadius: activeTheme.borderRadius
                    }}
                  >
                    Enterprise
                  </span>
                </div>
              </div>

              {/* Sample Interactive Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div 
                  className="p-4 border transition-all"
                  style={{
                    backgroundColor: activeTheme.surfaceColor,
                    borderColor: activeTheme.borderColor,
                    borderRadius: activeTheme.borderRadius
                  }}
                >
                  <label className="text-xs font-semibold mb-2 block">Cluster Domain</label>
                  <div 
                    className="flex items-center px-3 py-2 border text-xs"
                    style={{
                      borderRadius: activeTheme.borderRadius,
                      borderColor: activeTheme.borderColor,
                      backgroundColor: activeTheme.bgCanvas
                    }}
                  >
                    <Search className="w-3.5 h-3.5 opacity-40 mr-2" />
                    <span>production.ather.cloud</span>
                  </div>
                </div>

                <div 
                  className="p-4 border transition-all flex flex-col justify-between"
                  style={{
                    backgroundColor: activeTheme.surfaceColor,
                    borderColor: activeTheme.borderColor,
                    borderRadius: activeTheme.borderRadius
                  }}
                >
                  <div>
                    <div className="text-xs font-semibold">Sample metric</div>
                    <div className="text-lg font-bold font-mono mt-1" style={{ color: activeTheme.primaryColor }}>
                      1,248 visits
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <button
                      className="px-3 py-1.5 text-xs font-bold text-slate-950 transition-all cursor-pointer shadow-sm"
                      style={{
                        backgroundColor: activeTheme.primaryColor,
                        borderRadius: activeTheme.borderRadius,
                        boxShadow: `0 0 15px ${activeTheme.primaryColor}50`
                      }}
                    >
                      Authorize
                    </button>
                    <button
                      className="px-3 py-1.5 text-xs font-medium border transition-all cursor-pointer"
                      style={{
                        borderRadius: activeTheme.borderRadius,
                        borderColor: activeTheme.borderColor
                      }}
                    >
                      Audit
                    </button>
                  </div>
                </div>
              </div>

              {/* Sample Card */}
              <div 
                className="p-5 border transition-all"
                style={{
                  backgroundColor: activeTheme.surfaceColor,
                  borderColor: activeTheme.borderColor,
                  borderRadius: activeTheme.borderRadius,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.4)`
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold">Encapsulated Web Component</span>
                  <span className="text-[10px] font-mono opacity-70">&lt;ui-card&gt;</span>
                </div>
                <p className="text-xs opacity-75 leading-relaxed">
                  Design tokens cascade seamlessly through Shadow DOM roots via CSS custom properties.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
