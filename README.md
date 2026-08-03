# QA AI Practical Assessment

## Project Introduction

This repository contains the automation framework and supporting documentation for the **QA AI Practical Assessment**. The implementation validates the **Practice Software Testing** application through both UI and API automation using **Playwright with JavaScript**.

- **Project objective:** Build a maintainable test automation framework covering end-to-end UI and API smoke scenarios for the Practice Software Testing application.
- **Application under test:** Practice Software Testing UI and API.
- **Technologies used:** Playwright, JavaScript, Faker, dotenv.
- **Framework used:** Prism-inspired automation structure with Page Object Model (POM) and API service layer.
- **AI tools used:** ChatGPT and Cursor AI for planning, design, documentation, and automation guidance.

---

## Framework Overview

The framework is built on **Playwright with JavaScript** and follows a modular architecture with separate layers for UI, API, utilities, configuration, and test data.

- **Playwright with JavaScript:** Used for browser automation, network-level API requests, and HTML reporting.
- **Prism Framework concepts:** The structure follows Prism principles by separating test execution, UI page objects, API services, utilities, data, and configuration.
- **Page Object Model (POM):** UI interactions are encapsulated in page classes under `pages/`, such as `LoginPage`, `RegistrationPage`, `HomePage`, `ProductPage`, `CartPage`, and `CheckoutPage`.
- **API Service Layer:** API automation is implemented through reusable service classes in `api/`, including `ApiClient`, `AuthAPI`, `ProductAPI`, `CartAPI`, and `InvoiceAPI`.
- **Reusable utilities:** Common helpers are stored in `utils/` for random data, waits, and logging.
- **Dynamic test data:** Faker-based data generation is used for unique user registration.
- **Environment configuration:** Managed through `.env` and `config/env.js`, with the base URL and API base URL used by Playwright and API modules.

---

## Project Structure

The project structure below reflects the actual folders and files in the repository.

- `pages/` - UI Page Object Model classes.
- `api/` - Reusable API client and service classes.
- `tests/` - Playwright test suites for UI and API.
- `config/` - Environment configuration.
- `utils/` - Reusable utility modules.
- `data/` - Static test data and payload files.
- `docs/` - Project documentation and strategy artifacts.
- `evidence/` - Placeholder for execution evidence.
- `playwright-report/` - Generated Playwright HTML report output.
- `test-results/` - Container for execution results.

---

## Prerequisites

Before running the project, ensure the following are installed:

- **Node.js**
- **npm**
- **Git**

The project uses Playwright and dotenv via npm packages defined in `package.json`.

---

## Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
```

---

## Environment Configuration

The framework uses a `.env` file for environment variables and `config/env.js` loads those settings for the framework.

### Relevant configuration files

- `.env`
- `config/env.js`
- `playwright.config.js`

### Required environment variables

The project loads these variables from `.env`:

- `BASE_URL`
- `API_BASE_URL`
- `BROWSER`
- `ENV`
- `TEST_EMAIL`
- `TEST_PASSWORD`

`config/env.js` reads these variables and exposes them to Playwright and test modules.

---

## Test Data

The framework uses a combination of static and dynamic test data.

- Dynamic user registration data is generated during execution to ensure unique test runs.
- API request payloads are created within the test and API service modules.
- Environment-specific configuration is maintained using `.env`.
- Manual testing artifacts are available under the `docs/` folder.

---

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run UI Smoke Suite:

```bash
npx playwright test tests/ui/smoke
```

Run API Smoke Suite:

```bash
npx playwright test tests/api/smoke
```

This repository currently implements Smoke automation. A dedicated Regression suite folder is not present.

---

## Test Suites

| Suite | Description |
|-------|-------------|
| UI Smoke | Validates critical UI flows including registration, login, product search, product details, cart, and guest checkout. |
| API Smoke | Validates core API workflows including registration/login and purchase flow APIs. |

---

## Manual Testing

- Manual test case artifacts are referenced in the `docs/` folder.
- Execute manual test cases by reviewing the documentation and running the corresponding scenarios against the Practice Software Testing site.
- The `docs/requirement-analysis.md` file is intended to contain the Requirement Analysis.
- The `docs/test-strategy.md` file contains the Test Strategy.

---

## Automation Coverage

### UI Automation

| Scenario | Status |
|----------|--------|
| Registration | Completed |
| Login | Completed |
| Product Search | Completed |
| Product Details | Completed |
| Cart | Completed |
| Guest Checkout | Completed |
| Payment | Completed |
| Order Confirmation | Completed |

### API Automation

| Scenario | Status |
|----------|--------|
| Registration API | Completed |
| Login API | Completed |
| Product API | Completed |
| Cart API | Completed |
| Invoice API | Completed |
| Purchase Flow API | Completed |

---

## Reports

Execution reports are generated in the `playwright-report/` folder.

Use the following commands to run tests and view reports:

```bash
npx playwright test
```

```bash
npx playwright show-report
```

The HTML report output is stored under `playwright-report/` after test execution.

---

## Evidence

The `evidence/` folder contains proof of successful automation execution.

The folder includes:

- UI automation execution screenshots
- API automation execution screenshots
- Playwright HTML report screenshots
- Terminal execution logs

---

## Project Documentation

| Document | Description |
|----------|-------------|
| project-info.md | Project overview and AI usage |
| requirement-analysis.md | Requirement analysis |
| risk-analysis.md | Risk analysis |
| test-strategy.md | Test strategy |
| framework-design.md | Framework architecture |
| documentation-and-summary.md | Final project summary |
| automation-and-debugging.md | AI prompt history and debugging |
---

## AI Usage

- **ChatGPT** was used for requirement analysis, risk assessment, test strategy development, documentation drafting, and QA guidance.
- **Cursor AI** was used for code generation support, framework design guidance, and documentation assistance.

---

## Future Enhancements

Potential next steps for this framework include:

- Add a dedicated Regression suite.
- Add cross-browser execution coverage.
- Integrate CI/CD pipeline execution.
- Enable parallel execution tuning.
- Expand API modules and endpoint coverage.
- Add data-driven test scenarios.

## Framework Features

The automation framework provides:

- Page Object Model (POM)
- Reusable BasePage
- API Service Layer
- Dynamic Test Data Generation
- Environment Configuration
- Modular Folder Structure
- Smoke Test Suites
- HTML Reporting
- AI-assisted Documentation
- Git Version Control

---


## Author

Developed as part of the **QA AI Practical Assessment** using **Playwright with JavaScript**, following Prism Framework principles and AI-assisted software testing practices.
