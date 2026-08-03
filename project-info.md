# Project Information

## QA AI Practical Assessment

## 1. What is the project all about?

This project demonstrates an AI-assisted Quality Assurance workflow for the **Practice Software Testing** application. The objective is to design, document, and automate end-to-end UI and API test scenarios using **Playwright with JavaScript** while following industry-standard QA practices.

The project covers the complete QA lifecycle, including:

- Requirement Analysis
- Risk Analysis
- Test Strategy
- Manual Test Case Design
- UI Automation
- API Automation
- Test Reporting
- Documentation
- AI Prompt History
- Version Control using Git

The automation framework will follow a reusable and maintainable structure based on the **Prism Framework** architecture using the Page Object Model (POM), reusable utilities, environment configuration, and API abstraction layers.

## 2. Primary AI Tool(s) Used

The following AI tools were used during this project:

- **ChatGPT (GPT-5.5)** – Used for project planning, requirement analysis review, risk analysis refinement, test strategy creation, manual test case review, documentation, framework planning, and overall QA guidance.
- **Cursor AI** – Used for AI-assisted document generation, framework implementation, automation code generation, and development support.

The workflow combined the planning and review capabilities of ChatGPT with the code generation capabilities of Cursor AI.

## 3. How project and system-under-test context was provided

A dedicated `PROJECT_CONTEXT.md` file was created at the beginning of the project.

This document contained:

- Project objective
- Application under test
- UI URL
- API documentation URL
- Technology stack
- Assignment scope
- Coding standards
- Automation framework expectations
- Documentation requirements

Before every major task, Cursor AI was instructed to read `PROJECT_CONTEXT.md` to ensure all generated content remained aligned with the project scope and assignment requirements.

This approach helped maintain consistency across requirement analysis, risk analysis, test strategy, and manual test case design.

## 4. How AI was used for Requirement Analysis

AI was used to perform the initial analysis of the Practice Software Testing application by understanding both the UI and API documentation. Instead of accepting the first AI-generated response, the output was reviewed and refined to match the assignment scope.

The AI-assisted workflow included:

- Analyzing the Practice Software Testing UI and API documentation.
- Identifying the primary business objectives and core user journeys.
- Defining the project scope by focusing only on:
  - User Registration
  - Login
  - Product Search
  - Product Details
  - Cart Management
  - Checkout
  - Invoice Generation
  - Invoice Verification
  - Product APIs
  - Cart APIs
  - Invoice APIs
- Excluding unrelated modules such as Admin, Reports, Analytics, TOTP, and Contact Management.
- Creating a structured Requirement Analysis document with Business Objectives, Functional Requirements, Non-Functional Requirements, Assumptions, Dependencies, In Scope, Out of Scope, and High-Level Acceptance Criteria.

The AI-generated document was manually reviewed and refined before being added to the project documentation.

---

## 5. How AI was used for Test Planning and Strategy

AI was used to assist in planning the overall testing approach for the project.

The planning activities included:

- Performing Risk Analysis for the selected application modules.
- Identifying Business, Functional, UI, API, Data, Security, and Automation Risks.
- Prioritizing risks using High, Medium, and Low classifications.
- Defining mitigation strategies for the identified risks.
- Creating a comprehensive Test Strategy covering:
  - Testing Objectives
  - Testing Scope
  - Testing Types
  - Smoke Test Scope
  - Regression Test Scope
  - UI Testing Strategy
  - API Testing Strategy
  - Positive, Negative, and Boundary Testing
  - Test Environment
  - Entry and Exit Criteria
  - Deliverables
  - Assumptions

The generated strategy was manually reviewed to ensure it aligned with the finalized Requirement Analysis and project scope before it was finalized.

---
## 6. How AI was used for Automation Design

AI was used to assist in designing and implementing a scalable Playwright JavaScript automation framework following the Page Object Model (POM) approach. Rather than generating the entire framework at once, an architecture-first approach was followed, where each framework component was designed, reviewed, refined, and implemented incrementally.

AI-assisted activities included:

- Designing the overall framework architecture using Prism Framework principles.
- Defining a scalable folder structure for UI and API automation.
- Creating a reusable BasePage for common UI interactions.
- Designing Page Object Model classes for Login, Registration, Home, Product, Cart, Checkout, and Invoice pages.
- Designing a reusable API service layer consisting of ApiClient, AuthAPI, ProductAPI, CartAPI, and InvoiceAPI.
- Creating reusable utility modules for logging, waits, helper methods, and dynamic test data generation using Faker.
- Designing centralized configuration using `.env`, `config/env.js`, and `playwright.config.js`.
- Planning reusable test data management, environment configuration, reporting, screenshots, traces, and browser execution settings.

