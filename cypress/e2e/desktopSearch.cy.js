describe('Galuma Desktop Search Icon Functionality Tests', () => {
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

    it('TC_GALUMA_SEARCHHEADER_001 - Ensure search box displays appropriate results for valid queries', () => {
        cy.get('.sec_side_icon > #open-search-popup').should('be.visible').click()
        cy.get('.popup-content-search-tires > :nth-child(1)').first().should('be.visible').type('Pirelli')
        cy.get('[href="https://dev.galumatires.com/t/b/pirelli"]').should('be.visible').click()
        cy.url().should('include', 'pirelli')
        cy.get('body').should('contain', 'Pirelli')
    })

})