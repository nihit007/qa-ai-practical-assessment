/**
 * Wait Utility
 * Common reusable Playwright wait helpers.
 */

const DEFAULT_TIMEOUT = 30000;

/**
 * Wait until page finishes loading.
 * @param {import('@playwright/test').Page} page
 */
async function waitForPageLoad(page) {
  await page.waitForLoadState("networkidle");
}

/**
 * Wait until element becomes visible.
 * @param {import('@playwright/test').Locator} locator
 */
async function waitForElement(locator) {
  await locator.waitFor({
    state: "visible",
    timeout: DEFAULT_TIMEOUT,
  });
}

/**
 * Wait until element becomes hidden.
 * @param {import('@playwright/test').Locator} locator
 */
async function waitForElementHidden(locator) {
  await locator.waitFor({
    state: "hidden",
    timeout: DEFAULT_TIMEOUT,
  });
}

/**
 * Wait for URL.
 * @param {import('@playwright/test').Page} page
 * @param {string|RegExp} url
 */
async function waitForURL(page, url) {
  await page.waitForURL(url, {
    timeout: DEFAULT_TIMEOUT,
  });
}

/**
 * Explicit wait.
 * Use only when absolutely necessary.
 * @param {import('@playwright/test').Page} page
 * @param {number} milliseconds
 */
async function waitForTimeout(page, milliseconds) {
  await page.waitForTimeout(milliseconds);
}

module.exports = {
  waitForPageLoad,
  waitForElement,
  waitForElementHidden,
  waitForURL,
  waitForTimeout,
};