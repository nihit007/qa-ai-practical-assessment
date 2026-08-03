# Documentation and Project Summary

## 1. Project Overview

### Project Description

The **QA AI Practical Assessment** demonstrates the use of Artificial Intelligence to assist throughout the Software Testing Life Cycle (STLC), from requirement analysis to automation and project documentation.

The project focuses on automating the **Practice Software Testing** application using **Playwright with JavaScript** while following modern QA engineering practices and a reusable automation framework based on the **Page Object Model (POM)** and **Prism Framework** principles.

The objective was not only to automate UI and API scenarios but also to demonstrate how AI tools can improve productivity, planning, documentation, debugging, and framework design while ensuring that every AI-generated output is manually reviewed and validated before implementation.

### Application Under Test

- **UI Application:** https://practicesoftwaretesting.com/
- **API:** https://api.practicesoftwaretesting.com/

### Technologies Used

- Playwright (JavaScript)
- Node.js
- Page Object Model (POM)
- Prism Framework Architecture
- Faker.js
- Playwright APIRequestContext
- Dotenv
- Git & GitHub
- Cursor AI
- ChatGPT (GPT-5.5)

### Project Scope

The implemented automation covers the core customer journey of the application.

### UI Automation

- User Registration
- User Login
- Product Search
- Product Details
- Cart Management
- Guest Checkout
- Payment
- Order Confirmation

### API Automation

- User Registration
- User Login
- Product Retrieval
- Cart Creation
- Add Product to Cart
- Cart Validation
- Invoice Generation

The framework follows a modular architecture with reusable Page Objects, reusable API services, centralized configuration, dynamic test data generation, and reusable utility methods.

---

# 2. Requirement Analysis Summary

AI-assisted requirement analysis was performed by studying both the application UI and the available API documentation.

The generated requirements were manually refined to ensure they aligned with the project scope and assignment expectations.

### Business Objectives

- Validate the application's primary customer journey.
- Verify both frontend and backend functionality.
- Ensure reusable automation for future regression testing.
- Demonstrate AI-assisted QA practices throughout the project.

### Functional Requirements

The following modules were identified as the core business functionality:

- User Registration
- User Login
- Product Search
- Product Details
- Cart Management
- Guest Checkout
- Payment
- Order Confirmation
- Product APIs
- Cart APIs
- Authentication APIs
- Invoice API

### Non-Functional Requirements

The project also focused on:

- Maintainable automation framework
- Modular architecture
- Dynamic test data
- Stable locator strategy
- Reusable utilities
- Environment-based configuration
- Readable documentation
- Scalable automation design

### In Scope

The following functionality was included:

- Registration
- Login
- Product Search
- Product Details
- Cart
- Guest Checkout
- Payment
- Order Confirmation
- Product API
- Authentication API
- Cart API
- Invoice API

### Out of Scope

The following areas were intentionally excluded:

- Admin Portal
- Analytics
- Reporting
- TOTP / MFA
- Contact Management
- External Integrations
- Performance Testing
- Security Testing

### Acceptance Criteria

The project was considered complete when:

- Core UI journeys executed successfully.
- API purchase flow executed successfully.
- Automation framework remained reusable.
- Documentation was completed.
- AI prompt history was maintained.
- Git history was maintained.

---

# 3. Risk Analysis Summary

Risk analysis was performed before implementation to prioritize testing activities.

### High Risk Areas

- User Registration
- User Authentication
- Checkout Flow
- Payment Flow
- Invoice Generation
- API Authentication
- Cart Operations

### Medium Risk Areas

- Product Search
- Product Details
- Cart Updates
- UI Validation Messages
- Product Availability

### Low Risk Areas

- UI Layout
- Cosmetic Issues
- Static Content
- Minor Response Formatting

### Risk Mitigation Strategy

The following mitigation strategy was adopted:

- Prioritize automation of business-critical flows.
- Validate both UI and API functionality.
- Execute Smoke Suite before Regression Suite.
- Use reusable automation components.
- Generate dynamic test data.
- Centralize configuration.
- Review AI-generated code before implementation.
- Execute automation multiple times to ensure stability.

---

# 4. Test Strategy Summary

A risk-based testing strategy was adopted to maximize coverage while keeping the framework maintainable.

### Testing Objectives

