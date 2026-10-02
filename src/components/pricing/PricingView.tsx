import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Layers,
  Building
} from 'lucide-react';
import { AtherButton, AtherBadge } from '../ui/AtherUIElements';

export const PricingView: React.FC<{
  onOpenInstall: () => void;
}> = ({ onOpenInstall }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const tiers = [
    {
      id: 'community',
      name: 'Community Open Source',
      price: '$0',
      period: 'forever free',
      desc: 'Everything required to build lightning-fast web applications with modern StencilJS Web Components.',
      highlight: false,
      features: [
        '68+ Production Web Components',
        'TypeScript Definition Bundles',
        'W3C Shadow DOM Encapsulation',
        'ElementInternals Form Support',
        'MIT Commercial License',
        'Community Discord Access'
      ],
      cta: 'Install via NPM',
      action: onOpenInstall
    },
    {
      id: 'pro',
      name: 'Professional Team',
      price: billingCycle === 'annual' ? '$39' : '$49',
      period: 'per developer / month',
      desc: 'Framework setup guides for React, Angular, and Vue, Figma token sync, and 120+ pre-built application templates.',
      highlight: true,
      features: [
        'Everything in Community tier',
        'Framework setup guides for React, Angular and Vue',
        'Official Figma UI Kit & Token Sync',
        '120+ Full-Page Enterprise Templates',
        'Priority GitHub Issue Triage'
      ],
      cta: 'Start 14-Day Pro Trial',
      action: onOpenInstall
    },
    {
      id: 'enterprise',
      name: 'Enterprise Organization',
      price: 'Custom',
      period: 'custom annual contract',
      desc: 'Air-gapped registries, custom Stencil build optimizations, dedicated accessibility audit, and SLA.',
      highlight: false,
      features: [
        'Everything in Pro tier',
        'Air-Gapped Private NPM Registry',
        'Dedicated Shared Slack Channel',
        'Custom Stencil Build Optimizations',
        'Full WCAG AAA Accessibility Sign-Off',
        '99.99% Architecture SLA',
        'Custom Theme System Audit'
      ],
      cta: 'Contact Architecture Team',
      action: () => alert('Contacting AtherUI Enterprise Architecture Advisory (sales@ather-ui.cloud)')
    }
  ];

  const comparisonFeatures = [
    { category: 'Core Architecture', items: [
      { name: 'StencilJS Micro-Runtime (<0.8kb)', community: true, pro: true, enterprise: true },
      { name: 'W3C Shadow DOM Style Encapsulation', community: true, pro: true, enterprise: true },
      { name: 'Framework Agnostic (Zero Lock-in)', community: true, pro: true, enterprise: true },
      { name: 'ElementInternals Native Form Participation', community: true, pro: true, enterprise: true }
    ]},
    { category: 'Framework Wrappers', items: [
      { name: 'React 19 & 18 JSX Wrappers', community: 'Manual', pro: 'Automated Package', enterprise: 'Automated Package' },
      { name: 'Angular 18+ Directives', community: 'Manual', pro: 'Automated Package', enterprise: 'Automated Package' },
      { name: 'Vue 3 Typed Bindings', community: 'Manual', pro: 'Automated Package', enterprise: 'Automated Package' },
      { name: 'Next.js 15 App Router Hydration Plugin', community: 'Basic', pro: 'Optimized', enterprise: 'Edge Accelerated' }
    ]},
    { category: 'Support & Compliance', items: [
      { name: 'Accessibility Standard', community: 'WCAG AA', pro: 'WCAG AAA', enterprise: 'WCAG AAA Signed' },
      { name: 'Figma UI Kit & Token Studio Sync', community: false, pro: true, enterprise: true },
      { name: 'Private Air-Gapped Registry', community: false, pro: false, enterprise: true },
      { name: '24/7 Dedicated Architecture Slack', community: false, pro: false, enterprise: true }
    ]}
  ];

  return (
    <div className="w-full min-h-screen bg-[#05070f] text-slate-100 py-16 px-4 md:px-8 text-left">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Predictable Enterprise Licensing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Transparent Plans for Every Scale
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
            Free and open-source core forever under the MIT license. Upgrade for automated framework packages, Figma token sync, and dedicated enterprise SLA.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-2 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                billingCycle === 'monthly' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annual' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">Save 20%</span>
            </button>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                tier.highlight
                  ? 'bg-slate-900/90 border-2 border-sky-400/80 shadow-[0_20px_50px_rgba(56,189,248,0.15)] relative scale-105 z-10'
                  : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-sky-500 text-slate-950 text-[11px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular for Teams
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed min-h-[48px]">{tier.desc}</p>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-extrabold text-white font-mono">{tier.price}</span>
                  <span className="text-xs text-slate-400 font-mono">{tier.period}</span>
                </div>

                <div className="h-px bg-slate-800 my-6" />

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <AtherButton
                variant={tier.highlight ? 'neon' : 'secondary'}
                size="md"
                glow={tier.highlight}
                fullWidth
                onClick={tier.action}
              >
                {tier.cta}
              </AtherButton>
            </div>
          ))}
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-2">Comprehensive Plan Comparison</h2>
          <p className="text-xs text-slate-400 mb-8">Detailed breakdown of architectural features and enterprise capabilities.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 px-4 font-semibold w-1/2">Capability</th>
                  <th className="py-3 px-4 font-semibold text-center">Community</th>
                  <th className="py-3 px-4 font-semibold text-center text-sky-400">Pro</th>
                  <th className="py-3 px-4 font-semibold text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonFeatures.map((sec, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="bg-slate-950/60">
                      <td colSpan={4} className="py-2.5 px-4 font-bold text-sky-400 uppercase tracking-wider text-[11px]">
                        {sec.category}
                      </td>
                    </tr>
                    {sec.items.map((it, iIdx) => (
                      <tr key={iIdx} className="hover:bg-slate-800/30">
                        <td className="py-3 px-4 text-slate-300 font-medium">{it.name}</td>
                        <td className="py-3 px-4 text-center text-slate-400">
                          {typeof it.community === 'boolean' ? (
                            it.community ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-slate-600">—</span>
                          ) : (
                            <span className="font-mono text-[11px]">{it.community}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-sky-300 font-medium">
                          {typeof it.pro === 'boolean' ? (
                            it.pro ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-slate-600">—</span>
                          ) : (
                            <span className="font-mono text-[11px]">{it.pro}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-purple-300 font-medium">
                          {typeof it.enterprise === 'boolean' ? (
                            it.enterprise ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-slate-600">—</span>
                          ) : (
                            <span className="font-mono text-[11px]">{it.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
