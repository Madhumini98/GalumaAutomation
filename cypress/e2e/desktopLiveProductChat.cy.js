describe('Galuma Desktop Live Product Chat Tests', () => {
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

    it('TC_GALUMA_PRODCHAT_GUEST_001 - Verify successful navigation to the product chat', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Select the 2nd random product from the list. Click on the overlay 'View Product' button
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

        // 5. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 6. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')
    })

    it('TC_GALUMA_PRODCHAT_GUEST_002 - Verify product chat section content visibility', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Select the 2nd random product from the list. Click on the overlay 'View Product' button
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

        // 5. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 6. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 7. Home heading visibility and content verification
        cy.get('.home-heading').should('be.visible')
            .and('contain.text', 'Hi there!')
            .and('contain.text', 'how can we help?')

        // 8. "Thank you for contacting us!" visibility check
        cy.get('.d-none').should('be.visible')

        // 9. Search for help section visibility
        cy.get('.chat-home-container > :nth-child(4)').should('be.visible')
    })

    it('TC_GALUMA_PRODCHAT_GUEST_003 - Verify product chat help articles visibility and navigation', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Select the 2nd random product from the list. Click on the overlay 'View Product' button
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

        // 5. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 6. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 7. Visibility on "Search for help"
        cy.get('.chat-home-container > :nth-child(4)').should('be.visible')

        // 8. Check visibility of "How to read my tire age?" and navigate
        cy.get('[data-id="tire-from"]').should('be.visible').click()
        cy.get('.header').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'How to read my tire age?')
        cy.get('#chat-expand > img').click()
        cy.get('.tire-age').scrollIntoView().should('exist')
        cy.get('#chat-reduce > img').click()
        cy.get('#chat-goback').click()

        // 9. Check visibility of "Do we repair tires?" and navigate
        cy.get('[data-id="tire-repair"]').should('be.visible').click()
        cy.get('.header > .title').should('contain.text', 'Do we repair  tires?')
        cy.get('#chat-goback').click()

        // 10. Check visibility of "How to read my tire size?" and navigate
        cy.get('[data-id="tire-size"]').should('be.visible').click()
        cy.get('.header > img').should('be.visible')
        cy.get('.header > :nth-child(2) > span').should('contain.text', 'my tire size?')
        cy.get('#chat-goback').click()

        // 11. Check visibility of "How soon can you ship the tires?" and navigate
        cy.get('[data-id="tire-tracking"]').should('be.visible').click()
        cy.get('.tire-shipping-article').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'How soon can you ship the tires')
        cy.get('#chat-goback').click()

        // 12. Check visibility of "What about return policy?" and navigate
        cy.get('[data-id="tire-return"]').should('be.visible').click()
        cy.get('.header > .title').should('contain.text', 'Return policy')
        cy.get('#chat-goback').click()
    })

    it('TC_GALUMA_PRODCHAT_GUEST_004 - Verify product chat FAQ navigation and content visibility', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Select the 2nd random product from the list. Click on the overlay 'View Product' button
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

        // 5. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 6. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 7. Click on "Search for help"
        cy.get('#lc-search').click()
        cy.wait(1000)

        // 8. Content should be visible
        cy.get('.help-content').should('be.visible')

        // 9. Click on "Frequently asked questions"
        cy.get('[data-id="faq"]').click()
        cy.get('.header > img').should('be.visible')
        cy.get('.title').should('be.visible')

        // 10. Click on expand icon
        cy.get('#chat-expand > img').click()

        // 11. It should display header image
        cy.get('.header > img').should('be.visible')

        // 12. Click on back icon
        cy.get('#chat-goback').click()
    })

    it.only('TC_GALUMA_PRODCHAT_GUEST_005 - Verify product chat help articles visibility and navigation with return to help section', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Select the 2nd random product from the list. Click on the overlay 'View Product' button
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

        // 5. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 6. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 7. Click on "Search for help"
        cy.get('#lc-search').click()

        // 8. Check visibility of "How to read my tire age?" and navigate
        cy.get('[data-id="tire-from"]').should('be.visible').click()
        cy.get('.header').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'How to read my tire age?')
        cy.get('#chat-expand > img').click()
        cy.get('.tire-age').scrollIntoView().should('exist')
        cy.get('#chat-reduce > img').click()
        cy.get('#chat-goback').click()

        // 9. Check visibility of "Do we repair tires?" and navigate
        cy.get('[data-id="tire-repair"]').should('be.visible').click()
        cy.get('.header > .title').should('contain.text', 'Do we repair  tires?')
        cy.get('#chat-goback').click()

        // 10. Check visibility of "How to read my tire size?" and navigate
        cy.get('[data-id="tire-size"]').should('be.visible').click()
        cy.get('.header > img').should('be.visible')
        cy.get('.header > :nth-child(2) > span').should('contain.text', 'my tire size?')
        cy.get('#chat-goback').click()

        // 11. Check visibility of "How soon can you ship the tires?" and navigate
        cy.get('[data-id="tire-tracking"]').should('be.visible').click()
        cy.get('.tire-shipping-article').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'How soon can you ship the tires')
        cy.get('#chat-goback').click()

        // 12. Check visibility of "What are the payment options?" and navigate
        cy.get('[data-id="tire-payment"]').should('be.visible').click()
        cy.get('.header > img').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'Payment options')
        cy.get('#chat-goback').click()

        // 13. Check visibility of "What about return policy?" and navigate
        cy.get('[data-id="tire-return"]').should('be.visible').click()
        cy.get('.header > .title').should('contain.text', 'Return policy')
        cy.get('#chat-goback').click()

        // 14. Check visibility of "How about our customer service?" and navigate
        cy.get('[data-id="customer-service"]').should('be.visible').click()
        cy.get('.header > .img-fluid').should('be.visible')
        cy.get('.title > span').should('contain.text', 'service')
        cy.get('#chat-goback').click()

        // 15. Check visibility of "What about the tire guarantee?" and navigate
        cy.get('[data-id="tire-guarantee"]').should('be.visible').click()
        cy.get('.header > .back').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'My guarantee')
        cy.get('#chat-goback').click()
    })

})