- Verify end-to-end customer journeys.
- Validate frontend and backend integration.
- Ensure reusable automation.
- Improve execution stability.
- Reduce duplicate code.

### Smoke Testing Scope

Smoke Suite covers:

- Registration
- Login
- Product Search
- Product Details
- Cart
- Guest Checkout
- Payment
- Order Confirmation
- API Registration
- API Login
- Purchase Flow API

### Regression Testing Scope

Regression Suite includes:

- Smoke scenarios
- Negative scenarios
- Boundary validations
- Cart validation
- Product validation
- Authentication validation
- API validation
- Data validation

### UI Testing Strategy

The UI framework follows:

- Page Object Model
- BasePage abstraction
- Explicit waits
- Stable locators
- Reusable page methods
- Dynamic test data

### API Testing Strategy

API automation follows a reusable Service Layer architecture consisting of:

- ApiClient
- AuthAPI
- ProductAPI
- CartAPI
- InvoiceAPI

Bearer token handling, reusable request methods, centralized endpoint management, and dynamic payload generation were implemented to improve maintainability.

### Entry Criteria

Testing begins when:

- Application is available.
- Environment configuration is completed.
- Test data is prepared.
- Framework setup is complete.
- Dependencies are installed.

### Exit Criteria

Testing is considered complete when:

- Smoke Suite passes successfully.
- Purchase Flow API passes successfully.
- Documentation is completed.
- Automation framework is stable.
- Reports are generated.
- Source code is committed to Git.

---

# 5. Manual Testing Summary

Manual testing was performed before automation to understand the application behavior and validate the core business workflows. AI was used to generate the initial test scenarios, which were then manually reviewed and refined to ensure accuracy and alignment with the project scope.

### Manual Test Coverage

The manual testing phase covered the following modules:

- User Registration
- User Login
- Product Search
- Product Details
- Cart Management
- Guest Checkout
- Payment
- Order Confirmation

### Functional Test Coverage

Functional test cases were designed to validate:

- Successful user registration.
- Successful and unsuccessful login attempts.
- Product search using valid and invalid keywords.
- Viewing product details.
- Adding products to the cart.
- Updating cart contents.
- Completing guest checkout.
- Successful payment.
- Order confirmation after checkout.

### Positive Test Scenarios

The following positive scenarios were executed:

- Register with valid user details.
- Login with valid credentials.
- Search for an existing product.
- Open product details successfully.
- Add product to cart.
- Complete guest checkout with valid billing information.
- Complete payment successfully.
- Verify successful order confirmation.

### Negative Test Scenarios

Negative testing included:

- Registration with missing mandatory fields.
- Login with invalid credentials.
- Invalid product search.
- Empty search criteria.
- Invalid checkout information.
- Mandatory field validations.
- Form validation messages.

### Boundary and Edge Case Testing

Boundary and edge case testing covered:

- Duplicate user registration.
- Empty input fields.
- Invalid email formats.
- Invalid password combinations.
- Product searches with no matching results.
- Invalid billing information.
- Cart validation after product updates.

The manual testing phase helped identify critical business scenarios that were later automated using Playwright.

---

# 6. UI Automation Summary

The UI automation framework was designed using the Page Object Model (POM) to improve maintainability, readability, and code reuse.

### Framework Architecture

The framework follows a layered architecture consisting of:

- BasePage
- Page Objects
- Test Layer
- Utilities
- Configuration
- Test Data
- Reports

### Page Object Model Implementation

Separate Page Object classes were created for:

- Login Page
- Registration Page
- Home Page
- Product Page
- Cart Page
- Checkout Page

Each page contains reusable locators and business methods while keeping assertions within the test layer.

### BasePage Implementation

A reusable `BasePage` was implemented to centralize common browser interactions, including:

- Click
- Fill
- Navigation
- Text retrieval
- Explicit waits
- Element visibility checks
- Page load synchronization

This reduced duplicate code across all Page Objects.

### Reusable Utilities

The framework also includes reusable utilities for:

- Dynamic test data generation
- Environment configuration
- Common helper methods
- Playwright configuration
- Browser execution settings

### Dynamic Test Data

Dynamic data generation was implemented to avoid conflicts caused by duplicate registrations.

Unique values are generated during execution for:

- Email address
- User information
- Registration data

### Automated UI Scenarios

The following UI scenarios were automated:

