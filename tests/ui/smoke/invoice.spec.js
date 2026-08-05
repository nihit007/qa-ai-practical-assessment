const { test, expect } = require("@playwright/test");

const HomePage = require("../../../pages/HomePage");
const ProductPage = require("../../../pages/ProductPage");
const CartPage = require("../../../pages/CartPage");
const CheckoutPage = require("../../../pages/CheckoutPage");
const LoginPage = require("../../../pages/LoginPage");
const InvoicePage = require("../../../pages/InvoicePage");
const env = require("../../../config/env");

/**
 * Smoke Test Suite - Invoice
 * Verifies that a registered user can successfully
 * place an order and view the generated invoice.
 */
test.describe("Invoice Smoke Tests", () => {
  let homePage;
  let productPage;
  let cartPage;
  let checkoutPage;
  let loginPage;
  let invoicePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    loginPage = new LoginPage(page);
    invoicePage = new InvoicePage(page);
  });



  test("Verify registered user can view generated invoice", async () => {

    // Arrange
    const searchTerm = "com";
    const expectedProduct = "Combination Pliers";
    const { testEmail, testPassword } = env;


    const billingDetails = {
      country: "India",
      postalCode: "201013",
      houseNumber: "123",
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

    // Proceed to Checkout
    await checkoutPage.proceedFromCart();

    // Login

    await loginPage.login(testEmail, testPassword);

    // Proceed after Login
    await checkoutPage.proceedFromLoggedInUser();

    // Billing Address
    await checkoutPage.fillBillingAddress(billingDetails);

    // Payment
    await checkoutPage.selectPaymentMethod("Cash on Delivery");

    await checkoutPage.confirmPayment();

    // Verify Payment
    const paymentMessage = await checkoutPage.getPaymentSuccessMessage();
    expect(paymentMessage).toContain("Payment was successful");

    // Confirm Order
    await checkoutPage.confirmOrder();

    // Verify Order Confirmation
    const orderMessage = await checkoutPage.getOrderSuccessMessage();
    expect(orderMessage).toContain("Thanks for your order!");

    // Capture Generated Invoice
    const generatedInvoice = await checkoutPage.getInvoiceNumber();

    console.log("Generated Invoice:", generatedInvoice);

    // Navigate to My Invoices
    await invoicePage.openInvoices();

    // Verify Invoice Page
    expect(await invoicePage.getInvoiceCount()).toBeGreaterThan(0);

    // Verify Latest Invoice
    const latestInvoice = await invoicePage.getLatestInvoiceNumber();

    console.log("Latest Invoice:", latestInvoice);

    expect(latestInvoice).toMatch(/^INV-\d+$/);

    // Verify Latest Invoice is the Generated Invoice
    expect(latestInvoice).toBe(generatedInvoice);

  });
});