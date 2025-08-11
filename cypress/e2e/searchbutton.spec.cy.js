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

    it('TC_GALUMA_SEARCHHEADER_MOBILE_002 - Ensure search box displays appropriate results for valid queries', () => {
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .search_icon_mobile').should('be.visible').click()
        cy.get('input[type="text"]:visible').first().should('be.visible').type('Pirelli')
        cy.get('[href="https://dev.galumatires.com/t/b/pirelli"] > :nth-child(1) > b').should('be.visible').click()
        cy.url().should('include', 'pirelli')
        cy.get('body').should('contain', 'Pirelli')
    })

    it.only('TC_GALUMA_SEARCHBUTTON_MOBILE_004 - Verify user can search for product by size', () => {
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

})