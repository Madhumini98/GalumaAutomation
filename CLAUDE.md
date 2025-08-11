# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Cypress test automation project** for end-to-end testing of the Galuma Tires web application (https://dev.galumatires.com/). This is not a web application itself, but a test suite that validates functionality of an external application.

## Technology Stack

- **Testing Framework**: Cypress v14.5.4
- **Target Application**: Galuma Tires web application
- **Authentication**: HTTP Basic Auth required for dev environment (username: `galumadev`, password: `Test.123`)

## Common Commands

```bash
# Open Cypress Test Runner (interactive GUI)
npx cypress open

# Run all tests in headless mode
npx cypress run

# Run a specific test file
npx cypress run --spec "cypress/e2e/signin.spec.cy.js"

# Run tests with specific browser
npx cypress run --browser chrome

# Install dependencies
npm install
```

## Architecture and Structure

### Test Organization
- **Test files**: Located in `cypress/e2e/` with `.spec.cy.js` extension
- **Test naming convention**: `TC_GALUMA_[FEATURE]_[MOBILE]_[NUMBER]` format
  - Examples: `TC_GALUMA_SIGNIN_002`, `TC_GALUMA_SEARCHHEADER_MOBILE_002`
- **Mobile testing**: Tests use `cy.viewport(360, 640)` for mobile simulation

### Configuration Details
The `cypress.config.js` includes optimized timeouts for the Galuma application:
- Default command timeout: 15 seconds
- Page load timeout: 60 seconds  
- Retry configuration: 2 retries in run mode, 0 in open mode

### Test Structure Pattern
```javascript
describe('Feature Tests', () => {
    beforeEach(() => {
        cy.viewport(360, 640) // Mobile viewport for mobile tests
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000) // Standard wait for page stabilization
    })
    
    it('TC_GALUMA_[FEATURE]_[NUMBER] - Description', () => {
        // Test implementation
    })
})
```

### Element Selection Strategy
- Primary: CSS selectors targeting specific elements (`.navbar_line_1`, `[data-id="size"]`)
- Secondary: Attribute selectors (`input[type="text"]:visible`)
- Fallback: Text content matching (`cy.contains('text')`)

## Current Test Coverage

### Test Files Overview
- `signin.spec.cy.js` - User authentication flows
- `mobilehome.spec.cy.js` - Mobile homepage functionality and navigation
- `mobilehome1.spec.cy.js` - Additional mobile homepage tests
- `searchbutton.spec.cy.js` - Search functionality testing

### Key Test Scenarios
- **Homepage Navigation**: Basic page load and visibility verification
- **Search Functionality**: Search box interaction and result validation
- **Tire Shopping**: Size-based tire search and brand selection
- **Mobile Responsiveness**: All tests designed for mobile viewport (360x640)

### Common Test Patterns
- Authentication handled in `beforeEach()` with HTTP Basic Auth
- Mobile viewport simulation for all tests
- 3-second stabilization wait after page loads
- URL validation and content verification after navigation actions