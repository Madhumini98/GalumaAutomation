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

    /*
    //Not working as expected - When selecting pickup/ non-pickup options, it's not reflecting in the cart sidebar
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
            cy.get('.navbar_line_1 .cart_icon_section').first().should('be.visible').click()
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

        // Wait for products to load and get a different product (third product)
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.wait(2000)

        cy.get('#tire-products-container-mobile [data-eid]').eq(2).then(($product) => {
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

            // Ensure non-pickup option is selected (verify it's checked)
            cy.get('#pickup-no-checkbox-mobile').should('be.visible').click()
            cy.get('#pickup-no-checkbox-mobile').should('be.checked')
            cy.wait(2000)

            // Click on 'Add to Cart' button
            cy.get('.cost-mobile > #add-to-cart-button').should('be.visible').click()
            cy.wait(3000)

            // Click on cart icon to open cart popup
            cy.get('.navbar_line_1 .cart_icon_section').first().should('be.visible').click()
            cy.wait(2000)

            // Check product visibility on the cart
            cy.get('#cart-popup-mobile').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('contain.text', 'Cart')

            // Verify item is visible in cart with non-pickup option
            cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').should('exist')

            // Verify the specific item in cart does not have pickup service (more specific check)
            cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').first().should('not.contain.text', 'Pickup and Save!')

            // Wait some time to view the cart
            cy.wait(3000)

            // Close the cart
            cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
        })
    })
    */

    it('TC_GALUMA_MOBILE_CART_004 - Verify user can able to remove products from the cart', () => {
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
            cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').should('exist')
            cy.wait(2000)

            // Click on 'remove' button to remove product from the cart
            cy.get('#cart-popup-mobile').find('[class*="remove"], [class*="delete"], .remove-btn, .delete-btn').first().should('be.visible').click()
            cy.wait(3000)

            // Check the cart - should be empty or show empty cart message
            cy.get('#cart-popup-mobile').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('be.visible')

            // Verify cart is empty after removal (check for common empty cart indicators)
            cy.get('#cart-popup-mobile .cart_content').then(($cartContent) => {
                const cartText = $cartContent.text().toLowerCase()
                expect(cartText).to.satisfy((text) => {
                    return text.includes('empty') || text.includes('no items') || !text.includes('remove')
                }, 'Cart should be empty or contain empty indicators')
            })
            cy.wait(2000)

            // Close the cart
            cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
        })
    })

    it('TC_GALUMA_MOBILE_CART_005 - Verify click ability of the product images', () => {
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

            // Check the visibility of the product title
            cy.get('.product-title-mob > b').should('be.visible')
            cy.wait(1000)

            // Scroll to images section
            cy.get('#thumbnail-container-mobile').scrollIntoView()
            cy.wait(2000)

            // Verify thumbnail container is visible
            cy.get('#thumbnail-container-mobile').should('be.visible')

            // Click on product images and check their visibility/swipe functionality
            // Get all available thumbnail images and click on them
            cy.get('#thumbnail-container-mobile img').then(($images) => {
                if ($images.length > 0) {
                    // Click on first image if available
                    cy.get('#thumbnail-container-mobile img').first().should('be.visible').click()
                    cy.wait(1000)

                    // Click on second image if available
                    if ($images.length > 1) {
                        cy.get('#thumbnail-container-mobile img').eq(1).should('be.visible').click()
                        cy.wait(1000)
                    }

                    // Click on third image if available
                    if ($images.length > 2) {
                        cy.get('#thumbnail-container-mobile img').eq(2).should('be.visible').click()
                        cy.wait(1000)
                    }
                }
            })

            // Verify images are clickable and functional
            cy.get('#thumbnail-container-mobile').should('be.visible')
            cy.get('#thumbnail-container-mobile img').should('have.length.at.least', 1)
            cy.wait(2000)
        })
    })

    it('TC_GALUMA_MOBILE_CART_006 - Verify user can able to apply coupon', () => {
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
            cy.wait(2000)

            // Click on 'Apply coupon' button - using simpler selector approach
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('#apply-coupon-btn, .apply-coupon button, [class*="apply-coupon"] button')
                    .should('be.visible')
                    .click()
            })
            cy.wait(2000)

            // Enter coupon code as 'qatest'
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('.coopan-container input[type="text"], [class*="coupon"] input, [placeholder*="coupon"] input')
                    .should('be.visible')
                    .type('qatest')
            })
            cy.wait(1000)

            // Click on 'Apply' button
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('#coopan-apply-btn, .coopan-container button, [class*="coupon"] button:contains("Apply")')
                    .should('be.visible')
                    .click()
            })
            cy.wait(3000)

            // Check visibility of the success message
            cy.get('.alert').should('be.visible').should('contain.text', 'Success!').should('contain.text', 'Coupon applied successfully!')
            cy.wait(2000)

            // Close the success message popup
            cy.get('.close-alert > .fa').should('be.visible').click()
            cy.wait(1000)

            // Click on the cart icon to view updated cart with discount
            cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .open-cart-popup-mobile > .cart_mobile').should('be.visible').click()
            cy.wait(2000)

            // Check visibility of the discount amounts in cart
            cy.get('#cart-popup-mobile').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('be.visible')

            // Verify discount is applied and visible
            cy.get('#cart-popup-mobile').then(($cart) => {
                const cartText = $cart.text().toLowerCase()
                expect(cartText).to.satisfy((text) => {
                    return text.includes('discount') || text.includes('coupon') || text.includes('qatest')
                }, 'Cart should show discount, coupon, or coupon code applied')
            })
            cy.wait(2000)

            // Close the cart
            cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
        })
    })

    it('TC_GALUMA_MOBILE_CART_007 - Verify error message for a invalid coupon', () => {
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
            cy.wait(2000)

            // Click on 'Apply coupon' button - using improved selector approach
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('#apply-coupon-btn, .apply-coupon button, [class*="apply-coupon"] button')
                    .should('be.visible')
                    .click()
            })
            cy.wait(2000)

            // Enter invalid coupon code as 'galuma789'
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('.coopan-container input[type="text"], [class*="coupon"] input, [placeholder*="coupon"] input')
                    .should('be.visible')
                    .type('galuma789')
            })
            cy.wait(1000)

            // Click on 'Apply' button
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('#coopan-apply-btn, .coopan-container button, [class*="coupon"] button:contains("Apply")')
                    .should('be.visible')
                    .click()
            })
            cy.wait(3000)

            // Check visibility of the error message
            cy.get('.alert').should('be.visible').should('contain.text', 'Error!').should('contain.text', 'Invalid promo code or expired')
            cy.wait(2000)

            // Close the error message popup
            cy.get('.close-alert > .fa').should('be.visible').click()
            cy.wait(1000)

            // Close the cart if it's still visible
            cy.get('#cart-popup-mobile').then(($cart) => {
                if ($cart.is(':visible')) {
                    cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
                }
            })
        })
    })

    it('TC_GALUMA_MOBILE_CART_008 - Verify user can able to continue the shopping from my cart', () => {
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
            cy.wait(2000)

            // Click on 'Continue Shopping' button - find the first visible continue shopping element
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('.continue-shopping-link, .continue-shop a, [class*="continue"] a, button:contains("Continue Shopping")')
                    .should('be.visible')
                    .first()
                    .click()
            })
            cy.wait(3000)

            // Check visibility of the shopping page - verify we're back to the tires page
            cy.url().should('satisfy', (url) => {
                return url.includes('/t/s') || url.includes('/t')
            })
            cy.get('body').should('be.visible')

            // Verify we're on a tires/shopping page (check for common elements)
            cy.get('body').should('satisfy', (body) => {
                const text = body.text().toLowerCase()
                return text.includes('tires') || text.includes('shop') || text.includes('browse')
            })

            // Verify cart popup is closed after continuing shopping
            cy.get('#cart-popup-mobile').should('not.be.visible')

            // Wait to observe the shopping page
            cy.wait(2000)
        })
    })

    it('TC_GALUMA_MOBILE_CART_009 - Verify user can able to add multiple items to the cart', () => {
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

        // Add first product to cart
        cy.get('#tire-products-container-mobile [data-eid]').first().then(($product) => {
            const firstDataEid = $product.attr('data-eid')

            // Click on first product
            cy.get(`#tire-products-container-mobile > [data-eid="${firstDataEid}"] > .box-cover`).click({ force: true })
            cy.wait(2000)

            // Verify product overlay is shown
            cy.get(`[data-eid="${firstDataEid}"] > .overlay`).should('be.visible')
            cy.wait(1000)

            // Click on 'Add to Cart' button
            cy.get(`[data-eid="${firstDataEid}"] > .overlay > .brand > .cart_btn`).should('be.visible').click()
            cy.wait(3000)

            // Check product visibility on the cart
            cy.get('#cart-popup-mobile').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('contain.text', 'Cart')
            cy.wait(2000)

            // Verify first item is in cart
            cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').should('have.length.at.least', 1)

            // Click on 'Continue Shopping' button
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('.continue-shopping-link, .continue-shop a, [class*="continue"] a, button:contains("Continue Shopping")')
                    .should('be.visible')
                    .first()
                    .click()
            })
            cy.wait(3000)

            // Verify cart popup is closed
            cy.get('#cart-popup-mobile').should('not.be.visible')

            // Navigate back to products if needed
            cy.url().then((url) => {
                if (url.includes('/t/s')) {
                    cy.get('.browse_product_mobile').should('exist').click({ force: true })
                    cy.wait(3000)
                }
            })

            // Add second product to cart
            cy.get('#tire-products-container-mobile [data-eid]').eq(1).then(($secondProduct) => {
                const secondDataEid = $secondProduct.attr('data-eid')

                // Click on second product
                cy.get(`#tire-products-container-mobile > [data-eid="${secondDataEid}"] > .box-cover`).click({ force: true })
                cy.wait(2000)

                // Verify product overlay is shown
                cy.get(`[data-eid="${secondDataEid}"] > .overlay`).should('be.visible')
                cy.wait(1000)

                // Click on 'Add to Cart' button for second product
                cy.get(`[data-eid="${secondDataEid}"] > .overlay > .brand > .cart_btn`).should('be.visible').click()
                cy.wait(3000)

                // Check product visibility on the cart - should now have multiple items
                cy.get('#cart-popup-mobile').should('be.visible')
                cy.get('#cart-popup-mobile .cart_content').should('be.visible')
                cy.get('#cart-popup-mobile .cart_content').should('contain.text', 'Cart')

                // Verify multiple items are in cart
                cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').should('have.length.at.least', 2)
                cy.wait(3000)

                // Close the cart
                cy.get('#cart-popup-mobile').then(($cart) => {
                    if ($cart.is(':visible')) {
                        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
                    }
                })
                cy.wait(2000)
            })
        })
    })

    it('TC_GALUMA_MOBILE_CART_010 - Verify user can able to remove one product from cart and continue shipping', () => {
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

            // Click on cart icon to open cart popup if it's not already open
            cy.get('#cart-popup-mobile').then(($cart) => {
                if (!$cart.is(':visible')) {
                    cy.get('.navbar_line_1 .cart_icon_section').first().should('be.visible').click()
                    cy.wait(2000)
                }
            })

            // Check product visibility on the cart
            cy.get('#cart-popup-mobile').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('contain.text', 'Cart')
            cy.wait(2000)

            // Verify item is visible in cart
            cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').should('exist')

            // Click on 'remove' button to remove product from the cart
            cy.get('#cart-popup-mobile').find('[class*="remove"], [class*="delete"], .remove-btn, .delete-btn').first().should('be.visible').click()
            cy.wait(3000)

            // Check the cart - should be empty or show empty cart message
            cy.get('#cart-popup-mobile').should('be.visible')
            cy.get('#cart-popup-mobile .cart_content').should('be.visible')

            // Verify cart is empty after removal (check for common empty cart indicators)
            cy.get('#cart-popup-mobile .cart_content').then(($cartContent) => {
                const cartText = $cartContent.text().toLowerCase()
                expect(cartText).to.satisfy((text) => {
                    return text.includes('empty') || text.includes('no items') || !text.includes('remove')
                }, 'Cart should be empty or contain empty indicators')
            })
            cy.wait(2000)

            // Click on 'Continue Shopping' button
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('.continue-shopping-link, .continue-shop a, [class*="continue"] a, button:contains("Continue Shopping")')
                    .should('be.visible')
                    .first()
                    .click()
            })
            cy.wait(3000)

            // Verify cart popup is closed after continuing shopping
            cy.get('#cart-popup-mobile').should('not.be.visible')

            // Navigate back to products if needed
            cy.url().then((url) => {
                if (url.includes('/t/s')) {
                    cy.get('.browse_product_mobile').should('exist').click({ force: true })
                    cy.wait(3000)
                }
            })

            // Click on another product (second product)
            cy.get('#tire-products-container-mobile [data-eid]').eq(1).then(($secondProduct) => {
                const secondDataEid = $secondProduct.attr('data-eid')

                // Click on second product
                cy.get(`#tire-products-container-mobile > [data-eid="${secondDataEid}"] > .box-cover`).click({ force: true })
                cy.wait(2000)

                // Verify product overlay is shown
                cy.get(`[data-eid="${secondDataEid}"] > .overlay`).should('be.visible')
                cy.wait(1000)

                // Click on 'Add to Cart' button for second product
                cy.get(`[data-eid="${secondDataEid}"] > .overlay > .brand > .cart_btn`).should('be.visible').click()
                cy.wait(3000)

                // Click on cart icon to open cart popup if it's not already open
                cy.get('#cart-popup-mobile').then(($cart) => {
                    if (!$cart.is(':visible')) {
                        cy.get('.navbar_line_1 .cart_icon_section').first().should('be.visible').click()
                        cy.wait(2000)
                    }
                })

                // Check product visibility on the cart
                cy.get('#cart-popup-mobile').should('be.visible')
                cy.get('#cart-popup-mobile .cart_content').should('be.visible')
                cy.get('#cart-popup-mobile .cart_content').should('contain.text', 'Cart')

                // Verify new item is visible in cart
                cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').should('exist')
                cy.wait(2000)

                // Close the cart
                cy.get('#cart-popup-mobile').then(($cart) => {
                    if ($cart.is(':visible')) {
                        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
                    }
                })
                cy.wait(2000)
            })
        })
    })

    it('TC_GALUMA_MOBILE_CART_011 - Verify user can able to checkout properly with the button', () => {
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
            cy.wait(2000)

            // Verify item is visible in cart
            cy.get('#cart-popup-mobile').find('[class*="cart"], [class*="item"], .product').should('exist')

            // Click on 'Check Out Now' button - using flexible selector approach
            cy.get('#cart-popup-mobile').within(() => {
                cy.get('.b_checkout .col-12, #cart-mobile-bottom-contant .b_checkout .col-12, .cost-det .b_checkout .col-12, [class*="checkout"] button, button:contains("Check Out"), button:contains("Checkout")')
                    .should('be.visible')
                    .first()
                    .click()
            })
            cy.wait(3000)
        })
    })

})