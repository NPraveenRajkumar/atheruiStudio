# Security guidance for apps using AtomicUI

Three practices to apply in every consumer app. Items marked "verify" were not tested against a running build.

## 1. Sanitize dynamic HTML before it reaches a component

Many components accept strings that they render as HTML (titles, content, labels, descriptions, accordion/card/popover/dialog bodies, callouts, context-menu items, code preview). About 33 library components use `innerHTML` internally, and a subset (accordion, button, callout-banner, card, code-editor, context-menu, dialog-box, icon, popover, layout-manager panel) call the library's own `sanitizeHTML` (DOMPurify). Do not rely on that as the app's defence: coverage is per component and per prop, and slotted content you write yourself is never sanitized.

Rules:
- Treat every string that originates outside your source code (API responses, JSON-driven demo/config content, URL params, user input, CMS fields) as untrusted before putting it in a prop or slot.
- Prefer plain text. If a prop only needs text, pass text and let the component escape it. Use HTML-capable props only when markup is required.
- When markup is required, sanitize at the boundary, once, with an allowlist:

```ts
import DOMPurify from 'dompurify';

const safe = (html: string) =>
  DOMPurify.sanitize(html, { USE_PROFILES: { html: true }, FORBID_TAGS: ['style'], FORBID_ATTR: ['style'] });

accordion.items = items.map(i => ({ ...i, content: safe(i.content) }));
```

- For JSON-driven content (a config or demo file that describes pages), sanitize when the JSON is loaded, not at each render, and validate its shape (a schema check such as zod) so unexpected fields never reach component props.
- Never build markup by string concatenation of untrusted values, never put untrusted values in `href`/`src` without checking the scheme (allow `http`, `https`, `mailto`; reject `javascript:` and `data:`), and never use `eval`/`new Function` on content.
- When reviewing code, grep for `.innerHTML`, `insertAdjacentHTML`, `bypassSecurityTrust*` (Angular) and `dangerouslySetInnerHTML` (React) next to `ui-` usage.

## 2. Security headers and a CSP plan

Start in report-only mode, fix violations, then enforce.

```
Content-Security-Policy-Report-Only:
  default-src 'self';
  script-src 'self' 'nonce-{RANDOM}';
  style-src 'self' 'nonce-{RANDOM}';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self';
  object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'
```

AtomicUI specifics (verify in your build):
- The package root exports `setNonce`. Call it before `defineCustomElements()` with the per-request nonce so the library's injected `<style>`/`<script>` tags carry it: `import { setNonce } from 'atomicuilibrary'; setNonce(nonce);`.
- Components also set inline `style` attributes at runtime. Nonces do not cover style attributes, so if the report shows `style-src-attr` violations, allow `style-src-attr 'unsafe-inline'` only, and keep `script-src` strict. That is the smallest concession.
- Each external icon font, CDN script (lucide, ionicons, Font Awesome) and stylesheet needs its origin added to the matching directive. Prefer self-hosting them; it removes third-party origins from the policy.
- The library's license check uses `crypto.subtle` and needs no `unsafe-eval`.

Companion headers: `Strict-Transport-Security: max-age=31536000; includeSubDomains`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` with only the features used, and `frame-ancestors` (above) in place of `X-Frame-Options`. Set them at the server or CDN (for static hosting such as Firebase Hosting, in the `headers` block of its config).

## 3. Secrets and dependency scanning in CI

- Dependencies: `npm audit --omit=dev --audit-level=high` as a required job (the library's CI already does this); enable Dependabot for npm and GitHub Actions (`.github/dependabot.yml`); commit the lockfile and install with `npm ci`.
- Secrets: add gitleaks (or GitHub secret scanning with push protection) as a required check on pull requests, and run it over full history once when introducing it.
- Static analysis: GitHub CodeQL for JavaScript/TypeScript on pull requests and weekly.
- AtomicUI license keys: keep them in CI/hosting secrets and inject at build time (`VITE_*`/environment files from secrets), never in committed source.
- Pin third-party GitHub Actions to a commit SHA and give workflows `permissions: contents: read` by default.
