const ApiClient = require("./ApiClient");

/**
 * AuthAPI
 * Handles user registration and authentication.
 */
class AuthAPI extends ApiClient {
  /**
   * @param {import('@playwright/test').APIRequestContext} apiRequestContext
   */
  constructor(apiRequestContext) {
    super(apiRequestContext);

    // Update these endpoints if the API documentation uses different paths.
    this.endpoints = {
      register: "/users/register",
      login: "/users/login",
    };
  }

  /**
   * Register a new user.
   * @param {Object} userData
   * @returns {Promise<import('@playwright/test').APIResponse>}
   */
  async register(userData) {
    if (!userData || typeof userData !== "object") {
      throw new Error("User data is required for registration.");
    }

    return await this.post(this.endpoints.register, userData);
  }

  /**
   * Login and store the access token.
   * @param {Object} credentials
   * @returns {Promise<import('@playwright/test').APIResponse>}
   */
  async login(credentials) {
    if (!credentials || typeof credentials !== "object") {
      throw new Error("Credentials are required for login.");
    }

    const response = await this.post(this.endpoints.login, credentials);

    const body = await response.json();

    const accessToken =
      body?.access_token ??
      body?.accessToken ??
      body?.token ??
      body?.data?.accessToken ??
      body?.data?.token;

    if (!accessToken) {
      throw new Error("Access token not found in login response.");
    }

    this.setToken(accessToken);

    return response;
  }

  /**
   * Get the stored bearer token.
   * @returns {string|null}
   */
  getToken() {
    return this.token;
  }
}

module.exports = AuthAPI;