- User Registration
- User Login
- Product Search
- Product Details
- Cart Management
- Guest Checkout
- Payment Flow
- Order Confirmation

### Assertions Implemented

Automation validates:

- Successful page navigation.
- Registration completion.
- Login success.
- Product visibility.
- Product details.
- Cart contents.
- Payment success.
- Order confirmation message.

### Stability Improvements

To reduce flaky executions, the framework includes:

- Explicit waits.
- Page load synchronization.
- Stable locator strategies.
- Reusable helper methods.
- Modular Page Objects.
- Improved synchronization for checkout and payment.

These improvements significantly increased the reliability and maintainability of the UI automation suite.

---

# 7. API Automation Summary

The API automation framework was designed using a reusable Service Layer architecture to separate API implementation from test logic.

### API Framework Components

The framework consists of:

- ApiClient
- AuthAPI
- ProductAPI
- CartAPI
- InvoiceAPI

### ApiClient

`ApiClient` acts as the common HTTP wrapper and provides reusable methods for:

- GET
- POST
- PUT
- PATCH
- DELETE

It also handles:

- Base URL generation
- Request headers
- Bearer token support
- Common request execution

### AuthAPI

Responsible for:

- User Registration
- User Login
- Authentication token extraction
- Bearer token management

### ProductAPI

Responsible for:

- Retrieve all products
- Search products
- Retrieve product details
- Product filtering support

### CartAPI

Responsible for:

- Create cart
- Add products to cart
- Retrieve cart
- Update cart items
- Remove cart items

### InvoiceAPI

Responsible for:

- Invoice generation
- Guest invoice generation
- Reusable invoice payload handling

### Purchase Flow API

The complete Purchase Flow API automation validates the following sequence:

1. Register User
2. Login User
3. Retrieve Products
4. Create Cart
5. Add Product to Cart
6. Verify Cart Contents
7. Generate Invoice

Dynamic test data is generated during execution to ensure that every test run remains isolated and repeatable.

### API Assertions

The automation validates:

- HTTP Status Codes
- Response body
- Authentication token
- Product availability
- Cart contents
- Invoice generation
- Purchase flow completion

The API framework follows reusable design principles, making it easy to extend for additional endpoints in future.

---

# 8. AI Assistance Summary

Artificial Intelligence was used throughout the project to improve productivity while ensuring that every generated output was manually reviewed and validated.

AI was primarily used for:

### Requirement Analysis

- Understanding project scope.
- Identifying functional requirements.
- Preparing Requirement Analysis documentation.

### Risk Analysis

- Identifying business risks.
- Categorizing risks by priority.
- Suggesting mitigation strategies.

### Test Strategy

- Creating Smoke and Regression strategies.
- Defining testing objectives.
- Preparing entry and exit criteria.

### Manual Test Cases

- Generating positive scenarios.
- Generating negative scenarios.
- Identifying edge cases.
- Refining expected results.

### Framework Design

AI assisted in designing:

- Folder structure.
- Page Object Model architecture.
- API Service Layer.
- Reusable BasePage.
- Configuration management.

### Automation Development

AI supported:

- UI automation implementation.
- API automation implementation.
- Reusable utility development.
- Dynamic test data generation.
- Assertion improvements.

### Debugging

AI helped identify and resolve:

- API endpoint issues.
- Payload validation errors.
- Synchronization problems.
- Locator failures.
- Checkout workflow issues.
- Invoice generation failures.

### Documentation

AI assisted in preparing:

- Requirement Analysis
- Risk Analysis
- Test Strategy
- Framework Design
- Project Information
- Automation and Debugging history
- Prompt history
- Documentation and Summary

Throughout the project, AI acted as a productivity and guidance tool, while all generated content was manually reviewed, refined, tested, and validated before being included in the final solution.

---

# 9. Challenges Faced

Throughout the project, several technical and automation challenges were encountered while implementing both UI and API automation. AI-assisted debugging, combined with manual investigation, helped identify the root causes and implement reliable solutions.

### API Challenges

#### Incorrect API Base URL

**Issue**

Registration API returned **HTTP 404 (Resource Not Found).**

**Resolution**

The API base URL was incorrectly configured with an additional `/api` suffix. Updating the environment configuration to use the correct base URL resolved the issue.

---

#### Registration Validation Failure

