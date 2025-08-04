describe('Sign In Tests', () => {
  it('TC_GALUMA_SIGNIN_002 - Verify successful sign in with valid credentials', () => {
    cy.visit('http://localhost:3000')
    
    cy.contains('Login').click()
    
    cy.get('[data-cy="email"]').type('user@example.com')
    cy.get('[data-cy="password"]').type('Test.123')
    
    cy.get('[data-cy="signin-button"]').click()
    
    cy.url().should('not.contain', '/login')
    cy.get('[data-cy="user-menu"]').should('be.visible')
  })
})