const { test, expect } = require("@playwright/test");
const AuthAPI = require("../../../api/AuthAPI");
const { generateUser } = require("../../../test-data/userData");

test.describe("Authentication API Tests", () => {
  test("Verify user can register and login successfully", async ({
    request,
  }) => {
    const authAPI = new AuthAPI(request);

    // Generate unique user
    const user = generateUser();

    // ==========================
    // Register User
    // ==========================
    const registerResponse = await authAPI.register(user);

    expect(registerResponse.status()).toBe(201);

    const registerBody = await registerResponse.json();

    expect(registerBody.id).toBeDefined();
    expect(registerBody.first_name).toBe(user.first_name);
    expect(registerBody.last_name).toBe(user.last_name);
    expect(registerBody.email).toBe(user.email);

    // ==========================
    // Login User
    // ==========================
    const loginResponse = await authAPI.login({
      email: user.email,
      password: user.password,
    });

    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();

    expect(loginBody.access_token).toBeTruthy();
    expect(loginBody.token_type.toLowerCase()).toBe("bearer");
    expect(loginBody.expires_in).toBeGreaterThan(0);

  });
});