// Prints every axe violation (with the elements involved) for the main pages in both themes.
// Run with: npm run a11y:report   (the dev server must be running; set BASE_URL to change the address)
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = process.env.BASE_URL ?? 'http://localhost:3000';
const pages = (process.argv[2] ? [process.argv[2]] : ['#home', '#docs/installation', '#pricing', '#install']).map((h) => `${base}/${h}`);
const themes = process.argv[3] ? [process.argv[3]] : ['dark', 'light'];

const browser = await chromium.launch();
for (const url of pages) {
  for (const theme of themes) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.addInitScript((t) => localStorage.setItem('ather_site_theme', t), theme);
    await page.goto(url);
    await page.waitForTimeout(3500);
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .exclude('ui-dialog-box, ui-popover, ui-tooltip')
      .analyze();
    console.log(`\n=== ${url.replace(base, '')} (${theme}): ${violations.length} rule(s) ===`);
    for (const v of violations) {
      console.log(`- ${v.id} [${v.impact}] x${v.nodes.length}: ${v.help}`);
      for (const n of v.nodes.slice(0, 3)) {
        const detail = (n.any[0]?.message ?? n.failureSummary ?? '').replace(/\s+/g, ' ').slice(0, 150);
        console.log(`    ${n.target.join(' ').slice(0, 90)}  ::  ${detail}`);
      }
    }
    await context.close();
  }
}
await browser.close();
