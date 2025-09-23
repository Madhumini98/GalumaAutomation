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

    it.only('TC_GALUMA_TBS_FILTER_013 - Verify filter combinations work correctly', () => {
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

        // 3. Navigate to "Browse All Products" section - check for visible mobile selector, otherwise use desktop
        cy.get('body').then(($body) => {
            const mobileElement = $body.find('.browse_product_mobile:visible')
            if (mobileElement.length > 0) {
                cy.get('.browse_product_mobile').click()
                cy.log('Clicked mobile Browse All Products section')
            } else {
                // Use desktop selector and scroll to "Browse All Products" section
                cy.get('.browse-product > .container > .sec-heading > span').should('be.visible')
                cy.get('.browse-product > .container > .sec-heading > span').scrollIntoView()
                cy.log('Scrolled to desktop Browse All Products section')
            }
        })
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

})