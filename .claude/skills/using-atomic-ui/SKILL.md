---
name: using-atomic-ui
description: How to install, configure and use the AtomicUI web-component library (npm package `atomicuilibrary`, `ui-*` custom elements such as ui-button, ui-input, ui-dialog-box, ui-dropdown, ui-tabs, ui-accordion, ui-advanced-data-table) in another app. Use this skill whenever the user is working in a project that depends on or wants to adopt atomicuilibrary / AtomicUI / app-ui / "our atomic library", mentions any `ui-` tag, asks to build a page, form, dialog, dashboard or layout from the shared component library, or sees a license-error overlay, unstyled/blank `ui-` elements, or theme problems. Also use it when deciding which AtomicUI component fits a UI need, even if the user never names the library.
---

# Using the AtomicUI library in a consumer app

AtomicUI is a Stencil web-component library: about 99 native custom elements, all tagged `ui-*`, that work in any framework or plain HTML. Because they are standard custom elements, you consume them like HTML tags with no wrappers required. This file covers what is not obvious from the tag names: setup order, how data is passed in, theming, and the license gate.

Component details (props, events, methods, slots) live in `references/`, not here. Look them up instead of guessing. Prop names are specific (`dialogTitle`, not `title`) and a wrong guess usually fails silently.

## Workflow

1. **Check how the project already integrates it.** Look in `package.json` for `atomicuilibrary`, and grep the entry files for `defineCustomElements`, `exploration-project-tailwind`, `APP_UI_LICENSE` and `data-theme`. If setup exists, don't redo it; just build with it.
2. **If it is not set up, do the setup** (next section; framework specifics in `references/integration.md`).
3. **Pick components** from `references/components.md` (catalog grouped by category), then open `references/components/<tag>.md` for each one you will use. Read the file before writing markup.
4. **Write the markup/code** following the conventions below.
5. **Verify in a browser or dev server if you can.** Misconfigured components render blank instead of throwing, so "no errors in the console" is not evidence that it works.

## Setup checklist (all four are needed)

1. **Install:** `npm install atomicuilibrary`. The registry's latest can lag the source repo (npm had 0.7.2 while the repo was at 0.8.0 when this skill was written). If a component or prop from the docs is missing at runtime, check the installed version (`npm ls atomicuilibrary`) before assuming the bug is in your code.
2. **Register the elements once**, at app start:
   ```ts
   import { defineCustomElements } from 'atomicuilibrary/loader';
   defineCustomElements();
   ```
   Plain-HTML alternative: `<script type="module" src=".../dist/exploration-project-tailwind/exploration-project-tailwind.esm.js"></script>`.
3. **Load the global stylesheet** `dist/exploration-project-tailwind/exploration-project-tailwind.css`. It defines the design tokens (`--color-primary` and the rest) on `:root` and for every `data-theme`. Without it components render with missing colors and spacing. The package `exports` map only exposes `.` and `./loader`, so `import 'atomicuilibrary/dist/...css'` is rejected by webpack, Vite and the Angular CLI. Reference the file by path instead; see `references/integration.md` for the per-bundler way.
4. **Provide the license key** (next section) by setting `window.APP_UI_LICENSE` before the library loads. It costs nothing if the check is inactive and prevents a blocked page if it is active.

## License gate (read before debugging "nothing is clickable")

The library has a signed-key license check. When it runs and the key is missing or invalid, it injects a full-page error overlay (`#appui-license-error`) and sets `pointer-events: none` on `<body>`. The symptom looks like a broken app, not a license problem.

The check (and the `ThemeSwitcher` runtime) is a side effect of the module `dist/exploration-project-tailwind/index.esm.js`. In the build inspected when this skill was written (0.8.0 source), the package root and `defineCustomElements()` loader entry do **not** import that module, and `import { setLicense } from 'atomicuilibrary'` resolves to an entry that exports only `setNonce`. So whether the gate is active depends on how the consumer loads the library. Don't assume either way: if the overlay appears, supply a key; if it never appears, don't go looking for it. Provide the key like this:

```html
<script>window.APP_UI_LICENSE = "APPUI.eyJ...";</script>  <!-- before the library script -->
```

`window.AppUILicense.setLicense(key)` and `getLicenseResult()` exist only after `index.esm.js` has executed. The named import `setLicense` is exported from `index.esm.js`, not from the package root; if the project needs it, import that file by relative `node_modules` path (the `exports` map blocks the subpath specifier), and prefer the `window.APP_UI_LICENSE` route.

- `dev` keys only validate on `localhost`, `127.0.0.1` and `[::1]`. `prod` keys are domain-locked (wildcards like `*.example.com` are supported) and expire.
- Validation is skipped with a console warning when `crypto.subtle` is unavailable (plain `http://` on a non-localhost host).
- Keys are issued by the library maintainer (`library/scripts/generate-license.mjs` in the library repo). Never invent or hard-code a key. Ask the user where theirs lives (env var, secret store) and wire it in from there, and don't commit a real production key to a public repo.

## Conventions that trip people up