Every AI-generated implementation was manually reviewed, validated, and refined before being added to the project. Redundant code was removed, naming conventions were standardized, reusable methods were improved, and the framework structure was kept consistent across all modules.

The finalized framework architecture and implementation details are documented in `docs/framework-design.md`.

---

## 7. How AI was used for Manual Test Case Design

AI was used to assist in designing manual test cases for the selected modules within the project scope. The initial test scenarios were generated based on the finalized Requirement Analysis and Acceptance Criteria and were then manually reviewed and refined.

The AI-assisted workflow included:

- Generating positive, negative, boundary, and validation test scenarios.
- Designing functional test cases for Registration, Login, Product Search, Product Details, Cart, Checkout, and Invoice Generation.
- Identifying edge cases such as invalid credentials, empty mandatory fields, duplicate registrations, invalid product searches, and cart validation scenarios.
- Creating reusable preconditions, test data, execution steps, and expected results.
- Organizing the test cases into Smoke and Regression suites based on business priority.

Every AI-generated test case was manually verified against the application behavior before being included in the project documentation.

---

## 8. How AI-generated Test Cases and Automation Scripts were Validated

AI-generated content was never accepted without review. Every document, test case, and automation script was manually validated against the application behavior, API documentation, and assignment requirements before implementation.

The validation process included:

- Verifying generated test scenarios against actual application functionality.
- Reviewing generated Playwright code for readability, reusability, and maintainability.
- Refactoring duplicate logic into reusable Page Objects and API modules.
- Improving locator strategies to reduce flaky executions.
- Adding meaningful assertions for both UI and API validations.
- Executing the automation multiple times to ensure stability before finalizing the implementation.

This iterative review process ensured that the final deliverables met both project requirements and coding standards.

---

## 9. How AI was used for Test Data Generation, Environment Configuration, and API Payloads

AI assisted in creating reusable approaches for test data generation and environment configuration.

Activities included:

- Generating dynamic user registration data using Faker to avoid duplicate users.
- Designing reusable API payload structures for Registration, Login, Cart, Product, and Invoice APIs.
- Centralizing environment-specific configuration using `.env` and `config/env.js`.
- Creating reusable request payloads and response validation logic.
- Managing authentication through reusable bearer token handling.
- Designing reusable API request modules to simplify test implementation.

Dynamic test data ensured that each execution remained isolated and repeatable without relying on pre-existing application data.

---

## 10. How AI was used for Debugging and Failure Analysis

AI was extensively used to investigate and resolve issues encountered during automation development.

Typical debugging activities included:

- Analyzing HTTP status codes and API error responses.
- Reviewing Playwright execution logs and stack traces.
- Identifying incorrect API endpoints, request payloads, and authentication issues.
- Resolving synchronization issues in UI automation by improving waits and page state validation.
- Debugging locator failures, timing issues, and assertion failures.
- Comparing browser network requests with API automation requests to identify payload differences.
- Refactoring reusable methods after identifying repetitive failures.

All identified issues, root causes, and resolutions were documented in the `automation-and-debugging.md` document.

---

## 11. Information Not Shared with AI Tools

Only project-related technical information was shared with AI tools during development.

The following information was intentionally excluded:

- Personal credentials and passwords.
- Sensitive authentication tokens.
- Proprietary or confidential project information.
- Production environment details.
- Personal or organizational confidential data.

Environment-specific values were stored in `.env` files and referenced through configuration rather than being embedded directly in prompts.

---

## 12. Reusing this AI-Assisted QA Workflow in Real Projects

The workflow established during this assessment can be reused for future automation projects with minimal changes.

The reusable workflow consists of:

1. Understanding project requirements.
2. Preparing project context documentation.
3. Performing AI-assisted requirement analysis.
4. Creating risk analysis and test strategy.
5. Designing manual test cases.
6. Building a reusable automation framework.
7. Implementing UI and API automation incrementally.
8. Using AI to debug failures and improve framework quality.
9. Maintaining prompt history and documentation.
10. Managing changes through Git version control.

Following this structured approach improves consistency, reduces repetitive work, and enables faster development of maintainable automation frameworks while ensuring that all AI-generated outputs are reviewed and validated before implementation.