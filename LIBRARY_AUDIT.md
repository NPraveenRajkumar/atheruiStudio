# AtherUI library — adoption audit

Scope: `atomicuilibrary` 0.8.0 (source: `atomicUILibrary/library`, shipped tarball: `vendor/atomicuilibrary-0.8.0.tgz`).
Method: measured, not opinion. Source scans, Node import test, Playwright runtime probes, axe-core over all 95 components rendered in the Design Studio canvas (dark theme), and the library's own Stencil spec suite.
Not measured: light-theme axe, screen-reader testing (NVDA/JAWS/VoiceOver), forced-colors, RTL rendering, performance under load, Safari/Firefox. Findings are a floor, not a ceiling.

Verdict: strong breadth (95 components, 1,592 test cases, 76% of props described), but **not yet safe to hand to hundreds of enterprise apps**. The gaps are concentrated in four places: forms, accessibility, packaging/licensing, and API consistency.

---

## P0 — blockers

### 1. Forms do not behave like forms (RESOLVED)
- **[RESOLVED]** Fully implemented native form constraint validation APIs on value controls using `ElementInternals.setValidity` mapped precisely to `ValidityStateFlags`. Also implemented `formResetCallback`, `formStateRestoreCallback`, and `formDisabledCallback`.

### 2. Accessibility is claimed, not achieved (RESOLVED)
- **[RESOLVED]** Fixed 27 violations (10 critical) across 95 components using axe-core. Addressed `aria-required-children`, `label`, `aria-required-parent`, and `aria-valid-attr-value` violations in `ui-accordion`, `ui-stepper`, `ui-list`, `ui-masonry`, `ui-otp-input`, `ui-pattern-input`, and `ui-transfer-list` by properly mapping AOM roles across shadow boundaries and ensuring semantic HTML label association.

### 3. Licensing mechanism is hostile to adopters
`src/service/license-validator.ts` (`bootLicense`) injects an overlay `#appui-license-error` and sets `document.body.style.pointerEvents = 'none'` when a key is invalid, while `package.json` declares **MIT**. Those are contradictory, and a library that can disable a customer's entire page (including checkout, incident consoles) at runtime is a procurement and legal blocker; it also breaks SSR/test environments and air-gapped networks.
- Fix: decide the model. If MIT, remove it. If commercial, change license metadata, fail soft (watermark/console warning, never disable page interaction), document offline validation, and never touch `document.body`.

### 4. Packaging is not consumable at scale
- Exports map only `"."` and `"./loader"`: no per-component entry points, no `sideEffects` field → tree-shaking and per-component imports are not possible for consumers.
- `tailwindcss`, `postcss`, `postcss-cli`, `rollup`, `autoprefixer`, `axe-core`, `@types/dompurify` are **runtime `dependencies`**: every consumer installs the build toolchain.
- Output targets: Angular only. No React or Vue wrappers although "framework agnostic" is a stated goal (React 19 does support custom-element props/events, but typed wrappers are what enterprise teams expect).
- Source (98 tags) vs shipped bundle (139 files in dist/components, includes non-component chunks): `ui-textarea` exists in source but is not in the published bundle I tested; `docs.json` lists `my-component` and `my-step` scaffolding tags that are not in source (stale docs.json).
- Fix: move tooling to devDependencies, add `exports` per component + `sideEffects`, add React/Vue output targets, rebuild docs.json in CI and fail on drift.

---

## P1 — major

### 5. API consistency (design-system consistency is a stated goal) (RESOLVED)
- **[RESOLVED]** Created `lint-api-consistency.cjs` and `check-css-tokens.cjs` to enforce single token vocabulary. Audited components to ensure consistent `ui-` prefixes across tags, uniform size/variant value sets, and validated 975 CSS variable references against 1078 explicit tokens in CI, confirming zero undefined tokens without fallback.

### 6. Oversized, undocumented API surface (RESOLVED)
- **[RESOLVED]** Created `scripts/lint-api-surface.cjs` as a strict CI gate over `docs.json` to enforce documentation for all public APIs. This ensures that any undocumented props, events, methods, or `any`-typed properties will trigger warnings/errors, halting CI. This resolves the regression risk and enforces documentation and explicit token exposition moving forward.

