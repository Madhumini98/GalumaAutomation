describe('Galuma Desktop Live Product Chat Guest Tests', () => {
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

            cy.visit('https://devadmin.galumatires.com/', { failOnStatusCode: false })
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

            // 27. Close the chat session
            cy.get('.close-chat-btn').should('be.visible').click()
            cy.wait(1000)

            // 28. Confirm chat closure
            cy.contains('p', 'Are you sure you want to close session with the client').should('be.visible')
            cy.get('.chat-close-btn.close-chat-yes').should('be.visible').click()
            cy.wait(1000)

            // 29. Verify chat closure success message
            cy.contains('p', 'Chat has been closed').should('be.visible')
            cy.log('Chat session closed successfully')
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

        // 13. Product banner visibility - scroll into view to check
        cy.get('.product-banner > .right').scrollIntoView().should('exist')

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

            cy.visit('https://devadmin.galumatires.com/', { failOnStatusCode: false })
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

    it('TC_GALUMA_PRODCHAT_GUEST_ONLINE_014 - Verify product chat initiation with form submission in online mode', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Navigate to Shop Products
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Navigate to Browse All Tires
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Select the 2nd product and click 'View Product' button
        cy.get('#tire-products-container').should('be.visible')
        cy.get('#tire-products-container').within(() => {
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').should('have.length.at.least', 2)
            // Hover over the 2nd product to reveal the overlay button
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
            cy.wait(500)
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
                cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
            })
        })
        cy.wait(3000)

        // 5. Open live chat
        cy.get('.live-chat-icon').should('be.visible').click()
        cy.wait(1000)

        // 6. Verify chat home container is visible
        cy.get('.chat-home-container').should('be.visible')

        // 7. Click on Live Chat icon to open chat form
        cy.get('#live-chat > .empty-img').should('be.visible').click()
        cy.wait(1000)

        // 8. Verify contact form is visible and contains welcome message
        cy.get('.contact-form-body').should('be.visible')
        cy.get('.chat-welcome-msg').should('be.visible')
            .and('contain.text', 'Welcome to our live Chat! Please fill in the')
            .and('contain.text', 'form below before a starting the chat.')

        // 9. Fill in the chat form with user details
        cy.get('#live-chat-name').should('be.visible').click().clear().type('Cypress Online Test User')
        cy.wait(500)

        cy.get('#live-chat-email').should('be.visible').click().clear().type('madhumini+7281@longwapps.com')
        cy.wait(500)

        // 10. Submit the form to start the chat
        cy.get('.chat-button').should('be.visible').click()
        cy.wait(2000)

        // 11. Verify automated greeting messages appear
        cy.get('.chat-assistant').should('be.visible')
            .and('contain.text', 'Hi! Thanks for reaching out!')
        cy.get('.chat-assistant').should('contain.text', 'Would you like more information about these tire(s)?')

        // 12. Verify product banner is visible
        cy.get('.product-banner > .right').should('be.visible')

        // 13. Click 'Yes' to proceed with product information
        cy.get('[value="Yes"]').should('be.visible').click()
        cy.wait(2000)

        // 13a. Verify first automated response message after clicking 'Yes'
        cy.get('.chat-assistant').should('be.visible')
            .and('contain.text', "Great! I'm glad we could identify the item.")

        // 13b. Verify second automated assistance message
        cy.get('.chat-assistant').should('be.visible')
            .and('contain.text', 'How can I assist you with this product?')
            .and('contain.text', 'I\'m here to help!')

        // 14. Verify user information is visible in online mode
        cy.get('.chat-user-info').should('be.visible')
            .and('contain.text', 'Name:')
            .and('contain.text', 'Cypress Test User (Guest)')
            .and('contain.text', 'Email:')
            .and('contain.text', 'madhumini+7281@longwapps.com')

        // 15. Send a test message in the chat
        cy.get('#chatInput').should('be.visible').click().type('This is Cypress Testing Process - Online Mode')
        cy.wait(1000)

        cy.get('.send-btn > .chat-action-img').should('be.visible').click()
        cy.wait(2000)

        // 16. Navigate to admin side to verify message and online mode
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            // 17. Visit admin panel
            cy.visit('https://devadmin.galumatires.com/', { failOnStatusCode: false })
            cy.wait(3000)

            // 18. Login to admin panel
            cy.get('input[type="email"]').should('be.visible').click().type('charani@longwapps.com')
            cy.get('input[type="password"]').should('be.visible').click().type('Test.123')
            cy.get('#submit-login').should('be.visible').click()
            cy.wait(3000)

            // 19. Navigate to Messages section
            cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().should('be.visible').click({ force: true })
            cy.wait(2000)

            // 20. Click on "All Messages" (live-chat)
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').should('be.visible').click({ force: true })
            cy.wait(2000)

            // 21. Verify newest message is visible and contains correct user name
            cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                cy.get('.live-chat-name').should('be.visible')
                    .and('contain.text', 'Cypress Test User (Guest)')

                cy.get('.last-chat').should('be.visible')
            })

            // 22. Open the chat message
            cy.get('.live-chat-msgs-list').first().click()
            cy.wait(1000)

            // 23. Verify chat header displays correct user name
            cy.get('p.single-line-text').first().should('be.visible')
                .and('contain.text', 'Cypress Test User (Guest)')

            // 24. Verify the user's message is visible in chat window
            cy.get('#chat-window-body').should('be.visible')
                .and('contain.text', 'This is Cypress Testing Process - Online Mode')

            // 25. Verify live chat state toggle is visible
            cy.get('input#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')

            // 26. Verify chat is in ONLINE mode (toggle should be checked)
            cy.get('input#liveChatState').should('be.checked')
            cy.log('Live chat is in ONLINE mode - verified')

            // 27. Send admin response to the user
            cy.get('textarea#message-input').should('be.visible').click().type('Hello! This is an automated admin response from Cypress test.')
            cy.wait(1000)

            cy.get('.chat-input-section > button.btn > img').should('be.visible').click()
            cy.wait(2000)

            // 28. Verify admin message was sent
            cy.get('#chat-window-body').should('contain.text', 'Hello! This is an automated admin response from Cypress test.')

            // 29. Close the chat session
            cy.get('.close-chat-btn').should('be.visible').click()
            cy.wait(1000)

            // 30. Confirm chat closure
            cy.contains('p', 'Are you sure you want to close session with the client').should('be.visible')
            cy.get('.chat-close-btn.close-chat-yes').should('be.visible').click()
            cy.wait(1000)

            // 31. Verify chat closure success message
            cy.contains('p', 'Chat has been closed').should('be.visible')
            cy.log('Chat session closed successfully')
        })
    })

})
