describe('Galuma Desktop Tires By Brand Page Tests', () => {
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

    it.only('TC_GALUMA_TBB_BRANDS_002 - Shop Tires by Brand on Desktop Version', () => {
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
})