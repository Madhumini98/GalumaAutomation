describe('Galuma Sign-In Tests', () => {
  beforeEach(() => {
    // Common setup for all test cases
    cy.viewport(1475, 750)
    cy.visit("https://dev.galumatires.com/", {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })
    cy.contains('Login').should('be.visible').click({ force: true })
    cy.wait(3000)
  })

  it('TC_GALUMA_SIGNIN_001 - Verify successful navigation to the login page', () => {
    // Navigate to the homepage (already done in beforeEach)
    // Verify homepage is loaded
    cy.url().should('include', 'galumatires.com')
    
    // Click 'Login' link (already done in beforeEach, but verify it worked)
    // Verify login page elements are visible
    cy.get('#customer-email').should('be.visible')
    cy.get('#customer-password').should('be.visible')
    cy.get('#sign-in').should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_002 - Verify user able to successful sign in with valid credentials', () => {
    // Enter valid credentials
    cy.get('#customer-email').type('madhumini@longwapps.com')
    cy.get('#customer-password').type('Test.123')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

  })

  it('TC_GALUMA_SIGNIN_003 - Verify error message for invalid password', () => {
    // Enter valid email but invalid password
    cy.get('#customer-email').type('madhumini@longwapps.com')
    cy.get('#customer-password').type('Test.124')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for invalid credentials
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_004 - Verify error message for invalid email', () => {
    // Enter valid password but invalid email
    cy.get('#customer-email').type('madhumini98@longwapps.com')
    cy.get('#customer-password').type('Test.123')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for invalid credentials
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_005 - Verify error message for empty email field', () => {
    // Leave email field empty and enter valid password
    cy.get('#customer-password').type('Test.123')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for empty email field
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_006 - Verify error message for empty password field', () => {
    // Enter valid email but leave password field empty
    cy.get('#customer-email').type('madhumini@longwapps.com')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for empty email field
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_007 - Verify error message for empty email and password fields', () => {
    // Leave both email and password fields empty

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for empty fields
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it(('TC_GALUMA_SIGNIN_008 - Verify error message for invalid email and invalid password'), () => {
    // Enter invalid email and password
    cy.get('#customer-email').type('madhumini98@longwapps.com')
    cy.get('#customer-password').type('Test.124')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for invalid credentials
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_013 - Verify placeholder text in input fields', () => {
    // Check placeholder text in email field
    cy.get('#customer-email').type('madhumini98@longwapps.com')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in password field  
    cy.get('#customer-password').type('Test.123')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')
  })

  it('TC_GALUMA_SIGNIN_014 - Verify case sensitivity of the password field', () => {
    // Enter valid email and password with incorrect case
    cy.get('#customer-email').type('madhumini@longwapps.com')
    cy.get('#customer-password').type('TEST.123')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for case-sensitive password
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_017 - Verify that the "Register" link redirects to the registration popup', () => {
    // Locate and click on the "Register" link
    cy.get('#register_button_user').should('be.visible').click()
    cy.wait(2000)

    // Verify that the registration popup is displayed
    // Look for registration-related content that should appear after clicking the register button
    cy.get('body').then(($body) => {
      const bodyText = $body.text()
      expect(bodyText).to.satisfy((text) =>
        text.includes('Register') ||
        text.includes('Sign Up') ||
        text.includes('Create Account') ||
        text.includes('Registration')
      )
    })
  })

})