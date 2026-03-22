const { test, expect } = require('@playwright/test');

test.describe('Images', () => {
  test('lists images with sizes', async ({ page }) => {
    await page.goto('/app#images');
    await page.waitForSelector('tbody tr td a');

    const headers = await page.locator('thead th').allTextContents();
    expect(headers).toEqual(['Id', 'RepoTags', 'Virtual Size']);

    const sizes = await page.locator('tbody tr td:nth-child(3)').allTextContents();
    const hasRealSizes = sizes.some(s => s.includes('MB') || s.includes('GB'));
    expect(hasRealSizes).toBeTruthy();
  });

  test('image links to history view', async ({ page }) => {
    await page.goto('/app#images');
    await page.waitForSelector('tbody tr td a');

    const firstLink = page.locator('tbody tr td a').first();
    const href = await firstLink.getAttribute('href');
    expect(href).toMatch(/#images\/history\//);
  });

  test('image history shows all layers with commands', async ({ page }) => {
    await page.goto('/app#images');
    await page.waitForSelector('tbody tr td a');

    await page.locator('tbody tr td a').first().click();
    await page.waitForSelector('tbody tr', { timeout: 10000 });

    const rows = await page.locator('tbody tr').count();
    expect(rows).toBeGreaterThan(1);

    const commands = await page.locator('tbody tr td code').allTextContents();
    expect(commands.some(c => c.length > 0)).toBeTruthy();
  });
});
