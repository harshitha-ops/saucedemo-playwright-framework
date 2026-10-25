import { Page, Locator, expect } from '@playwright/test';

export class InceptionHomePage {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.locator('h1').first();
    this.navLinks = page.locator('nav a');
  }

  async goto() {
    await this.page.goto('https://inception42.ai/');
  }

  async expectTitleContains(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text, 'i'));
  }
}