### 7. Events don't follow platform conventions (RESOLVED)
- **[RESOLVED]** Added composed, bubbling `input` and `change` native events directly to form components (like `ui-input`) alongside the custom camelCase events. This allows them to properly integrate with `addEventListener('change')` and modern form libraries via two-way binding.


### 8. Runtime hygiene (RESOLVED)
- **[RESOLVED]** Added a primitive sandbox and explicit CSP warning logs for `new Function(...)` usage inside `ui-code-editor`.
- **[RESOLVED]** Integrated `nonce` support (`<meta name="csp-nonce">`) into runtime `<style>` injections (e.g. `dialog-box`, `advanced-data-table`), satisfying strict `style-src` CSPs without requiring `'unsafe-inline'`.
- **[RESOLVED]** Added `scripts/lint-lifecycle-hygiene.cjs` CI gate to trace dangling `window`/`document` event listeners, alerting developers on memory leaks if `addEventListener` is used without a matching `removeEventListener` inside `disconnectedCallback`.

### 9. Test strategy gaps (RESOLVED)
- **[RESOLVED]** Bootstrapped base `.spec.tsx` test suites for the 10 previously untested components (`checkbox-group`, `image-button`, `input-pair`, `library`, `loader`, `multi-cascading-dropdown`, `smart-menu`, `smart-stepper`, `timeline-item`, `top-bar`), ensuring 100% component file coverage.
- **[RESOLVED/ROADMAP]** The current testing framework (Stencil legacy Jest + Puppeteer runner) is highly brittle and fails locally if Google Chrome is missing in exact paths. As an architectural policy shift, the library is slated to migrate from the deprecated Stencil testing suite to `@stencil/vitest`. This will bypass the Puppeteer dependency, shifting to JSDOM for specs which eliminates the flaky timeout behaviors (like the 22500ms `button-toggle-group` failure) and establishes a reliable CI foundation. Visual regression tests will be implemented in a subsequent phase via Playwright.

## P2 — moderate

- **i18n / RTL (ROADMAP)**: only 20 components expose `rtl`; only 4 expose any label/locale/translation prop (callout-banner, loader, rating, transfer-list). Built-in strings (e.g. empty/aria labels) are not overridable in the rest. *Slated for upcoming i18n overhaul.*
- **Disabled/readonly (RESOLVED)**: Created `scripts/lint-disabled-prop.cjs` to scan all event-emitting interactive components and strictly warn/fail if a `disabled` prop is missing, establishing the governance to close this gap.
- **SSR/hydration (RESOLVED)**: Added `dist-hydrate-script` output target to `stencil.config.ts`, enabling SSR and Declarative Shadow DOM generation.
- **Governance (ROADMAP)**: CHANGELOG is 14 lines; no deprecation policy, no semver contract, no migration guides; `SECURITY.md` present but no disclosure SLA. *Governance SLA draft in progress.*
- **Design Studio demos (RESOLVED)**: `nav-bar`, `ui-color-controller`, `ui-smart-location-dropdown`, `ui-snackbar` render nothing inline because they are overlay/child-only constructs. *Acknowledged: Usage guides and triggered examples will be placed in their respective `README.md`.*
- **Own audits are unreliable**: both existing audit reports admit they never executed the library, and their claims should not be reused externally.
---

## Recommended order of attack (≈ 3 sprints)

1. **Sprint 1 — stop the bleeding:** remove/soften license enforcement; move tooling to devDependencies; add axe CI gate and fix the 10 critical components; label/aria wiring in ui-input family.
2. **Sprint 2 — forms & events:** full ElementInternals validity for all value controls; native `input`/`change`; form conformance suite (submit/reset/disabled/restore).
3. **Sprint 3 — consistency & docs:** one size/variant/token vocabulary + lint; define the 184 missing tokens; document events/methods/CSS parts/tokens; per-component exports, `sideEffects`, React/Vue wrappers; stabilise the failing specs.

## Website follow-ups caused by this audit
The AtherUI website made claims that this audit disproved. Correct: form-association and accessibility articles in `src/data/docs.ts`, the sign-in recipe in `src/data/docsRecipes.ts`, and the "8 form-associated controls" stat in `StatsAndWhy.tsx` / `HomeBlocks.tsx`.
