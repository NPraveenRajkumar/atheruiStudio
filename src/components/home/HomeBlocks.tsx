import React from 'react';
import {
  AppWindow, ArrowLeftRight, ArrowRight, BarChart3, BellRing, Command, Compass, Cpu, GalleryHorizontal, Gauge, GitCommitHorizontal,
  Layers, LayoutDashboard, MessageSquare, Network, PanelBottom, PanelTop, Play, ShieldCheck, Table2, TextCursorInput, Upload, Wrench, Zap,
  type LucideIcon,
} from 'lucide-react';
import { COMPONENTS_LITE, CATEGORIES_LITE, ICON_LIBRARIES, type ComponentLite } from '../../data/lite';
import BUNDLE from '../../data/bundleStats.json';
import { AtherButton } from '../ui/AtherUIElements';
import { SnapBlock, SnapItem } from './SnapPage';
import { FeaturedRail } from './FeaturedRail';

const Heading: React.FC<{ eyebrow: string; title: string; sub: string; icon?: React.ReactNode }> = ({ eyebrow, title, sub, icon }) => (
  <SnapItem i={0}>
    <div className="text-center max-w-3xl mx-auto mb-8">
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
        {icon}
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 cine-title">{title}</h2>
      <p className="text-sm text-slate-400 leading-relaxed">{sub}</p>
    </div>
  </SnapItem>
);

/* ------------------------------------------------------------------------------------------------ */

/** Hand-picked components. The one-liners summarise what each component's own demos show. */
const FEATURED: { id: string; icon: LucideIcon; blurb: string }[] = [
  { id: 'advanced-data-table', icon: Table2, blurb: 'Sorting, multi-column filters, row grouping, column pinning, tree data and PDF export.' },
  { id: 'dialog-box', icon: AppWindow, blurb: 'Modals, drawers and windows, with Promise-based message, confirm and prompt boxes.' },
  { id: 'tabs', icon: PanelTop, blurb: 'Closeable tabs with badges and counters, action menus and slotted content.' },
  { id: 'command-palette', icon: Command, blurb: 'Grouped commands with keyboard shortcuts and an activity log.' },
  { id: 'tree', icon: Network, blurb: 'Multi-select, native drag and drop, and hierarchies ten levels deep.' },
  { id: 'timeline', icon: GitCommitHorizontal, blurb: 'Vertical and horizontal layouts with filtering and per-item actions.' },
  { id: 'carousel', icon: GalleryHorizontal, blurb: '3D transitions, tickers and banners, and mobile-style stories.' },
  { id: 'snackbar', icon: BellRing, blurb: 'Card stacking, six anchor positions, live updates and themed variants.' },
  { id: 'file-upload', icon: Upload, blurb: 'Dropzone, auto upload, validation, folder upload and programmatic control.' },
  { id: 'transfer-list', icon: ArrowLeftRight, blurb: 'Two-pane transfer with reordering, drag and drop, tree and table views.' },
  { id: 'dock', icon: PanelBottom, blurb: 'A bottom dock with badge indicators and an OS-style experience.' },
  { id: 'speedometer', icon: Gauge, blurb: 'Gauges with target-vs-actual, custom arcs and live telemetry.' },
];

export const FeaturedBlock: React.FC<{ onSelectComponent: (c: ComponentLite) => void }> = ({ onSelectComponent }) => {
  const items = FEATURED.flatMap((f) => {
    const comp = COMPONENTS_LITE.find((c) => c.id === f.id);
    return comp ? [{ ...f, comp }] : [];
  });
  return (
    <SnapBlock id="featured" label="Featured components" variant={4} className="px-4 py-8">
      <div className="max-w-[1240px] mx-auto w-full">
        <Heading eyebrow="Featured components" title="Elite UI Components" sub="A glimpse into the high-performance component collection. Pick one to open its documentation." />
        <FeaturedRail items={items} onSelect={onSelectComponent} />
      </div>
    </SnapBlock>
  );
};

/* ------------------------------------------------------------------------------------------------ */

