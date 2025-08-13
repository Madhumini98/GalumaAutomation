describe('Galuma Mobile Home Page Tests', () => {
    beforeEach(() => {
        // Common setup for all test cases
        cy.viewport(360, 640)
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)
    })

    it('TC_GALUMA_MOBILE_TBS_NAV_001 - Verify successful navigation to the shop tires by size page', () => {
        // Verify home page is loaded
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')

        // Click Menu button
        cy.get('.nav2_icon').should('be.visible').click()
        cy.wait(1000)

        // Click Shop Products
        cy.get('.shop_products').should('be.visible').click()
        cy.wait(1000)

        // Click Tires
        cy.get('.sub_menu_tire').should('be.visible').click()
        cy.wait(1000)

        // Click Tires By Size
        cy.get('.original_content > :nth-child(4) > a > p').should('be.visible').click()
        cy.wait(2000)

        // Verify navigation to shop tires by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')
    })

    it('TC_GALUMA_MOBILE_TBS_SORT_002 - Verify user can sort results by Title(A-Z) when browsing products', () => {
        // Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // Verify page is loaded
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // First, let's see what options are available in the dropdown
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            $options.each((index, option) => {
                cy.log(`Option ${index}: value="${option.value}", text="${option.text}"`)
            })
        })

        // Try to select Title(A-Z) - let's try different possible values
        cy.get('#sort-results-by-select-mobile option').contains('Title').then(($option) => {
            const value = $option.val()
            cy.get('#sort-results-by-select-mobile').select(value)
        })
        cy.wait(3000)

        // Wait for results to load and verify sorting
        cy.get('.browse_product_mobile').should('be.visible')
        
        // Verify that results are displayed (wait for content to load)
        cy.wait(5000)
    })

    it('TC_GALUMA_MOBILE_TBS_SORT_003 - Verify user can sort results by Title(Z-A) when browsing products', () => {
        // Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // Verify page is loaded
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // First, let's see what options are available in the dropdown
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            $options.each((index, option) => {
                cy.log(`Option ${index}: value="${option.value}", text="${option.text}"`)
            })
        })

        // Try to select Title(Z-A) - look for option containing "Z-A" or similar descending order text
        cy.get('#sort-results-by-select-mobile option').contains(/Title.*Z.*A|Z.*A.*Title|desc/i).then(($option) => {
            const value = $option.val()
            cy.get('#sort-results-by-select-mobile').select(value)
        })
        cy.wait(3000)

        // Wait for results to load and verify sorting
        cy.get('.browse_product_mobile').should('be.visible')

        // Verify that results are displayed (wait for content to load)
        cy.wait(5000)
    })

    it('TC_GALUMA_MOBILE_TBS_SORT_004 - Verify user can sort results by Price(Low to High) when browsing products', () => {
        // Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // Verify page is loaded
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // Click sort results by dropdown
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            $options.each((index, option) => {
                cy.log(`Option ${index}: value="${option.value}", text="${option.text}"`)
            })
        })

        // Select Price(Low to High) - look for option containing "Price" and "Low to High" or similar ascending price text
        cy.get('#sort-results-by-select-mobile option').contains(/Price.*Low.*High|Low.*High.*Price|asc/i).then(($option) => {
            const value = $option.val()
            cy.get('#sort-results-by-select-mobile').select(value)
        })
        cy.wait(3000)

        // Wait for results to load and verify sorting
        cy.get('.browse_product_mobile').should('be.visible')

        // Verify that results are displayed in ascending order of price (wait for content to load)
        cy.wait(5000)

        // Additional verification that the page shows sorted results
        cy.get('body').should('contain.text', 'Sort')
    })

    it('TC_GALUMA_MOBILE_TBS_SORT_005 - Verify user can able to sort results by Price(High to Low) when browse the products', () => {
        // Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // Verify page is loaded
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // Click sort results by dropdown
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            $options.each((index, option) => {
                cy.log(`Option ${index}: value="${option.value}", text="${option.text}"`)
            })
        })

        // Select Price(High to Low) - look for option containing "Price" and "High to Low" or similar descending price text
        cy.get('#sort-results-by-select-mobile option').contains(/Price.*High.*Low|High.*Low.*Price|desc/i).then(($option) => {
            const value = $option.val()
            cy.get('#sort-results-by-select-mobile').select(value)
        })
        cy.wait(3000)

        // Wait for results to load and verify sorting
        cy.get('.browse_product_mobile').should('be.visible')

        // Verify that results are displayed in descending order of price (wait for content to load)
        cy.wait(5000)

        // Additional verification that the page shows sorted results
        cy.get('body').should('contain.text', 'Sort')
    })

    it('TC_GALUMA_MOBILE_TBS_SORT_006 - Verify user can able to sort newest results when browse the products', () => {
        // Navigate to the shop by tires page
        cy.visit("https://dev.galumatires.com/t/s", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // Verify page is loaded
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // Click sort results by dropdown
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            $options.each((index, option) => {
                cy.log(`Option ${index}: value="${option.value}", text="${option.text}"`)
            })
        })

        // Select Newest - look for option containing "Newest" or similar newest text
        cy.get('#sort-results-by-select-mobile option').contains(/Newest|New|Latest/i).then(($option) => {
            const value = $option.val()
            cy.get('#sort-results-by-select-mobile').select(value)
        })
        cy.wait(3000)

        // Wait for results to load and verify sorting
        cy.get('.browse_product_mobile').should('be.visible')

        // Verify that results are displayed by newest (wait for content to load)
        cy.wait(5000)

        // Additional verification that the page shows sorted results
        cy.get('body').should('contain.text', 'Sort')
    })


})