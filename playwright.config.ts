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

  /* Reporter */
  reporter: 'html',

  /* Shared settings */
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },

  /* Projects */
  projects: [

    // --------------------------------
    // Authentication setup
    // --------------------------------
    {
      name: 'setup',
      testMatch: /.*auth\.setup\.ts/,
    },

    // --------------------------------
    // Authenticated - Chromium
    // --------------------------------
    {
      name: 'authenticated-chromium',

      testMatch: [
        /.*(?:sortProducts|Addtocart|Checkout|CheckOutInfo|Complete order|removeProduct)\.spec\.ts$/i,
      ],

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },

      dependencies: ['setup'],
    },

    // --------------------------------
    // Authenticated - Firefox
    // --------------------------------
    {
      name: 'authenticated-firefox',

      testMatch: [
        /.*(?:sortProducts|Addtocart|Checkout|CheckOutInfo|Complete order|removeProduct)\.spec\.ts$/i,
      ],

      use: {
        ...devices['Desktop Firefox'],
        storageState: 'playwright/.auth/user.json',
      },

      dependencies: ['setup'],
    },

    // --------------------------------
    // Authenticated - WebKit
    // --------------------------------
    {
      name: 'authenticated-webkit',

      testMatch: [
        /.*(?:sortProducts|Addtocart|Checkout|CheckOutInfo|Complete order|removeProduct)\.spec\.ts$/i,
      ],

      use: {
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },

      dependencies: ['setup'],
    },

    // --------------------------------
    // Unauthenticated
    // --------------------------------
    {
      name: 'unauthenticated',

      testMatch: [
        /.*(?:login|invalidLogin|Loginwith_locked_user|Datadriven)\.spec\.ts$/i,
      ],

      use: {
        ...devices['Desktop Chrome'],
        storageState: {
          cookies: [],
          origins: [],
        },
      },
    },

    // --------------------------------
    // API
    // --------------------------------
    {
      name: 'api',

      testMatch: /.*\.api\.spec\.ts/,

      use: {
        baseURL: 'https://jsonplaceholder.typicode.com',
      },
    },
  ],
});