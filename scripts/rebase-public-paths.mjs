// Prefix root-relative links to public/ files (e.g. "/assets/images/x.png") in dist/ with BASE_PATH.
// Vite's `base` only rewrites what it bundles; the recorded demos, sample data and public/ scripts
// hold these paths as plain strings, so they need rewriting when the site is served from a sub-path.
// Usage: BASE_PATH=/atheruiStudio/ node scripts/rebase-public-paths.mjs
import fs from 'node:fs';
import path from 'node:path';

const base = process.env.BASE_PATH || '/';
if (base === '/') {
  console.log('BASE_PATH is "/", nothing to rewrite.');
  process.exit(0);
}

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const TEXT = /\.(html|js|mjs|css|json|webmanifest|svg)$/;

// Top-level entries of public/ ("assets", "favicon.svg", ...) are the paths that can be linked from the site root.
const entries = fs.readdirSync(path.join(root, 'public')).map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
// Only a path that starts a string/URL: preceded by a quote, backtick, "(", "=" or whitespace, never by a word
// character or "/" (so "https://cdn/x/assets/" and already-prefixed "/atheruiStudio/assets/" are left alone).
const re = new RegExp(`(^|["'\`(=\\s])/(${entries.join('|')})(?=[/"'\`)?#\\s]|$)`, 'gm');

let files = 0;
let hits = 0;
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (TEXT.test(e.name)) {
      const src = fs.readFileSync(p, 'utf8');
      let n = 0;
      const out = src.replace(re, (_, pre, name) => (n++, `${pre}${base}${name}`));
      if (n) {
        fs.writeFileSync(p, out);
        files++;
        hits += n;
      }
    }
  }
};
walk(dist);
console.log(`Rebased ${hits} paths in ${files} files to ${base}`);
