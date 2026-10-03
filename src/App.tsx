import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SidebarNav } from './components/common/SidebarNav';
import { CommandPalette } from './components/common/CommandPalette';
import { HeroSolarSystem } from './components/home/HeroSolarSystem';
import { StatsAndWhy } from './components/home/StatsAndWhy';
import { ScrollProgress, BackToTop } from './components/home/ScrollExtras';
import { SnapPage } from './components/home/SnapPage';
import { parseHash, hashFor, replaceHash, VIEW_TITLES, DEFAULT_TITLE, type ViewId } from './utils/route';

const CatalogView = lazy(() => import('./components/catalog/CatalogView').then((m) => ({ default: m.CatalogView })));
const PlaygroundView = lazy(() => import('./components/playground/PlaygroundView').then((m) => ({ default: m.PlaygroundView })));
const ExamplesView = lazy(() => import('./components/examples/ExamplesView').then((m) => ({ default: m.ExamplesView })));
const DocsView = lazy(() => import('./components/docs/DocsView').then((m) => ({ default: m.DocsView })));
const ThemeStudioView = lazy(() => import('./components/theme-studio/ThemeStudioView').then((m) => ({ default: m.ThemeStudioView })));
const PricingView = lazy(() => import('./components/pricing/PricingView').then((m) => ({ default: m.PricingView })));
const InstallationView = lazy(() => import('./components/installation/InstallationView').then((m) => ({ default: m.InstallationView })));
const DesignSystemView = lazy(() => import('./components/design-system/DesignSystemView').then((m) => ({ default: m.DesignSystemView })));
import { DOC_ARTICLES } from './data/docs';
import { FeaturedBlock, CategoriesBlock, IconsBlock, ArchitectureBlock, FinalCtaBlock } from './components/home/HomeBlocks';
import { findLite } from './data/lite';
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
  const [examplesTargetId, setExamplesTargetId] = useState<string | undefined>(undefined);
  // The component or guide shown on the current page, for the address bar and the page title
  const [routeId, setRouteId] = useState<string | undefined>(undefined);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  
  // Navigation layout mode state (defaults to 'sidebar' to immediately showcase the left side navigation)
  const [navMode, setNavMode] = useState<'sidebar' | 'topbar'>('sidebar');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Hash routing: #view or #view/id, so a link can point at one component or guide
  useEffect(() => {
    const handleHash = () => {
      const { view, id } = parseHash();
      if (!view) return;
      setCurrentView(view);
      setRouteId(id);
      if (id && view === 'docs') setDocsTargetId(id);
      if (id && view === 'playground') setPlaygroundTargetId(id);
      if (id && view === 'examples') setExamplesTargetId(id);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: string, itemId?: string) => {
    setCurrentView(view);
    setRouteId(itemId);
    if (itemId && view === 'playground') setPlaygroundTargetId(itemId);
    if (itemId && view === 'docs') setDocsTargetId(itemId);
    if (itemId && view === 'examples') setExamplesTargetId(itemId);
    window.location.hash = hashFor(view, itemId);
    setIsMobileSidebarOpen(false);
    // A new page starts at the top instantly; animating from the old page's scroll position looks broken
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  // Component details open as an inline Documentation page (no dialog)
  const handleOpenDocs = (comp: { id: string }) => {
    handleNavigate('docs', comp.id);
  };

  const handleOpenPlaygroundWithComp = (componentId: string) => {
    setPlaygroundTargetId(componentId);
    handleNavigate('playground', componentId);
  };

  // A page reports its selection (a component or guide) so the URL and the title follow it
  const handleSelect = (id: string) => {
    setRouteId(id);
    replaceHash(currentView, id);
  };

  // One title per page, and per component or guide
  useEffect(() => {
    const label = VIEW_TITLES[currentView as ViewId];
    if (!label || currentView === 'home') {
      document.title = DEFAULT_TITLE;
      return;
    }
    const name = routeId ? (DOC_ARTICLES.find((a) => a.id === routeId)?.title ?? findLite(routeId)?.name) : undefined;
    document.title = name ? `${name} · ${label} · AtherUI` : `${label} · AtherUI`;
  }, [currentView, routeId]);

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
        style={{ ['--header-h' as string]: navMode === 'sidebar' ? '3.5rem' : '4rem' }}
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
          <Suspense fallback={<div role="status" className="p-10 text-center text-xs text-slate-400">Loading…</div>}>
          {currentView === 'home' && (
            <SnapPage>
              <ScrollProgress />
              <BackToTop />

              {/* Each block fills the screen and the page snaps to one block per scroll */}
              <HeroSolarSystem
                onSelectComponent={handleOpenDocs}
                onExploreCatalog={() => handleNavigate('catalog')}
                onOpenPlayground={(id) => handleOpenPlaygroundWithComp(id || 'button')}
              />
              <StatsAndWhy
                onExploreThemes={() => handleNavigate('design-system')}
                onExplorePlayground={() => handleNavigate('playground')}
              />
              <FeaturedBlock onSelectComponent={handleOpenDocs} />
              <CategoriesBlock onExploreCatalog={() => handleNavigate('catalog')} />
              <IconsBlock />
              <ArchitectureBlock />
              <FinalCtaBlock onOpenStudio={() => handleNavigate('playground')} onInstall={() => handleNavigate('install')} />
            </SnapPage>
          )}

          {currentView === 'catalog' && (
            <CatalogView
              onSelectComponent={handleOpenDocs}
              onOpenPlayground={handleOpenPlaygroundWithComp}
            />
          )}

          {currentView === 'playground' && (
            <PlaygroundView initialComponentId={playgroundTargetId} onSelect={handleSelect} />
          )}

          {currentView === 'examples' && (
            <ExamplesView initialId={examplesTargetId} onSelect={handleSelect} />
          )}

          {currentView === 'docs' && (
            <DocsView initialId={docsTargetId} onSelect={handleSelect} />
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
          </Suspense>
        </main>

        {/* Footer is shown on the home page only */}
        {currentView === 'home' && (
          <div className="snap-foot">
            <Footer onNavigate={handleNavigate} />
          </div>
        )}
      </div>

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onOpen={() => setIsCommandPaletteOpen(true)}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
