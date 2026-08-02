const BasePage = require("./BasePage");

/**
 * RegistrationPage
 * Handles user registration page interactions.
 */
class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);

    // Registration page URL
    this.registrationPath = "/auth/register";

    // Registration form locators
    this.firstNameInput = "#first_name";
    this.lastNameInput = "#last_name";
    this.dateOfBirthInput = "#dob";
    this.countryInput = "#country";
    this.postalCodeInput = "#postal_code";
    this.houseNumberInput = "#house_number";
    this.streetInput = "#street";
    this.cityInput = "#city";
    this.stateInput = "#state";
    this.phoneInput = "#phone";
    this.emailInput = "#email";
    this.passwordInput = "#password";

    // Buttons
    this.registerButton = "//button[@type='submit']";
  }

  /**
   * Navigate to the registration page.
   */
  async navigateToRegistration() {
    await this.navigate(this.registrationPath);
    await this.waitForVisible(this.firstNameInput);
  }

  /**
   * Fill the registration form and submit it.
   * @param {Object} user
   */
  async register(user) {
    await this.fill(this.firstNameInput, user.firstName);
    await this.fill(this.lastNameInput, user.lastName);
    await this.fill(this.dateOfBirthInput, user.dateOfBirth);

    // Select country
    await this.selectDropdown(this.countryInput, user.country);

    // Enter postal details
    await this.fill(this.postalCodeInput, user.postalCode);
    await this.fill(this.houseNumberInput, user.houseNumber);

    // Wait until address fields are auto-populated
    await this.page.waitForTimeout(2000);

    // Continue filling remaining fields
    await this.fill(this.phoneInput, user.phone);
    await this.fill(this.emailInput, user.email);
    await this.fill(this.passwordInput, user.password);

    // Submit registration
    await this.click(this.registerButton);
  }
}

module.exports = RegistrationPage;