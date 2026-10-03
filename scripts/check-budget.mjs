// Fails when the JavaScript every visitor downloads first grows past its budget. Run after `npm run build`.
// The initial chunk is the one index.html loads; everything else is fetched on demand (pages, catalog data, search index).
import fs from 'node:fs';
import zlib from 'node:zlib';

const BUDGET_KB = 130; // gzipped; it is about 106 KB today
const dir = 'dist/assets';
const entry = fs.readdirSync(dir).find((f) => /^index-.*\.js$/.test(f));
if (!entry) {
  console.error('No index-*.js in dist/assets. Run `npm run build` first.');
  process.exit(1);
}
const gz = zlib.gzipSync(fs.readFileSync(`${dir}/${entry}`), { level: 9 }).length / 1024;
console.log(`initial JavaScript: ${gz.toFixed(1)} KB gzipped (budget ${BUDGET_KB} KB)`);
if (gz > BUDGET_KB) {
  console.error(`Over budget by ${(gz - BUDGET_KB).toFixed(1)} KB. Check what was added to the home page's imports.`);
  process.exit(1);
}
