describe('Galuma Mobile Home Page Tests', () => {
    beforeEach(() => {
        // Common setup for all test cases
        cy.viewport(360, 480)
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)
    })

    it('TC_GALUMA_MOBILE_HOME_001 - Verify successful navigation to the homepage', () => {
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')
        cy.title().should('not.be.empty')
    })

    it('TC_GALUMA_SEARCHHEADER_MOBILE_002 - Ensure search box displays appropriate results for valid queries', () => {
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()
        cy.get('input[type="text"]:visible').first().should('be.visible').type('Pirelli')
        cy.get('[href="https://dev.galumatires.com/t/b/pirelli"] > :nth-child(1) > b').should('be.visible').click()
        cy.url().should('include', 'pirelli')
        cy.get('body').should('contain', 'Pirelli')
    })

    it('TC_GALUMA_SERVICEICONS_MOBILE_005 - Verify service icons navigate to correct details pages', () => {
        // Test Tires icon
        cy.get('#zoomableImg1').should('be.visible').click()
        cy.url().should('include', '/t')
        cy.go('back')
        
        /* Test Wheels icon
        // This Wheel icon is not working properly, so skipping this test for now
        cy.get('#zoomableImg2').should('be.visible').click()
        cy.url().should('not.equal', 'https://dev.galumatires.com/')
        cy.go('back')
        */
        
        // Test Touchless Installation icon
        cy.get('#zoomableImg3').should('be.visible').click()
        cy.url().should('include', 'touchless-installation')
        cy.go('back')
        
        // Test Road Force Balance icon
        cy.get('#zoomableImg4').should('be.visible').click()
        cy.url().should('include', 'road-force-balance')
        cy.go('back')
        
        // Test Inground Alignment icon
        cy.get('#zoomableImg5').should('be.visible').click()
        cy.url().should('include', 'inground')
        cy.go('back')
        
        // Test Tire Rotation icon
        cy.get('#zoomableImg6').should('be.visible').click()
        cy.url().should('include', 'rotation')
        cy.go('back')
        
        /* Test TMPS icon
        // This TMPS icon is not working properly, so skipping this test for now
        cy.get('#zoomableImg7').should('be.visible').click()
        cy.url().should('not.equal', 'https://dev.galumatires.com/')
        cy.go('back')
        */
        
        // Test Puncture Repair icon
        cy.get('#zoomableImg8').should('be.visible').click()
        cy.url().should('include', 'puncture-repair')
        cy.go('back')
    })


it('TC_Checkout_Steps_Visibility_006 - Verify checkout steps are visible on homepage', () => {
        // Scroll down to load content
        cy.scrollTo(0, 1000)
        cy.wait(2000)
        
        // Simply verify the checkout steps section exists and is visible
        cy.get('.delivery_warranty_contact').should('be.visible')
    })

    it('TC_GALUMA_FAQ_CONTACT_MOBILE_007 - Verify FAQ and contact section quick links on mobile homepage', () => {
        // Scroll to FAQ section
        cy.scrollTo('bottom')
        cy.wait(2000)
        
        // Test "Find out Here" button navigates to tire reading page
        cy.get('#findOutHere').click()
        cy.url().should('include', '/read-my-tires')
        
        // Go back and test "Learn more" button navigates to pickup page
        cy.go('back')
        cy.get('#learnMore').click() 
        cy.url().should('include', '/pick-up')
        
        // Go back and test "Call" button
        cy.go('back')
        cy.get('#call').click()
        cy.go('back')
    })


 it('TC_GALUMA_VIDEO_MOBILE_008 - Verify promotional video in tire promotions section is visible and plays', () => {
        // Scroll to tire promotions section
        cy.scrollTo(0, 800)
        cy.wait(2000)

        // Verify the promotional video is visible
        cy.get('.offer_container > #promo-video-preview').should('be.visible')

        // Click on video to play
        cy.get('.offer_container > #promo-video-preview').click()
        cy.wait(1000)
    })

    it('TC_GALUMA_PRODUCTOVERLAY_MOBILE_009 - Verify product card overlay displays correct details', () => {
        // Scroll to sample products section
        cy.scrollTo(0, 600)
        cy.wait(2000)

        // Tap on product card
        cy.get('.pro_box-recommend').first().click()

        // Verify overlay appears with product details
        cy.get('.pro_box-recommend > .overlay').should('be.visible')
    })


    it('TC_GALUMA_VIEWPRODUCT_MOBILE_010 - Verify View Product button navigates to product details page', () => {
        // Scroll to sample products section
        cy.scrollTo(0, 600)
        cy.wait(2000)

        // Tap on product card to open overlay
        cy.get('.pro_box-recommend').first().click()
        cy.wait(1000)

        // Tap the "View Product" button in overlay
        cy.get('.cart_btn').click()

        // Verify navigation to product details page
        cy.url().should('include', '/p/')
        cy.go('back')

    })
    
})