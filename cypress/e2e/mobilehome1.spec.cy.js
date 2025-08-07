describe('Galuma Mobile Home Page Tests1', () => {
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

    it('TC_GALUMA_MOBILE_HOME_001 - Verify successful navigation to the homepage', () => {
        cy.url().should('include', 'galumatires.com')
        cy.get('body').should('be.visible')
        cy.title().should('not.be.empty')
    })

    it('TC_SHOPTIRESBYSIZE_MOBILE_003 - Shop Tires by Size on Mobile Version', () => {
        // Navigate to "Shop Tires by Size" section
        cy.get('[data-id="size"]').click()
        
        // Wait for the popup to open and become visible
        cy.get('#popup-search-tires').should('be.visible')
        cy.wait(1000)
        
        // Verify we're in the search by size tab
        cy.get('#by-size-popup-home > :nth-child(2) > .heading > .active').should('be.visible')
        
        // Click to open width dropdown and select "225"
        cy.get('#tire-width-value-read-tires').click()
        cy.get('[data-value="225"] > .red_h').click()
        
        // Verify width selection is reflected
        cy.get('#tire-width-value-read-tires').should('contain', '225')
        
        // Click to open ratio dropdown and select "35"
        cy.get('#tire-ratio-value-read-tires').click()
        cy.get('[data-value="35"] > .red_h').click()
        
        // Verify ratio selection is reflected
        cy.get('#tire-ratio-value-read-tires').should('contain', '35')
        
        // Click to open diameter dropdown and select "20"
        cy.get('#tire-diameter-value-read-tires').click()
        cy.get('[data-value="20"] > .red_h').click()
        
        // Verify diameter selection is reflected
        cy.get('#tire-diameter-value-read-tires').should('contain', '20')
        
        // Click "Search Tires" button
        cy.get('#top-search-by-size-btn').click()
        
        // Wait for results to load
        cy.wait(3000)
        
        // Verify results display correctly matching 225/35/20 size
        cy.get('.rec-size-con').should('be.visible')
        cy.get('.rec-size-con').should('contain', '225/35R20')
    })

    it('TC_SEARCHBYSIZE_MOBILE_003 - Search Tires Size on Mobile Version', () => {
        // Navigate to "Search by Size" section
        cy.get('[data-id="size"]').click()
        
        // Wait for the popup to open and become visible
        cy.get('#popup-search-tires').should('be.visible')
        cy.wait(1000)
        
        // Verify we're in the search by size tab
        cy.get('#by-size-popup-home > :nth-child(2) > .heading > .active').should('be.visible')
        
        // Select "225" in Width
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > .card-width-select-popup > :nth-child(1) > [data-value="225"] > .red_h').click()
        
        // Verify width selection is reflected
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(1) > .form-group > .form-control-popup > #tire-width-value-read-tires').should('contain', '225')
        
        // Select "35" in Ratio
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > .card-ratio-select-popup > :nth-child(1) > [data-value="35"] > .red_h').click()
        
        // Verify ratio selection is reflected
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(2) > .form-group > .form-control-popup > #tire-ratio-value-read-tires').should('contain', '35')
        
        // Select "20" in Diameter
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup > .card-diameter-select-popup > :nth-child(1) > [data-value="20"] > .red_h').click()
        
        // Verify diameter selection is reflected
        cy.get('#by-size-popup-home > :nth-child(2) > .thick-form > .active > .popup-dimentions-home > :nth-child(3) > .form-group > .form-control-popup > #tire-diameter-value-read-tires').should('contain', '20')
        
        // Click "Search Tires" button
        cy.get('#top-search-by-size-btn').click()
        
        // Wait for results to load
        cy.wait(3000)
        
        // Verify results display correctly matching 225/35/20 size
        cy.get('.rec-size-con').should('be.visible')
        cy.get('.rec-size-con').should('contain', '225/35R20')
    })

})