const BasePage = require("./BasePage");

/**
 * ProductPage
 * Handles Product Details page interactions.
 */
class ProductPage extends BasePage {
  constructor(page) {
    super(page);

    // Product page path
    this.productPath = "/product/";

    // Locators
    this.productName = '[data-test="product-title"]';
    this.productPrice = '[data-test="product-price"]';
    this.productDescription = '[data-test="product-description"]';
    this.productAvailability = '[data-test="product-stock"]';

    this.quantityInput = '[data-test="product-quantity"]';
    this.addToCartButton = '[data-test="add-to-cart"]';
  }

  /**
   * Navigate to product details page.
   * @param {string|number} productId
   */
  async navigateToProduct(productId) {
    await this.navigate(`${this.productPath}${productId}`);
    await this.waitForVisible(this.productName);
  }

  /**
   * Get product name.
   */
  async getProductName() {
    return this.getText(this.productName);
  }

  /**
   * Get product price.
   */
  async getProductPrice() {
    return this.getText(this.productPrice);
  }

  /**
   * Get product description.
   */
  async getProductDescription() {
    return this.getText(this.productDescription);
  }

  /**
   * Check product availability.
   */
  async isProductAvailable() {
    return this.isVisible(this.addToCartButton);
  }

  /**
   * Update quantity.
   * @param {number} quantity
   */
  async selectQuantity(quantity) {
    await this.clear(this.quantityInput);
    await this.fill(this.quantityInput, quantity.toString());
  }

  /**
   * Add product to cart.
   */
  async addToCart() {
    await this.click(this.addToCartButton);
  }
}

module.exports = ProductPage;