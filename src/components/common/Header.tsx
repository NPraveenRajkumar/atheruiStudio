import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Terminal, 
  ExternalLink, 
  Layout, 
  ChevronRight,
  PanelLeft
} from 'lucide-react';
import { AtherButton } from '../ui/AtherUIElements';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenCommandPalette: () => void;
  navMode: 'sidebar' | 'topbar';
  onToggleNavMode: () => void;
  onOpenMobileSidebar?: () => void;
  isSidebarCollapsed?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenCommandPalette,
  navMode,
  onToggleNavMode,
  onOpenMobileSidebar,
  isSidebarCollapsed
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'catalog', label: 'Catalog' },
    { id: 'playground', label: 'Playground' },
    { id: 'examples', label: 'Examples' },
    { id: 'docs', label: 'Docs' },
    { id: 'themes', label: 'Theme Studio' },
    { id: 'pricing', label: 'Pricing' }
  ];

  const viewLabels: Record<string, string> = {
    home: 'Overview & Solar System',
    catalog: 'Component Catalog',
    playground: 'Interactive Playground',
    examples: 'Variant Gallery',
    docs: 'Documentation & Architecture',
    themes: 'Theme Studio & Tokens',
    pricing: 'Enterprise Plans',
    install: 'Installation & Frameworks',
    'design-system': 'Design Token Foundations'
  };

  // If in Left Sidebar mode, render the streamlined workspace top bar
  if (navMode === 'sidebar') {
    return (
      <header className="sticky top-0 z-30 w-full bg-black/90 backdrop-blur-xl border-b border-slate-800/80 h-14 px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left Side: Mobile toggle + Breadcrumbs */}
        <div className="flex items-center gap-3">
          {/* Mobile sidebar opener */}
          <button
            onClick={onOpenMobileSidebar}
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 cursor-pointer"
            title="Open Sidebar"
          >
            <PanelLeft className="w-4 h-4" />
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium hidden sm:inline">AtherUI Platform</span>
            <ChevronRight className="w-3 h-3 text-slate-600 hidden sm:inline" />
            <span className="text-sky-300 font-semibold">{viewLabels[currentView] || 'Overview'}</span>
          </div>
        </div>

        {/* Right Side: Quick search + Layout mode switch + Install */}
        <div className="flex items-center gap-2.5">
          {/* Layout Mode Switcher */}
          <button
            onClick={onToggleNavMode}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 transition-colors cursor-pointer"
            title="Switch back to Top Navigation Bar"
          >
            <Layout className="w-3.5 h-3.5 text-purple-400" />
            <span>Top Bar Mode</span>
          </button>

          <ThemeToggle />

          {/* Quick Search */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors text-xs cursor-pointer select-none"
          >
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
              ⌘K
            </kbd>
          </button>

          {/* Primary Action Button */}
          <AtherButton
            variant="neon"
            size="sm"
            glow
            onClick={() => onNavigate('install')}
            className="hidden sm:inline-flex"
          >
            Install
          </AtherButton>
        </div>
      </header>
    );
  }

  // Classic Top Navigation Mode
  return (
    <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="text-xl font-extrabold tracking-tight text-white hover:text-sky-300 transition-colors cursor-pointer select-none font-display flex items-center gap-1.5"
          >
            <span className="text-sky-400">Ather</span>UI
          </button>

          {/* Nav Mode Switch to Left Sidebar */}
          <button
            onClick={onToggleNavMode}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-[11px] text-purple-300 hover:text-purple-200 transition-colors cursor-pointer"
            title="Switch to Left Sidebar Navigation"
          >
            <Layout className="w-3 h-3 text-purple-400" />
            <span>Enable Left Sidebar</span>
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links with subtle hover underlines */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap ${
                  isActive 
                    ? 'text-sky-400 font-semibold' 
                    : 'hover:text-white text-slate-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          {/* Quick Search / Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors text-xs cursor-pointer select-none"
            title="Open Command Palette (Cmd + K)"
          >
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
              ⌘K
            </kbd>
          </button>

          {/* Primary Action Button */}
          <AtherButton
            variant="neon"
            size="sm"
            glow
            onClick={() => onNavigate('install')}
            className="hidden sm:inline-flex"
          >
            Install Library
          </AtherButton>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-black px-4 py-4 space-y-2 text-left">
          <button
            onClick={() => { onToggleNavMode(); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-2 flex items-center justify-between"
          >
            <span>Switch to Left Sidebar Navigation</span>
            <Layout className="w-4 h-4" />
          </button>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
                currentView === link.id
                  ? 'bg-sky-500/20 text-sky-300 font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <AtherButton
              variant="neon"
              size="sm"
              fullWidth
              glow
              onClick={() => {
                onNavigate('install');
                setMobileMenuOpen(false);
              }}
            >
              Install Library
            </AtherButton>
          </div>
        </div>
      )}
    </header>
  );
};
