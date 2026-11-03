/**
 * Guide articles shown under "Guides" on the Documentation page (and in the command palette).
 * Inline text supports **bold** and `code`. Facts here are checked against the atomicuilibrary source
 * (0.8.0) and the using-atomic-ui skill references; keep them in step when the library changes.
 */
import { RECIPES } from './docsRecipes';

export type DocBlock =
  | { h: string }
  | { p: string }
  | { list: string[]; ordered?: boolean }
  | { code: string; title?: string }
  | { note: string; tone?: 'info' | 'warn' }
  | { table: { head: string[]; rows: string[][] } };

export interface DocArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  body: DocBlock[];
}

export const DOC_CATEGORIES = ['Getting Started', 'Using Components', 'Recipes', 'Styling & Theming', 'Forms & Accessibility', 'Production'];

const BASE_ARTICLES: DocArticle[] = [
  {
    id: 'overview',
    category: 'Getting Started',
    title: 'Architecture: Stencil Web Components',
    summary: 'What the library is made of, how components load, and what that means for your app.',
    readTime: '4 min read',
    body: [
      { p: 'AtomicUI (npm package `atomicuilibrary`) is a set of about 99 **native custom elements**, all tagged `ui-*`, compiled with StencilJS. They are standard browser elements, so they work in React, Angular, Vue, Svelte or plain HTML without a framework wrapper.' },
      { h: 'How components load' },
      { list: [
        '`defineCustomElements()` registers every tag up front, but the code for each component is **lazy-loaded** the first time its tag appears in the page (the `p-*.entry.js` chunks next to the entry file).',
        'Because chunks are fetched relative to the entry script, deploy the whole `dist/exploration-project-tailwind/` folder. Copying only the entry file breaks components.',
        'Until its chunk has loaded, a `ui-*` element is an empty, unstyled tag. Call methods only after `customElements.whenDefined(\'ui-xyz\')` resolves.',
      ] },
      { h: 'Encapsulation' },
      { p: 'Most components (81) render into a **Shadow DOM**; a few (6) use Stencil scoped styles instead. Either way your global CSS cannot reach their internals, so you customise them through props, CSS custom properties and, where offered, `::part()`. See **Styling Components**.' },
      { h: 'What you need in every app' },
      { list: ['Install the package', 'Register the elements once at start-up', 'Load the global stylesheet (design tokens)', 'Provide the license key'], ordered: true },
      { p: 'Each step is covered in **Installation & Setup**.' },
      { code: "import { defineCustomElements } from 'atomicuilibrary/loader';\n\ndefineCustomElements();", title: 'main.ts' },
    ],
  },
  {
    id: 'installation',
    category: 'Getting Started',
    title: 'Installation & Setup Checklist',
    summary: 'The four setup steps every project needs, the CSS path bundlers trip over, and a quick smoke test.',
    readTime: '5 min read',
    body: [
      { h: '1. Install' },
      { code: 'npm install atomicuilibrary\nnpm ls atomicuilibrary   # check which version you actually got', title: 'Terminal' },
      { note: 'The npm registry can lag the source repo. If a prop or component from these docs is missing at runtime, check the installed version before debugging your code.', tone: 'warn' },
      { h: '2. Register the elements' },
      { code: "import { defineCustomElements } from 'atomicuilibrary/loader';\n\ndefineCustomElements();", title: 'App entry (once)' },
      { h: '3. Load the global stylesheet' },
      { p: 'The stylesheet defines the design tokens (`--color-primary`, `--bg-primary` and the rest) for every theme. Without it components render with missing colours and spacing.' },
      { code: 'node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.css', title: 'Stylesheet path' },
      { note: "The package `exports` map only exposes `.` and `./loader`, so `import 'atomicuilibrary/dist/...css'` is rejected by Vite, webpack and the Angular CLI. Reference the file by filesystem path instead (relative import, Angular `styles`, or a copy step).", tone: 'warn' },
      { code: "// Vite: import by relative path, not package specifier\nimport '../node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.css';", title: 'src/main.ts' },
      { h: '4. Provide the license key' },
      { p: 'Set `window.APP_UI_LICENSE` **before** the library loads. See **License Key** for where the key comes from and what happens without it.' },
      { code: "(window as any).APP_UI_LICENSE = import.meta.env.VITE_APPUI_LICENSE;\ndefineCustomElements();", title: 'src/main.ts' },
      { h: 'Plain HTML (no build step)' },
      { code: '<link rel="stylesheet" href="/node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.css">\n<script>window.APP_UI_LICENSE = "APPUI.eyJ...";</script>\n<script type="module" src="/node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.esm.js"></script>\n\n<ui-button label="Save" color="primary" variant="filled"></ui-button>', title: 'index.html' },
      { h: 'Smoke test' },
      { list: [
        'The page loads without a full-screen license overlay (`#appui-license-error`).',
        "`getComputedStyle(document.documentElement).getPropertyValue('--color-primary')` returns a colour. Empty means the stylesheet is not loaded.",
        "`customElements.get('ui-button')` is defined and `<ui-button label=\"Test\">` shows styled text.",
      ], ordered: true },
      { note: 'Misconfigured components usually render blank instead of throwing, so "no console errors" is not proof the setup works. Run the smoke test.' },
    ],
  },
  {
    id: 'framework-interop',
    category: 'Getting Started',
    title: 'Framework Integration',
    summary: 'Wiring for React 18/19, Angular, Vue 3 and server-side rendering, including the gotchas for objects and events.',
    readTime: '6 min read',
    body: [
      { p: 'The tags are the same everywhere; only the wiring differs. Every framework needs the setup from **Installation & Setup** first.' },
      { h: 'React' },
      { p: '**React 19** passes props and custom events to custom elements natively. **React 18** passes strings and booleans as attributes only, so object/array props and custom events must go through a ref.' },
      { code: "import { useEffect, useRef } from 'react';\n\nexport function Faq({ items }: { items: unknown[] }) {\n  const ref = useRef<HTMLElement & { items: unknown[] }>(null);\n  useEffect(() => {\n    const el = ref.current!;\n    el.items = items;                                  // object prop\n    const onChange = (e: Event) => console.log((e as CustomEvent).detail);\n    el.addEventListener('accordionChange', onChange);  // custom event\n    return () => el.removeEventListener('accordionChange', onChange);\n  }, [items]);\n  return <ui-accordion ref={ref} />;\n}", title: 'React 18' },
      { p: 'For TypeScript, declare the tags so JSX accepts them, or import the library\'s generated `Components` types for strict typing.' },
      { h: 'Angular' },
      { code: '"styles": [\n  "node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.css",\n  "src/styles.css"\n]', title: 'angular.json (build and test)' },
      { code: "@Component({ standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA], /* ... */ })", title: 'component.ts' },
      { code: '<ui-button label="Save" color="primary" (buttonClick)="save($event)"></ui-button>\n<ui-accordion [items]="faqItems"></ui-accordion>\n<ui-dialog-box [open]="showDialog" dialogTitle="Edit" (dialogClosed)="showDialog = false"></ui-dialog-box>', title: 'template.html' },
      { list: [
        '`[prop]="x"` sets the DOM property (use it for arrays and objects); plain `prop="x"` sets a string attribute.',
        'Elements do not write back to your variables. Update state in the close/change event handler.',
        '`ngModel` does not work on these elements. Read `event.detail` and call `form.patchValue` yourself.',
      ] },
      { h: 'Vue 3' },
      { code: "vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('ui-') } } })", title: 'vite.config.ts' },
      { code: '<ui-button label="Save" color="primary" @buttonClick="save" />\n<ui-accordion :items.prop="faq" />   <!-- .prop forces property binding -->', title: 'Component.vue' },
      { note: 'Events are emitted with camelCase names. `@buttonClick` fires; `@button-click` does not.', tone: 'warn' },
      { h: 'SSR (Next.js, Nuxt, Angular Universal)' },
      { p: 'The library touches `window`, `document`, `localStorage` and `crypto.subtle` when it loads. Call `defineCustomElements()` only in the browser (a `useEffect`, a client-only plugin, or `isPlatformBrowser`). Server-rendered `ui-*` tags stay empty until hydration; that is expected.' },
    ],
  },
  {
    id: 'data-and-events',
    category: 'Using Components',
    title: 'Props, Events, Methods & Slots',
    summary: 'How to pass data in, listen for changes, call methods and fill slots without silent failures.',
    readTime: '5 min read',
    body: [
      { h: 'Attributes vs properties' },
      { table: { head: ['Where', 'Write', 'Example'], rows: [
        ['HTML', 'kebab-case attribute', '`dialog-title="Edit"`'],
        ['JS / TS', 'camelCase property', '`el.dialogTitle = \'Edit\'`'],
        ['Angular', 'camelCase property binding', '`[dialogTitle]="title"`'],
        ['Vue', 'attribute, or `.prop` for objects', '`:items.prop="list"`'],
      ] } },
      { note: 'Prop names are specific (`dialogTitle`, not `title`). A wrong name fails silently, so check the Props table on the component page.', tone: 'warn' },
      { h: 'Arrays and objects' },
      { p: 'Set complex data as a **JS property** (`el.items = [...]`) or as a **JSON string attribute**. Some props are typed `string` but expect JSON text; if the Props table shows `string` and the description mentions a list, pass `JSON.stringify(...)`.' },
      { code: "const table = document.querySelector('ui-advanced-data-table');\ntable.columns = [{ id: 'name', header: 'Name' }];\ntable.data = rows;", title: 'Setting data' },
      { h: 'Events' },
      { p: 'Components emit **CustomEvents with camelCase names** (`buttonClick`, `inputChange`, `accordionChange`), not native `click`/`change`. The payload is on `event.detail`. Each component page lists its events.' },
      { code: "el.addEventListener('inputChange', (e) => {\n  console.log((e as CustomEvent).detail);\n});", title: 'Listening' },
      { h: 'Methods' },
      { p: 'Public methods (for example `dialog.show()` or `snackbar.add(...)`) return Promises and only exist once the element is defined.' },
      { code: "await customElements.whenDefined('ui-dialog-box');\nawait document.querySelector('ui-dialog-box').show();", title: 'Calling a method' },
      { h: 'Slots' },
      { p: 'Composite components (dialog, card, tabs, tooltip, popover) take content through **named slots** such as `slot="footer"` or `slot="target"`. Content placed in the default slot where a named one is expected renders nothing. Check the Slots section of the component page.' },
      { h: 'Shared vocabulary' },
      { list: [
        '`color`: `primary | secondary | success | warning | danger | info | none`',
        '`size`: `xs | sm | md | lg | xl`',
        'Also common: `variant`, `disabled`, `loading`, `rtl`, `icon` + `iconLibrary`',
      ] },
      { p: 'Accepted values still differ per component (the button\'s `variant` list is not the input\'s), so confirm on the component page.' },
      { h: 'Icons' },
      { p: '`icon` names resolve through `iconLibrary` (lucide by default; ionicons, fontawesome, material and heroicons also work). Non-lucide libraries need their own CSS or script on the page, otherwise the icon renders empty.' },
    ],
  },
  {
    id: 'theming',
    category: 'Styling & Theming',
    title: 'Themes & Design Tokens',
    summary: 'Switch between the seven built-in themes with one attribute and rebrand with CSS custom properties.',
    readTime: '4 min read',
    body: [
      { p: 'The global stylesheet declares design tokens as CSS custom properties on `:root` and overrides them per `[data-theme]`. Custom properties inherit through Shadow DOM, so one attribute re-themes every component below it.' },
      { h: 'Switching themes' },
      { code: "document.documentElement.setAttribute('data-theme', 'dark');", title: 'One line' },
      { p: 'Built-in themes: `light` (default), `dark`, `green`, `pink`, `yellow`, `violet`, `blue`.' },
      { note: 'The `window.setTheme()` / `ThemeSwitcher` helpers come from a side-effect module that the normal loader does not import. Check `typeof window.setTheme === \'function\'` before using them; otherwise set the attribute yourself and persist the choice in your app.' },
      { p: 'If your app has its own dark mode (for example a Tailwind `dark` class), set `data-theme` whenever it changes. The library does not read your class.' },
      { h: 'Token groups' },
      { table: { head: ['Group', 'Tokens'], rows: [
        ['Brand & status', '`--color-primary`, `--color-primary-hover`, `--color-primary-rgb`, `--color-primary-subtle`, … and the same for `secondary`, `success`, `danger`, `warning`, `info`'],
        ['Surfaces', '`--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--bg-hover`, `--bg-selected`'],
        ['Text & borders', '`--text-primary`, `--text-secondary`, `--text-muted`, `--border-default`, `--border-strong`, `--font-family`'],
        ['Per component', '`--<component>-<part>`, e.g. `--accordion-bg`, `--card-header-bg`, `--adt-row-hover-bg`'],
      ] } },
      { h: 'Rebranding' },
      { code: ':root {\n  --color-primary: #2563eb;\n  --color-primary-hover: #1d4ed8;\n  --color-primary-rgb: 37, 99, 235;   /* keep in step with the hex */\n}\n\n[data-theme="dark"] {\n  --color-primary: #60a5fa;\n  --color-primary-rgb: 96, 165, 250;\n}', title: 'After the library stylesheet' },
      { p: 'Theme blocks redefine most tokens, so an override on `:root` alone only affects the light theme. Repeat it under each `[data-theme]` you support. Use **Theme Studio** in this app to try values and **Design Tokens** to browse every token.' },
      { h: 'One component or one instance' },
      { code: '<ui-accordion style="--accordion-bg: #f0f0f0"></ui-accordion>', title: 'Scoped override' },
    ],
  },
  {
    id: 'shadow-dom-styling',
    category: 'Styling & Theming',
    title: 'Styling Components (Shadow DOM, ::part, Slots)',
    summary: 'The three supported ways to customise a component when your global CSS cannot reach inside it.',
    readTime: '3 min read',
    body: [
      { p: 'Component internals live in a shadow root (or scoped styles), so descendant selectors like `ui-button .label` never match. Use these instead, in this order:' },
      { list: [
        '**Props**: `variant`, `color`, `size`, `shape` and friends cover most needs.',
        '**CSS custom properties**: set tokens on the element or an ancestor (see **Themes & Design Tokens**).',
        '**`::part()`**: style specific internal nodes, only where a component exposes parts.',
        '**Slots**: put your own markup (icons, badges, rich content) into named slots and style it normally, since slotted content stays in your DOM.',
      ], ordered: true },
      { h: 'Components that expose parts' },
      { p: '`ui-button`, `ui-button-toggle`, `ui-callout-banner`, `ui-dialog-box`, `ui-dialog-header`, `ui-list`, `ui-list-item`, `ui-switch` and `ui-tabs`. For example, `ui-button` exposes `button`, `icon`, `label-block`, `title`, `subtitle` and `counter`.' },
      { code: 'ui-button::part(button) {\n  background: linear-gradient(135deg, #38bdf8 0%, #a855f7 100%);\n}\n\nui-button::part(counter) {\n  font-weight: 700;\n}', title: 'styles.css' },
      { note: 'Other components do not expose parts. If a style is not reachable through props, tokens or slots, ask the library maintainers for a part or token rather than forcing it.' },
    ],
  },
  {
    id: 'form-association',
    category: 'Forms & Accessibility',
    title: 'Forms & Validation',
    summary: 'Which components join native <form> submission and validation, and how to handle the rest.',
    readTime: '4 min read',
    body: [
      { p: 'These components are **form-associated** (they use the browser\'s `ElementInternals` API): `ui-input`, `ui-button`, `ui-checkbox`, `ui-radio`, `ui-range-slider`, `ui-color-picker`, `ui-toggle-group` and `ui-button-toggle-group`.' },
      { p: 'For those, inside a native `<form>`:' },
      { list: [
        'Give each field a `name`; its value appears in `new FormData(form)`.',
        'Values are submitted with the form, but **`required` on `ui-input` does not block `form.checkValidity()`**. Validate in your own code and show the result with `validationState="error"` and `errorText`.',
        'A `ui-button` with `type="submit"` submits the form.',
      ] },
      { code: '<form id="signin">\n  <ui-input name="email" type="email" label="Email" required></ui-input>\n  <ui-input name="password" type="password" label="Password" required></ui-input>\n  <ui-button type="submit" label="Sign in" color="primary"></ui-button>\n</form>\n\n<script>\n  document.getElementById(\'signin\').addEventListener(\'submit\', (e) => {\n    e.preventDefault();\n    const data = new FormData(e.target);\n    console.log(data.get(\'email\'));\n  });\n</script>', title: 'Native form' },
      { h: 'Other inputs (dropdown, switch, date pickers…)' },
      { p: 'Components outside the list above do not join the form on their own. Listen for their change event, read `event.detail`, and keep the value in your form state (or a hidden input).' },
      { h: 'In frameworks' },
      { list: [
        'Angular: `ngModel` and `formControlName` do not bind to these elements. Handle the change event and call `patchValue`.',
        'React / Vue: treat each component as controlled; set the value property and update state from its change event.',
      ] },
    ],
  },
  {
    id: 'accessibility',
    category: 'Forms & Accessibility',
    title: 'Accessibility',
    summary: 'What the components handle for you, and what is still your responsibility.',
    readTime: '4 min read',
    body: [
      { h: 'Built in' },
      { list: [
        '**Focus trapping**: `ui-dialog-box`, `ui-aside-panel` and `ui-popover` keep Tab focus inside while open and close on Escape by default (`closeOnEsc` / `closeOnEscape` turn that off).',
        '**ARIA state**: overlays such as the popover keep `aria-expanded` and related attributes on their trigger in sync.',
        '**Reduced motion**: 15 components tone down their animations under `prefers-reduced-motion: reduce`.',
        '**Native forms**: form-associated inputs report validity to the browser (see **Forms & Validation**).',
      ] },
      { h: 'Your responsibility' },
      { list: [
        'Give every control an accessible name: a `label` prop (on ui-input it is not yet linked to the field, so also set `aria-label`), visible text, or `aria-label` on icon-only buttons.',
        'Keep colour contrast when you override tokens; check custom brand colours against both light and dark themes.',
        'Use semantic page structure (headings, landmarks) around the components.',
        'Test with a keyboard and a screen reader. Automated checkers (axe, Lighthouse) catch only part of the issues, and coverage differs per component.',
      ] },
      { note: 'Accessibility support varies between components. Treat this as a starting point and test the flows your users rely on, rather than assuming a compliance level.', tone: 'warn' },
    ],
  },
  {
    id: 'license',
    category: 'Production',
    title: 'License Key',
    summary: 'How the license gate works, how to supply your key, and how to recognise a missing key.',
    readTime: '3 min read',
    body: [
      { p: 'The library includes a signed-key license check. When it runs and the key is missing or invalid, it shows a full-page error overlay (`#appui-license-error`) and sets `pointer-events: none` on `<body>`. The symptom looks like a broken app ("nothing is clickable"), not a license problem.' },
      { h: 'Supplying the key' },
      { code: '<script>window.APP_UI_LICENSE = "APPUI.eyJ...";</script>  <!-- before the library script -->', title: 'Plain HTML' },
      { code: "(window as any).APP_UI_LICENSE = import.meta.env.VITE_APPUI_LICENSE;  // before defineCustomElements\ndefineCustomElements();", title: 'Bundled app' },
      { h: 'Key types' },
      { table: { head: ['Key', 'Valid on'], rows: [
        ['`dev`', '`localhost`, `127.0.0.1` and `[::1]` only'],
        ['`prod`', 'The domains it was issued for (wildcards like `*.example.com` supported); expires'],
      ] } },
      { list: [
        'Validation is skipped (with a console warning) where `crypto.subtle` is unavailable, i.e. plain `http://` on a non-localhost host.',
        'Whether the gate is active depends on how the library is loaded. If the overlay never appears in your setup, you do not need to chase it; if it does, supply a key.',
      ] },
      { note: 'Keys are issued by the library maintainers. Never invent or hard-code one: keep it in your CI/hosting secrets, inject it at build time, and never commit a production key.', tone: 'warn' },
    ],
  },
  {
    id: 'security',
    category: 'Production',
    title: 'Security Checklist',
    summary: 'Sanitize dynamic HTML, roll out a Content Security Policy, and scan secrets and dependencies in CI.',
    readTime: '5 min read',
    body: [
      { h: '1. Sanitize dynamic HTML' },
      { p: 'Many props render strings as HTML (titles, content, descriptions, accordion/card/dialog/popover bodies). Some components sanitize internally, but coverage varies per component and prop, and slotted content is never sanitized. Treat API data, URL params, CMS fields and user input as untrusted and sanitize once, at the boundary.' },
      { code: "import DOMPurify from 'dompurify';\n\nconst safe = (html: string) =>\n  DOMPurify.sanitize(html, { USE_PROFILES: { html: true }, FORBID_TAGS: ['style'], FORBID_ATTR: ['style'] });\n\naccordion.items = items.map((i) => ({ ...i, content: safe(i.content) }));", title: 'Sanitize at load time' },
      { list: [
        'Prefer plain-text props when markup is not needed.',
        'Check URL schemes before using a value in `href`/`src` (allow `http`, `https`, `mailto`; reject `javascript:` and `data:`).',
        'In review, look for `.innerHTML`, `insertAdjacentHTML`, `dangerouslySetInnerHTML` and `bypassSecurityTrust*` next to `ui-` usage.',
      ] },
      { h: '2. Content Security Policy' },
      { p: 'Start in report-only mode, fix violations, then enforce. Pass your per-request nonce to the library before registering components so its injected tags carry it.' },
      { code: "import { setNonce } from 'atomicuilibrary';\nimport { defineCustomElements } from 'atomicuilibrary/loader';\n\nsetNonce(nonce);\ndefineCustomElements();", title: 'Nonce' },
      { code: "Content-Security-Policy-Report-Only:\n  default-src 'self';\n  script-src 'self' 'nonce-{RANDOM}';\n  style-src 'self' 'nonce-{RANDOM}';\n  img-src 'self' data: https:;\n  font-src 'self' data:;\n  object-src 'none'; base-uri 'self'; frame-ancestors 'none'", title: 'Starting policy' },
      { p: 'Components set inline `style` attributes, which nonces do not cover. If reports show `style-src-attr` violations, allow `style-src-attr \'unsafe-inline\'` only and keep `script-src` strict. Self-host icon fonts instead of adding CDN origins.' },
      { h: '3. CI scanning' },
      { list: [
        '`npm audit --omit=dev --audit-level=high` as a required job; Dependabot for npm and GitHub Actions; install with `npm ci`.',
        'Secret scanning (gitleaks or GitHub push protection) on pull requests.',
        'CodeQL for JavaScript/TypeScript; pin third-party Actions to a commit SHA.',
      ] },
    ],
  },
  {
    id: 'troubleshooting',
    category: 'Production',
    title: 'Troubleshooting',
    summary: 'Symptom-to-fix table for the problems teams hit most often.',
    readTime: '3 min read',
    body: [
      { table: { head: ['Symptom', 'Likely cause', 'Fix'], rows: [
        ['Components render as blank or unstyled boxes', 'Global stylesheet not loaded', 'Load the CSS by filesystem path; confirm `--color-primary` is set on `:root`'],
        ['Nothing on the page is clickable, overlay visible', 'License key missing or invalid', 'Set `window.APP_UI_LICENSE` before the library loads (see **License Key**)'],
        ['"ui-xyz is not a known element" (Angular) / Vue warnings', 'Framework does not allow custom elements', 'Add `CUSTOM_ELEMENTS_SCHEMA` / `isCustomElement`'],
        ['A prop seems to do nothing', 'Wrong name or attribute/property mix-up', 'Check the Props table: kebab-case in HTML, camelCase in JS'],
        ['List or table stays empty', 'Array passed as an attribute string in React 18 or Vue', 'Set it as a property (React ref, Vue `:items.prop`, Angular `[items]`)'],
        ['Event handler never fires', 'Listening for native or kebab-case event names', 'Use the camelCase CustomEvent name and read `event.detail`'],
        ['`el.show is not a function`', 'Method called before the element is defined', "Await `customElements.whenDefined('ui-xyz')`"],
        ['Icons are empty', 'Non-lucide icon library not loaded', 'Load that library\'s CSS/script, or use `iconLibrary="lucide"`'],
        ['Components break after deploy only', 'Only the entry file was copied', 'Deploy the whole `dist/exploration-project-tailwind/` folder'],
        ['A prop from the docs is missing at runtime', 'Older version installed from npm', 'Run `npm ls atomicuilibrary` and upgrade'],
      ] } },
    ],
  },
];

// Guides are listed by category, in the order of DOC_CATEGORIES (the sort is stable, so each group keeps its own order)
export const DOC_ARTICLES: DocArticle[] = [...BASE_ARTICLES, ...RECIPES].sort(
  (a, b) => DOC_CATEGORIES.indexOf(a.category) - DOC_CATEGORIES.indexOf(b.category)
);
