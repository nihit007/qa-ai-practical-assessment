const { test, expect } = require("@playwright/test");
const HomePage = require("../../../pages/HomePage");
const ProductPage = require("../../../pages/ProductPage");

/**
 * Smoke Test Suite - Product Details
 * Verifies that a user can open a product details page
 * and view the product information.
 */
test.describe("Product Details Smoke Tests", () => {
  let homePage;
  let productPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
  });

  test("Verify user can open the Product Details page for Combination Pliers", async ({
    page,
  }) => {
    // Arrange
    const searchTerm = "com";
    const expectedProduct = "Combination Pliers";

    // Act
    await homePage.navigateToHome();
    await homePage.searchProduct(searchTerm);
    await homePage.openProduct(expectedProduct);

    // Assert
    await expect(page).toHaveURL(/.*\/product\/.*/);

    expect(await productPage.getProductName()).toBe(expectedProduct);

    const productPrice = await productPage.getProductPrice();
    expect(productPrice).toBeTruthy();

    const productDescription = await productPage.getProductDescription();
    expect(productDescription).toBeTruthy();

    await expect(
      page.locator(productPage.addToCartButton)
    ).toBeVisible();
  });
});