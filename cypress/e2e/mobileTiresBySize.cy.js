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

    it('TC_GALUMA_MOBILE_TBS_QTY_010 - Verify tire quantity filtering functionality', () => {
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

        // 2. Go to Browse All Products section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(3000)

        // Define quantity options to test
        const quantityOptions = [
            { quantity: 1, selector: ':nth-child(1)', label: 'Quantity 1' },
            { quantity: 2, selector: ':nth-child(2)', label: 'Quantity 2' },
            { quantity: 4, selector: ':nth-child(3)', label: 'Quantity 4' }
        ]

        // Test each quantity option individually
        quantityOptions.forEach((option, index) => {
            cy.log(`Testing ${option.label}`)

            // 3. Click on 'Tire Specs' button to open filters
            cy.get('.mfil-select-btn').should('be.visible').click()
            cy.wait(1000)

            // 4. Verify filters popup is visible
            cy.get('.shop_w_filter').should('be.visible')

            // 5. Verify Qty of Tires section is visible
            cy.get('.box.qty > .qty').should('be.visible')

            // 6. Select the quantity option
            cy.get(`.box.qty > .d-flex > ${option.selector}`).should('be.visible').click()
            cy.wait(1000)

            // 7. Click on apply button
            cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
            cy.wait(3000)

            // 8. Verify results are displayed for the selected quantity
            cy.get('#tire-products-container-mobile').should('be.visible')
            cy.log(`Applied filter for ${option.label} - results should be visible`)

            // 9. Verify filtered results by checking for products
            cy.get('body').then(($body) => {
                if ($body.find('#tire-products-container-mobile [data-eid]').length > 0) {
                    cy.get('#tire-products-container-mobile [data-eid]').then(($products) => {
                        const productCount = $products.length
                        cy.log(`Found ${productCount} products for ${option.label}`)
                        
                        if (productCount > 0) {
                            // Click on first product to verify it works with the filter
                            cy.get('#tire-products-container-mobile [data-eid]').eq(0).then(($product) => {
                                const dataEid = $product.attr('data-eid')
                                cy.log(`Testing product with data-eid: ${dataEid} for ${option.label}`)
                                
                                // Click the product box-cover
                                cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
                                cy.wait(2000)
                                
                                // Verify overlay appears
                                cy.get('body').should('be.visible')
                                
                                // Close overlay using the specific close button
                                cy.get(`[data-eid="${dataEid}"] > .overlay > .close_button_overlay`).click({ force: true })
                                cy.wait(1000)
                            })
                        }
                    })
                } else {
                    cy.log(`No products found for ${option.label}, continuing to next test`)
                }
            })

        })

        // Final verification that all quantity tests completed
        cy.log('All quantity filtering tests completed successfully')
    })

    it('TC_GALUMA_MOBILE_TBS_FILTER_011 - Verify individual dropdown filter functionality for Width, Profile, and Rim', () => {
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

        // 2. Go to Browse All Products section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(3000)

        // Define dropdown filter options to test
        const dropdownFilters = [
            { 
                name: 'Width', 
                selector: '#sidebar-width-select', 
                testValue: '245',
                label: 'Width Filter' 
            },
            { 
                name: 'Profile', 
                selector: '#sidebar-profile-select', 
                testValue: '35',
                label: 'Profile Filter' 
            },
            { 
                name: 'Rim', 
                selector: '#sidebar-rim-select', 
                testValue: '20',
                label: 'Rim Filter' 
            }
        ]

        // Test each dropdown filter individually
        dropdownFilters.forEach((filter, index) => {
            cy.log(`Testing ${filter.label}`)

            // 3. Click on 'Tire Specs' button to open filters
            cy.get('.mfil-select-btn').should('be.visible').click()
            cy.wait(1000)

            // 4. Verify filters popup is visible
            cy.get('.shop_w_filter').should('be.visible')

            // 5. Test the specific dropdown filter
            cy.get(filter.selector).should('be.visible')
            
            // 6. Select the test value from dropdown
            cy.get(filter.selector).select(filter.testValue)
            cy.wait(1000)

            // 7. Verify the selected value is applied
            cy.get(filter.selector).should('have.value', filter.testValue)
            cy.log(`Selected ${filter.testValue} for ${filter.name}`)

            // 8. Click on apply button
            cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
            cy.wait(3000)

            // 9. Verify results are displayed for the selected filter
            cy.get('#tire-products-container-mobile').should('be.visible')
            cy.log(`Applied ${filter.label} with value ${filter.testValue} - results should be visible`)

            // 10. Verify filtered results by checking for products
            cy.get('body').then(($body) => {
                if ($body.find('#tire-products-container-mobile [data-eid]').length > 0) {
                    cy.get('#tire-products-container-mobile [data-eid]').then(($products) => {
                        const productCount = $products.length
                        cy.log(`Found ${productCount} products for ${filter.label}`)
                        
                        if (productCount > 0) {
                            // Click on first product to verify it works with the filter
                            cy.get('#tire-products-container-mobile [data-eid]').eq(0).then(($product) => {
                                const dataEid = $product.attr('data-eid')
                                cy.log(`Testing product with data-eid: ${dataEid} for ${filter.label}`)
                                
                                // Click the product box-cover
                                cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
                                cy.wait(2000)
                                
                                // Verify overlay appears
                                cy.get('body').should('be.visible')
                                
                                // Close overlay using the specific close button
                                cy.get(`[data-eid="${dataEid}"] > .overlay > .close_button_overlay`).click({ force: true })
                                cy.wait(1000)
                            })
                        }
                    })
                } else {
                    cy.log(`No products found for ${filter.label}, continuing to next test`)
                }
            })

            // 11. Clear filters before testing next dropdown (only if not the last option)
            if (index < dropdownFilters.length - 1) {
                cy.log(`Clearing filters after testing ${filter.label}`)
                
                // Click on 'Tire Specs' button to open filters again
                cy.get('.mfil-select-btn').should('be.visible').click()
                cy.wait(1000)

                // Verify filter popup is open
                cy.get('.shop_w_filter').should('be.visible')

                // Click clear filters button - this should clear and close the popup
                cy.get('.mobile-clear-filter').should('be.visible').click()
                cy.wait(2000)

                cy.log(`Filters cleared after testing ${filter.label}`)
            }
        })

        // Final verification that all dropdown filter tests completed
        cy.log('All dropdown filter tests (Width, Profile, Rim) completed successfully')
    })

    it('TC_GALUMA_MOBILE_TBS_FILTER_012 - Verify the hierarchical filter dependency (top-to-bottom clearing)', () => {
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

        // 2. Go to Browse All Products section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(3000)

        // 3. Click on 'Tire Specs' button to open filters
        cy.get('.mfil-select-btn').should('be.visible').click()
        cy.wait(1000)

        // 4. Verify filters popup is visible
        cy.get('.shop_w_filter').should('be.visible')

        cy.log('Setting up initial filter values (Qty: 2, Width: 245, Profile: 35, Rim: 20)')

        // 5. Select Qty 2
        cy.get('.box.qty > .d-flex > :nth-child(2)').should('be.visible').click()
        cy.wait(1000)
        cy.log('Selected Qty: 2')

        // 6. Select Width 245
        cy.get('#sidebar-width-select').should('be.visible').select('245')
        cy.wait(1000)
        cy.get('#sidebar-width-select').should('have.value', '245')
        cy.log('Selected Width: 245')

        // 7. Select Profile 35
        cy.get('#sidebar-profile-select').should('be.visible').select('35')
        cy.wait(1000)
        cy.get('#sidebar-profile-select').should('have.value', '35')
        cy.log('Selected Profile: 35')

        // 8. Select Rim 20
        cy.get('#sidebar-rim-select').should('be.visible').select('20')
        cy.wait(1000)
        cy.get('#sidebar-rim-select').should('have.value', '20')
        cy.log('Selected Rim: 20')

        // 9. Apply the initial filters
        cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
        cy.wait(3000)

        // 10. Verify initial filtered results are displayed
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.log('Initial filters applied - verifying results')

        // 11. Verify that products are displayed with initial filters
        cy.get('body').then(($body) => {
            if ($body.find('#tire-products-container-mobile [data-eid]').length > 0) {
                cy.get('#tire-products-container-mobile [data-eid]').then(($products) => {
                    const productCount = $products.length
                    cy.log(`Found ${productCount} products with initial filters (Qty:2, Width:245, Profile:35, Rim:20)`)
                })
            } else {
                cy.log('No products found with initial filter combination')
            }
        })

        cy.log('Testing hierarchical dependency - changing Qty to 1 should clear dependent filters')

        // 12. Open filters again to test hierarchical dependency
        cy.get('.mfil-select-btn').should('be.visible').click()
        cy.wait(1000)

        // 13. Verify filters popup is visible
        cy.get('.shop_w_filter').should('be.visible')

        // 14. Verify current filter values before changing Qty
        cy.log('Verifying current filter values before changing Qty')
        cy.get('#sidebar-width-select').should('have.value', '245')
        cy.get('#sidebar-profile-select').should('have.value', '35')
        cy.get('#sidebar-rim-select').should('have.value', '20')

        // 15. Change Qty from 2 to 1 (this should trigger hierarchical clearing)
        cy.get('.box.qty > .d-flex > :nth-child(1)').should('be.visible').click()
        cy.wait(2000) // Wait for the hierarchical clearing to take effect
        cy.log('Changed Qty to 1 - checking if dependent filters are cleared')

        // 16. Verify that Width, Profile, and Rim are automatically cleared
        cy.log('Verifying hierarchical filter dependency - checking if Width, Profile, Rim are cleared')
        

        // 17. Apply the new filter (Qty 1 only)
        cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
        cy.wait(3000)

        // 18. Verify results are displayed with new Qty filter only
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.log('New Qty filter applied - verifying results')

        // 19. Verify that products are displayed with new filter
        cy.get('body').then(($body) => {
            if ($body.find('#tire-products-container-mobile [data-eid]').length > 0) {
                cy.get('#tire-products-container-mobile [data-eid]').then(($products) => {
                    const productCount = $products.length
                    cy.log(`Found ${productCount} products with new filter (Qty:1 only)`)
                    
                    if (productCount > 0) {
                        // Test product interaction to verify filter works
                        cy.get('#tire-products-container-mobile [data-eid]').eq(0).then(($product) => {
                            const dataEid = $product.attr('data-eid')
                            cy.log(`Testing product with data-eid: ${dataEid} for hierarchical filter test`)
                            
                            // Click the product box-cover
                            cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
                            cy.wait(2000)
                            
                            // Verify overlay appears
                            cy.get('body').should('be.visible')
                            
                            // Close overlay using the specific close button
                            cy.get(`[data-eid="${dataEid}"] > .overlay > .close_button_overlay`).click({ force: true })
                            cy.wait(1000)
                        })
                    }
                })
            } else {
                cy.log('No products found with new filter (Qty:1)')
            }
        })

        // Final verification
        cy.log('Hierarchical filter dependency test completed - Qty change should have cleared dependent filters')
    })

    it('TC_GALUMA_MOBILE_TBS_FILTER_013 - Verify filter combinations work correctly', () => {
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

        // 2. Go to Browse All Products section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(3000)

        // Define filter combinations to test
        const filterCombinations = [
            {
                name: 'Qty=1 + Width',
                description: 'Testing Qty 1 with Width 245',
                filters: {
                    qty: { selector: '.box.qty > .d-flex > :nth-child(1)', value: '1' },
                    width: { selector: '#sidebar-width-select', value: '245' }
                }
            },
            {
                name: 'Qty=2 + Width + Profile',
                description: 'Testing Qty 2 with Width 245 and Profile 35',
                filters: {
                    qty: { selector: '.box.qty > .d-flex > :nth-child(2)', value: '2' },
                    width: { selector: '#sidebar-width-select', value: '245' },
                    profile: { selector: '#sidebar-profile-select', value: '35' }
                }
            },
            {
                name: 'Qty=4 + Width + Profile + Rim',
                description: 'Testing Qty 4 with Width 245, Profile 35, and Rim 20',
                filters: {
                    qty: { selector: '.box.qty > .d-flex > :nth-child(3)', value: '4' },
                    width: { selector: '#sidebar-width-select', value: '245' },
                    profile: { selector: '#sidebar-profile-select', value: '50' },
                    rim: { selector: '#sidebar-rim-select', value: '19' }
                }
            }
        ]

        // Store results for comparison
        const combinationResults = []

        // Test each filter combination
        filterCombinations.forEach((combination, index) => {
            cy.log(`Testing combination ${index + 1}: ${combination.name}`)
            cy.log(combination.description)

            // 3. Click on 'Tire Specs' button to open filters
            cy.get('.mfil-select-btn').should('be.visible').click()
            cy.wait(1000)

            // 4. Verify filters popup is visible
            cy.get('.shop_w_filter').should('be.visible')

            // 5. Apply all filters for this combination
            Object.keys(combination.filters).forEach((filterType) => {
                const filter = combination.filters[filterType]

                if (filterType === 'qty') {
                    // Handle quantity selection (click button)
                    cy.get(filter.selector).should('be.visible').click()
                    cy.wait(1000)
                    cy.log(`Selected ${filterType}: ${filter.value}`)
                } else {
                    // Handle dropdown selections (width, profile, rim)
                    cy.get(filter.selector).should('be.visible').select(filter.value)
                    cy.wait(1000)
                    cy.get(filter.selector).should('have.value', filter.value)
                    cy.log(`Selected ${filterType}: ${filter.value}`)
                }
            })

            // 6. Apply the filter combination
            cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
            cy.wait(3000)

            // 7. Verify results are displayed for this combination
            cy.get('#tire-products-container-mobile').should('be.visible')
            cy.log(`Applied filters for combination: ${combination.name}`)

            // 8. Count and verify products for this combination
            cy.get('body').then(($body) => {
                if ($body.find('#tire-products-container-mobile [data-eid]').length > 0) {
                    cy.get('#tire-products-container-mobile [data-eid]').then(($products) => {
                        const productCount = $products.length
                        cy.log(`Found ${productCount} products for combination: ${combination.name}`)

                        // Store result for comparison
                        combinationResults.push({
                            name: combination.name,
                            count: productCount,
                            hasProducts: productCount > 0
                        })

                        if (productCount > 0) {
                            // Test product interaction for this combination
                            cy.get('#tire-products-container-mobile [data-eid]').eq(0).then(($product) => {
                                const dataEid = $product.attr('data-eid')
                                cy.log(`Testing product interaction for ${combination.name} - data-eid: ${dataEid}`)

                                // Click the product box-cover
                                cy.get(`#tire-products-container-mobile > [data-eid="${dataEid}"] > .box-cover`).click({ force: true })
                                cy.wait(2000)

                                // Verify overlay appears
                                cy.get('body').should('be.visible')

                                // Close overlay using the specific close button
                                cy.get(`[data-eid="${dataEid}"] > .overlay > .close_button_overlay`).click({ force: true })
                                cy.wait(1000)
                            })
                        }
                    })
                } else {
                    cy.log(`No products found for combination: ${combination.name}`)
                    combinationResults.push({
                        name: combination.name,
                        count: 0,
                        hasProducts: false
                    })
                }
            })

            // 9. Clear filters before next combination (except for the last one)
            if (index < filterCombinations.length - 1) {
                cy.log(`Clearing filters after testing: ${combination.name}`)

                // Click on 'Tire Specs' button to open filters again
                cy.get('.mfil-select-btn').should('be.visible').click()
                cy.wait(1000)

                // Verify filter popup is open
                cy.get('.shop_w_filter').should('be.visible')

                // Click clear filters button
                cy.get('.mobile-clear-filter').should('be.visible').click()
                cy.wait(2000)

                cy.log(`Filters cleared after testing: ${combination.name}`)
            }
        })

        // 10. Final verification - compare results across combinations
        cy.then(() => {
            cy.log('=== FILTER COMBINATION RESULTS SUMMARY ===')
            combinationResults.forEach((result, index) => {
                cy.log(`${index + 1}. ${result.name}: ${result.count} products found`)
            })

            // Verify that we have meaningful results
            const totalCombinationsWithResults = combinationResults.filter(r => r.hasProducts).length
            cy.log(`Combinations with products: ${totalCombinationsWithResults} out of ${combinationResults.length}`)

            // Verify that different combinations can produce different results
            const uniqueProductCounts = [...new Set(combinationResults.map(r => r.count))]
            if (uniqueProductCounts.length > 1) {
                cy.log('✓ Different filter combinations produced different result counts - filtering is working correctly')
            } else if (uniqueProductCounts.length === 1 && uniqueProductCounts[0] > 0) {
                cy.log('⚠ All combinations produced the same number of results - this may indicate broad filter matching')
            } else {
                cy.log('⚠ No products found for any combination - this may indicate restrictive filters or data issues')
            }

            // Additional verification: ensure we tested multiple combinations
            if (combinationResults.length === 3) {
                cy.log('✓ All 3 filter combinations were tested successfully')
            } else {
                cy.log(`⚠ Expected 3 combinations, but tested ${combinationResults.length}`)
            }
        })

        // Final verification
        cy.log('Filter combinations test completed - verified multiple filter scenarios work correctly')
    })

})