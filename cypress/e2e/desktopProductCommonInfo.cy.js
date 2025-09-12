describe('Galuma Desktop Product Common Information Tests', () => {
    beforeEach(() => {
        // Handle uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

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

    it('TC_PAYMENT_OPTIONS_DISPLAY_001 - Verify payment options section displays correctly with supported payment methods including digital wallets and major credit card providers', () => {
        // 1. Navigate to home page (already done in beforeEach)
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Scroll to Qty of tires section
        cy.get('.box.qty > .qty').scrollIntoView()
        cy.wait(1000)

        // 5. Select 1
        cy.get('.d-flex > :nth-child(1) > .btn').should('be.visible').click()
        cy.wait(1000)

        // 6. Select the 2nd random product from the list. Click on the overlay 'View Product' button
        cy.get('#tire-products-container').should('be.visible')
        cy.get('#tire-products-container').within(() => {
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').should('have.length.at.least', 2)
            // Hover over the 2nd product to reveal the overlay button
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
            cy.wait(500) // Wait for overlay to appear
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
                cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
            })
        })
        cy.wait(3000)

        // 7. Scroll to payment options bar
        cy.get('.payment_option').scrollIntoView()
        cy.wait(1000)

        // 8. Check visibility of payment options elements

        // 'Also available with' text visibility
        cy.get('.payment_option > :nth-child(1) > .sec-heading').should('be.visible')

        // 'Stripe' icon
        cy.get('.payment_option > :nth-child(2) > .img-fluid').should('be.visible')

        // 'Amazon pay' icon
        cy.get('.payment_option > :nth-child(3) > .img-fluid').should('be.visible')

        // 'iPay' icon
        cy.get('.payment_option > :nth-child(4) > .img-fluid').should('be.visible')

        // 'Master card' icon
        cy.get('.payment_option > :nth-child(6) > .img-fluid').should('be.visible')

        // 'Visa' icon
        cy.get('.payment_option > :nth-child(7) > .img-fluid').should('be.visible')
    })

})