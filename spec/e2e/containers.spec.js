const { test, expect } = require('@playwright/test');

test.describe('Containers', () => {
  test('lists running containers', async ({ page }) => {
    await page.goto('/app#containers');
    await page.waitForSelector('tbody tr td a');

    const headers = await page.locator('thead th').allTextContents();
    expect(headers).toEqual(['Id', 'Name', 'Command', 'Image', 'Status']);

    const rows = page.locator('tbody tr');
    await expect(rows.first()).toBeVisible();
  });

  test('shows all containers tab', async ({ page }) => {
    await page.goto('/app#containers/all');
    await page.waitForSelector('tbody tr');

    const allLink = page.locator('a', { hasText: 'All' });
    await expect(allLink).toBeVisible();
  });

  test('container ID links to detail view', async ({ page }) => {
    await page.goto('/app#containers');
    await page.waitForSelector('tbody tr td a');

    const firstLink = page.locator('tbody tr td a').first();
    const href = await firstLink.getAttribute('href');
    expect(href).toMatch(/#container\/show\//);
  });

  test('container detail shows info, state, and networking tabs', async ({ page }) => {
    await page.goto('/app#containers');
    await page.waitForSelector('tbody tr td a');

    await page.locator('tbody tr td a').first().click();
    await page.waitForSelector('.module-nav-tabs');

    const tabs = await page.locator('.module-nav-tabs a').allTextContents();
    expect(tabs).toContain('info');
    expect(tabs).toContain('state');
    expect(tabs).toContain('networking');
    expect(tabs).toContain('changes');
    expect(tabs).toContain('logs');
    expect(tabs).toContain('stats');
  });

  test('networking tab shows network details', async ({ page }) => {
    await page.goto('/app#containers');
    await page.waitForSelector('tbody tr td a');
    await page.locator('tbody tr td a').first().click();

    await page.waitForSelector('.module-nav-tabs');
    await page.locator('a', { hasText: 'networking' }).click();
    await page.waitForSelector('#module-nav-content-networking table');

    const cells = await page.locator('#module-nav-content-networking td').allTextContents();
    expect(cells.some(c => c === 'Gateway')).toBeTruthy();
    expect(cells.some(c => c === 'IP Address')).toBeTruthy();
  });

  test('changes tab shows human-readable kind labels', async ({ page }) => {
    await page.goto('/app#containers');
    await page.waitForSelector('tbody tr td a');

    const firstLink = page.locator('tbody tr td a').first();
    const href = await firstLink.getAttribute('href');
    const containerId = href.split('/').pop();

    await page.goto(`/app#container/changes/${containerId}`);
    await page.waitForSelector('tbody tr td');

    const kindCells = await page.locator('tbody tr td:nth-child(2)').allTextContents();
    const validKinds = ['Modified', 'Added', 'Deleted', ''];
    kindCells.forEach(kind => {
      expect(validKinds).toContain(kind);
    });
  });

  test('logs tab displays log content', async ({ page }) => {
    await page.goto('/app#containers');
    await page.waitForSelector('tbody tr td a');

    const firstLink = page.locator('tbody tr td a').first();
    const href = await firstLink.getAttribute('href');
    const containerId = href.split('/').pop();

    await page.goto(`/app#container/logs/${containerId}`);
    await page.waitForSelector('pre', { timeout: 10000 });

    const logContent = await page.locator('pre').textContent();
    expect(logContent.length).toBeGreaterThan(0);
  });

  test('stats tab displays network and memory data', async ({ page }) => {
    await page.goto('/app#containers');
    await page.waitForSelector('tbody tr td a');

    const firstLink = page.locator('tbody tr td a').first();
    const href = await firstLink.getAttribute('href');
    const containerId = href.split('/').pop();

    await page.goto(`/app#container/stats/${containerId}`);
    await page.waitForSelector('h4', { timeout: 10000 });

    const headings = await page.locator('h4').allTextContents();
    expect(headings.some(h => h.includes('Network'))).toBeTruthy();
    expect(headings.some(h => h.includes('Memory'))).toBeTruthy();
  });
});
