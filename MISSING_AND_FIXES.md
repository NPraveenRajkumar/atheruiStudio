# AtherUI: What's Missing and How to Fix It

Migration of component data from `npraveen/atherui` (95 components, 2,431 props), plus the follow-up work.
Status key: `[x]` done, `[ ]` open.

## Already done

- [x] Components, props, events and slots migrated from `docs.json` into `src/data/components.ts`
- [x] Real `ui-*` elements render in the Playground, Variant Examples, Docs and detail modal (`LiveElement`)
- [x] Installation and docs text use the real package (`atomicuilibrary`) and `ui-*` tags
- [x] Fake accessibility score and `ather-*` usage snippets removed
- [x] Pure-black dark theme (`dark:` variant follows the `html.dark` class)
- [x] Component descriptions handled through `src/descriptions.ts` (replaces tasks 1 to 4 of the first audit)
- [x] Category-grouped, searchable component list (`ComponentPicker`) in Playground, Variant Examples and Docs
- [x] Playground: props-driven controls grouped into categories, canvas on top with generated code below
- [x] Documentation: inline component pages (Props Reference, Events, Slots, Usage, "On this page"), no dialog
- [x] Variant Examples: real demos from `demos.json` (653 demos), prop-based cards, examples index on the right
- [x] Data Source panel (JSON editor, sample, import, clear) on Playground and Variant Examples, with 48 components seeded from demo data or hand-written samples
- [x] Demo assets (images, `layout-configs.json`) copied into `public/assets`; demo paths (`/build/assets`, `/atom/assets`) rewritten to `/assets` (items 2, 3)
- [x] Preview templates (`src/data/previewTemplates.ts`, `src/utils/mountPreview.ts`): child-only components render inside a parent, containers get children, overlays get an Open button or trigger (items 9, 10, 11)
- [x] Scalar union props (`number | string`) get a text control (item 9)
- [x] Components missing from the bundled library show a clear message instead of an empty canvas
- [x] Full-page demos section and description fallback in Variant Examples (items 7, 8)
- [x] Small-screen component list, duplicate-name tags, accurate changed counts, Catalog opens Docs pages (items 15, 16, 17, 20)
- [x] Design tokens and Theme Studio export use the real library variables; product name kept as AtherUI; component counts computed (items 22, 23, 24 partly)
- [x] Light theme for the whole app: toggle in the header, `html.light` re-maps the Tailwind palette (`scripts/generate-light-theme.mjs` -> `src/theme-light.css`), library follows via `data-theme`, choice remembered
- [x] Icons render (global `lucide` script added) (item 13)
- [x] JSON editors for all object and array props (items 6, 12)
- [x] Advanced Data Table sample data normalised to the real `TableColumn` shape (item 1)
- [x] `container` demo error fixed and re-tested; failing demo scripts now show a warning on their card (item 4)

## Unfinished work and known issues

### P1: Broken or incomplete behaviour

| #   | Issue                                                                                                                                                                  | Where                           | Fix                                                                                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | ~~Advanced Data Table shows the first column's value on every line of each row in its card layout (for example `id: T-001` four times)~~ | Playground, Variant Examples    | Fixed: the sample columns came from an outdated demo (`header`, numeric `width`, no `id`), so every column shared one key. The extractor now converts them to the library's `TableColumn` shape (`id`, `label`, string `width`) |
| 2   | ~~Workspace Manager demo loads `/build/assets/layout-configs.json`, which is not in this app, so its layout templates do not load~~ | Variant Examples                | Done: see "Already done" |
| 3   | ~~Demo images (avatar, banner, logo) use paths from the other project and show as broken~~ | Variant Examples                | Done: see "Already done" |
| 4   | ~~The `container is not defined` error from demo scripts was fixed by passing `container` in, but not re-tested in the browser~~ | Variant Examples                | Fixed and re-tested across all 90 components: no `container` errors. Remaining demo failures are item 35; the page now shows a warning on a card when its script fails |
| 5   | Sample data now covers 48 components. Remaining props without samples are mostly styling objects, callbacks or one-off values (`bodyStyle`, `i18n`, `locale`, `lm-*` state objects) | Data Source panel               | Open for the rest. Several new samples (`toolbar`, `smart-location-dropdown`, `code-editor`, `navigation-bar`, `top-bar`) follow the library types but have not been checked visually |
| 6   | ~~Props that look like data but are not recognised (typed `string` or `any`) get no Data Source editor~~ | `isDataProp` in `data/sample.ts` | Fixed: `isDataProp` also accepts plain `string` props named `items`, `options`, `data`, `columns`, `nodes`, `events`, `actions`, `rows` or `panels` |
| 7   | ~~Some demos have no matching component (`dashboard`, `home`, `my-profile`, `complex-form`, `overview`, `about`, `documentation`, `theme-selector`) so they are not shown~~ | Variant Examples                | Fixed: demos with no component are listed under "Full-page demos" in the Variant Examples list (about, complex-form, dashboard, documentation, home, label, my-profile, overview, skeleton-performance, theme-selector) |
| 8   | ~~Demos without a description show only a title~~ | Variant Examples                | Fixed: a demo without a description now uses the first paragraph of its markup |
| 9   | ~~Badge and similar components show an empty canvas until `value` is set (`value` is typed `number \~~ | string`, which has no control)                                      | Done: see "Already done" | Add controls for scalar union types, or seed a sample `value`                                                                                               |
| 10  | ~~Child-only components render empty on their own: `ui-list-item`, `ui-step`, `ui-dialog-header/content/footer`, `ui-fab-item`, `ui-navigation-item`, `ui-breadcrumb-item`, `*-group`~~ | Playground, Docs preview        | Done: see "Already done" |
| 11  | ~~Overlay components (`ui-dialog-box`, `ui-popover`, `ui-snackbar`, `ui-tooltip`, `ui-context-menu`, `ui-command-palette`) need a trigger to show anything~~ | Playground                      | Done: see "Already done" |
| 12  | ~~Props typed as objects, arrays or callbacks other than data props still cannot be edited~~ | Playground ("Set via JavaScript") | Fixed for objects and arrays: every non-scalar prop now has a JSON editor in the Data Source panel. Callback props stay under "Set via JavaScript" because JSON cannot express functions |
| 13  | ~~Icons depend on `registerIconLibrary` being ready when the bundle loads~~ | `main.tsx`                      | Fixed: the library draws its default icons with the global `lucide` script, which the other project loads from unpkg. Added to `index.html`; icons now render. The no-op `registerIconLibrary` call was removed from `main.tsx` |
| 14  | Some props only have a visible effect with another prop (for example `badge` needs `badgePosition`)                                                                    | Playground                      | Document the dependencies in the prop descriptions, or group them in the inspector                                                                          |

