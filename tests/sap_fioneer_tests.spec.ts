import { test, expect } from '@playwright/test';

test('verify Key Facts section exists', async ({ page }) => {
  await page.goto('https://www.sapfioneer.com/', { waitUntil: 'networkidle' });
  // TODO: Request data-testid attributes from dev team for better test stability
  // TODO: Consider moving to a page object model for better maintainability once it grows
  await expect(page.locator('.row .col h2').filter({ hasText: 'Key Facts' })).toBeVisible();
});

test ('verify user is redirected to KSG engine when clicking on "ESG Engine" link', async ({ page }) => {
  await page.goto('https://www.sapfioneer.com/', { waitUntil: 'networkidle' });

  const ksgEngineBookmark = page.locator('#masthead').getByRole('link', { name: 'Finance & ESG' });
  await expect(ksgEngineBookmark).toBeVisible();

  await ksgEngineBookmark.hover();
  const ksgEngineLink = page.getByRole('link', { name: 'ESG KPI Engine' });
  await expect(ksgEngineLink).toBeVisible();

  await ksgEngineLink.click();
  await expect(page).toHaveTitle('Stay audit-ready with the ESG KPI Engine | SAP Fioneer');

});