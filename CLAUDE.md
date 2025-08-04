# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Cypress test automation project** for end-to-end testing of the Galuma Tires web application (https://dev.galumatires.com/). This is not a web application itself, but a test suite that validates functionality of an external application.

## Technology Stack

- **Testing Framework**: Cypress v14.5.3
- **Target Application**: Galuma Tires web application
- **Authentication**: HTTP Basic Auth required for dev environment (username: `galumadev`, password: `Test.123`)

## Common Commands

```bash
# Open Cypress Test Runner (interactive GUI)
npx cypress open

# Run tests in headless mode
npx cypress run

# Install Cypress
npm install --save-dev cypress
```

## Architecture and Structure

### Test Organization
- **Test files**: Located in `cypress/e2e/` with `.spec.cy.js` extension
- **Test naming**: Follow format `TC_GALUMA_[FEATURE]_[NUMBER]` (e.g. `TC_GALUMA_SIGNIN_002`)
- **Element selection**: Use `data-cy` attributes for reliable element targeting

### Key Files
- `cypress/e2e/signin.spec.cy.js` - Sign-in functionality tests
- `cypress/support/commands.js` - Custom Cypress commands (currently empty)
- `cypress/fixtures/` - Test data files

## Development Patterns

### Test Structure
```javascript
describe('Feature Tests', () => {
  it('TC_GALUMA_[FEATURE]_[NUMBER] - Description', () => {
    cy.visit('https://dev.galumatires.com/', { failOnStatusCode: false })
    // Test steps...
  })
})
```

### Element Selection
- Use `data-cy` attributes: `cy.get('[data-cy="element-name"]')`
- Fallback to text content: `cy.contains('Login')`

### Authentication Handling
- The dev environment requires HTTP Basic Auth
- Use `{ failOnStatusCode: false }` option with `cy.visit()` to handle 401 responses
- Application login uses different credentials than HTTP auth

## Test Data
- HTTP Auth: `galumadev` / `Test.123`
- Application credentials are specified per test case
- Consider using fixtures for larger datasets

## Current Test Coverage
- Sign-in functionality (TC_GALUMA_SIGNIN_002)
- Tests validate successful authentication with valid credentials