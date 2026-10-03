import { defineConfig, devices } from '@playwright/test';

// Smoke and accessibility tests run against the Vite dev server (or any server named in BASE_URL).
const PORT = Number(process.env.PORT ?? 4173);
const baseURL = process.env.BASE_URL ?? `http://localhost:${PORT}`;

export default defineConfig({
  testDir: 'tests',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL, trace: 'retain-on-failure', ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
  webServer: process.env.BASE_URL
    ? undefined
    : { command: `npx vite --port ${PORT} --strictPort`, url: baseURL, reuseExistingServer: !process.env.CI, timeout: 120_000 },
});
