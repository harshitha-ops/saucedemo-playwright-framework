import { test, expect } from '../fixtures/base';
import { users } from '../data/users';

const backpack = 'sauce-labs-backpack';

test.describe('Inventory', () => {
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('shows six products', { tag: '@smoke' }, async ({ inventoryPage }) => {
    await expect(inventoryPage.items).toHaveCount(6);
  });

  test('adding an item updates the cart badge', { tag: '@regression' }, async ({ inventoryPage }) => {
    await inventoryPage.addToCart(backpack);
    await inventoryPage.expectCartCount(1);
  });

  test('removing an item clears the cart badge', { tag: '@regression' }, async ({ inventoryPage }) => {
    await inventoryPage.addToCart(backpack);
    await inventoryPage.removeFromCart(backpack);
    await inventoryPage.expectCartCount(0);
  });

  test('user can log out', { tag: '@regression' }, async ({ inventoryPage, page }) => {
    await inventoryPage.logout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
