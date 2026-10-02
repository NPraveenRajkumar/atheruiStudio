import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SidebarNav } from './components/common/SidebarNav';
import { CommandPalette } from './components/common/CommandPalette';
import { HeroSolarSystem } from './components/home/HeroSolarSystem';
import { StatsAndWhy } from './components/home/StatsAndWhy';
import { CatalogView } from './components/catalog/CatalogView';
import { PlaygroundView } from './components/playground/PlaygroundView';
import { ExamplesView } from './components/examples/ExamplesView';
import { DocsView } from './components/docs/DocsView';
import { ThemeStudioView } from './components/theme-studio/ThemeStudioView';
import { PricingView } from './components/pricing/PricingView';
import { InstallationView } from './components/installation/InstallationView';
import { DesignSystemView } from './components/design-system/DesignSystemView';
import { ComponentItem } from './types';
import { ALL_COMPONENTS } from './data/components';
import { AtherButton, AtherCard, AtherBadge } from './components/ui/AtherUIElements';
import { 
  Zap, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  ArrowRight,
  Globe,
  Sparkles,
  Play,
  X
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [docsTargetId, setDocsTargetId] = useState<string | undefined>(undefined);
  const [playgroundTargetId, setPlaygroundTargetId] = useState<string>('button');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  
  // Navigation layout mode state (defaults to 'sidebar' to immediately showcase the left side navigation)
  const [navMode, setNavMode] = useState<'sidebar' | 'topbar'>('sidebar');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Synchronize hash routing if any
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'catalog', 'playground', 'examples', 'docs', 'themes', 'pricing', 'install', 'design-system'].includes(hash)) {
        setCurrentView(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: string, itemId?: string) => {
    setCurrentView(view);
    window.location.hash = view;
    if (itemId) {
      setPlaygroundTargetId(itemId);
    }
    setIsMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Component details open as an inline Documentation page (no dialog)
  const handleOpenDocs = (comp: ComponentItem) => {
    setDocsTargetId(comp.id);
    handleNavigate('docs');
  };

  const handleOpenPlaygroundWithComp = (componentId: string) => {
    setPlaygroundTargetId(componentId);
    handleNavigate('playground', componentId);
  };

  const toggleNavMode = () => {
    setNavMode((prev) => (prev === 'sidebar' ? 'topbar' : 'sidebar'));
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
      
      {/* ========================================================
          LEFT SIDE NAVIGATION BAR (When navMode === 'sidebar')
          ======================================================== */}
      {navMode === 'sidebar' && (
        <>
          {/* Desktop Left Sidebar */}
          <div className="hidden md:block">
            <SidebarNav
              currentView={currentView}
              onNavigate={handleNavigate}
              onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
              isCollapsed={isSidebarCollapsed}
              onToggleCollapse={toggleSidebarCollapse}
              navMode={navMode}
              onToggleNavMode={toggleNavMode}
            />
          </div>

          {/* Mobile Slide-Over Sidebar Drawer */}
          {isMobileSidebarOpen && (
            <div className="fixed inset-0 z-50 md:hidden flex">
              <div 
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
                onClick={() => setIsMobileSidebarOpen(false)}
              />
              <div className="relative z-10 w-72 max-w-full h-full bg-black shadow-2xl">
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 z-50 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <SidebarNav
                  currentView={currentView}
                  onNavigate={handleNavigate}
                  onOpenCommandPalette={() => {
                    setIsMobileSidebarOpen(false);
                    setIsCommandPaletteOpen(true);
                  }}
                  isCollapsed={false}
                  onToggleCollapse={() => {}}
                  navMode={navMode}
                  onToggleNavMode={toggleNavMode}
                />
              </div>
            </div>
          )}
        </>
      )}

      {/* Main Content Area Container (offset when sidebar is enabled) */}
      <div 
        className={`flex-1 flex flex-col transition-all duration-300 ${
          navMode === 'sidebar' 
            ? isSidebarCollapsed ? 'md:pl-[72px]' : 'md:pl-64' 
            : 'pl-0'
        }`}
      >
        {/* Header (Adapts to current layout mode) */}
        <Header
          currentView={currentView}
          onNavigate={handleNavigate}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          navMode={navMode}
          onToggleNavMode={toggleNavMode}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          isSidebarCollapsed={isSidebarCollapsed}
        />

        {/* Main View Router */}
        <main className="flex-1 w-full">
          {currentView === 'home' && (
            <div className="space-y-0">
              {/* Hero with Solar System of Components */}
              <HeroSolarSystem
                onSelectComponent={handleOpenDocs}
                onExploreCatalog={() => handleNavigate('catalog')}
                onOpenPlayground={(id) => handleOpenPlaygroundWithComp(id || 'button')}
              />

              {/* Why AtherUI & Animated Statistics */}
              <StatsAndWhy
                onExploreThemes={() => handleNavigate('design-system')}
                onExplorePlayground={() => handleNavigate('playground')}
              />

              {/* Architectural Marquee Bento Section */}
              <section className="py-24 px-4 bg-black">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>The Stencil Advantage</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                      Universal W3C Web Components
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      AtherUI doesn't trap you inside React, Vue, or Angular. By standardizing on browser-native Custom Elements, your design system survives framework rewrites.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {/* Bento 1 */}
                    <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-5">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">0.8kb Lazy Micro-Loader</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Only components actively placed in the DOM are hydrated. Unused elements consume zero bytes of main thread JavaScript.
                      </p>
                    </div>

                    {/* Bento 2 */}
                    <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-400 mb-5">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">Hermetic Shadow DOM</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Zero CSS specificity wars. Host application styles and external CSS frameworks can never accidentally mangle internal component layouts.
                      </p>
                    </div>

                    {/* Bento 3 */}
                    <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-5">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">100% WCAG AAA Compliant</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Engineered for high-liability enterprise domains: banking, healthcare, aerospace, and government platforms with full ARIA mapping.
                      </p>
                    </div>
                  </div>

                  {/* Final Call to Action Strip */}
                  <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-950/40 via-purple-950/30 to-slate-900/80 border border-sky-500/20 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                        Ready to build with AtherUI?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                        Test any component live in our three-column playground or install the core package in less than 60 seconds.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <AtherButton
                        variant="neon"
                        size="lg"
                        glow
                        onClick={() => handleNavigate('playground')}
                        startIcon={<Play className="w-4 h-4" />}
                      >
                        Open Live Playground
                      </AtherButton>
                      <AtherButton
                        variant="secondary"
                        size="lg"
                        onClick={() => handleNavigate('install')}
                      >
                        Install Guide
                      </AtherButton>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {currentView === 'catalog' && (
            <CatalogView
              onSelectComponent={handleOpenDocs}
              onOpenPlayground={handleOpenPlaygroundWithComp}
            />
          )}

          {currentView === 'playground' && (
            <PlaygroundView initialComponentId={playgroundTargetId} />
          )}

          {currentView === 'examples' && (
            <ExamplesView />
          )}

          {currentView === 'docs' && (
            <DocsView initialComponentId={docsTargetId} />
          )}

          {currentView === 'themes' && (
            <ThemeStudioView />
          )}

          {currentView === 'pricing' && (
            <PricingView onOpenInstall={() => handleNavigate('install')} />
          )}

          {currentView === 'install' && (
            <InstallationView />
          )}

          {currentView === 'design-system' && (
            <DesignSystemView />
          )}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
