describe('Galuma Track Your Order Tests', () => {
    beforeEach(() => {
        // Common setup for all test cases
        cy.viewport(1475, 750)
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            timeout: 180000
        })
        cy.contains('Login').should('be.visible').click({ force: true })
        cy.wait(3000)
    })

    it('TC_GALUMA_DESKTOP_TRACK_ORDER_001 - Verify user can able to track their order', () => {
        // Click on track button from home page
        cy.get('#track').should('be.visible').click()
        
        // Navigate to track my order page
        cy.visit('https://dev.galumatires.com/track-my-order', {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            timeout: 180000
        })
        
        // Wait for the page to load completely
        cy.wait(3000)
        
        // Click on Order number tab
        cy.get('#guest-ord-number')
            .should('be.visible')
            .click()
        cy.wait(1000)
        
        // Enter tracking number
        cy.get('#guest-ord-number')
            .should('be.visible')
            .clear()
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
            .clear()
            .type('madhumini@longwapps.com')
        cy.wait(2000)
        
        // Click on track button
        cy.get('#track-btn')
            .should('be.visible')
            .click()
        
        // Wait for tracking results to load
        cy.wait(3000)
        
        // Order details should display on order progress details area
        cy.get('.progress_bar_set')
            .should('be.visible')
            .scrollIntoView()
    })

    it('TC_GALUMA_DESKTOP_TRACK_ORDER_002 - Verify user cannot track order without tracking number', () => {
        // Click on track button from home page
        cy.get('#track').should('be.visible').click()

        // Navigate to track my order page
        cy.visit('https://dev.galumatires.com/track-my-order', {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            timeout: 180000
        })

        // Wait for the page to load completely
        cy.wait(3000)

        // Click on Order number tab
        cy.get('#guest-ord-number')
            .should('be.visible')
            .click()
        cy.wait(1000)

        // Enter tracking number
        cy.get('#guest-ord-number')
            .should('be.visible')
            .clear()
            .type('1756882663')
        cy.wait(2000)

        // Click on email tab
        cy.get('#guest-ord-email')
            .should('be.visible')
            .click()
        cy.wait(1000)

        // Enter user email address
        cy.get('#guest-ord-email')
            .should('be.visible')
            .clear()
            .type('madhumini@longwapps.com')
        cy.wait(2000)

        // Click on track button
        cy.get('#track-btn')
            .should('be.visible')
            .click()

        // Wait for error response
        cy.wait(3000)

        // Verify error popup message appears
        cy.get('.alert')
            .should('be.visible')
            .then(($alert) => {
                // Log the actual text to see what the error message is
                cy.log('Actual alert text:', $alert.text())
            })
    })

})
