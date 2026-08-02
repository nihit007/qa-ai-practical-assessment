const { faker } = require("@faker-js/faker");

/**
 * Generate reusable user data.
 * @returns {Object}
 */
function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    username: faker.internet.username(),
    password: generatePassword(),
  };
}

/**
 * Generate reusable address data.
 * @returns {Object}
 */
function generateAddress() {
  return {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postalCode: faker.location.zipCode(),
    country: faker.location.country(),
  };
}

/**
 * Generate phone number.
 * @returns {string}
 */
function generatePhoneNumber() {
  return faker.phone.number();
}

/**
 * Generate secure password.
 * @param {number} length
 * @returns {string}
 */
function generatePassword(length = 12) {
  return faker.internet.password({
    length,
    memorable: false,
  });
}

module.exports = {
  generateUser,
  generateAddress,
  generatePhoneNumber,
  generatePassword,
};