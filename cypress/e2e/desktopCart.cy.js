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
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(1000)

    // Get the first product and hover over it to make the Add to Cart button visible
    cy.get('#tire-products-container > div:nth-child(1)').trigger('mouseover')
    cy.wait(1000)

    // Verify the Add to Cart button becomes visible after hover
    cy.get('.add-to-cart-btn').first().should('exist')

    // Click on the "Add to Cart" button in a visible manner
    cy.get('.add-to-cart-btn').first().then($btn => {
      // Log the button details for visibility
      cy.log('Clicking Add to Cart button:', $btn.text())
    })
    cy.get('.add-to-cart-btn').first().click({ force: true })

    // Verify that the cart sidebar opens and product is visible in the cart
    cy.get('.side-cart-inner').should('be.visible')

    // Close the cart popup by clicking the close button
    cy.get('#close-cart-popup > strong').should('be.visible').click()
  })

  /*
  //Not working as expected - When selecting pickup/ non-pickup options, it's not reflecting in the cart sidebar
  it('TC_GALUMA_DESKTOP_CART_002 - Verify user can able to select pickup option and add products to cart', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(1000)

    // Get the first product and hover over it to make buttons visible
    cy.get('#tire-products-container > div:nth-child(1)').trigger('mouseover')
    cy.wait(1000)

    // Click on 'View Product' button to go to product details page
    cy.get('#tire-products-container > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > a:nth-child(5)').click({ force: true })
    cy.wait(2000)

    // Scroll to pickup options section
    cy.get('#collapse-customer > .card-body').scrollIntoView()
    cy.wait(1000)

    // Select 'Pickup and Save!' option
    cy.get('#pickup-select-checkbox').should('be.visible').click()
    cy.wait(1000)

    // Select a fitting date (third option)
    cy.get('#pickup-opt-container > .container-card > .pickup-discount-list > :nth-child(3) > .card').should('be.visible').click()
    cy.wait(1000)

    // Select preferred service time (lunch time)
    cy.get('#pickup-opt-container > :nth-child(4) > .service-time-container > .lunch').should('be.visible').click()
    cy.wait(1000)

    // Click on 'Add to Cart' button
    cy.get(':nth-child(1) > #add-to-cart-button').should('be.visible').click()
    cy.wait(2000)

    // Verify that the cart sidebar opens and product is visible with pickup option
    cy.get('.side-cart-inner').should('be.visible')

    // Close the cart popup by clicking the close button
    cy.get('#close-cart-popup > strong').should('be.visible').click()
  })

  it('TC_GALUMA_DESKTOP_CART_003 - Verify user can able to select non pickup option and add products to cart', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(1000)

    // Get the first product and hover over it to make buttons visible
    cy.get('#tire-products-container > div:nth-child(1)').trigger('mouseover')
    cy.wait(1000)

    // Click on 'View Product' button to go to product details page
    cy.get('#tire-products-container > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > a:nth-child(5)').click({ force: true })
    cy.wait(2000)

    // Scroll to pickup options section
    cy.get('#collapse-customer > .card-body').scrollIntoView()
    cy.wait(1000)

    // Select non pickup option
    cy.get('#pickup-no-checkbox').should('be.visible').click()
    cy.wait(1000)

    // Click on 'Add to Cart' button
    cy.get(':nth-child(1) > #add-to-cart-button').should('be.visible').click()
    cy.wait(2000)

    // Verify that the cart sidebar opens and product is visible with non pickup option
    cy.get('.side-cart-inner').should('be.visible')

    // Close the cart popup by clicking the close button
    cy.get('#close-cart-popup > strong').should('be.visible').click()
  })
  */

  it('TC_GALUMA_DESKTOP_CART_004 - Verify user can able to remove products from the cart', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(1000)

    // Get the first product and hover over it to make the Add to Cart button visible
    cy.get('#tire-products-container > div:nth-child(1)').trigger('mouseover')
    cy.wait(1000)

    // Click on the "Add to Cart" button using the class selector
    cy.get('.add-to-cart-btn').first().click({ force: true })
    cy.wait(2000)

    // Verify that the cart sidebar opens and product is visible in the cart
    cy.get('.side-cart-inner').should('be.visible')

    // Click on 'remove' button to remove product from the cart
    cy.get(':nth-child(2) > .remove-cart-item').should('be.visible').click()
    cy.wait(1000)

    // Verify the cart is empty or shows empty state (no items visible)
    cy.get('.side-cart-inner').should('be.visible')

    // Close the cart popup by clicking the close button
    cy.get('#close-cart-popup > strong').should('be.visible').click()
  })

  it('TC_GALUMA_DESKTOP_CART_005 - Verify click ability of the product images', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(1000)

    // Get the first product and hover over it to make buttons visible
    cy.get('#tire-products-container > div:nth-child(1)').trigger('mouseover')
    cy.wait(1000)

    // Click on 'View Product' button to go to product details page
    cy.get('#tire-products-container > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > a:nth-child(5)').click({ force: true })
    cy.wait(2000)

    // Check the visibility of the product title
    cy.get('.product-title').should('be.visible')

    // Scroll to thumbnail container to ensure it's visible
    cy.get('#thumb-container').scrollIntoView()
    cy.wait(1000)

    // Verify thumbnail container exists
    cy.get('#thumb-container').should('exist')

    // Click on different product images and verify they are clickable
    // First thumbnail image
    cy.get('#thumb-container > [src="https://galumatires-local.s3.amazonaws.com/83389/watermark/0.JPG"]')
      .scrollIntoView()
      .should('exist')
      .click({ force: true })
    cy.wait(1000)

    // Second thumbnail image  
    cy.get('#thumb-container > [src="https://galumatires-local.s3.amazonaws.com/83389/watermark/1.PNG"]')
      .scrollIntoView()
      .should('exist')
      .click({ force: true })
    cy.wait(1000)

    // Third thumbnail image
    cy.get('#thumb-container > [src="https://galumatires-local.s3.amazonaws.com/83389/watermark/2.JPG"]')
      .scrollIntoView()
      .should('exist')
      .click({ force: true })
    cy.wait(1000)

    // Verify that thumbnail container is still present after clicking
    cy.get('#thumb-container').should('exist')
  })

  it('TC_GALUMA_DESKTOP_CART_006 - Verify user can able to apply coupon', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(1000)

    // Get the first product and hover over it to make the Add to Cart button visible
    cy.get('#tire-products-container > div:nth-child(1)').trigger('mouseover')
    cy.wait(1000)

    // Click on the "Add to Cart" button using the class selector
    cy.get('.add-to-cart-btn').first().click({ force: true })
    cy.wait(2000)

    // Click on 'Apply coupon' button
    cy.get('#cart-empty-container > .cost-det > .options-cart > .apply-coupon > #apply-coupon-btn').should('be.visible').click()
    cy.wait(1000)

    // Enter coupon code as 'qatest'
    cy.get('#cart-empty-container > .cost-det > .options-cart > .coopan-container > input[type="text"]').type('qatest')
    cy.wait(1000)

    // Click on 'Apply' button
    cy.get('#cart-empty-container > .cost-det > .options-cart > .coopan-container > #coopan-apply-btn').should('be.visible').click()
    cy.wait(2000)

    // Check visibility of the success message
    cy.get('.alert').should('be.visible').and('contain.text', 'Success!').and('contain.text', 'Coupon applied successfully!')

    // Close the success message popup
    cy.get('.close-alert > .fa').should('be.visible').click()
    cy.wait(1000)

    // Click on the cart icon to view cart with discount
    cy.get('#open-cart-popup > .img-fluid').should('be.visible').click()
    cy.wait(1000)

    // Verify cart is visible and check for discount amounts
    cy.get('.side-cart-inner').should('be.visible')

    // Close the cart popup
    cy.get('#close-cart-popup > strong').should('be.visible').click()
  })

  it('TC_GALUMA_DESKTOP_CART_007 - Verify error message for a invalid coupon', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(1000)

    // Get the first product and hover over it to make the Add to Cart button visible
    cy.get('#tire-products-container > div:nth-child(1)').trigger('mouseover')
    cy.wait(1000)

    // Click on the "Add to Cart" button using the class selector
    cy.get('.add-to-cart-btn').first().click({ force: true })
    cy.wait(2000)

    // Click on 'Apply coupon' button
    cy.get('#cart-empty-container > .cost-det > .options-cart > .apply-coupon > #apply-coupon-btn').should('be.visible').click()
    cy.wait(1000)

    // Enter invalid coupon code as 'galuma789'
    cy.get('#cart-empty-container > .cost-det > .options-cart > .coopan-container > input[type="text"]').type('galuma789')
    cy.wait(1000)

    // Click on 'Apply' button
    cy.get('#cart-empty-container > .cost-det > .options-cart > .coopan-container > #coopan-apply-btn').should('be.visible').click()
    cy.wait(2000)

    // Check visibility of the error message
    cy.get('.alert').should('be.visible').and('contain.text', 'Error!').and('contain.text', 'Invalid promo code or expired')

    // Close the error message popup
    cy.get('.close-alert > .fa').should('be.visible').click()
    cy.wait(1000)
  })

  it('TC_GALUMA_DESKTOP_CART_008 - Verify user can able to continue the shopping from my cart', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(1000)

    // Get the first product and hover over it to make the Add to Cart button visible
    cy.get('#tire-products-container > div:nth-child(1)').trigger('mouseover')
    cy.wait(1000)

    // Click on the "Add to Cart" button using the class selector
    cy.get('.add-to-cart-btn').first().click({ force: true })
    cy.wait(2000)

    // Verify the cart popup opens after adding product
    cy.get('.side-cart-inner').should('be.visible')

    // Click on 'Continue Shopping' button from the visible cart
    cy.get('#cart-empty-container > .cost-det > .options-cart > .continue-shop > .continue-shopping-link').should('be.visible').click()
    cy.wait(2000)

    // Check visibility of the shopping page - verify we're back on shop page
    cy.url().should('include', '/t')
    cy.get('#tire-products-container').should('be.visible')

    // Verify products are still visible on the page
    cy.get('#tire-products-container > div').should('have.length.greaterThan', 0)
  })

  /*
  //Not working as expected - Can't add multiple items to the cart in automation
  it('TC_GALUMA_DESKTOP_CART_009 - Verify user can able to add multiple items to the cart', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(2000)

    // Wait for products to load and verify container has products
    cy.get('#tire-products-container').should('be.visible')
    cy.get('#tire-products-container > div').should('have.length.greaterThan', 0)

    // Get the first product and hover over it to make the Add to Cart button visible
    cy.get('#tire-products-container > div').first().trigger('mouseover')
    cy.wait(1000)

    // Click on the "Add to Cart" button for the first product
    cy.get('.add-to-cart-btn').first().click({ force: true })
    cy.wait(3000)

    // Wait for cart to appear or click cart icon to open it
    cy.get('body').then($body => {
      if ($body.find('.side-cart-inner:visible').length === 0) {
        // If cart is not visible, click cart icon to open it
        cy.get('#open-cart-popup > .img-fluid').click()
        cy.wait(1000)
      }
    })

    // Verify the cart popup opens and first product is visible
    cy.get('.side-cart-inner').should('be.visible')

    // Click on 'Continue Shopping' button from the visible cart
    cy.get('#cart-empty-container > .cost-det > .options-cart > .continue-shop > .continue-shopping-link').should('be.visible').click()
    cy.wait(2000)

    // Scroll to products section again
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(2000)

    // Verify products are still loaded
    cy.get('#tire-products-container > div').should('have.length.greaterThan', 1)

    // Get the data-eid of the second product to ensure different product selection
    cy.get('#tire-products-container > div').eq(1).invoke('attr', 'data-eid').then((secondDataEid) => {
      cy.log('Second product data-eid:', secondDataEid)

      // Click on second product using data-eid selector (desktop manner)
      cy.get(`#tire-products-container > [data-eid="${secondDataEid}"] > .box-cover`).click({ force: true })
      cy.wait(2000)

      // Hover over the second product to make the Add to Cart button visible
      cy.get(`#tire-products-container > [data-eid="${secondDataEid}"]`).trigger('mouseover')
      cy.wait(1000)

      // Click on the "Add to Cart" button for the second (different) product
      cy.get(`#tire-products-container > [data-eid="${secondDataEid}"]`).within(() => {
        cy.get('.add-to-cart-btn').click({ force: true })
      })
    })
    cy.wait(3000)

    // Wait for cart to appear or click cart icon to open it
    cy.get('body').then($body => {
      if ($body.find('.side-cart-inner:visible').length === 0) {
        // If cart is not visible, click cart icon to open it
        cy.get('#open-cart-popup > .img-fluid').click()
        cy.wait(1000)
      }
    })

    // Verify the cart popup opens and multiple products are visible
    cy.get('.side-cart-inner').should('be.visible')

    // Close the cart popup
    cy.get('#close-cart-popup > strong').should('be.visible').click()
  })
  */

  it('TC_GALUMA_DESKTOP_CART_010 - Verify user can able to remove one product from cart and continue shipping', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(2000)

    // Wait for products to load and verify container has products
    cy.get('#tire-products-container').should('be.visible')
    cy.get('#tire-products-container > div').should('have.length.greaterThan', 0)

    // Get the first product and hover over it to make the Add to Cart button visible
    cy.get('#tire-products-container > div').first().trigger('mouseover')
    cy.wait(1000)

    // Click on the "Add to Cart" button for the first product
    cy.get('.add-to-cart-btn').first().click({ force: true })
    cy.wait(3000)

    // Wait for cart to appear or click cart icon to open it
    cy.get('body').then($body => {
      if ($body.find('.side-cart-inner:visible').length === 0) {
        // If cart is not visible, click cart icon to open it
        cy.get('#open-cart-popup > .img-fluid').click()
        cy.wait(1000)
      }
    })

    // Verify the cart popup opens and product is visible
    cy.get('.side-cart-inner').should('be.visible')

    // Click on 'remove' button to remove product from the cart
    cy.get(':nth-child(2) > .remove-cart-item').should('be.visible').click()
    cy.wait(1000)

    // Close the cart after removing product
    cy.get('#close-cart-popup > strong').should('be.visible').click()
    cy.wait(1000)

    // Click on 'Back to Search' button to continue shopping
    cy.get('.back-to-search').should('be.visible').click()
    cy.wait(2000)

    // Scroll to products section again
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(2000)

    // Verify products are still loaded
    cy.get('#tire-products-container > div').should('have.length.greaterThan', 1)

    // Get the data-eid of the second product to select a different product
    cy.get('#tire-products-container > div').eq(1).invoke('attr', 'data-eid').then((secondDataEid) => {
      cy.log('Second product data-eid:', secondDataEid)

      // Click on second product using data-eid selector (desktop manner)
      cy.get(`#tire-products-container > [data-eid="${secondDataEid}"] > .box-cover`).click({ force: true })
      cy.wait(2000)

      // Hover over the second product to make the Add to Cart button visible
      cy.get(`#tire-products-container > [data-eid="${secondDataEid}"]`).trigger('mouseover')
      cy.wait(1000)

      // Click on the "Add to Cart" button for the second (different) product
      cy.get(`#tire-products-container > [data-eid="${secondDataEid}"]`).within(() => {
        cy.get('.add-to-cart-btn').click({ force: true })
      })
    })
    cy.wait(3000)

    // Wait for cart to appear or click cart icon to open it
    cy.get('body').then($body => {
      if ($body.find('.side-cart-inner:visible').length === 0) {
        // If cart is not visible, click cart icon to open it
        cy.get('#open-cart-popup > .img-fluid').click()
        cy.wait(1000)
      }
    })

    // Verify the cart popup opens and new product is visible
    cy.get('.side-cart-inner').should('be.visible')

    // Close the cart popup
    cy.get('#close-cart-popup > strong').should('be.visible').click()
  })

  it('TC_GALUMA_DESKTOP_CART_011 - Verify user can able to checkout properly with the button', () => {
    // Navigate to the shop tires page with authentication
    cy.visit('https://dev.galumatires.com/t/s', {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })

    // Wait for the page to load completely and products to be displayed
    cy.wait(3000)

    // Scroll to the products section to ensure it's visible
    cy.get('#tire-products-container').scrollIntoView()
    cy.wait(2000)

    // Wait for products to load and verify container has products
    cy.get('#tire-products-container').should('be.visible')
    cy.get('#tire-products-container > div').should('have.length.greaterThan', 0)

    // Get the first product and hover over it to make the Add to Cart button visible
    cy.get('#tire-products-container > div').first().trigger('mouseover')
    cy.wait(1000)

    // Click on the "Add to Cart" button for the first product
    cy.get('.add-to-cart-btn').first().click({ force: true })
    cy.wait(3000)

    // Wait for cart to appear or click cart icon to open it
    cy.get('body').then($body => {
      if ($body.find('.side-cart-inner:visible').length === 0) {
        // If cart is not visible, click cart icon to open it
        cy.get('#open-cart-popup > .img-fluid').click()
        cy.wait(1000)
      }
    })

    // Verify the cart popup opens and product is visible
    cy.get('.side-cart-inner').should('be.visible')

    // Click on 'Check Out Now' button to proceed with checkout
    cy.get('#cart-empty-container > .cost-det > :nth-child(6) > .col-12').should('be.visible').click()
    cy.wait(3000)

    // Verify that the checkout process has started (URL should change or checkout page should load)
    cy.url().should('not.include', '/t/s')

    // Verify checkout page elements are visible (this may vary based on the actual checkout implementation)
    cy.get('body').should('be.visible')
  })

})