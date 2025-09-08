describe('Galuma Desktop Product Information Tests', () => {
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

  it('TC_PROD_INFO_NAMING - Verify user can see the brand logo, name and sizes label from product details', () => {
    // 1. Navigate to home page (already done in beforeEach)
    cy.url().should('include', 'galumatires.com')
    
    // 2. Click 'Shop Products'
    cy.get('#shopProducts > .nav-link').should('be.visible').click()
    cy.wait(2000)
    
    // 3. Click 'Browse All Tires'
    cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
    cy.wait(3000)
    
    // 4. Scroll to Qty of tires section
    cy.get('.box.qty > .qty').scrollIntoView()
    cy.wait(1000)
    
    // 5. Select 1
    cy.get('.d-flex > :nth-child(1) > .btn').should('be.visible').click()
    cy.wait(1000)
    
    // 6. Select the 2nd random product from the list. Click on the overlay 'View Product' button
    cy.get('#tire-products-container').should('be.visible')
    cy.get('#tire-products-container').within(() => {
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').should('have.length.at.least', 2)
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
        cy.get('button, a').contains(/View Product|View Details|View|Quick View/).should('be.visible').click()
      })
    })
    cy.wait(3000)
    
    // 7. Check the visibility of Brand logo
    cy.get('.brand-icon > img').should('be.visible')
    
    // 8. Check the visibility of Product name & Mercedes original equipment
    cy.get('.product-title').should('be.visible')
    
    // 9. Check the visibility of Product sizes label (eg: width/profile/radial design & rim load index & speed rating)
    cy.get('.product-title > span').should('be.visible')
  })
})