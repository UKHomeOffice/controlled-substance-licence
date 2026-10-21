import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

//Note: The baseURL is set to the value of PLAYWRIGHT_BASE_URL from the .env file if it exists, otherwise it defaults to http://localhost:${port}.
const port = Number(process.env.PLAYWRIGHT_PORT || 8080);
const baseURL = process.env.PLAYWRIGHT_BASE_URL || `http://localhost:${port}`;


const testDir = defineBddConfig({
  features: 'e2e-tests/features/**/*.feature',
  steps: [
    'e2e-tests/steps/**/*.step.ts',
    'e2e-tests/fixture/fixtures.ts',
  ],
  outputDir: '.features-gen',
});

export default defineConfig({
  testDir,
  timeout: 260_000,
  expect: {
    timeout: 6000,
  },
  fullyParallel: true,
  workers:4,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL,
    viewport: null,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    trace: 'on-first-retry',
    headless: !!process.env.CI,
    browserName: 'chromium',
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

    webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
      command: 'yarn start:dev',
      port,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000
    },
    
  projects: [
    {
      name: 'cda',
      grep: /@CDA/,
      workers: 1,
    },
    {
      name: 'lthcc',
      grep: /@LTHCC/,
      workers: 1,
    },
    {
      name: 'pca',
      grep: /@PCA/,
      workers: 1,
    },
    {
      name: 'reg',
      grep: /@REG/,
      workers: 1,
    },
  ],
});