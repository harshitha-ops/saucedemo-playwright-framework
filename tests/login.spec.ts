import { test, expect } from '../fixtures/base';
import { users, errors } from '../data/users';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('standard user can log in', { tag: '@smoke' }, async ({ loginPage, inventoryPage }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('locked out user sees an error', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await loginPage.expectError(errors.lockedOut);
  });

  test('wrong password shows an error', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.login(users.wrongPassword.username, users.wrongPassword.password);
    await loginPage.expectError(errors.invalidCredentials);
  });

  test('empty username shows an error', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.login('', users.standard.password);
    await loginPage.expectError(errors.usernameRequired);
  });
});
