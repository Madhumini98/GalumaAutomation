describe('Galuma Create Account Tests for Desktop', () => {
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

  it('TC_USER_REGISTRATION_NAVIGATION_001 - Verify successful navigation to user registration through Login link and Register option displaying New Account popup correctly', () => {
    // Login link is already clicked in beforeEach
    // Verify we're on the login page
    cy.get('#customer-email').should('be.visible')

    // Click 'Register' link
    cy.get('#register_button_user').should('be.visible').click()

    // Wait for popup to appear
    cy.wait(1000)

    // Verify 'New Account' popup is displayed
    cy.get('.black_stripe').should('be.visible')
  })

})