const { defineConfig } = require("@playwright/test");
const env = require("./config/env");

const browserName = env.browser || "chromium";

module.exports = defineConfig({
  testDir: "./tests",

  timeout: 30 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    [
      "html",
      {
        outputFolder: "playwright-report",
        open: "never",
      },
    ],
  ],

  use: {
    baseURL: env.baseUrl,

    actionTimeout: 0,

    screenshot: "only-on-failure",

    trace: "on-first-retry",

    video: "retain-on-failure",
  },

  projects: [
    {
      name: browserName,
      use: {
        browserName,
      },
    },
  ],
});