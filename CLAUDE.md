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
# Install dependencies
npm install

# Open Cypress Test Runner (interactive GUI)
npx cypress open

# Run all tests in headless mode
npx cypress run

# Run a specific test file
npx cypress run --spec "cypress/e2e/signin.spec.cy.js"

# Run tests with specific browser
npx cypress run --browser chrome

# Run tests with custom viewport (desktop mode)
npx cypress run --config viewportWidth=1475,viewportHeight=750

# Run only tests marked with .only
npx cypress run --spec "cypress/e2e/mobilehome1.spec.cy.js"
```

## Architecture and Structure

### Test Organization
- **Test files**: Located in `cypress/e2e/` with `.spec.cy.js` extension
- **Test naming convention**: `TC_GALUMA_[FEATURE]_[MOBILE]_[NUMBER]` format
  - Examples: `TC_GALUMA_SIGNIN_002`, `TC_GALUMA_SEARCHHEADER_MOBILE_002`
- **Viewport settings**: 
  - Mobile tests: `cy.viewport(360, 640)`
  - Desktop tests: `cy.viewport(1475, 750)` (used in signin.spec.cy.js)
- **Test focus**: Use `it.only()` to run single tests during development

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
- **Primary**: CSS selectors targeting specific elements (`.navbar_line_1`, `[data-id="size"]`)
- **Secondary**: Attribute selectors (`input[type="text"]:visible`)
- **Fallback**: Text content matching (`cy.contains('text')`)
- **Complex selectors**: Multi-level CSS selectors for dropdown interactions:
  ```javascript
  // Example from searchbutton.spec.cy.js
  cy.get('#brand-container-mobile-popup > :nth-child(3) > :nth-child(1) > a > img')
  ```

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
- **Authentication**: Handled in `beforeEach()` with HTTP Basic Auth
- **Viewport simulation**: Mobile (`360x640`) or Desktop (`1475x750`) depending on test suite
- **Stabilization waits**: Standard 3-second wait after page loads (`cy.wait(3000)`)
- **Navigation verification**: URL validation and content verification after actions
- **Element interactions**: Comprehensive `.should('be.visible')` checks before clicking
- **Dropdown handling**: Multi-step process with waits between opening and selecting options
- **Error handling**: Tests include negative cases with invalid credentials and empty fields

## Development Notes

### Known Issues and Workarounds
- Some elements require `{ force: true }` option for clicking due to overlays
- Certain icons/links are commented out in tests due to functionality issues
- Social media tests are commented out but preserved for future implementation

### Test Data Management
- Valid test credentials: `madhumini@longwapps.com` / `Test.123`
- Invalid test scenarios use variations of the valid credentials
- Brand testing uses comprehensive brand arrays with selectors and expected URLs

### Test Execution Best Practices
- Use `.only()` during development to focus on specific tests
- Remove `.only()` before committing to ensure full test suite runs
- Monitor browser console for JavaScript errors during test development
- Screenshots are automatically captured in `cypress/screenshots/` for failed tests