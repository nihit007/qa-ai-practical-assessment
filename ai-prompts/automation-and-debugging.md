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