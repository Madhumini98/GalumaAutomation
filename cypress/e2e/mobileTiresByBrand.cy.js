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

    it.only('TC_GALUMA_MOBILE_TBB_NAV_001 - Verify successful navigation to the shop tires by brand page', () => {
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

    it('TC_GALUMA_MOBILE_TBB_PAGINATION_008 - Verify user can navigate pages using left and right arrow buttons', () => {
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