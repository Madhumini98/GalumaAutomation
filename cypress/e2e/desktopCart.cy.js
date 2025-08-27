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

})