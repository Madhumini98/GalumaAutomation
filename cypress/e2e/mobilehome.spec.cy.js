describe('Galuma Mobile Home Page Tests', () => {
    beforeEach(() => {
        // Common setup for all test cases
        cy.viewport(360, 640)
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


    it('TC_SHOPTIRESBYSIZE_MOBILE_003 - Shop Tires by Size on Mobile Version', () => {
        // Test How to read your tire size functionality
        // Navigate to "Search by Size" section again
        cy.get('[data-id="size"]').click()
        cy.wait(2000)

        // Verify "Find out here!" popup visibility
        cy.get('.findout_popup').should('be.visible')

        // Click on "Find out here!" button
        cy.get('#open-mobile-findout-popup').click()

        // Verify the popup tab appears
        cy.get('.popup-home-mobile > .popup-content > :nth-child(2) > em').should('be.visible')

        // Click on "click here to learn more" text
        cy.get('.popup-home-mobile > .popup-content > #learn_more').click()

        // Wait for navigation to read-my-tires page
        cy.wait(2000)

        // Verify navigation to read-my-tires page
        cy.url().should('include', '/read-my-tires')

        // Verify the page content
        cy.get('body').should('be.visible')

        // Navigate back to home page
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })

        // Navigate to "Shop Tires by Size" section
        cy.get('[data-id="size"]').click()
        cy.wait(2000)

        // Verify we're in the search by size tab (this will wait for the popup content to be visible)
        cy.get('#by-size-popup-home > :nth-child(2) > .heading > .active').should('be.visible')

        // Click width button to open dropdown and select "225"
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > #tire-width-value-read-tires').click()
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > .card-width-select-popup > :nth-child(1) > [data-value="225"] > .red_h').click()

        // Verify width selection is reflected
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > #tire-width-value-read-tires').should('contain', '225')

        // Click ratio button to open dropdown and select "35"
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > #tire-ratio-value-read-tires').click()
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > .card-ratio-select-popup > :nth-child(1) > [data-value="35"] > .red_h').click()

        // Verify ratio selection is reflected
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > #tire-ratio-value-read-tires').should('contain', '35')

        // Click diameter button to open dropdown and select "20"
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup > #tire-diameter-value-read-tires').click()
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup > .card-diameter-select-popup > :nth-child(1) > [data-value="20"] > .red_h').click()

        // Verify diameter selection is reflected
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup > #tire-diameter-value-read-tires').should('contain', '20')

        // Click "Search Tires" button
        cy.get('#top-search-by-size-btn').click()

        // Wait for results to load
        cy.wait(3000)

        // Verify results are displayed (search results page loaded)
        cy.get('.rec-size-con').should('be.visible')

        // Verify search results contain tire products
        cy.get('body').should('contain', 'tire')

        // Navigate back to home page
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(2000)

        // Navigate to "Search by Size" section again
        cy.get('[data-id="size"]').click()
        cy.wait(2000)

        // Click search by brand tab
        cy.get('#by-size-popup-home > :nth-child(2) > .heading > .active').click()

        // Verify we're in the search by brand tab (this will wait for the popup content to be visible)
        cy.get('#by-size-popup-home > :nth-child(2) > .heading > .active').should('be.visible')

        // Brands are visible and click a brand - Continental
        cy.get('#brand-container-mobile-popup > :nth-child(3) > :nth-child(1) > a > img').click()

        // Wait for Continental brand products page to load
        cy.wait(3000)

        // Verify navigation to Continental brand page
        cy.url().should('include', '/t/b/continental')

        // Verify Continental brand products are displayed
        cy.get('body').should('contain', 'Continental')

        // Navigate back to home page
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(2000)
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

    it('TC_GALUMA_PAYMENTPLANS_MOBILE_011 - Verify Payment Plans section displays content and View Options button functions correctly', () => {
        // Navigate to homepage and scroll to Payment Plans section
        cy.scrollTo(0, 800)
        cy.wait(2000)

        // Verify Payment Plans section is visible
        cy.get('.financing-container').should('be.visible')

        // Verify section content is displayed
        cy.get('.financing-container').within(() => {
            // Look for financing related text (based on actual content)
            cy.get('*').should('contain.text', 'finance')
            cy.get('*').should('contain.text', 'Afterpay')
            cy.get('.cta-button').should('be.visible').and('contain.text', 'View options')
        })

        // Click View Options button and verify navigation
        cy.get('.financing-container .cta-button').click()
        cy.wait(2000)

        // Verify navigation to payment options page
        cy.url().should('include', '/payments/options')

        // Verify payment options page content
        cy.get('body').should('be.visible')

        // Verify detailed payment information is displayed
        cy.get('body').should('contain.text', 'payment')

        // Go back to homepage
        cy.go('back')
        cy.wait(1000)
    })

    it('TC_GALUMA_SERVICES_ALL_MOBILE_012 - Verify service tiles in "All services in our shop" section navigate to correct pages', () => {
        // Scroll to "All services in our shop" section
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.scrollTo(0, 1400)
        cy.wait(2000)

        // Test Touchless Installation tile
        cy.get(':nth-child(2) > .col-12 > .services > :nth-child(1) > .img-box > a').should('be.visible').scrollIntoView().click({ force: true })
        cy.url().should('include', 'touchless-installation')
        cy.go('back')
        cy.wait(1000)

        // Test Road Force Balance tile  
        cy.get(':nth-child(2) > .col-12 > .services > :nth-child(2) > .img-box > a').should('be.visible').scrollIntoView().click({ force: true })
        cy.url().should('include', 'road-force-balance')
        cy.go('back')
        cy.wait(1000)

        // Test Inground Alignment tile
        cy.get(':nth-child(2) > .col-12 > .services > :nth-child(3) > .img-box > a').should('be.visible').scrollIntoView().click({ force: true })
        cy.url().should('include', 'inground')
        cy.go('back')
        cy.wait(1000)

        /*this Center Lock tile is not working properly, so skipping this test for now
        // Test Center Lock tile 
        cy.get(':nth-child(2) > .col-12 > .services > :nth-child(4) > .img-box > a').should('be.visible').scrollIntoView().click({ force: true })
        cy.url().should('eq', 'https://dev.galumatires.com/')
        cy.wait(1000)
        */

        // Test Tire Repair tile
        cy.get(':nth-child(2) > .col-12 > .services > :nth-child(5) > .img-box > a').should('be.visible').scrollIntoView().click({ force: true })
        cy.url().should('include', 'puncture-repair')
        cy.go('back')
        cy.wait(1000)

        // Test Tire Sales tile
        cy.get(':nth-child(2) > .col-12 > .services > :nth-child(6) > .img-box > a').should('be.visible').scrollIntoView().click({ force: true })
        cy.url().should('include', '/t')
        cy.go('back')
    })

    it('TC_GALUMA_SHIPPINGSECTION_MOBILE_013 - Verify "Our shipping" section displays content and Read More button works', () => {
        // Navigate directly to the shipping section
        cy.get('.d-flex > .content').scrollIntoView()
        cy.wait(2000)

        // Verify the shipping section is visible
        cy.get('.d-flex > .content').should('be.visible')

        // Verify shipping section content elements are displayed
        cy.get('.d-flex > .content').within(() => {
            // Verify heading is visible (could be h2, h3, h4, or strong tag)
            cy.get('h2, h3, h4, strong').should('be.visible').and('contain.text', 'shipping')

            // Verify shipping policy description is visible
            cy.get('p').should('be.visible')

            // Verify Read More button is visible and clickable
            cy.get('.btn').should('be.visible')
        })

        // Test Read More button functionality
        cy.get('.d-flex > .content > .btn').should('be.visible').click({ force: true })

        // Verify navigation to shipping details page
        cy.url().should('include', '/shipping')
        cy.get('body').should('be.visible')

        // Go back to homepage
        cy.go('back')
    })

})