### P2: Layout, navigation and naming

| #   | Issue                                                                                                                       | Where                                         | Fix                                                                                       |
| --- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 15  | ~~Component list and side panels are hidden below the `md` / `xl` breakpoints, so small screens cannot switch components or jump to sections~~ | Playground, Variant Examples, Docs            | Fixed: below the `md` breakpoint a "Components" button opens the list as a slide-over on Playground, Variant Examples and Docs. Still open: Docs guides and the "On this page" / examples index are not reachable on small screens |
| 16  | ~~Several components share a display name (two "Tabs", two "Splitter")~~ | `ComponentPicker`                             | Fixed: the tag is shown under the name when two components share a name |
| 17  | ~~The auto-filled `label` counts as a changed prop, so "Content" shows "1 changed" before any edit~~ | Playground inspector                          | Fixed: the changed count compares against the seeded starting values |
| 18  | Categories are guessed from tag names, so some components may be misfiled                                                   | `categoryOf` / generator                      | Review the lists and add a `categories.json` override map                                  |
| 19  | Prop-to-group mapping in the inspector is by name pattern, so a few props land in "Behavior"                                | `GROUPS` in `PlaygroundView.tsx`              | Move misplaced props into the right group as you spot them                                |
| 20  | ~~Component Catalog cards still open the old dialog~~ | `CatalogView`, `ComponentDetailModal`         | Fixed: Catalog and Home cards open the inline Docs page for that component; the dialog component was deleted |
| 21  | App chrome (header, hero, pricing, home) still uses the local mock `AtherButton`, `AtherBadge`, `AtherTabs`, `AtherChart`   | `App.tsx`, `Header.tsx`, `HeroSolarSystem.tsx`, `StatsAndWhy.tsx`, `PricingView.tsx` | Deferred by decision: keep the current look for the header, hero and pricing. Revisit later if you want library buttons and badges there |
| 22  | ~~`designTokens.ts` and Theme Studio use made-up `--ather-*` tokens~~ | `data/designTokens.ts`, `ThemeStudioView.tsx` | Fixed: `designTokens.ts` is generated from the library CSS by `scripts/generate-design-tokens.mjs` (209 real variables, dark values); the Theme Studio CSS export uses `--color-primary`, `--bg-primary`, `--border-default`, `--button-border-radius` and `--font-family` |
| 23  | ~~Product name is inconsistent ("AtherUI", `ather-input` in placeholders)~~ | `CatalogView.tsx`, `PricingView.tsx`, headers | Fixed: the product name stays "AtherUI". Tag examples use the real `ui-*` names (search placeholder, Theme Studio, pricing features) |
| 24  | Pricing, Theme Studio and home stats ("95+", "WCAG AAA") are static marketing text                                          | Home, Pricing                                 | Partly fixed: component counts are computed from `ALL_COMPONENTS`. Still hard-coded: "100% WCAG AAA", "0.8kb" and "zero-dependency" claims on Home, Catalog, Pricing, Footer and in docs articles. Decide whether to keep or reword them |
| 25  | Guide articles in `data/docs.ts` are hand-written                                                                           | Docs                                          | Generate a page per component from `readme` in `docs.json` (88 have one)                   |

