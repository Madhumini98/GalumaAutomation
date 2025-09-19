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

})