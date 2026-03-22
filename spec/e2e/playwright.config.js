const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: '*.spec.js',
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:59292',
    headless: true,
  },
});
