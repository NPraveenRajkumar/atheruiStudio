// Builds src/data/demoModules.json: which real demo module (public/assets/js/demos/*.js) and init function
// belongs to each demo key. The Variant Examples page runs these modules and harvests the blocks they render,
// so template expressions, helper functions and event wiring work (unlike the flattened snapshots in demos.json).
import fs from 'fs';

const loader = fs.readFileSync('public/assets/js/demo-loader.js', 'utf8');
const pascal = (k) => k.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join('');

const map = {};
for (const m of loader.matchAll(/'([\w-]+)':\s*\(\)\s*=>\s*import\('[^']*\/demos\/([\w-]+\.js)[^']*'\)/g)) {
  const [, key, file] = m;
  if (map[key]) continue;
  const path = `public/assets/js/demos/${file}`;
  if (!fs.existsSync(path)) continue; // listed in the loader but not shipped
  const src = fs.readFileSync(path, 'utf8');
  // `export function initXDemo` and `export const initXDemo = () =>` both occur
  const exports = [...src.matchAll(/export\s+(?:(?:async\s+)?function\s+(\w+)|const\s+(\w+)\s*=\s*(?:async\s*)?(?:\([^)]*\)|\w+)\s*=>)/g)].map((e) => e[1] ?? e[2]);
  const wanted = `init${pascal(key)}Demo`;
  const fn = exports.includes(wanted) ? wanted : exports.find((e) => /^init\w*Demo$/.test(e));
  if (fn) map[key] = { file, fn };
}
fs.writeFileSync('src/data/demoModules.json', JSON.stringify(map, null, 1));
console.log(Object.keys(map).length, 'demo modules');
