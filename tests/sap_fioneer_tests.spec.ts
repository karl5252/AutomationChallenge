import { test, expect } from '@playwright/test';

test('verify Key Facts section exists', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  // TODO: Request data-testid attributes from dev team for better test stability
  // TODO: Consider moving to a page object model for better maintainability once it grows
  await expect(page.locator('.row .col h2').filter({ hasText: 'Key Facts' })).toBeVisible();
});

test ('verify user is redirected to ESG engine when clicking on "ESG Engine" link', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const esgEngineBookmark = page.locator('#masthead').getByRole('link', { name: 'Finance & ESG' });
  await expect(esgEngineBookmark).toBeVisible();

  await esgEngineBookmark.hover();
  const esgEngineLink = page.getByRole('link', { name: 'ESG KPI Engine' });
  await expect(esgEngineLink).toBeVisible();

  await esgEngineLink.click();
  await expect(page).toHaveTitle('Stay audit-ready with the ESG KPI Engine | SAP Fioneer');

});

test ('verify work email validation on contact form', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const getInTouchBtn = page.locator('#masthead').getByRole('link', { name: 'Get in touch' });
  await expect(getInTouchBtn).toBeVisible();

  await getInTouchBtn.click();
  await expect(page).toHaveTitle('SAP Fioneer | Contact | Get in touch!');

  // iframe
  await expect(page.locator('iframe[title="Form 0"]')).toBeVisible();

  const contactFormIframe = page.frameLocator('iframe[title="Form 0"]');
  
  const emailInput = contactFormIframe.locator('input[name="email"]');
  await expect(emailInput).toBeVisible();

  await emailInput.fill('342323');
  await emailInput.blur(); // Trigger validation
  await expect(contactFormIframe.locator('[role="alert"]')).toHaveText(/.+/);

});