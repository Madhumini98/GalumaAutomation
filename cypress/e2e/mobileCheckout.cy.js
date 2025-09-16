describe('Galuma Mobile Checkout Process Functionality Tests', () => {
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

    it('TC_GALUMA_MOBILE_CHECKOUT_001 - Verify Guest User Checkout with non Pickup Feature (Single Item)', () => {
        // STEP 1: Navigate to Shop Tires Page
        // Direct navigation to tires shop page with authentication
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000) // Allow page to fully load

        // Verify successful navigation to shop tires page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // STEP 2: Product Selection Process
        // Click browse products button to display available tires
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(3000) // Wait for product loading animation

        // Ensure products container is fully loaded and visible
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.wait(2000) // Allow products to render completely

        // Select a specific product for testing (5th item in the list)
        cy.get('#tire-products-container-mobile [data-eid]').eq(5).then(($product) => {
            const dataEid = $product.attr('data-eid')

            // Click on the selected product to view details
            cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
            cy.wait(2000) // Wait for product overlay animation

            // Verify product details overlay is displayed
            cy.get(`[data-eid="${dataEid}"] > .overlay`).should('be.visible')
            cy.wait(1000)

            // Add selected product to shopping cart
            cy.get(`[data-eid="${dataEid}"] > .overlay > .brand > .cart_btn`).should('be.visible').click()
            cy.wait(3000) // Wait for cart update process
        })

        // STEP 3: Cart Verification and Checkout Initiation
        // Verify product appears in cart with cost details
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > [clas="loading-container"] > #cart-mobile-bottom-contant > .cost-det').should('be.visible')
        cy.wait(2000) // Allow cart content to stabilize

        // Initiate checkout process by clicking checkout button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > [clas="loading-container"] > #cart-mobile-bottom-contant > .cost-det > .b_checkout > .col-12').should('be.visible').click()
        cy.wait(3000) // Wait for checkout popup to load

        // STEP 4: Guest Checkout Selection
        // Wait for checkout popup to fully load
        cy.get('.mobile_header > .checkout-popup > .popup-content').should('be.visible')
        cy.wait(2000)

        // Choose guest checkout option (no account required)
        cy.get('.mobile_header > .checkout-popup > .popup-content > .guest_btn').should('be.visible').click()
        cy.wait(3000) // Wait for guest checkout form to load

        // STEP 5: Guest Information Entry
        // Verify guest information section is visible
        cy.get('#heading-1').should('be.visible')

        // Enter customer first name
        cy.get('#guest-fname-input').should('be.visible').type('Madhumini')

        // Enter customer last name
        cy.get('#guest-lname-input').should('be.visible').type('Kodithuwakku')

        // Enter customer email address (unique for testing)
        cy.get('#guest-email-input').should('be.visible').type('madhumini+275@longwapps.com')

        // Enter customer phone number
        cy.get('#guest-phone-input').should('be.visible').type('2910293839')

        // Proceed to next step after filling guest information
        cy.get('#guest-continue-btn').should('be.visible').click()
        cy.wait(2000) // Wait for form validation and next section load

        // STEP 6: Delivery Method Selection
        // Verify pickup/delivery options section is visible
        cy.get('#heading-2').should('be.visible')

        // Select delivery option (not pickup) for shipping
        cy.get('#pickUp-no-checkbox').should('be.visible').click()
        cy.wait(2000) // Wait for delivery options to update

        // STEP 7: Shipping Address Information
        // Verify shipping address section is visible
        cy.get('#heading-3').should('be.visible')

        // Enter shipping recipient first name
        cy.get('#shipping-fname-input').should('be.visible').type('Madhumini')

        // Enter shipping recipient last name
        cy.get('#shipping-lname-input').should('be.visible').type('Kodithuwakku')

        // Enter partial address to trigger autocomplete suggestions
        cy.get('#shipping-address-input').should('be.visible').type('Cana')
        cy.wait(2000) // Wait for Google Places API suggestions to load

        // Select first address suggestion from Google Places autocomplete
        cy.get('.pac-container .pac-item').first().click()
        cy.wait(1000) // Wait for address fields to auto-populate

        // Enter postal/ZIP code for address verification
        cy.get('#shipping-zip-input').should('be.visible').type('6789')

        // Proceed to billing information section
        cy.get('#submit-shipping').should('be.visible').click()
        cy.wait(2000) // Wait for next section to load

        // STEP 8: Billing Information Configuration
        // Verify billing information section is visible
        cy.get('#heading-4').should('be.visible')

        // Use same address for billing to simplify checkout process
        cy.get('#same-shipping-radio').should('be.visible').click()
        cy.wait(2000) // Wait for billing address fields to populate

        /*
        // STEP 9: Payment Method Configuration
        // =====================================================
        // IMPORTANT: Stripe Payment Element Security Limitation
        // =====================================================
        // Due to browser security restrictions, Cypress cannot directly access
        // Stripe's iframe elements. The following implementation uses workarounds
        // with focused element typing and force clicks to interact with Stripe Elements.
        // This approach may be fragile and should be monitored for stability.

        // Verify payment method section is loaded and visible
        cy.get('#heading-5').should('be.visible')

        // PAYMENT CARD DETAILS ENTRY PROCESS
        // -----------------------------------

        // Enter credit card number (using Stripe test card: 4242424242424242)
        cy.get('#card-number-element').should('be.visible')
        cy.get('#card-number-element').click({ force: true })
        cy.wait(500) // Wait for field focus
        cy.focused().type('4242424242424242', { force: true, delay: 100 })
        cy.wait(2000) // Allow Stripe validation to complete

        // Enter card expiration date (MM/YY format: 12/34)
        cy.get('#card-expire-element').should('be.visible')
        cy.get('#card-expire-element').click({ force: true })
        cy.wait(500) // Wait for field focus
        cy.focused().type('1234', { force: true, delay: 100 })
        cy.wait(2000) // Allow Stripe validation to complete

        // Enter card security code (CVC: 222)
        cy.get('#card-cvc-element').should('be.visible')
        cy.get('#card-cvc-element').click({ force: true })
        cy.wait(500) // Wait for field focus
        cy.focused().type('222', { force: true, delay: 100 })
        cy.wait(3000) // Extra time for final Stripe validation and form readiness

        // STEP 10: Order Completion
        // Verify place order button is ready and enabled
        cy.get('#place-order-btn').should('be.visible')
        cy.get('#place-order-btn').should('not.have.class', 'disabled')

        // Submit the complete order
        cy.get('#place-order-btn').click()
        cy.wait(5000) // Wait for order processing and confirmation
        */
    })

})