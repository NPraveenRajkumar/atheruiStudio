import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Code2, 
  Layers, 
  Globe, 
  ExternalLink 
} from 'lucide-react';

export const InstallationView: React.FC = () => {
  const [packageManager, setPackageManager] = useState<'npm' | 'yarn' | 'pnpm' | 'bun'>('npm');
  const [selectedFramework, setSelectedFramework] = useState<'stencil' | 'react' | 'angular' | 'vue' | 'nextjs' | 'vite'>('react');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const installCommands = {
    npm: 'npm install atomicuilibrary',
    yarn: 'yarn add atomicuilibrary',
    pnpm: 'pnpm add atomicuilibrary',
    bun: 'bun add atomicuilibrary'
  };

  const frameworkGuides = {
    react: {
      title: 'React Setup',
      desc: 'Web components work in React directly. Register them once and use the ui-* tags in JSX.',
      steps: [
        {
          title: '1. Register the components at your entry point',
          code: `// src/main.tsx
import { defineCustomElements } from 'atomicuilibrary/loader';

defineCustomElements(window);`
        },
        {
          title: '2. Use the tags in JSX',
          code: `export function Dashboard() {
  return (
    <div>
      <ui-badge value="3"></ui-badge>
      <ui-input label="System ID"></ui-input>
      <ui-button label="Initialize Cluster" variant="primary"></ui-button>
    </div>
  );
}`
        }
      ]
    },
    stencil: {
      title: 'StencilJS Project Setup',
      desc: 'Consume the library directly from another Stencil project.',
      steps: [
        {
          title: '1. Install the package',
          code: `npm install atomicuilibrary`
        },
        {
          title: '2. Use the tags in JSX',
          code: `import { Component, h } from '@stencil/core';

@Component({ tag: 'app-root', shadow: true })
export class AppRoot {
  render() {
    return (
      <ui-card cardTitle="Stencil Instance">
        <ui-button label="Execute Action"></ui-button>
      </ui-card>
    );
  }
}`
        }
      ]
    },
    nextjs: {
      title: 'Next.js (App Router)',
      desc: 'Register the custom elements from a client component.',
      steps: [
        {
          title: '1. Create a client-side provider',
          code: `// app/components/UiProvider.tsx
'use client';

import { useEffect } from 'react';

export function UiProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('atomicuilibrary/loader').then((m) => m.defineCustomElements(window));
  }, []);

  return <>{children}</>;
}`
        },
        {
          title: '2. Wrap in app/layout.tsx',
          code: `import { UiProvider } from './components/UiProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}`
        }
      ]
    },
    angular: {
      title: 'Angular Integration',
      desc: 'Enable CUSTOM_ELEMENTS_SCHEMA so Angular templates accept ui-* tags.',
      steps: [
        {
          title: '1. Register elements and allow custom elements',
          code: `import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineCustomElements } from 'atomicuilibrary/loader';

defineCustomElements(window);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}`
        },
        {
          title: '2. Bind properties in templates',
          code: `<ui-input label="Tenant Name" [value]="tenantId"></ui-input>

<ui-button label="Save Configuration" (buttonClick)="onSave()"></ui-button>`
        }
      ]
    },
    vue: {
      title: 'Vue 3 & Vite Integration',
      desc: 'Configure the Vue compiler to treat ui-* tags as native custom elements.',
      steps: [
        {
          title: '1. Update vite.config.ts',
          code: `import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ui-')
        }
      }
    })
  ]
};`
        },
        {
          title: '2. Initialize the loader in main.ts',
          code: `import { createApp } from 'vue';
import { defineCustomElements } from 'atomicuilibrary/loader';
import App from './App.vue';

defineCustomElements(window);
createApp(App).mount('#app');`
        }
      ]
    },
    vite: {
      title: 'Vanilla HTML / Vite',
      desc: 'Zero-framework setup using the standalone Stencil bundle.',
      steps: [
        {
          title: '1. Load the bundle',
          code: `<!-- In your index.html <head> -->
<script type="module" src="/exploration-project-tailwind/exploration-project-tailwind.esm.js"></script>
<link rel="stylesheet" href="/exploration-project-tailwind/exploration-project-tailwind.css">`
        },
        {
          title: '2. Write HTML tags directly',
          code: `<ui-button label="Instant Web Component"></ui-button>`
        }
      ]
    }
  };

  const currentGuide = frameworkGuides[selectedFramework];

  return (
    <div className="w-full min-h-screen bg-black text-slate-100 py-12 px-4 md:px-8 text-left">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Onboarding</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Installation & Framework Integration
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            AtherUI compiles to standards-compliant Custom Elements. Install once and seamlessly consume across any modern JavaScript framework.
          </p>
        </div>

        {/* Step 1: Package Manager Install */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center text-xs font-mono">1</span>
              Install AtherUI via Package Manager
            </h2>

            {/* PM Switcher */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
              {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((pm) => (
                <button
                  key={pm}
                  onClick={() => setPackageManager(pm)}
                  className={`px-2.5 py-1 text-xs font-mono uppercase transition-colors cursor-pointer rounded-md ${
                    packageManager === pm
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {pm}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs text-sky-300">
            <code>{installCommands[packageManager]}</code>
            <button
              onClick={() => copyToClipboard(installCommands[packageManager], 'pm')}
              className="flex items-center gap-1 p-1 text-slate-400 hover:text-white"
            >
              {copiedKey === 'pm' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Step 2: Choose Framework Integration */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center text-xs font-mono">2</span>
              Framework Guide & Setup
            </h2>

            {/* Framework Select Tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 overflow-x-auto">
              {[
                { id: 'react', label: 'React' },
                { id: 'nextjs', label: 'Next.js' },
                { id: 'angular', label: 'Angular' },
                { id: 'vue', label: 'Vue 3' },
                { id: 'stencil', label: 'Stencil' },
                { id: 'vite', label: 'Vite / CDN' }
              ].map((fw) => (
                <button
                  key={fw.id}
                  onClick={() => setSelectedFramework(fw.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    selectedFramework === fw.id
                      ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {fw.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold text-white">{currentGuide.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{currentGuide.desc}</p>
          </div>

          {/* Guide Steps */}
          <div className="space-y-6">
            {currentGuide.steps.map((step, idx) => {
              const stepKey = `step-${selectedFramework}-${idx}`;
              const isCopied = copiedKey === stepKey;

              return (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span>{step.title}</span>
                    <button
                      onClick={() => copyToClipboard(step.code, stepKey)}
                      className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-sky-300"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-sky-200 overflow-x-auto leading-relaxed">
                    <pre>{step.code}</pre>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
