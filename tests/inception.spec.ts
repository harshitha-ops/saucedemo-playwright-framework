import { test, expect } from '@playwright/test';
import { InceptionHomePage } from '../pages/InceptionHomePage';

test.describe('Inception42 website', () => {
  test('home page opens with the right title', { tag: '@inception' }, async ({ page }) => {
    const home = new InceptionHomePage(page);
    await home.goto();
    await home.expectTitleContains('inception');
  });

  test('home page URL is correct', { tag: '@inception' }, async ({ page }) => {
    const home = new InceptionHomePage(page);
    await home.goto();
    await expect(page).toHaveURL(/inception42\.ai/);
  });

  test('home page shows a main heading', { tag: '@inception' }, async ({ page }) => {
    const home = new InceptionHomePage(page);
    await home.goto();
    await expect(home.mainHeading).toBeVisible();
  });

 test('home page shows heading and Get in Touch opens contact', { tag: '@inception' }, async ({ page }) => {
    const home = new InceptionHomePage(page);
    await home.goto();
    await expect(home.mainHeading).toBeVisible();
    await home.clickIconThenGetInTouch();
    await home.expectContactUsVisible();
  });
});
