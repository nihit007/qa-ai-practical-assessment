const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    // Page URL
    this.loginPath = "/auth/login";

    // Locators
    this.emailInput = '[data-test="email"]';
    this.passwordInput = '[data-test="password"]';
    this.loginButton = '[data-test="login-submit"]';
    this.loginError = ".alert-danger";
    this.userMenu = '[data-test="nav-menu"]';
  }

  /**
   * Navigate to Login page.
   */
  async navigateToLogin() {
    await this.navigate(this.loginPath);
    await this.waitForVisible(this.emailInput);
  }

  /**
   * Login with valid credentials.
   */
  async login(email, password) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  /**
   * Get login error message.
   */
  async getLoginError() {
    return await this.getText(this.loginError);
  }

  /**
   * Verify user is logged in.
   */
  async isUserLoggedIn() {
    return await this.isVisible(this.userMenu);
  }
}

module.exports = LoginPage;