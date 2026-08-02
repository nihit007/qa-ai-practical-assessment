const BasePage = require("./BasePage");

/**
 * CartPage
 * Handles cart page interactions.
 */
class CartPage extends BasePage {
  constructor(page) {
    super(page);

    // Locators
    this.cartItems = ".cart-item";
    this.cartItemName = ".cart-item-name";
    this.cartItemQuantity = ".cart-item-quantity input";
    this.cartItemPrice = ".cart-item-price";

    this.removeButton = ".cart-item-remove";
    this.cartTotal = '[data-test="cart-total"]';
    this.checkoutButton = '[data-test="checkout"]';
  }

  /**
   * Get all cart items.
   * @returns {Promise<Array>}
   */
  async getCartItems() {
    const items = [];
    const rows = this.page.locator(this.cartItems);
    const count = await rows.count();

    for (let i = 0; i < count; i++) {
      const row = rows.nth(i);

      items.push({
        name: (await row.locator(this.cartItemName).textContent())?.trim(),
        quantity: Number(
          await row.locator(this.cartItemQuantity).inputValue()
        ),
        price: (await row.locator(this.cartItemPrice).textContent())?.trim(),
      });
    }

    return items;
  }

  /**
   * Update quantity of the first cart item.
   * @param {number} quantity
   */
  async updateQuantity(quantity) {
    const quantityInput = this.page
      .locator(this.cartItems)
      .first()
      .locator(this.cartItemQuantity);

    await quantityInput.fill(quantity.toString());
  }

  /**
   * Remove the first cart item.
   */
  async removeItem() {
    await this.page
      .locator(this.cartItems)
      .first()
      .locator(this.removeButton)
      .click();
  }

  /**
   * Proceed to checkout.
   */
  async proceedToCheckout() {
    await this.click(this.checkoutButton);
  }

  /**
   * Get cart total.
   */
  async getCartTotal() {
    return this.getText(this.cartTotal);
  }
}

module.exports = CartPage;