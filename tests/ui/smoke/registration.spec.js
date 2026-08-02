const { test, expect } = require("@playwright/test");
const RegistrationPage = require("../../../pages/RegistrationPage");
const { generateUser } = require("../../../utils/faker");

/**
 * Smoke Test Suite - Registration
 * Verifies that a new user can successfully register.
 */
test.describe("Registration Smoke Tests", () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
  });

  test("Verify user can register successfully with valid details", async () => {
    // Arrange
    const user = generateUser();

    // Act
    await registrationPage.navigateToRegistration();
    await registrationPage.register(user);

    // Assert
    await expect(registrationPage.page).toHaveURL(/.*auth\/login/);
  });
});