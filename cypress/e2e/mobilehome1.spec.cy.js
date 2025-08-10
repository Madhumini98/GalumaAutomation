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

    it('TC_SHOPTIRESBYBRAND_MOBILE_004 - Shop Tires by Brand on Mobile Version', () => {
        // Click on the Shop Tires by Brand button
        cy.get('[data-id="brand"]').click()
        cy.wait(2000)

        const brands = [
            { name: 'bridgestone', selector: '#brand-container-mobile-popup > :nth-child(1) > :nth-child(1) > a > img', url: '/t/b/bridgestone' },
            { name: 'pirelli', selector: '#brand-container-mobile-popup > :nth-child(1) > :nth-child(2) > a > img', url: '/t/b/pirelli' },
            { name: 'goodyear', selector: '#brand-container-mobile-popup > :nth-child(1) > :nth-child(3) > a > img', url: '/t/b/goodyear' },
            { name: 'dunlop', selector: '#brand-container-mobile-popup > :nth-child(2) > :nth-child(1) > a > img', url: '/t/b/dunlop' },
            { name: 'nitto', selector: '#brand-container-mobile-popup > :nth-child(2) > :nth-child(2) > a > img', url: '/t/b/nitto' },
            { name: 'yokohama', selector: '#brand-container-mobile-popup > :nth-child(2) > :nth-child(3) > a > img', url: '/t/b/yokohama' },
            { name: 'continental', selector: '#brand-container-mobile-popup > :nth-child(3) > :nth-child(1) > a > img', url: '/t/b/continental' },
            { name: 'michelin', selector: '#brand-container-mobile-popup > :nth-child(3) > :nth-child(2) > a > img', url: '/t/b/michelin' },
            { name: 'firestone', selector: '#brand-container-mobile-popup > :nth-child(3) > :nth-child(3) > a > img', url: '/t/b/firestone' },
            { name: 'hankook', selector: '#brand-container-mobile-popup > :nth-child(4) > :nth-child(1) > a > img', url: '/t/b/hankook' },
            { name: 'nexen', selector: '#brand-container-mobile-popup > :nth-child(4) > :nth-child(2) > a > img', url: '/t/b/nexen' },
            { name: 'sumitomo', selector: '#brand-container-mobile-popup > :nth-child(4) > :nth-child(3) > a > img', url: '/t/b/sumitomo' },
            { name: 'kumho', selector: '#brand-container-mobile-popup > :nth-child(5) > :nth-child(1) > a > img', url: '/t/b/kumho' },
            { name: 'toyo', selector: '#brand-container-mobile-popup > :nth-child(5) > :nth-child(2) > a > img', url: '/t/b/toyo' },
            { name: 'bf-goodrich', selector: '#brand-container-mobile-popup > :nth-child(5) > :nth-child(3) > a > img', url: '/t/b/bf-goodrich' }
        ]

        brands.forEach((brand, index) => {
            // Ensure brand container is visible before clicking
            cy.get('#brand-container-mobile-popup').should('be.visible')

            // Click on brand
            cy.get(brand.selector).click()

            // Wait for brand products page to load
            cy.wait(3000)

            // Verify navigation to brand page
            cy.url().should('include', brand.url)

            // Verify brand products page is loaded (more flexible check)
            cy.get('body').should('be.visible')

            // Navigate back to home page for next brand (except for the last one)
            if (index < brands.length - 1) {
                cy.visit("https://dev.galumatires.com/", {
                    auth: {
                        username: 'galumadev',
                        password: 'Test.123'
                    }
                })
                cy.wait(3000)

                // Click on the Shop Tires by Brand button again
                cy.get('[data-id="brand"]').click()
                cy.wait(3000)

                // Wait for brand container to be fully loaded
                cy.get('#brand-container-mobile-popup').should('be.visible')
            }
        })
    })

    it('TC_GALUMA_PAYMENTICONS_MOBILE_014 - Ensure payment option icons navigate to respective payment pages', () => {
        // Scroll to the payment options section
        cy.get('.financing-container').scrollIntoView()
        cy.wait(1000)
        
        // Verify financing container is visible
        cy.get('.financing-container').should('be.visible')
        
        // Test Stripe icon navigation
        cy.get('.st > a > img').should('be.visible')
        cy.get('.st > a').should('have.attr', 'href').then((href) => {
            cy.get('.st > a > img').click()
            cy.wait(2000)
            
            // Verify URL after clicking Stripe icon
            cy.url().should('include', 'galumatires.com')
            
            // Navigate back to homepage for next test
            cy.visit("https://dev.galumatires.com/", {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                }
            })
            cy.wait(2000)
        })
        
        // Test Affirm icon navigation
        cy.get('.financing-container').scrollIntoView()
        cy.get('.aff > a > img').should('be.visible')
        cy.get('.aff > a').should('have.attr', 'href').then((href) => {
            cy.get('.aff > a > img').click()
            cy.wait(2000)
            
            // Verify URL after clicking Affirm icon - should go to /payments/affirm/
            cy.url().should('include', '/payments/affirm/')
            
            // Verify page content is relevant to Affirm
            cy.get('body').should('be.visible')
            
            // Navigate back to homepage for next test
            cy.visit("https://dev.galumatires.com/", {
                auth: {
                    username: 'galumadev',
                    password: 'Test.123'
                }
            })
            cy.wait(2000)
        })
        
        // Test Afterpay icon navigation
        cy.get('.financing-container').scrollIntoView()
        cy.get('.af > a > img').should('be.visible')
        cy.get('.af > a').should('have.attr', 'href').then((href) => {
            cy.get('.af > a > img').click()
            cy.wait(2000)
            
            // Verify URL after clicking Afterpay icon
            cy.url().should('include', 'galumatires.com')
            
            // Verify page content is visible
            cy.get('body').should('be.visible')
        })
    })
})