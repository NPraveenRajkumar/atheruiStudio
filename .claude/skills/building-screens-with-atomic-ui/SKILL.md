---
name: building-screens-with-atomic-ui
description: Build new app screens (pages, dashboards, forms, list/detail views, settings, login, data-table pages, dialogs, navigation shells) using the AtomicUI library (`atomicuilibrary`, `ui-*` web components) for as much of the UI as possible. Use this skill whenever the user asks to build, add, scaffold or redesign a screen, page, view, form, dashboard or layout in a project that uses atomicuilibrary / AtomicUI / "our atomic library", or when they say "use the library as much as possible", even if they never name a component. Pair it with `using-atomic-ui` for setup, theming, license and per-component props.
---

# Building screens with AtomicUI

The goal is a screen where nearly every visible element is a `ui-*` component and plain HTML is only structural glue (a grid, a wrapper). Hand-rolled buttons, inputs, cards and modals next to library ones is what makes an app look inconsistent, and each one is a place where theming, dark mode and accessibility silently stop working.

This skill covers **composition**: turning a screen request into a component tree. Setup (install, `defineCustomElements`, stylesheet, license key), theming and the exact props of every component live in the `using-atomic-ui` skill and its `references/components/<tag>.md` files. Defer to them rather than restating them.

## Workflow

1. **Confirm the library is wired in.** Check `package.json` for `atomicuilibrary` and the entry file for `defineCustomElements`. If missing, follow `using-atomic-ui` first. A screen built on an unregistered library renders blank without errors.
2. **Break the screen into regions, then into needs.** Write a short list: shell (top bar, side nav), page header, primary content, secondary content, actions, feedback (toasts, confirms), empty/loading states. A list is cheap and stops you from forgetting states the library already has components for.
3. **Map every need to a component** using `references/need-to-component.md`. For anything not in that table, scan `using-atomic-ui/references/components.md` before falling back to HTML. The library has ~99 components; the miss rate on "surely there isn't one for that" is high (`ui-empty-state`, `ui-skeleton`, `ui-callout-banner`, `ui-meter-group`, `ui-stepper`, `ui-timeline`, `ui-command-palette` are commonly overlooked).
4. **Open the component file for each tag before writing markup.** Prop names are specific (`dialogTitle`, `cardTitle`, `companyName`) and a wrong guess fails silently. Item shapes for `items`, `columns`, `actions` and similar data props are in the file's type descriptions.
5. **Compose using the patterns** in `references/screen-recipes.md` (app shell, form, dashboard, list/detail, data table page, confirm flow). Start from the closest recipe instead of from scratch.
6. **Verify in the browser.** Run the dev server and look at the screen in light and dark. Misconfigured components render empty rather than throwing, so a clean console proves little.
7. **Report gaps honestly.** If no component fits, say which part is plain HTML and why, using theme tokens (`var(--bg-primary)`, `var(--text-primary)`, `var(--border-default)`) so it still follows the theme. Never invent a `ui-` tag.

## Composition rules

- **Library for elements, HTML for structure.** Use `div`/`section` with CSS grid or flex for page layout, and `ui-stack` when a simple row/column with spacing is all you need. Do not restyle component internals; they are in shadow DOM, so use props, CSS variables and `::part()`.
- **Colors from tokens, never hex.** Hard-coded colors break the seven themes and dark mode. Use `var(--bg-primary)`, `var(--text-primary)`, `var(--text-secondary)`, `var(--border-default)` for wrappers.
- **Data goes in as properties.** Arrays and objects (`items`, `columns`, `data`, `actions`) are set as JS properties, or as JSON-string attributes in plain HTML. In React 18, set them through a ref in an effect; JSX attributes would stringify objects to `[object Object]`.
- **Events are CustomEvents** (`buttonClick`, `tabChange`, `asideClosed`) with the payload in `event.detail`. React 18 needs `addEventListener` via a ref; React 19, Angular and Vue can bind them directly.
- **Overlays need a trigger.** `ui-dialog-box`, `ui-popover`, `ui-snackbar` and `ui-context-menu` show nothing on their own. Wire a `ui-button` to set `open = true` (dialog) or call `.show(...)` (snackbar), and listen for the close event to keep your state in sync.
- **Parent plus children.** Child-only tags (`ui-list-item`, `ui-step`, `ui-breadcrumb-item`, `ui-button-toggle`, `ui-dialog-header/content/footer`) render empty outside their parent. Always emit the pair.
- **Cover the unhappy states.** Use `ui-skeleton` or the `loading` prop while fetching, `ui-empty-state` for no results, `ui-callout-banner` for page-level errors and `ui-snackbar` for action feedback. Screens that only render the happy path look unfinished.
- **Accessibility comes from using the right component**, not from ARIA you bolt on. Give inputs a `label`, give icon-only buttons an accessible label, and use `ui-breadcrumb` and `ui-tabs` rather than styled links.
- **Keep it small.** Extract a screen into one file or component per screen. Do not build wrapper components around single `ui-*` tags; they add indirection and hide the props the next reader needs.

## When the request is vague

If the user says only "build a settings screen", don't ask a round of questions. Pick sensible sections for that kind of screen, build it from the closest recipe, and list the assumptions you made at the end so they can redirect. Ask only when a wrong guess would be expensive, such as which data source a table reads.

## References

- `references/need-to-component.md`: UI need to `ui-*` tag lookup, with the one prop or slot that most often matters
- `references/screen-recipes.md`: ready-to-adapt markup for the common screen types
- `using-atomic-ui` skill: setup, license gate, theming, security, and `references/components/<tag>.md` for full props, events, slots
