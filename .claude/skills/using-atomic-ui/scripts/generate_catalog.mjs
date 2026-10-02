#!/usr/bin/env node
// Regenerates references/components.md and references/components/<tag>.md
// from the library's Stencil docs.json (+ optional component-library-list.csv).
//
// Usage: node generate_catalog.mjs <path-to-library/docs.json> [path-to-component-library-list.csv]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const refDir = path.join(here, '..', 'references');
const compDir = path.join(refDir, 'components');

const [docsPath, csvPath] = process.argv.slice(2);
if (!docsPath) {
  console.error('usage: node generate_catalog.mjs <docs.json> [component-library-list.csv]');
  process.exit(1);
}
const docs = JSON.parse(fs.readFileSync(docsPath, 'utf8'));

// category + status by tag, from the CSV (Component ID column)
const meta = new Map();
if (csvPath && fs.existsSync(csvPath)) {
  const rows = fs.readFileSync(csvPath, 'utf8').replace(/^﻿/, '').split(/\r?\n/).slice(1);
  for (const r of rows) {
    const [name, id, category, , status, desc] = r.split(',');
    if (!id) continue;
    meta.set(id.startsWith('ui-') ? id : `ui-${id}`, { name, category, status, desc });
  }
}

const esc = (s = '') => String(s).replace(/\r?\n+/g, ' ').replace(/\|/g, '\\|').trim();
const code = (s) => '`' + String(s).replace(/`/g, "'") + '`';
const oneLine = (c) => esc(c.docs) || esc(meta.get(c.tag)?.desc) || '';

fs.rmSync(compDir, { recursive: true, force: true });
fs.mkdirSync(compDir, { recursive: true });

for (const c of docs.components) {
  const m = meta.get(c.tag);
  const out = [`# ${c.tag}`, ''];
  if (m) out.push(`${m.name} — ${m.category}, ${m.status}.`, '');
  if (oneLine(c)) out.push(oneLine(c), '');
  out.push(`Shadow DOM: ${c.encapsulation === 'shadow' ? 'yes (style via CSS variables / ::part)' : 'no'}`, '');

  if (c.props.length) {
    out.push('## Props', '', '| Attribute / prop | Type | Default | Description |', '|---|---|---|---|');
    for (const p of c.props) {
      const attr = p.attr && p.attr !== p.name ? `${p.attr} (\`${p.name}\`)` : code(p.name);
      out.push(`| ${attr} | ${code(esc(p.type).slice(0, 120))} | ${p.default ? code(esc(p.default)) : '—'} | ${esc(p.docs)} |`);
    }
    out.push('');
  }
  if (c.events.length) {
    out.push('## Events', '', 'Dispatched as CustomEvent; payload is `event.detail`.', '', '| Event | Detail | Description |', '|---|---|---|');
    for (const e of c.events) out.push(`| ${code(e.event)} | ${code(esc(e.detail).slice(0, 100))} | ${esc(e.docs)} |`);
    out.push('');
  }
  if (c.methods.length) {
    out.push('## Methods', '', 'Call on the element after it is defined (they return Promises).', '', '| Method | Signature | Description |', '|---|---|---|');
    for (const f of c.methods) out.push(`| ${code(f.name)} | ${code(esc(f.signature).slice(0, 140))} | ${esc(f.docs)} |`);
    out.push('');
  }
  if (c.slots.length) {
    out.push('## Slots', '', '| Slot | Description |', '|---|---|');
    for (const s of c.slots) out.push(`| ${code(s.name || '(default)')} | ${esc(s.docs)} |`);
    out.push('');
  }
  if (c.parts?.length) {
    out.push('## CSS parts', '', c.parts.map((p) => code(p.name)).join(', '), '');
  }
  if (c.styles?.length) {
    out.push('## CSS custom properties', '', c.styles.map((s) => code(s.name)).join(', '), '');
  }
  fs.writeFileSync(path.join(compDir, `${c.tag}.md`), out.join('\n'));
}

// index grouped by category
const groups = new Map();
for (const c of docs.components) {
  const cat = meta.get(c.tag)?.category || 'Other';
  if (!groups.has(cat)) groups.set(cat, []);
  groups.get(cat).push(c);
}
const idx = [
  '# Component catalog',
  '',
  `${docs.components.length} components, generated from docs.json (${docs.timestamp}). Open \`components/<tag>.md\` for props, events, methods and slots.`,
  '',
];
for (const [cat, list] of [...groups].sort((a, b) => a[0].localeCompare(b[0]))) {
  idx.push(`## ${cat}`, '');
  for (const c of list.sort((a, b) => a.tag.localeCompare(b.tag))) {
    idx.push(`- [${c.tag}](components/${c.tag}.md) — ${oneLine(c)}`);
  }
  idx.push('');
}
fs.writeFileSync(path.join(refDir, 'components.md'), idx.join('\n'));
console.log(`wrote ${docs.components.length} component files + components.md`);
