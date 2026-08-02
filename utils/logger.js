/**
 * Logger Utility
 * Lightweight reusable logger for Playwright automation.
 */

/**
 * Format log message.
 * @param {string} level
 * @param {string} message
 * @returns {string}
 */
function formatLog(level, message) {
  const timestamp = new Date().toISOString();
  return `${timestamp} [${level}] ${message}`;
}

/**
 * Log informational message.
 * @param {string} message
 */
function info(message) {
  console.info(formatLog("INFO", message));
}

/**
 * Log warning message.
 * @param {string} message
 */
function warn(message) {
  console.warn(formatLog("WARN", message));
}

/**
 * Log error message.
 * @param {string} message
 */
function error(message) {
  console.error(formatLog("ERROR", message));
}

/**
 * Log success message.
 * @param {string} message
 */
function success(message) {
  console.log(formatLog("SUCCESS", message));
}

module.exports = {
  info,
  warn,
  error,
  success,
};