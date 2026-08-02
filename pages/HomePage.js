const BasePage = require("./BasePage");

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // Locators
    this.searchInput = '[data-test="search-query"]';
    this.cartButton = '[data-test="nav-cart"]';
    this.loginButton = '[data-test="nav-sign-in"]';
    this.registerButton = '[data-test="nav-register"]';
  }

  /**
   * Search for a product.
   * @param {string} searchTerm
   */
  async searchProduct(searchTerm) {
    await this.waitForVisible(this.searchInput);
    await this.fill(this.searchInput, searchTerm);
    await this.press(this.searchInput, "Enter");
  }

  /**
   * Open a product by its name.
   * @param {string} productName
   */
  async openProduct(productName) {
    const locator = `text=${productName}`;
    await this.click(locator);
  }

  /**
   * Open Cart page.
   */
  async openCart() {
    await this.click(this.cartButton);
  }

  /**
   * Open Login page.
   */
  async openLogin() {
    await this.click(this.loginButton);
  }

  /**
   * Open Registration page.
   */
  async openRegistration() {
    await this.click(this.registerButton);
  }
}

module.exports = HomePage;