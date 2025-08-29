describe('Galuma Mobile Track Your Order Tests', () => {
    beforeEach(() => {
        // Common setup for all test cases
        cy.viewport(360, 640)
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)
    })

    it('TC_GALUMA_MOBILE_TRACK_ORDER_001 - Verify user can able to track their order', () => {
        // Navigate to track my order page
        cy.visit('https://dev.galumatires.com/track-my-order', {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        
        // Wait for the page to load completely
        cy.wait(3000)
        
        // Verify we're on the track order page
        cy.url().should('include', 'track-my-order')
        
        // Click on Order number tab
        cy.get('#guest-ord-number')
            .should('be.visible')
            .click()
        cy.wait(1000)
        
        // Enter tracking number
        cy.get('#guest-ord-number')
            .should('be.visible')
            .type('1756481883')
        cy.wait(2000)
        
        // Click on email tab
        cy.get('#guest-ord-email')
            .should('be.visible')
            .click()
        cy.wait(1000)

        // Enter user email address
        cy.get('#guest-ord-email')
            .should('be.visible')
            .type('madhumini@longwapps.com')
        cy.wait(2000)

        // Click on track button
        cy.get('#track-btn')
            .should('be.visible')
            .click()
        
        // Wait for tracking results to load
        cy.wait(3000)
        
        // Order details should display on order progress details area. So scroll to
        cy.get('#orderd-progress-details')
            .should('be.visible')
            .scrollIntoView()
    })

    it('TC_GALUMA_MOBILE_TRACK_ORDER_002 - Verify user cannot track order without tracking number', () => {
        // Navigate to track my order page
        cy.visit('https://dev.galumatires.com/track-my-order', {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        
        // Wait for the page to load completely
        cy.wait(3000)
        
        // Verify we're on the track order page
        cy.url().should('include', 'track-my-order')
        
        // Click on Order number tab
        cy.get('#guest-ord-number')
            .should('be.visible')
            .click()
        cy.wait(1000)
        
        // Enter tracking number
        cy.get('#guest-ord-number')
            .should('be.visible')
            .type('1756491821')
        cy.wait(2000)
        
        // Click on email tab
        cy.get('#guest-ord-email')
            .should('be.visible')
            .click()
        cy.wait(1000)

        // Enter user email address
        cy.get('#guest-ord-email')
            .should('be.visible')
            .type('madhumini@longwapps.com')
        cy.wait(2000)
        
        // Click on track button
        cy.get('#track-btn')
            .should('be.visible')
            .click()
        
        // Wait for tracking results to load
        cy.wait(3000)
        
        // Error popup message of 'Error! Order tracking failed'
        cy.get('.alert')
            .should('be.visible')
            .should('contain.text', 'Error!')
            .should('contain.text', 'Order tracking failed')
    })

})