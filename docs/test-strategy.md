# QA Test Strategy

## 1. Testing Objectives

- Validate critical customer journeys and backend APIs for the Practice Software Testing application.
- Ensure reliable user onboarding, product discovery, cart workflows, checkout, and invoice generation.
- Confirm API authentication and data consistency across the UI and API layers.
- Provide a maintainable Playwright JavaScript automation strategy supporting both UI and API regression testing.
- Detect high-risk defects early through Smoke and Regression testing.

---

## 2. Testing Scope

### In Scope

- User Registration
- User Login
- Product Search
- Product Details
- Cart Management
- Checkout
- Invoice Generation
- Invoice Verification
- API Authentication
- Product API
- Cart API
- Invoice API

### Out of Scope

- Admin Modules
- Reporting & Analytics
- TOTP / Multi-factor Authentication
- Contact Forms
- External Payment Gateway
- Other unrelated UI/API functionality

---

## 3. Testing Types

### Functional Testing
Validate feature behavior for registration, login, search, product details, cart, checkout, and invoice workflows.

### End-to-End Testing
Verify the complete customer journey from account registration to checkout and invoice generation.

### API Testing
Validate authentication, product retrieval, cart operations, and invoice APIs.

### Integration Testing
Verify consistency between UI actions and backend API responses.

### Smoke Testing
Validate critical business flows after every deployment.

### Regression Testing
Verify previously tested functionality after application changes.

### Sanity Testing
Perform focused validation of bug fixes or recently modified functionality.

### API Contract & Data Validation
Verify response payloads, mandatory fields, pricing, totals, and invoice data consistency.

---

## 4. Smoke Test Scope

Smoke tests will cover the highest-priority business flows:

- User Registration with valid details.
- User Login using valid credentials.
- Product Search functionality.
- Product Details page validation.
- Add Product to Cart.
- Checkout with valid details.
- Invoice Generation.
- Invoice Verification.
- API Authentication.
- Product API validation.
- Cart API validation.
- Invoice API validation.

---

## 5. Regression Test Scope

Regression testing will include:

- All Smoke test scenarios.
- Registration validation (positive and negative).
- Login validation (positive and negative).
- Product search with filters and invalid search terms.
- Product detail validation.
- Cart quantity updates and item removal.
- Checkout validation.
- Invoice retrieval and verification.
- UI and API consistency validation.
- API authentication lifecycle.
- Product, Cart, and Invoice API coverage.
- Data persistence validation.

---

## 6. UI Testing Strategy

- Use Playwright with JavaScript.
- Follow the Page Object Model (POM).
- Automate Registration, Login, Product Search, Product Details, Cart, Checkout, and Invoice flows.
- Validate UI elements, navigation, form validation, error handling, and success messages.
- Use stable locators to reduce flaky tests.
- Store environment-specific configuration separately.
- Execute tests across supported browsers.
- Generate execution reports using Allure.

---

## 7. API Testing Strategy

API automation will be implemented using Playwright's `APIRequestContext`.

### Authentication API

- Validate successful login.
- Validate invalid credentials.
- Verify unauthorized access.
- Validate authentication token generation.

### Product API

- Validate product listing.
- Validate product search.
- Validate filtering functionality.
- Verify response payload structure.
- Verify product pricing.

### Cart API

- Add items to cart.
- Update cart quantity.
- Remove cart items.
- Validate cart totals.
- Verify cart persistence.

### Invoice API

- Generate invoice.
- Retrieve invoice.
- Validate invoice payload.
- Verify invoice and order consistency.

### API Validation

- Validate HTTP status codes.
- Validate response schema.
- Validate response time.
- Validate authentication and authorization.

---

## 8. Positive, Negative & Boundary Testing Approach

### Positive Testing

- Validate successful registration.
- Validate successful login.
- Validate product search.
- Validate product selection.
- Validate cart operations.
- Validate checkout.
- Validate invoice generation.
- Verify successful API responses.

### Negative Testing

- Invalid registration data.
- Duplicate user registration.
- Invalid login credentials.
- Empty mandatory fields.
- Invalid search terms.
- Invalid cart quantities.
- Invalid checkout data.
- Unauthorized invoice retrieval.
- Invalid API payloads.
- Unauthorized API requests.

### Boundary Testing

- Email length validation.
- Password length validation.
- Product quantity limits.
- Price and total calculations.
- Search input limits.
- Invoice total validation.

---

## 9. Test Environment

### Environment

- Practice Software Testing UI
- Practice Software Testing API

### URLs

**UI**

https://practicesoftwaretesting.com/

**API**

https://api.practicesoftwaretesting.com/

### Test Infrastructure

- Playwright JavaScript
- APIRequestContext
- Environment variables
- Cross-browser execution
- Allure Reports

### Test Data

- Dynamic user creation.
- Environment-based configuration.
- Test data isolation.
- Cleanup after execution where applicable.

---

## 10. Test Data Strategy

- Use both static and dynamic test data.
- Generate unique users for registration.
- Maintain reusable test datasets.
- Use data-driven testing for positive and negative scenarios.
- Maintain reusable product identifiers.
- Store environment-specific data in configuration files.
- Isolate test data between executions.
- Use APIs to prepare test data whenever possible.

---

## 11. Entry Criteria

- Requirement Analysis completed.
- Risk Analysis completed.
- Test Strategy approved.
- UI and API environments are available.
- Playwright framework is configured.
- Test data is available.
- Reporting configuration is completed.

---

## 12. Exit Criteria

- All Smoke test scenarios pass.
- Regression suite passes successfully.
- No Critical or High severity defects remain.
- Execution reports are generated.
- UI and API consistency has been verified.
- All planned deliverables are completed.

---

## 13. Deliverables

- Requirement Analysis
- Risk Analysis
- Test Strategy
- Manual Test Suite
- Smoke Test Suite
- Regression Test Suite
- UI Automation Suite
- API Automation Suite
- Test Data Strategy
- Execution Reports (Playwright & Allure)
- README.md
- project-info.md
- AI Prompt History
- Git Repository

---

## 14. Assumptions

- The application is available and stable.
- UI and API endpoints remain accessible.
- API documentation is up to date.
- Test accounts can be created dynamically.
- Test data can be cleaned without impacting production.
- UI and API remain functionally consistent.
- Automation is limited to the project scope defined in the assessment.
