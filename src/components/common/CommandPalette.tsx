import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Terminal, 
  Layers, 
  BookOpen, 
  Palette, 
  Sparkles, 
  ArrowRight, 
  X,
  Play
} from 'lucide-react';
import { ALL_COMPONENTS } from '../../data/components';
import { DOC_ARTICLES } from '../../data/docs';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, itemId?: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onNavigate(window.location.hash.replace('#', '') || 'home');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  // Filter items
  const matchedComponents = ALL_COMPONENTS.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.tag.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  const matchedDocs = DOC_ARTICLES.filter((d) =>
    d.title.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-slate-900 border border-sky-500/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.15)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-4 h-4 text-sky-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a component name, docs guide, or command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-0 outline-none text-sm text-white placeholder:text-slate-500"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-4 text-left">
          {/* Quick Actions */}
          {!query && (
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3 mb-1">
                Quick Navigation
              </div>
              <button
                onClick={() => { onNavigate('playground'); onClose(); }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 text-sky-400" />
                  <span>Launch Live Component Playground</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-500" />
              </button>

              <button
                onClick={() => { onNavigate('themes'); onClose(); }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Palette className="w-3.5 h-3.5 text-purple-400" />
                  <span>Open Theme Studio & Token Builder</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-500" />
              </button>
            </div>
          )}

          {/* Matched Components */}
          {matchedComponents.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3 mb-1">
                Components ({matchedComponents.length})
              </div>
              {matchedComponents.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    onNavigate('playground', c.id);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-sky-400" />
                    <span>{c.name}</span>
                    <code className="text-[10px] text-slate-500 group-hover:text-sky-300 font-mono">
                      &lt;{c.tag}&gt;
                    </code>
                  </div>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-300">Open Playground</span>
                </button>
              ))}
            </div>
          )}

          {/* Matched Docs */}
          {matchedDocs.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3 mb-1">
                Documentation Articles
              </div>
              {matchedDocs.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    onNavigate('docs');
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>{d.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">{d.readTime}</span>
                </button>
              ))}
            </div>
          )}

          {query && matchedComponents.length === 0 && matchedDocs.length === 0 && (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching components or articles found for "{query}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-[11px] text-slate-500">
          <span>Search {ALL_COMPONENTS.length} StencilJS components</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
