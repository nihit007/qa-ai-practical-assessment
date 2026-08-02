const BasePage = require("./BasePage");

/**
 * CheckoutPage
 * Handles checkout page interactions.
 */
class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);

    // Shipping Address
    this.shippingFirstName = '[data-test="shipping-first-name"]';
    this.shippingLastName = '[data-test="shipping-last-name"]';
    this.shippingAddress1 = '[data-test="shipping-address-line1"]';
    this.shippingAddress2 = '[data-test="shipping-address-line2"]';
    this.shippingCity = '[data-test="shipping-city"]';
    this.shippingState = '[data-test="shipping-state"]';
    this.shippingZip = '[data-test="shipping-zip"]';
    this.shippingCountry = '[data-test="shipping-country"]';
    this.shippingPhone = '[data-test="shipping-phone"]';
    this.shippingEmail = '[data-test="shipping-email"]';

    // Billing Address
    this.billingFirstName = '[data-test="billing-first-name"]';
    this.billingLastName = '[data-test="billing-last-name"]';
    this.billingAddress1 = '[data-test="billing-address-line1"]';
    this.billingAddress2 = '[data-test="billing-address-line2"]';
    this.billingCity = '[data-test="billing-city"]';
    this.billingState = '[data-test="billing-state"]';
    this.billingZip = '[data-test="billing-zip"]';
    this.billingCountry = '[data-test="billing-country"]';
    this.billingPhone = '[data-test="billing-phone"]';
    this.billingEmail = '[data-test="billing-email"]';

    this.sameAsShippingCheckbox =
      '[data-test="billing-same-as-shipping"]';

    // Checkout
    this.placeOrderButton = '[data-test="place-order"]';
    this.orderConfirmation = '[data-test="order-confirmation"]';
  }

  /**
   * Enter shipping address.
   */
  async enterShippingAddress(address) {
    await this.fill(this.shippingFirstName, address.firstName);
    await this.fill(this.shippingLastName, address.lastName);
    await this.fill(this.shippingAddress1, address.addressLine1);
    await this.fill(this.shippingAddress2, address.addressLine2 || "");
    await this.fill(this.shippingCity, address.city);
    await this.fill(this.shippingState, address.state);
    await this.fill(this.shippingZip, address.zip);
    await this.selectDropdown(this.shippingCountry, address.country);
    await this.fill(this.shippingPhone, address.phone);
    await this.fill(this.shippingEmail, address.email);
  }

  /**
   * Enter billing address.
   */
  async enterBillingAddress(address) {
    if (address.sameAsShipping) {
      await this.click(this.sameAsShippingCheckbox);
      return;
    }

    await this.fill(this.billingFirstName, address.firstName);
    await this.fill(this.billingLastName, address.lastName);
    await this.fill(this.billingAddress1, address.addressLine1);
    await this.fill(this.billingAddress2, address.addressLine2 || "");
    await this.fill(this.billingCity, address.city);
    await this.fill(this.billingState, address.state);
    await this.fill(this.billingZip, address.zip);
    await this.selectDropdown(this.billingCountry, address.country);
    await this.fill(this.billingPhone, address.phone);
    await this.fill(this.billingEmail, address.email);
  }

  /**
   * Place order.
   */
  async placeOrder() {
    await this.click(this.placeOrderButton);
  }

  /**
   * Get order confirmation message.
   */
  async getOrderConfirmation() {
    await this.waitForVisible(this.orderConfirmation);
    return this.getText(this.orderConfirmation);
  }
}

module.exports = CheckoutPage;