describe('Galuma Mobile Home Page Tests1', () => {
    beforeEach(() => {
        // Common setup for all test cases
        cy.viewport(360, 480)
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)
    })

    it('TC_GALUMA_MOBILE_HOME_001 - Verify successful navigation to the homepage', () => {
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')
        cy.title().should('not.be.empty')
    })

    it('TC_GALUMA_PAYMENTPLANS_MOBILE_011 - Verify Payment Plans section displays content and View Options button functions correctly', () => {
        // Navigate to homepage and scroll to Payment Plans section
        cy.scrollTo(0, 800)
        cy.wait(2000)

        // Verify Payment Plans section is visible
        cy.get('.financing-container').should('be.visible')

        // Debug: Log the actual content of the financing container
        cy.get('.financing-container').then(($el) => {
            cy.log('Financing container content:', $el.text())
            console.log('Financing container HTML:', $el.html())
        })

        // Verify section content is displayed
        cy.get('.financing-container').within(() => {
            // Check for any text that might be present instead of exact match
            cy.get('*').contains(/payment|financing|plan/i).should('be.visible')
            cy.get('.cta-button').should('be.visible').and('contain.text', 'View Options')
        })

        // Click View Options button and verify navigation
        cy.get('.cta-button').click()
        cy.wait(2000)

        // Verify navigation to payment options page
        cy.url().should('include', '/payments/options')

        // Verify payment options page content
        cy.get('body').should('be.visible')

        // Verify detailed payment information is displayed
        cy.get('body').should('contain.text', 'payment')

        // Go back to homepage
        cy.go('back')
        cy.wait(1000)
    })



})