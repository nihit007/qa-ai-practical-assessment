const BasePage = require("./BasePage");

/**
 * LoginPage
 * Handles user login interactions.
 */
class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    // Login page URL
    this.loginPath = "/auth/login";

    // Login form locators
    this.emailInput = "#email";
    this.passwordInput = "#password";
    this.loginButton = "input[type='submit']";

    // Error message
    this.loginError = "//div[text()='Invalid email or password']";
  }

  /**
   * Navigate to the login page.
   */
  async navigateToLogin() {
    await this.navigate(this.loginPath);
    await this.waitForVisible(this.emailInput);
  }

  /**
   * Login with email and password.
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    console.log("Clicking Login...");
    await this.click(this.loginButton);
    console.log("Login button clicked.");

  }

  /**
   * Get the login error message.
   * @returns {Promise<string|null>}
   */
  async getLoginError() {
    await this.waitForVisible(this.loginError);
    return this.getText(this.loginError);
  }
}

module.exports = LoginPage;