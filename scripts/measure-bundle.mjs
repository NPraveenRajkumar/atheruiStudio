// Measures the real download size of the installed atomicuilibrary and writes src/data/bundleStats.json.
// The numbers on the home page come from this file, so they can be re-checked with `npm run measure`.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const pkgDir = 'node_modules/atomicuilibrary';
const dist = path.join(pkgDir, 'dist/exploration-project-tailwind');
if (!fs.existsSync(dist)) {
  console.error(`Cannot find ${dist}. Run npm install first.`);
  process.exit(1);
}

const gzip = (file) => zlib.gzipSync(fs.readFileSync(path.join(dist, file)), { level: 9 }).length;
const kb = (bytes) => Math.round((bytes / 1024) * 10) / 10;
const files = fs.readdirSync(dist);

const entryJs = 'exploration-project-tailwind.esm.js';
const entryCss = 'exploration-project-tailwind.css';
const chunks = files
  .filter((f) => /^p-.*\.entry\.js$/.test(f))
  .map((f) => ({ file: f, gzip: gzip(f) }))
  .sort((a, b) => a.gzip - b.gzip);

const stats = {
  library: 'atomicuilibrary',
  version: JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf8')).version,
  measured: 'gzip level 9, from dist/exploration-project-tailwind',
  entryJsKb: kb(gzip(entryJs)),
  entryCssKb: kb(gzip(entryCss)),
  lazyChunks: chunks.length,
  medianChunkKb: kb(chunks[Math.floor(chunks.length / 2)].gzip),
  largestChunkKb: kb(chunks[chunks.length - 1].gzip),
  allChunksKb: kb(chunks.reduce((n, c) => n + c.gzip, 0)),
};

fs.writeFileSync('src/data/bundleStats.json', JSON.stringify(stats, null, 2) + '\n');
console.log(stats);
