import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly items: Locator;
  readonly cartBadge: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.items = page.locator('[data-test="inventory-item"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.title).toHaveText('Products');
  }

  async addToCart(productSlug: string) {
    await this.page.locator(`[data-test="add-to-cart-${productSlug}"]`).click();
  }

  async removeFromCart(productSlug: string) {
    await this.page.locator(`[data-test="remove-${productSlug}"]`).click();
  }

  async expectCartCount(count: number) {
    if (count === 0) {
      await expect(this.cartBadge).toHaveCount(0);
    } else {
      await expect(this.cartBadge).toHaveText(String(count));
    }
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
