import React from 'react';

export const Footer: React.FC<{
  onNavigate: (view: string) => void;
}> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-black border-t border-slate-900 py-16 px-4 md:px-8 text-left text-xs text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        {/* Col 1: Wordmark & Statement */}
        <div className="md:col-span-2 space-y-3">
          <div className="text-lg font-bold text-white font-display">
            <span className="text-sky-400">Ather</span>UI
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Autonomous StencilJS Web Component system for high-scale enterprise applications. Multi-framework interoperability, native Shadow DOM encapsulation, and mathematical design tokens.
          </p>
          <div className="pt-2 text-[11px] text-slate-500">
            Open-source under the MIT license. Maintained by the Ather Architecture Group.
          </div>
        </div>

        {/* Col 2: Components */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
            Library
          </span>
          <ul className="space-y-2">
            <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer">Component Catalog</button></li>
            <li><button onClick={() => onNavigate('playground')} className="hover:text-white transition-colors cursor-pointer">Live Playground</button></li>
            <li><button onClick={() => onNavigate('examples')} className="hover:text-white transition-colors cursor-pointer">Variant Gallery</button></li>
            <li><button onClick={() => onNavigate('themes')} className="hover:text-white transition-colors cursor-pointer">Theme Studio</button></li>
          </ul>
        </div>

        {/* Col 3: Architecture & Guides */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
            Architecture
          </span>
          <ul className="space-y-2">
            <li><button onClick={() => onNavigate('docs')} className="hover:text-white transition-colors cursor-pointer">Stencil Compiler</button></li>
            <li><button onClick={() => onNavigate('docs')} className="hover:text-white transition-colors cursor-pointer">Shadow DOM Specs</button></li>
            <li><button onClick={() => onNavigate('docs')} className="hover:text-white transition-colors cursor-pointer">Form Association</button></li>
            <li><button onClick={() => onNavigate('docs')} className="hover:text-white transition-colors cursor-pointer">WCAG AAA Audit</button></li>
          </ul>
        </div>

        {/* Col 4: Frameworks */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
            Frameworks
          </span>
          <ul className="space-y-2">
            <li><button onClick={() => onNavigate('install')} className="hover:text-white transition-colors cursor-pointer">React 19 & Next.js</button></li>
            <li><button onClick={() => onNavigate('install')} className="hover:text-white transition-colors cursor-pointer">Angular 19</button></li>
            <li><button onClick={() => onNavigate('install')} className="hover:text-white transition-colors cursor-pointer">Vue 3</button></li>
            <li><button onClick={() => onNavigate('install')} className="hover:text-white transition-colors cursor-pointer">CDN & Vanilla</button></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} AtherUI Engineering. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>Version 3.4.2 Enterprise</span>
          <span>MIT License</span>
          <span>GitHub Verified</span>
        </div>
      </div>
    </footer>
  );
};
