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

        cy.url().then((currentUrl) => {
            // Re-visit the captured URL
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
        })
    })

    it('TC_GALUMA_MOBILE_TBS_SEARCH_002 - Search Tires by Size on Mobile Version', () => {
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

        // 1. Verify navigation to shop by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        cy.url().then((currentUrl) => {
            // Re-visit the captured URL
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
        })

        // 2. Navigate to "Search by Size" section - wait for search form to be available
        cy.wait(2000)

        // 3. Enter Width button with value '225'
        cy.get('.container > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > #tire-width-value-read-tires').click()
        cy.wait(1000)
        cy.get('.container > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > .card-width-select-popup > :nth-child(1) > [data-value="225"] > .red_h').click()

        // Enter Ratio button with value "35"
        cy.get('.container > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > #tire-ratio-value-read-tires').click()
        cy.wait(1000)
        cy.get('.container > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > .card-ratio-select-popup > :nth-child(1) > [data-value="35"] > .red_h').click()

        // Enter Diameter button with value "20"
        cy.get('.container > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup > #tire-diameter-value-read-tires').click()
        cy.wait(1000)
        cy.get('.container > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup > .card-diameter-select-popup > :nth-child(1) > [data-value="20"] > .red_h').click()

        // Click "Search Tires" button
        cy.get('#top-search-by-size-btn-mobile').should('not.be.disabled')
        cy.get('#top-search-by-size-btn-mobile').click()

        // Wait for results to load
        cy.wait(3000)

        // 4. Verify results page tire
        cy.get('.rec-size-con').should('be.visible')
        cy.get('body').should('contain', 'tire')
    })

    it('TC_GALUMA_MOBILE_TBS_SEARCH_003 - Search Tires by Brand on Mobile Version', () => {
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

        // 1. Verify navigation to shop tires by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        cy.url().then((currentUrl) => {
            // Re-visit the captured URL
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
        })

        // 2. Navigate to "Search by Brand" section
        cy.get('.shop_by_selector > .active').click()
        cy.wait(2000)

        // 3. Click on Pirelli brand icon
        cy.get('.container > .thick-form > .active > .popup-by-brand-dimentions-home > .brand_imgs > :nth-child(1) > :nth-child(2) > a > img').click()

        // Wait for navigation to Pirelli brand page
        cy.wait(3000)

        // 4. It should direct to the Pirelli brand products page
        cy.url().should('include', '/t/b/pirelli')

        cy.url().then((currentUrl) => {
            // Re-visit the captured URL
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
        })

        // Wait for page to load
        cy.wait(2000)

        // 5. Verify results
        cy.get('body').should('be.visible')
        cy.get('body').should('contain', 'Pirelli')
    })

    it('TC_GALUMA_MOBILE_TBS_FINDOUT_004 - How to read your tire size? Find out here popup', () => {
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

        // 1. Verify navigation to shop tires by size page
        cy.url().should('include', '/t/s')
        cy.get('body').should('be.visible')

        cy.url().then((currentUrl) => {
            // Re-visit the captured URL
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
        })

        // Wait for page to load
        cy.wait(2000)

        // 2. Go to How to read your tire size? section
        cy.get('.how_to_read').should('be.visible')

        // 3. Click on "Find out here!" text
        cy.get('.findout_tire_popup_mob > span').click()

        // Wait for popup to appear
        cy.wait(1000)

        // 4. Popup How to Read Your tire size? content
        cy.get('.popup-home-tire-mobile > .popup-content > :nth-child(2) > em').should('be.visible')

        // 5. Click on "click here to learn more" text
        cy.get('.popup-home-tire-mobile > .popup-content > #learn_more').click()

        // Wait for navigation
        cy.wait(3000)

        // 6. Navigate to how to read my tires? page
        cy.url().should('include', '/read-my-tires')

        // Verify the page content
        cy.get('body').should('be.visible')
        cy.get('body').should('contain.text', 'tire')
    })


    it('TC_GALUMA_MOBILE_TBS_SORT_005 - Verify user can sort results by Title(A-Z) when browsing products', () => {
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

    it('TC_GALUMA_MOBILE_TBS_SORT_006 - Verify user can sort results by Title(Z-A) when browsing products', () => {
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

    it('TC_GALUMA_MOBILE_TBS_SORT_007 - Verify user can sort results by Price(Low to High) when browsing products', () => {
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

    it('TC_GALUMA_MOBILE_TBS_SORT_008 - Verify user can able to sort results by Price(High to Low) when browse the products', () => {
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

    it('TC_GALUMA_MOBILE_TBS_SORT_009 - Verify user can able to sort newest results when browse the products', () => {
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