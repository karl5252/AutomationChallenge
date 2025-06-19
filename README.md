# SAP Fioneer Test Automation Challenge

This repository contains a Playwright test suite developed as part of a QA automation interview challenge for SAP Fioneer.

## Tech Stack

- **Playwright** with TypeScript
- **Node.js**

## Project Structure

Kept intentionally flat and simple. With only three test cases, introducing Page Object Models or fixtures would reduce readability rather than improve it.  
However, `TODO` comments are left in the code to highlight where abstractions (like POM or BasePage) could be introduced as the suite grows.

## Installation

Install dependencies:
```bash
npm install
```
Install browsers
```bash
npx playwright install
```

## Run comamnds

Run all tests:
```bash
npm test
```
Run tests by tag:
```bash
npm run test:smoke    # Quick validation tests
npm run test:nav      # Navigation tests  
npm run test:forms    # Form validation tests
```
Run tests by name pattern:
```bash
npx playwright test --grep='ESG'
```

## Technical Notes

* Selectors rely on semantic HTML and ARIA roles where possible
data-testid attributes recommended for improved test stability (see TODO comments)
* Tags support selective test execution for CI/CD workflows
* Contact form test includes iframe handling for third-party embedded forms
networkidle waits used to handle heavy corporate website loading

## Future Considerations

* Page Object Model implementation when test coverage expands
* Linting and formatting setup for team consistency
* CI/CD pipeline integration
* Test data management for larger test suites