import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Play, 
  Sparkles, 
  Palette, 
  Box, 
  BookOpen, 
  Terminal, 
  ShieldCheck, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Layout, 
  Maximize2,
  ExternalLink,
  Code2,
  Cpu,
  Star,
  Zap,
  PanelLeftClose,
  PanelLeftOpen,
  ArrowRight
} from 'lucide-react';
import { ALL_COMPONENTS } from '../../data/components';
import { AtherBadge, AtherButton } from '../ui/AtherUIElements';

interface SidebarNavProps {
  currentView: string;
  onNavigate: (view: string, componentId?: string) => void;
  onOpenCommandPalette: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  navMode: 'sidebar' | 'topbar';
  onToggleNavMode: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  currentView,
  onNavigate,
  onOpenCommandPalette,
  isCollapsed,
  onToggleCollapse,
  navMode,
  onToggleNavMode
}) => {
  const [componentsMenuOpen, setComponentsMenuOpen] = useState(true);

  // Grouped Navigation Structure
  const navSections = [
    {
      group: 'PLATFORM',
      items: [
        { id: 'home', label: 'Overview & Solar System', icon: Compass, badge: 'Live' },
        { id: 'catalog', label: 'Component Catalog', icon: Layers, badge: String(ALL_COMPONENTS.length) },
        { id: 'playground', label: 'Live Playground', icon: Play, glow: true },
        { id: 'examples', label: 'Variant Examples', icon: Sparkles }
      ]
    },
    {
      group: 'DESIGN ENGINE',
      items: [
        { id: 'themes', label: 'Theme Studio', icon: Palette, badge: 'Realtime' },
        { id: 'design-system', label: 'Design Tokens', icon: Box }
      ]
    },
    {
      group: 'DEVELOPER DOCS',
      items: [
        { id: 'docs', label: 'Documentation', icon: BookOpen },
        { id: 'install', label: 'Installation & Packages', icon: Terminal }
      ]
    },
    {
      group: 'ENTERPRISE',
      items: [
        { id: 'pricing', label: 'Plans & Comparison', icon: ShieldCheck }
      ]
    }
  ];

  // Quick jump top components
  const quickComponents = ALL_COMPONENTS.slice(0, 6);

  return (
    <aside 
      className={`fixed top-0 left-0 bottom-0 z-40 flex flex-col bg-black/95 backdrop-blur-2xl border-r border-slate-800/80 transition-all duration-300 select-none ${
        isCollapsed ? 'w-[72px]' : 'w-64'
      }`}
    >
      {/* 1. Sidebar Top Header Lockup */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-slate-800/80 shrink-0">
        {!isCollapsed ? (
          <div className="flex items-center gap-2.5">
            <button 
              onClick={() => onNavigate('home')}
              className="text-lg font-extrabold tracking-tight text-white font-display flex items-center gap-1.5 hover:text-sky-300 transition-colors cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center text-slate-950 font-black text-xs shadow-md shadow-sky-500/20">
                A
              </div>
              <span><strong className="text-sky-400">Ather</strong>UI</span>
            </button>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono">
              v3.4
            </span>
          </div>
        ) : (
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center text-slate-950 font-black text-sm mx-auto shadow-md shadow-sky-500/20 cursor-pointer"
            title="AtherUI Home"
          >
            A
          </button>
        )}

        <button
          onClick={onToggleCollapse}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer hidden md:flex items-center justify-center"
        >
          {isCollapsed ? <PanelLeftOpen className="w-4 h-4 text-sky-400" /> : <PanelLeftClose className="w-4 h-4" />}
        </button>
      </div>

      {/* 2. Command Palette Search Bar */}
      <div className="p-3 border-b border-slate-800/60 shrink-0">
        {!isCollapsed ? (
          <button
            onClick={onOpenCommandPalette}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>Search components...</span>
            </div>
            <kbd className="px-1.5 py-0.2 text-[10px] font-mono text-slate-400 bg-slate-950 border border-slate-800 rounded">
              ⌘K
            </kbd>
          </button>
        ) : (
          <button
            onClick={onOpenCommandPalette}
            title="Search (Cmd + K)"
            className="w-10 h-10 mx-auto flex items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sky-400 transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 3. Navigation Links List */}
      <div className="flex-1 overflow-y-auto px-2.5 py-4 space-y-6 text-left">
        {navSections.map((section, idx) => (
          <div key={idx} className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 pb-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {section.group}
              </div>
            )}

            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  title={isCollapsed ? item.label : undefined}
                  className={`w-full flex items-center rounded-xl transition-all duration-150 cursor-pointer group relative ${
                    isCollapsed ? 'justify-center p-2.5' : 'justify-between px-3 py-2 text-xs font-medium'
                  } ${
                    isActive 
                      ? 'bg-sky-500/15 text-sky-300 font-semibold border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.12)]' 
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-sky-400 scale-105' : 'text-slate-400 group-hover:text-slate-200'
                    }`} />
                    {!isCollapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                  </div>

                  {!isCollapsed && item.badge && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}

                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-sky-400 rounded-r-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        ))}

        {/* Quick Component Shortcuts in Sidebar */}
        {!isCollapsed && (
          <div className="pt-2 border-t border-slate-800/80 space-y-1">
            <button
              onClick={() => setComponentsMenuOpen(!componentsMenuOpen)}
              className="w-full px-3 py-1 flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors cursor-pointer"
            >
              <span>Quick Components</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${componentsMenuOpen ? 'rotate-0' : '-rotate-90'}`} />
            </button>

            {componentsMenuOpen && (
              <div className="space-y-0.5 pt-1">
                {quickComponents.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => onNavigate('playground', comp.id)}
                    className="w-full px-3 py-1.5 rounded-lg text-[11px] text-slate-400 hover:text-white hover:bg-slate-900/50 flex items-center justify-between transition-colors cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <span 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ backgroundColor: comp.color }} 
                      />
                      <span>{comp.name}</span>
                    </span>
                    <span className="text-[10px] text-slate-600 group-hover:text-sky-400 font-mono">
                      Playground
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 4. Sidebar Bottom Footer Controls */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/60 shrink-0 space-y-2">
        {!isCollapsed ? (
          <>
            {/* Nav Layout Mode Switcher */}
            <button
              onClick={onToggleNavMode}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Toggle between Left Sidebar and Top Header navigation"
            >
              <div className="flex items-center gap-2">
                <Layout className="w-3.5 h-3.5 text-purple-400" />
                <span>Layout: <strong>Left Sidebar</strong></span>
              </div>
              <span className="text-[10px] text-sky-400 hover:underline">Switch to Top</span>
            </button>

            {/* Quick Install Pill */}
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-300 font-mono">Stencil v4 Core</span>
              </div>
              <span className="text-emerald-400 font-medium">Ready</span>
            </div>
          </>
        ) : (
          <button
            onClick={onToggleNavMode}
            title="Switch to Top Navigation Bar"
            className="w-10 h-10 mx-auto flex items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 text-purple-400 transition-colors cursor-pointer"
          >
            <Layout className="w-4 h-4" />
          </button>
        )}
      </div>
    </aside>
  );
};
