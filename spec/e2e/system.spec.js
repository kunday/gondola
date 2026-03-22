const { test, expect } = require('@playwright/test');

test.describe('System', () => {
  test('shows version information', async ({ page }) => {
    await page.goto('/app#system/version');
    await page.waitForSelector('table td');

    const cells = await page.locator('table td').allTextContents();
    expect(cells).toContain('Api Version');
    expect(cells).toContain('Version');
    expect(cells).toContain('Go Version');
  });

  test('shows system info', async ({ page }) => {
    await page.goto('/app#system/info');
    await page.waitForSelector('table td');

    const cells = await page.locator('table td').allTextContents();
    expect(cells).toContain('Containers');
    expect(cells).toContain('Images');
    expect(cells).toContain('Driver');
  });

  test('navigates between version and info tabs', async ({ page }) => {
    await page.goto('/app#system/version');
    await page.waitForSelector('.module-nav-tabs');

    const tabs = await page.locator('.module-nav-tabs a').allTextContents();
    expect(tabs).toContain('version');
    expect(tabs).toContain('info');
  });
});
