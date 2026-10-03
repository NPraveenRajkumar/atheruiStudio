import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Automated checks catch only part of the accessibility problems, so this is a floor, not a certificate.
// The page fails on "critical" and "serious" violations. Lesser ones are printed so they can be worked down.
const PAGES: [string, string][] = [
  ['home', '/#home'],
  ['documentation', '/#docs/installation'],
  ['recipe', '/#docs/recipe-data-table'],
  ['pricing', '/#pricing'],
  ['installation', '/#install'],
  ['catalog', '/#catalog'],
  ['theme studio', '/#themes'],
  ['design tokens', '/#design-system'],
  ['design studio', '/#playground'],
];

for (const theme of ['dark', 'light'] as const) {
  for (const [name, url] of PAGES) {
    test(`${name} (${theme}) has no critical or serious violations`, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('ather_site_theme', t), theme);
      await page.goto(url);
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 20_000 });
      await page.waitForTimeout(2500); // let the entrance animations finish so contrast is measured on final colours
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        // the component library's own internals are out of scope here
        .exclude('ui-dialog-box, ui-popover, ui-tooltip')
        .analyze();
      const blocking = results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');
      const rest = results.violations.filter((v) => !blocking.includes(v));
      if (rest.length) console.log(`${name} (${theme}) minor:`, rest.map((v) => `${v.id}×${v.nodes.length}`).join(', '));
      expect(blocking.map((v) => `${v.id} (${v.impact}) ×${v.nodes.length}: ${v.help}`)).toEqual([]);
    });
  }
}
