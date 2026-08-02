const { test, expect } = require("@playwright/test");

const HomePage = require("../../../pages/HomePage");
const ProductPage = require("../../../pages/ProductPage");
const CartPage = require("../../../pages/CartPage");
const CheckoutPage = require("../../../pages/CheckoutPage");

/**
 * Smoke Test Suite - Guest Checkout
 * Verifies that a guest user can successfully
 * purchase a product using Cash on Delivery.
 */
test.describe("Checkout Smoke Tests", () => {
  let homePage;
  let productPage;
  let cartPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
  });

  test("Verify guest user can successfully complete checkout using Cash on Delivery", async () => {

    // Arrange
    const searchTerm = "com";
    const expectedProduct = "Combination Pliers";

    // Guest Details
    const guestDetails = {
      email: "nihitgarg007@gmail.com",
      firstName: "Nihit",
      lastName: "Garg",
      country: "India",
      postalCode: "201013",
      houseNumber: "42",
      street: "Raj Nagar",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
    };

    // Navigate to Home
    await homePage.navigateToHome();

    // Search Product
    await homePage.searchProduct(searchTerm);

    // Open Product Details
    await homePage.openProduct(expectedProduct);

    // Verify Product Details
    expect(await productPage.getProductName()).toBe(expectedProduct);

    // Add Product to Cart
    await productPage.addToCart();

    // Open Cart
    await productPage.openCart();

    // Verify Cart
    expect(await cartPage.getProductName()).toBe(expectedProduct);
    expect(await cartPage.getProductQuantity()).toBe("1");

    // Complete Guest Checkout
    await checkoutPage.completeGuestCheckout(guestDetails);

    // Verify Payment Success
    const paymentMessage = await checkoutPage.getPaymentSuccessMessage();
    expect(paymentMessage).toContain("Payment was successful");

    // Confirm Order
    await checkoutPage.confirmOrder();

    // Verify Order Confirmation
    const orderMessage = await checkoutPage.getOrderSuccessMessage();
    expect(orderMessage).toContain("Thanks for your order!");

    // Verify Invoice Number
    const invoiceNumber = await checkoutPage.getInvoiceNumber();
    expect(invoiceNumber).toMatch(/^INV-\d+$/);

    console.log("Invoice Number:", invoiceNumber);
  });
});