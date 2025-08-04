describe('Home', () => {
    it('Functions', () => {
      cy.viewport(1475, 750)
 
      cy.visit("https://dev.galumatires.com/", {
      auth: {
      username: 'galumadev',
      password: 'Test.123'
      }
      })
 
    cy.contains('Login').click()
    cy.wait(3000)
   
    cy.get('#customer-email').type('user@example.com')
    cy.get('#customer-password').type('Test.123')
   
    cy.get('#sign-in').click()
    cy.wait(2000)
 
    cy.get('.alert-sub-title').should('include.text', 'The email field must be a valid email address.')
 
 
    })
 
  })