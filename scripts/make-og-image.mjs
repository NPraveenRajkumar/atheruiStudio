// Renders public/og-image.png (1200x630), the picture shown when a link to the site is shared.
// The numbers come from the same sources as the site, so the image never states anything the page does not.
// Run with: npm run og   (needs the dev dependency @playwright/test and its browsers)
import fs from 'node:fs';
import { chromium } from '@playwright/test';

const bundle = JSON.parse(fs.readFileSync('src/data/bundleStats.json', 'utf8'));
const components = (fs.readFileSync('src/data/components.ts', 'utf8').match(/^\s{2}\{\n\s{4}id: "/gm) ?? []).length;

const html = `<!doctype html><meta charset="utf-8"><style>
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #03050d; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; position: relative; }
  .glow { position: absolute; border-radius: 50%; }
  .a { width: 720px; height: 720px; left: -160px; top: -260px; background: radial-gradient(circle, rgba(56,189,248,.45), transparent 68%); }
  .b { width: 760px; height: 760px; right: -200px; bottom: -340px; background: radial-gradient(circle, rgba(168,85,247,.5), transparent 68%); }
  .grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px); background-size: 56px 56px; -webkit-mask-image: radial-gradient(70% 70% at 50% 50%, #000, transparent); }
  .wrap { position: relative; padding: 76px 84px; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
  .logo { display: flex; align-items: center; gap: 18px; font-size: 40px; font-weight: 800; letter-spacing: -.02em; }
  .mark { width: 64px; height: 64px; border-radius: 16px; background: linear-gradient(135deg, #38bdf8, #a855f7); display: grid; place-items: center; font-size: 36px; }
  h1 { font-size: 80px; line-height: 1.04; letter-spacing: -.035em; font-weight: 800; max-width: 980px; }
  h1 span { background: linear-gradient(100deg, #7dd3fc, #c4b5fd); -webkit-background-clip: text; color: transparent; }
  p { font-size: 30px; color: #94a3b8; margin-top: 22px; max-width: 900px; line-height: 1.35; }
  .chips { display: flex; gap: 14px; }
  .chip { padding: 12px 22px; border-radius: 999px; border: 1px solid rgba(255,255,255,.2); background: linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.04)); font-size: 24px; font-weight: 600; }
</style>
<div class="glow a"></div><div class="glow b"></div><div class="grid"></div>
<div class="wrap">
  <div class="logo"><div class="mark">A</div>AtherUI</div>
  <div><h1>Web Components for <span>any framework</span></h1>
  <p>Built with StencilJS. Works in React, Angular, Vue and plain HTML.</p></div>
  <div class="chips"><div class="chip">${components} components</div><div class="chip">${bundle.entryJsKb} KB core, gzipped</div><div class="chip">MIT license</div></div>
</div>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.screenshot({ path: 'public/og-image.png' });
await browser.close();
console.log(`public/og-image.png written (${components} components, ${bundle.entryJsKb} KB)`);
