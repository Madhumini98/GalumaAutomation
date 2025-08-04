describe('Sign In Tests', () => {
  it('TC_GALUMA_SIGNIN_002 - Verify successful sign in with valid credentials', () => {
    cy.visit('https://dev.galumatires.com/', { failOnStatusCode: false })
    
    cy.contains('Login').click()
    
    cy.get('[data-cy="email"]').type('galumadev')
    cy.get('[data-cy="password"]').type('Test.123')
    
    cy.get('[data-cy="signin-button"]').click()
    
    cy.url().should('not.contain', '/login')
    cy.get('[data-cy="user-menu"]').should('be.visible')
  })
})