### P3: Engineering hygiene

| #   | Issue                                                                              | Fix                                                                                                                                                |
| --- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26  | `components.ts` is generated by a throwaway script that lives outside the repo     | Move it to `scripts/generate-components.mjs`, add `npm run gen:components`, point it at `docs.json`                                                |
| 27  | Sample data script reads `components.ts`, so it must run after the component script | Chain both in one npm script (`gen:data`)                                                                                                          |
| 28  | The Stencil bundle (2.7 MB, 86 files) is copied by hand into `public/`             | Add a `sync:lib` script that copies it from `node_modules/atomicuilibrary/dist`, or depend on the `.tgz` as the other project does                 |
| 29  | `package.json` has no `atomicuilibrary` dependency                                 | Add `"atomicuilibrary": "file:../../kmn/atomicUILibrary/library/atomicuilibrary-0.8.0.tgz"`                                                        |
| 30  | `demos.json` is 3.5 MB and `treeGlobals` / `transferListGlobals` are copied code   | Keep demos lazy-loaded; replace the globals with data from the Data Source samples                                                                 |
| 31  | No tests                                                                           | Add a smoke test that loads every `ui-*` tag and checks `customElements.get(tag)`; add a test per page that it renders without console errors      |
| 32  | Production build has a chunk over 500 kB                                           | Lazy-load views with `React.lazy`, or set `build.chunkSizeWarningLimit`                                                                            |
| 33  | Hero orbit values (`orbitRadius`, `orbitSpeed`, `angleOffset`) and `color` are generated, not real | Fine as decoration; no fix needed                                                                                                                  |

### New issues found while fixing

| #   | Issue                                                                                                                                              | Fix                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 34  | `ui-color-controller`, `ui-smart-location-dropdown` (and maybe `lm-*` parts) are in `docs.json` but not defined in the bundled library                | Rebuild `public/exploration-project-tailwind` from the version that matches `docs.json`, or hide them |
| 35  | Several demos use host functions or template placeholders (`handleStep(...)`, `${btn(...)}`, `${JSON.stringify(...)}`) that only exist in the other app. Re-test found failing scripts in Input, Dropdown, Checkbox, Switch, Button Toggle, Knob, Pattern Input, Radio, Range Slider, Rating, Transfer List, Tabs, Anchor and Breadcrumb. Their helper functions (for example `updateInteractiveInput`) are defined outside the recorded script in `src/assets/demos/*.js` of the other project | Port the demo helper scripts, or skip demos that reference them                              |
| 36  | Dialog Box opens as a light-themed wizard-style overlay; its own `theme` prop is not tied to the canvas                                             | Seed `theme: dark` for dialog-box in `previewTemplates.ts` and check its other modes         |
| 37  | Popover, tooltip and context-menu templates were only checked for size, not interaction                                                            | Click, hover and right-click each in the browser                                             |
| 38  | `ui-navigation-item`, `ui-scroll-top`, `ui-smart-context-menu` still render nothing standalone                                                     | Give them templates (navigation-bar parent with `item`, scrollable page, target element)     |
| 39  | Preview templates for list-item, step, fab-item and carousel use guessed prop names and slide markup                                               | Compare each with its recorded demo and adjust                                              |

### Light theme follow-ups

| #   | Issue                                                                                                                                      | Fix                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 40  | The light theme works by mirroring Tailwind's colour scales, so any new hard-coded hex colour or inline style will not follow the theme       | Use palette classes (`bg-black`, `text-slate-300`...) instead of `bg-[#...]` in new code      |
| 41  | Theme Studio's preview canvas always shows the selected preset's own colours, so it stays dark in light mode                                 | Intended; add a note or follow the app theme if you prefer                                    |
| 42  | Only checked visually on Home, Catalog, Playground, Examples, Docs, Theme Studio and Plans; Design Tokens, Installation, Footer and the command palette were not reviewed in light mode | Click through them in light mode and fix any low-contrast spots                              |
| 43  | Catalog cards still show "Accessibility 100% AAA" (not backed by data)                                                                    | Remove or replace with real data (see item 24)                                               |

## Suggested order

1. Broken behaviour (1 to 4) and missing assets (2, 3).
2. Rendering gaps: child-only components, overlays, scalar-union controls (9, 10, 11), then more sample data (5, 6).
3. Small-screen navigation (15) and the Catalog dialog (20).
4. Replace the mock chrome and tokens (21, 22, 23).
5. Data-driven pages and tooling (24 to 32).

## Questions for you

- Should the app chrome use `ui-button` (task 21), or keep its own look?
- Do you want a "Full-page demos" section for the demos with no component (task 7)?
- May I copy `layout-configs.json` and the demo images from the other project (tasks 2 and 3)?
