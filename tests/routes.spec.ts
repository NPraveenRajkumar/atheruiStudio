import { test, expect } from '@playwright/test';

const ignorable = (text: string) => /Failed to load resource|favicon|ERR_|net::|iconoir|ionicons|unsplash/i.test(text);

const VIEWS = ['home', 'catalog', 'playground', 'examples', 'docs', 'themes', 'pricing', 'install', 'design-system'];

test.describe('every page', () => {
  for (const view of VIEWS) {
    test(`#${view} loads without errors and sets a title`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => m.type() === 'error' && !ignorable(m.text()) && errors.push(m.text()));
      await page.goto(`/#${view}`);
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 20_000 });
      await expect(page).toHaveTitle(/AtherUI/);
      expect(errors).toEqual([]);
    });
  }
});

test.describe('deep links', () => {
  const cases: [string, RegExp, RegExp][] = [
    ['#docs/tooltip', /^Tooltip · Documentation/, /^Tooltip$/],
    ['#docs/installation', /^Installation & Setup Checklist · Documentation/, /Installation & Setup Checklist/],
    ['#docs/recipe-confirm-dialog', /^Recipe: Confirm before a destructive action · Documentation/, /Confirm before a destructive action/],
    ['#examples/card', /^Card · Variant Examples/, /Card Examples/],
    ['#playground/dialog-box', /^Dialog Box · Design Studio/, /Design Studio/],
  ];
  for (const [hash, title, h1] of cases) {
    test(`${hash} opens the right page`, async ({ page }) => {
      await page.goto(`/${hash}`);
      await expect(page).toHaveTitle(title);
      await expect(page.locator('h1').first()).toHaveText(h1);
    });
  }

  test('picking a component updates the address bar and the title', async ({ page }) => {
    await page.goto('/#docs');
    await page.locator('aside button[title="ui-badge"]').first().click();
    await expect(page).toHaveURL(/#docs\/badge$/);
    await expect(page).toHaveTitle(/^Badge · Documentation/);
  });
});

test.describe('sharing basics', () => {
  test('the head has a description, a favicon, a manifest and a preview image', async ({ page }) => {
    await page.goto('/');
    for (const sel of ['meta[name="description"]', 'link[rel="icon"]', 'link[rel="manifest"]', 'meta[property="og:image"]']) {
      await expect(page.locator(sel)).toHaveCount(1);
    }
    const desc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(desc).not.toMatch(/unmatched|world-class|best/i);
    for (const path of ['/favicon.svg', '/manifest.webmanifest', '/og-image.png']) {
      expect((await page.request.get(path)).ok(), `${path} is served`).toBe(true);
    }
  });
});

test.describe('pricing is honest', () => {
  test('only the free tier is presented as available', async ({ page }) => {
    await page.goto('/#pricing');
    await expect(page.getByText('Draft pricing.')).toBeVisible();
    await expect(page.getByText(/99\.99%|sales@|14-Day/)).toHaveCount(0);
    await expect(page.getByRole('button', { name: /Draft: not yet available/ })).toHaveCount(2);
  });
});

test.describe('search palette', () => {
  test('Ctrl+K opens it and Escape closes it', async ({ page }) => {
    await page.goto('/#home');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Control+k');
    await expect(page.getByRole('combobox', { name: /Search components/ })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('combobox', { name: /Search components/ })).toHaveCount(0);
  });

  test('finds a prop by name and opens the component that owns it', async ({ page }) => {
    await page.goto('/#home');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Control+k');
    await page.getByRole('combobox').fill('showFilterPanel');
    await expect(page.getByRole('option', { name: /showFilterPanel/ }).first()).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#docs\/advanced-data-table$/);
    await expect(page.locator('h1').first()).toHaveText('Advanced Data Table');
  });

  test('a guide result opens that guide, not the docs home', async ({ page }) => {
    await page.goto('/#home');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Control+k');
    await page.getByRole('combobox').fill('troubleshooting');
    await page.getByRole('option', { name: /Troubleshooting/ }).first().click();
    await expect(page).toHaveURL(/#docs\/troubleshooting$/);
    await expect(page).toHaveTitle(/^Troubleshooting · Documentation/);
  });

  test('arrow keys move the selection and Shift+Enter opens the Design Studio', async ({ page }) => {
    await page.goto('/#home');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Control+k');
    await page.getByRole('combobox').fill('tooltip');
    await expect(page.getByRole('option', { selected: true }).first()).toContainText('Tooltip');
    await page.keyboard.press('Shift+Enter');
    await expect(page).toHaveURL(/#playground\/tooltip$/);
  });
});
