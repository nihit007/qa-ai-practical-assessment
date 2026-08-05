# Test Data Strategy

## Objective

This document defines the test data strategy used for the QA AI Practical Assessment. The goal is to support reliable UI and API automation for the Practice Software Testing application using Playwright with JavaScript, Faker for synthetic data, dotenv for environment configuration, and centralized values in `config/env.js`.

## Types of Test Data Used

### Static Test Data
Static data is used when values are stable or required for validation. Examples include:

- Product search keyword: a predefined term used in search validation scenarios.
- Billing Address: a fixed address used to verify checkout flow consistency.
- House Number: a stable numeric value used in form completion tests.
- Country: a specific country value selected to validate geographic-dependent behavior.
- Expected Product Name: a known product identifier used for assertions after search or navigation.
- Payment Method: Cash on Delivery is used as the standard payment option for checkout validation.
- Invoice validation: The generated invoice number is compared with the latest invoice displayed in the user's invoice history.

### Dynamic Test Data
Dynamic test data is generated at runtime to exercise realistic application workflows and reduce reuse of stale records.

- User Registration using Faker: create new user profiles during test execution to avoid duplicate user collisions.
- Random email: a unique email address generated for each registration or login flow.
- Random first name: a synthetic first name used in user profile creation.
- Random last name: a synthetic last name used in user profile creation.
- Random password: a secure password generated dynamically for user account creation.
- Generated Invoice Number: Captured dynamically after successful order placement and verified against the invoice history page.

### Environment Data
Environment data is managed through `dotenv` and `config/env.js` so tests can run consistently across local, staging, or CI environments.

- `BASE_URL`: the web application URL used for Playwright UI tests.
- `API_BASE_URL`: the API endpoint used for backend and API automation tests.
- `TEST_EMAIL`: a reusable email value for login or API authentication when a dedicated dynamic user is not required.
- `TEST_PASSWORD`: the password corresponding to `TEST_EMAIL`, stored securely outside source control.
- Registered user credentials: Used during the invoice checkout flow to validate authenticated user scenarios.

### API Test Data
API test data focuses on request payloads and reusable objects that drive API calls.

- Request payloads are constructed from reusable templates and environment-independent values.
- Common payload properties include user credentials, product identifiers, cart item details, and payment or billing fields.
- Reusable data objects are defined in helper modules or test fixtures to avoid duplication and simplify maintenance.
- Payloads for registration, login, cart operations, and invoice creation are kept consistent across tests while allowing dynamic overrides for unique values.

### Data Management Strategy
A robust data management strategy helps keep tests reliable, self-contained, and secure.

- Avoid hardcoded sensitive credentials: credentials and secrets are not committed to source control.
- Use environment variables: `dotenv` and `config/env.js` provide a central location for environment-specific configuration.
- Reusable test data: common values and payload structures are reused across tests to improve consistency and reduce duplication.
- Data isolation: tests create fresh dynamic users and avoid shared state so one test does not impact another.
- Independent test execution: test cases are designed to run independently, with setup data generated as needed and cleanup handled implicitly by test isolation.
- Static product data is reused across smoke tests to ensure consistent product selection.
- Runtime-generated values such as invoice numbers are captured and reused for validation within the same test execution.

### Best Practices Followed

This project follows industry best practices for test data usage and maintainability.

- Dynamic user generation: Faker-driven users reduce reliance on fixed accounts and increase coverage.
- Environment-based configuration: tests can switch between environments by changing `BASE_URL`, `API_BASE_URL`, and other environment values.
- Reusable test data: common fixtures, payload templates, and helper utilities reduce repetition.
- Maintainability: clear separation of static, dynamic, and environment data makes the test suite easier to update.
- Scalability: the strategy supports adding new scenarios, data variants, and environments without large refactors.
- Runtime validation: Dynamic values generated during execution (such as invoice numbers) are stored and validated later in the same workflow.


### Future Improvements

The current strategy is intentionally simple and effective, with room to evolve as the test suite grows.

- JSON-based datasets for reusable UI and API test data.
- CSV or Excel-driven data-driven testing.
- Database seeding for predictable backend test state.
- Environment-specific datasets for QA, Staging, and Production-like environments.
- External test data repository for large-scale regression suites.
