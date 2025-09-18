describe('Galuma Desktop Tires By Size Page Tests', () => {
    beforeEach(() => {
        // Common setup for all test cases
        cy.viewport(1475, 750)
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)
    })

    it('TC_GALUMA_TBS_NAV_001 - Verify successful navigation to the shop tires by size page', () => {
        // Verify home page is loaded
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')

        // Click Shop Products
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(1000)

        // Click Tires By Size
        cy.get('[href="/t/s"]').should('be.visible').click()
        cy.wait(2000)

        // Verify navigation to shop tires by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')
    })

})