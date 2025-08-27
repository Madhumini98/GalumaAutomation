describe('Galuma Cart Functionality Tests', () => {
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

  it('TC_GALUMA_DESKTOP_CART_001 - Verify user can able to add products to the cart', () => {
    // Navigate to shop tires page: https://dev.galumatires.com/t/s
    cy.visit("https://dev.galumatires.com/t/s", {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })
    cy.wait(3000)

    // Verify navigation to shop tires page
    cy.url().should('include', '/t/s')
    cy.get('body').should('be.visible')

    // Scroll to products section
    cy.get('#tire-products-container').should('be.visible').scrollIntoView()
    cy.wait(2000)

    // Hover over product card to reveal overlay
    cy.get('#tire-products-container :nth-child(2) > .box-cover').first().trigger('mouseenter', { force: true })
    cy.wait(1000)

    // Wait for products to load and get the first product randomly
    cy.get('#tire-products-container [data-eid]').should('have.length.at.least', 1)
    cy.get('#tire-products-container [data-eid]').then($products => {
      const randomIndex = Math.floor(Math.random() * $products.length)
      const $randomProduct = $products.eq(randomIndex)
      const dataEid = $randomProduct.attr('data-eid')

      // Hover over the selected product to reveal overlay
      cy.get(`#tire-products-container > [data-eid="${dataEid}"] > .box-cover`).trigger('mouseenter', { force: true })
      cy.wait(2000)

      // Check if overlay exists and click view product button (handle opacity issue)
      cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay`).should('exist')
      cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand > .view_product`).click({ force: true })
      cy.wait(3000)

      // Verify navigation to product details page
      cy.url().should('include', '/p/')
      cy.get('body').should('be.visible')
      cy.wait(2000)

      // Click on 'Add to Cart' button with the updated selector
      cy.get(':nth-child(1) > #add-to-cart-button').should('be.visible').click()
      cy.wait(3000)

      // Check product visibility on the cart using the specified selector
      cy.get('.side-cart-inner').should('be.visible')
      cy.get('.side-cart-inner').should('contain.text', 'Cart')

      // Verify item is visible in cart
      cy.get('.side-cart-inner').find('[class*="cart"], [class*="item"], .product, [class*="product"]').should('be.visible')
      cy.wait(2000)

      // Close the cart using the specified selector
      cy.get('#close-cart-popup > strong').should('be.visible').click()
      cy.wait(1000)
    })
  })

})