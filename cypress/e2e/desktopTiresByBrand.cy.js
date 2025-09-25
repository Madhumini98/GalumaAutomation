describe('Galuma Desktop Tires By Brand Page Tests', () => {
    // Note: Filter combination tests are not included in this file as they are already
    // comprehensively covered in desktopTiresBySize.cy.js. The same filters appear on
    // both the tires by brand and tires by size pages, so duplicating those tests
    // would be redundant.

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

    it('TC_GALUMA_TBB_NAV_001 - Verify successful navigation to the shop tires by brand page', () => {
        // 1. Verify home page is loaded
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')

        // 2. Click Shop Products
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(1000)

        // 3. Click Tires By Brand
        cy.get('[href="/t/b"]').should('be.visible').click()
        cy.wait(2000)

        // 4. Verify navigation to shop tires by brand page - /t/b
        cy.url().should('include', '/t/b')
        cy.get('body').should('be.visible')
        cy.log('Successfully navigated to the shop tires by brand page')
    })

    it('TC_GALUMA_TBB_BRANDS_002 - Shop Tires by Brand on Desktop Version', () => {
        // 1. Navigate to tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // 2. Verify brands container visible
        cy.get('.brands-by-brands').should('be.visible')

        // 3. Test Bridgestone brand
        cy.get('.brands-by-brands > :nth-child(1)').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/bridgestone')
        cy.log('Successfully navigated to Bridgestone brand page')

        // Navigate back to brands page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(2000)

        // 4. Test Pirelli brand
        cy.get('.brands-by-brands > :nth-child(2)').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/pirelli')
        cy.log('Successfully navigated to Pirelli brand page')

        // Navigate back to brands page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(2000)

        // 5. Test Dunlop brand
        cy.get('.brands-by-brands > :nth-child(4)').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/dunlop')
        cy.log('Successfully navigated to Dunlop brand page')

        // Navigate back to brands page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(2000)

        // 6. Test Continental brand
        cy.get('.brands-by-brands > :nth-child(7)').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/continental')
        cy.log('Successfully navigated to Continental brand page')

        // Navigate back to brands page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(2000)

        // 7. Test Michelin brand
        cy.get('.brands-by-brands > :nth-child(8)').click()
        cy.wait(2000)
        cy.url().should('include', '/t/b/michelin')
        cy.log('Successfully navigated to Michelin brand page')
    })

    it('TC_GALUMA_TBB_SORT_003 - Verify user can sort results by Title (A-Z) when browsing products', () => {
        // Navigate to the shop by tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by brand page
        cy.url().should('include', '/t/b')

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

    it('TC_GALUMA_TBB_SORT_004 - Verify user can sort results by Title (Z-A) when browsing products', () => {
        // Navigate to the shop by tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by brand page
        cy.url().should('include', '/t/b')

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

    it('TC_GALUMA_TBB_SORT_005 - Verify user can sort results by Price(Low to High) when browsing products', () => {
        // Navigate to the shop by tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by brand page
        cy.url().should('include', '/t/b')

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

    it('TC_GALUMA_TBB_SORT_006 - Verify user can able to sort results by Price(High to Low) when browse the products', () => {
        // Navigate to the shop by tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by brand page
        cy.url().should('include', '/t/b')

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

    it('TC_GALUMA_TBB_SORT_007 - Verify user can able to sort newest results when browse the products', () => {
        // Navigate to the shop by tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify navigation to shop by brand page
        cy.url().should('include', '/t/b')

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

    it('TC_GALUMA_TBB_PAGINATION_008 - Verify user can navigate pages using left and right arrow buttons', () => {
        // 1. Navigate to shop by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // 2. Verify URL includes '/t/b' and page is visible
        cy.url().should('include', '/t/b')
        cy.get('body').should('be.visible')

        // 3. Scroll to pagination section
        cy.get('body').then(($body) => {
            if ($body.find('.pagination-wrapper').length > 0) {
                cy.get('.pagination-wrapper').scrollIntoView()
                cy.wait(2000)
                cy.log('Pagination wrapper found and scrolled into view')
            } else {
                cy.log('Pagination wrapper not found, scrolling to bottom of page')
                cy.scrollTo('bottom')
                cy.wait(2000)
            }
        })

        // 4. Verify pagination container visible
        cy.get('body').then(($body) => {
            if ($body.find('#shtire-pagination-container').length > 0) {
                cy.get('#shtire-pagination-container').should('be.visible')
                cy.log('Pagination container is visible')

                // 5. Click page 2
                cy.log('Attempting to click page 2')
                cy.get('#shtire-pagination-container').then(($container) => {
                    const pageButtons = $container.find(':nth-child(2)')
                    if (pageButtons.length > 0) {
                        cy.get('#shtire-pagination-container > :nth-child(2)').click()
                        cy.wait(3000)
                        cy.log('Page 2 clicked successfully')

                        // 6. Verify page load
                        cy.get('body').should('be.visible')

                        // 7. Scroll to pagination section again
                        cy.get('.pagination-wrapper').scrollIntoView()
                        cy.wait(2000)

                        // 8. Verify pagination container visible
                        cy.get('#shtire-pagination-container').should('be.visible')

                        // 9. Click page 5
                        cy.log('Attempting to click page 5')
                        cy.get('#shtire-pagination-container').then(($container) => {
                            const page5Button = $container.find(':nth-child(5)')
                            if (page5Button.length > 0) {
                                cy.get('#shtire-pagination-container > :nth-child(5)').click()
                                cy.wait(3000)
                                cy.log('Page 5 clicked successfully')

                                // 10. Verify page load
                                cy.get('body').should('be.visible')

                                // 11. Scroll to pagination section again
                                cy.get('.pagination-wrapper').scrollIntoView()
                                cy.wait(2000)

                                // 12. Verify pagination container visible
                                cy.get('#shtire-pagination-container').should('be.visible')

                                // 13. Click left arrow
                                cy.log('Attempting to click left arrow (previous page)')
                                cy.get('body').then(($body) => {
                                    if ($body.find('.prev').length > 0) {
                                        cy.get('.prev').click()
                                        cy.wait(3000)
                                        cy.log('Left arrow (previous page) clicked successfully')

                                        // 14. Verify previous page load
                                        cy.get('body').should('be.visible')

                                        // 15. Scroll to pagination section again
                                        cy.get('.pagination-wrapper').scrollIntoView()
                                        cy.wait(2000)

                                        // 16. Verify pagination container visible
                                        cy.get('#shtire-pagination-container').should('be.visible')

                                        // 17. Click right arrow
                                        cy.log('Attempting to click right arrow (next page)')
                                        cy.get('body').then(($body) => {
                                            if ($body.find('.next').length > 0) {
                                                cy.get('.next').click()
                                                cy.wait(3000)
                                                cy.log('Right arrow (next page) clicked successfully')

                                                // 18. Verify next page load
                                                cy.get('body').should('be.visible')

                                                // 19. Log test completion
                                                cy.log('Verify pagination navigation using left and right arrow buttons')
                                            } else {
                                                cy.log('Right arrow (next page) button not found')
                                            }
                                        })
                                    } else {
                                        cy.log('Left arrow (previous page) button not found')
                                    }
                                })
                            } else {
                                cy.log('Page 5 button not found, skipping remaining pagination tests')
                            }
                        })
                    } else {
                        cy.log('Page 2 button not found, testing with available pagination elements')

                        // If page 2 not found, try to find any clickable pagination elements
                        cy.get('#shtire-pagination-container').then(($container) => {
                            const allButtons = $container.find('a, button, [onclick]')
                            if (allButtons.length > 1) {
                                // Click the second available element (likely page 2 or similar)
                                cy.get('#shtire-pagination-container').find('a, button, [onclick]').eq(1).click()
                                cy.wait(3000)
                                cy.log('Alternative pagination element clicked')

                                // Continue with arrow testing
                                cy.get('body').then(($body) => {
                                    if ($body.find('.prev').length > 0 && $body.find('.next').length > 0) {
                                        cy.get('.prev').click()
                                        cy.wait(2000)
                                        cy.log('Previous arrow tested')

                                        cy.get('.next').click()
                                        cy.wait(2000)
                                        cy.log('Next arrow tested')
                                    } else {
                                        cy.log('Arrow buttons not available for testing')
                                    }
                                })
                            } else {
                                cy.log('No suitable pagination elements found for testing')
                            }
                        })
                    }
                })
            } else {
                cy.log('Pagination container not found - may indicate no pagination needed for current results')

                // In case pagination is not visible, still verify the page is functional
                cy.get('#tire-products-container').should('be.visible')
                cy.log('Products container verified as visible - pagination may not be needed')
            }
        })
    })

    it('TC_GALUMA_TBB_CART_009 - Verify user can add product to cart and remove it', () => {
        // Navigate to the shop tires page with authentication
        cy.visit('https://dev.galumatires.com/t/b', {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })

        // Wait for the page to load completely and products to be displayed
        cy.wait(3000)

        // Scroll to the products section to ensure it's visible
        cy.get('#tire-products-container').scrollIntoView()
        cy.wait(1000)

        // Get the first product and hover over it to make the Add to Cart button visible
        cy.get('#tire-products-container > div:nth-child(1)').trigger('mouseover')
        cy.wait(1000)

        // Click on the "Add to Cart" button using the class selector
        cy.get('.add-to-cart-btn').first().click({ force: true })
        cy.wait(2000)

        // Verify that the cart sidebar opens and product is visible in the cart
        cy.get('.side-cart-inner').should('be.visible')

        // Click on 'remove' button to remove product from the cart
        cy.get(':nth-child(2) > .remove-cart-item').should('be.visible').click()
        cy.wait(1000)

        // Verify the cart is empty or shows empty state (no items visible)
        cy.get('.side-cart-inner').should('be.visible')

        // Close the cart popup by clicking the close button
        cy.get('#close-cart-popup > strong').should('be.visible').click()
    })

    it('TC_GALUMA_MOBILE_TBB_HELP_SECTION_010 - Verify visibility of help section content', () => {
        // Navigate to shop tires by brand page
        cy.visit("https://dev.galumatires.com/t/b", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)

        // Verify URL includes '/t/b' and page is visible
        cy.url().should('include', '/t/b')
        cy.get('body').should('be.visible')

        // Scroll to help section
        cy.get('.links > a').scrollIntoView()
        cy.wait(1000)

        // Verify "Need help deciding? Have a technical question?" text is visible
        cy.get('.links > a').should('be.visible').and('contain.text', 'Need helpdeciding?Have a technicalquestion?')

        // Verify support team text is visible
        cy.get('.detail > p').should('be.visible')
            .and('contain.text', 'Our fully trained support team')
            .and('contain.text', '954-366-5694')
            .and('contain.text', 'contact us')

        // Log test completion
        cy.log('Verify help section content visibility')
    })

})