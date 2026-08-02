# AI Prompts – Requirements and Planning

## Entry 1 – Requirement Analysis

### Prompt
Summarize this conversation for the QA AI Practical Assessment.

### AI Response Summary
Reviewed the project context along with the Practice Software Testing UI and API documentation. Generated a concise requirement analysis focused on the assignment scope, covering user registration, login, product search, product details, cart management, checkout, invoice generation, invoice verification, and the corresponding API flows. Refined the document by removing out-of-scope modules and adding high-level acceptance criteria.

### Validation Notes
- Reviewed the generated requirement analysis against the assignment document.
- Removed modules that were outside the project scope (Admin, Reports, TOTP, Contact Attachments, etc.).
- Added high-level acceptance criteria (AC1, AC2, and AC3) to align with the assignment requirements.
- Ensured the final requirement analysis only covered the features that would be implemented in the automation project.

-------------------------------------------------------------------------

## Entry 2 – Risk Analysis

### Prompt

Read PROJECT_CONTEXT.md first and use it as the project context.

I am working on the QA AI Practical Assessment.

This is Phase 2 - Risk Analysis.

Do not generate test cases or automation.

Based on the following application:

UI:
https://practicesoftwaretesting.com/

API:
https://api.practicesoftwaretesting.com/api/documentation

Generate a professional QA Risk Analysis document.

Include the following sections:

- Business Risks
- Functional Risks
- UI Risks
- API Risks
- Data Risks
- Security Risks
- Automation Risks
- Risk Prioritization (High / Medium / Low)
- Risk Mitigation Strategy

Keep the analysis focused ONLY on the assignment scope:

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

Exclude admin modules, reporting, analytics, TOTP, contact forms, and other unrelated features.

Return the output in Markdown.

### AI Response Summary

Generated a structured QA Risk Analysis covering business, functional, UI, API, data, security, and automation risks, along with risk prioritization and mitigation strategies. The analysis was scoped to the core user journeys and API flows defined for the assignment while excluding unrelated application areas.

### Validation Notes

- Reviewed the generated Risk Analysis against the finalized Requirement Analysis.
- Verified that all identified risks aligned with the project scope and supported the planned UI and API automation.
- Improved the document by adding a clear link between Risk Prioritization and Smoke/Regression testing.
- Added an additional automation maintenance risk related to UI locator changes and evolving application behavior.
- Ensured the final document remained concise, relevant, and focused on the assignment deliverables.

