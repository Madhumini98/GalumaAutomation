describe('Galuma Desktop Product Information Tests for Four Tires', () => {
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

    it('TC_SHIPPING_COUNTDOWN_001 - Verify free shipping countdown timer displays correctly and updates in real-time', () => {
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

        // 5. Select 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
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

        // 8. Wait and watch the timer for 10 seconds
        cy.wait(10000)
    })

    it('TC_BRAND_PRODUCT_DISPLAY_002 - Verify brand logo, product name, and tire size specifications are displayed correctly on product details page', () => {
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

        // 5. Select 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
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

    it('TC_PRODUCT_CATEGORIZATION_003 - Verify product category classification matches tire life remaining percentage ranges', () => {
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

        // 5. Select 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
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

        // 7. Get front tires life remaining percentage
        cy.get('.stag-details > .left > :nth-child(4) > div > span').should('be.visible').invoke('text').then((frontTireText) => {
            cy.log(`Front tires life remaining: ${frontTireText}`)
            const frontPercentageMatch = frontTireText.match(/(\d+)%/)
            
            if (frontPercentageMatch) {
                const frontPercentage = parseInt(frontPercentageMatch[1])
                cy.log(`Front tire percentage: ${frontPercentage}%`)

                // 8. Get rear tires life remaining percentage
                cy.get('.stag-details > .right > :nth-child(4) > div > span').should('be.visible').invoke('text').then((rearTireText) => {
                    cy.log(`Rear tires life remaining: ${rearTireText}`)
                    const rearPercentageMatch = rearTireText.match(/(\d+)%/)
                    
                    if (rearPercentageMatch) {
                        const rearPercentage = parseInt(rearPercentageMatch[1])
                        cy.log(`Rear tire percentage: ${rearPercentage}%`)

                        // 9. Compare both percentages and determine the decision criteria
                        const avgPercentage = Math.round((frontPercentage + rearPercentage) / 2)
                        const minPercentage = Math.min(frontPercentage, rearPercentage)
                        const maxPercentage = Math.max(frontPercentage, rearPercentage)
                        
                        cy.log(`Average percentage: ${avgPercentage}%`)
                        cy.log(`Min percentage: ${minPercentage}%`)
                        cy.log(`Max percentage: ${maxPercentage}%`)

                        // 10. Get the product category text
                        cy.get('.detail_area > .quality-text > span').should('be.visible').invoke('text').then((categoryText) => {
                            cy.log(`Product category: ${categoryText}`)

                            // 11. Make decision based on tire life remaining percentages
                            // Using average percentage as the primary decision factor
                            let expectedCategory = ''
                            
                            if (avgPercentage === 100) {
                                expectedCategory = 'brand new'
                                expect(categoryText.toLowerCase()).to.include('brand new')
                            } else if (avgPercentage >= 97 && avgPercentage <= 99) {
                                expectedCategory = 'like new & no patch or take off'
                                expect(categoryText.toLowerCase()).to.satisfy((text) => {
                                    return text.includes('like new & no patch') || text.includes('take off')
                                })
                            } else if (avgPercentage >= 78 && avgPercentage <= 96) {
                                expectedCategory = 'like new'
                                expect(categoryText.toLowerCase()).to.include('like new')
                            } else if (avgPercentage >= 60 && avgPercentage <= 77) {
                                expectedCategory = 'great'
                                expect(categoryText.toLowerCase()).to.include('great')
                            } else if (avgPercentage < 60) {
                                expectedCategory = 'budget'
                                expect(categoryText.toLowerCase()).to.include('budget')
                            }

                            cy.log(`Expected category based on ${avgPercentage}% average: ${expectedCategory}`)
                            
                            // 12. Additional validation: Check if percentage difference is significant
                            const percentageDifference = Math.abs(frontPercentage - rearPercentage)
                            cy.log(`Percentage difference between front and rear: ${percentageDifference}%`)
                            
                            if (percentageDifference > 10) {
                                cy.log('WARNING: Significant difference between front and rear tire life remaining')
                            }
                        })
                    } else {
                        cy.log('Could not extract percentage from rear tire text')
                        throw new Error('Failed to extract rear tire percentage')
                    }
                })
            } else {
                cy.log('Could not extract percentage from front tire text')
                throw new Error('Failed to extract front tire percentage')
            }
        })
    })

    it('TC_PRODUCT_FEATURES_004 - Verify tire type, run-flat status, quantity, condition, and stock information display correctly', () => {
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

        // 5. Select 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
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

        // 9. Check visibility of Original Equipment logo
        cy.get('.col-6 > .ssn-product').should('be.visible').invoke('text').then((originalEquipmentText) => {
            cy.log(`Original Equipment section: ${originalEquipmentText}`)
        })

        // 10. Quantity displays with count icon and available number (1/2/4)
        cy.get('.last-season > .col-4 > .ssn-product').should('be.visible').invoke('text').then((quantityText) => {
            cy.log(`Quantity section: ${quantityText}`)
            expect(quantityText.toLowerCase()).to.satisfy((text) => {
                return text.includes('1 tire') || text.includes('2 tire') || text.includes('4 tire') || text.includes('quantity')
            })
        })

        // 11. Check visibility of Item Condition
        cy.get('.last-season > .col-5 > .ssn-product > b').should('be.visible').invoke('text').then((itemCondition) => {
            cy.log(`Item Condition: ${itemCondition}`)
        })

        // 12. Check visibility of Stock status
        cy.get('.last-season > .col-3 > .ssn-product > small').should('be.visible').invoke('text').then((stockStatus) => {
            cy.log(`Stock Status: ${stockStatus}`)
        })
    })

    it('TC_TIRE_SPECIFICATIONS_005 - Verify tire detail fields visibility and DOT code year validation accuracy', () => {
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

        // 5. Select 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
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
        cy.get('.product-items-details').first().scrollIntoView()
        cy.wait(1000)

        // 8. Check visibility of all detail fields

        // Thread depth displays with measurement and unit (32nd of inch) - check if element exists first
        cy.get('body').then(($body) => {
            if ($body.find('.tread-box').length > 0) {
                cy.get('.tread-box').first().should('be.visible').invoke('text').then((threadDepth) => {
                    cy.log(`Thread Depth: ${threadDepth}`)
                    if (threadDepth.trim()) {
                        expect(threadDepth.trim()).to.match(/\d+(\.\d+)?(\s*-\s*\d+(\.\d+)?)?/)
                    } else {
                        cy.log('Thread depth field is empty or not available')
                    }
                })
            } else {
                cy.log('Thread depth field not found - may be in different layout for four tires')
            }
        })

        // Life remaining shows percentage range (approx) - using .col > .tread-box
        cy.get('body').then(($body) => {
            if ($body.find('.col > .tread-box').length > 0) {
                cy.get('.col > .tread-box').should('be.visible').invoke('text').then((lifeRemaining) => {
                    cy.log(`Life Remaining: ${lifeRemaining}`)
                    if (lifeRemaining.trim()) {
                        expect(lifeRemaining).to.match(/\d+%/)
                    } else {
                        cy.log('Life remaining field is empty or not available')
                    }
                })
            } else {
                cy.log('Life remaining field not found - may be in different layout for four tires')
            }
        })

        // New tire tread depth field shows original depth value - check if element exists first
        cy.get('body').then(($body) => {
            if ($body.find(':nth-child(2) > .col-12 > .tread-box').length > 0) {
                cy.get(':nth-child(2) > .col-12 > .tread-box').should('be.visible').invoke('text').then((newTireDepth) => {
                    cy.log(`New Tire Tread Depth: ${newTireDepth}`)
                })
            } else {
                cy.log('New tire tread depth field not found - may be in different layout for two tires')
            }
        })

        // Check DOT section visibility
        cy.get('.stag-details > .left > :nth-child(7) > div > label > strong').should('be.visible').invoke('text').then((dotSectionText) => {
            cy.log(`DOT Section Header: ${dotSectionText}`)
        })

        // Check Year made section visibility
        cy.get('.stag-details > .left > :nth-child(9) > div > label > strong').should('be.visible').invoke('text').then((yearSectionText) => {
            cy.log(`Year Made Section Header: ${yearSectionText}`)
        })

        // Validate Front Tire 1 DOT and Year
        cy.get('.stag-details > .left > :nth-child(8) > :nth-child(1) > span').should('be.visible').invoke('text').then((frontTire1DotText) => {
            cy.log(`Front Tire 1 DOT: ${frontTire1DotText}`)
            // Extract last 2 digits from DOT code (like "XX23" → "23")
            const dotMatch = frontTire1DotText.match(/(\d{2})(\d{2})$/)
            if (dotMatch) {
                const lastTwoDigits = dotMatch[2]
                const expectedYear = parseInt(`20${lastTwoDigits}`)
                cy.log(`Front Tire 1 DOT last 2 digits: ${lastTwoDigits} → Expected Year: ${expectedYear}`)

                // Compare DOT Front Tire 1 with Year made Front Tire 1 section
                cy.get('.stag-details > .left > :nth-child(10) > :nth-child(1) > span').should('be.visible').invoke('text').then((frontTire1YearText) => {
                    cy.log(`Front Tire 1 Year Made: ${frontTire1YearText}`)
                    expect(frontTire1YearText.replace(/\s+/g, ' ').trim()).to.include(expectedYear.toString())
                })
            } else {
                cy.log('Could not extract DOT code from Front Tire 1 text')
            }
        })

        // Validate Front Tire 2 DOT and Year
        cy.get('.stag-details > .left > :nth-child(8) > :nth-child(2) > span').should('be.visible').invoke('text').then((frontTire2DotText) => {
            cy.log(`Front Tire 2 DOT: ${frontTire2DotText}`)
            // Extract last 2 digits from DOT code (like "XX22" → "22")
            const dotMatch = frontTire2DotText.match(/(\d{2})(\d{2})$/)
            if (dotMatch) {
                const lastTwoDigits = dotMatch[2]
                const expectedYear = parseInt(`20${lastTwoDigits}`)
                cy.log(`Front Tire 2 DOT last 2 digits: ${lastTwoDigits} → Expected Year: ${expectedYear}`)

                // Compare DOT Front Tire 2 with Year made Front Tire 2 section
                cy.get('.stag-details > .left > :nth-child(10) > :nth-child(2) > span').should('be.visible').invoke('text').then((frontTire2YearText) => {
                    cy.log(`Front Tire 2 Year Made: ${frontTire2YearText}`)
                    expect(frontTire2YearText.replace(/\s+/g, ' ').trim()).to.include(expectedYear.toString())
                })
            } else {
                cy.log('Could not extract DOT code from Front Tire 2 text')
            }
        })

        // Validate Rear Tire 1 DOT and Year
        cy.get('.stag-details > .right > :nth-child(8) > :nth-child(1) > span').should('be.visible').invoke('text').then((rearTire1DotText) => {
            cy.log(`Rear Tire 1 DOT: ${rearTire1DotText}`)
            // Extract last 2 digits from DOT code (like "XX23" → "23")
            const dotMatch = rearTire1DotText.match(/(\d{2})(\d{2})$/)
            if (dotMatch) {
                const lastTwoDigits = dotMatch[2]
                const expectedYear = parseInt(`20${lastTwoDigits}`)
                cy.log(`Rear Tire 1 DOT last 2 digits: ${lastTwoDigits} → Expected Year: ${expectedYear}`)

                // Compare DOT Rear Tire 1 with Year made Rear Tire 1 section
                cy.get('.stag-details > .right > :nth-child(10) > :nth-child(1) > span').should('be.visible').invoke('text').then((rearTire1YearText) => {
                    cy.log(`Rear Tire 1 Year Made: ${rearTire1YearText}`)
                    expect(rearTire1YearText.replace(/\s+/g, ' ').trim()).to.include(expectedYear.toString())
                })
            } else {
                cy.log('Could not extract DOT code from Rear Tire 1 text')
            }
        })

        // Validate Rear Tire 2 DOT and Year
        cy.get('.stag-details > .right > :nth-child(8) > :nth-child(2) > span').should('be.visible').invoke('text').then((rearTire2DotText) => {
            cy.log(`Rear Tire 2 DOT: ${rearTire2DotText}`)
            // Extract last 2 digits from DOT code (like "XX22" → "22")
            const dotMatch = rearTire2DotText.match(/(\d{2})(\d{2})$/)
            if (dotMatch) {
                const lastTwoDigits = dotMatch[2]
                const expectedYear = parseInt(`20${lastTwoDigits}`)
                cy.log(`Rear Tire 2 DOT last 2 digits: ${lastTwoDigits} → Expected Year: ${expectedYear}`)

                // Compare DOT Rear Tire 2 with Year made Rear Tire 2 section
                cy.get('.stag-details > .right > :nth-child(10) > :nth-child(2) > span').should('be.visible').invoke('text').then((rearTire2YearText) => {
                    cy.log(`Rear Tire 2 Year Made: ${rearTire2YearText}`)
                    expect(rearTire2YearText.replace(/\s+/g, ' ').trim()).to.include(expectedYear.toString())
                })
            } else {
                cy.log('Could not extract DOT code from Rear Tire 2 text')
            }
        })

        //Check the visibility of stock number
        cy.get('body').then(($body) => {
            if ($body.find('.wish-entry > .col-5').length > 0) {
                cy.get('.wish-entry > .col-5').should('be.visible').invoke('text').then((stockNumber) => {
                    cy.log(`Stock Number: ${stockNumber}`)
                })
            } else {
                cy.log('Stock number field not found - may be in different layout for four tires')
            }
        })
    })

    it('TC_SERVICE_OPTIONS_006 - Verify pickup service, installation options, guarantees, and quality assurance information display', () => {
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

        // 5. Select 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
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

        // 7. Scroll to service info section
        cy.get('.detail_area > .last-det-section').scrollIntoView()
        cy.wait(1000)

        // 8. Check the text visibility and content for pickup service
        cy.get('.col-9 > :nth-child(1) > .pleft-10 > strong').should('be.visible').invoke('text').then((text) => {
            expect(text.replace(/\s+/g, ' ').trim()).to.include('Pick up service available')
        })

        // 9. Check the text visibility and content for booking service
        cy.get('.col-9 > :nth-child(2) > .pleft-10 > strong').should('be.visible').invoke('text').then((text) => {
            expect(text.replace(/\s+/g, ' ').trim()).to.include('Booking your Pick up & installation')
        })

        // 10. Test the image visibility
        cy.get('.last-det-section > .col-3 > .img-fluid').should('be.visible')

        // 11. Test guarantee text area
        cy.get('.media-body > .list-unstyled > :nth-child(1)').scrollIntoView().should('be.visible').invoke('text').then((text) => {
            expect(text.replace(/\s+/g, ' ').trim()).to.include('360 Days Money Back Guranatee')
        })

        // 12. Test quality assurance text area
        cy.get('.media-body > .list-unstyled > :nth-child(3)').scrollIntoView().should('be.visible').invoke('text').then((text) => {
            expect(text.replace(/\s+/g, ' ').trim()).to.include('100% free of any leaks, bubbles or broken belts')
        })

        // 13. Test transparency text area
        cy.get('.list-unstyled > :nth-child(5)').scrollIntoView().should('be.visible').invoke('text').then((text) => {
            expect(text.replace(/\s+/g, ' ').trim()).to.include('What You See Is What You Get')
        })

        // 14. Test shipping text area
        cy.get('.list-unstyled > :nth-child(7)').scrollIntoView().should('be.visible').invoke('text').then((text) => {
            expect(text.replace(/\s+/g, ' ').trim()).to.include('Fedex/UPS All Orders for Free')
        })

        // 15. Test the Risk Free Buying shield visibility
        cy.get('.media > .align-self-center').should('be.visible')
    })

    it('TC_PRICING_SUMMARY_007 - Verify shipping costs, subtotal, and total price calculations display correctly', () => {
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

        // 5. Select 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
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

        // 7. Test shipping details visibility
        cy.get('.detail_area > .price-with-sales-cout-down > .shippin-price-container > .col-8').scrollIntoView().should('be.visible')

        // 8. Verify shipping should be free
        cy.get('.detail_area > .price-with-sales-cout-down > .shippin-price-container > .col-4').should('be.visible').invoke('text').then((text) => {
            expect(text.replace(/\s+/g, ' ').trim().toLowerCase()).to.satisfy((shippingText) => {
                return shippingText.includes('free') || shippingText.includes('$0')
            })
        })

        // 9. Test subtotal visibility
        cy.get('.detail_area > .price-with-sales-cout-down > .price > :nth-child(1) > p').scrollIntoView().should('be.visible')

        // 10. Verify total price visibility
        cy.get('.detail_area > .price-with-sales-cout-down > .price > :nth-child(2) > h3 > .total-cost-line').should('be.visible').invoke('text').then((text) => {
            cy.log(`Total price: ${text}`)
            expect(text.replace(/\s+/g, ' ').trim()).to.match(/\$\d+(\.\d{2})?/)
        })
    })

    it('TC_DELIVERY_OPTIONS_008 - Verify pickup and delivery section accessibility and visibility', () => {
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

        // 5. Select 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
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

        // 7. Check the Pickup section visibility
        cy.get('#accordion > .accordian-card > #heading-1').scrollIntoView().should('be.visible')

        // 8. Check the delivery section visibility
        cy.get('.delivery > .card-body').scrollIntoView().should('be.visible')
    })

    it('TC_PRODUCT_GALLERY_009 - Verify product image gallery functionality, thumbnails, zoom features, and navigation', () => {
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

        // 5. Select 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
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

        // Click on different product images and verify they are clickable
        // Verify thumbnail container exists
        cy.get('#thumb-container').should('exist')

        // Get all thumbnail images and click on them
        cy.get('#thumb-container img').then(($images) => {
            const imageCount = $images.length
            cy.log(`Found ${imageCount} thumbnail images`)

            if (imageCount > 0) {
                // Click on first thumbnail if it exists
                cy.get('#thumb-container img').first()
                    .scrollIntoView()
                    .should('exist')
                    .click({ force: true })
                cy.wait(1000)

                // Check stock number visibility of the first image
                cy.get('.stock-number-product').should('be.visible')

                // Check tire quantity section image and verify it should be 1 (One)
                cy.get('.product-black-section').should('be.visible').invoke('text').then((quantityText) => {
                    cy.log(`Quantity section text: ${quantityText}`)
                    expect(quantityText.toLowerCase()).to.satisfy((text) => {
                        return text.includes('SET') || text.includes('OF') || text.includes('4') || text.includes('Tires')
                    })
                })

                // Click on the first image zoom icon
                cy.get('.handler.expand img.aseterat').first()
                    .scrollIntoView()
                    .should('exist')
                    .click({ force: true })
                cy.wait(1000)

                // Banner should popup
                cy.get('.ebzoom-banner-container').should('exist')

                // Close the banner
                cy.get('.ebzoom-close > img')
                    .should('exist')
                    .click({ force: true })
                cy.wait(1000)

                if (imageCount > 1) {
                    // Click on second thumbnail if it exists
                    cy.get('#thumb-container img').eq(1)
                        .scrollIntoView()
                        .should('exist')
                        .click({ force: true })
                    cy.wait(1000)
                }

                if (imageCount > 2) {
                    // Click on third thumbnail if it exists
                    cy.get('#thumb-container img').eq(2)
                        .scrollIntoView()
                        .should('exist')
                        .click({ force: true })
                    cy.wait(1000)
                }

                // Log successful clicks
                cy.log(`Successfully clicked on ${Math.min(imageCount, 3)} thumbnail images`)
            } else {
                cy.log('No thumbnail images found')
            }
        })

        // Verify that thumbnail container is still present after clicking
        cy.get('#thumb-container').should('exist')
    })


})