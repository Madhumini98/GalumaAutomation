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

    it('TC_GALUMA_PRODCHAT_GUEST_005 - Verify product chat help articles visibility and navigation with return to help section', () => {
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

    it('TC_GALUMA_PRODCHAT_GUEST_006 - Verify product chat search functionality for tire size', () => {
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

        // 8. Click on search box
        cy.get('#search-help').click()

        // 9. Type "tire size" on search box
        cy.get('#search-help').type('tire size')

        // 10. Click on suggested result
        cy.get('[data-id="tire-size"]').click()
    })

    it('TC_GALUMA_PRODCHAT_GUEST_OFFLINE_007 - Verify email form submission and admin message visibility', () => {
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

        // 7. Visibility of send-email section and content verification
        cy.get('#send-email').should('be.visible')
            .and('contain.text', 'Send us a email')
            .and('contain.text', 'We will be back as soon as possible')

        // 8. Click on "Contact us by Email" to open popup
        cy.get('#send-email').click()
        cy.wait(2000)

        // 9. Verify "Contact us by Email" popup visibility
        cy.get('.contact-form-body').should('be.visible')

        // 10. Verify popup title content
        cy.get('.contact-form-body > .mb-2').should('contain.text', 'Contact us by Email')

        // 11. Verify popup description content
        cy.get('.contact-form-body > :nth-child(3)').should('contain.text', 'We will reply as quickly as possible')

        // 12. Fill in Subject field - try input, textarea selectors as fallback
        cy.get('.contact-form-body').within(() => {

            // 13. Fill in Description field
            cy.get('textarea[placeholder*="Description"], #chat-contact-body, textarea').first().click().type('This is an automated test message sent via Cypress to verify the contact form functionality in the Galuma project. Please ignore this message as it is part of our QA testing process.')

            // 14. Fill in Email field with unregistered email
            cy.get('input[type="email"], input[placeholder*="Email"], #chat-contact-mail, input[type="text"]').last().click().type('madhumini+7334@longwapps.com')

            // 15. Click Submit button
            cy.get('.pt-3 > .btn, button[type="submit"], .btn').click()
        })

        // 16. Verify confirmation popup appears
        cy.get('.survey-confirm-content').should('be.visible')

        // 17. Verify confirmation message content
        cy.get('.survey-confirm-content p > b').should('contain.text', 'Thanks')
            .and('contain.text', 'reach out')
            .and('contain.text', 'shortly')

        // 18. Navigate to admin side to check message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // 19. Login to admin panel
            cy.get('input[type="email"]').type('charani@longwapps.com')
            cy.get('input[type="password"]').type('Test.123')
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 20. Scroll and click "Messages" tab in the side nav bar
            cy.get('[data-baselink="messages"] > .nav-tab-title').click({ force: true })
            cy.wait(2000)

            // 21. Click "All Messages" section (live-chat messages)
            cy.get('a[href="/messages/live-chat"]').click()
            cy.wait(2000)

            // 22. Check visibility of newest message at first
            cy.get('.last-chat.fw-bold').first().should('be.visible').click()

            // 23. It should display as "Customer (Unregistered)"
            cy.get('.single-line-text').first().should('be.visible')
                .and('contain.text', 'Customer (Unregistered)')

            // 24. Message visibility check - verify chat window body
            cy.get('#chat-window-body').should('be.visible')

            // 25. Check the online/offline mode in admin side live chat
            cy.get('#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')

            // 26. Verify live chat status (should be offline for this process to be correct)
            cy.get('#liveChatState').should('not.be.checked')
        })
    })

    it.only('TC_GALUMA_PRODCHAT_LOGGED_OFFLINE_008 - Verify admin response and offline mode for logged user', () => {

        // === STEP 1: Visit Homepage ===
        cy.visit('https://dev.galumatires.com/', {
            auth: { username: 'galumadev', password: 'Test.123' },
            timeout: 120000
        })
        cy.url().should('include', 'galumatires.com')
        cy.get('body', { timeout: 20000 }).should('be.visible')

        // === STEP 2: Click “Shop Products” ===
        cy.get('#shopProducts > .nav-link', { timeout: 20000 })
            .should('be.visible')
            .click()
        cy.wait(2000)

        // === STEP 3: Click “Browse All Tires” ===
        cy.get('.header-section-details > [href="/t"]', { timeout: 20000 })
            .should('be.visible')
            .click()
        cy.wait(3000)

        // === STEP 4: Select 2nd product and open details ===
        cy.get('#tire-products-container', { timeout: 25000 })
            .should('be.visible')
            .within(() => {
                cy.get('div[class*="product"], div[class*="tire"], .product, .tire')
                    .should('have.length.at.least', 2)
                    .eq(1)
                    .trigger('mouseover')
                    .wait(1000)
                    .find('button, a')
                    .contains(/View Product|View Details|View|Quick View/i)
                    .click({ force: true })
            })

        // Wait for product details to appear (with multiple fallback selectors)
        cy.get('.product-details, .product-container, .product-info, .single-product, #product-details', { timeout: 30000 })
            .should('be.visible')
            .and(($el) => {
                expect($el.text().length).to.be.greaterThan(10)
            })

        // === STEP 5: Open live chat ===
        cy.get('.live-chat-icon', { timeout: 15000 }).should('be.visible').click({ force: true })
        cy.wait(1000)

        // === STEP 6: Open Live Chat Form ===
        cy.get('#live-chat > span', { timeout: 10000 }).should('be.visible').click()
        cy.get('.contact-form-body', { timeout: 15000 }).should('be.visible')

        // === STEP 7: Check welcome message ===
        cy.get('.chat-welcome-msg, .chat-offline-header, .chat-header', { timeout: 20000 })
            .should('be.visible')
            .and('contain.text', 'Welcome to our live Chat')

        // === STEP 8: Enter name and email ===
        cy.get('#live-chat-name', { timeout: 15000 })
            .should('be.visible')
            .clear()
            .type('Madhumini Kodithuwakku', { delay: 50 })
        cy.get('#live-chat-email', { timeout: 15000 })
            .should('be.visible')
            .clear()
            .type('madhumini@longwapps.com', { delay: 50 })

        // Click the "Start the chat" button
        cy.get('.chat-button', { timeout: 15000 })
            .should('be.visible')
            .click()
        cy.get('.chat-window, .chat-offline-header', { timeout: 20000 }).should('be.visible')

        // === STEP 9: Verify offline header ===
        cy.get('.chat-offline-header', { timeout: 20000 })
            .should('be.visible')
            .and('contain.text', "We'll be back online later today")
            .and('contain.text', 'Looking for tires? Have a look around!')

        // Input should be visible but disabled
        cy.get('#chatInput', { timeout: 15000 })
            .should('exist')
            .and('be.visible')
            .and('be.disabled')

        // === STEP 10: Verify automated messages ===
        cy.contains('Hi! Thanks for reaching out!', { timeout: 15000 }).should('exist')
        cy.contains('Would you like more information about', { timeout: 15000 }).should('exist')

        // === STEP 11: Click “Yes” for product assistance ===
        cy.get('.product-banner > .right', { timeout: 15000 }).should('be.visible')
        cy.get('[value="Yes"]').should('be.visible').click({ force: true })
        cy.wait(1500)

        // === STEP 12: Verify offline assistant response ===
        cy.get('.chat-assistant', { timeout: 20000 })
            .should('exist')
            .and('contain.text', 'Our live chat is currently closed.')

        // === STEP 13: Verify “Send us a message” card ===
        cy.get('.chat-assistant .card', { timeout: 20000 })
            .should('be.visible')
            .and('contain.text', 'Feel free to send us a message')
            .and('contain.text', 'with your request')

        cy.get('.card > .btn')
            .should('be.visible')
            .and('contain.text', 'Send us a message')

        // === STEP 14: Go to Admin Side ===
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) return false
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.get('input[type="email"]').should('be.visible').type('charani@longwapps.com')
            cy.get('input[type="password"]').should('be.visible').type('Test.123')
            cy.get('#submit-login').click()
            cy.get('body', { timeout: 15000 }).should('be.visible')

            cy.get('[data-baselink="messages"] > .nav-tab-title')
                .scrollIntoView()
                .click({ force: true })
            cy.get('a[href="/messages/live-chat"]').should('be.visible').click({ force: true })
            cy.get('.live-chat-msgs-list', { timeout: 10000 }).should('exist')

            cy.get('.live-chat-msgs-list').first().within(() => {
                cy.get('.live-chat-name').should('contain.text', 'Madhumini Kodithuwakku')
            }).click()

            cy.get('p.single-line-text').first().should('contain.text', 'Madhumini Kodithuwakku')
            cy.get('textarea#message-input').should('be.visible').type('Okay, go ahead', { delay: 50 })
            cy.get('.chat-input-section > button.btn > img').click()

            cy.get('input#liveChatState').should('not.be.checked')
        })

        // === STEP 15: Return to frontend ===
        cy.visit('https://dev.galumatires.com/', {
            auth: { username: 'galumadev', password: 'Test.123' },
            timeout: 120000
        })
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')

        // === STEP 16: Verify chat still offline ===
        cy.get('.live-chat-icon', { timeout: 20000 }).should('be.visible').click({ force: true })
        cy.get('input#chatInput', { timeout: 20000 })
            .should('be.visible')
            .and('be.disabled')
        cy.get('.chat-offline-header', { timeout: 20000 })
            .should('be.visible')
            .and('contain.text', "We'll be back online later today")
    })


})