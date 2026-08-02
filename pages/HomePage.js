const BasePage = require("./BasePage");

/**
 * HomePage
 * Encapsulates the Home page interactions and navigation.
 */
class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // Page path
    this.homePath = "/";

    // Home page locators
    this.searchInput = "#search-query";
    this.searchButton = "button[type='submit']";
  }

  /**
   * Navigate to the Home page.
   */
  async navigateToHome() {
    await this.navigate(this.homePath);
    await this.waitForPageLoad();
    await this.waitForVisible(this.searchInput);
  }

  /**
   * Search for a product.
   * @param {string} productName
   */
  async searchProduct(productName) {
    await this.waitForVisible(this.searchInput);
    await this.fill(this.searchInput, productName);
    await this.click(this.searchButton);
    await this.waitForPageLoad();
  }

  /**
   * Build a locator for a product in search results.
   * @param {string} productName
   * @returns {string}
   */
    productResultLocator(productName) {
    return `//h5[@data-test="product-name" and normalize-space()="${productName}"]`;
    }
  /**
   * Open a product from the search results.
   * @param {string} productName
   */
  async openProduct(productName) {
    const productLocator = this.productResultLocator(productName);
    await this.waitForVisible(productLocator);
    await this.click(productLocator);
    await this.waitForPageLoad();
  }
}

module.exports = HomePage;