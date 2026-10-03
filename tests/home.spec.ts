import { test, expect, type Page } from '@playwright/test';

/** Console errors that come from third-party hosts or missing demo icons, not from this app. */
const ignorable = (text: string) => /Failed to load resource|favicon|ERR_|net::|iconoir|ionicons|unsplash/i.test(text);

async function openHome(page: Page, theme: 'dark' | 'light' = 'dark') {
  await page.addInitScript((t) => localStorage.setItem('ather_site_theme', t), theme);
  await page.goto('/#home');
  await expect(page.locator('.snap-block').first()).toBeVisible();
  await page.waitForTimeout(1500);
}

const blockIndexAtTop = (page: Page) =>
  page.evaluate(() => {
    const pad = parseFloat(document.documentElement.style.getPropertyValue('--snap-pad')) || 56;
    return [...document.querySelectorAll('.snap-block')].findIndex((s) => Math.abs(s.getBoundingClientRect().top - pad) < 4);
  });

test.describe('home page', () => {
  test('loads with no page errors and the expected blocks', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => m.type() === 'error' && !ignorable(m.text()) && errors.push(m.text()));
    await openHome(page);
    await expect(page).toHaveTitle(/AtherUI/);
    expect(await page.locator('.snap-block').count()).toBe(8);
    expect(errors).toEqual([]);
  });

  test('one wheel gesture moves exactly one block', async ({ page }) => {
    await openHome(page);
    await page.mouse.move(700, 450);
    expect(await blockIndexAtTop(page)).toBe(0);
    await page.mouse.wheel(0, 100); // a gentle notch
    await page.waitForTimeout(1400);
    expect(await blockIndexAtTop(page)).toBe(1);
    await page.mouse.wheel(0, 2500); // a hard flick must not skip blocks
    await page.waitForTimeout(1600);
    expect(await blockIndexAtTop(page)).toBe(2);
    await page.mouse.wheel(0, -100);
    await page.waitForTimeout(1400);
    expect(await blockIndexAtTop(page)).toBe(1);
  });

  test('keyboard and the section pager move one block at a time', async ({ page }) => {
    await openHome(page);
    await page.keyboard.press('PageDown');
    await page.waitForTimeout(1400);
    expect(await blockIndexAtTop(page)).toBe(1);
    await page.locator('nav[aria-label="Page sections"] button').nth(4).click();
    await page.waitForTimeout(1600);
    expect(await blockIndexAtTop(page)).toBe(4);
  });

  test('free scroll turns snapping off and is remembered', async ({ page }) => {
    await openHome(page);
    const toggle = page.getByRole('button', { name: /Turn block snapping off/ });
    await toggle.click();
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollSnapType)).toBe('none');
    await page.mouse.move(700, 450);
    await page.mouse.wheel(0, 250); // free: moves by the wheel amount, not to the next block
    await page.waitForTimeout(600);
    const y = await page.evaluate(() => window.scrollY);
    expect(y).toBeGreaterThan(100);
    expect(y).toBeLessThan(700);
    await page.reload();
    await page.waitForTimeout(1500);
    await expect(page.getByRole('button', { name: /Page scrolling is free/ })).toBeVisible();
  });

  test('orbit planets can be reached and opened with the keyboard', async ({ page }) => {
    await openHome(page);
    await page.locator('nav[aria-label="Page sections"] button').nth(1).click();
    await page.waitForTimeout(1500);
    const planet = page.getByRole('button', { name: /^Open .+ documentation$/ }).first();
    await expect(planet).toBeVisible();
    await planet.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#docs\/.+/);
  });

  test('makes no claims we cannot back up', async ({ page }) => {
    await openHome(page);
    const text = await page.evaluate(() => document.body.innerText);
    for (const claim of [/WCAG\s*(2\.\d\s*)?AAA/i, /18,400/, /0\.8\s?kb/i, /99\.9\d?%/, /Unmatched performance/i]) {
      expect(text, `home page text matches ${claim}`).not.toMatch(claim);
    }
    // the numbers on the page are the measured ones
    const stats = JSON.parse(await (await page.request.get('/src/data/bundleStats.json')).text().catch(() => '{}') || '{}');
    if (stats.entryJsKb) expect(text).toContain(`${stats.entryJsKb} KB`);
  });

  test('works in the light theme too', async ({ page }) => {
    await openHome(page, 'light');
    await expect(page.locator('html')).toHaveClass(/light/);
    await expect(page.locator('.snap-block').first()).toBeVisible();
  });

  test('phone width: no sideways scrolling, snapping off', async ({ browser }) => {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 800 }, hasTouch: true });
    const page = await ctx.newPage();
    await page.goto('/#home');
    await page.waitForTimeout(2000);
    const m = await page.evaluate(() => ({ over: document.scrollingElement!.scrollWidth - window.innerWidth, snap: getComputedStyle(document.documentElement).scrollSnapType }));
    expect(m.snap).toBe('none');
    expect(m.over).toBeLessThanOrEqual(1);
    await ctx.close();
  });

  test('reduced motion: content is visible without animation', async ({ browser }) => {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto('/#home');
    await page.waitForTimeout(2000);
    const hidden = await page.evaluate(() => [...document.querySelectorAll('.snap-item')].filter((e) => +getComputedStyle(e).opacity < 1).length);
    expect(hidden).toBe(0);
    await ctx.close();
  });
});
