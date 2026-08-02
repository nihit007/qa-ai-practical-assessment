const { test, expect } = require("@playwright/test");
const HomePage = require("../../../pages/HomePage");

/**
 * Smoke Test Suite - Product Search
 * Verifies that searching for a product displays the expected search result.
 */
test.describe("Product Search Smoke Tests", () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test("Verify partial product search returns Combination Pliers", async ({ page }) => {
    // Arrange
    const searchTerm = "com";
    const expectedProduct = "Combination Pliers";

    // Act
    await homePage.navigateToHome();
    await homePage.searchProduct(searchTerm);

    // Assert
    await expect(
      page.locator(homePage.productResultLocator(expectedProduct))
    ).toBeVisible();
  });
});