- **Complex data.** Arrays and objects are accepted as a JS property (`el.items = [...]`; Angular `[items]="data"`) or as a JSON string attribute. Some props are *typed as `string`* and expect JSON text (the accordion's `items` in the older docs is `JSON.stringify([...])`). In the component file, a `string` type whose description mentions an array means JSON string; `string[]` or an interface means a real value. When unsure, check the component file rather than guessing.
- **Attribute vs property names.** In HTML use the kebab-case attribute (`dialog-title`, `animation-duration`). In JS, TS and Angular property binding use the camelCase prop name. The component files list both when they differ.
- **Events are CustomEvents with camelCase names** (`buttonClick`, `inputChange`, `accordionChange`), not native `click`/`change`. Read the payload from `event.detail`. Angular: `(buttonClick)="onSave($event)"`. React 18: attach with a `ref` and `addEventListener`, because React 18 does not wire custom events from JSX props (React 19 does).
- **Methods** (for example `snackbar.show(...)`) exist once the element is defined and return Promises. If you call one during initial render in a framework, wait for `customElements.whenDefined('ui-xyz')` first.
- **Shadow DOM.** Global CSS selectors do not reach inside components. Customize through CSS custom properties set on the element or an ancestor (`<ui-accordion style="--accordion-bg:#f0f0f0">`), `::part()` where the component file lists parts, and props (`variant`, `color`, `size`). Don't try to restyle internals with descendant selectors.
- **Shared vocabulary.** `variant`, `color` (`primary|secondary|success|warning|danger|info|none`), `size` (`xs|sm|md|lg|xl`), `disabled`, `loading`, `rtl`, `icon` + `iconLibrary` recur across components, but accepted values differ per component (the button's `variant` is not the input's). Confirm in the component file.
- **Icons.** `icon` names resolve through `iconLibrary` (lucide by default; ionicons, fontawesome, material and heroicons are also supported). Non-lucide libraries need their own CSS or script loaded by the host page, otherwise the icon is empty.
- **Slots.** Composite components (dialog, card, tabs) take content through named slots (`slot="body"`, `slot="footer"`). Check the Slots table; content in the default slot where a named one is required renders nothing.
- **Frameworks must tolerate unknown tags.** Angular: `schemas: [CUSTOM_ELEMENTS_SCHEMA]`. Vue: `compilerOptions.isCustomElement = t => t.startsWith('ui-')`. Without this you get "not a known element" errors.

## Theming

Set `data-theme` on `<html>` (`document.documentElement.setAttribute('data-theme', 'dark')`). That alone re-themes everything, because the tokens live in the global CSS. Supported themes: `light`, `dark`, `green`, `pink`, `yellow`, `violet`, `blue`. The `window.setTheme()` / `ThemeSwitcher` helpers (with `localStorage` persistence under `app-ui-theme`) come from the same `index.esm.js` module as the license check, so they may not exist in a given consumer; write the attribute yourself and persist it in the app. Override brand colors by redefining the `--color-*` tokens on `:root` after the library CSS. Details: `references/theming.md`.

## Security

Untrusted strings (API data, JSON-driven content, user input) must be sanitized before they reach any prop or slot that renders HTML; do not rely on the library's internal sanitizing. Plan a CSP (report-only first, nonce via the exported `setNonce`) and add secrets and dependency scanning to CI. Concrete steps and snippets: `references/security.md`. Apply these whenever you wire dynamic content into components or touch the app's hosting/CI config.

## Choosing components

Prefer an AtomicUI component over hand-rolled HTML whenever one exists; mixing styles is what makes consumer apps look inconsistent. Common mappings: text, number, password or OTP fields use `ui-input`; select uses `ui-dropdown`; toggle uses `ui-switch`; modal, drawer, confirm or prompt use `ui-dialog-box` (open it with `open = true`); toast uses `ui-snackbar`; tabs use `ui-tabs`; FAQ or collapsible lists use `ui-accordion`; data grids use `ui-advanced-data-table`; wizards use `ui-stepper`; hierarchies use `ui-tree`. For anything else, scan `references/components.md`.

If a needed component or prop does not exist, say so and offer a fallback (a plain element styled with the theme tokens, or a request to the library maintainers). Don't invent a `ui-` tag.

## Keeping this skill current

`references/components.md` and `references/components/` are generated from the library's Stencil `docs.json`. After the library changes, regenerate them from the library repo:

`node scripts/generate_catalog.mjs <library>/docs.json <library>/component-library-list.csv`

The library repo (https://github.com/kmnshrm/atomicUILibrary) is the source of truth. `app-ui/docs/<component>.md` has narrative docs for many components and `library/llms.md` has worked examples for the most common ones.

## References

- `references/integration.md`: plain HTML, Angular, React, Vue, bundler CSS loading, SSR
- `references/theming.md`: themes, tokens, per-component CSS variables, dark mode
- `references/security.md`: HTML sanitizing, CSP and headers plan, CI secrets/dependency scanning
- `references/components.md`: catalog by category; each entry links to `components/<tag>.md`
