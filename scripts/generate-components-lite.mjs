// Builds the small data files the home page, sidebar and search palette load up front, from the full catalog:
//   src/data/componentsLite.json : one short record per component, the categories, and the totals shown on the home page
//   src/data/searchIndex.json    : every prop and event name, loaded only when the search palette is first opened
// The full catalog (src/data/components.ts, ~680 KB) is then only needed by the pages that show props and examples,
// which load lazily. Run with: npm run data
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { buildSync } from 'esbuild';

const tmp = path.join(os.tmpdir(), `components-${process.pid}.mjs`);
buildSync({ entryPoints: ['src/data/components.ts'], bundle: true, platform: 'node', format: 'esm', outfile: tmp, logLevel: 'silent' });
const { ALL_COMPONENTS, CATEGORIES } = await import(pathToFileURL(tmp).href);
fs.rmSync(tmp);

const lite = {
  categories: CATEGORIES,
  totals: {
    components: ALL_COMPONENTS.length,
    props: ALL_COMPONENTS.reduce((n, c) => n + c.props.length, 0),
  },
  // the libraries <ui-icon> can draw from, for the home page
  iconLibraries: ALL_COMPONENTS.find((c) => c.id === 'icon')?.props.find((p) => p.name === 'library')?.options ?? [],
  components: ALL_COMPONENTS.map((c) => ({
    id: c.id,
    name: c.name,
    tag: c.tag,
    category: c.category,
    description: c.description,
    totalProps: c.totalProps,
    totalEvents: c.totalEvents,
    variantsCount: c.variantsCount,
    status: c.status,
    color: c.color,
  })),
};
fs.writeFileSync('src/data/componentsLite.json', JSON.stringify(lite));

// [name, attribute or '', component id], and [event name, component id]
const index = {
  props: ALL_COMPONENTS.flatMap((c) => c.props.map((p) => [p.name, p.attr && p.attr !== p.name ? p.attr : '', c.id])),
  events: ALL_COMPONENTS.flatMap((c) => c.events.map((e) => [e.name, c.id])),
};
fs.writeFileSync('src/data/searchIndex.json', JSON.stringify(index));

const kb = (f) => (fs.statSync(f).size / 1024).toFixed(0);
console.log(`componentsLite.json ${kb('src/data/componentsLite.json')} KB, searchIndex.json ${kb('src/data/searchIndex.json')} KB (full catalog: ${kb('src/data/components.ts')} KB)`);
