# Theming AtomicUI

## How it works

The global stylesheet (`exploration-project-tailwind.css`) declares design tokens as CSS custom properties on `:root` (light defaults) and overrides them under `[data-theme="..."]` selectors. CSS custom properties inherit through the Shadow DOM boundary, so one `data-theme` attribute on `<html>` (or any ancestor) re-themes every component beneath it.

Supported themes: `light` (default), `dark`, `green`, `pink`, `yellow`, `violet`, `blue`.

## Switching themes

```html
<html data-theme="dark">
```

The attribute is all that is required. The helpers below ship in `dist/exploration-project-tailwind/index.esm.js`, a side-effect module that the normal `defineCustomElements()` / script-tag entry does not import (checked against the 0.8.0 build). Check `typeof window.setTheme === 'function'` before relying on them, and otherwise set the attribute and persist it yourself.

```js
// available only when index.esm.js has been loaded
window.setTheme('violet');
window.toggleTheme();            // cycles through all themes
window.toggleTheme(['light', 'dark']);   // cycles within a subset
window.getTheme();
window.ThemeSwitcher.onChange((theme) => console.log(theme));
```

- The choice is saved in `localStorage` under `app-ui-theme` and restored on the next load. If nothing is saved, the initial theme follows `prefers-color-scheme`.
- `ThemeSwitcher` and `THEMES` are exported from `index.esm.js` (and declared in the package types), but the package-root runtime entry does not export them.
- If the host app has its own dark mode (for example a Tailwind `dark` class), keep the two in sync by setting `data-theme` whenever the app's mode changes. The library does not read the host's class.

## Token groups

Core tokens (override these for brand colors):

- Brand/status: `--color-primary`, `--color-primary-hover`, `--color-primary-rgb` (the `r, g, b` triplet used for translucent variants, so update it together with the hex), `--color-primary-text`, `--color-primary-subtle`, `--color-primary-border`; the same pattern for `secondary`, `success`, `danger`, `warning`, `info`.
- Surfaces and text: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--bg-hover`, `--bg-selected`, `--text-primary`, `--text-secondary`, `--text-muted`, `--text-emphasized`, `--text-standard`, `--border-default`, `--border-strong`, `--border-subtle`, `--font-family`.

Per-component tokens follow `--<component>-<part>`: for example `--accordion-bg`, `--card-header-bg`, `--nav-item-active-bg`, `--panel-border-color`, `--adt-row-hover-bg` (advanced data table), `--button-border-radius`, `--dock-item-hover-bg`. To see every token, grep the shipped CSS: `grep -o -- '--[a-z0-9-]*' node_modules/atomicuilibrary/dist/exploration-project-tailwind/exploration-project-tailwind.css | sort -u`.

## Overriding

Brand-wide, after the library stylesheet:

```css
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-primary-rgb: 37, 99, 235;
}
```

A token set on `:root` applies to the light theme only if the theme blocks redefine it (they do for most surface/text tokens). To brand every theme consistently, repeat the override under the `[data-theme="dark"]` etc. selectors you support.

One component or one instance:

```html
<ui-accordion style="--accordion-bg: #f0f0f0"></ui-accordion>
```

Do not target component internals with descendant selectors; they are in a shadow root and will not match. Use tokens, props, or `::part()` where a component's reference file lists parts.
