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

    it('TC_CONTACT_POPUP_DISPLAY_001 - Verify contact us popup displays correctly with title, heading, brand logo, and product information when accessed from product page', () => {
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

        // 7. Scroll to contact us section
        cy.get('.link_contactus_img').scrollIntoView()
        cy.wait(1000)

        // 8. Click on contact us image/link
        cy.get('.link_contactus_img').should('be.visible').click()
        cy.wait(2000)

        // 9. Show contact us popup - verify popup container is visible
        cy.get('.contact-popup-content').should('be.visible')

        // 10. Check visibility of popup title
        cy.get('.heading > p > strong').should('be.visible')

        // 11. Check visibility of contact us heading
        cy.get('.product-contact-heading').should('be.visible')

        // 12. Check visibility of brand logo
        cy.get('.contact-brand-logo').should('be.visible')

        // 13. Check visibility of product title
        cy.get('.contact-product-title').should('be.visible')
    })

    it.only('TC_CONTACT_POPUP_INFORMATION_002 - Verify contact us popup displays complete business information including questions prompt, sales hours, phone number, email address, and store location', () => {
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

        // 7. Scroll to contact us section
        cy.get('.link_contactus_img').scrollIntoView()
        cy.wait(1000)

        // 8. Click on contact us image/link
        cy.get('.link_contactus_img').should('be.visible').click()
        cy.wait(2000)

        // 9. Show contact us popup - verify popup container is visible
        cy.get('.contact-popup-content').should('be.visible')

        // 10. Check "Got Questions?" section
        cy.get('.section-left-contact > h4 > strong').should('be.visible').should('contain.text', 'Got Questions?')
        cy.get('.section-left-contact > :nth-child(2)').should('be.visible')
            .should('contain.text', 'Use the contact form or contact us directly')
            .should('contain.text', 'by calling or using our live chat')

        // 11. Check "Direct Sales" section and hours
        cy.get(':nth-child(4) > strong').should('be.visible').should('contain.text', 'Direct Sales')
        cy.get('.section-left-contact > :nth-child(5)').should('be.visible')
            .should('contain.text', 'Monday - Friday 9am to 6pm')
            .should('contain.text', 'Saturday : 10am to 5pm')

        // 12. Check phone number
        cy.get('.btn-black').should('be.visible').should('contain.text', '954-366-5694')

        // 13. Check "Our Email" section
        cy.get(':nth-child(8) > strong').should('be.visible').should('contain.text', 'Our Email')
        cy.get('.section-left-contact > :nth-child(9)').should('be.visible').should('contain.text', 'info@galumatires.com')

        // 14. Check "Store" section and address
        cy.get(':nth-child(11) > strong').should('be.visible').should('contain.text', 'Store')
        cy.get('.section-left-contact > :nth-child(12)').should('be.visible')
            .should('contain.text', '1850 N State Rd 7th')
            .should('contain.text', 'Margate FL, 33063')
    })

})