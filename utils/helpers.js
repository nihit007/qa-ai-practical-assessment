/**
 * Generate a random alphanumeric string.
 * @param {number} length
 * @returns {string}
 */
function generateRandomString(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return result;
}

/**
 * Generate a random numeric string.
 * @param {number} length
 * @returns {string}
 */
function generateRandomNumber(length = 6) {
  let result = "";

  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }

  return result;
}

/**
 * Get current timestamp.
 * @returns {number}
 */
function getCurrentTimestamp() {
  return Date.now();
}

/**
 * Format date as YYYY-MM-DD.
 * @param {Date|string|number} date
 * @returns {string}
 */
function formatDate(date = new Date()) {
  const parsedDate = new Date(date);

  return parsedDate.toISOString().split("T")[0];
}

/**
 * Pause execution.
 * Use only when absolutely necessary.
 * @param {number} milliseconds
 */
async function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Generate a unique email address.
 * @returns {string}
 */
function generateRandomEmail() {
  return `testuser_${Date.now()}@example.com`;
}

/**
 * Generate a unique username.
 * @returns {string}
 */
function generateRandomUsername() {
  return `user_${generateRandomString(6)}`;
}

module.exports = {
  generateRandomString,
  generateRandomNumber,
  generateRandomEmail,
  generateRandomUsername,
  getCurrentTimestamp,
  formatDate,
  sleep,
};