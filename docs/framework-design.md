# Playwright Automation Framework Design

## 1. Framework Overview

The automation framework is designed using the **Prism Framework architecture** with **Playwright JavaScript**. The framework supports both **UI** and **API** automation while maintaining a clear separation of responsibilities, reusable components, and scalable project organization.

The primary goals of the framework are:

- Reusability
- Maintainability
- Scalability
- Readability
- Easy onboarding for new automation engineers

The framework follows the **Page Object Model (POM)** for UI automation and a dedicated **API abstraction layer** for backend testing.

---

# 2. High-Level Framework Architecture

The framework is divided into the following logical layers:

## Test Layer

Contains executable UI and API test suites.

Responsibilities:

- Test execution
- Assertions
- Test grouping (Smoke / Regression)

---

## UI Layer

Contains Page Object Model classes.

Responsibilities:

- UI locators
- Page-specific actions
- Navigation methods
- Reusable page components

---

## API Layer

Contains reusable API service classes.

Responsibilities:

- Authentication
- Product APIs
- Cart APIs
- Invoice APIs
- Common request handling

---

## Utility Layer

Contains reusable helper functions.

Responsibilities:

- Wait utilities
- Logger
- Faker utilities
- Common helper methods

---

## Configuration Layer

Contains framework configuration.

Responsibilities:

- Environment configuration
- Base URLs
- Timeouts
- Browser configuration

---

## Data Layer

Contains reusable test data.

Responsibilities:

- User data
- Product data
- API payloads

---

# 3. Folder Structure

```text
qa-ai-practical-assessment/

├── ai-prompts/
├── docs/
│
├── tests/
│   ├── ui/
│   │   ├── smoke/
│   │   └── regression/
│   │
│   └── api/
│       ├── smoke/
│       └── regression/
│
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── RegistrationPage.js
│   ├── HomePage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── InvoicePage.js
│
├── api/
│   ├── ApiClient.js
│   ├── AuthAPI.js
│   ├── ProductAPI.js
│   ├── CartAPI.js
│   └── InvoiceAPI.js
│
├── fixtures/
│   └── testFixture.js
│
├── utils/
│   ├── faker.js
│   ├── helpers.js
│   ├── logger.js
│   └── waitUtils.js
│
├── data/
│   ├── users.json
│   ├── products.json
│   └── payloads.json
│
├── config/
│   └── env.js
│
├── reports/
├── screenshots/
│
├── .env
├── playwright.config.js
├── package.json
├── README.md
└── project-info.md
```

---

# 4. Folder Responsibilities

| Folder | Responsibility |
|----------|---------------|
| tests | UI and API test execution |
| pages | Page Object Model classes |
| api | API client and service classes |
| fixtures | Shared Playwright fixtures |
| utils | Reusable helper functions |
| data | Test data and payloads |
| config | Environment configuration |
| reports | Playwright and Allure reports |
| screenshots | Failure screenshots |

---

# 5. Page Object Model Design

The UI automation follows the **Page Object Model (POM)**.

Each page class will:

- Store page locators
- Expose reusable page actions
- Avoid test assertions
- Keep business logic outside test files

Example responsibilities:

- LoginPage
- RegistrationPage
- ProductPage
- CartPage
- CheckoutPage
- InvoicePage

---

# 6. API Layer Design

API automation follows a service-based approach.

Each API class represents a business module.

Examples:

- AuthAPI
- ProductAPI
- CartAPI
- InvoiceAPI

A common **ApiClient** will:

- Manage authentication
- Handle headers
- Execute HTTP requests
- Process common responses

---

# 7. Test Data Management

The framework uses both static and dynamic test data.

Static Data:

- User credentials
- Product information
- API payload templates

Dynamic Data:

- Faker-generated user information
- Dynamic email addresses
- Random order values where required

Test data remains separate from automation logic.

---

# 8. Environment Management

Environment-specific values will be stored separately.

Examples:

- UI Base URL
- API Base URL
- Credentials
- Browser

Configuration will be loaded through:

- `.env`
- `config/env.js`

No environment-specific values will be hardcoded inside test files.

---

# 9. Reporting Strategy

The framework uses:

- Playwright HTML Report
- Allure Report

Failure evidence includes:

- Screenshots
- Trace files
- Videos (where applicable)

Reports will be generated automatically after execution.

---

# 10. Reusability Strategy

The framework promotes reuse by:

- Using BasePage for common UI operations.
- Using ApiClient for common API operations.
- Keeping locators centralized.
- Separating test data from test logic.
- Sharing helper methods across UI and API tests.
- Organizing tests into Smoke and Regression suites.

---

# 11. Coding Standards

The framework follows these standards:

- JavaScript (ES6+)
- Async/Await
- Playwright Locator API
- Page Object Model
- One responsibility per class
- Reusable helper methods
- Environment-based configuration
- Meaningful naming conventions
- Clean and readable code
- No hardcoded waits or credentials

---

# 12. Framework Benefits

The designed framework provides:

- High maintainability
- Reusable components
- Clear separation of concerns
- Easy scalability
- Support for UI and API automation
- Easy integration with CI/CD pipelines
- Reliable reporting and debugging
- Simple onboarding for future contributors