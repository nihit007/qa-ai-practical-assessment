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