# AI Prompts – Automation and Debugging

## Entry 1 – Framework Architecture

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am starting Part B of the QA AI Practical Assessment.

Do not generate any implementation code.

I need to design a scalable Playwright JavaScript automation framework based on the Prism Framework architecture.

The framework should support both UI and API automation.

Generate a detailed framework architecture document covering:

- High-Level Framework Architecture
- Folder Structure
- Responsibilities of each folder
- Page Object Model structure
- API Layer structure
- Utilities
- Configuration Management
- Environment Management
- Test Data Management
- Reporting Strategy
- Logging Strategy
- Reusability Strategy
- Naming Conventions
- Coding Standards

Return the output in Markdown.

Do not generate any implementation code.

### AI Response Summary

Generated a detailed Prism-based Playwright framework architecture for a combined UI and API automation framework. The response included the overall framework layers, recommended folder structure, folder responsibilities, Page Object Model organization, API service layer, utility modules, configuration management, environment strategy, test data management, reporting, logging, reusability guidelines, naming conventions, and coding standards.

### Validation Notes

- Reviewed the generated framework architecture against the assignment requirements.
- Simplified the proposed architecture by removing unnecessary folders that were not required for the project.
- Standardized the framework structure to use dedicated `pages`, `api`, `utils`, `fixtures`, `config`, `data`, and `tests` directories.
- Refined the folder structure to match the planned Playwright JavaScript implementation.
- Created a finalized `docs/framework-design.md` document based on the reviewed architecture before beginning framework implementation.

## Folder Structure

qa-ai-practical-assessment/
├── ai-prompts/
├── api/
│   ├── ApiClient.js
│   ├── AuthAPI.js
│   ├── CartAPI.js
│   ├── InvoiceAPI.js
│   └── ProductAPI.js
├── config/
│   └── env.js
├── data/
│   ├── payloads.json
│   ├── products.json
│   └── users.json
├── docs/
│   ├── framework-design.md
│   └── ...
├── fixtures/
│   └── testFixture.js
├── pages/
│   ├── BasePage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── HomePage.js
│   ├── InvoicePage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   └── RegistrationPage.js
├── reports/
├── screenshots/
├── tests/
│   ├── api/
│   │   ├── regression/
│   │   └── smoke/
│   └── ui/
│       ├── regression/
│       └── smoke/
├── utils/
│   ├── faker.js
│   ├── helpers.js
│   ├── logger.js
│   └── waitUtils.js
├── .env
├── package.json
├── playwright.config.js
└── project-info.md

## Entry 2 – Framework Configuration

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am implementing the Playwright framework configuration.

The project already contains:

- .env
- config/env.js

Generate only the contents of `playwright.config.js`.

Requirements:

- Import configuration from `config/env.js`.
- Configure Playwright to use:
  - baseURL
  - browser from env.js
  - screenshots on failure
  - trace on first retry
  - video retain-on-failure
  - HTML reporter
- Set global timeout to 30 seconds.
- Set expect timeout to 10 seconds.
- Enable retries only in CI (2 retries).
- Use fullyParallel execution.
- Support Chromium initially.
- Keep the configuration clean, reusable, and production-ready.
- Do not generate any other files.

### AI Response Summary

Generated a reusable `playwright.config.js` that loads configuration from `config/env.js`, configures browser execution, timeouts, reporting, screenshots, trace collection, video retention, retries, and parallel execution for the Playwright framework.

### Validation Notes

- Reviewed the generated configuration for correctness and maintainability.
- Simplified formatting and removed syntax issues.
- Added `forbidOnly` and `workers` configuration for better CI support.
- Verified that the framework successfully loaded `.env` values and executed without configuration errors.
- Confirmed the Playwright configuration was ready for framework implementation.


## Entry 3 – Base Page Implementation

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am implementing the Playwright framework.

Generate only the contents of `pages/BasePage.js`.

Requirements:

- Use JavaScript.
- Create a reusable BasePage class.
- Accept the Playwright page object through the constructor.
- Include common reusable methods:
  - navigate(url)
  - getTitle()
  - getCurrentUrl()
  - click(locator)
  - fill(locator, text)
  - type(locator, text)
  - clear(locator)
  - press(locator, key)
  - waitForVisible(locator)
  - waitForHidden(locator)
  - isVisible(locator)
  - getText(locator)
  - getAttribute(locator, attribute)
  - selectDropdown(locator, value)
  - check(locator)
  - uncheck(locator)
  - hover(locator)
  - screenshot(name)
