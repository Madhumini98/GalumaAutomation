describe('Galuma Mobile Cart Functionality Tests', () => {
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

    it('TC_GALUMA_MOBILE_CART_001 - Verify user can able to add products to the cart', () => {
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

        // Wait for products to load and get the first product
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.wait(2000)
        
        cy.get('#tire-products-container-mobile [data-eid]').first().then(($product) => {
            const dataEid = $product.attr('data-eid')
            
            // Click on one product
            cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
            cy.wait(2000)

            // Verify product overlay is shown
            cy.get(`[data-eid="${dataEid}"] > .overlay`).should('be.visible')
            cy.wait(1000)

            // Click on 'Add to Cart' button
            cy.get(`[data-eid="${dataEid}"] > .overlay > .brand > .cart_btn`).should('be.visible').click()
            cy.wait(3000)

            // Check product visibility on the cart
            cy.get('#cart-popup-mobile').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('contain.text', 'Cart')
            
            // Verify item is visible in cart
            cy.get('#cart-popup-mobile .cart_content').find('.cart_item, .product_item, [class*="item"]').should('be.visible')
            cy.wait(2000)

            // Close the cart
            cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
        })
    })

    it('TC_GALUMA_MOBILE_CART_002 - Verify user can able to select pickup option and add products to cart', () => {
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

        // Wait for products to load and get a different product (second product)
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.wait(2000)
        
        cy.get('#tire-products-container-mobile [data-eid]').eq(1).then(($product) => {
            const dataEid = $product.attr('data-eid')
            
            // Click on one product
            cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
            cy.wait(2000)

            // Verify product overlay is shown
            cy.get(`[data-eid="${dataEid}"] > .overlay`).should('be.visible')
            cy.wait(1000)

            // Click on 'View Product' button
            cy.get(`[data-eid="${dataEid}"] > .overlay > .brand > .view_product`).should('be.visible').click()
            cy.wait(3000)

            // Verify navigation to product details page
            cy.url().should('include', '/p/')
            cy.get('body').should('be.visible')
            cy.wait(2000)

            // Scroll to pickup options section to ensure visibility
            cy.get('.pickup-opt-list').scrollIntoView()
            cy.wait(1000)

            // Select 'Pickup and Save!' option 
            cy.get('.pickup-opt-list > :nth-child(1)').scrollIntoView().click()
            cy.wait(1000)
            
            // Ensure pickup checkbox is selected to show container
            cy.get('#pickup-select-checkbox-mobile').should('be.visible').click()
            cy.wait(2000)

            // Select a fitting date - wait for container to become visible
            cy.get('#pickup-opt-container-mobile').should('be.visible')
            cy.wait(1000)

            // Click on a date
            cy.get('#pickup-opt-container-mobile > .container-card > .pickup-discount-list > :nth-child(1) > .card').should('be.visible').click()
            cy.wait(2000)

            // Select preferred service time
            cy.get('#pickup-opt-container-mobile > :nth-child(4) > .service-time-container > .afternoon > strong').should('be.visible').click()
            cy.wait(2000)

            // Click on 'Add to Cart' button
            cy.get('.cost-mobile > #add-to-cart-button').should('be.visible').click()
            cy.wait(3000)

            // Click on cart icon to open cart popup
            cy.get('.cart_icon_section').should('be.visible').click()
            cy.wait(2000)

            // Check product visibility on the cart
            cy.get('#cart-popup-mobile').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('contain.text', 'Cart')
            
            // Verify item is visible in cart with pickup option
            cy.get('#cart-popup-mobile .cart_content').should('contain.text', 'Pickup')
            cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').should('exist')
            
            // Wait some time to view the cart with selected pickup option
            cy.wait(5000)

            // Close the cart
            cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
        })
    })

    it('TC_GALUMA_MOBILE_CART_003 - Verify user can able to select non pickup option and add products to cart', () => {
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

        // Wait for products to load and get the first product
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.wait(2000)
        
        cy.get('#tire-products-container-mobile [data-eid]').first().then(($product) => {
            const dataEid = $product.attr('data-eid')
            
            // Click on one product
            cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
            cy.wait(2000)

            // Verify product overlay is shown
            cy.get(`[data-eid="${dataEid}"] > .overlay`).should('be.visible')
            cy.wait(1000)

            // Click on 'View Product' button
            cy.get(`[data-eid="${dataEid}"] > .overlay > .brand > .view_product`).should('be.visible').click()
            cy.wait(3000)

            // Verify navigation to product details page
            cy.url().should('include', '/p/')
            cy.get('body').should('be.visible')
            cy.wait(2000)

            // Select non pickup option
            cy.get('#pickup-no-checkbox-mobile').should('be.visible').click()
            cy.wait(2000)

            // Click on 'Add to Cart' button
            cy.get('.cost-mobile > #add-to-cart-button').should('be.visible').click()
            cy.wait(3000)

            // Click on cart icon to open cart popup
            cy.get('.cart_icon_section').should('be.visible').click()
            cy.wait(2000)

            // Check product visibility on the cart
            cy.get('#cart-popup-mobile').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('contain.text', 'Cart')
            
            // Verify item is visible in cart with non-pickup option
            cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').should('exist')
            cy.get('#cart-popup-mobile .cart_content').should('not.contain.text', 'Pickup')
            
            // Wait some time to view the cart
            cy.wait(3000)

            // Close the cart
            cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
        })
    })

})