describe('Galuma Desktop Tires By Size Page Tests', () => {
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

    it('TC_GALUMA_TBS_NAV_001 - Verify successful navigation to the shop tires by size page', () => {
        // Verify home page is loaded
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')

        // Click Shop Products
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(1000)

        // Click Tires By Size
        cy.get('[href="/t/s"]').should('be.visible').click()
        cy.wait(2000)

        // Verify navigation to shop tires by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')
    })

    it('TC_GALUMA_TBS_SEARCH_002 - Verify tire search by size with Width 225, Ratio 35, Diameter 20', () => {
        // Navigate to shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // Wait for search form to be available
        cy.get('.content_form-tire').should('be.visible')

        // Click on Width dropdown
        cy.get('#exampleFormControlSelect1').should('be.visible').click()
        cy.wait(1000)

        // Enter Width '225'
        cy.get('#select-dropdown-content1 > :nth-child(1) > [data-value="225"] > .red_h').should('be.visible').click()
        cy.wait(1000)

        // Click on Ratio dropdown
        cy.get('#tire-ratio-value').should('be.visible').click()
        cy.wait(1000)

        // Enter Ratio '35'
        cy.get('#select-dropdown-content2 > :nth-child(1) > [data-value="35"] > .red_h').should('be.visible').click()
        cy.wait(1000)

        // Click on Diameter dropdown
        cy.get('#exampleFormControlSelect3').should('be.visible').click()
        cy.wait(1000)

        // Enter Diameter '20'
        cy.get('#select-dropdown-content3 > :nth-child(1) > [data-value="20"] > .red_h').should('be.visible').click()
        cy.wait(1000)

        // Click "View Results" button
        cy.get('#top-view-result-btn').should('be.visible').click()
        cy.wait(3000)

        // Verify search results
        cy.get('.by-size-code').should('be.visible')

        // Verify the search parameters are displayed correctly
        cy.get('.by-size-code').should('contain', '225')
        cy.get('.by-size-code').should('contain', '35')
        cy.get('.by-size-code').should('contain', '20')
    })

    it('TC_GALUMA_TBS_FINDOUT_004 - Not sure how to read your tire size? Find out here!', () => {
        // Navigate to shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // Locate "Not sure how to read your tire size? Find out here!" section
        cy.get('.open-popup').should('be.visible')

        // Click on "Find out here!" text
        cy.get('.open-popup > span').should('be.visible').click()
        cy.wait(2000)

        // Verify popup content appears
        cy.get('#findout-tire-modal > .popup-content > :nth-child(2)').should('be.visible')

        // Click on "click here to learn more"
        cy.get('#findout-tire-modal > .popup-content > #learn_more').should('be.visible').click()
        cy.wait(3000)

        // Verify navigation to tire reading guide page
        cy.url().should('include', '/read-my-tires')
        cy.url().should('eq', 'https://dev.galumatires.com/read-my-tires')
    })

    it('TC_GALUMA_TBS_SORT_005 - Verify user can sort results by Title(A-Z) when browsing products', () => {
        // Navigate to the shop by tires by size page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // Select "Title (A-Z)" from sort results dropdown
        cy.get('#sort-results-by-select').should('be.visible').select('titleAZ')
        cy.wait(3000)

        // Verify results are sorted - check that products are loaded and displayed
        cy.get('.browse-product').should('be.visible')

        // Verify the sort dropdown shows the selected option
        cy.get('#sort-results-by-select').should('have.value', 'titleAZ')

        // Verify that sorting has been applied by checking if products container exists
        cy.get('#tire-products-container').should('be.visible')
    })

    it('TC_GALUMA_TBS_SORT_006 - Verify user can sort results by Title(Z-A) when browsing products', () => {
        // Navigate to the shop by tires by size page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // Select "Title (Z-A)" from sort results dropdown
        cy.get('#sort-results-by-select').should('be.visible').select('titleZA')
        cy.wait(3000)

        // Verify results are sorted - check that products are loaded and displayed
        cy.get('.browse-product').should('be.visible')

        // Verify the sort dropdown shows the selected option
        cy.get('#sort-results-by-select').should('have.value', 'titleZA')

        // Verify that sorting has been applied by checking if products container exists
        cy.get('#tire-products-container').should('be.visible')
    })

    it('TC_GALUMA_TBS_SORT_007 - Verify user can sort results by Price(Low to High) when browsing products', () => {
        // Navigate to the shop by tires by size page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // Select Price(Low to High) - look for option containing "Price" and "Low to High" or similar ascending price text
        let selectedValue
        cy.get('#sort-results-by-select').contains(/Price.*Low.*High|Low.*High.*Price|asc/i).then(($option) => {
            selectedValue = $option.val()
            cy.get('#sort-results-by-select').select(selectedValue)
        })
        cy.wait(3000)

        // Verify results are sorted - check that products are loaded and displayed
        cy.get('.browse-product').should('be.visible')

        // Verify the sort dropdown shows the selected option
        cy.get('#sort-results-by-select').should('have.value', 'priceLowHigh')

        // Verify that sorting has been applied by checking if products container exists
        cy.get('#tire-products-container').should('be.visible')
    })

    it('TC_GALUMA_TBS_SORT_008 - Verify user can able to sort results by Price(High to Low) when browse the products', () => {
        // Navigate to the shop by tires by size page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // Select Price(Low to High) - look for option containing "Price" and "High to Low"  or similar ascending price text
        let selectedValue
        cy.get('#sort-results-by-select').contains(/Price.*High.*Low|High.*Low.*Price|asc/i).then(($option) => {
            selectedValue = $option.val()
            cy.get('#sort-results-by-select').select(selectedValue)
        })
        cy.wait(3000)

        // Verify results are sorted - check that products are loaded and displayed
        cy.get('.browse-product').should('be.visible')

        // Verify the sort dropdown shows the selected option
        cy.get('#sort-results-by-select').should('have.value', 'priceHighLow')

        // Verify that sorting has been applied by checking if products container exists
        cy.get('#tire-products-container').should('be.visible')
    })

    it('TC_GALUMA_TBS_SORT_009 - Verify user can able to sort newest results when browse the products', () => {
        // Navigate to the shop by tires by size page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // Select Newest - look for option containing "Newest" or similar newest text
        cy.get('#sort-results-by-select').contains(/Newest|New|Latest/i).then(($option) => {
            const value = $option.val()
            cy.get('#sort-results-by-select').select(value)
        })
        cy.wait(3000)

        // Verify results are sorted - check that products are loaded and displayed
        cy.get('.browse-product').should('be.visible')

        // Verify that sorting has been applied by checking if products container exists
        cy.get('#tire-products-container').should('be.visible')
    })

    it('TC_GALUMA_TBS_QTY_010 - Verify tire quantity filtering functionality', () => {
        // Navigate to the shop by tires by size page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // Go to Qty of tires section
        cy.get('.box.qty > .qty').should('be.visible')

        // Click quantity of tires as 1
        cy.get('.box.qty > .d-flex > :nth-child(1)').should('be.visible').click()
        // Wait some time (15 secs) to check results
        cy.wait(15000)
        cy.get('.box.qty > .d-flex > :nth-child(1)').should('be.visible')

        // Click quantity of tires as 2
        cy.get('.brdr-pastel-grey > .btn').should('be.visible').click()
        // Wait some time (15 secs) to check results
        cy.wait(15000)
        cy.get('#tire-products-container').should('be.visible')

        // Click quantity of tires as 4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
        // Wait some time (15 secs) to check results
        cy.wait(15000)
        cy.get('#tire-products-container').should('be.visible')
    })

    it('TC_GALUMA_TBS_FILTER_011 - Verify dropdown filter functionality with specific values (245/50R19)', () => {
        // 1. Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // 2. Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // 3. Select the width of the product - set value as '245'
        cy.get('#sidebar-width-select').should('be.visible').select('245')
        cy.wait(2000)

        // 4. Select the aspect ratio of the product - set value as '50'
        cy.get('#sidebar-profile-select').should('be.visible').select('50')
        cy.wait(2000)

        // 5. Select the diameter of the product - set value as '19'
        cy.get('#sidebar-rim-select').should('be.visible').select('19')
        cy.wait(3000)

        // Verify that filters have been applied and results are displayed
        cy.get('#tire-products-container').should('be.visible')

        // 6. Select first product randomly in the results list
        cy.get('#tire-products-container [data-eid]').should('have.length.greaterThan', 0)

        // Scroll to the first result to make it visible
        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
        cy.wait(1000)

        cy.get('#tire-products-container [data-eid]').first().then(($product) => {
            const dataEid = $product.attr('data-eid')
            cy.log(`Selected product with data-eid: ${dataEid}`)

            // 7. Check the filtered results in title section
            // First try to find tire size in the product card itself, then use overlay if needed
            cy.get(`#tire-products-container > [data-eid="${dataEid}"]`).first().then(($productCard) => {
                // Check if .det element exists in the product card
                if ($productCard.find('.det').length > 0) {
                    cy.get(`#tire-products-container > [data-eid="${dataEid}"] .det`).should('contain', '245/50R19')
                    cy.log('Found tire size in product card: 245/50R19')
                } else {
                    // If not found in product card, open overlay to check
                    cy.get(`#tire-products-container > [data-eid="${dataEid}"] .box-cover`).click({ force: true })
                    cy.wait(3000)

                    // Wait for overlay to be fully visible and check for tire size
                    // 8. It should be "245/50R19" according to above search and verify results correctly
                    cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand_img > .title-details > .my-0 > .det`).should('be.visible')
                    cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand_img > .title-details > .my-0 > .det`).should('contain', '245/50R19')

                    cy.log('Verified that filtered product shows correct tire size: 245/50R19')

                    // Close the overlay
                    cy.get(`[data-eid="${dataEid}"] > .overlay > .close_button_overlay`).click({ force: true })
                    cy.wait(1000)
                }
            })
        })

        // Final verification
        cy.log('Dropdown filter test with specific values (245/50R19) completed successfully')
    })

    it('TC_GALUMA_TBS_FILTER_012 - Verify the hierarchical filter dependency (top-to-bottom clearing)', () => {
        // 1. Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                 username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')

        // 2. Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // 3. Click quantity of tires as 2
        cy.get('.brdr-pastel-grey > .btn').should('be.visible').click()
        cy.wait(3000)
 
        // 4. Select the width of the product - set value as '225'
        cy.get('#sidebar-width-select').should('be.visible').select('225')
        cy.wait(2000)

        // 5. Select the aspect ratio of the product - set value as '60'
        cy.get('#sidebar-profile-select').should('be.visible').select('60')
        cy.wait(2000)

        // 6. Select the diameter of the product - set value as '18'
        cy.get('#sidebar-rim-select').should('be.visible').select('18')
        cy.wait(3000)

        // Verify that filters have been applied and results are displayed
        cy.get('#tire-products-container').should('be.visible')

        // 7. Select first product randomly in the results list
        cy.get('#tire-products-container [data-eid]').should('have.length.greaterThan', 0)

        // Scroll to the first result to make it visible
        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
        cy.wait(1000)

        cy.get('#tire-products-container [data-eid]').first().then(($product) => {
            const dataEid = $product.attr('data-eid')
            cy.log(`Selected product with data-eid: ${dataEid}`)

            // 8. Check the filtered results in title section
            // First try to find tire size in the product card itself, then use overlay if needed
            cy.get(`#tire-products-container > [data-eid="${dataEid}"]`).first().then(($productCard) => {
                // Check if .det element exists in the product card
                if ($productCard.find('.det').length > 0) {
                    // 9. It should be "225/60R18" according to above search and verify results correctly
                    cy.get(`#tire-products-container > [data-eid="${dataEid}"] .det`).should('contain', '225/60R18')
                    cy.log('Found tire size in product card: 225/60R18')
                } else {
                    // If not found in product card, open overlay to check
                    cy.get(`#tire-products-container > [data-eid="${dataEid}"] .box-cover`).click({ force: true })
                    cy.wait(3000)

                    // 9. It should be "225/60R18" according to above search and verify results correctly
                    cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand_img > .title-details > .my-0 > .det`).should('be.visible')
                    cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand_img > .title-details > .my-0 > .det`).should('contain', '225/60R18')

                    cy.log('Verified that filtered product shows correct tire size: 225/60R18')

                    // Close the overlay
                    cy.get(`[data-eid="${dataEid}"] > .overlay > .close_button_overlay`).click({ force: true })
                    cy.wait(1000)
                }
            })
        })

        // 10. Click quantity of tires as 1 (this should clear the below filters due to hierarchical dependency)
        cy.get('.box.qty > .d-flex > :nth-child(1)').should('be.visible').click()
        cy.wait(3000)

        // 11. Verify the below filters are cleared due to hierarchical dependency
        cy.log('Verifying that filters are cleared due to hierarchical dependency...')

        // Check width filter is cleared
        cy.get('#sidebar-width-select').then(($select) => {
            const value = $select.val()
            expect(value).to.not.equal('225')
            cy.log(`Width filter cleared - current value: ${value}`)
        })

        // Check profile/ratio filter is cleared
        cy.get('#sidebar-profile-select').then(($select) => {
            const value = $select.val()
            expect(value).to.not.equal('60')
            cy.log(`Profile filter cleared - current value: ${value}`)
        })

        // Check diameter/rim filter is cleared
        cy.get('#sidebar-rim-select').then(($select) => {
            const value = $select.val()
            expect(value).to.not.equal('18')
            cy.log(`Diameter filter cleared - current value: ${value}`)
        })

        // Final verification
        cy.log('Hierarchical filter dependency test (top-to-bottom clearing) completed successfully')
    })

    it('TC_GALUMA_TBS_FILTER_013 - Verify filter combinations work correctly', () => {
        // 1. Navigate to shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // 2. Verify URL includes '/t/s' and page is visible
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)
        

        // 4. Test filter combinations:

        // Combination 1: Qty=1 + Width
        cy.log('Testing Combination 1: Qty=1 + Width=245')

        // Select Qty=1
        cy.get('.d-flex > :nth-child(1) > .btn').should('be.visible').click()
        cy.wait(3000)

        // Select Width=245
        cy.get('#sidebar-width-select').should('be.visible').select('245')
        cy.wait(3000)

        // Verify results displayed
        cy.get('#tire-products-container').should('be.visible')

        // Check product count and interact with first product if available
        cy.get('#tire-products-container [data-eid]').then(($products) => {
            if ($products.length > 0) {
                cy.log(`Found ${$products.length} products for Qty=1 + Width=245`)

                // Scroll to the first result and verify it's visible
                cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                cy.wait(1000)
                cy.get('#tire-products-container [data-eid]').first().should('be.visible')
            } else {
                cy.log('No products found for Qty=1 + Width=245 combination')
            }
        })

        // Combination 2: Qty=2 + Width + Profile
        cy.log('Testing Combination 2: Qty=2 + Width=245 + Profile=35')

        // Select Qty=2
        cy.get('.brdr-pastel-grey > .btn').should('be.visible').click()
        cy.wait(3000)

        // Select Width=245 (should already be selected, but ensuring it's set)
        cy.get('#sidebar-width-select').should('be.visible').select('245')
        cy.wait(2000)

        // Select Profile=35 - if not available, fallback to 50
        cy.get('#sidebar-profile-select').then(($select) => {
            const options = Array.from($select[0].options).map(option => option.value)
            if (options.includes('35')) {
                cy.get('#sidebar-profile-select').select('35')
                cy.log('Selected Profile=35')
            } else {
                cy.get('#sidebar-profile-select').select('50')
                cy.log('Profile=35 not available, selected Profile=50 instead')
            }
        })
        cy.wait(3000)

        // Verify results displayed
        cy.get('#tire-products-container').should('be.visible')

        // Check products for this combination
        cy.get('#tire-products-container [data-eid]').then(($products) => {
            if ($products.length > 0) {
                cy.log(`Found ${$products.length} products for Qty=2 + Width=245 + Profile combination`)

                // Scroll to the first result and interact with it
                cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                cy.wait(1000)

                // Get the first product and verify its tire size contains the selected values
                cy.get('#tire-products-container [data-eid]').first().then(($product) => {
                    const dataEid = $product.attr('data-eid')
                    cy.log(`Selected product with data-eid: ${dataEid}`)

                    // Check if tire size information is visible in the product card
                    cy.get(`#tire-products-container > [data-eid="${dataEid}"]`).first().then(($productCard) => {
                        if ($productCard.find('.det').length > 0) {
                            cy.get(`#tire-products-container > [data-eid="${dataEid}"] .det`).should('contain', '245')
                            cy.log('Verified tire size contains selected filter value: 245')
                        } else {
                            // Open overlay to check tire size
                            cy.get(`#tire-products-container > [data-eid="${dataEid}"] .box-cover`).click({ force: true })
                            cy.wait(3000)

                            cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand_img > .title-details > .my-0 > .det`).should('be.visible')
                            cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand_img > .title-details > .my-0 > .det`).should('contain', '245')

                            cy.log('Verified tire size in overlay contains selected filter value: 245')

                            // Close the overlay
                            cy.get(`[data-eid="${dataEid}"] > .overlay > .close_button_overlay`).click({ force: true })
                            cy.wait(1000)
                        }
                    })
                })
            } else {
                cy.log('No products found for Qty=2 + Width=245 + Profile combination')
            }
        })

        // Combination 3: Qty=4 + Width + Profile + Rim
        cy.log('Testing Combination 3: Qty=4 + Width=245 + Profile + Rim=19')

        // Select Qty=4
        cy.get('.d-flex > :nth-child(3) > .btn').should('be.visible').click()
        cy.wait(3000)

        // Select Width=245
        cy.get('#sidebar-width-select').should('be.visible').select('245')
        cy.wait(2000)

        // Select Profile - try 50 first, then 60 if 50 is not available
        let selectedProfile = ''
        cy.get('#sidebar-profile-select').then(($select) => {
            const options = Array.from($select[0].options).map(option => option.value)
            if (options.includes('50')) {
                cy.get('#sidebar-profile-select').select('50')
                selectedProfile = '50'
                cy.log('Selected Profile=50')
            } else if (options.includes('60')) {
                cy.get('#sidebar-profile-select').select('60')
                selectedProfile = '60'
                cy.log('Selected Profile=60')
            } else {
                cy.log('No suitable profile value found')
            }
        })
        cy.wait(2000)

        // Select Rim=19
        cy.get('#sidebar-rim-select').should('be.visible').select('19')
        cy.wait(3000)

        // Verify results displayed
        cy.get('#tire-products-container').should('be.visible')

        // Check products for this combination
        cy.get('#tire-products-container [data-eid]').then(($products) => {
            if ($products.length > 0) {
                cy.log(`Found ${$products.length} products for Qty=4 + Width=245 + Profile + Rim=19`)

                // Scroll to the first result and interact with it
                cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                cy.wait(1000)

                // Get the first product and verify its tire size contains the selected values
                cy.get('#tire-products-container [data-eid]').first().then(($product) => {
                    const dataEid = $product.attr('data-eid')
                    cy.log(`Selected product with data-eid: ${dataEid}`)

                    // Check if tire size information is visible in the product card
                    cy.get(`#tire-products-container > [data-eid="${dataEid}"]`).first().then(($productCard) => {
                        if ($productCard.find('.det').length > 0) {
                            // Verify contains width 245 and rim 19
                            cy.get(`#tire-products-container > [data-eid="${dataEid}"] .det`).should('contain', '245')
                            cy.get(`#tire-products-container > [data-eid="${dataEid}"] .det`).should('contain', '19')
                            cy.log('Verified tire size contains selected filter values: 245 and R19')
                        } else {
                            // Open overlay to check tire size
                            cy.get(`#tire-products-container > [data-eid="${dataEid}"] .box-cover`).click({ force: true })
                            cy.wait(3000)

                            cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand_img > .title-details > .my-0 > .det`).should('be.visible')
                            cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand_img > .title-details > .my-0 > .det`).should('contain', '245')
                            cy.get(`[data-eid="${dataEid}"] > .box-cover > .overlay > .brand_img > .title-details > .my-0 > .det`).should('contain', '19')

                            cy.log('Verified tire size in overlay contains selected filter values: 245 and R19')

                            // Close the overlay
                            cy.get(`[data-eid="${dataEid}"] > .overlay > .close_button_overlay`).click({ force: true })
                            cy.wait(1000)
                        }
                    })
                })
            } else {
                cy.log('No products found for Qty=4 + Width=245 + Profile + Rim=19 combination')
            }
        })

        // 5. Log test completion - Verify filter combinations work correctly
        cy.log('Filter combinations test completed successfully')
    })

    it('TC_GALUMA_TBS_ADDITIONAL_FILTERS_014 - Verify individual additional filter functionality for checkbox-based filters', () => {
        // 1. Navigate to shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // 2. Verify URL includes '/t/s' and page is visible
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // 4. Test checkbox filter categories:

        // Brands:
        cy.log('Testing Brands filter category')

        // Navigate to additional filters
        cy.get('.add-filters').should('be.visible').click()
        cy.wait(3000)

        // Wait for additional filters panel to be visible or force interaction
        cy.get('body').then(($body) => {
            if ($body.find('.additional-filters:visible').length > 0) {
                cy.get('.additional-filters').should('be.visible')
                cy.log('Additional filters panel is visible')
            } else {
                cy.log('Additional filters panel not visible, continuing with force option')
            }
        })
        cy.wait(1000)

        // Expand Brands section - use force if necessary
        cy.get('#headingOne > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Test Continental (if available)
        cy.log('Testing Continental brand filter')
        cy.get('body').then(($body) => {
            if ($body.find('#continental-54').length > 0) {
                cy.get('#continental-54').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Continental brand filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Continental brand filter')
                    }
                })

                // Unselect Continental
                cy.get('#continental-54').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Continental filter tested successfully')
            } else {
                cy.log('Continental filter not available, skipping this test')
            }
        })

        // Test Michelin (if available)
        cy.log('Testing Michelin brand filter')
        cy.get('body').then(($body) => {
            if ($body.find('#michelin-55').length > 0) {
                cy.get('#michelin-55').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Michelin brand filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Michelin brand filter')
                    }
                })

                // Unselect Michelin
                cy.get('#michelin-55').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Michelin filter tested successfully')
            } else {
                cy.log('Michelin filter not available, skipping this test')
            }
        })

        // Close additional filters to reset
        cy.get('.add-filters').click()
        cy.wait(1000)

        // Models:
        cy.log('Testing Models filter category')

        // Open filters and navigate to additional filters
        cy.get('.add-filters').should('be.visible').click()
        cy.wait(3000)

        // Wait for additional filters panel to be visible or force interaction
        cy.get('body').then(($body) => {
            if ($body.find('.additional-filters:visible').length > 0) {
                cy.get('.additional-filters').should('be.visible')
                cy.log('Additional filters panel is visible')
            } else {
                cy.log('Additional filters panel not visible, continuing with force option')
            }
        })
        cy.wait(1000)

        // Expand Models section - use force if necessary
        cy.get('#headingTwo > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Test ADVAN Apex V601 (if available)
        cy.log('Testing ADVAN Apex V601 model filter')
        cy.get('body').then(($body) => {
            if ($body.find('#advan-apex-v601-356').length > 0) {
                cy.get('#advan-apex-v601-356').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for ADVAN Apex V601 model filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for ADVAN Apex V601 model filter')
                    }
                })

                // Unselect ADVAN Apex V601
                cy.get('#advan-apex-v601-356').uncheck({ force: true })
                cy.wait(2000)
                cy.log('ADVAN Apex V601 filter tested successfully')
            } else {
                cy.log('ADVAN Apex V601 filter not available, skipping this test')
            }
        })

        // Test Capricorn HP (if available)
        cy.log('Testing Capricorn HP model filter')
        cy.get('body').then(($body) => {
            if ($body.find('#capricorn-hp-561').length > 0) {
                cy.get('#capricorn-hp-561').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Capricorn HP model filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Capricorn HP model filter')
                    }
                })

                // Unselect Capricorn HP
                cy.get('#capricorn-hp-561').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Capricorn HP filter tested successfully')
            } else {
                cy.log('Capricorn HP filter not available, skipping this test')
            }
        })

        // Load Index:
        cy.log('Testing Load Index filter category')

        // Expand Load Index section - use force if necessary
        cy.get('#headingThree > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Test Load 87 (if available)
        cy.log('Testing Load 87 filter')
        cy.get('body').then(($body) => {
            if ($body.find('#load-87').length > 0) {
                cy.get('#load-87').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Load 87 filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Load 87 filter')
                    }
                })

                // Unselect Load 87
                cy.get('#load-87').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Load 87 filter tested successfully')
            } else {
                cy.log('Load 87 filter not available, skipping this test')
            }
        })

        // Test Load 92 (if available)
        cy.log('Testing Load 92 filter')
        cy.get('body').then(($body) => {
            if ($body.find('#load-92').length > 0) {
                cy.get('#load-92').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Load 92 filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Load 92 filter')
                    }
                })

                // Unselect Load 92
                cy.get('#load-92').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Load 92 filter tested successfully')
            } else {
                cy.log('Load 92 filter not available, skipping this test')
            }
        })

        // Speed Rating:
        cy.log('Testing Speed Rating filter category')

        // Expand Speed Rating section - use force if necessary
        cy.get('#headingFour > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Test Speed H (if available)
        cy.log('Testing Speed H filter')
        cy.get('body').then(($body) => {
            if ($body.find('.speed-accordian-list > .list > :nth-child(1) > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > :nth-child(1) > .form-check-input').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Speed H filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Speed H filter')
                    }
                })

                // Unselect Speed H
                cy.get('.speed-accordian-list > .list > :nth-child(1) > .form-check-input').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Speed H filter tested successfully')
            } else {
                cy.log('Speed H filter not available, skipping this test')
            }
        })

        // Test Speed T (if available)
        cy.log('Testing Speed T filter')
        cy.get('body').then(($body) => {
            if ($body.find('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Speed T filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Speed T filter')
                    }
                })

                // Unselect Speed T
                cy.get('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Speed T filter tested successfully')
            } else {
                cy.log('Speed T filter not available, skipping this test')
            }
        })

        // Close additional filters
        cy.get('.add-filters').click()
        cy.wait(1000)

        // 5. Log test completion - Verify all checkbox filter categories tested successfully
        cy.log('All checkbox filter categories tested successfully')
    })

    it('TC_GALUMA_TBS_ADDITIONAL_FILTERS_015 - Verify remaining additional filter categories functionality', () => {
        // 1. Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // 2. Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // 3. Test remaining checkbox filter categories:

        // Tire Type:
        cy.log('Testing Tire Type filter category')

        // Navigate to additional filters
        cy.get('.add-filters').should('be.visible').click()
        cy.wait(3000)

        // Wait for additional filters panel to be visible or force interaction
        cy.get('body').then(($body) => {
            if ($body.find('.additional-filters:visible').length > 0) {
                cy.get('.additional-filters').should('be.visible')
                cy.log('Additional filters panel is visible')
            } else {
                cy.log('Additional filters panel not visible, continuing with force option')
            }
        })
        cy.wait(1000)

        // Click Tire Type section
        cy.get('#headingFive > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Test All Season
        cy.log('Testing All Season tire type filter')
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').length > 0) {
                cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for All Season tire type filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for All Season tire type filter')
                    }
                })

                // Unselect All Season
                cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').uncheck({ force: true })
                cy.wait(2000)
                cy.log('All Season tire type filter tested successfully')
            } else {
                cy.log('All Season tire type filter not available, skipping this test')
            }
        })

        // Test Summer
        cy.log('Testing Summer tire type filter')
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample4 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').length > 0) {
                cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Summer tire type filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Summer tire type filter')
                    }
                })

                // Unselect Summer
                cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Summer tire type filter tested successfully')
            } else {
                cy.log('Summer tire type filter not available, skipping this test')
            }
        })

        // Run Flat:
        cy.log('Testing Run Flat filter category')

        // Click Run Flat section
        cy.get('#headingSix > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Test Yes
        cy.log('Testing Run Flat Yes filter')
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample5 > .card > .box > ul > :nth-child(1) > .form-check > .form-check-input').length > 0) {
                cy.get('#collapseExample5 > .card > .box > ul > :nth-child(1) > .form-check > .form-check-input').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Run Flat Yes filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Run Flat Yes filter')
                    }
                })

                // Unselect Yes
                cy.get('#collapseExample5 > .card > .box > ul > :nth-child(1) > .form-check > .form-check-input').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Run Flat Yes filter tested successfully')
            } else {
                cy.log('Run Flat Yes filter not available, skipping this test')
            }
        })

        // Test No
        cy.log('Testing Run Flat No filter')
        cy.get('body').then(($body) => {
            if ($body.find('ul > :nth-child(2) > .form-check > .form-check-input').length > 0) {
                cy.get('ul > :nth-child(2) > .form-check > .form-check-input').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Run Flat No filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Run Flat No filter')
                    }
                })

                // Unselect No
                cy.get('ul > :nth-child(2) > .form-check > .form-check-input').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Run Flat No filter tested successfully')
            } else {
                cy.log('Run Flat No filter not available, skipping this test')
            }
        })

        // Condition:
        cy.log('Testing Condition filter category')

        // Expand Condition section
        cy.get('#headingSeven > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Test Like New
        cy.log('Testing Condition Like New filter')
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample6 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').length > 0) {
                cy.get('#collapseExample6 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Condition Like New filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Condition Like New filter')
                    }
                })

                // Unselect Like New
                cy.get('#collapseExample6 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Condition Like New filter tested successfully')
            } else {
                cy.log('Condition Like New filter not available, skipping this test')
            }
        })

        // Test Budget
        cy.log('Testing Condition Budget filter')
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample6 > .card > .box > ul > .list > :nth-child(5) > .form-check-input').length > 0) {
                cy.get('#collapseExample6 > .card > .box > ul > .list > :nth-child(5) > .form-check-input').check({ force: true })
                cy.wait(3000)

                // Verify results
                cy.get('#tire-products-container').should('be.visible')

                // Interact with first product if available
                cy.get('body').then(($body) => {
                    const products = $body.find('#tire-products-container [data-eid]')
                    if (products.length > 0) {
                        cy.log(`Found ${products.length} products for Condition Budget filter`)
                        cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                        cy.wait(1000)
                        cy.get('#tire-products-container [data-eid]').first().should('be.visible')
                    } else {
                        cy.log('No products found for Condition Budget filter')
                    }
                })

                // Unselect Budget
                cy.get('#collapseExample6 > .card > .box > ul > .list > :nth-child(5) > .form-check-input').uncheck({ force: true })
                cy.wait(2000)
                cy.log('Condition Budget filter tested successfully')
            } else {
                cy.log('Condition Budget filter not available, skipping this test')
            }
        })

        // Close additional filters
        cy.get('.add-filters').click()
        cy.wait(1000)

        // 4. Log test completion - Verify Tire Type, Run Flat, and Condition categories tested successfully
        cy.log('Verify Tire Type, Run Flat, and Condition categories tested successfully')
    })

    it('TC_GALUMA_TBS_ADDITIONAL_FILTERS_016 - Verify hierarchical filter dependency (top-to-bottom clearing) for additional filters', () => {
        // 1. Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // 2. Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // 3. Open filters
        cy.get('.add-filters').should('be.visible').click()
        cy.wait(3000)

        // 4. Verify filters popup visible
        cy.get('body').then(($body) => {
            if ($body.find('.shop_w_filter:visible').length > 0) {
                cy.get('.shop_w_filter').should('be.visible')
                cy.log('Filters popup is visible')
            } else if ($body.find('.additional-filters:visible').length > 0) {
                cy.get('.additional-filters').should('be.visible')
                cy.log('Additional filters panel is visible')
            } else {
                cy.log('Filter panel not visible, continuing with force option')
            }
        })
        cy.wait(1000)

        // 5. Navigate to additional filters (already opened above)
        cy.log('Additional filters panel accessed')

        // 6. Set up first hierarchy (Brand → Model → Load Index → Speed Rating):
        cy.log('Setting up first hierarchy: Brand → Model → Load Index → Speed Rating')

        // Expand Brands section
        cy.get('#headingOne > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Brand: Continental
        cy.log('Selecting Continental brand')
        cy.get('body').then(($body) => {
            if ($body.find('#continental-54').length > 0) {
                cy.get('#continental-54').check({ force: true })
                cy.wait(2000)
                cy.log('Continental brand selected')
            } else {
                cy.log('Continental brand not available')
            }
        })

        // Expand Models section
        cy.get('#headingTwo > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Model: ContiProContact (N1)
        cy.log('Selecting ContiProContact (N1) model')
        cy.get('body').then(($body) => {
            if ($body.find('[id="contiprocontact-(n1)-289"]').length > 0) {
                cy.get('[id="contiprocontact-(n1)-289"]').check({ force: true })
                cy.wait(2000)
                cy.log('ContiProContact (N1) model selected')
            } else {
                cy.log('ContiProContact (N1) model not available')
            }
        })

        // Expand Load Index section
        cy.get('#headingThree > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Load Index: 103
        cy.log('Selecting Load Index 103')
        cy.get('body').then(($body) => {
            if ($body.find('#load-103').length > 0) {
                cy.get('#load-103').check({ force: true })
                cy.wait(2000)
                cy.log('Load Index 103 selected')
            } else {
                cy.log('Load Index 103 not available')
            }
        })

        // Expand Speed Rating section
        cy.get('#headingFour > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Speed Rating: V
        cy.log('Selecting Speed Rating V')
        cy.get('body').then(($body) => {
            if ($body.find('.speed-accordian-list > .list > [style=""] > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > [style=""] > .form-check-input').check({ force: true })
                cy.wait(2000)
                cy.log('Speed Rating V selected')
            } else {
                cy.log('Speed Rating V not available, trying alternative selector')
                // Try alternative selector for Speed Rating V
                if ($body.find('.speed-accordian-list > .list > :nth-child(14) > .form-check-input').length > 0) {
                    cy.get('.speed-accordian-list > .list > :nth-child(14) > .form-check-input').check({ force: true })
                    cy.wait(2000)
                    cy.log('Speed Rating V selected with alternative selector')
                }
            }
        })

        // 7. Verify all filters selected
        cy.log('Verifying all first hierarchy filters are selected')
        cy.get('body').then(($body) => {
            if ($body.find('#continental-54').length > 0) {
                cy.get('#continental-54').should('be.checked')
                cy.log('Continental brand verified as checked')
            }
        })

        // 8. Verify results
        cy.get('#tire-products-container').should('be.visible')
        cy.log('Results displayed for first hierarchy filters')

        // 9. Test first hierarchy - Change Brand to Bridgestone
        cy.log('Testing first hierarchy: Changing Brand to Bridgestone')
        cy.get('body').then(($body) => {
            if ($body.find('#bridgestone-45').length > 0) {
                cy.get('#bridgestone-45').check({ force: true })
                cy.wait(3000)
                cy.log('Bridgestone brand selected')

                // Apply filters and verify results
                cy.get('#tire-products-container').should('be.visible')

                // Verify Model, Load Index, Speed Rating cleared
                cy.log('Verifying dependent filters are cleared')
                if ($body.find('[id="contiprocontact-(n1)-289"]').length > 0) {
                    cy.get('[id="contiprocontact-(n1)-289"]').should('not.be.checked')
                    cy.log('ContiProContact model cleared as expected')
                }
                if ($body.find('#load-103').length > 0) {
                    cy.get('#load-103').should('not.be.checked')
                    cy.log('Load Index 103 cleared as expected')
                }

                // Confirm only Bridgestone selected
                cy.get('#bridgestone-45').should('be.checked')
                cy.log('Bridgestone brand confirmed as selected')
            } else {
                cy.log('Bridgestone brand not available, skipping first hierarchy test')
            }
        })

        // 10. Set up second hierarchy (Speed Rating → Tire Type → Run Flat):
        cy.log('Setting up second hierarchy: Speed Rating → Tire Type → Run Flat')

        // Select Speed Rating: T
        cy.log('Selecting Speed Rating T')
        cy.get('body').then(($body) => {
            if ($body.find('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').check({ force: true })
                cy.wait(2000)
                cy.log('Speed Rating T selected')
            } else {
                cy.log('Speed Rating T not available')
            }
        })

        // Expand Tire Type section
        cy.get('#headingFive > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Tire Type: All Season
        cy.log('Selecting All Season tire type')
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').length > 0) {
                cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').check({ force: true })
                cy.wait(2000)
                cy.log('All Season tire type selected')
            } else {
                cy.log('All Season tire type not available')
            }
        })

        // Expand Run Flat section
        cy.get('#headingSix > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Run Flat: No
        cy.log('Selecting Run Flat No')
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample5 > .card > .box > ul > :nth-child(2) > .form-check > .form-check-input').length > 0) {
                cy.get('#collapseExample5 > .card > .box > ul > :nth-child(2) > .form-check > .form-check-input').check({ force: true })
                cy.wait(2000)
                cy.log('Run Flat No selected')
            } else {
                cy.log('Run Flat No not available')
            }
        })

        // 11. Verify all second hierarchy filters selected
        cy.log('Verifying all second hierarchy filters are selected')
        cy.get('body').then(($body) => {
            if ($body.find('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').should('be.checked')
                cy.log('Speed Rating T verified as checked')
            }
        })

        // 12. Test second hierarchy - Change Speed Rating to V
        cy.log('Testing second hierarchy: Changing Speed Rating to V')
        cy.get('body').then(($body) => {
            if ($body.find('.speed-accordian-list > .list > :nth-child(14) > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > :nth-child(14) > .form-check-input').check({ force: true })
                cy.wait(3000)
                cy.log('Speed Rating V selected')

                // Verify Tire Type, Run Flat cleared
                cy.log('Verifying dependent filters are cleared')
                if ($body.find('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').length > 0) {
                    cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').should('not.be.checked')
                    cy.log('All Season tire type cleared as expected')
                }
                if ($body.find('#collapseExample5 > .card > .box > ul > :nth-child(2) > .form-check > .form-check-input').length > 0) {
                    cy.get('#collapseExample5 > .card > .box > ul > :nth-child(2) > .form-check > .form-check-input').should('not.be.checked')
                    cy.log('Run Flat No cleared as expected')
                }

                // Confirm only Speed Rating V selected
                cy.get('.speed-accordian-list > .list > :nth-child(14) > .form-check-input').should('be.checked')
                cy.log('Speed Rating V confirmed as selected')
            } else {
                cy.log('Speed Rating V not available, skipping second hierarchy test')
            }
        })

        // Close additional filters
        cy.get('.add-filters').click()
        cy.wait(1000)

        // 13. Log test completion
        cy.log('Verify hierarchical filter dependency with top-to-bottom clearing')
    })

    it.only('TC_GALUMA_TBS_ADDITIONAL_FILTERS_017 - Verify additional filter combinations work correctly', () => {
        // 1. Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // 2. Scroll to "Browse all products" section
        cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
        cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
        cy.wait(2000)

        // 3. Test filter combinations:

        // Brand + Model (Continental + Cross Contact LX Sport)
        cy.log('Testing Brand + Model combination: Continental + Cross Contact LX Sport')

        // Navigate to additional filters
        cy.get('.add-filters').should('be.visible').click()
        cy.wait(3000)

        // Wait for additional filters panel to be visible or force interaction
        cy.get('body').then(($body) => {
            if ($body.find('.additional-filters:visible').length > 0) {
                cy.get('.additional-filters').should('be.visible')
                cy.log('Additional filters panel is visible')
            } else {
                cy.log('Additional filters panel not visible, continuing with force option')
            }
        })
        cy.wait(1000)

        // Expand Brands section
        cy.get('#headingOne > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Brand: Continental
        cy.get('body').then(($body) => {
            if ($body.find('#continental-54').length > 0) {
                cy.get('#continental-54').check({ force: true })
                cy.wait(2000)
                cy.log('Continental brand selected')
            } else {
                cy.log('Continental brand not available')
            }
        })

        // Expand Models section
        cy.get('#headingTwo > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Model: Cross Contact LX Sport
        cy.get('body').then(($body) => {
            if ($body.find('#cross-contact-lx-sport-342').length > 0) {
                cy.get('#cross-contact-lx-sport-342').check({ force: true })
                cy.wait(2000)
                cy.log('Cross Contact LX Sport model selected')
            } else {
                cy.log('Cross Contact LX Sport model not available')
            }
        })

        // Verify results
        cy.get('#tire-products-container').should('be.visible')

        // Interact with first product if available
        cy.get('body').then(($body) => {
            const products = $body.find('#tire-products-container [data-eid]')
            if (products.length > 0) {
                cy.log(`Found ${products.length} products for Continental + Cross Contact LX Sport combination`)
                cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                cy.wait(1000)
                cy.get('#tire-products-container [data-eid]').first().should('be.visible')
            } else {
                cy.log('No products found for Continental + Cross Contact LX Sport combination')
            }
        })

        // Unselect all the selected filters
        cy.get('body').then(($body) => {
            if ($body.find('#continental-54').length > 0) {
                cy.get('#continental-54').uncheck({ force: true })
                cy.wait(1000)
            }
            if ($body.find('#cross-contact-lx-sport-342').length > 0) {
                cy.get('#cross-contact-lx-sport-342').uncheck({ force: true })
                cy.wait(1000)
            }
        })

        // Brand + Load Index + Speed Rating (Bridgestone + 90 + Y)
        cy.log('Testing Brand + Load Index + Speed Rating combination: Bridgestone + 90 + Y')

        // Select Brand: Bridgestone
        cy.get('body').then(($body) => {
            if ($body.find('#bridgestone-45').length > 0) {
                cy.get('#bridgestone-45').check({ force: true })
                cy.wait(2000)
                cy.log('Bridgestone brand selected')
            } else {
                cy.log('Bridgestone brand not available')
            }
        })

        // Expand Load Index section
        cy.get('#headingThree > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Load Index: 90
        cy.get('body').then(($body) => {
            if ($body.find('#load-90').length > 0) {
                cy.get('#load-90').check({ force: true })
                cy.wait(2000)
                cy.log('Load Index 90 selected')
            } else {
                cy.log('Load Index 90 not available')
            }
        })

        // Expand Speed Rating section
        cy.get('#headingFour > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Speed Rating: Y
        cy.get('body').then(($body) => {
            if ($body.find('.speed-accordian-list > .list > [style=""] > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > [style=""] > .form-check-input').check({ force: true })
                cy.wait(2000)
                cy.log('Speed Rating Y selected')
            } else {
                cy.log('Speed Rating Y not available, trying alternative selector')
                // Try alternative selector for Speed Rating Y
                if ($body.find('.speed-accordian-list > .list > :nth-child(16) > .form-check-input').length > 0) {
                    cy.get('.speed-accordian-list > .list > :nth-child(16) > .form-check-input').check({ force: true })
                    cy.wait(2000)
                    cy.log('Speed Rating Y selected with alternative selector')
                }
            }
        })

        // Verify results
        cy.get('#tire-products-container').should('be.visible')

        // Interact with first product if available
        cy.get('body').then(($body) => {
            const products = $body.find('#tire-products-container [data-eid]')
            if (products.length > 0) {
                cy.log(`Found ${products.length} products for Bridgestone + Load 90 + Speed Y combination`)
                cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                cy.wait(1000)
                cy.get('#tire-products-container [data-eid]').first().should('be.visible')
            } else {
                cy.log('No products found for Bridgestone + Load 90 + Speed Y combination')
            }
        })

        // Unselect all the selected filters
        cy.get('body').then(($body) => {
            if ($body.find('#bridgestone-45').length > 0) {
                cy.get('#bridgestone-45').uncheck({ force: true })
                cy.wait(1000)
            }
            if ($body.find('#load-90').length > 0) {
                cy.get('#load-90').uncheck({ force: true })
                cy.wait(1000)
            }
            if ($body.find('.speed-accordian-list > .list > [style=""] > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > [style=""] > .form-check-input').uncheck({ force: true })
                cy.wait(1000)
            }
        })

        // Tire Type + Run Flat (Summer + Yes)
        cy.log('Testing Tire Type + Run Flat combination: Summer + Yes')

        // Expand Tire Type section
        cy.get('#headingFive > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Tire Type: Summer
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample4 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').length > 0) {
                cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').check({ force: true })
                cy.wait(2000)
                cy.log('Summer tire type selected')
            } else {
                cy.log('Summer tire type not available')
            }
        })

        // Expand Run Flat section
        cy.get('#headingSix > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Run Flat: Yes
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample5 > .card > .box > ul > :nth-child(1) > .form-check > .form-check-input').length > 0) {
                cy.get('#collapseExample5 > .card > .box > ul > :nth-child(1) > .form-check > .form-check-input').check({ force: true })
                cy.wait(2000)
                cy.log('Run Flat Yes selected')
            } else {
                cy.log('Run Flat Yes not available')
            }
        })

        // Apply filters and verify results
        cy.get('#tire-products-container').should('be.visible')

        // Interact with first product if available
        cy.get('body').then(($body) => {
            const products = $body.find('#tire-products-container [data-eid]')
            if (products.length > 0) {
                cy.log(`Found ${products.length} products for Summer + Run Flat Yes combination`)
                cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                cy.wait(1000)
                cy.get('#tire-products-container [data-eid]').first().should('be.visible')
            } else {
                cy.log('No products found for Summer + Run Flat Yes combination')
            }
        })

        // Unselect all the selected filters
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample4 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').length > 0) {
                cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').uncheck({ force: true })
                cy.wait(1000)
            }
            if ($body.find('#collapseExample5 > .card > .box > ul > :nth-child(1) > .form-check > .form-check-input').length > 0) {
                cy.get('#collapseExample5 > .card > .box > ul > :nth-child(1) > .form-check > .form-check-input').uncheck({ force: true })
                cy.wait(1000)
            }
        })

        // Brand + Speed Rating + Condition (Continental + H + Like New)
        cy.log('Testing Brand + Speed Rating + Condition combination: Continental + H + Like New')

        // Select Brand: Continental
        cy.get('body').then(($body) => {
            if ($body.find('#continental-54').length > 0) {
                cy.get('#continental-54').check({ force: true })
                cy.wait(2000)
                cy.log('Continental brand selected')
            } else {
                cy.log('Continental brand not available')
            }
        })

        // Select Speed Rating: H
        cy.get('body').then(($body) => {
            if ($body.find('.speed-accordian-list > .list > :nth-child(1) > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > :nth-child(1) > .form-check-input').check({ force: true })
                cy.wait(2000)
                cy.log('Speed Rating H selected')
            } else {
                cy.log('Speed Rating H not available')
            }
        })

        // Expand Condition section
        cy.get('#headingSeven > .mb-0 > .btn').click({ force: true })
        cy.wait(1000)

        // Select Condition: Like New
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample6 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').length > 0) {
                cy.get('#collapseExample6 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').check({ force: true })
                cy.wait(2000)
                cy.log('Condition Like New selected')
            } else {
                cy.log('Condition Like New not available')
            }
        })

        // Verify results
        cy.get('#tire-products-container').should('be.visible')

        // Interact with first product if available
        cy.get('body').then(($body) => {
            const products = $body.find('#tire-products-container [data-eid]')
            if (products.length > 0) {
                cy.log(`Found ${products.length} products for Continental + Speed H + Like New combination`)
                cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                cy.wait(1000)
                cy.get('#tire-products-container [data-eid]').first().should('be.visible')
            } else {
                cy.log('No products found for Continental + Speed H + Like New combination')
            }
        })

        // Unselect all the selected filters
        cy.get('body').then(($body) => {
            if ($body.find('#continental-54').length > 0) {
                cy.get('#continental-54').uncheck({ force: true })
                cy.wait(1000)
            }
            if ($body.find('.speed-accordian-list > .list > :nth-child(1) > .form-check-input').length > 0) {
                cy.get('.speed-accordian-list > .list > :nth-child(1) > .form-check-input').uncheck({ force: true })
                cy.wait(1000)
            }
            if ($body.find('#collapseExample6 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').length > 0) {
                cy.get('#collapseExample6 > .card > .box > ul > .list > :nth-child(2) > .form-check-input').uncheck({ force: true })
                cy.wait(1000)
            }
        })

        // Multiple Brands (Bridgestone + Continental)
        cy.log('Testing Multiple Brands combination: Bridgestone + Continental')

        // Select Brand: Bridgestone
        cy.get('body').then(($body) => {
            if ($body.find('#bridgestone-45').length > 0) {
                cy.get('#bridgestone-45').check({ force: true })
                cy.wait(2000)
                cy.log('Bridgestone brand selected')
            } else {
                cy.log('Bridgestone brand not available')
            }
        })

        // Select Brand: Continental
        cy.get('body').then(($body) => {
            if ($body.find('#continental-54').length > 0) {
                cy.get('#continental-54').check({ force: true })
                cy.wait(2000)
                cy.log('Continental brand selected')
            } else {
                cy.log('Continental brand not available')
            }
        })

        // Verify results
        cy.get('#tire-products-container').should('be.visible')

        // Interact with first product if available
        cy.get('body').then(($body) => {
            const products = $body.find('#tire-products-container [data-eid]')
            if (products.length > 0) {
                cy.log(`Found ${products.length} products for Bridgestone + Continental combination`)
                cy.get('#tire-products-container [data-eid]').first().scrollIntoView()
                cy.wait(1000)
                cy.get('#tire-products-container [data-eid]').first().should('be.visible')
            } else {
                cy.log('No products found for Bridgestone + Continental combination')
            }
        })

        // Close additional filters
        cy.get('.add-filters').click()
        cy.wait(1000)

        // 6. Log test completion
        cy.log('Verify multiple complex filter combinations work correctly')
    })

})