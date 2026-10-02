export interface DocArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  content: string;
  codeSnippet?: string;
}

export const DOC_ARTICLES: DocArticle[] = [
  {
    id: 'overview',
    category: 'Getting Started',
    title: 'Architecture & Stencil Web Components',
    summary: 'Why AtherUI compiles to zero-dependency Custom Elements using StencilJS instead of proprietary monolithic framework lock-in.',
    readTime: '4 min read',
    content: `
AtherUI is built on **StencilJS**, the industry compiler that outputs standards-compliant **W3C Custom Elements** (Web Components). 

Unlike legacy component libraries tied to a single UI framework (like Material-UI for React or Angular Material), AtherUI components run natively in every modern browser. Whether your team writes in React 19, Next.js App Router, Vue 3, Angular 19, Svelte 5, or plain Vanilla HTML, AtherUI works out of the box with zero runtime wrappers required.

### Core Architectural Pillars
1. **0.8kb Micro-Runtime**: Stencil lazily downloads and hydrates components only when they enter the DOM. The initial bundle overhead is near zero.
2. **Shadow DOM Encapsulation**: Styles cannot bleed out and external global CSS cannot accidentally mangle your design system buttons or inputs.
3. **Form Association (ElementInternals)**: AtherUI inputs and selects natively participate in standard HTML \`<form>\` submissions and FormData collection without requiring synthetic framework adapters.
4. **Hardware-Accelerated Glow**: Uses CSS Houdini properties and composited transforms for smooth 60fps animations on enterprise dashboards.
    `,
    codeSnippet: `// Standard Web Component registration (1 line in your app root)
import { defineCustomElements } from 'atomicuilibrary/loader';

defineCustomElements(window);`
  },
  {
    id: 'framework-interop',
    category: 'Getting Started',
    title: 'Universal Framework Interop',
    summary: 'Seamless two-way data binding, TypeScript JSX definitions, and event listeners across React, Angular, and Vue.',
    readTime: '5 min read',
    content: `
Because Web Components emit native CustomEvents and receive properties through DOM attributes, integrating with modern frameworks is seamless. The same ui-* tags work in React, Angular and Vue with no framework-specific wrappers.

### React Integration
Register the elements with \`defineCustomElements(window)\` from \`atomicuilibrary/loader\` and use the \`ui-*\` tags directly in JSX. React 19 passes props to custom elements as properties.

### Angular Integration
In Angular, add \`CUSTOM_ELEMENTS_SCHEMA\` to your module or standalone component \`schemas: [CUSTOM_ELEMENTS_SCHEMA]\`.

### Vue Integration
In \`vite.config.ts\`, tell the Vue compiler to treat \`ui-*\` tags as custom elements.
    `,
    codeSnippet: `// vite.config.ts (Vue 3)
import vue from '@vitejs/plugin-vue';

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
    id: 'shadow-dom-styling',
    category: 'Styling & Theming',
    title: 'Shadow DOM & CSS Custom Properties',
    summary: 'How to customize internal component parts using CSS ::part() and CSS variables without breaking encapsulation.',
    readTime: '3 min read',
    content: `
AtherUI uses Shadow DOM to protect internal styles. To customize components without hacking CSS, AtherUI provides:

1. **Global CSS Custom Properties**: Overriding \`--bg-primary\`, \`--text-primary\`, \`--border-default\`, etc. at the \`:root\` level cascades into all Shadow DOM boundaries.
2. **CSS Shadow Parts (\`::part()\`)**: Target specific internal nodes like \`ui-button::part(native)\` or \`ui-input::part(field)\` to apply custom gradients or borders.
3. **Slots**: Pass custom icons, badges, or rich HTML directly into named component slots without restriction.
    `,
    codeSnippet: `/* Target internal shadow parts */
ui-button::part(native) {
  background: linear-gradient(135deg, #38bdf8 0%, #a855f7 100%);
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
}`
  },
  {
    id: 'form-association',
    category: 'Forms & Validation',
    title: 'Form Association & ElementInternals',
    summary: 'Native HTML5 form participation, FormData extraction, and constraint validation API support.',
    readTime: '4 min read',
    content: `
All AtherUI input components implement the browser's **ElementInternals** API (\`static formAssociated = true\`).

This means:
- You can place \`<ui-input name="email" required></ui-input>\` inside a standard \`<form>\`.
- When the form submits, \`new FormData(form).get('email')\` captures the typed value.
- Native validation triggers: \`form.checkValidity()\` and \`reportValidity()\` highlight invalid fields automatically with localized browser validation messages.
    `,
    codeSnippet: `<form id="auth-form" onsubmit="handleSubmit(event)">
  <ui-input name="username" label="Username" required></ui-input>
  <ui-input name="password" type="password" label="Master Key" required></ui-input>
  <ui-button type="submit" variant="neon">Authenticate</ui-button>
</form>`
  },
  {
    id: 'accessibility',
    category: 'Standards & Compliance',
    title: 'Accessibility & WCAG 2.2 AAA',
    summary: 'Full ARIA role mapping, automated keyboard traps for modals, high-contrast states, and screen reader announcements.',
    readTime: '5 min read',
    content: `
Every AtherUI component is tested against **WCAG 2.2 Level AAA** compliance:

- **Keyboard Navigation**: Full focus ring visibility with \`:focus-visible\` styling. Modals automatically trap Tab/Shift+Tab focus and close on Escape key.
- **ARIA Attribute Projection**: Internal shadow elements project \`aria-expanded\`, \`aria-haspopup\`, \`aria-controls\`, and \`role="dialog"\` to the assistive technology tree.
- **Reduced Motion**: Automatically honors \`@media (prefers-reduced-motion: reduce)\` by disabling orbit rotations and particle effects.
    `,
    codeSnippet: `/* Built-in reduced motion safety */
@media (prefers-reduced-motion: reduce) {
  ui-button, ui-dialog-box, ui-card {
    transition-duration: 0.01ms !important;
    animation: none !important;
  }
}`
  }
];
