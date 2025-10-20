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

    it('TC_GALUMA_PRODCHAT_LOGGED_OFFLINE_008 - Verify admin response and offline mode for logged user', () => {
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

        // 7. Click Live Chat icon
        cy.get('#live-chat > .empty-img').click()

        // 8. Contact form visibility check
        cy.get('.contact-form-body').should('be.visible')
        cy.get('.chat-welcome-msg').should('contain.text', 'Welcome to our live Chat! Please fill in the')
            .and('contain.text', ' form below before a starting the chat.')

        // 9. Enter login details
        // Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumini Kodithuwakku')

        // Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini@longwapps.com')

        // 10. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 11. Offline header visibility
        cy.get('.chat-offline-header > :nth-child(2) > b').should('contain.text', "We'll be back online later today")
        cy.wait(2000)

        // 12. Automated messages popup
        cy.get('.chat-assistant').should('contain.text', 'Hi! Thanks for reaching out!')
        cy.get('.chat-assistant').should('contain.text', 'Would you like more information about these tire(s)?')

        // 13. Product banner visibility
        cy.get('.product-banner > .right').should('be.visible')

        // 14. Click 'Yes'
        cy.get('[value="Yes"]').click()

        // 15. Automated messages popup
        cy.get('.chat-assistant > :nth-child(7) > p').should('contain.text', 'Our live chat is currently closed.')

        cy.get('.chat-assistant > :nth-child(8) > .card').should('contain.text', 'Feel free to send us a message')

        // 16. Send us a message button visibility
        cy.get('.card > .btn').should('be.visible')

        // 13. Then, login to the admin side to check the message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // Click "username:" and type
            cy.get('input[type="email"]').click().type('charani@longwapps.com')

            // Click "password:" and type
            cy.get('input[type="password"]').click().type('Test.123')

            // Then, click on login button
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 14. Scroll and click "Messages" tab in the side nav bar
            cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().click({ force: true })
            cy.wait(2000)

            // 15. Click "All Messages" section
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click({ force: true })
            cy.wait(2000)

            // 16. Check visibility of newest message at first and click
            cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                // 17. Verify the message shows "Madhumini Kodithuwakku"
                cy.get('.live-chat-name').should('be.visible')
                    .and('contain.text', 'Madhumini Kodithuwakku')

                cy.get('.last-chat').should('be.visible')
            })

            // Click on the first message to open it
            cy.get('.live-chat-msgs-list').first().click()
            cy.wait(1000)

            // 17. It should display as "Madhumini Kodithuwakku"
            cy.get('p.single-line-text').first().should('be.visible')
                .and('contain.text', 'Madhumini Kodithuwakku')

            // 18. Click on message tab and type
            cy.get('textarea#message-input').click().type('Okay, go ahead')
            cy.wait(1000)
            cy.get('.chat-input-section > button.btn > img').click()
            cy.wait(1000)

            // 18. Check the online/offline mode in admin side live chat
            cy.get('input#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')

            // If it is offline, verify it's not checked
            cy.get('input#liveChatState').should('not.be.checked')

            // Close the chat
            cy.get('.close-chat-btn').click()
            cy.wait(1000)
            cy.contains('p', 'Are you sure you want to close session with the client').should('be.visible')
            cy.get('.chat-close-btn.close-chat-yes').click()
            cy.wait(1000)
            cy.contains('p', 'Chat has been closed').should('be.visible')
        })

    })

    it('TC_GALUMA_PRODCHAT_GUEST_OFFLINE_009 - Verify admin response and offline mode for guest user', () => {
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

        // 7. Click Live Chat icon
        cy.get('#live-chat > .empty-img').click()

        // 8. Contact form visibility check
        cy.get('.contact-form-body').should('be.visible')
        cy.get('.chat-welcome-msg').should('contain.text', 'Welcome to our live Chat! Please fill in the')
            .and('contain.text', ' form below before a starting the chat.')

        // 9. Enter login details
        // Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumini Kodithuwakku')

        // Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini@longwapps.com')

        // 10. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 11. Offline header visibility
        cy.get('.chat-offline-header > :nth-child(2) > b').should('contain.text', "We'll be back online later today")
        cy.wait(2000)

        // 12. Automated messages popup
        cy.get('.chat-assistant').should('contain.text', 'Hi! Thanks for reaching out!')
        cy.get('.chat-assistant').should('contain.text', 'Would you like more information about these tire(s)?')

        // 13. Product banner visibility
        cy.get('.product-banner > .right').should('be.visible')

        // 14. Click 'Yes'
        cy.get('[value="Yes"]').click()

        // 15. Automated messages popup
        cy.get('.chat-assistant > :nth-child(7) > p').should('contain.text', 'Our live chat is currently closed.')

        cy.get('.chat-assistant > :nth-child(8) > .card').should('contain.text', 'Feel free to send us a message')

        // 16. Send us a message button visibility
        cy.get('.card > .btn').should('be.visible')

        // 13. Then, login to the admin side to check the message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // Click "username:" and type
            cy.get('input[type="email"]').click().type('charani@longwapps.com')

            // Click "password:" and type
            cy.get('input[type="password"]').click().type('Test.123')

            // Then, click on login button
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 14. Scroll and click "Messages" tab in the side nav bar
            cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().click({ force: true })
            cy.wait(2000)

            // 15. Click "All Messages" section
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click({ force: true })
            cy.wait(2000)

            // 16. Check visibility of newest message at first and click
            cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                // 17. Verify the message shows "Madhumini Kodithuwakku"
                cy.get('.live-chat-name').should('be.visible')
                    .and('contain.text', 'Madhumini Kodithuwakku')

                cy.get('.last-chat').should('be.visible')
            })

            // Click on the first message to open it
            cy.get('.live-chat-msgs-list').first().click()
            cy.wait(1000)

            // 17. It should display as "Madhumini Kodithuwakku"
            cy.get('p.single-line-text').first().should('be.visible')
                .and('contain.text', 'Madhumini Kodithuwakku')

        })

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

        // 7. Click Live Chat icon
        cy.get('#live-chat > .empty-img').click()

        // 8. Contact form visibility check
        cy.get('.contact-form-body').should('be.visible')
        cy.get('.chat-welcome-msg').should('contain.text', 'Welcome to our live Chat! Please fill in the')
            .and('contain.text', ' form below before a starting the chat.')

        // 9. Enter login details
        // Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumi Kodi')

        // Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini+830@longwapps.com')

        // 10. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 11. Offline header visibility
        cy.get('.chat-offline-header > :nth-child(2) > b').should('contain.text', "We'll be back online later today")
        cy.wait(2000)

        // 12. Automated messages popup
        cy.get('.chat-assistant').should('contain.text', 'Hi! Thanks for reaching out!')
        cy.get('.chat-assistant').should('contain.text', 'Would you like more information about these tire(s)?')

        // 13. Product banner visibility
        cy.get('.product-banner > .right').should('be.visible')

        // 14. Click 'No'
        cy.get('[value="No"]').click()

        // 15. Automated messages popup
        cy.get('.chat-assistant > :nth-child(7) > p').should('contain.text', 'Our live chat is currently closed.')

        cy.get('.chat-assistant > :nth-child(8) > .card').should('contain.text', 'Feel free to send us a message')

        // 16. Send us a message button visibility
        cy.get('.card > .btn').should('be.visible')

        // 13. Then, login to the admin side to check the message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // Click "username:" and type
            cy.get('input[type="email"]').click().type('charani@longwapps.com')

            // Click "password:" and type
            cy.get('input[type="password"]').click().type('Test.123')

            // Then, click on login button
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 14. Scroll and click "Messages" tab in the side nav bar
            cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().click({ force: true })
            cy.wait(2000)

            // 15. Click "All Messages" section
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click({ force: true })
            cy.wait(2000)

            // 16. Check visibility of newest message at first and click
            cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                // 17. Verify the message shows "Madhumi Kodi"
                cy.get('.live-chat-name').should('be.visible')
                    .and('contain.text', 'Madhumi Kodi (Guest)')

                cy.get('.last-chat').should('be.visible')
            })

            // Click on the first message to open it
            cy.get('.live-chat-msgs-list').first().click()
            cy.wait(1000)

            // 17. It should display as "Madhumi Kodi"
            cy.get('p.single-line-text').first().should('be.visible')
                .and('contain.text', 'Madhumi Kodi (Guest)')

            // 18. Click on message tab and type
            cy.get('textarea#message-input').click().type('Okay, go ahead')
            cy.wait(1000)
            cy.get('.chat-input-section > button.btn > img').click()
            cy.wait(1000)

            // 18. Check the online/offline mode in admin side live chat
            cy.get('input#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')

            // If it is offline, verify it's not checked
            cy.get('input#liveChatState').should('not.be.checked')

            // Close the chat
            cy.get('.close-chat-btn').click()
            cy.wait(1000)
            cy.contains('p', 'Are you sure you want to close session with the client').should('be.visible')
            cy.get('.chat-close-btn.close-chat-yes').click()
            cy.wait(1000)
            cy.contains('p', 'Chat has been closed').should('be.visible')
        })

    })

    it('TC_GALUMA_PRODCHAT_LOGGED_OFFLINE_010 - Verify chat close after 10-12 minutes of inactivity', () => {
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

        // 7. Click Live Chat icon
        cy.get('#live-chat > .empty-img').click()

        // 8. Contact form visibility check
        cy.get('.contact-form-body').should('be.visible')
        cy.get('.chat-welcome-msg').should('contain.text', 'Welcome to our live Chat! Please fill in the')
            .and('contain.text', ' form below before a starting the chat.')

        // 9. Enter login details
        // Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumini Kodithuwakku')

        // Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini@longwapps.com')

        // 10. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 11. Offline header visibility
        cy.get('.chat-offline-header > :nth-child(2) > b').should('contain.text', "We'll be back online later today")
        cy.wait(2000)

        // 12. Automated messages popup
        cy.get('.chat-assistant').should('contain.text', 'Hi! Thanks for reaching out!')
        cy.get('.chat-assistant').should('contain.text', 'Would you like more information about these tire(s)?')

        // 13. Product banner visibility
        cy.get('.product-banner > .right').should('be.visible')

        // 14. Click 'No'
        cy.get('[value="Yes"]').click()

        // 15. Automated messages popup
        cy.get('.chat-assistant > :nth-child(7) > p').should('contain.text', 'Our live chat is currently closed.')

        cy.get('.chat-assistant > :nth-child(8) > .card').should('contain.text', 'Feel free to send us a message')

        // 16. Send us a message button visibility
        cy.get('.card > .btn').should('be.visible')

        // 25. Wait 12 minutes to verify chat close functionality after inactivity
        // NOTE: Using cy.wait() for 12 minutes (720000ms) for inactivity timeout
        cy.log('Waiting 12 minutes to test chat inactivity timeout...')
        cy.wait(720000) // 12 minutes = 720,000 milliseconds

        // 26. Chat service message visibility
        cy.get('.chat-service-msg').should('be.visible')
            .and('contain.text', 'Thank you for using our chat service.')
            .and('contain.text', 'This support session is now finished')
            .and('contain.text', 'Would you like to receive a copy of this conversation to')

        // 27. Click on 'Yes' button to receive transcript
        cy.get('.send-transcript-yes').click()
        cy.wait(2000)

        // 28. Success alert display
        cy.get('.alert').should('be.visible')
            .and('contain.text', 'Success!')
            .and('contain.text', 'Transcript sent successfully')

        // Close the alert
        cy.get('.close-alert > .fa').click()
        cy.wait(1000)

        // 29. Survey request visibility
        cy.get('.survey-confirm-content').should('be.visible')
            .and('contain.text', 'Would you like to answer a')
            .and('contain.text', 'short survey to help us')
            .and('contain.text', 'evaluate our live chat service?')

        // 30. Click on 'Yes' button for survey
        cy.get('.yes-survey').click()
        cy.wait(1000)

        // 31. Feedback container visibility
        cy.get('.chat-feedback-container').should('be.visible')

        // Verify thank you message
        cy.get('b').should('contain.text', 'Thank you for using our chat service!')

        // 32. Answer the survey questions

        // Question 1: Is this the first time you have chatted with us about the case?
        cy.get('.chat-feedback-questions > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > [name="previous-chat"]').click()
        cy.wait(500)

        // Question 2: Was the case resolved during the chat?
        cy.get('.chat-feedback-questions > :nth-child(3)').should('be.visible')
        cy.get(':nth-child(1) > [name="resolved"]').click()
        cy.wait(500)

        // Question 3: How would you rate this chat?
        cy.get('.chat-feedback-questions > :nth-child(5)').should('be.visible')
        cy.get(':nth-child(1) > [name="rating"]').click()
        cy.wait(500)

        // 33. Submit the survey
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 34. Success alert for feedback submission
        cy.get('.alert').should('be.visible')
            .and('contain.text', 'Success!')
            .and('contain.text', 'Feedback submitted and mailed successfully')

        // Close the alert
        cy.get('.close-alert > .fa').click()
        cy.wait(1000)

        // 35. Chat end container visibility
        cy.get('.chat-end-content').should('be.visible')
            .and('contain.text', 'We appreciate you chatting')
            .and('contain.text', 'with us. Let us know if you')
            .and('contain.text', 'need any further assistance')

        // 36. Click close button to end chat
        cy.get('.chat-button').click()
        cy.wait(1000)

        // 37. Verify live chat popup has disappeared
        cy.get('.chat-container').should('not.be.visible')
        cy.log('Live chat session closed successfully after inactivity timeout')
    })

    /*
    it('TC_GALUMA_PRODCHAT_LOGGED_OFFLINE_011 - Verify attachments and images functionality in live chat', () => {
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

        // 7. Click Live Chat icon
        cy.get('#live-chat > .empty-img').click()

        // 8. Contact form visibility check
        cy.get('.contact-form-body').should('be.visible')
        cy.get('.chat-welcome-msg').should('contain.text', 'Welcome to our live Chat! Please fill in the')
            .and('contain.text', ' form below before a starting the chat.')

        // 9. Enter login details
        // Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumini Kodithuwakku')

        // Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini@longwapps.com')

        // 10. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 11. Offline header visibility
        cy.get('.chat-offline-header > :nth-child(2) > b').should('contain.text', "We'll be back online later today")
        cy.wait(2000)

        // 12. Automated messages popup
        cy.get('.chat-assistant').should('contain.text', 'Hi! Thanks for reaching out!')
        cy.get('.chat-assistant').should('contain.text', 'Would you like more information about these tire(s)?')

        // 13. Product banner visibility
        cy.get('.product-banner > .right').should('be.visible')

        // 14. Click 'Yes'
        cy.get('[value="Yes"]').click()

        // 15. Automated messages popup
        cy.get('.chat-assistant > :nth-child(7) > p').should('contain.text', 'Our live chat is currently closed.')

        cy.get('.chat-assistant > :nth-child(8) > .card').should('contain.text', 'Feel free to send us a message')

        // 16. Send us a message button visibility
        cy.get('.card > .btn').should('be.visible')

        // 13. Then, login to the admin side to check the message visibility
        // Load attachment fixture as base64 and pass into cy.origin via args
        cy.fixture('Attachment2.png', 'base64').then((attachment2Base64) => {
            cy.origin('https://devadmin.galumatires.com', { args: { attachment2Base64 } }, ({ attachment2Base64 }) => {
                cy.on('uncaught:exception', (e) => {
                    if (e.message.includes('draggable is not a function')) {
                        return false
                    }
                })

                cy.visit('https://devadmin.galumatires.com/')
                cy.wait(3000)

                // Click "username:" and type
                cy.get('input[type="email"]').click().type('charani@longwapps.com')

                // Click "password:" and type
                cy.get('input[type="password"]').click().type('Test.123')

                // Then, click on login button
                cy.get('#submit-login').click()
                cy.wait(3000)

                // 14. Scroll and click "Messages" tab in the side nav bar
                cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().click({ force: true })
                cy.wait(2000)

                // 15. Click "All Messages" section
                cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click({ force: true })
                cy.wait(2000)

                // 16. Check visibility of newest message at first and click
                cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                    // 17. Verify the message shows "Madhumini Kodithuwakku"
                    cy.get('.live-chat-name').should('be.visible')
                        .and('contain.text', 'Madhumini Kodithuwakku')

                    cy.get('.last-chat').should('be.visible')
                })

                // Click on the first message to open it
                cy.get('.live-chat-msgs-list').first().click()
                cy.wait(1000)

                // 17. It should display as "Madhumini Kodithuwakku"
                cy.get('p.single-line-text').first().should('be.visible')
                    .and('contain.text', 'Madhumini Kodithuwakku')

                // 31. Attach image file from admin side (Attachment2.png) using the upload button
                cy.get('.upload > img').should('be.visible').click()
                cy.wait(500)
                cy.log('Step 31a: Upload button clicked')

                // 31b. Select file using base64 data passed from parent context
                // Convert base64 back to buffer for selectFile
                const attachment2Buffer = Cypress.Buffer.from(attachment2Base64, 'base64')
                cy.get('input[type="file"]').first().selectFile({
                    contents: attachment2Buffer,
                    fileName: 'Attachment2.png',
                    mimeType: 'image/png'
                }, { force: true })
                cy.wait(2000) // Wait for file to process/upload
                cy.log('Step 31b: Admin attachment (Attachment2.png) uploaded successfully')

                // 32. Send admin message with attachment
                cy.get('.chat-input-section > button.btn > img').should('be.visible').click()
                cy.wait(2000)
                cy.log('Step 32: Admin message with attachment sent successfully')

                // 33. Verify live chat online/offline toggle is visible
                cy.get('input#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')
                cy.log('Step 33: Live chat state toggle visible')

                // 34. Verify chat is in offline mode
                cy.get('input#liveChatState').should('not.be.checked')
                cy.log('Step 34: Live chat offline mode confirmed')
            }) // End cy.origin block
        })


    })

})
*/

    it('TC_GALUMA_PRODCHAT_LOGGED_OFFLINE_012 - Test live chat fast response', () => {
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

        // 7. Click Live Chat icon
        cy.get('#live-chat > .empty-img').click()

        // 8. Contact form visibility check
        cy.get('.contact-form-body').should('be.visible')
        cy.get('.chat-welcome-msg').should('contain.text', 'Welcome to our live Chat! Please fill in the')
            .and('contain.text', ' form below before a starting the chat.')

        // 9. Enter login details
        // Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumini Kodithuwakku')

        // Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini@longwapps.com')

        // 10. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 11. Offline header visibility
        cy.get('.chat-offline-header > :nth-child(2) > b').should('contain.text', "We'll be back online later today")
        cy.wait(2000)

        // 12. Automated messages popup
        cy.get('.chat-assistant').should('contain.text', 'Hi! Thanks for reaching out!')
        cy.get('.chat-assistant').should('contain.text', 'Would you like more information about these tire(s)?')

        // 13. Product banner visibility
        cy.get('.product-banner > .right').should('be.visible')

        // 14. Click 'Yes'
        cy.get('[value="Yes"]').click()

        // 15. Automated messages popup
        cy.get('.chat-assistant > :nth-child(7) > p').should('contain.text', 'Our live chat is currently closed.')

        cy.get('.chat-assistant > :nth-child(8) > .card').should('contain.text', 'Feel free to send us a message')

        // 16. Send us a message button visibility
        cy.get('.card > .btn').should('be.visible')

        // 13. Then, login to the admin side to check the message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // Click "username:" and type
            cy.get('input[type="email"]').click().type('charani@longwapps.com')

            // Click "password:" and type
            cy.get('input[type="password"]').click().type('Test.123')

            // Then, click on login button
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 14. Scroll and click "Messages" tab in the side nav bar
            cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().click({ force: true })
            cy.wait(2000)

            // 15. Click "All Messages" section
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click({ force: true })
            cy.wait(2000)

            // 16. Check visibility of newest message at first and click
            cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                // 17. Verify the message shows "Madhumini Kodithuwakku"
                cy.get('.live-chat-name').should('be.visible')
                    .and('contain.text', 'Madhumini Kodithuwakku')

                cy.get('.last-chat').should('be.visible')
            })

            // Click on the first message to open it
            cy.get('.live-chat-msgs-list').first().click()
            cy.wait(1000)

            // 17. It should display as "Madhumini Kodithuwakku"
            cy.get('p.single-line-text').first().should('be.visible')
                .and('contain.text', 'Madhumini Kodithuwakku')

            // === FAST RESPONSE SECTION ===

            // Step 9: Open fast response toggle
            cy.get('.fr-header i.fa.fa-chevron-up', { timeout: 10000 }).click()
            cy.wait(1000)

            // Step 10: Send “in stock” fast response
            cy.contains('button', 'in stock').click()
            cy.get('#message-input')
            cy.get('img[src="/images/messages/chat_send.svg"]').click()
            cy.wait(1000)

            /*
            // Fixed Step 11 - Can't process with this step
            cy.get('.user-message > p').should('be.visible').click()
            cy.get('button.msg-delete-btn i.fa-trash-can').click()
            cy.contains('Do you want to delete selected message?').should('be.visible')
            cy.contains('button', 'Yes').click()
            cy.contains('strong', 'Success!').should('be.visible')
            */

            // Step 12: Try "no patch" response and clear
            cy.get('.fr-header i.fa.fa-chevron-up').click()
            cy.wait(500)
            cy.contains('button', 'no patch').click()
            cy.get('#message-input')
            cy.get('#clear-qrs').click()
            cy.get('#message-input').should('have.value', '')

            // Step 13: Create a new fast response
            cy.get('i.fas.fa-plus').click()
            cy.contains('Create/Update fast response').should('be.visible')
            cy.get('[name="name"]', { timeout: 10000 })
                .should('be.visible')
                .click({ force: true })
                .clear()
                .type('Live Chat', { delay: 100, force: true }) // type slower & force typing
            cy.get('[name="message"]').type('This is automated live chat testing process with fast responses')
            cy.get('#response-form > .d-flex > .btn-secondary').click()
            cy.get('#alert-container p').should('be.visible')

            // Step 14: Edit the fast response
            cy.get('i.fas.fa-pencil').click()
            cy.get('#response-select').select('Live Chat')
            cy.get('#response-content')
                .clear()
                .type('This is automated live chat testing process with fast responses on edit option')
            cy.contains('button', 'Save').click()
            cy.get('#alert-container p').should('be.visible')

            // Step 15: Delete the fast response
            cy.get('#load-del-qrs i.fa-trash-can').click()
            cy.get('#del-qr-list').select('Live Chat')
            cy.contains('button', 'Delete').click()
            cy.contains('strong', 'Success!').should('be.visible')


            // Close the chat
            cy.get('.close-chat-btn').click()
            cy.wait(1000)
            cy.contains('p', 'Are you sure you want to close session with the client').should('be.visible')
            cy.get('.chat-close-btn.close-chat-yes').click()
            cy.wait(1000)
            cy.contains('p', 'Chat has been closed').should('be.visible')
        })

    })

    it.only('TC_GALUMA_PRODCHAT_LOGGED_OFFLINE_013 - Verify product information in the live chat', () => {
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

        // 7. Click Live Chat icon
        cy.get('#live-chat > .empty-img').click()

        // 8. Contact form visibility check
        cy.get('.contact-form-body').should('be.visible')
        cy.get('.chat-welcome-msg').should('contain.text', 'Welcome to our live Chat! Please fill in the')
            .and('contain.text', ' form below before a starting the chat.')

        // 9. Enter login details
        // Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumini Kodithuwakku')

        // Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini@longwapps.com')

        // 10. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 11. Offline header visibility
        cy.get('.chat-offline-header > :nth-child(2) > b').should('contain.text', "We'll be back online later today")
        cy.wait(2000)

        // 12. Automated messages popup
        cy.get('.chat-assistant').should('contain.text', 'Hi! Thanks for reaching out!')
        cy.get('.chat-assistant').should('contain.text', 'Would you like more information about these tire(s)?')

        // 13. Product banner visibility
        cy.get('.product-banner > .right').should('be.visible')

        // 14. Click 'Yes'
        cy.get('[value="Yes"]').click()

        // 15. Automated messages popup
        cy.get('.chat-assistant > :nth-child(7) > p').should('contain.text', 'Our live chat is currently closed.')

        cy.get('.chat-assistant > :nth-child(8) > .card').should('contain.text', 'Feel free to send us a message')

        // 16. Send us a message button visibility
        cy.get('.card > .btn').should('be.visible')

        // 13. Then, login to the admin side to check the message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // Click "username:" and type
            cy.get('input[type="email"]').click().type('charani@longwapps.com')

            // Click "password:" and type
            cy.get('input[type="password"]').click().type('Test.123')

            // Then, click on login button
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 14. Scroll and click "Messages" tab in the side nav bar
            cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().click({ force: true })
            cy.wait(2000)

            // 15. Click "All Messages" section
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click({ force: true })
            cy.wait(2000)

            // 16. Check visibility of newest message at first and click
            cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                // 17. Verify the message shows "Madhumini Kodithuwakku"
                cy.get('.live-chat-name').should('be.visible')
                    .and('contain.text', 'Madhumini Kodithuwakku')

                cy.get('.last-chat').should('be.visible')
            })

            // Click on the first message to open it
            cy.get('.live-chat-msgs-list').first().click()
            cy.wait(1000)

            // 17. It should display as "Madhumini Kodithuwakku"
            cy.get('p.single-line-text').first().should('be.visible')
                .and('contain.text', 'Madhumini Kodithuwakku')



        })

    })


})
