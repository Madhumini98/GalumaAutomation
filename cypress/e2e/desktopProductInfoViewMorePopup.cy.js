describe('Galuma Desktop Product Information Tests for View More Popups', () => {
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

    it('TC_PRODUCT_DETAILS_POPUP_NAVIGATION_001 - Verify product details popup displays correctly with tire size guidance note and redirects to tire reading help page', () => {
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

        // 7. Click on 'View more details about this item' button
        // Wait for page to load completely
        cy.wait(3000)
        
        // Try text-based selector first (most reliable)
        cy.get('body').then(($body) => {
            if ($body.find(':contains("View more details about this item")').length > 0) {
                cy.contains('View more details about this item').click({ force: true })
            } else if ($body.find(':contains("more details")').length > 0) {
                cy.contains('more details').click({ force: true })
            } else if ($body.find(':contains("View more")').length > 0) {
                cy.contains('View more').click({ force: true })
            } else {
                // Look for the element in the product detail area specifically, not in cart area
                cy.get('.detail_area, .product-detail, .product-info').within(() => {
                    cy.get('.col-6 > .light-green > small, small.light-green, .light-green small, small[class*="green"]')
                      .first()
                      .should('be.visible')
                      .click({ force: true })
                })
            }
        })

        // 8. Popup display correctly
        cy.get('.popup-header').should('be.visible')

        // 9. Check note visibility
        cy.get('.note').should('be.visible')

        // 10. Check the text in the note section
        cy.get('.note').should('contain.text', 'Please make sure this tire size is the one you need before proceeding to checkout.')
        cy.get('.note').should('contain.text', 'Not sure how to read your tire size? Find out here!')

        // 11. Click on the 'Find out here!' button
        cy.get('.note > a').should('be.visible').click()

        // 12. It should direct to the https://dev.galumatires.com/read-my-tires page
        cy.url().should('include', '/read-my-tires')
        cy.location('pathname').should('eq', '/read-my-tires')
    })

})