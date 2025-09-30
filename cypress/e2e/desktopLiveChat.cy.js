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

    it.only('TC_GALUMA_LIVECHAT_GUEST_007 - Verify live chat email contact form submission and admin message visibility', () => {
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
})