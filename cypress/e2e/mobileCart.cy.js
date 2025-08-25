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

    it('TC_GALUMA_MOBILE_CART_001 - Verify user can able to add the product in cart and remove the product from my cart', () => {
        // 1. Navigate to the shop tires by size page
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

        // Verify navigation to shop tires by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // First need to browse products to see them
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(3000)

        // 2. Wait for products to load and get the first product's data-eid
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.wait(2000)
        
        // Get the first product and click on its box-cover to trigger the overlay
        cy.get('#tire-products-container-mobile [data-eid]').first().then(($product) => {
            const dataEid = $product.attr('data-eid')
            
            // Click on the box-cover to trigger overlay
            cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
            cy.wait(2000)

            // 3. Verify overlay is shown
            cy.get(`[data-eid="${dataEid}"] > .overlay`).should('be.visible')
            cy.wait(1000)

            // 4. Select the Add to cart button in the product overlay
            cy.get(`[data-eid="${dataEid}"] > .overlay > .brand > .cart_btn`).should('be.visible').click()
            cy.wait(3000)
        })

        // 5. Click on Remove icon
        cy.get('.align-items-center > .remove-cart-item').should('be.visible').click()
        cy.wait(2000)

        // 6. Close the cart
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > #cart-popup-mobile > .cart_content > #close-cart-popup-mobile > strong').should('be.visible').click()
    })

})