describe('Galuma Home Tests', () => {
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

    it('TC_GALUMA_HOME_001 - Verify successful navigation to the homepage', () => {
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')
        cy.title().should('not.be.empty')
    })

    

})