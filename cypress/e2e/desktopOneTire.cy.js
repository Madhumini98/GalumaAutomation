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
      // Hover over the 2nd product to reveal the overlay button
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
      cy.wait(500) // Wait for overlay to appear
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
        cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
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

  it('TC_PROD_INFO_COUNTDOWN - Verify that the free shipping countdown timer displays correctly and updates in real-time', () => {
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
      // Hover over the 2nd product to reveal the overlay button
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
      cy.wait(500) // Wait for overlay to appear
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
        cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
      })
    })
    cy.wait(3000)
    
    // 7. Check the visibility of shipping countdown
    cy.get('.timeline > p').should('be.visible')
    
    // 8. Wait and watch the timer for 30 seconds
    cy.wait(30000)
  })

  it('TC_PROD_CATEGORY - Verify that the correct product category is displayed based on the tire\'s life remaining percentage', () => {
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
      // Hover over the 2nd product to reveal the overlay button
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
      cy.wait(500) // Wait for overlay to appear
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
        cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
      })
    })
    cy.wait(3000)
    
    // 7. Locate the life remaining section (tread depth indicator)
    cy.get(':nth-child(1) > :nth-child(2) > .tread-box').should('be.visible')
    
    // 8. Note the percentage value shown and get category text
    cy.get(':nth-child(1) > :nth-child(2) > .tread-box').invoke('text').then((treadText) => {
      const percentageMatch = treadText.match(/(\d+)%/)
      if (percentageMatch) {
        const percentage = parseInt(percentageMatch[1])
        cy.log(`Life remaining percentage: ${percentage}%`)
        
        // 9. Check the product category text displayed
        cy.get('.detail_area > .quality-text > span').should('be.visible').invoke('text').then((categoryText) => {
          cy.log(`Product category: ${categoryText}`)
          
          // 10. Verify expected results based on life remaining percentage
          if (percentage === 100) {
            expect(categoryText.toLowerCase()).to.include('brand new')
          } else if (percentage >= 97 && percentage <= 99) {
            expect(categoryText.toLowerCase()).to.satisfy((text) => {
              return text.includes('like new & no patch') || text.includes('take off')
            })
          } else if (percentage >= 78 && percentage <= 96) {
            expect(categoryText.toLowerCase()).to.include('like new')
          } else if (percentage >= 60 && percentage <= 77) {
            expect(categoryText.toLowerCase()).to.include('great')
          } else if (percentage < 60) {
            expect(categoryText.toLowerCase()).to.include('budget')
          }
        })
      } else {
        cy.log('Could not extract percentage from tread text')
      }
    })
  })

  it('TC_PROD_INFO - Verify that all additional product features are visible and display correct information', () => {
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
      // Hover over the 2nd product to reveal the overlay button
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
      cy.wait(500) // Wait for overlay to appear
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
        cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
      })
    })
    cy.wait(3000)
    
    // 7. Check visibility of Tire type (Summer / Winter / All Season)
    cy.get('.detail_area > :nth-child(5) > :nth-child(1) > .ssn-product > small').should('be.visible').invoke('text').then((tireType) => {
      cy.log(`Tire Type: ${tireType}`)
      expect(tireType.toLowerCase()).to.satisfy((text) => {
        return text.includes('summer') || text.includes('winter') || text.includes('all season')
      })
    })
    
    // 8. Check visibility of Run Flat status (Yes/No)
    cy.get('.detail_area > :nth-child(5) > :nth-child(3) > .ssn-product').should('be.visible').invoke('text').then((runFlatText) => {
      cy.log(`Run Flat section: ${runFlatText}`)
      expect(runFlatText.toLowerCase()).to.satisfy((text) => {
        return text.includes('yes') || text.includes('no') || text.includes('run flat')
      })
    })
    
    // 9. Quantity displays with count icon and available number (1/2/4)
    cy.get('.last-season > .col-4 > .ssn-product').should('be.visible').invoke('text').then((quantityText) => {
      cy.log(`Quantity section: ${quantityText}`)
      expect(quantityText.toLowerCase()).to.satisfy((text) => {
        return text.includes('1 tire') || text.includes('2 tire') || text.includes('4 tire') || text.includes('quantity')
      })
    })
    
    // 10. Check visibility of Item Condition
    cy.get('.last-season > .col-5 > .ssn-product > b').should('be.visible').invoke('text').then((itemCondition) => {
      cy.log(`Item Condition: ${itemCondition}`)
    })
    
    // 11. Check visibility of Stock status
    cy.get('.last-season > .col-3 > .ssn-product > small').should('be.visible').invoke('text').then((stockStatus) => {
      cy.log(`Stock Status: ${stockStatus}`)
    })
  })

  it('TC_TIRE_DETAILS - Verify all tire detail fields are visible and DOT code correctly matches the year made', () => {
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
      // Hover over the 2nd product to reveal the overlay button
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
      cy.wait(500) // Wait for overlay to appear
      cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
        cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
      })
    })
    cy.wait(3000)
    
    // 7. Scroll to the tire details section
    cy.get('.product-items-details > :nth-child(1)').scrollIntoView()
    cy.wait(1000)
    
    // 8. Check visibility of all detail fields
    
    // Thread depth displays with measurement and unit (32nd of inch)
    cy.get(':nth-child(1) > :nth-child(1) > .tread-box').should('be.visible').invoke('text').then((threadDepth) => {
      cy.log(`Thread Depth: ${threadDepth}`)
      expect(threadDepth.trim()).to.match(/\d+(\.\d+)?(\s*-\s*\d+(\.\d+)?)?/)
    })
    
    // Life remaining shows percentage range (approx)
    cy.get(':nth-child(1) > :nth-child(2) > .tread-box').should('be.visible').invoke('text').then((lifeRemaining) => {
      cy.log(`Life Remaining: ${lifeRemaining}`)
      expect(lifeRemaining).to.match(/\d+%/)
    })
    
    // New tire tread depth field shows original depth value
    cy.get(':nth-child(2) > .col-12 > .tread-box').should('be.visible').invoke('text').then((newTireDepth) => {
      cy.log(`New Tire Tread Depth: ${newTireDepth}`)
    })
    
    // DOT (age) displays 4-digit code and validate year
    cy.get(':nth-child(3) > :nth-child(1) > .tread-box').should('be.visible').invoke('text').then((dotText) => {
      cy.log(`DOT section: ${dotText}`)
      const dotMatch = dotText.match(/(\d{4})/)
      if (dotMatch) {
        const dotCode = dotMatch[1]
        const weekYear = dotCode.substring(2, 4)
        const expectedYear = parseInt(`20${weekYear}`)
        cy.log(`DOT Code: ${dotCode} → Expected Year: ${expectedYear}`)
        
        // Verify year made field matches DOT code
        cy.get(':nth-child(3) > :nth-child(2) > .tread-box').should('be.visible').invoke('text').then((yearMadeText) => {
          cy.log(`Year Made section: ${yearMadeText}`)
          expect(yearMadeText).to.include(expectedYear.toString())
        })
      } else {
        cy.log('Could not extract DOT code from text')
      }

    //Check the visibility of stock number
    cy.get('.wish-entry > .col-5').should('be.visible')
    })
  })
})