**Issue**

User Registration API returned **HTTP 422**.

**Resolution**

The generated password had previously appeared in a public password breach list. Dynamic password generation was implemented to create unique, strong passwords for every execution.

---

#### Authentication Handling

**Issue**

Bearer token extraction was inconsistent across authenticated API requests.

**Resolution**

The `AuthAPI` module was enhanced to automatically extract and store the bearer token after successful login, allowing authenticated requests to reuse the same token.

---

#### Cart Endpoint Validation

**Issue**

Add-to-Cart API initially returned **HTTP 404** because of an incorrect endpoint configuration.

**Resolution**

The CartAPI implementation was updated to use the correct endpoint based on the API documentation.

---

#### Invoice Generation

**Issue**

Invoice generation returned **HTTP 422** due to billing address validation.

**Resolution**

The invoice payload was updated to reuse the registered user's address instead of hardcoded values. Additional guest checkout information was also included based on the browser network request.

---

### UI Automation Challenges

#### Checkout Synchronization

**Issue**

The payment confirmation screen rendered quickly, causing intermittent failures while validating the success message.

**Resolution**

Additional synchronization logic and explicit waits were introduced before proceeding to the final confirmation.

---

#### Dynamic Page Rendering

**Issue**

Some elements appeared after asynchronous rendering, resulting in flaky executions.

**Resolution**

Reusable wait methods were implemented within the BasePage class to synchronize page interactions.

---

#### Locator Stability

**Issue**

Certain UI elements were occasionally unavailable during execution.

**Resolution**

Stable selectors, reusable helper methods, and visibility checks were implemented to improve execution stability.

---

### Overall Learning

Resolving these issues improved both the robustness of the automation framework and understanding of API behavior, synchronization techniques, and reusable automation design.

---

# 10. Final Deliverables

The project includes the following completed deliverables.

## Documentation

- PROJECT_CONTEXT.md
- project-info.md
- requirement-analysis.md
- risk-analysis.md
- test-strategy.md
- manual-test-cases.csv
- framework-design.md
- documentation-and-summary.md
- prompts-automation.md
- automation-and-debugging.md

## UI Automation

Implemented UI Smoke Automation for:

- User Registration
- User Login
- Product Search
- Product Details
- Cart Management
- Guest Checkout
- Payment
- Order Confirmation

## API Automation

Implemented reusable API automation for:

- User Registration
- User Login
- Product Retrieval
- Cart Creation
- Add Product to Cart
- Cart Validation
- Invoice Generation
- Complete Purchase Flow

## Framework Components

- Reusable BasePage
- Page Object Model
- ApiClient
- AuthAPI
- ProductAPI
- CartAPI
- InvoiceAPI
- Dynamic Test Data
- Environment Configuration
- Playwright Configuration
- Reusable Utilities

## Version Control

- Git Repository
- Incremental commits
- Meaningful commit messages
- Prompt history maintained throughout development

---

# 11. Project Outcome

The QA AI Practical Assessment successfully demonstrates the use of Artificial Intelligence to assist throughout the software testing lifecycle while maintaining manual ownership of the final solution.

The completed project delivers:

- A reusable Playwright JavaScript automation framework.
- Modular Page Object Model implementation.
- Reusable API Service Layer architecture.
- Dynamic test data generation.
- Stable UI automation.
- End-to-End Purchase Flow API automation.
- Comprehensive project documentation.
- AI prompt history.
- Structured debugging documentation.
- Git-based version control.

The project validates the application's primary customer journey through both UI and API automation while following maintainable software engineering practices.

---

# 12. Conclusion

This project demonstrates how Artificial Intelligence can effectively support Quality Assurance activities without replacing engineering judgement.

AI was used to assist in:

- Requirement Analysis
- Risk Analysis
- Test Planning
- Manual Test Case Design
- Framework Design
- UI Automation
- API Automation
- Test Data Generation
- Debugging
- Documentation

Every AI-generated output was manually reviewed, validated, refined, and tested before being incorporated into the final solution.

The resulting automation framework follows reusable design principles through the use of the Page Object Model, reusable API service layer, centralized configuration, and modular utilities.

By combining AI-assisted planning with manual validation and engineering best practices, the project delivers a maintainable, scalable, and production-oriented automation framework capable of supporting future enhancements and additional application modules.