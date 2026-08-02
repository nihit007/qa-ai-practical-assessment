const { test, expect } = require("@playwright/test");

const LoginPage = require("../../../pages/LoginPage");
const HomePage = require("../../../pages/HomePage");
const ProductPage = require("../../../pages/ProductPage");
const CartPage = require("../../../pages/CartPage");

const env = require("../../../config/env");

/**
 * Smoke Test Suite - Cart
 * Verifies that a logged-in user can add a product to the cart
 * and view it successfully.
 */
test.describe("Cart Smoke Tests", () => {
  let loginPage;
  let homePage;
  let productPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
  });

  test("Verify user can add a product to the cart successfully", async ({ page }) => {
    // Arrange
    const searchTerm = "com";
    const expectedProduct = "Combination Pliers";

    // Login
    await loginPage.navigateToLogin();
    await loginPage.login(env.testEmail, env.testPassword);

    // Navigate to Home
    await homePage.navigateToHome();

    // Search product
    await homePage.searchProduct(searchTerm);

    // Open product details
    await homePage.openProduct(expectedProduct);

    // Add product to cart
    await productPage.addToCart();

    // Open cart
    await page.click('[data-test="nav-cart"]');

    // Assert product name
    expect(await cartPage.getProductName()).toBe(expectedProduct);

    // Assert quantity
    expect(await cartPage.getProductQuantity()).toBe("1");

    // Assert product price is displayed
    expect(await cartPage.getProductPrice()).toBeTruthy();

    // Assert cart total is displayed
    expect(await cartPage.getCartTotal()).toBeTruthy();

    // Assert Proceed to Checkout button is visible
    await expect(
      page.locator(cartPage.proceedToCheckoutButton)
    ).toBeVisible();
  });
});