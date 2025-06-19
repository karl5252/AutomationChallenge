import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.sapfioneer.com/');
  await expect(page.locator('#col-1027276180')).toContainText('Key Facts');
});