import { test, expect } from '@playwright/test';

test('Verify flipkart page title', async ({ page }) => {
  await page.goto('https://www.flipkart.com');
  await expect(page).toHaveTitle(/flipkart/i);
});