const { test, expect } = require("@playwright/test");
const LoginPage = require("../../../pages/LoginPage");
const env = require("../../../config/env");

/**
 * Smoke Test Suite - Login
 * Verifies that a registered user can successfully log in.
 */
test.describe("Login Smoke Tests", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test("Verify registered user can log in and is redirected to the account page", async ({ page }) => {
    // Arrange
    const { testEmail, testPassword } = env;

    // Act
    await loginPage.navigateToLogin();
    await loginPage.login(testEmail, testPassword);

    // Assert
    await expect(page).toHaveURL(/.*\/account$/);
  });
});