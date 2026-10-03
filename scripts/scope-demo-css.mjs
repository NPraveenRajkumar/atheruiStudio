// Builds public/assets/styles/demo.scoped.css from the original demo stylesheets.
// The originals contain page-level rules (`button { ... }`, `html.dark .demo-block`) that would restyle the
// whole app, so every selector is prefixed with `.demo-scope` and only demo content is affected.
import fs from 'fs';

const files = ['public/assets/styles/demo.css', 'public/assets/styles/demo-styles.css'];
const SCOPE = '.demo-scope';

const scopeSelector = (sel) =>
  sel
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      if (/^(html|body|:root)\b/.test(s)) {
        const m = s.match(/^(html|body|:root)((?:\.[\w-]+|\[[^\]]+\])*)\s*(.*)$/);
        return m[3] ? `${m[1]}${m[2]} ${SCOPE} ${m[3]}` : `${m[1]}${m[2]} ${SCOPE}`;
      }
      return `${SCOPE} ${s}`;
    })
    .join(', ');

function chunks(css) {
  const out = [];
  let depth = 0, start = 0, preludeEnd = -1;
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (c === '{') { if (depth === 0) preludeEnd = i; depth++; }
    else if (c === '}') { depth--; if (depth === 0) { out.push({ prelude: css.slice(start, preludeEnd).trim(), body: css.slice(preludeEnd + 1, i) }); start = i + 1; } }
  }
  return out;
}

function scope(css) {
  return chunks(css.replace(/\/\*[\s\S]*?\*\//g, ''))
    .map(({ prelude, body }) => {
      if (/^@(media|supports|container)/.test(prelude)) return `${prelude} {\n${scope(body)}\n}`;
      if (/^@/.test(prelude)) return `${prelude} {${body}}`;
      // Theme variables (html.dark { --text-primary: ... }) belong to the library stylesheet; scoping them to a demo
      // would override the preview surface's own theme, so only the non-variable declarations are kept.
      // `html.dark .x` / `html.green .x` re-theme the original demo page; here the preview surface decides colours
      if (prelude.split(',').some((x) => /^\s*(html|body)[.[]/.test(x))) return '';
      const rootish = prelude.split(',').every((x) => /^\s*(html|body|:root)\b[^ ]*\s*$/.test(x));
      const kept = rootish ? body.replace(/--[\w-]+\s*:[^;]+;?/g, '') : body;
      if (rootish && !kept.trim()) return '';
      return `${scopeSelector(prelude)} {${kept}}`;
    })
    .filter(Boolean)
    .join('\n');
}

const out = files.filter((f) => fs.existsSync(f)).map((f) => `/* ${f} */\n${scope(fs.readFileSync(f, 'utf8'))}`).join('\n\n');
fs.writeFileSync('public/assets/styles/demo.scoped.css', out);
console.log('scoped css', out.length, 'bytes');
