const BasePage = require("./BasePage");

class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);

    // Page URL
    this.registrationPath = "/auth/register";

    // Locators
    this.nameInput = '[data-test="name"]';
    this.emailInput = '[data-test="email"]';
    this.passwordInput = '[data-test="password"]';
    this.confirmPasswordInput = '[data-test="confirm-password"]';
    this.registerButton = '[data-test="register-submit"]';

    this.successMessage = ".alert-success";
    this.errorMessage = ".alert-danger";
  }

  /**
   * Navigate to Registration page.
   */
  async navigateToRegistration() {
    await this.navigate(this.registrationPath);
    await this.waitForVisible(this.nameInput);
  }

  /**
   * Register a new user.
   * @param {Object} user
   */
  async register(user) {
    await this.fill(this.nameInput, user.name);
    await this.fill(this.emailInput, user.email);
    await this.fill(this.passwordInput, user.password);

    await this.fill(
      this.confirmPasswordInput,
      user.confirmPassword || user.password
    );

    await this.click(this.registerButton);
  }

  /**
   * Get registration success message.
   */
  async getRegistrationSuccessMessage() {
    return this.getText(this.successMessage);
  }

  /**
   * Get registration error message.
   */
  async getRegistrationErrorMessage() {
    return this.getText(this.errorMessage);
  }
}

module.exports = RegistrationPage;