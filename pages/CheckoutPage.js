const BasePage = require("./BasePage");

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);

    // ==========================
    // Step 1 - Cart
    // ==========================
    this.proceedToCheckoutButton = "//button[@data-test='proceed-1']";

    // ==========================
    // Step 2 - Guest Checkout
    // ==========================
    this.guestTab = "//a[@href='#guest-tab']";
    this.guestEmailInput = "#guest-email";
    this.guestFirstNameInput = "#guest-first-name";
    this.guestLastNameInput = "#guest-last-name";
    this.continueAsGuestButton = "//input[@data-test='guest-submit']";
    this.proceedToCheckoutButton2 = "//button[@data-test='proceed-2-guest']";
    this.proceedToCheckoutLoggedInButton = "//button[@data-test='proceed-2']";

    // ==========================
    // Step 3 - Billing Address
    // ==========================
    this.countryDropdown = "#country";
    this.postalCodeInput = "#postal_code";
    this.houseNumberInput = "#house_number";
    this.streetInput = "#street";
    this.cityInput = "#city";
    this.stateInput = "#state";
    this.billingProceedButton3 = "//button[@data-test='proceed-3']";

    // ==========================
    // Step 4 - Payment
    // ==========================
    this.paymentDropdown = "#payment-method";
    this.confirmButton = "//button[contains(text(),'Confirm')]";

    // ==========================
    // Payment Success
    // ==========================
    this.paymentSuccessMessage =
      "//div[@data-test='payment-success-message']";

    // ==========================
    // Order Confirmation
    // ==========================
    this.orderSuccessMessage = "//div[@id='order-confirmation']";
    this.invoiceNumber = "//div[@id='order-confirmation']//span";
  }

  // ==========================
  // Cart
  // ==========================
  async proceedFromCart() {
    await this.waitForVisible(this.proceedToCheckoutButton);
    await this.click(this.proceedToCheckoutButton);
    await this.waitForPageLoad();
  }

    /**
     * Proceed from Logged In screen.
     */
    async proceedFromLoggedInUser() {
    await this.waitForVisible(this.proceedToCheckoutLoggedInButton);
    await this.click(this.proceedToCheckoutLoggedInButton);
    await this.waitForPageLoad();
    }
  // ==========================
  // Guest Checkout
  // ==========================
  async continueAsGuest(details) {
    await this.waitForVisible(this.guestTab);
    await this.click(this.guestTab);

    await this.fill(this.guestEmailInput, details.email);
    await this.fill(this.guestFirstNameInput, details.firstName);
    await this.fill(this.guestLastNameInput, details.lastName);

    await this.click(this.continueAsGuestButton);
    await this.waitForPageLoad();
  }

  async proceedFromGuest() {
    await this.waitForVisible(this.proceedToCheckoutButton2);
    await this.click(this.proceedToCheckoutButton2);
    await this.waitForPageLoad();
  }

  // ==========================
  // Billing Address
  // ==========================
  async fillBillingAddress(details) {
    await this.waitForVisible(this.countryDropdown);

    await this.page.selectOption(this.countryDropdown, {
      label: details.country,
    });

    await this.fill(this.postalCodeInput, details.postalCode);
    await this.fill(this.houseNumberInput, details.houseNumber);
    await this.fill(this.streetInput, details.street);
    await this.fill(this.cityInput, details.city);
    await this.fill(this.stateInput, details.state);

    await this.click(this.billingProceedButton3);
    await this.waitForPageLoad();
  }

  // ==========================
  // Payment
  // ==========================
  async selectPaymentMethod(method = "Cash on Delivery") {
    await this.waitForVisible(this.paymentDropdown);

    await this.page.selectOption(this.paymentDropdown, {
      label: method,
    });
  }

async confirmPayment() {
  await this.waitForVisible(this.confirmButton);

  await this.click(this.confirmButton);
  console.log(await this.page.url());

  // Wait until payment success message appears
  await this.page
    .locator(this.paymentSuccessMessage)
    .waitFor({
      state: "visible",
      timeout: 15000,
    });
}

async confirmOrder() {
  // Wait until payment is successful
  await this.waitForVisible(this.paymentSuccessMessage);

  // Wait until Confirm button is visible
  await this.waitForVisible(this.confirmButton);

  // Small stabilization delay for the UI
  await this.page.waitForTimeout(500);

  // Click the second Confirm button
  await this.click(this.confirmButton);

  // Wait for Order Confirmation page
  await this.waitForVisible(this.orderSuccessMessage);
}

  // ==========================
  // Order Confirmation
  // ==========================
  async getOrderSuccessMessage() {
    await this.waitForVisible(this.orderSuccessMessage);

    const text = await this.getText(this.orderSuccessMessage);

    return text.replace(/INV-\d+/, "").trim();
  }

  async getInvoiceNumber() {
    await this.waitForVisible(this.invoiceNumber);

    return (await this.getText(this.invoiceNumber)).trim();
  }

async getPaymentSuccessMessage() {
  await this.page.locator(this.paymentSuccessMessage).waitFor({
    state: "visible",
    timeout: 15000,
  });

  return (await this.getText(this.paymentSuccessMessage)).trim();
}
  // ==========================
  // Complete Checkout
  // ==========================
  async completeGuestCheckout(details) {
    await this.proceedFromCart();

    await this.continueAsGuest(details);

    await this.proceedFromGuest();

    await this.fillBillingAddress(details);

    await this.selectPaymentMethod(details.paymentMethod);

    await this.confirmPayment();
  }
}

module.exports = CheckoutPage;