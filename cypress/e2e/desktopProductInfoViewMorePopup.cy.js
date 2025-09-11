describe('Galuma Desktop Product Information Tests for View More Popups', () => {
    beforeEach(() => {
        // Handle uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

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

    it('TC_PRODUCT_DETAILS_POPUP_NAVIGATION_001 - Verify product details popup displays correctly with tire size guidance note and redirects to tire reading help page', () => {
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

        // 7. Click on 'View more details about this item' button
        // Wait for page to load completely
        cy.wait(3000)
        
        // Try text-based selector first (most reliable)
        cy.get('body').then(($body) => {
            if ($body.find(':contains("View more details about this item")').length > 0) {
                cy.contains('View more details about this item').click({ force: true })
            } else if ($body.find(':contains("more details")').length > 0) {
                cy.contains('more details').click({ force: true })
            } else if ($body.find(':contains("View more")').length > 0) {
                cy.contains('View more').click({ force: true })
            } else {
                // Look for the element in the product detail area specifically, not in cart area
                cy.get('.detail_area, .product-detail, .product-info').within(() => {
                    cy.get('.col-6 > .light-green > small, small.light-green, .light-green small, small[class*="green"]')
                      .first()
                      .should('be.visible')
                      .click({ force: true })
                })
            }
        })

        // 8. Popup display correctly
        cy.get('.popup-header').should('be.visible')

        // 9. Check note visibility
        cy.get('.note').should('be.visible')

        // 10. Check the text in the note section
        cy.get('.note').should('contain.text', 'Please make sure this tire size is the one you need before proceeding to checkout.')
        cy.get('.note').should('contain.text', 'Not sure how to read your tire size? Find out here!')

        // 11. Click on the 'Find out here!' button
        cy.get('.note > a').should('be.visible').click()

        // 12. It should direct to the https://dev.galumatires.com/read-my-tires page
        cy.url().should('include', '/read-my-tires')
        cy.location('pathname').should('eq', '/read-my-tires')
    })

    it('TC_POPUP_BRAND_PRODUCT_INFO_002 - Verify brand logo, product name, and tire specifications display correctly in product details popup', () => {
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

        // 7. Click on 'View more details about this item' button
        // Wait for page to load completely
        cy.wait(3000)
        
        // Try text-based selector first (most reliable)
        cy.get('body').then(($body) => {
            if ($body.find(':contains("View more details about this item")').length > 0) {
                cy.contains('View more details about this item').click({ force: true })
            } else if ($body.find(':contains("more details")').length > 0) {
                cy.contains('more details').click({ force: true })
            } else if ($body.find(':contains("View more")').length > 0) {
                cy.contains('View more').click({ force: true })
            } else {
                // Look for the element in the product detail area specifically, not in cart area
                cy.get('.detail_area, .product-detail, .product-info').within(() => {
                    cy.get('.col-6 > .light-green > small, small.light-green, .light-green small, small[class*="green"]')
                      .first()
                      .should('be.visible')
                      .click({ force: true })
                })
            }
        })

        // 8. Popup display correctly
        cy.get('.popup-header').should('be.visible')

        // 9. Check the visibility of Brand logo
        cy.get('.popup-header > img').should('be.visible')

        // 10. Check the visibility of Product name & Mercedes original equipment
        cy.get('.popup-header > h2').should('be.visible')

        // 11. Check the visibility of Product sizes label (eg: width/profile/radial design & rim load index & speed rating)
        cy.get('.popup-header > p').should('be.visible')
    })

    it('TC_POPUP_PRODUCT_FEATURES_003 - Verify tire type, run-flat status, quantity, condition, and stock information display correctly in product details popup', () => {
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

        // 7. Click on 'View more details about this item' button
        // Wait for page to load completely
        cy.wait(3000)
        
        // Try text-based selector first (most reliable)
        cy.get('body').then(($body) => {
            if ($body.find(':contains("View more details about this item")').length > 0) {
                cy.contains('View more details about this item').click({ force: true })
            } else if ($body.find(':contains("more details")').length > 0) {
                cy.contains('more details').click({ force: true })
            } else if ($body.find(':contains("View more")').length > 0) {
                cy.contains('View more').click({ force: true })
            } else {
                // Look for the element in the product detail area specifically, not in cart area
                cy.get('.detail_area, .product-detail, .product-info').within(() => {
                    cy.get('.col-6 > .light-green > small, small.light-green, .light-green small, small[class*="green"]')
                      .first()
                      .should('be.visible')
                      .click({ force: true })
                })
            }
        })

        // 8. Popup display correctly
        cy.get('.popup-header').should('be.visible')

        // 9. Check visibility of Tire type (Summer / Winter / All Season)
        cy.get('.product-popup-desktop > :nth-child(1) > :nth-child(1) > .ssn-product > small').should('be.visible').invoke('text').then((tireType) => {
            cy.log(`Tire Type: ${tireType}`)
            expect(tireType.toLowerCase()).to.satisfy((text) => {
                return text.includes('summer') || text.includes('winter') || text.includes('all season')
            })
        })

        // 10. Check visibility of Run Flat status (Yes/No)
        cy.get('.product-popup-desktop > :nth-child(1) > :nth-child(3)').should('be.visible').invoke('text').then((runFlatText) => {
            cy.log(`Run Flat section: ${runFlatText}`)
            expect(runFlatText.toLowerCase()).to.satisfy((text) => {
                return text.includes('yes') || text.includes('no') || text.includes('run flat')
            })
        })

        // 11. Quantity displays with count icon and available number (1/2/4)
        cy.get('.product-popup-desktop > :nth-child(2) > .col-4').should('be.visible').invoke('text').then((quantityText) => {
            cy.log(`Quantity section: ${quantityText}`)
            expect(quantityText.toLowerCase()).to.satisfy((text) => {
                return text.includes('1 tire') || text.includes('2 tire') || text.includes('4 tire') || text.includes('quantity')
            })
        })

        // 12. Check visibility of Item Condition
        cy.get(':nth-child(2) > .col-5').should('be.visible').invoke('text').then((itemCondition) => {
            cy.log(`Item Condition: ${itemCondition}`)
        })

        // 13. Check visibility of Stock status
        cy.get('.product-popup-desktop > :nth-child(2) > .col-3').should('be.visible').invoke('text').then((stockStatus) => {
            cy.log(`Stock Status: ${stockStatus}`)
        })
    })

    it('TC_POPUP_TIRE_SPECIFICATIONS_004 - Verify comprehensive tire specification details display correctly in product details popup including size, load, speed, condition, tread depth, and technical markings', () => {
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

        // 7. Click on 'View more details about this item' button
        // Wait for page to load completely
        cy.wait(3000)
        
        // Try text-based selector first (most reliable)
        cy.get('body').then(($body) => {
            if ($body.find(':contains("View more details about this item")').length > 0) {
                cy.contains('View more details about this item').click({ force: true })
            } else if ($body.find(':contains("more details")').length > 0) {
                cy.contains('more details').click({ force: true })
            } else if ($body.find(':contains("View more")').length > 0) {
                cy.contains('View more').click({ force: true })
            } else {
                // Look for the element in the product detail area specifically, not in cart area
                cy.get('.detail_area, .product-detail, .product-info').within(() => {
                    cy.get('.col-6 > .light-green > small, small.light-green, .light-green small, small[class*="green"]')
                      .first()
                      .should('be.visible')
                      .click({ force: true })
                })
            }
        })

        // 8. Popup display correctly
        cy.get('.popup-header').should('be.visible')

        // 9. Check visibility of all detail fields:

        // Size (one tire)
        cy.get('.three > :nth-child(1) > span').should('be.visible').invoke('text').then((sizeText) => {
            cy.log(`Size: ${sizeText}`)
        })

        // Load (range)
        cy.get('.three > :nth-child(2) > span').should('be.visible').invoke('text').then((loadText) => {
            cy.log(`Load: ${loadText}`)
        })

        // Speed (index)
        cy.get('.three > :nth-child(3) > span').should('be.visible').invoke('text').then((speedText) => {
            cy.log(`Speed: ${speedText}`)
        })

        // Item condition
        cy.get(':nth-child(7) > div > span').should('be.visible').invoke('text').then((itemConditionText) => {
            cy.log(`Item condition: ${itemConditionText}`)
        })

        // Tire's conditions
        cy.get(':nth-child(8) > div > span').should('be.visible').invoke('text').then((tireConditionsText) => {
            cy.log(`Tire's conditions: ${tireConditionsText}`)
        })

        // Tread depth (32nd of inch)
        cy.get(':nth-child(10) > :nth-child(1) > span').should('be.visible').invoke('text').then((treadDepthText) => {
            cy.log(`Tread depth: ${treadDepthText}`)
        })

        // Life remaining (approx)
        cy.get(':nth-child(10) > :nth-child(2) > span').should('be.visible').invoke('text').then((lifeRemainingText) => {
            cy.log(`Life remaining: ${lifeRemainingText}`)
        })

        // What is the tread depth of this tire when it is new?
        cy.get(':nth-child(11) > div > span').scrollIntoView().should('be.visible').invoke('text').then((newTreadDepthText) => {
            cy.log(`New tire tread depth: ${newTreadDepthText}`)
        })

        // Load Range
        cy.get(':nth-child(12) > :nth-child(1) > span').scrollIntoView().should('be.visible').invoke('text').then((loadRangeText) => {
            cy.log(`Load Range: ${loadRangeText}`)
        })

        // UTQG
        cy.get(':nth-child(12) > :nth-child(2) > span').scrollIntoView().should('be.visible').invoke('text').then((utqgText) => {
            cy.log(`UTQG: ${utqgText}`)
        })

        // Additional Tire Markings
        cy.get(':nth-child(13) > div > span').scrollIntoView().should('be.visible').invoke('text').then((additionalMarkingsText) => {
            cy.log(`Additional Tire Markings: ${additionalMarkingsText}`)
        })

        // Compatible Vehicle Type
        cy.get(':nth-child(14) > div > span').scrollIntoView().should('be.visible').invoke('text').then((vehicleTypeText) => {
            cy.log(`Compatible Vehicle Type: ${vehicleTypeText}`)
        })

        // Tire size
        cy.get(':nth-child(15) > div > span').scrollIntoView().should('be.visible').invoke('text').then((tireSizeText) => {
            cy.log(`Tire size: ${tireSizeText}`)
        })

        // Note
        cy.get(':nth-child(16) > div > span').scrollIntoView().should('be.visible').invoke('text').then((noteText) => {
            cy.log(`Note: ${noteText}`)
        })

        // Patch Repair
        cy.get(':nth-child(17) > div > span').scrollIntoView().should('be.visible').invoke('text').then((patchRepairText) => {
            cy.log(`Patch Repair: ${patchRepairText}`)
        })
    })

    it('TC_POPUP_DOT_YEAR_VALIDATION_005 - Verify DOT code and manufacturing year fields display correctly in popup and validate year extraction accuracy from DOT code', () => {
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

        // 7. Click on 'View more details about this item' button
        // Wait for page to load completely
        cy.wait(3000)
        
        // Try text-based selector first (most reliable)
        cy.get('body').then(($body) => {
            if ($body.find(':contains("View more details about this item")').length > 0) {
                cy.contains('View more details about this item').click({ force: true })
            } else if ($body.find(':contains("more details")').length > 0) {
                cy.contains('more details').click({ force: true })
            } else if ($body.find(':contains("View more")').length > 0) {
                cy.contains('View more').click({ force: true })
            } else {
                // Look for the element in the product detail area specifically, not in cart area
                cy.get('.detail_area, .product-detail, .product-info').within(() => {
                    cy.get('.col-6 > .light-green > small, small.light-green, .light-green small, small[class*="green"]')
                      .first()
                      .should('be.visible')
                      .click({ force: true })
                })
            }
        })

        // 8. Popup display correctly
        cy.get('.popup-header').should('be.visible')
        
        // Wait for popup to fully load
        cy.wait(2000)

        // 9. Scroll to DOT field and check visibility
        cy.get(':nth-child(9) > :nth-child(1) > span').scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible')

        // 10. Check Year made field visibility
        cy.get(':nth-child(9) > :nth-child(2) > span').scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible')

        // 11. Do DOT Year Validation
        // DOT (age) displays 4-digit code and validate year
        cy.get(':nth-child(9) > :nth-child(1) > span').scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible').invoke('text').then((dotText) => {
            cy.log(`DOT section: ${dotText}`)
            const dotMatch = dotText.match(/(\d{4})/)
            if (dotMatch) {
                const dotCode = dotMatch[1]
                const weekYear = dotCode.substring(2, 4)
                const expectedYear = parseInt(`20${weekYear}`)
                cy.log(`DOT Code: ${dotCode} → Expected Year: ${expectedYear}`)

                // Verify year made field matches DOT code
                cy.get(':nth-child(9) > :nth-child(2) > span').scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible').invoke('text').then((yearMadeText) => {
                    cy.log(`Year Made section: ${yearMadeText}`)
                    expect(yearMadeText).to.include(expectedYear.toString())
                    cy.log(`✓ DOT validation successful: ${dotCode} → ${expectedYear}`)
                })
            } else {
                cy.log('Could not extract DOT code from text')
            }

        //Click the close icon
        cy.get('.close-popup-header > .close-icon').click()
        })
    })

})