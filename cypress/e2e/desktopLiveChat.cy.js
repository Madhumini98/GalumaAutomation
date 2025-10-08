describe('Galuma Desktop Live Chat Tests', () => {
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

    it('TC_GALUMA_LIVECHAT_GUEST_001 - Verify successful navigation to the live chat', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 4. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')
    })

    it('TC_GALUMA_LIVECHAT_GUEST_002 - Verify live chat section content visibility', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 4. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 5. Home heading visibility and content verification
        cy.get('.home-heading').should('be.visible')
            .and('contain.text', 'Hi there!')
            .and('contain.text', 'how can we help?')

        // 6. "Thank you for contacting us!" visibility check
        cy.get('.d-none').should('be.visible')

        // 7. Search for help section visibility
        cy.get('.chat-home-container > :nth-child(4)').should('be.visible')
    })

    it('TC_GALUMA_LIVECHAT_GUEST_003 - Verify live chat help articles visibility and navigation', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 4. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 5. Visibility on "Search for help"
        cy.get('.chat-home-container > :nth-child(4)').should('be.visible')

        // 6. Check visibility of "How to read my tire age?" and navigate
        cy.get('[data-id="tire-from"]').should('be.visible').click()
        cy.get('.header').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'How to read my tire age?')
        cy.get('#chat-expand > img').click()
        cy.get('.tire-age').scrollIntoView().should('exist')
        cy.get('#chat-reduce > img').click()
        cy.get('#chat-goback').click()

        // 7. Check visibility of "Do we repair tires?" and navigate
        cy.get('[data-id="tire-repair"]').should('be.visible').click()
        cy.get('.header > .title').should('contain.text', 'Do we repair  tires?')
        cy.get('#chat-goback').click()

        // 8. Check visibility of "How to read my tire size?" and navigate
        cy.get('[data-id="tire-size"]').should('be.visible').click()
        cy.get('.header > img').should('be.visible')
        cy.get('.header > :nth-child(2) > span').should('contain.text', 'my tire size?')
        cy.get('#chat-goback').click()

        // 9. Check visibility of "How soon can you ship the tires?" and navigate
        cy.get('[data-id="tire-tracking"]').should('be.visible').click()
        cy.get('.tire-shipping-article').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'How soon can you ship the tires')
        cy.get('#chat-goback').click()

        // 10. Check visibility of "What about return policy?" and navigate
        cy.get('[data-id="tire-return"]').should('be.visible').click()
        cy.get('.header > .title').should('contain.text', 'Return policy')
        cy.get('#chat-goback').click()
    })

    it('TC_GALUMA_LIVECHAT_GUEST_004 - Verify live chat FAQ navigation and content visibility', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()
        cy.wait(2000)

        // 4. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 5. Click on "Search for help"
        cy.get('#lc-search').click()
        cy.wait(1000)

        // 6. Content should be visible
        cy.get('.help-content').should('be.visible')

        // 7. Click on "Frequently asked questions"
        cy.get('[data-id="faq"]').click()
        cy.get('.header > img').should('be.visible')
        cy.get('.title').should('be.visible')

        // 8. Click on expand icon
        cy.get('#chat-expand > img').click()

        // 9. It should display header image
        cy.get('.header > img').should('be.visible')

        // 10. Click on back icon
        cy.get('#chat-goback').click()
    })

    it('TC_GALUMA_LIVECHAT_GUEST_005 - Verify live chat help articles visibility and navigation with return to help section', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 4. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 5. Click on "Search for help"
        cy.get('#lc-search').click()

        // 6. Check visibility of "How to read my tire age?" and navigate
        cy.get('[data-id="tire-from"]').should('be.visible').click()
        cy.get('.header').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'How to read my tire age?')
        cy.get('#chat-expand > img').click()
        cy.get('.tire-age').scrollIntoView().should('exist')
        cy.get('#chat-reduce > img').click()
        cy.get('#chat-goback').click()

        // 7. Check visibility of "Do we repair tires?" and navigate
        cy.get('[data-id="tire-repair"]').should('be.visible').click()
        cy.get('.header > .title').should('contain.text', 'Do we repair  tires?')
        cy.get('#chat-goback').click()

        // 8. Check visibility of "How to read my tire size?" and navigate
        cy.get('[data-id="tire-size"]').should('be.visible').click()
        cy.get('.header > img').should('be.visible')
        cy.get('.header > :nth-child(2) > span').should('contain.text', 'my tire size?')
        cy.get('#chat-goback').click()

        // 9. Check visibility of "How soon can you ship the tires?" and navigate
        cy.get('[data-id="tire-tracking"]').should('be.visible').click()
        cy.get('.tire-shipping-article').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'How soon can you ship the tires')
        cy.get('#chat-goback').click()

        // 10. Check visibility of "What are the payment options?" and navigate
        cy.get('[data-id="tire-payment"]').should('be.visible').click()
        cy.get('.header > img').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'Payment options')
        cy.get('#chat-goback').click()

        // 11. Check visibility of "What about return policy?" and navigate
        cy.get('[data-id="tire-return"]').should('be.visible').click()
        cy.get('.header > .title').should('contain.text', 'Return policy')
        cy.get('#chat-goback').click()

        // 12. Check visibility of "How about our customer service?" and navigate
        cy.get('[data-id="customer-service"]').should('be.visible').click()
        cy.get('.header > .img-fluid').should('be.visible')
        cy.get('.title > span').should('contain.text', 'service')
        cy.get('#chat-goback').click()

        // 13. Check visibility of "What about the tire guarantee?" and navigate
        cy.get('[data-id="tire-guarantee"]').should('be.visible').click()
        cy.get('.header > .back').should('be.visible')
        cy.get('.header > .title').should('contain.text', 'My guarantee')
        cy.get('#chat-goback').click()
    })

    it('TC_GALUMA_LIVECHAT_GUEST_006 - Verify live chat search functionality for tire size', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 4. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 5. Click on "Search for help"
        cy.get('#lc-search').click()

        // 6. Click on search box
        cy.get('#search-help').click()

        // 7. Type "tire size" on search box
        cy.get('#search-help').type('tire size')

        // 8. Click on suggested result
        cy.get('[data-id="tire-size"]').click()
    })

    it('TC_GALUMA_LIVECHAT_GUEST_007 - Verify live chat email contact form submission and admin message visibility', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()

        // 4. Verify chat home container visible
        cy.get('.chat-home-container').should('be.visible')

        // 5. Visibility of send-email section and content verification
        cy.get('#send-email').should('be.visible')
            .and('contain.text', 'Send us a email')
            .and('contain.text', 'We will be back as soon as possible')

        // 6. Click on "Contact us by Email" to open popup
        cy.get('#send-email').click()

        // 7. Verify "Contact us by Email" popup visibility
        cy.get('.contact-form-body').should('be.visible')

        // 8. Verify popup title content
        cy.get('.contact-form-body > .mb-2').should('contain.text', 'Contact us by Email')

        // 9. Verify popup description content
        cy.get('.contact-form-body > :nth-child(3)').should('contain.text', 'We will reply as quickly as possible')

        // 10. Fill in Subject field
        cy.get('#chat-contact-subject').click().type('Automated Testing - Guest')

        // 11. Fill in Description field
        cy.get('#chat-contact-body').click().type('This is an automated test message sent via Cypress to verify the contact form functionality in the Galuma project. Please ignore this message as it is part of our QA testing process.')

        // 12. Fill in Email field with unregistered email
        cy.get('#chat-contact-mail').click().type('madhumini+7334@longwapps.com')

        // 13. Click Submit button
        cy.get('.pt-3 > .btn').click()

        // 14. Verify confirmation popup appears
        cy.get('.survey-confirm-content').should('be.visible')

        // 15. Verify confirmation message content
        cy.get('.survey-confirm-content p > b').should('contain.text', 'Thanks')
            .and('contain.text', 'reach out')
            .and('contain.text', 'shortly')

        // 16. Navigate to admin side to check message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // 17. Login to admin panel
            cy.get('input[type="email"]').type('charani@longwapps.com')
            cy.get('input[type="password"]').type('Test.123')
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 18. Scroll and click "Messages" tab in the side nav bar
            cy.get('[data-baselink="messages"] > .nav-tab-title').click({ force: true })
            cy.wait(2000)

            // 19. Click "All Messages" section (live-chat messages)
            cy.get('a[href="/messages/live-chat"]').click()
            cy.wait(2000)

            // 20. Check visibility of newest message at first
            cy.get('.last-chat.fw-bold').first().should('be.visible').click()

            // 21. It should display as "Customer (Unregistered)"
            cy.get('.single-line-text').first().should('be.visible')
                .and('contain.text', 'Customer (Unregistered)')

            // 22. Message visibility check - verify chat window body
            cy.get('#chat-window-body').should('be.visible')

            // 23. Check the online/offline mode in admin side live chat
            cy.get('#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')

            // 24. Verify live chat status (should be offline for this process to be correct)
            cy.get('#liveChatState').should('not.be.checked')
        })
    })

    it('TC_GALUMA_LIVECHAT_GUEST_008 - Verify live chat initiation with form submission', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()
        cy.wait(1000)

        // 4. Click Live chat icon in the footer
        cy.get('#live-chat').click()
        cy.wait(1000)

        // 5. Verify live chat container visible
        cy.get('.contact-form-body').should('be.visible')

        // 6. Check welcome message
        cy.get('.chat-welcome-msg').should('be.visible')
            .and('contain.text', 'Welcome to our live Chat! Please fill in the form below before a starting the chat.')

        // 7. Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Cypress Test User')

        // 8. Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini+7291@longwapps.com')

        // 9. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 10. Offline header should be visible
        cy.get('.chat-offline-header').should('be.visible')
            .and('contain.text', "We'll be back online later today")
            .and('contain.text', 'Looking for tires? Have a look around! Happy to assist if you have any questions.')

        // 11. Write a message to test the scenario
        cy.get('#chatInput').click().type('This is Cypress Testing Process')
        cy.wait(1000)
        cy.get('.send-btn').click()
        cy.wait(1000)

        // 12. Check the following messages visibility
        cy.get('.chat-assistant > :nth-child(3) > p').should('be.visible')
            .and('contain.text', 'Hi! Thanks for reaching out!')

        cy.get('.chat-assistant > :nth-child(4) > p').should('be.visible')
            .and('contain.text', 'Our live chat is currently closed.')

        // 13. Verify the card content
        cy.get('.card').should('be.visible')
            .and('contain.text', 'Feel free to send us a message')
            .and('contain.text', 'with your request')
            .and('contain.text', 'Send us a message')

        // 14. Click on "Send us a message" button
        cy.get('.card > .btn').click()
        cy.wait(1000)

        // 15. Contact us by Email form visibility
        cy.get('.contact-form-body').should('be.visible')

        // 16. Click on "Subject:" and write subject
        cy.get('#chat-contact-subject').click().type('Cypress Automation Test')

        // 17. Click on "Description:" and write description
        cy.get('#chat-contact-body').click().type('This is an automated test message for the Galuma project contact form. Testing form submission functionality via Cypress.')

        // 18. Click on Submit button
        cy.get('.pt-3 > .btn').click()
        cy.wait(2000)

        // 19. Survey confirm content visibility
        cy.get('.survey-confirm-content').should('be.visible')

        // 20. Navigate to admin side to check message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // 21. Login to admin panel - Enter username
            cy.get('input[type="email"]').click().type('charani@longwapps.com')

            // 22. Enter password
            cy.get('input[type="password"]').click().type('Test.123')

            // 23. Click on login button
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 24. Scroll and click "Messages" tab in the side nav bar
            cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().click({ force: true })
            cy.wait(2000)

            // 25. Click "All Messages" section (live-chat link)
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click()
            cy.wait(2000)

            // 26. Check visibility of newest message at first and click
            cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                // 27. Verify the message shows "Cypress Test User (Guest)"
                cy.get('.live-chat-name').should('be.visible')
                    .and('contain.text', 'Cypress Test User (Guest)')

                cy.get('.last-chat').should('be.visible')
            })

            // 28. Click on the first message to open it
            cy.get('.live-chat-msgs-list').first().click()
            cy.wait(1000)

            // 29. It should display as "Cypress Test User (Guest)" in the chat header
            cy.get('p.single-line-text').first().should('be.visible')
                .and('contain.text', 'Cypress Test User (Guest)')

            // 30. Check the online/offline mode in admin side live chat
            cy.get('input#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')

            // 31. If it is offline, this process is correct
            cy.get('input#liveChatState').should('not.be.checked')
        })
    })

    it('TC_GALUMA_LIVECHAT_LOGGED_009 - Verify live chat initiation with form submission with logged users', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()
        cy.wait(1000)

        // 4. Click Live chat icon in the footer
        cy.get('#live-chat').click()
        cy.wait(1000)

        // 5. Verify live chat container visible
        cy.get('.contact-form-body').should('be.visible')

        // 6. Check welcome message
        cy.get('.chat-welcome-msg').should('be.visible')
            .and('contain.text', 'Welcome to our live Chat! Please fill in the form below before a starting the chat.')

        // 7. Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumini Kodithuwakku')

        // 8. Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini@longwapps.com')

        // 9. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 10. Offline header should be visible
        cy.get('.chat-offline-header').should('be.visible')
            .and('contain.text', "We'll be back online later today")
            .and('contain.text', 'Looking for tires? Have a look around! Happy to assist if you have any questions.')

        // 11. Write a message to test the scenario
        cy.get('#chatInput').click().type('This is Cypress Testing Process')
        cy.wait(1000)
        cy.get('.send-btn').click()
        cy.wait(1000)

        // 12. Check the following messages visibility
        cy.get('.chat-assistant > :nth-child(3) > p').should('be.visible')
            .and('contain.text', 'Hi! Thanks for reaching out!')

        cy.get('.chat-assistant > :nth-child(4) > p').should('be.visible')
            .and('contain.text', 'Our live chat is currently closed.')

        // 13. Verify the card content
        cy.get('.card').should('be.visible')
            .and('contain.text', 'Feel free to send us a message')
            .and('contain.text', 'with your request')
            .and('contain.text', 'Send us a message')

        // 14. Click on "Send us a message" button
        cy.get('.card > .btn').click()
        cy.wait(1000)

        // 15. Contact us by Email form visibility
        cy.get('.contact-form-body').should('be.visible')

        // 16. Click on "Subject:" and write subject
        cy.get('#chat-contact-subject').click().type('Cypress Automation Test')

        // 17. Click on "Description:" and write description
        cy.get('#chat-contact-body').click().type('This is an automated test message for the Galuma project contact form. Testing form submission functionality via Cypress.')

        // 18. Click on Submit button
        cy.get('.pt-3 > .btn').click()
        cy.wait(2000)

        // 19. Survey confirm content visibility
        cy.get('.survey-confirm-content').should('be.visible')

        // 20. Navigate to admin side to check message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // 21. Login to admin panel - Enter username
            cy.get('input[type="email"]').click().type('charani@longwapps.com')

            // 22. Enter password
            cy.get('input[type="password"]').click().type('Test.123')

            // 23. Click on login button
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 24. Scroll and click "Messages" tab in the side nav bar
            cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().click({ force: true })
            cy.wait(2000)

            // 25. Click "All Messages" section (live-chat link)
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click()
            cy.wait(2000)

            // 26. Check visibility of newest message at first and click
            cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                // 27. Verify the message shows "Madhumini Kodithuwakku"
                cy.get('.live-chat-name').should('be.visible')
                    .and('contain.text', 'Madhumini Kodithuwakku')

                cy.get('.last-chat').should('be.visible')
            })

            // 28. Click on the first message to open it
            cy.get('.live-chat-msgs-list').first().click()
            cy.wait(1000)

            // 29. It should display as "Madhumini Kodithuwakku" in the chat header
            cy.get('p.single-line-text').first().should('be.visible')
                .and('contain.text', 'Madhumini Kodithuwakku')

            // 30. Check the online/offline mode in admin side live chat
            cy.get('input#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')

            // 31. If it is offline, this process is correct
            cy.get('input#liveChatState').should('not.be.checked')

        })

    })

    it('TC_GALUMA_LIVECHAT_LOGGED_010 - Verify admin response in live chat and check offline mode with logged user', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()
        cy.wait(1000)

        // 4. Click Live chat icon in the footer
        cy.get('#live-chat').click()
        cy.wait(1000)

        // 5. Verify live chat container visible
        cy.get('.contact-form-body').should('be.visible')

        // 6. Check welcome message
        cy.get('.chat-welcome-msg').should('be.visible')
            .and('contain.text', 'Welcome to our live Chat! Please fill in the form below before a starting the chat.')

        // 7. Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumini Kodithuwakku')

        // 8. Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini@longwapps.com')

        // 9. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 10. Offline header should be visible
        cy.get('.chat-offline-header').should('be.visible')
            .and('contain.text', "We'll be back online later today")
            .and('contain.text', 'Looking for tires? Have a look around! Happy to assist if you have any questions.')

        // 11. Write a message to test the scenario
        cy.get('#chatInput').click().type('This is Cypress Testing Process')
        cy.wait(1000)
        cy.get('.send-btn').click()
        cy.wait(1000)

        // 12. Check the following messages visibility
        cy.get('.chat-assistant > :nth-child(3) > p').should('be.visible')
            .and('contain.text', 'Hi! Thanks for reaching out!')

        cy.get('.chat-assistant > :nth-child(4) > p').should('be.visible')
            .and('contain.text', 'Our live chat is currently closed.')

        cy.get('.card').should('be.visible')
            .and('contain.text', 'Feel free to send us a message')
            .and('contain.text', 'with your request')
            .and('contain.text', 'Send us a message')

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
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click()
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
            cy.get('/images/messages/chat_send.svg').click()
            cy.wait(1000)

            // 18. Check the online/offline mode in admin side live chat
            cy.get('input#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')

            // If it is offline, verify it's not checked
            cy.get('input#liveChatState').should('not.be.checked')
        })

        // 19. Then again login to homepage
        cy.url().should('include', 'galumatires.com')

        // 20. Verify page is visible
        cy.get('body').should('be.visible')

        // 21. Click live chat icon
        cy.get('.live-chat-icon').click()
        cy.wait(1000)

        // 22. Now live chat should provide the ability to message in user side
        cy.get('input#chatInput').should('be.visible')

        // 23. If it is offline, this process is correct
        cy.get('.chat-offline-header').should('be.visible')
    })

    it('TC_GALUMA_LIVECHAT_LOGGED__ONLINE_011 - Verify admin response in live chat and check online mode with logged user', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()
        cy.wait(1000)

        // 4. Click Live chat icon in the footer
        cy.get('#live-chat').click()
        cy.wait(1000)

        // 5. Verify live chat container visible
        cy.get('.contact-form-body').should('be.visible')

        // 6. Check welcome message
        cy.get('.chat-welcome-msg').should('be.visible')
            .and('contain.text', 'Welcome to our live Chat! Please fill in the form below before a starting the chat.')

        // 7. Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Madhumini Kodithuwakku')

        // 8. Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini@longwapps.com')

        // 9. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 10. User info should be visible (online mode)
        cy.get('.chat-user-info').should('be.visible')
            .and('contain.text', "Name:Madhumini Kodithuwakku")
            .and('contain.text', 'Email:madhumini@longwapps.com')

        // 11. Write a message to test the scenario
        cy.get('#chatInput').click().type('This is Cypress Testing Process')
        cy.wait(1000)
        cy.get('.send-btn > .chat-action-img').click()
        cy.wait(1000)

        // 12. In online mode, no offline popup appears
        

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
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click()
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

            // If it is online, verify it's checked
            cy.get('input#liveChatState').should('be.checked')
        })

        // 19. Navigate back to homepage
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // 20. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 21. Verify page is visible
        cy.get('body').should('be.visible')

        // 22. Check if live chat container is already visible or click icon to open
        cy.get('body').then(($body) => {
            if ($body.find('.chat-container').is(':visible')) {
                // Chat is already open, no need to click
                cy.log('Chat is already open')
            } else {
                // Chat is closed, click icon to open
                cy.get('.live-chat-icon').click({ force: true })
                cy.wait(1000)
            }
        })

        // 23. Verify chat assistant is visible (online mode)
        cy.get('.chat-assistant').should('be.visible')

        // 24. Now live chat should provide the ability to message in user side
        cy.get('input#chatInput').should('be.visible')

        // 25. If it is online, the chat should be functional (offline header should be hidden)
        cy.get('.chat-offline-header').should('not.be.visible')
    })

    it('TC_GALUMA_LIVECHAT_GUEST_ONLINE_012 - Verify live chat initiation with form submission in online mode', () => {
        // 1. Verify homepage loaded
        cy.url().should('include', 'galumatires.com')

        // 2. Verify page is visible
        cy.get('body').should('be.visible')

        // 3. Click live chat icon
        cy.get('.live-chat-icon').click()
        cy.wait(1000)

        // 4. Click Live chat icon in the footer
        cy.get('#live-chat').click()
        cy.wait(1000)

        // 5. Verify live chat container visible
        cy.get('.contact-form-body').should('be.visible')

        // 6. Check welcome message
        cy.get('.chat-welcome-msg').should('be.visible')
            .and('contain.text', 'Welcome to our live Chat! Please fill in the form below before a starting the chat.')

        // 7. Click on "Name:" and enter name
        cy.get('#live-chat-name').click().type('Cypress Test User')

        // 8. Click on "Email:" and enter email
        cy.get('#live-chat-email').click().type('madhumini+7281@longwapps.com')

        // 9. Click the "Start the chat" button
        cy.get('.chat-button').click()
        cy.wait(2000)

        // 10. User info should be visible (online mode)
        cy.get('.chat-user-info').should('be.visible')
            .and('contain.text', "Name:Cypress Test User (Guest)")
            .and('contain.text', 'Email:madhumini+7281@longwapps.com')

        // 11. Write a message to test the scenario
        cy.get('#chatInput').click().type('This is Cypress Testing Process')
        cy.wait(1000)
        cy.get('.send-btn > .chat-action-img').click()
        cy.wait(1000)

        // 12. In online mode, no offline popup appears

        // 13. Navigate to admin side to check message visibility
        cy.origin('https://devadmin.galumatires.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('draggable is not a function')) {
                    return false
                }
            })

            cy.visit('https://devadmin.galumatires.com/')
            cy.wait(3000)

            // 14. Login to admin panel - Enter username
            cy.get('input[type="email"]').click().type('charani@longwapps.com')

            // 15. Enter password
            cy.get('input[type="password"]').click().type('Test.123')

            // 16. Click on login button
            cy.get('#submit-login').click()
            cy.wait(3000)

            // 17. Scroll and click "Messages" tab in the side nav bar to expand submenu
            cy.get('[data-baselink="messages"] > .nav-tab-title').scrollIntoView().click({ force: true })
            cy.wait(2000)

            // 18. Click "All Messages" section (live-chat link) with force to handle hidden submenu
            cy.get('a.link-hover.live-chat.d-flex.justify-content-between[href="/messages/live-chat"]').click({ force: true })
            cy.wait(2000)

            // 19. Check visibility of newest message at first and click
            cy.get('.live-chat-msgs-list').first().should('be.visible').within(() => {
                // 20. Verify the message shows "Cypress Test User (Guest)"
                cy.get('.live-chat-name').should('be.visible')
                    .and('contain.text', 'Cypress Test User (Guest)')

                cy.get('.last-chat').should('be.visible')
            })

            // 21. Click on the first message to open it
            cy.get('.live-chat-msgs-list').first().click()
            cy.wait(1000)

            // 22. It should display as "Cypress Test User (Guest)" in the chat header
            cy.get('p.single-line-text').first().should('be.visible')
                .and('contain.text', 'Cypress Test User (Guest)')

            // 23. Check the online/offline mode in admin side live chat
            cy.get('input#liveChatState.form-check-input[type="checkbox"][role="switch"]').should('be.visible')

            // 24. Verify it is in online mode (checked)
            cy.get('input#liveChatState').should('be.checked')
        })
    })
})
