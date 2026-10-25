import { Page, Locator, expect } from '@playwright/test';

export class InceptionHomePage {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly navLinks: Locator;
  readonly menuIcon: Locator;
  readonly getInTouchLink: Locator;
  readonly contactUsText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.locator('h1').first();
    this.navLinks = page.locator('nav a');
    this.menuIcon = page.locator('header button, nav button').last();
    this.getInTouchLink = page.getByText(/get in touch/i).first();
    this.contactUsText = page.getByText(/contact us/i).first();
  }

  async goto() {
    await this.page.goto('https://inception42.ai/');
  }

  async expectTitleContains(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text, 'i'));
  }

  async clickIconThenGetInTouch() {
    await this.menuIcon.click();
    await this.getInTouchLink.click();
  }

  async expectContactUsVisible() {
    await expect(this.contactUsText).toBeVisible();
  }
}
