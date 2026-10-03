import React, { useState } from 'react';
import { 
  Search, 
  Star, 
  Sparkles, 
  ExternalLink, 
  Sliders, 
  Layers, 
  Check, 
  Filter, 
  ShieldCheck, 
  Code2, 
  Play
} from 'lucide-react';
import { ALL_COMPONENTS, CATEGORIES } from '../../data/components';
import { ComponentCategory, ComponentItem } from '../../types';
import { AtherButton, AtherBadge } from '../ui/AtherUIElements';

interface CatalogViewProps {
  onSelectComponent: (comp: ComponentItem) => void;
  onOpenPlayground: (componentId: string) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  onSelectComponent,
  onOpenPlayground
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    button: true,
    card: true,
    input: true
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredComponents = ALL_COMPONENTS.filter((comp) => {
    const matchesSearch = 
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
    const matchesFav = !showFavoritesOnly || favorites[comp.id];

    return matchesSearch && matchesCategory && matchesFav;
  });

  return (
    <div className="w-full min-h-screen bg-black text-slate-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Modular Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Component Catalog
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Explore {ALL_COMPONENTS.length} autonomous StencilJS Web Components with native Shadow DOM isolation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                showFavoritesOnly 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>Favorites ({Object.values(favorites).filter(Boolean).length})</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search components by tag, name, or attribute (e.g. 'button', 'ui-input')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto p-1 bg-slate-950/60 rounded-xl border border-slate-800/80">
            {['All', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Components Grid */}
        {filteredComponents.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-slate-800 bg-slate-900/30">
            <p className="text-slate-400 text-sm">No components found matching your search criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setShowFavoritesOnly(false); }}
              className="mt-3 text-xs text-sky-400 hover:underline cursor-pointer"
            >
              Reset search filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredComponents.map((comp) => {
              const isFav = favorites[comp.id];

              return (
                <div
                  key={comp.id}
                  onClick={() => onSelectComponent(comp)}
                  className="group relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(56,189,248,0.1)] text-left flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Top Row: Tag + Favorite */}
                    <div className="flex items-center justify-between mb-3">
                      <code className="text-xs px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-sky-400 font-mono">
                        &lt;{comp.tag}&gt;
                      </code>

                      <button
                        onClick={(e) => toggleFavorite(comp.id, e)}
                        aria-label={isFav ? `Remove ${comp.name} from favourites` : `Add ${comp.name} to favourites`}
                        aria-pressed={!!isFav}
                        className="p-1 rounded text-slate-500 hover:text-amber-400 transition-colors"
                      >
                        <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
                      </button>
                    </div>

                    {/* Name & Category */}
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {comp.name}
                      </h3>
                      <span className="text-[11px] text-slate-500">· {comp.category}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {comp.description}
                    </p>
                  </div>

                  {/* Metadata & Actions */}
                  <div>
                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-slate-800 text-[10px] text-slate-400 mb-4">
                      <div>
                        <span className="block text-slate-500">Props</span>
                        <strong className="text-slate-200 font-mono text-xs">{comp.totalProps}</strong>
                      </div>
                      <div>
                        <span className="block text-slate-500">Events</span>
                        <strong className="text-slate-200 font-mono text-xs">{comp.totalEvents}</strong>
                      </div>
                      <div>
                        <span className="block text-slate-500">Slots</span>
                        <strong className="text-slate-200 font-mono text-xs">{comp.slots.length}</strong>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-white transition-colors">
                        View API & Specs
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenPlayground(comp.id);
                        }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-sky-500 hover:text-slate-950 text-sky-400 text-xs font-medium transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>Design Studio</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
