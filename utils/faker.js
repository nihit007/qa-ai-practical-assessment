const { faker } = require("@faker-js/faker");

/**
 * Generate a secure password.
 * @param {number} length
 * @returns {string}
 */
function generateSecurePassword(length = 14) {
  return faker.internet.password({
    length,
    memorable: false,
  });
}

/**
 * Generate date of birth in YYYY-MM-DD format.
 * @returns {string}
 */
function generateDateOfBirth() {
  return faker.date
    .birthdate({
      min: 18,
      max: 65,
      mode: "age",
    })
    .toISOString()
    .split("T")[0];
}

/**
 * Generate reusable user registration data.
 * @returns {Object}
 */
function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const countryCodes = [
    "IN",
    "US",
    "GB",
    "CA",
    "AU",
    "DE",
    "FR",
    "JP",
  ];

  return {
    firstName,
    lastName,

    dateOfBirth: generateDateOfBirth(),

    country: "IN",

    postalCode: '201013',
    
    houseNumber: faker.location.buildingNumber(),

    street: faker.location.streetAddress(),

    city: faker.location.city(),

    state: faker.location.state(),

    phone: faker.string.numeric(10),

    email: faker.internet
      .email({
        firstName,
        lastName,
      })
      .toLowerCase(),

    password: "[5f88L~oIV$8iC",

  };
}

module.exports = {
  generateUser,
};