const CATEGORY_INFO: Record<string, { icon: LucideIcon; blurb: string }> = {
  Forms: { icon: TextCursorInput, blurb: 'Buttons, inputs, dropdowns, pickers, sliders and file upload for collecting data.' },
  Navigation: { icon: Compass, blurb: 'Tabs, steppers, breadcrumbs, docks, command palettes and context menus.' },
  'Data Display': { icon: BarChart3, blurb: 'Data tables, trees, timelines, cards, carousels, gauges and code views.' },
  Feedback: { icon: MessageSquare, blurb: 'Dialogs, snackbars, tooltips, popovers, loaders and skeletons.' },
  Layout: { icon: LayoutDashboard, blurb: 'Panels, splitters, stacks, accordions, and workspace and layout managers.' },
  Utility: { icon: Wrench, blurb: 'Behaviour helpers such as animate-on-scroll.' },
};

export const CategoriesBlock: React.FC<{ onExploreCatalog: () => void }> = ({ onExploreCatalog }) => (
  <SnapBlock id="categories" label="Categories" variant={1} className="px-4 py-8">
    <div className="max-w-6xl mx-auto w-full">
      <Heading eyebrow="System architecture" title="Powerful Categories" sub="Components organised by what they do, to speed up the design-to-code workflow." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {CATEGORIES_LITE.map((cat, idx) => {
          const info = CATEGORY_INFO[cat];
          const Icon = info?.icon ?? Layers;
          const count = COMPONENTS_LITE.filter((c) => c.category === cat).length;
          return (
            <SnapItem key={cat} i={1 + idx * 0.6}>
              <button
                onClick={onExploreCatalog}
                className="glass-card group w-full h-full text-left p-6 cursor-pointer flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-2xl font-extrabold font-mono text-slate-600 group-hover:text-sky-400 transition-colors">{count}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">{cat}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">{info?.blurb}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400">
                  Explore catalog <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </SnapItem>
          );
        })}
      </div>
    </div>
  </SnapBlock>
);

/* ------------------------------------------------------------------------------------------------ */

const ICON_LIBRARY_NAMES: Record<string, string> = {
  lucide: 'Lucide',
  fontawesome: 'Font Awesome',
  google: 'Material Symbols',
  remixicon: 'Remix Icon',
  ionicons: 'Ionicons',
  bootstrap: 'Bootstrap Icons',
  iconoir: 'Iconoir',
  icons8: 'Icons8',
  se: 'Schneider Electric',
  emoji: 'Emoji',
};

/** Six everyday icons per library. Names follow each library's own convention, so they differ from set to set. */
const ICON_SAMPLES: Record<string, string[]> = {
  lucide: ['star', 'heart', 'bell', 'user', 'mail', 'camera'],
  fontawesome: ['star', 'heart', 'bell', 'user', 'envelope', 'camera'],
  google: ['star', 'favorite', 'notifications', 'person', 'mail', 'photo_camera'],
  remixicon: ['star-line', 'heart-line', 'notification-line', 'user-line', 'mail-line', 'camera-line'],
  ionicons: ['star-outline', 'heart-outline', 'notifications-outline', 'person-outline', 'mail-outline', 'camera-outline'],
  bootstrap: ['star', 'heart', 'bell', 'person', 'envelope', 'camera'],
  iconoir: ['star', 'heart', 'bell', 'user', 'mail', 'camera'],
  icons8: ['star', 'heart', 'bell', 'user', 'envelope', 'camera'],
  emoji: ['⭐', '❤️', '🔔', '👤', '✉️', '📷'],
};
const UiIcon = 'ui-icon' as unknown as React.ElementType;

