const config = require("../config/env");

/**
 * ApiClient
 * Generic wrapper around Playwright APIRequestContext.
 * Provides reusable HTTP methods for all API modules.
 */
class ApiClient {
  /**
   * @param {import('@playwright/test').APIRequestContext} apiRequestContext
   */
  constructor(apiRequestContext) {
    if (!apiRequestContext) {
      throw new Error(
        "APIRequestContext is required to initialize ApiClient."
      );
    }

    this.request = apiRequestContext;
    this.baseUrl = config.apiBaseUrl;
    this.token = null;
  }

  /**
   * Set Bearer Token for authenticated requests.
   * @param {string} token
   */
  setToken(token) {
    this.token = token;
  }

  /**
   * Build complete request URL.
   * @param {string} endpoint
   * @returns {string}
   */
  buildUrl(endpoint) {
    if (!endpoint) {
      throw new Error("API endpoint is required.");
    }

    // Allow absolute URLs
    if (/^https?:\/\//i.test(endpoint)) {
      return endpoint;
    }

    return `${this.baseUrl.replace(/\/$/, "")}/${endpoint.replace(/^\/+/, "")}`;
  }

  /**
   * Build request headers.
   * Adds JSON content type and Authorization header if token exists.
   * @param {Object} headers
   * @returns {Object}
   */
  buildHeaders(headers = {}) {
    return {
      "Content-Type": "application/json",
      ...(this.token && {
        Authorization: `Bearer ${this.token}`,
      }),
      ...headers,
    };
  }

  /**
   * HTTP GET
   */
  async get(endpoint, headers = {}) {
    return this.request.get(this.buildUrl(endpoint), {
      headers: this.buildHeaders(headers),
    });
  }

  /**
   * HTTP POST
   */
  async post(endpoint, body = {}, headers = {}) {

    return this.request.post(this.buildUrl(endpoint), {
      headers: this.buildHeaders(headers),
      data: body,
    });
  }

  /**
   * HTTP PUT
   */
  async put(endpoint, body = {}, headers = {}) {
    return this.request.put(this.buildUrl(endpoint), {
      headers: this.buildHeaders(headers),
      data: body,
    });
  }

  /**
   * HTTP PATCH
   */
  async patch(endpoint, body = {}, headers = {}) {
    return this.request.patch(this.buildUrl(endpoint), {
      headers: this.buildHeaders(headers),
      data: body,
    });
  }

  /**
   * HTTP DELETE
   */
  async delete(endpoint, headers = {}) {
    return this.request.delete(this.buildUrl(endpoint), {
      headers: this.buildHeaders(headers),
    });
  }
}

module.exports = ApiClient;