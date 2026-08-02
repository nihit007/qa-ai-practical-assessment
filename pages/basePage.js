/**
 * BasePage
 * Reusable parent class for all Page Objects.
 * Contains common Playwright actions and helper methods.
 */

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Returns a Playwright Locator.
   * Accepts either a selector string or an existing Locator.
   * @param {string | import('@playwright/test').Locator} locator
   */
  getLocator(locator) {
    return typeof locator === "string" ? this.page.locator(locator) : locator;
  }

  /**
   * Navigate to a URL.
   * @param {string} url
   */
  async navigate(url) {
    await this.page.goto(url);
  }

  /**
   * Wait until the page is fully loaded.
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState("networkidle");
  }

  /**
   * Reload the current page.
   */
  async reload() {
    await this.page.reload();
  }

  /**
   * Navigate back.
   */
  async goBack() {
    await this.page.goBack();
  }

  /**
   * Get page title.
   * @returns {Promise<string>}
   */
  async getTitle() {
    return await this.page.title();
  }

  /**
   * Get current page URL.
   * @returns {Promise<string>}
   */
  async getCurrentUrl() {
    return this.page.url();
  }

  /**
   * Click an element.
   * @param {string|Locator} locator
   */
  async click(locator) {
    await this.getLocator(locator).click();
  }

  /**
   * Fill text into an input.
   * @param {string|Locator} locator
   * @param {string} text
   */
  async fill(locator, text) {
    await this.getLocator(locator).fill(text);
  }

  /**
   * Type text using keyboard events.
   * @param {string|Locator} locator
   * @param {string} text
   */
  async type(locator, text) {
    await this.getLocator(locator).type(text);
  }

  /**
   * Clear an input field.
   * @param {string|Locator} locator
   */
  async clear(locator) {
    await this.getLocator(locator).fill("");
  }

  /**
   * Press a keyboard key.
   * @param {string|Locator} locator
   * @param {string} key
   */
  async press(locator, key) {
    await this.getLocator(locator).press(key);
  }

  /**
   * Wait for element to become visible.
   * @param {string|Locator} locator
   */
  async waitForVisible(locator) {
    await this.getLocator(locator).waitFor({
      state: "visible",
    });
  }

  /**
   * Wait for element to become hidden.
   * @param {string|Locator} locator
   */
  async waitForHidden(locator) {
    await this.getLocator(locator).waitFor({
      state: "hidden",
    });
  }

  /**
   * Check element visibility.
   * @param {string|Locator} locator
   * @returns {Promise<boolean>}
   */
  async isVisible(locator) {
    return await this.getLocator(locator).isVisible();
  }

  /**
   * Get text content.
   * @param {string|Locator} locator
   * @returns {Promise<string|null>}
   */
  async getText(locator) {
    return await this.getLocator(locator).textContent();
  }

  /**
   * Get attribute value.
   * @param {string|Locator} locator
   * @param {string} attribute
   */
  async getAttribute(locator, attribute) {
    return await this.getLocator(locator).getAttribute(attribute);
  }

  /**
   * Select dropdown option.
   * @param {string|Locator} locator
   * @param {string} value
   */
  async selectDropdown(locator, value) {
    await this.getLocator(locator).selectOption(value);
  }

  /**
   * Check a checkbox.
   * @param {string|Locator} locator
   */
  async check(locator) {
    await this.getLocator(locator).check();
  }

  /**
   * Uncheck a checkbox.
   * @param {string|Locator} locator
   */
  async uncheck(locator) {
    await this.getLocator(locator).uncheck();
  }

  /**
   * Hover over an element.
   * @param {string|Locator} locator
   */
  async hover(locator) {
    await this.getLocator(locator).hover();
  }

  /**
   * Scroll element into view.
   * @param {string|Locator} locator
   */
  async scrollIntoView(locator) {
    await this.getLocator(locator).scrollIntoViewIfNeeded();
  }

  /**
   * Capture a screenshot.
   * Screenshots are stored in the screenshots folder.
   * @param {string} name
   */
  async screenshot(name) {
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true,
    });
  }

  /**
   * Wait for a specified duration.
   * Use only for debugging when absolutely necessary.
   * @param {number} milliseconds
   */
  async waitForTimeout(milliseconds) {
    await this.page.waitForTimeout(milliseconds);
  }
}

module.exports = BasePage;