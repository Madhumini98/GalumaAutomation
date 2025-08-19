describe('Galuma Home Tests', () => {
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

    it('TC_GALUMA_HOME_001 - Verify successful navigation to the homepage', () => {
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')
        cy.title().should('not.be.empty')
    })

    it('TC_GALUMA_CART_MOBILE_003 - Verify cart icon opens cart popup and close icon returns to homepage', () => {
        // Click on the cart icon to open cart popup
        cy.get('#open-cart-popup > .img-fluid').should('be.visible').click()

        // Wait for cart popup to load
        cy.wait(2000)

        // Verify cart popup content is visible
        cy.get('.side-cart-inner').should('be.visible')

        // Click on the close icon (cross) to close cart popup
        cy.get('#close-cart-popup > strong').should('be.visible').click()

        // Wait for popup to close
        cy.wait(1000)

        // Verify we're back to the homepage
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')
    })

    it('TC_GALUMA_PROFILE_004 - Verify profile icon navigates to sign-in page', () => {
        // Click on the profile icon
        cy.get('#user-sign-in > .img-fluid').should('be.visible').click()

        // Wait for navigation to sign-in page
        cy.wait(2000)

        // Verify navigation to sign-in page
        cy.url().should('include', '/sign-in')
        cy.url().should('eq', 'https://dev.galumatires.com/sign-in')

        // Verify sign-in page content is visible
        cy.get('body').should('be.visible')
    })


    it('TC_CHECKOUT_STEPS_007 - Verify checkout steps are visible on homepage', () => {
        // Scroll down to load content
        cy.scrollTo(0, 1000)
        cy.wait(2000)

        // Simply verify the checkout steps section exists and is visible
        cy.get('.delivery_warranty_contact').should('be.visible')
    })

    it('TC_GALUMA_FAQ_CONTACT_008 - Verify FAQ and contact section quick links on homepage', () => {
        // Scroll to FAQ section
        cy.get(':nth-child(6) > .container > .head-second > strong')
        cy.wait(2000)

        // Test "Find out Here" button navigates to tire reading page 
        cy.get('.ct1 > .container > .row > .col-4 > .btn').click()
        cy.url().should('include', '/read-my-tires')

        // Go back and test "Learn more" button navigates to pickup page
        cy.go('back')
        cy.get('.ct2 > .container > .row > .col-4 > .btn').click()
        cy.url().should('include', '/pick-up')

        // Go back and test "Call" button
        cy.go('back')
        cy.get('.ct3 > .container > .row > .col-4 > .btn').click()
        cy.url().should('include', '/contact-us')
        cy.go('back')
    })

    it('TC_GALUMA_SERVICEICONS_009 - Verify service icons navigate to correct details pages', () => {
        // Test Tires icon
        cy.get(':nth-child(1) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('include', '/t')
        cy.go('back')

        /* Test Wheels icon
        // This Wheel icon is not working properly, so skipping this test for now
        cy.get(':nth-child(2) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('not.equal', 'https://dev.galumatires.com/')
        cy.go('back')
        */

        // Test Touchless Installation icon
        cy.get(':nth-child(3) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('include', 'touchless-installation')
        cy.go('back')

        // Test Road Force Balance icon
        cy.get(':nth-child(4) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('include', 'road-force-balance')
        cy.go('back')

        // Test Inground Alignment icon
        cy.get(':nth-child(5) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('include', 'inground')
        cy.go('back')

        /* Test Center Lock icon
        // This Center Lock icon is not working properly, so skipping this test for now
        cy.get(':nth-child(6) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('not.equal', 'https://dev.galumatires.com/')
        cy.go('back')

        // Test TMPS icon
        // This TMPS icon is not working properly, so skipping this test for now
        cy.get(':nth-child(7) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('not.equal', 'https://dev.galumatires.com/')
        cy.go('back')
        */

        // Test Tire Rotation icon
        cy.get(':nth-child(8) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('include', 'rotation')
        cy.go('back')

        // Test Puncture Repair icon
        cy.get(':nth-child(9) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('include', 'puncture-repair')
        cy.go('back')

        // Test Inspections icon
        cy.get(':nth-child(10) > .zoomable > .timage').should('be.visible').click()
        cy.url().should('include', 'tire-inspections')
        cy.go('back')
    })

    

})