const path = require("path");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

const config = {
  baseUrl: process.env.BASE_URL || "https://practicesoftwaretesting.com",

  apiBaseUrl:
    process.env.API_BASE_URL ||
    "https://api.practicesoftwaretesting.com/api",

  browser: process.env.BROWSER || "chromium",

  environment: process.env.ENV || "qa",

  testEmail: process.env.TEST_EMAIL || "",

  testPassword: process.env.TEST_PASSWORD || "",
};

module.exports = config;