- Use the Playwright Locator API.
- Keep methods generic and reusable.
- Do not include page-specific locators.
- Add comments for maintainability.
- Do not generate any other files.

### AI Response Summary

Generated a reusable `BasePage` class containing common Playwright UI actions such as navigation, clicking, filling fields, typing, waiting for elements, retrieving text and attributes, interacting with dropdowns and checkboxes, hovering over elements, and capturing screenshots. The implementation followed the Page Object Model approach and avoided page-specific logic.

### Validation Notes

- Reviewed the generated BasePage implementation for reusability and maintainability.
- Enhanced the implementation to support both selector strings and Playwright `Locator` objects.
- Added common navigation helpers such as `waitForPageLoad()`, `reload()`, and `goBack()`.
- Added reusable utility methods including `scrollIntoView()` and `waitForTimeout()` for debugging purposes.
- Improved screenshot handling by storing screenshots in the dedicated `screenshots` directory.
- Verified that the final BasePage remained generic, reusable, and aligned with the framework architecture before integrating it into the project.

## Entry 4 – API Client Implementation

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am implementing the Playwright framework.

Generate only the contents of `api/ApiClient.js`.

Requirements:

- Use JavaScript.
- Use Playwright APIRequestContext.
- Accept APIRequestContext through the constructor.
- Import configuration from `config/env.js`.
- Store the API base URL.
- Provide reusable methods:
  - get(endpoint, headers = {})
  - post(endpoint, body = {}, headers = {})
  - put(endpoint, body = {}, headers = {})
  - patch(endpoint, body = {}, headers = {})
  - delete(endpoint, headers = {})
- Automatically prepend the API base URL.
- Allow custom headers.
- Default request body should be JSON.
- Return the Playwright Response object.
- Keep the implementation generic.
- Do not include endpoint-specific methods.
- Add comments for maintainability.
- Do not generate any other files.

### AI Response Summary

Generated a reusable `ApiClient` class that wraps Playwright's `APIRequestContext` and provides common HTTP methods (GET, POST, PUT, PATCH, DELETE). The implementation included centralized URL construction, request header management, configurable API base URL loading, and reusable request handling suitable for all API service classes.

### Validation Notes

- Reviewed the generated implementation for reusability and alignment with the framework architecture.
- Replaced manual JSON serialization with Playwright's native request handling (`data` option).
- Added token management using a reusable `setToken()` method for authenticated API requests.
- Enhanced request header handling to automatically include the Authorization header when a bearer token is available.
- Simplified URL construction logic and retained a generic design without endpoint-specific methods.
- Confirmed that the final implementation serves as the common foundation for `AuthAPI`, `ProductAPI`, `CartAPI`, and `InvoiceAPI`.

## Entry 5 – AuthAPI Implementation

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am implementing the Playwright framework.

Generate only the contents of `api/AuthAPI.js`.

Requirements:

- Use JavaScript.
- Extend the reusable ApiClient class.
- Implement authentication-related methods only.
- Include:
  - register(userData)
  - login(credentials)
  - getToken()
  - setToken(token)
- The login() method should:
  - Call the login endpoint.
  - Parse the response.
  - Extract the access token.
  - Store it using setToken().
  - Return the response object.
- Keep endpoint paths configurable.
- Do not hardcode credentials.
- Add comments for maintainability.
- Do not generate any other files.

### AI Response Summary

Generated a reusable `AuthAPI` class extending `ApiClient` with methods for user registration, login, bearer token management, and token retrieval. The implementation centralized authentication endpoints and reused the generic API client methods for all authentication requests.

### Validation Notes

- Reviewed the generated implementation against the framework architecture.
- Updated endpoint configuration to remain centralized and configurable.
- Improved token extraction logic to support common API response structures.
- Removed unnecessary method duplication while reusing the inherited `setToken()` implementation.
- Added validation to ensure an access token is present after successful authentication.
- Confirmed the class is reusable and serves as the authentication layer for all remaining API modules.

## Entry 6 – ProductAPI Implementation

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am implementing the Playwright framework.

Generate only the contents of `api/ProductAPI.js`.

Requirements:

- Use JavaScript.
- Extend the reusable ApiClient class.
- Include methods for:
  - getAllProducts(query = {})
  - getProductById(productId)
  - searchProducts(searchTerm)
  - getProductsByCategory(category)
  - getProductsByBrand(brand)
- Reuse the generic GET method.
- Validate required parameters.
- Keep endpoint paths configurable.
- Do not generate any other files.

