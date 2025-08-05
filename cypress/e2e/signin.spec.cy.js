describe('Galuma Sign-in Tests', () => {
  beforeEach(() => {
    // Common setup for both test cases
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

  it('TC_GALUMA_SIGNIN_001 - Verify user able to successful sign in with valid credentials', () => {
    // Enter valid credentials
    cy.get('#customer-email').type('madhumini@longwapps.com')
    cy.get('#customer-password').type('Test.123')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

  })

  it('TC_GALUMA_SIGNIN_002 - Verify error message for invalid password', () => {
    // Enter valid email but invalid password
    cy.get('#customer-email').type('madhumini@longwapps.com')
    cy.get('#customer-password').type('Test.124')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for invalid credentials
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_003 - Verify error message for invalid email', () => {
    // Enter valid password but invalid email
    cy.get('#customer-email').type('madhumini98@longwapps.com')
    cy.get('#customer-password').type('Test.123')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for invalid credentials
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_004 - Verify error message for empty email field', () => {
    // Leave email field empty and enter valid password
    cy.get('#customer-password').type('Test.123')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for empty email field
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_005 - Verify error message for empty password field', () => {
    // Enter valid email but leave password field empty
    cy.get('#customer-email').type('madhumini@longwapps.com')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for empty email field
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it('TC_GALUMA_SIGNIN_006 - Verify error message for empty email and password fields', () => {
    // Leave both email and password fields empty

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for empty fields
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

  it(('TC_GALUMA_SIGNIN_007 - Verify error message for invalid email and invalid password'), () => {
    // Enter invalid email and password
    cy.get('#customer-email').type('madhumini98@longwapps.com')
    cy.get('#customer-password').type('Test.124')

    // Click sign in button
    cy.get('#sign-in').click()
    cy.wait(2000)

    // Verify error message for invalid credentials
    cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
  })

})