export const IconsBlock: React.FC = () => {
  // The libraries come from the ui-icon component's own `library` property
  const options = ICON_LIBRARIES.length ? ICON_LIBRARIES : Object.keys(ICON_LIBRARY_NAMES);
  const libs = options.filter((o) => o !== 'default');
  return (
    <SnapBlock id="icons" label="Icon libraries" variant={2} className="px-4 py-8">
      <div className="max-w-5xl mx-auto w-full">
        <Heading
          eyebrow="Icon infrastructure"
          title="Premium Icon Support"
          sub={`One <ui-icon> element, ${libs.length} icon libraries. Pick the set with the library attribute.`}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
          {libs.map((lib, idx) => (
            <SnapItem key={lib} i={1 + idx * 0.4}>
              <div className="glass-card p-4 h-full">
                <div className="text-sm font-bold text-white mb-1">{ICON_LIBRARY_NAMES[lib] ?? lib}</div>
                <code className="text-[11px] font-mono text-sky-300">library="{lib}"</code>
                {ICON_SAMPLES[lib] && (
                  <div className="flex items-center justify-between gap-1.5 mt-3.5 pt-3 border-t" style={{ borderColor: 'var(--cg-edge)', color: 'var(--app-text)' }} aria-hidden>
                    {ICON_SAMPLES[lib].map((name) => (
                      <UiIcon key={name} name={name} library={lib} size="18px" />
                    ))}
                  </div>
                )}
              </div>
            </SnapItem>
          ))}
        </div>
        <SnapItem i={1 + libs.length * 0.4}>
          <div className="glass-card mt-6 max-w-2xl mx-auto px-5 py-4 text-left">
            <code className="block text-xs font-mono text-sky-200">&lt;ui-icon name="star" library="lucide"&gt;&lt;/ui-icon&gt;</code>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">Lucide works out of the box. The other libraries load their own CSS or script from the host page.</p>
          </div>
        </SnapItem>
      </div>
    </SnapBlock>
  );
};

/* ------------------------------------------------------------------------------------------------ */

const ARCH_CARDS = [
  { icon: Zap, tone: 'sky', title: 'Loads on demand', text: `A ${BUNDLE.entryJsKb} KB core registers the tags. Each component is its own chunk (${BUNDLE.lazyChunks} of them, ${BUNDLE.medianChunkKb} KB median) and is fetched only when its tag appears on the page.` },
  { icon: Layers, tone: 'purple', title: 'Encapsulated styles', text: 'Most components render inside a Shadow DOM, so your global CSS and frameworks cannot reach their internals. You customise them through props, CSS variables and parts.' },
  { icon: ShieldCheck, tone: 'emerald', title: 'Accessibility built in', text: 'Focus trapping and Escape-to-close in dialogs, drawers and popovers, reduced-motion support in 15 components, and form value submission for 8 controls. Test your own flows too.' },
] as const;
const TONES = {
  sky: { box: 'bg-sky-500/10 border-sky-400/20 text-sky-400', hover: 'hover:border-sky-500/40' },
  purple: { box: 'bg-purple-500/10 border-purple-400/20 text-purple-400', hover: 'hover:border-purple-500/40' },
  emerald: { box: 'bg-emerald-500/10 border-emerald-400/20 text-emerald-400', hover: 'hover:border-emerald-500/40' },
};

export const ArchitectureBlock: React.FC = () => (
  <SnapBlock id="architecture" label="The Stencil advantage" variant={3} className="px-4 py-8">
    <div className="max-w-6xl mx-auto w-full">
      <Heading
        eyebrow="The Stencil Advantage"
        icon={<Cpu className="w-3.5 h-3.5" />}
        title="Universal W3C Web Components"
        sub="AtherUI doesn't trap you inside React, Vue, or Angular. By standardizing on browser-native Custom Elements, your design system survives framework rewrites."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {ARCH_CARDS.map((c, idx) => (
          <SnapItem key={c.title} i={1 + idx * 0.8}>
            <div className={`glass-card p-8 h-full`}>
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${TONES[c.tone].box}`}>
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{c.text}</p>
            </div>
          </SnapItem>
        ))}
      </div>
    </div>
  </SnapBlock>
);

/* ------------------------------------------------------------------------------------------------ */

export const FinalCtaBlock: React.FC<{ onOpenStudio: () => void; onInstall: () => void }> = ({ onOpenStudio, onInstall }) => (
  <SnapBlock id="start" label="Get started" variant={4} className="px-4 py-8 items-center">
    <div className="max-w-4xl mx-auto w-full text-center">
      <SnapItem i={0}>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 cine-title">
          Ready to build <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400">something amazing?</span>
        </h2>
      </SnapItem>
      <SnapItem i={1}>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
          Try any component live in the Design Studio, or install the core package in less than 60 seconds.
        </p>
      </SnapItem>
      <SnapItem i={2}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <AtherButton variant="neon" size="lg" glow onClick={onOpenStudio} startIcon={<Play className="w-4 h-4" />}>
            Open Design Studio
          </AtherButton>
          <AtherButton variant="secondary" size="lg" onClick={onInstall}>
            Install Guide
          </AtherButton>
        </div>
      </SnapItem>
    </div>
  </SnapBlock>
);
