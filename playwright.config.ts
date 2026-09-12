import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */
  reporter: 'html',

  /* Shared settings for all projects */
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },

  /* Configure projects */
  projects: [

    /* Authentication setup */
    {
      name: 'setup',
      testMatch: /.*auth\.setup\.ts/,
    },

    /* Tests that require a logged-in user */
    {
      name: 'authenticated',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    /* Tests that must start logged out */
    {
      name: 'unauthenticated',
      use: {
        ...devices['Desktop Chrome'],
        storageState: {
          cookies: [],
          origins: [],
        },
      },
    },

    /* Firefox */
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    /* WebKit / Safari */
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});