### AI Response Summary

Generated a reusable `ProductAPI` class providing product retrieval, product details, search functionality, and filtering by category and brand using the common API client implementation.

### Validation Notes

- Reviewed the implementation for maintainability and reuse.
- Centralized endpoint definitions.
- Improved query parameter handling using reusable helper methods.
- Added input validation and trimming for search, category, and brand values.
- Reused existing methods to minimize duplicate code.
- Confirmed compatibility with the shared `ApiClient`.

## Entry 7 – CartAPI Implementation

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am implementing the Playwright framework.

Generate only the contents of `api/CartAPI.js`.

Requirements:

- Use JavaScript.
- Extend the reusable ApiClient class.
- Include methods for:
  - createCart(cartData)
  - getCart(cartId)
  - addItemToCart(cartId, itemData)
  - updateCartItem(cartId, itemId, itemData)
  - removeCartItem(cartId, itemId)
  - deleteCart(cartId)
- Reuse generic HTTP methods.
- Validate required parameters.
- Keep endpoint paths configurable.
- Do not generate any other files.

### AI Response Summary

Generated a reusable `CartAPI` class supporting cart creation, retrieval, product addition, quantity updates, item removal, and cart deletion using the shared API client implementation.

### Validation Notes

- Reviewed endpoint organization and parameter validation.
- Simplified unnecessary validation logic while maintaining robustness.
- Standardized comments and error messages across methods.
- Verified reuse of generic HTTP methods from `ApiClient`.
- Confirmed the implementation is reusable for all cart-related automation scenarios.

## Entry 8 – InvoiceAPI Implementation

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am implementing the Playwright framework.

Generate only the contents of `api/InvoiceAPI.js`.

Requirements:

- Use JavaScript.
- Extend the reusable ApiClient class.
- Include methods for:
  - createInvoice(invoiceData)
  - getInvoice(invoiceId)
  - getAllInvoices(query = {})
  - verifyInvoice(invoiceId)
  - downloadInvoice(invoiceId)
- Reuse generic HTTP methods.
- Validate required parameters.
- Keep endpoint paths configurable.
- Do not generate any other files.

### AI Response Summary

Generated a reusable `InvoiceAPI` class supporting invoice creation, retrieval, listing, verification, and download using the common API client implementation.

### Validation Notes

- Reviewed endpoint organization and helper methods.
- Simplified invoice creation logic by reusing generic request methods.
- Standardized validation and comments across all methods.
- Confirmed compatibility with the shared `ApiClient`.
- Ensured the implementation is generic, reusable, and suitable for invoice-related API automation.

## Entry 9 – Helper Utilities

### Prompt

Generate reusable helper functions for the Playwright framework, including random string generation, timestamps, date formatting, delays, and reusable utility methods.

### AI Response Summary

Generated a reusable helper utility module containing common functions for generating random values, formatting dates, timestamps, delays, and reusable test data helpers.

### Validation Notes

- Reviewed generated helper methods for reuse across UI and API automation.
- Added reusable email and username generation.
- Simplified date formatting.
- Ensured helper methods remain generic and framework-independent.

## Entry 10 – Logger Utility

### Prompt

Generate a lightweight reusable logger for the Playwright framework.

### AI Response Summary

Generated a reusable logging utility supporting INFO, WARN, ERROR, and SUCCESS log levels with timestamped messages.

### Validation Notes

- Reviewed implementation for simplicity.
- Standardized formatting and comments.
- Confirmed no external dependencies were required.

## Entry 11 – Wait Utilities

### Prompt

Generate reusable Playwright wait helper methods for common synchronization scenarios.

### AI Response Summary

Generated reusable helper methods for waiting on page loads, elements, URLs, and explicit waits using Playwright APIs.

### Validation Notes

- Simplified the generated implementation by removing unnecessary fallback logic and polling loops.
- Standardized the helper methods around Playwright Locator APIs.
- Confirmed consistency with the existing BasePage implementation.

## Entry 12 – Faker Utilities

### Prompt

Generate reusable Faker helper methods for creating realistic test data for users, addresses, phone numbers, and passwords.

### AI Response Summary

Generated reusable Faker utility methods to create realistic user profiles, addresses, phone numbers, and passwords for automated testing.

### Validation Notes

- Reviewed compatibility with the latest Faker API.
- Updated username and email generation methods.
- Ensured reusable and realistic test data generation.
- Confirmed suitability for UI and API automation scenarios.