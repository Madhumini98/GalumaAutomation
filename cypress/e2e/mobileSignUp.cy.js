describe('Galuma Create Account Tests for Mobile', () => {
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

    // For successful execution of TC_USER_REGISTRATION_FORM_SUBMISSION_002 and TC_COMPANY_EMPTY_016, 
    // use unique email addresses in the registration form to avoid existing email errors. 

    it('TC_MOBILE_USER_REGISTRATION_NAVIGATION_001 - Verify successful navigation to user registration through Login link and Register option displaying New Account popup correctly', () => {
        // 1. Navigate to the homepage (already done in beforeEach)
        cy.url().should('include', 'galumatires.com')

        // 2. Click Profile icon
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Verify navigation to sign-in page
        cy.url().should('include', '/sign-in')

        // 3. Click 'Register' link
        cy.get('#register_button_user')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // 4. It should display the 'New Account' popup
        cy.get('.black_stripe')
            .should('be.visible')
    })
})