import { test, expect } from '@playwright/test';

test('verify Key Facts section exists', async ({ page }) => {
  await page.goto('https://www.sapfioneer.com/');
  // TODO: Request data-testid attributes from dev team for better test stability
  await expect(page.locator('.row .col h2').filter({ hasText: 'Key Facts' })).toBeVisible();
});