const BasePage = require("./BasePage");

/**
 * CartPage
 * Encapsulates Cart page interactions.
 */
class CartPage extends BasePage {
  constructor(page) {
    super(page);

    // Cart page locators
    this.productName = '[data-test="product-title"]';
    this.quantityInput = '[data-test="product-quantity"]';
    this.productPrice = "//span[@data-test='product-price']";
    this.cartTotal = "//span[@data-test='line-price']";

    this.removeButton = "//a/fa-icon[@class='ng-fa-icon']";
    this.continueShoppingButton = "//button[@data-test='continue-shopping']";
    this.proceedToCheckoutButton =
      "//button[@data-test='proceed-1']";
  }

  /**
   * Get the product name displayed in the cart.
   * @returns {Promise<string>}
   */
  async getProductName() {
    const productName = await this.getText(this.productName);
    return productName?.trim() ?? "";
  }

  /**
   * Get the product quantity.
   * @returns {Promise<string>}
   */
  async getProductQuantity() {
    await this.waitForVisible(this.quantityInput);
    return await this.page.locator(this.quantityInput).inputValue();
  }

  /**
   * Get the product price.
   * @returns {Promise<string>}
   */
  async getProductPrice() {
    const productPrice = await this.getText(this.productPrice);
    return productPrice?.trim() ?? "";
  }

  /**
   * Get the cart total.
   * @returns {Promise<string>}
   */
  async getCartTotal() {
    const total = await this.getText(this.cartTotal);
    return total?.trim() ?? "";
  }

  /**
   * Remove the product from the cart.
   */
  async removeProduct() {
    await this.click(this.removeButton);
  }

  /**
   * Continue shopping.
   */
  async continueShopping() {
    await this.click(this.continueShoppingButton);
    await this.waitForPageLoad();
  }

  /**
   * Proceed to Checkout.
   */
  async proceedToCheckout() {
    await this.click(this.proceedToCheckoutButton);
    await this.waitForPageLoad();
  }
}

module.exports = CartPage;