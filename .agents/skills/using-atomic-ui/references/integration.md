# Integrating AtomicUI by framework

Every setup needs the same four things: install, `defineCustomElements()`, the global CSS, and a license key (see SKILL.md). Only the wiring differs. The CSS path inside the package is:

```
node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.css
```

The package `exports` map exposes only `.` and `./loader`, so a bare-specifier import of that CSS (`import 'atomicuilibrary/dist/...'`) is refused by bundlers that honor `exports`. Use a filesystem path (relative import, Angular `styles`, or a copy step) instead. These are the standard approaches; confirm in the target project that the stylesheet request returns 200 and the tokens appear on `:root`.

## Plain HTML / no build step

```html
<link rel="stylesheet" href="/node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.css">
<script>window.APP_UI_LICENSE = "APPUI.eyJ...";</script>
<script type="module" src="/node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.esm.js"></script>

<ui-button label="Save" color="primary" variant="filled"></ui-button>
```

For production, serve the whole `dist/exploration-project-tailwind/` folder: the entry lazy-loads sibling `p-*.entry.js` chunks relative to itself, so copying only the entry file breaks components.

## Vite (React, Vue, Svelte, vanilla)

Import the CSS by relative filesystem path, not by package specifier:

```ts
// src/main.ts
import '../node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.css';
import { defineCustomElements } from 'atomicuilibrary/loader';

(window as any).APP_UI_LICENSE = import.meta.env.VITE_APPUI_LICENSE;  // before defineCustomElements
defineCustomElements();
```

In a monorepo where `node_modules` is hoisted, adjust the relative path (or copy the CSS into `public/` / `src/assets` with `vite-plugin-static-copy` and link it).

## Angular (standalone or NgModule)

`angular.json` (build and test targets). `styles` takes filesystem paths, so the `exports` restriction does not apply:

```json
"styles": [
  "node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.css",
  "src/styles.css"
]
```

`main.ts`:

```ts
import { defineCustomElements } from 'atomicuilibrary/loader';

(window as any).APP_UI_LICENSE = environment.appUiLicense;  // before defineCustomElements
defineCustomElements();
bootstrapApplication(AppComponent, appConfig);
```

Tolerate the unknown tags, per component for standalone, per module otherwise:

```ts
@Component({ standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA], /* ... */ })
```

Usage:

```html
<ui-button label="Save" color="primary" (buttonClick)="save($event)"></ui-button>
<ui-accordion [items]="faqItems"></ui-accordion>   <!-- binds the property -->
<ui-dialog-box [open]="showDialog" dialogTitle="Edit" (dialogClosed)="showDialog = false"></ui-dialog-box>
```

Notes:
- `[prop]="x"` sets the DOM property, which is what you want for arrays and objects. A plain `prop="x"` sets an attribute (string only).
- For two-way flows (for example dialog `open`), update your state in the close/change event handler; the element does not write back to your variable.
- `ngModel` does not work on these elements. Read `event.detail` from the component's change event and set your form control (`form.patchValue`) yourself.
- The library repo also contains an Angular proxy wrapper project (`angular-wrapper/`, package core name `app-ui-library`). Its publication status was not confirmed when this skill was written, so default to the custom-elements approach above unless the project already depends on that wrapper.

## React

React 18: strings and booleans pass as attributes, but object/array props and custom events must be wired through a ref.

```tsx
import { useEffect, useRef } from 'react';

export function FaqAccordion({ items }: { items: unknown[] }) {
  const ref = useRef<HTMLElement & { items: unknown[] }>(null);
  useEffect(() => {
    const el = ref.current!;
    el.items = items;
    const onChange = (e: Event) => console.log((e as CustomEvent).detail);
    el.addEventListener('accordionChange', onChange);
    return () => el.removeEventListener('accordionChange', onChange);
  }, [items]);
  return <ui-accordion ref={ref} />;
}
```

Declare the tags for TypeScript so JSX accepts them (for example `declare namespace JSX { interface IntrinsicElements { [tag: string]: any } }` as a quick start, or import the library's generated `Components` types for stricter typing). React 19 passes props and custom events to custom elements natively, so refs are only needed for imperative calls.

For multi-word props in React 18 JSX, write the kebab-case attribute (`dialog-title="Edit"`) or set the camelCase property through the ref.

## Vue 3

```ts
// vite.config.ts
vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('ui-') } } })
```

```vue
<ui-button label="Save" color="primary" @buttonClick="save" />
<ui-accordion :items.prop="faq" />   <!-- .prop forces property binding -->
```

Events are emitted with camelCase names, so listen with the exact name (`@buttonClick`) or with `addEventListener` on a template ref. A kebab-case listener (`@button-click`) will not fire.

## SSR / Next.js / Nuxt / Angular Universal

The library touches `window`, `document`, `localStorage` and `crypto.subtle` at load. Import and call `defineCustomElements()` only in the browser (a `useEffect`, a client-only plugin, or `isPlatformBrowser`). Server-rendered `ui-*` tags appear as empty elements until hydration; that is expected.

## Smoke test after setup

1. Page loads with no `#appui-license-error` overlay. If the license check is active, the console shows `[AppUI License] ✅ Valid ...` (or a skipped-validation warning on plain http); silence is also normal when the check is not loaded.
2. `getComputedStyle(document.documentElement).getPropertyValue('--color-primary')` returns a color. Empty means the global CSS is not loaded.
3. `customElements.get('ui-button')` is defined, and a `<ui-button label="Test">` shows styled text.
