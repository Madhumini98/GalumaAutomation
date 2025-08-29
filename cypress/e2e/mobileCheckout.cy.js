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
        // Navigate to shop tires page: https://dev.galumatires.com/t/s
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop tires page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // Browse products to display them
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(3000)

        // Wait for products to load
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.wait(2000)

        // Click on one product randomly (select 5th item in the products list)
        cy.get('#tire-products-container-mobile [data-eid]').eq(5).then(($product) => {
            const dataEid = $product.attr('data-eid')

            // Click on the 5th product
            cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
            cy.wait(2000)

            // Verify product overlay is shown
            cy.get(`[data-eid="${dataEid}"] > .overlay`).should('be.visible')
            cy.wait(1000)

            // Click on 'Add to Cart' button
            cy.get(`[data-eid="${dataEid}"] > .overlay > .brand > .cart_btn`).should('be.visible').click()
            cy.wait(3000)
        })

        // Check product visibility on the cart
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > [clas="loading-container"] > #cart-mobile-bottom-contant > .cost-det').should('be.visible')
        cy.wait(2000)

        // Click on 'Check Out Now' button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > [clas="loading-container"] > #cart-mobile-bottom-contant > .cost-det > .b_checkout > .col-12').should('be.visible').click()
        cy.wait(3000)

        // Checkout popup is loading
        cy.get('.mobile_header > .checkout-popup > .popup-content').should('be.visible')
        cy.wait(2000)

        // Click on 'Check Out as guest'
        cy.get('.mobile_header > .checkout-popup > .popup-content > .guest_btn').should('be.visible').click()
        cy.wait(3000)

        // Fill order as a guest part
        cy.get('#heading-1').should('be.visible')
        
        // First name
        cy.get('#guest-fname-input').should('be.visible').type('Madhumini')
        
        // Last name
        cy.get('#guest-lname-input').should('be.visible').type('Kodithuwakku')
        
        // Email address
        cy.get('#guest-email-input').should('be.visible').type('madhumini+275@longwapps.com')
        
        // Phone number
        cy.get('#guest-phone-input').should('be.visible').type('2910293839')
        
        // Click on Save and continue button
        cy.get('#guest-continue-btn').should('be.visible').click()
        cy.wait(2000)

        // Fill pick up part
        cy.get('#heading-2').should('be.visible')
        
        // Select nonpickup
        cy.get('#pickUp-no-checkbox').should('be.visible').click()
        cy.wait(2000)

        // Fill where should we send your order? part
        cy.get('#heading-3').should('be.visible')
        
        // First name
        cy.get('#shipping-fname-input').should('be.visible').type('Madhumini')
        
        // Last name
        cy.get('#shipping-lname-input').should('be.visible').type('Kodithuwakku')
        
        // Address - type partial address and select from suggestions
        cy.get('#shipping-address-input').should('be.visible').type('Cana')
        cy.wait(2000)
        
        // Click on first suggestion 'Canal Street New York, NY, USA'
        cy.get('.pac-container .pac-item').first().click()
        cy.wait(1000)
        
        // Postal code
        cy.get('#shipping-zip-input').should('be.visible').type('6789')
        
        // Click on Save and continue button
        cy.get('#submit-shipping').should('be.visible').click()
        cy.wait(2000)

        // Fill billing information part
        cy.get('#heading-4').should('be.visible')
        
        // Select 'Billing address is the same as shipping address'
        cy.get('#same-shipping-radio').should('be.visible').click()
        cy.wait(2000)

        // Fill payment method
        cy.get('#heading-5').should('be.visible')
        
        // Handle Stripe Elements with proper validation timing
        // Card number
        cy.get('#card-number-element').should('be.visible')
        cy.get('#card-number-element').click({ force: true })
        cy.wait(500)
        cy.focused().type('4242424242424242', { force: true, delay: 100 })
        cy.wait(2000) // Allow time for validation
        
        // Card expire
        cy.get('#card-expire-element').should('be.visible')
        cy.get('#card-expire-element').click({ force: true })
        cy.wait(500)
        cy.focused().type('1234', { force: true, delay: 100 })
        cy.wait(2000) // Allow time for validation
        
        // Card CVC
        cy.get('#card-cvc-element').should('be.visible')
        cy.get('#card-cvc-element').click({ force: true })
        cy.wait(500)
        cy.focused().type('222', { force: true, delay: 100 })
        cy.wait(3000) // Extra time for final validation
        
        // Wait for button to be enabled and click
        cy.get('#place-order-btn').should('be.visible')
        cy.get('#place-order-btn').should('not.have.class', 'disabled')
        cy.get('#place-order-btn').click()
        cy.wait(5000)
    })

})