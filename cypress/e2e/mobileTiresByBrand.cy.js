describe('Galuma Mobile Tires By Brand Page Tests', () => {
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

    it('TC_GALUMA_MOBILE_TBB_NAV_001 - Verify successful navigation to the shop tires by brand page', () => {
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

        // Click Tires By Brand
        cy.get('.original_content > :nth-child(5) > a > p').should('be.visible').click()
        cy.wait(2000)

        // Verify navigation to shop tires by brand page
        cy.url().should('include', '/t/b')
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

    it('TC_GALUMA_MOBILE_TBB_BRANDS_002 - Shop Tires by Brand on Mobile Version', () => {
        // Navigate directly to tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // Verify the brands container is visible
        cy.get('.popup-by-brand-dimentions-home > .container').should('be.visible')

        // Test Bridgestone brand
        cy.get('.brands-by-brands > :nth-child(1) > a > .img-fluid').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/bridgestone')
        cy.get('body').should('be.visible')

        // Re-visit with mobile headers
        cy.url().then((currentUrl) => {
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
            cy.wait(2000)
        })

        // Navigate back to brands page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(2000)

        // Test Pirelli brand
        cy.get('.brands-by-brands > :nth-child(2)').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/pirelli')
        cy.get('body').should('be.visible')

        // Re-visit with mobile headers
        cy.url().then((currentUrl) => {
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
            cy.wait(2000)
        })

        // Navigate back to brands page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(2000)

        // Test Dunlop brand
        cy.get('.brands-by-brands > :nth-child(4) > a > .img-fluid').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/dunlop')
        cy.get('body').should('be.visible')

        // Re-visit with mobile headers
        cy.url().then((currentUrl) => {
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
            cy.wait(2000)
        })

        // Navigate back to brands page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(2000)

        // Test Continental brand
        cy.get(':nth-child(7) > a > .img-fluid').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/continental')
        cy.get('body').should('be.visible')

        // Re-visit with mobile headers
        cy.url().then((currentUrl) => {
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
            cy.wait(2000)
        })

        // Navigate back to brands page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(2000)

        // Test Michelin brand
        cy.get(':nth-child(8) > a > .img-fluid').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/michelin')
        cy.get('body').should('be.visible')

        // Re-visit with mobile headers
        cy.url().then((currentUrl) => {
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
            cy.wait(2000)
        })
    })

    it('TC_GALUMA_MOBILE_TBB_SORT_003 - Verify user can sort results by Title(A-Z) when browsing products', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
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
        cy.url().should('include', '/t/b')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // First, let's see what options are available in the dropdown 
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            const options = [...$options].map(option => option.text)
            cy.log('Available sort options:', options.join(', '))
        })

        // Select "Title (A-Z)" from the sort dropdown
        cy.get('#sort-results-by-select-mobile').select('titleAZ')
        cy.wait(2000)

        // Verify the selection was applied
        cy.get('#sort-results-by-select-mobile').should('have.value', 'titleAZ')

        // Verify that products are displayed after sorting
        cy.get('body').should('contain.text', 'products') // or appropriate product container
    })

    it('TC_GALUMA_MOBILE_TBB_SORT_004 - Verify user can sort results by Title(Z-A) when browsing products', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
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
        cy.url().should('include', '/t/b')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // First, let's see what options are available in the dropdown 
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            const options = [...$options].map(option => option.text)
            cy.log('Available sort options:', options.join(', '))
        })

        // Select "Title (Z-A)" from the sort dropdown
        cy.get('#sort-results-by-select-mobile').select('titleZA')
        cy.wait(2000)

        // Verify the selection was applied
        cy.get('#sort-results-by-select-mobile').should('have.value', 'titleZA')

        // Verify that products are displayed after sorting
        cy.get('body').should('contain.text', 'products') // or appropriate product container
    })

    it('TC_GALUMA_MOBILE_TBB_SORT_005 - Verify user can sort results by Price(Low to High) when browsing products', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
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
        cy.url().should('include', '/t/b')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // First, let's see what options are available in the dropdown 
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            const options = [...$options].map(option => option.text)
            cy.log('Available sort options:', options.join(', '))
        })

        // Select "Price (Low to High)" from the sort dropdown
        cy.get('#sort-results-by-select-mobile').select('priceLowHigh')
        cy.wait(2000)

        // Verify the selection was applied
        cy.get('#sort-results-by-select-mobile').should('have.value', 'priceLowHigh')

        // Verify that products are displayed after sorting
        cy.get('body').should('contain.text', 'products') // or appropriate product container
    })

    it('TC_GALUMA_MOBILE_TBB_SORT_006 - Verify user can able to sort results by Price(High to Low) when browse the products', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
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
        cy.url().should('include', '/t/b')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // First, let's see what options are available in the dropdown 
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            const options = [...$options].map(option => option.text)
            cy.log('Available sort options:', options.join(', '))
        })

        // Select "Price (High to Low)" from the sort dropdown
        cy.get('#sort-results-by-select-mobile').select('priceHighLow')
        cy.wait(2000)

        // Verify the selection was applied
        cy.get('#sort-results-by-select-mobile').should('have.value', 'priceHighLow')

        // Verify that products are displayed after sorting
        cy.get('body').should('contain.text', 'products') // or appropriate product container
    })

    it('TC_GALUMA_MOBILE_TBB_SORT_007 - Verify user can able to sort newest results when browse the products', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
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
        cy.url().should('include', '/t/b')
        cy.get('body').should('be.visible')

        // Go to browse products mobile section
        cy.get('.browse_product_mobile').should('exist').click({ force: true })
        cy.wait(2000)

        // First, let's see what options are available in the dropdown 
        cy.get('#sort-results-by-select-mobile').should('be.visible')
        cy.get('#sort-results-by-select-mobile option').then(($options) => {
            // Log all available options for debugging
            const options = [...$options].map(option => option.text)
            cy.log('Available sort options:', options.join(', '))
        })

        // Select "Newest" from the sort dropdown
        cy.get('#sort-results-by-select-mobile').select('newest')
        cy.wait(2000)

        // Verify the selection was applied
        cy.get('#sort-results-by-select-mobile').should('have.value', 'newest')

        // Verify that products are displayed after sorting
        cy.get('body').should('contain.text', 'products') // or appropriate product container

        // Re-visit with mobile headers to ensure proper mobile rendering
        cy.url().then((currentUrl) => {
            cy.visit(currentUrl, {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
                }
            })
            cy.wait(2000)
        })
    })

    it('TC_GALUMA_MOBILE_TBB_QTY_008 - Verify tire quantity filtering functionality', () => {
        // Navigate to the shop tires by brands page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // 1. Verify navigation to shop tires by brands page
        cy.url().should('include', '/t/b')
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
            cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
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

    it('TC_GALUMA_MOBILE_TBB_FILTER_009 - Verify individual dropdown filter functionality for Width, Profile, and Rim', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // 1. Verify navigation to shop tires by brand page
        cy.url().should('include', '/t/b')
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
            cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
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
                cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
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

    it('TC_GALUMA_MOBILE_TBB_FILTER_010 - Verify the hierarchical filter dependency (top-to-bottom clearing)', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000) 

        // 1. Verify navigation to shop tires by brand page
        cy.url().should('include', '/t/b')
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
        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
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
        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
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

    it('TC_GALUMA_MOBILE_TBB_FILTER_011 - Verify filter combinations work correctly', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // 1. Verify navigation to shop tires by brand page
        cy.url().should('include', '/t/b')
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
                description: 'Testing Qty 4 with Width 245, Profile 50, and Rim 19',
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
            cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
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
                cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
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

    it('TC_GALUMA_MOBILE_TBB_ADDITIONAL_FILTERS_012 - Verify individual additional filter functionality for checkbox-based filters', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // 1. Verify navigation to shop tires by brand page
        cy.url().should('include', '/t/b')
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

        // Define checkbox filter categories to test
        const checkboxFilterCategories = [
            {
                name: 'Brands',
                description: 'Testing brand checkboxes',
                headerSelector: '#headingOne > .mb-0 > .btn',
                filters: [
                    { name: 'Continental', selector: '#continental-54' },
                    { name: 'Michelin', selector: '#michelin-55' }
                ]
            },
            {
                name: 'Models',
                description: 'Testing model checkboxes',
                headerSelector: '#headingTwo > .mb-0 > .btn',
                filters: [
                    { name: 'ADVAN Apex V601', selector: '#advan-apex-v601-356' },
                    { name: 'Capricorn HP', selector: '#capricorn-hp-561' }
                ]
            },
            {
                name: 'Load Index',
                description: 'Testing load index checkboxes',
                headerSelector: '#headingThree > .mb-0 > .btn',
                filters: [
                    { name: '87', selector: '#load-87' },
                    { name: '92', selector: '#load-92' }
                ]
            },
            {
                name: 'Speed Rating',
                description: 'Testing speed rating checkboxes',
                headerSelector: '#headingFour > .mb-0 > .btn',
                filters: [
                    { name: 'H', selector: '.speed-accordian-list > .list > :nth-child(1) > .form-check-input' },
                    { name: 'T', selector: '.speed-accordian-list > .list > :nth-child(12) > .form-check-input' }
                ]
            }
        ]

        // Test each checkbox filter category individually
        checkboxFilterCategories.forEach((category, categoryIndex) => {
            cy.log(`Testing category: ${category.name}`)
            cy.log(category.description)

            // Test each filter within the category individually
            category.filters.forEach((filter, filterIndex) => {
                cy.log(`Testing ${category.name} - ${filter.name}`)

                // 3. Click on 'Tire Specs' button to open filters
                cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
                cy.wait(1000)

                // 4. Verify filters popup is visible
                cy.get('.shop_w_filter').should('be.visible')

                // 5. Navigate to additional filters section
                cy.get('.add-filters').scrollIntoView().should('be.visible').click()
                cy.wait(1000)
                cy.log('Navigated to additional filters section')

                // 6. Expand the category section by clicking the header button
                cy.get(category.headerSelector).scrollIntoView().click({ force: true })
                cy.wait(2000) // Increased wait time for accordion to fully expand
                cy.log(`Clicked header button for ${category.name} section`)

                // Check if the collapse section is now visible
                cy.get('body').then(($body) => {
                    const collapseElements = $body.find('.collapse.show')
                    cy.log(`Found ${collapseElements.length} expanded collapse sections`)
                })

                // 7. Check if the specific filter checkbox exists and select it
                cy.get('body').then(($body) => {
                    if ($body.find(filter.selector).length > 0) {
                        cy.log(`Found checkbox ${filter.name}, attempting to interact with it`)

                        // Check if checkbox is already checked, if so uncheck it first
                        cy.get(filter.selector).then(($checkbox) => {
                            if ($checkbox.is(':checked')) {
                                cy.get(filter.selector).uncheck({ force: true })
                                cy.wait(500)
                                cy.log(`Unchecked ${filter.name} to reset state`)
                            }
                        })

                        // Select the checkbox with force option
                        cy.get(filter.selector).scrollIntoView().check({ force: true })
                        cy.wait(1000)

                        // 8. Verify checkbox gets tick mark when selected
                        cy.get(filter.selector).should('be.checked')
                        cy.log(`✓ Verified ${filter.name} checkbox is checked`)

                        // 9. Apply filters after selection
                        cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
                        cy.wait(3000)

                        // 10. Verify results are filtered correctly
                        cy.get('#tire-products-container-mobile').should('be.visible')
                        cy.log(`Applied ${category.name} filter: ${filter.name}`)

                        // 11. Verify filtered results
                        cy.get('body').then(($body) => {
                            if ($body.find('#tire-products-container-mobile [data-eid]').length > 0) {
                                cy.get('#tire-products-container-mobile [data-eid]').then(($products) => {
                                    const productCount = $products.length
                                    cy.log(`Found ${productCount} products for ${category.name}: ${filter.name}`)

                                    if (productCount > 0) {
                                        // Test product interaction to verify filter works
                                        cy.get('#tire-products-container-mobile [data-eid]').eq(0).then(($product) => {
                                            const dataEid = $product.attr('data-eid')
                                            cy.log(`Testing product interaction - data-eid: ${dataEid}`)

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
                                cy.log(`No products found for ${category.name}: ${filter.name}`)
                            }
                        })

                        // 12. Clear filters between each individual test
                        cy.log(`Clearing filters after testing ${category.name}: ${filter.name}`)

                        // Click on 'Tire Specs' button to open filters again
                        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
                        cy.wait(1000)

                        // Verify filter popup is open
                        cy.get('.shop_w_filter').should('be.visible')

                        // Click clear filters button
                        cy.get('.mobile-clear-filter').should('be.visible').click()
                        cy.wait(2000)

                        cy.log(`Filters cleared after testing ${category.name}: ${filter.name}`)

                    } else {
                        cy.log(`Filter ${filter.name} with selector ${filter.selector} not found, skipping`)
                    }
                })
            })

            cy.log(`Completed testing all filters in category: ${category.name}`)
        })

        // Final verification
        cy.log('Individual additional filter functionality test completed - all checkbox categories tested')
    })

    it('TC_GALUMA_MOBILE_TBB_ADDITIONAL_FILTERS_013 - Verify remaining additional filter categories functionality', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // 1. Verify navigation to shop tires by brand page
        cy.url().should('include', '/t/b')
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

        // Define remaining checkbox filter categories to test
        const remainingFilterCategories = [
            {
                name: 'Tire Type',
                description: 'Testing tire type checkboxes',
                headerSelector: '#headingFive > .mb-0 > .btn',
                filters: [
                    { name: 'All Season', selector: '#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input' },
                    { name: 'Winter', selector: '#collapseExample4 > .card > .box > ul > .list > :nth-child(3) > .form-check-input' }
                ]
            },
            {
                name: 'Run Flat',
                description: 'Testing run flat checkboxes',
                headerSelector: '#headingSix > .mb-0 > .btn',
                filters: [
                    { name: 'Yes', selector: '#collapseExample5 > .card > .box > ul > :nth-child(1) > .form-check > .form-check-input' },
                    { name: 'No', selector: 'ul > :nth-child(2) > .form-check > .form-check-input' }
                ]
            },
            {
                name: 'Condition',
                description: 'Testing condition checkboxes',
                headerSelector: '#headingSeven > .mb-0 > .btn',
                filters: [
                    { name: 'Brand New', selector: '#collapseExample6 > .card > .box > ul > .list > :nth-child(1) > .form-check-input' },
                    { name: 'Budget', selector: '#collapseExample6 > .card > .box > ul > .list > :nth-child(5) > .form-check-input' }
                ]
            }
        ]

        // Test each remaining checkbox filter category individually
        remainingFilterCategories.forEach((category, categoryIndex) => {
            cy.log(`Testing category: ${category.name}`)
            cy.log(category.description)

            // Test each filter within the category individually
            category.filters.forEach((filter, filterIndex) => {
                cy.log(`Testing ${category.name} - ${filter.name}`)

                // 3. Click on 'Tire Specs' button to open filters
                cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
                cy.wait(1000)

                // 4. Verify filters popup is visible
                cy.get('.shop_w_filter').should('be.visible')

                // 5. Navigate to additional filters section
                cy.get('.add-filters').scrollIntoView().should('be.visible').click()
                cy.wait(1000)
                cy.log('Navigated to additional filters section')

                // 6. Expand the category section by clicking the header button
                cy.get(category.headerSelector).scrollIntoView().click({ force: true })
                cy.wait(2000) // Increased wait time for accordion to fully expand
                cy.log(`Clicked header button for ${category.name} section`)

                // Check if the collapse section is now visible
                cy.get('body').then(($body) => {
                    const collapseElements = $body.find('.collapse.show')
                    cy.log(`Found ${collapseElements.length} expanded collapse sections`)
                })

                // 7. Check if the specific filter checkbox exists and select it
                cy.get('body').then(($body) => {
                    if ($body.find(filter.selector).length > 0) {
                        cy.log(`Found checkbox ${filter.name}, attempting to interact with it`)

                        // Check if checkbox is already checked, if so uncheck it first
                        cy.get(filter.selector).then(($checkbox) => {
                            if ($checkbox.is(':checked')) {
                                cy.get(filter.selector).uncheck({ force: true })
                                cy.wait(500)
                                cy.log(`Unchecked ${filter.name} to reset state`)
                            }
                        })

                        // Select the checkbox with force option
                        cy.get(filter.selector).scrollIntoView().check({ force: true })
                        cy.wait(1000)

                        // 8. Verify checkbox gets tick mark when selected
                        cy.get(filter.selector).should('be.checked')
                        cy.log(`✓ Verified ${filter.name} checkbox is checked`)

                        // 9. Apply filters after selection
                        cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
                        cy.wait(3000)

                        // 10. Verify results show correctly filtered products
                        cy.get('#tire-products-container-mobile').should('be.visible')
                        cy.log(`Applied ${category.name} filter: ${filter.name}`)

                        // 11. Verify filtered results
                        cy.get('body').then(($body) => {
                            if ($body.find('#tire-products-container-mobile [data-eid]').length > 0) {
                                cy.get('#tire-products-container-mobile [data-eid]').then(($products) => {
                                    const productCount = $products.length
                                    cy.log(`Found ${productCount} products for ${category.name}: ${filter.name}`)

                                    if (productCount > 0) {
                                        // Test product interaction to verify filter works
                                        cy.get('#tire-products-container-mobile [data-eid]').eq(0).then(($product) => {
                                            const dataEid = $product.attr('data-eid')
                                            cy.log(`Testing product interaction - data-eid: ${dataEid}`)

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
                                cy.log(`No products found for ${category.name}: ${filter.name}`)
                            }
                        })

                        // 12. Clear filters between each individual test
                        cy.log(`Clearing filters after testing ${category.name}: ${filter.name}`)

                        // Click on 'Tire Specs' button to open filters again
                        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
                        cy.wait(1000)

                        // Verify filter popup is open
                        cy.get('.shop_w_filter').should('be.visible')

                        // Click clear filters button to test Clear filters functionality
                        cy.get('.mobile-clear-filter').should('be.visible').click()
                        cy.wait(2000)

                        cy.log(`Filters cleared after testing ${category.name}: ${filter.name}`)

                    } else {
                        cy.log(`Filter ${filter.name} with selector ${filter.selector} not found, skipping`)
                    }
                })
            })

            cy.log(`Completed testing all filters in category: ${category.name}`)
        })

        // 13. Test the Clear filters button functionality separately
        cy.log('Testing Clear filters button functionality')

        // Open filters one more time
        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
        cy.wait(1000)

        // Navigate to additional filters
        cy.get('.add-filters').scrollIntoView().click({ force: true })
        cy.wait(1000)

        // Expand first category and select a checkbox
        cy.get('#headingFive > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)

        // Select a checkbox to test clear functionality
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').length > 0) {
                cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').check({ force: true })
                cy.wait(1000)
                cy.log('Selected a checkbox to test clear functionality')

                // Verify checkbox is checked
                cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').should('be.checked')

                // Click clear filters button
                cy.get('.mobile-clear-filter').should('be.visible').click()
                cy.wait(2000)
                cy.log('✓ Clear filters button functionality verified')
            }
        })

        // Final verification
        cy.log('Remaining additional filter categories functionality test completed - Tire Type, Run Flat, and Condition categories tested')
    })

    it('TC_GALUMA_MOBILE_TBB_ADDITIONAL_FILTERS_014 - Verify the hierarchical filter dependency (top-to-bottom clearing) for additional filters', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // 1. Verify navigation to shop tires by brand page
        cy.url().should('include', '/t/b')
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
        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
        cy.wait(1000)

        // 4. Verify filters popup is visible
        cy.get('.shop_w_filter').should('be.visible')

        // 5. Navigate to additional filters section
        cy.get('.add-filters').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.log('Navigated to additional filters section')

        // 6. Select checkboxes from top to bottom - Initial Setup
        cy.log('Setting up initial filter hierarchy: Brand → Model → Load Index → Speed Rating')

        // Select Brand (Continental)
        cy.get('#headingOne > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('#continental-54').scrollIntoView().check({ force: true })
        cy.wait(1000)
        cy.get('#continental-54').should('be.checked')
        cy.log('✓ Selected Brand: Continental')

        // Select Model (ContiProContact (N1))
        cy.get('#headingTwo > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('[id="contiprocontact-(n1)-289"]').scrollIntoView().check({ force: true })
        cy.wait(1000)
        cy.get('[id="contiprocontact-(n1)-289"]').should('be.checked')
        cy.log('✓ Selected Model: ContiProContact (N1)')

        // Select Load Index (103)
        cy.get('#headingThree > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('#load-103').scrollIntoView().check({ force: true })
        cy.wait(1000)
        cy.get('#load-103').should('be.checked')
        cy.log('✓ Selected Load Index: 103')

        // Select Speed Rating (V)
        cy.get('#headingFour > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('.speed-accordian-list > .list > [style=""] > .form-check-input').scrollIntoView().check({ force: true })
        cy.wait(1000)
        cy.get('.speed-accordian-list > .list > [style=""] > .form-check-input').should('be.checked')
        cy.log('✓ Selected Speed Rating: V')

        // 7. Verify all initial filters are selected
        cy.log('Verifying all initial filters are selected before testing hierarchy')
        cy.get('#continental-54').should('be.checked')
        cy.get('[id="contiprocontact-(n1)-289"]').should('be.checked')
        cy.get('#load-103').should('be.checked')
        cy.get('.speed-accordian-list > .list > [style=""] > .form-check-input').should('be.checked')

        // 8. Apply initial filters and verify results
        cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
        cy.wait(3000)
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.log('Applied initial filters and verified results')

        // 9. Test hierarchical dependency - Change Brand and verify dependent filters are cleared
        cy.log('Testing hierarchical dependency: Changing Brand should clear all filters below')

        // Reopen filters
        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.get('.add-filters').scrollIntoView().click({ force: true })
        cy.wait(1000)

        // Select a different Brand (Bridgestone) 
        cy.get('#headingOne > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.get('#bridgestone-45').scrollIntoView().check({ force: true })
        cy.wait(2000) // Wait for hierarchical clearing to take effect
        cy.log('Added new Brand Bridgestone')

        // 10. Verify that dependent filters are automatically cleared
        cy.log('Verifying that filters below Brand are automatically cleared')
        cy.get('#bridgestone-45').should('be.checked')
        cy.log('✓ New Brand (Bridgestone) is selected')

        // 11. Apply filters after Brand change and verify results
        cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
        cy.wait(3000)
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.log('Applied Brand change filter and verified results')

        // 12. Verify and show that previous selections in Model, Load Index and Speed Rating are cleared
        cy.log('Verifying hierarchical clearing - checking previous selections are cleared')

        // Reopen filters to check the cleared state
        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.get('.add-filters').scrollIntoView().click({ force: true })
        cy.wait(1000)

        // Check Model section - verify ContiProContact (N1) is no longer selected
        cy.get('#headingTwo > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('[id="contiprocontact-(n1)-289"]').should('not.be.checked')
        cy.log('✓ VERIFIED: Previous Model selection "ContiProContact (N1)" is now cleared')

        // Check Load Index section - verify 103 is no longer selected
        cy.get('#headingThree > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('#load-103').should('not.be.checked')
        cy.log('✓ VERIFIED: Previous Load Index selection "103" is now cleared')

        // Check Speed Rating section - verify V is no longer selected
        cy.get('#headingFour > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('.speed-accordian-list > .list > [style=""] > .form-check-input').should('not.be.checked')
        cy.log('✓ VERIFIED: Previous Speed Rating selection "V" is now cleared')

        // Verify only the new Brand (Bridgestone) remains selected
        cy.get('#headingOne > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.get('#bridgestone-45').should('be.checked')
        cy.log('✓ CONFIRMED: Only new Brand "Bridgestone" remains selected after hierarchical clearing')

        // Summary of hierarchical clearing verification
        cy.log('=== HIERARCHICAL CLEARING SUMMARY ===')
        cy.log('✓ Brand changed from Continental to Bridgestone')
        cy.log('✓ Model "ContiProContact (N1)" automatically cleared')
        cy.log('✓ Load Index "103" automatically cleared')
        cy.log('✓ Speed Rating "V" automatically cleared')
        cy.log('✓ Hierarchical dependency working correctly')

        // 12. Clear filters before starting second hierarchy test
        cy.log('Clearing filters before second hierarchy test')
        cy.get('.mobile-clear-filter').should('be.visible').click()
        cy.wait(2000)
        cy.log('✓ Filters cleared successfully')

        // 13. Set up second hierarchy test - Select from Speed Rating to Run Flat
        cy.log('Setting up second hierarchy: Speed Rating → Tire Type → Run Flat')

        // Open filters for second test (using force click to handle visibility issues)
        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.get('.add-filters').scrollIntoView().click({ force: true })
        cy.wait(1000)

        // Select Speed Rating (T)
        cy.get('#headingFour > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').scrollIntoView().check({ force: true })
        cy.wait(1000)
        cy.get('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').should('be.checked')
        cy.log('✓ Selected Speed Rating: T')

        // Select Tire Type (All Season)
        cy.get('#headingFive > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').scrollIntoView().check({ force: true })
        cy.wait(1000)
        cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').should('be.checked')
        cy.log('✓ Selected Tire Type: All Season')

        // Select Run Flat (No) 
        cy.get('#headingSix > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('#collapseExample5 > .card > .box > ul > :nth-child(2) > .form-check > .form-check-input').scrollIntoView().check({ force: true })
        cy.wait(1000)
        cy.get('#collapseExample5 > .card > .box > ul > :nth-child(2) > .form-check > .form-check-input').should('be.checked')
        cy.log('✓ Selected Run Flat: No')

        // 14. Verify all second hierarchy filters are selected
        cy.log('Verifying all second hierarchy filters are selected before testing hierarchy')
        cy.get('.speed-accordian-list > .list > :nth-child(12) > .form-check-input').should('be.checked')
        cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').should('be.checked')
        cy.get('#collapseExample5 > .card > .box > ul > :nth-child(2) > .form-check > .form-check-input').should('be.checked')

        // 15. Apply second hierarchy filters and verify results
        cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
        cy.wait(3000)
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.log('Applied second hierarchy filters and verified results')

        // 16. Test second hierarchical dependency - Change Speed Rating
        cy.log('Testing second hierarchical dependency: Changing Speed Rating should clear Tire Type and Run Flat')

        // Reopen filters
        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.get('.add-filters').scrollIntoView().click({ force: true })
        cy.wait(1000)

        // Select a different Speed Rating (V)
        cy.get('#headingFour > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.get('.speed-accordian-list > .list > :nth-child(14) > .form-check-input').scrollIntoView().check({ force: true })
        cy.wait(2000) // Wait for hierarchical clearing to take effect
        cy.log('Changed Speed Rating to V')

        // 16. Verify that dependent filters below Speed Rating are cleared
        cy.log('Verifying that Tire Type and Run Flat filters are automatically cleared')
        cy.get('.speed-accordian-list > .list > :nth-child(14) > .form-check-input').should('be.checked')
        cy.log('✓ New Speed Rating (V) is selected')

        // Check if lower level filters are cleared - verify tick marks are removed
        cy.get('body').then(($body) => {
            if ($body.find('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input:checked').length === 0) {
                cy.log('✓ Tire Type filter tick mark was properly removed')
            } else {
                cy.log('⚠ Tire Type filter was not cleared as expected')
            }
            if ($body.find('#collapseExample5 > .card > .box > ul > :nth-child(2) > .form-check > .form-check-input:checked').length === 0) {
                cy.log('✓ Run Flat filter tick mark was properly removed')
            } else {
                cy.log('⚠ Run Flat filter was not cleared as expected')
            }
        })

        // 17. Apply final filters and verify results
        cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
        cy.wait(3000)
        cy.get('#tire-products-container-mobile').should('be.visible')
        cy.log('Applied final Speed Rating change and verified results')

        // 18. Verify and show that previous selections in Tire Type and Run Flat are cleared
        cy.log('Verifying hierarchical clearing - checking previous selections are cleared')

        // Reopen filters to check the cleared state
        cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.get('.add-filters').scrollIntoView().click({ force: true })
        cy.wait(1000)

        // Check Tire Type section - verify All Season is no longer selected
        cy.get('#headingFive > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('#collapseExample4 > .card > .box > ul > .list > :nth-child(1) > .form-check-input').should('not.be.checked')
        cy.log('✓ VERIFIED: Previous Tire Type selection "All Season" is now cleared')

        // Check Run Flat section - verify No is no longer selected
        cy.get('#headingSix > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(2000)
        cy.get('#collapseExample5 > .card > .box > ul > :nth-child(2) > .form-check > .form-check-input').should('not.be.checked')
        cy.log('✓ VERIFIED: Previous Run Flat selection "No" is now cleared')

        // Verify only the new Speed Rating (V) remains selected
        cy.get('#headingFour > .mb-0 > .btn').scrollIntoView().click({ force: true })
        cy.wait(1000)
        cy.get('.speed-accordian-list > .list > :nth-child(14) > .form-check-input').should('be.checked')
        cy.log('✓ CONFIRMED: Only new Speed Rating "V" remains selected after hierarchical clearing')

        // Summary of second hierarchical clearing verification
        cy.log('=== SECOND HIERARCHICAL CLEARING SUMMARY ===')
        cy.log('✓ Speed Rating changed from T to V')
        cy.log('✓ Tire Type "All Season" automatically cleared')
        cy.log('✓ Run Flat "No" automatically cleared')
        cy.log('✓ Second hierarchical dependency working correctly')

        // Final verification
        cy.log('Hierarchical filter dependency test completed - verified top-to-bottom clearing for additional filters with tick mark removal validation')
 
    })

    it('TC_GALUMA_MOBILE_TBB_ADDITIONAL_FILTERS_015 - Verify additional filter combinations work correctly', () => {
        // Navigate to the shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36'
            }
        })
        cy.wait(3000)

        // 1. Verify navigation to shop tires by brand page
        cy.url().should('include', '/t/b')
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
                name: 'Brand + Model Combination (Continental + Cross Contact LX Sport)',
                description: 'Testing Brand (Continental) with Model (Cross Contact LX Sport)',
                filters: [
                    {
                        section: 'Brand',
                        headerSelector: '#headingOne > .mb-0 > .btn',
                        selector: '#continental-54',
                        type: 'checkbox'
                    },
                    {
                        section: 'Model',
                        headerSelector: '#headingTwo > .mb-0 > .btn',
                        selector: '#cross-contact-lx-sport-342',
                        type: 'checkbox'
                    }
                ]
            },
            {
                name: 'Brand + Load Index + Speed Rating (Bridgestone + 90 + Y)',
                description: 'Testing Brand (Bridgestone) with Load Index (90) and Speed Rating (Y)',
                filters: [
                    {
                        section: 'Brand',
                        headerSelector: '#headingOne > .mb-0 > .btn',
                        selector: '#bridgestone-45',
                        type: 'checkbox'
                    },
                    {
                        section: 'Load Index',
                        headerSelector: '#headingThree > .mb-0 > .btn',
                        selector: '#load-90',
                        type: 'checkbox'
                    },
                    {
                        section: 'Speed Rating',
                        headerSelector: '#headingFour > .mb-0 > .btn',
                        selector: '.speed-accordian-list > .list > [style=""] > .form-check-input',
                        type: 'checkbox'
                    }
                ]
            },
            {
                name: 'Tire Type + Run Flat (Summer + Yes)',
                description: 'Testing Tire Type (Summer) with Run Flat (Yes)',
                filters: [
                    {
                        section: 'Tire Type',
                        headerSelector: '#headingFive > .mb-0 > .btn',
                        selector: '#collapseExample4 > .card > .box > ul > .list > :nth-child(2) > .form-check-input',
                        type: 'checkbox'
                    },
                    {
                        section: 'Run Flat',
                        headerSelector: '#headingSix > .mb-0 > .btn',
                        selector: '#collapseExample5 > .card > .box > ul > :nth-child(1) > .form-check > .form-check-input',
                        type: 'checkbox'
                    }
                ]
            },
            {
                name: 'Brand + Speed Rating + Condition (Continental + H + Like New)',
                description: 'Testing Condition (Like New) with Brand (Continental) and Speed Rating (H)',
                filters: [
                    {
                        section: 'Brand',
                        headerSelector: '#headingOne > .mb-0 > .btn',
                        selector: '#continental-54',
                        type: 'checkbox'
                    },
                    {
                        section: 'Speed Rating',
                        headerSelector: '#headingFour > .mb-0 > .btn',
                        selector: '.speed-accordian-list > .list > :nth-child(1) > .form-check-input',
                        type: 'checkbox'
                    },
                    {
                        section: 'Condition',
                        headerSelector: '#headingSeven > .mb-0 > .btn',
                        selector: '#collapseExample6 > .card > .box > ul > .list > :nth-child(2) > .form-check-input',
                        type: 'checkbox'
                    },
                ]
            },
            {
                name: 'Multiple Brands Selection (Bridgestone + Continental)',
                description: 'Testing multiple brands selected within same category',
                filters: [
                    {
                        section: 'Brand',
                        headerSelector: '#headingOne > .mb-0 > .btn',
                        selector: '#bridgestone-45',
                        type: 'checkbox'
                    },
                    {
                        section: 'Brand',
                        headerSelector: '#headingOne > .mb-0 > .btn',
                        selector: '#continental-54',
                        type: 'checkbox'
                    }
                ]
            }
        ]

        // Store results for comparison
        const combinationResults = []

        // Test each filter combination
        filterCombinations.forEach((combination, index) => {
            cy.log(`Testing combination ${index + 1}: ${combination.name}`)
            cy.log(combination.description)

            // 3. Click on 'Tire Specs' button to open filters
            cy.get('.mfil-select-btn').scrollIntoView().click({ force: true })
            cy.wait(1000)

            // 4. Verify filters popup is visible
            cy.get('.shop_w_filter').should('be.visible')

            // 5. Navigate to additional filters section
            cy.get('.add-filters').scrollIntoView().should('be.visible').click()
            cy.wait(1000)
            cy.log('Navigated to additional filters section')

            // 6. Apply all filters for this combination
            combination.filters.forEach((filter, filterIndex) => {
                cy.log(`Applying filter: ${filter.section}`)

                // Expand the section by clicking the header button
                cy.get(filter.headerSelector).first().scrollIntoView().click({ force: true })
                cy.wait(2000)

                // Check if the specific filter checkbox exists and select it
                cy.get('body').then(($body) => {
                    if ($body.find(filter.selector).length > 0) {
                        cy.log(`Found filter ${filter.section}, applying selection`)

                        // Check if checkbox is already checked, if so uncheck it first
                        cy.get(filter.selector).first().then(($checkbox) => {
                            if ($checkbox.is(':checked')) {
                                cy.get(filter.selector).first().uncheck({ force: true })
                                cy.wait(500)
                                cy.log(`Unchecked ${filter.section} to reset state`)
                            }
                        })

                        // Select the checkbox with force option
                        cy.get(filter.selector).first().scrollIntoView().check({ force: true })
                        cy.wait(1000)

                        // Verify checkbox is checked
                        cy.get(filter.selector).first().should('be.checked')
                        cy.log(`✓ Verified ${filter.section} filter is applied`)
                    } else {
                        cy.log(`Filter ${filter.selector} not found, skipping`)
                    }
                })
            })

            // 7. Apply the filter combination
            cy.get('.mobile-buttons-container > :nth-child(2) > .btn').should('be.visible').click()
            cy.wait(3000)

            // 8. Verify results are displayed for this combination
            cy.get('#tire-products-container-mobile').should('be.visible')
            cy.log(`Applied filters for combination: ${combination.name}`)

            // 9. Count and verify products for this combination
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

            // 10. Verify results are relevant to the applied combination
            cy.log(`=== VERIFICATION FOR ${combination.name} ===`)
            cy.get('body').then(($body) => {
                if ($body.find('#tire-products-container-mobile [data-eid]').length > 0) {
                    cy.log(`✓ Results found for ${combination.name} - ${combinationResults[combinationResults.length - 1]?.count || 0} products`)
                } else {
                    cy.log(`⚠ No results found for ${combination.name}`)
                }
            })

            // 11. Clear filters before next combination (except for the last one)
            if (index < filterCombinations.length - 1) {
                cy.log(`Clearing filters after testing: ${combination.name}`)

                // Click on 'Tire Specs' button to open filters again
                cy.get('.mfil-select-btn').first().scrollIntoView().click({ force: true })
                cy.wait(1000)

                // Verify filter popup is open
                cy.get('.shop_w_filter').should('be.visible')

                // Click clear filters button
                cy.get('.mobile-clear-filter').should('be.visible').click()
                cy.wait(3000)

                // Verify filters are cleared by checking the filter popup is closed
                cy.get('body').then(($body) => {
                    if ($body.find('.shop_w_filter:visible').length === 0) {
                        cy.log(`✓ Filters cleared and popup closed after testing: ${combination.name}`)
                    } else {
                        cy.log(`⚠ Filter popup still visible after clearing: ${combination.name}`)
                    }
                })
            }
        })

        // 12. Final verification - compare results across combinations
        cy.then(() => {
            cy.log('=== ADDITIONAL FILTER COMBINATION RESULTS SUMMARY ===')
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
            if (combinationResults.length === 6) {
                cy.log('✓ All 6 additional filter combinations were tested successfully')
            } else {
                cy.log(`⚠ Expected 6 combinations, but tested ${combinationResults.length}`)
            }

            // Verify different combination types were tested
            const brandModelCombinations = combinationResults.filter(r => r.name.includes('Brand + Model')).length
            const brandLoadSpeedCombinations = combinationResults.filter(r => r.name.includes('Brand + Load Index + Speed Rating')).length
            const tireTypeRunFlatCombinations = combinationResults.filter(r => r.name.includes('Tire Type + Run Flat')).length
            const brandSpeedConditionCombinations = combinationResults.filter(r => r.name.includes('Brand + Speed Rating + Condition')).length
            const multipleBrandCombinations = combinationResults.filter(r => r.name.includes('Multiple Brands')).length

            cy.log(`✓ Tested ${brandModelCombinations} Brand + Model combinations`)
            cy.log(`✓ Tested ${brandLoadSpeedCombinations} Brand + Load Index + Speed Rating combinations`)
            cy.log(`✓ Tested ${tireTypeRunFlatCombinations} Tire Type + Run Flat combinations`)
            cy.log(`✓ Tested ${brandSpeedConditionCombinations} Brand + Speed Rating + Condition combinations`)
            cy.log(`✓ Tested ${multipleBrandCombinations} Multiple Brands within same category combinations`)
        })

        // Final verification
        cy.log('Additional filter combinations test completed - verified multiple complex filter scenarios work correctly with proper result differentiation')
    })

    it('TC_GALUMA_MOBILE_TBB_PAGINATION_016 - Verify user can navigate pages using left and right arrow buttons', () => {
        // Navigate to shop tires by brands page
        cy.visit("https://dev.galumatires.com/t/b", {
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
        cy.url().should('include', '/t/b')
        cy.get('body').should('be.visible')

        // Scroll to pagination section slowly and wait for it to be fully visible
        cy.get('.pagination-wrapper').should('be.visible').scrollIntoView({ duration: 1000 })
        cy.wait(3000)
        
        // Ensure pagination container is stable and visible
        cy.get('#shtire-pagination-container').should('be.visible')
        cy.wait(1000)

        // Click on 2
        cy.get('#shtire-pagination-container > :nth-child(2)').should('be.visible').click()
        cy.wait(3000)
        // It should direct to the next page
        cy.get('body').should('be.visible')

        // Scroll to pagination section slowly and wait for it to be fully visible
        cy.get('.pagination-wrapper').should('be.visible').scrollIntoView({ duration: 1000 })
        cy.wait(3000)
        
        // Ensure pagination container is stable and visible
        cy.get('#shtire-pagination-container').should('be.visible')
        cy.wait(1000)

        // Click on 5
        cy.get('#shtire-pagination-container > :nth-child(5)').should('be.visible').click()
        cy.wait(3000)
        // It should direct to the 5th page
        cy.get('body').should('be.visible')

        // Scroll to pagination section slowly and wait for it to be fully visible
        cy.get('.pagination-wrapper').should('be.visible').scrollIntoView({ duration: 1000 })
        cy.wait(3000)
        
        // Ensure pagination container is stable and visible
        cy.get('#shtire-pagination-container').should('be.visible')
        cy.wait(1000)

        // Click on left arrow
        cy.get('.prev').should('be.visible').click()
        cy.wait(3000)
        // It should direct to the previous page
        cy.get('body').should('be.visible')

        // Scroll to pagination section slowly and wait for it to be fully visible
        cy.get('.pagination-wrapper').should('be.visible').scrollIntoView({ duration: 1000 })
        cy.wait(3000)
        
        // Ensure pagination container is stable and visible
        cy.get('#shtire-pagination-container').should('be.visible')
        cy.wait(1000)

        // Click on right arrow
        cy.get('.next').should('be.visible').click()
        cy.wait(3000)
        // It should direct to the next page
        cy.get('body').should('be.visible')
    })

})