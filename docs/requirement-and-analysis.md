# Requirement Analysis

## Project Objective

The objective of this QA AI Practical Assessment is to develop a maintainable and scalable automation framework using Playwright with JavaScript for the Practice Software Testing application. The framework automates critical UI and API workflows using a Prism-inspired architecture with the Page Object Model (POM), while demonstrating AI-assisted planning, framework design, documentation, and automation using ChatGPT and Cursor AI.

## Functional Requirements

### UI Features
- User registration using the registration page.
- Registered user login and account page validation.
- Product search with partial keyword matching and result verification.
- Product details verification for selected items.
- Add product to cart from the product details page.
- Cart validation including item name, quantity, price, and total.
- Guest checkout flow with billing details and Cash on Delivery payment.
- Registered user checkout flow with login during checkout.
- Cash on Delivery payment selection and order confirmation.
- Order confirmation validation after checkout.
- Invoice generation and invoice history verification for registered users.
- Navigation to the My Invoices page and validation of the latest generated invoice.

### API Features
- User registration API validation.
- User login API validation and token handling.
- Product API retrieval and product availability verification.
- Cart API creation, item addition, and cart validation.
- Invoice API generation using cart data and payment details.
- Purchase flow API end-to-end validation including registration, login, product selection, cart creation, and invoice generation.

## Non-Functional Requirements

### Performance
- Automation is designed for smoke-level execution to validate critical flows efficiently.
- Tests are written to execute quickly against the Chromium browser using Playwright.

### Reliability
- Stable page object abstractions and reusable API service classes reduce brittle test behavior.
- Explicit checks and assertions are used to confirm page navigation, element visibility, and API responses.
- Environment configuration is centralized to avoid hard-coded values.
- Explicit waits are used to synchronize dynamic UI elements and reduce flaky test execution.

### Maintainability
- The framework follows Prism-inspired folder structure with separate `pages/`, `api/`, `tests/`, `utils/`, and `config/` layers.
- Page Object Model and API abstraction patterns isolate locators and endpoints from test logic.
- Reusable utilities and configuration modules support consistent maintenance.
- Common functionality is centralized within a reusable BasePage class to minimize code duplication.

### Reusability
- Reusable Page Object classes are implemented for Home, Registration, Login, Product Search, Product Details, Cart, Checkout, and Invoice workflows.
- API service classes (`ApiClient`, `AuthAPI`, `ProductAPI`, `CartAPI`, `InvoiceAPI`) encapsulate common request behavior.
- Dynamic test data generation is reused across registration and API scenarios.

### Scalability
- The project structure supports future expansion of UI and API suites.
- Separate UI and API smoke suites allow additional scenarios or regression suites to be added without impacting existing coverage.
- Modular test design enables additional pages, endpoints, and business flows to be incorporated.
- The modular framework allows new UI pages, API services, and test suites to be added with minimal changes to existing code.

### Readability
- Tests and page objects use clear naming conventions and documented comments.
- Documentation is maintained under `docs/` with requirement, strategy, and risk artifacts.
- Configuration and environment variables are easy to understand and update.

## In Scope

### UI Scenarios
- Registration
- Login
- Product search
- Product details
- Add to cart
- Cart validation
- Guest checkout
- Registered user checkout
- Payment using Cash on Delivery
- Order confirmation
- Invoice generation
- Invoice history validation

### API Scenarios
- Registration API
- Login API
- Product API
- Cart API
- Invoice API
- Purchase flow API

## Out of Scope

- Performance testing beyond smoke validation.
- Security testing.
- Load testing.
- Mobile testing.
- Accessibility testing.
- Cross-browser validation beyond Chromium.

## Assumptions

- The Practice Software Testing website and API endpoints are available and reachable during test execution.
- The registered user credentials for the login suite are supplied through environment configuration.
- Cash on Delivery payment is supported by the checkout flow.
- Invoice generation is available and can be verified from the registered user invoice history.
- Dynamic user registration data can be generated reliably by the framework.

## Dependencies

- Node.js and npm.
- Playwright (`@playwright/test`).
- Faker (`@faker-js/faker`) for dynamic test data.
- dotenv for environment configuration.
- Playwright browser binaries, primarily Chromium.
- Environment variables: `BASE_URL`, `API_BASE_URL`, `TEST_EMAIL`, `TEST_PASSWORD`.
- Access to the Practice Software Testing web application and associated API.

## Risks Identified During Requirement Analysis

- Failure in registration or login flows can block both UI and API authentication scenarios.
- Product search or product details failures can prevent the completion of cart and checkout workflows.
- Cart flow issues may stop product purchase and invoice generation.
- Checkout and payment failures can prevent order confirmation and invoice creation.
- Invoice generation or invoice history verification issues can undermine billing validation.
- API authentication or token handling issues can break end-to-end API purchase flow validation.
- Changes in UI locators or API contract updates may require test maintenance.
- Dynamic application response times may occasionally introduce synchronization issues during end-to-end checkout and invoice generation.