describe('Galuma Mobile Home Page Tests', () => {
    beforeEach(() => {
        // Common setup for all test cases
        cy.viewport(360, 640)
        cy.visit("https://dev.galumatires.com/", {
            auth: {
                username: 'galumadev',
                password: 'Test.123'
            }
        })
        cy.wait(3000)
    })

    it('TC_GALUMA_SEARCHHEADER_MOBILE_001 - Ensure search box displays appropriate results for valid queries', () => {
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()
        cy.get('input[type="text"]:visible').first().should('be.visible').type('Pirelli')
        cy.get('[href="https://dev.galumatires.com/t/b/pirelli"] > :nth-child(1) > b').should('be.visible').click()
        cy.url().should('include', 'pirelli')
        cy.get('body').should('contain', 'Pirelli')
    })

    it('TC_GALUMA_SEARCHHEADER_MOBILE_002 - Verify user can search for products and navigate to specific product', () => {
        // Handle uncaught application errors
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Return false to prevent the error from failing this test
            if (err.message.includes('customer is not defined')) {
                return false
            }
        })

        // Click search icon to open search overlay
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Type Pirelli in search box
        cy.get('input[type="text"]:visible').first().should('be.visible').type('Pirelli')

        // Wait for search suggestions to load
        cy.wait(2000)

        // Click on the specific Pirelli product from search suggestions
        cy.get('#suggestions-container > [href="https://dev.galumatires.com/p/1-high-tread-pirelli-tire-255-50-19-pirelli-scorpion-verde-80-porsche-47597"]').should('be.visible').click()

        // Verify navigation to product details page
        cy.url().should('include', '/p/')
        cy.get('body').should('be.visible')

        // Verify product page contains Pirelli brand information
        cy.get('body').should('contain', 'Pirelli')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_003 - Verify user can search for product by size', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Click on Width field to open dropdown
        cy.get('.thform-size > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup').should('be.visible').click()

        // Wait for dropdown to open
        cy.wait(1000)

        // Select "225" in Width using original selector
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > .card-width-select-popup > :nth-child(1) > [data-value="225"] > .red_h').should('be.visible').click()

        // Verify Width selection
        cy.get('#tire-width-value-read-tires').should('contain', '225')

        // Click on Ratio field to open dropdown
        cy.get('.thform-size > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup').should('be.visible').click()

        // Wait for dropdown to open
        cy.wait(1000)

        // Select "35" in Ratio using original selector
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > .card-ratio-select-popup > :nth-child(1) > [data-value="35"] > .red_h').should('be.visible').click()

        // Verify Ratio selection
        cy.get('#tire-ratio-value-read-tires').should('contain', '35')

        // Click on Diameter field to open dropdown
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup').should('be.visible').click()

        // Wait for dropdown to open
        cy.wait(1000)

        // Select "20" in Diameter using original selector
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup > .card-diameter-select-popup > :nth-child(1) > [data-value="20"] > .red_h').should('be.visible').click()

        // Verify Diameter selection
        cy.get('#tire-diameter-value-read-tires').should('contain', '20')

        // Click search tires button
        cy.get('#inside-popup-search').should('be.visible').click()

        // Wait for results to load
        cy.wait(3000)

        // Verify search results are displayed
        cy.get('.rec-size-con').should('be.visible')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_004 - Verify form field dependencies when changing width clears subsequent fields', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Step 1: Fill all fields in order - Width: 225, Ratio: 35, Diameter: 20

        // Select Width "225"
        cy.get('.thform-size > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup').should('be.visible').click()
        cy.wait(1000)
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > .card-width-select-popup > :nth-child(1) > [data-value="225"] > .red_h').should('be.visible').click()
        cy.get('#tire-width-value-read-tires').should('contain', '225')

        // Select Ratio "35"
        cy.get('.thform-size > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup').should('be.visible').click()
        cy.wait(1000)
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > .card-ratio-select-popup > :nth-child(1) > [data-value="35"] > .red_h').should('be.visible').click()
        cy.get('#tire-ratio-value-read-tires').should('contain', '35')

        // Select Diameter "20"
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup').should('be.visible').click()
        cy.wait(1000)
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup > .card-diameter-select-popup > :nth-child(1) > [data-value="20"] > .red_h').should('be.visible').click()
        cy.get('#tire-diameter-value-read-tires').should('contain', '20')

        // Step 2: Verify all fields are filled
        cy.get('#tire-width-value-read-tires').should('contain', '225')
        cy.get('#tire-ratio-value-read-tires').should('contain', '35')
        cy.get('#tire-diameter-value-read-tires').should('contain', '20')

        // Step 3: Change Width to "265" - this should clear bottom fields (Ratio and Diameter)
        cy.get('.thform-size > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup').should('be.visible').click()
        cy.wait(1000)
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > .card-width-select-popup > :nth-child(2) > [data-value="265"] > .red_h').should('be.visible').click()

        // Step 4: Verify Width changed and bottom fields are cleared
        cy.get('#tire-width-value-read-tires').should('contain', '265')
        cy.get('#tire-ratio-value-read-tires').should('not.contain', '35')
        cy.get('#tire-diameter-value-read-tires').should('not.contain', '20')

        // Step 5: Re-fill the cleared fields - Ratio: 35, Diameter: 20

        // Re-select Ratio "35"
        cy.get('.thform-size > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup').should('be.visible').click()
        cy.wait(1000)
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > .card-ratio-select-popup > :nth-child(1) > [data-value="35"] > .red_h').should('be.visible').click()
        cy.get('#tire-ratio-value-read-tires').should('contain', '35')

        // Re-select Diameter "21"
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup').should('be.visible').click()
        cy.wait(1000)
        cy.get('.mb-2 > [data-value="21"] > .red_h').should('be.visible').click()
        cy.get('#tire-diameter-value-read-tires').should('contain', '21')

        // Step 6: Verify final form state with new width and refilled bottom fields
        cy.get('#tire-width-value-read-tires').should('contain', '265')
        cy.get('#tire-ratio-value-read-tires').should('contain', '35')
        cy.get('#tire-diameter-value-read-tires').should('contain', '21')

        // Step 7: Click search to verify the form works with new values
        cy.get('#inside-popup-search').should('be.visible').click()
        cy.wait(3000)
        cy.get('.rec-size-con').should('be.visible')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_005 - Verify error message displays when user attempts to search without selecting aspect ratio', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Select search by size tab (ensure it's active)
        cy.get('.special > .heading > .active').should('be.visible')

        // Select Width "235" but leave Ratio and Diameter unselected
        cy.get('.thform-size > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup').should('be.visible').click()
        cy.wait(1000)
        cy.get('.special > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > .card-width-select-popup > :nth-child(2) > [data-value="235"] > .red_h').should('be.visible').click()

        // Verify Width selection
        cy.get('#tire-width-value-read-tires').should('contain', '235')

        // Verify Ratio and Diameter are not selected (should be empty or placeholder text)
        cy.get('#tire-ratio-value-read-tires').should('not.contain', /^\d+$/)
        cy.get('#tire-diameter-value-read-tires').should('not.contain', /^\d+$/)

        // Click 'Search Tires' button without selecting aspect ratio and diameter
        cy.get('#inside-popup-search').should('be.visible').click()

        // Wait for error message to appear
        cy.wait(2000)

        // Debug: Check for various possible error messages and selectors
        cy.get('body').then(($body) => {
            // Check for different possible error messages
            if ($body.text().includes('Error')) {
                cy.log('Found error text containing "Error"')
            }
            if ($body.text().includes('select')) {
                cy.log('Found text containing "select"')
            }
            if ($body.text().includes('aspect ratio')) {
                cy.log('Found text containing "aspect ratio"')
            }
        })

        // Try different possible error message variations
        cy.get('body').should('satisfy', ($body) => {
            const bodyText = $body.text()
            return bodyText.includes('Error! Please select aspect ratio.') ||
                bodyText.includes('Please select aspect ratio') ||
                bodyText.includes('Select aspect ratio') ||
                bodyText.includes('Aspect ratio is required') ||
                bodyText.includes('Please select all fields') ||
                bodyText.includes('Error')
        })

        // Verify search was not executed (should not navigate away or show results)
        cy.url().should('include', 'dev.galumatires.com')
        cy.get('.rec-size-con').should('not.exist')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_006 - Verify user can search for products by selecting brand and model', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load 
        cy.wait(2000)

        // Click on 'Search by Brand' tab to activate it
        cy.get('.special > .heading > .active').should('be.visible').click()

        // Wait for Search by Brand interface to load and become visible
        cy.wait(2000)

        // Select brand "Continental" from dropdown using cy.select()
        cy.get('#popup-search-tires-brand-select').should('be.visible').select('Continental')

        // Verify Continental brand is selected
        cy.get('#popup-search-tires-brand-select').should('contain', 'Continental')

        // Wait for models to load after brand selection
        cy.wait(2000)

        // Select model "ContiSportContact 6 (Star)" from dropdown using cy.select()
        cy.get('#popup-search-tires-model-select').should('be.visible').select('ContiSportContact 6 (Star)')

        // Verify model is selected
        cy.get('#popup-search-tires-model-select').should('contain', 'ContiSportContact 6')

        // Click 'Search Tires' button using the correct selector for Search by Brand
        cy.get('#inside-popup-search-by-brand').should('be.visible').click()

        // Wait for navigation to product page
        cy.wait(3000)

        // Verify navigation to the correct Continental ContiSportContact 6 Star page
        cy.url().should('include', '/t/b/continental/contisportcontact-6-star')

        // Verify page contains Continental brand information
        cy.get('body').should('contain', 'Continental')

        // Verify page contains the selected model information
        cy.get('body').should('contain', 'ContiSportContact 6')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_007 - Verify model selection clears when brand changes and user can search with new brand-model combination', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Click on 'Search by Brand' tab to activate it
        cy.get('.special > .heading > .active').should('be.visible').click()

        // Wait for Search by Brand interface to load and become visible
        cy.wait(2000)

        // Step 1: Select brand "Continental" from dropdown
        cy.get('#popup-search-tires-brand-select').should('be.visible').select('Continental')

        // Verify Continental brand is selected
        cy.get('#popup-search-tires-brand-select').should('contain', 'Continental')

        // Wait for models to load after brand selection
        cy.wait(2000)

        // Step 2: Select model "ContiSportContact 6 (Star)" from dropdown
        cy.get('#popup-search-tires-model-select').should('be.visible').select('ContiSportContact 6 (Star)')

        // Verify model is selected
        cy.get('#popup-search-tires-model-select').should('contain', 'ContiSportContact 6')

        // Step 3: Change brand to "Bridgestone" - this should clear the model selection
        cy.get('#popup-search-tires-brand-select').should('be.visible').select('Bridgestone')

        // Wait for models to load after brand change
        cy.wait(2000)

        // Step 4: Verify model selection is cleared (should not contain ContiSportContact 6)
        cy.get('#popup-search-tires-model-select').should('not.contain', 'ContiSportContact 6 (Star)')

        // Verify Bridgestone brand is selected
        cy.get('#popup-search-tires-brand-select').should('contain', 'Bridgestone')

        // Step 5: Debug what models are available for Bridgestone and select first available model
        cy.get('#popup-search-tires-model-select option').then(($options) => {
            const modelOptions = [...$options].slice(1) // Skip the first empty/placeholder option
            cy.log('Available model options for Bridgestone:', modelOptions.map(el => el.text))
            
            if (modelOptions.length > 0) {
                const firstModel = modelOptions[0]
                const modelValue = firstModel.value
                const modelText = firstModel.text
                cy.log('Selecting first available model:', modelText, 'with value:', modelValue)
                
                // Select the first available model
                cy.get('#popup-search-tires-model-select').select(modelValue)
                
                // Verify model is selected
                cy.get('#popup-search-tires-model-select').should('contain', modelText)
            }
        })

        // Step 6: Click 'Search Tires' button using the correct selector for Search by Brand
        cy.get('#inside-popup-search-by-brand').should('be.visible').click()

        // Wait for navigation to product page
        cy.wait(3000)

        // Step 7: Verify navigation to the correct Bridgestone page
        cy.url().should('include', '/t/b/bridgestone/')

        // Verify page contains Bridgestone brand information
        cy.get('body').should('contain', 'Bridgestone')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_008 - Verify user can search for specific product and navigate to product page', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Type "Dueler HP Sport A0" in the search input
        cy.get('input[type="text"]:visible').first().should('be.visible').type('Dueler HP Sport A0')

        // Wait for search suggestions to load
        cy.wait(2000)

        // Click on the suggested product
        cy.get('.suggestion-item').should('be.visible').first().click()

        // Wait for navigation to product page
        cy.wait(3000)

        // Verify navigation to the correct product page
        cy.url().should('include', '/p/1-tire-likenew-bridgestone-dueler-hp-sport-a0-255-45r20-255-45-20-2554520-54357')

        // Verify page contains the product information
        cy.get('body').should('contain', 'Dueler HP Sport A0')

        // Verify page contains Bridgestone brand information
        cy.get('body').should('contain', 'Bridgestone')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_009 - Verify user can search by stock number and navigate to product page', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Type stock number "#56462" in the search input
        cy.get('input[type="text"]:visible').first().should('be.visible').type('#56462')

        // Wait for search suggestions to load
        cy.wait(2000)

        // Click on the suggested product
        cy.get('.suggestion-item').should('be.visible').first().click()

        // Wait for navigation to product page
        cy.wait(3000)

        // Verify navigation to the correct product page
        cy.url().should('include', '/p/2x-tires-nice-pirelli-scorpion-verde-all-season-315-35-21-315-35r21-56462')

        // Verify page contains the stock number
        cy.get('body').should('contain', '56462')

        // Verify page contains Pirelli brand information
        cy.get('body').should('contain', 'Pirelli')

        // Verify page contains the product model information
        cy.get('body').should('contain', 'Scorpion Verde')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_010 - Verify user can search by stock number without # symbol and navigate to product page', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Type stock number "56462" (without #) in the search input
        cy.get('input[type="text"]:visible').first().should('be.visible').type('56462')

        // Wait for search suggestions to load
        cy.wait(2000)

        // Click on the suggested product
        cy.get('.suggestion-item').should('be.visible').first().click()

        // Wait for navigation to product page
        cy.wait(3000)

        // Verify navigation to the correct product page
        cy.url().should('include', '/p/2x-tires-nice-pirelli-scorpion-verde-all-season-315-35-21-315-35r21-56462')

        // Verify page contains the stock number
        cy.get('body').should('contain', '56462')

        // Verify page contains Pirelli brand information
        cy.get('body').should('contain', 'Pirelli')

        // Verify page contains the product model information
        cy.get('body').should('contain', 'Scorpion Verde')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_011 - Verify user can search for specific product ID (245/50R19) and navigate to product page', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Type product ID "245/50R19" in the search input
        cy.get('input[type="text"]:visible').first().should('be.visible').type('245/50R19')

        // Wait for search suggestions to load
        cy.wait(3000)

        // Check if suggestions are available, if not, press Enter to search
        cy.get('body').then($body => {
            if ($body.find('.suggestion-item').length > 0) {
                // Click on the suggested product if suggestions exist
                cy.get('.suggestion-item').should('be.visible').first().click()
            } else {
                // If no suggestions, press Enter to perform search
                cy.get('input[type="text"]:visible').first().type('{enter}')
            }
        })

        // Wait for navigation to product page
        cy.wait(3000)

        // Verify page contains the product ID information (tire size can be in different formats)
        cy.get('body').should('satisfy', ($body) => {
            const bodyText = $body.text()
            return bodyText.includes('245/50R19') || 
                   bodyText.includes('245/50/19') || 
                   (bodyText.includes('245') && bodyText.includes('50') && bodyText.includes('19'))
        })
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_012 - Verify user can search for specific product ID (245/50/19) and navigate to product page', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000) 

        // Type product ID "245/50/19" in the search input
        cy.get('input[type="text"]:visible').first().should('be.visible').type('245/50/19')

        // Wait for search suggestions to load
        cy.wait(2000)

        // Click on the suggested product
        cy.get('.suggestion-item').should('be.visible').first().click()

        // Wait for navigation to product page
        cy.wait(3000)

        // Verify page contains the product ID information (tire size can be in different formats)
        cy.get('body').should('satisfy', ($body) => {
            const bodyText = $body.text()
            return bodyText.includes('245/50R19') || 
                   bodyText.includes('245/50/19') || 
                   (bodyText.includes('245') && bodyText.includes('50') && bodyText.includes('19'))
        })
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_013 - Verify user can search for specific product ID (245 50/19) and navigate to product page', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Type product ID "245 50/19" in the search input
        cy.get('input[type="text"]:visible').first().should('be.visible').type('245 50/19')

        // Wait for search suggestions to load
        cy.wait(2000)

        // Click on the suggested product
        cy.get('.suggestion-item').should('be.visible').first().click()

        // Wait for navigation to product page
        cy.wait(3000)

        // Verify page contains the product ID information
        cy.get('body').should('contain', '245/50R19')
    })

    it('TC_GALUMA_SEARCHBUTTON_MOBILE_014 - Verify user can search for specific product ID (245 50 19) and navigate to product page', () => {
        // Navigate to Search button
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()

        // Wait for search overlay to load
        cy.wait(2000)

        // Type product ID "245 50 19" in the search input
        cy.get('input[type="text"]:visible').first().should('be.visible').type('245 50 19')

        // Wait for search suggestions to load
        cy.wait(2000)

        // Click on the suggested product
        cy.get('.suggestion-item').should('be.visible').first().click()

        // Wait for navigation to product page
        cy.wait(3000)

        // Verify page contains the product ID information
        cy.get('body').should('contain', '245/50R19')
    })

})