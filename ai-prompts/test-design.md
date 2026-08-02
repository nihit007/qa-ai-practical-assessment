# AI Prompts – Test Design

## Entry 1 – Test Strategy

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am working on the QA AI Practical Assessment.

This is Phase 3 - Test Strategy.

Do not generate manual test cases or automation code.

Based on the finalized Requirement Analysis and Risk Analysis, generate a professional QA Test Strategy document covering:

- Testing Objectives
- Testing Scope
- Testing Types
- Smoke Test Scope
- Regression Test Scope
- UI Testing Strategy
- API Testing Strategy
- Positive, Negative & Boundary Testing
- Test Environment
- Test Data Strategy
- Entry Criteria
- Exit Criteria
- Deliverables
- Assumptions

Keep the strategy aligned with the Playwright JavaScript UI + API automation framework and limit the scope to:

- User Registration
- Login
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

### AI Response Summary

Generated a comprehensive QA Test Strategy covering testing objectives, project scope, testing types, Smoke and Regression coverage, UI and API testing strategy, Positive/Negative/Boundary testing approach, test environment, test data strategy, entry and exit criteria, deliverables, and project assumptions. The strategy was aligned with the finalized Requirement Analysis and Risk Analysis and focused only on the assignment scope.

### Validation Notes

- Reviewed the generated Test Strategy against the finalized Requirement Analysis and Risk Analysis.
- Verified that the strategy aligned with the planned Playwright JavaScript UI and API automation framework.
- Improved document readability by restructuring sections, adding clear headings and bullet points, and separating In Scope and Out of Scope items.
- Confirmed that the Smoke and Regression strategy aligned with the identified project risks and automation objectives.
- Ensured the document remained focused on the assignment scope and excluded unrelated application features.

-----------------------------------------------------------------------

## Entry 2 – Manual Test Cases

### Prompt

Read PROJECT_CONTEXT.md and, for Phase 4 – Manual Test Case Design, generate 8 CSV-format manual test cases with the following columns:

- Test Case ID
- Module
- Test Scenario
- Priority
- Test Type
- Preconditions
- Test Data
- Test Steps
- Expected Result
- Automation Candidate

Cover only the following modules:

- User Registration
- Login
- Product Search
- Product Details
- Cart Management
- Checkout
- Invoice Generation
- Invoice Verification

Include a balanced mix of positive, negative, boundary, UI, and API validation scenarios.

Do not generate automation code.

The output should be practical for later Playwright automation and should not exceed 8 test cases.

### AI Response Summary

Generated eight CSV-ready manual test cases covering the required functional areas within the project scope. The test suite includes positive, negative, boundary, UI, and API validation scenarios with complete test case information such as preconditions, test data, execution steps, expected results, and automation suitability.

### Validation Notes

- Reviewed all generated test cases against the finalized Requirement Analysis, Risk Analysis, and Test Strategy.
- Removed assumptions that were not supported by the application (such as email verification, account lockout, and payment gateway decline scenarios).
- Updated invoice validation to use dynamically generated Order IDs instead of hardcoded values.
- Added an **Automation Status** column to improve traceability between manual and automated tests.
- Ensured the final test suite aligns with the planned Playwright UI and API automation scope.