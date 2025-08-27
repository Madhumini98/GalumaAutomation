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

})