describe('Galuma Mobile Sign-In Page Tests', () => {
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

    it('TC_GALUMA_MOBILE_SIGNIN_001 - Verify successful navigation to the login page', () => {
        // Navigate to the homepage (already done in beforeEach)
        // Verify homepage is loaded
        cy.url().should('include', 'galumatires.com')

        // Click on profile icon
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Navigate to - https://dev.galumatires.com/sign-in page
        cy.url().should('include', '/sign-in')

        // Email section should be visible
        cy.get('#customer-email').should('be.visible')
        
        // Password section should be visible
        cy.get('#customer-password').should('be.visible')
        
        // Signin button should be visible
        cy.get('#sign-in').should('be.visible')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_002 - Verify user able to successful sign in with valid credentials', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Enter valid credentials
        cy.get('#customer-email').type('madhumini@longwapps.com')
        cy.get('#customer-password').type('Test.1234')

        // Click sign in button
        cy.get('#sign-in').click()
        cy.wait(2000)
    })

    it('TC_GALUMA_MOBILE_SIGNIN_003 - Verify error message for invalid password', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Enter valid email but invalid password
        cy.get('#customer-email').type('madhumini@longwapps.com')
        cy.get('#customer-password').type('Test.124')

        // Click sign in button
        cy.get('#sign-in').click()
        cy.wait(2000)

        // Verify error message for invalid credentials
        cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_004 - Verify error message for invalid email', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Enter valid password but invalid email
        cy.get('#customer-email').type('madhumini98@longwapps.com')
        cy.get('#customer-password').type('Test.123')

        // Click sign in button
        cy.get('#sign-in').click()
        cy.wait(2000)

        // Verify error message for invalid credentials
        cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_005 - Verify error message for empty email field', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Leave email field empty and enter valid password
        cy.get('#customer-password').type('Test.123')

        // Click sign in button
        cy.get('#sign-in').click()
        cy.wait(2000)

        // Verify error message for empty email field
        cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_006 - Verify error message for empty password field', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Enter valid email but leave password field empty
        cy.get('#customer-email').type('madhumini@longwapps.com')

        // Click sign in button
        cy.get('#sign-in').click()
        cy.wait(2000)

        // Verify error message for empty password field
        cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_007 - Verify error message for empty email and password fields', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Leave both email and password fields empty

        // Click sign in button
        cy.get('#sign-in').click()
        cy.wait(2000)

        // Verify error message for empty fields
        cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_008 - Verify error message for invalid email and invalid password', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Enter invalid email and password
        cy.get('#customer-email').type('madhumini98@longwapps.com')
        cy.get('#customer-password').type('Test.124')

        // Click sign in button
        cy.get('#sign-in').click()
        cy.wait(2000)

        // Verify error message for invalid credentials
        cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_009 - Verify user can able to reset the password using forget password', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Click on the "Forgot your password?" link
        cy.get('.forgot-password-txt').should('be.visible').click()
        cy.wait(2000)

        // Verify 'Forgot your password?' pop up is displayed
        cy.get('#forgot-passowrd-modal > .modal-content').should('be.visible')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_013 - Verify placeholder text in input fields', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Check placeholder text in email field
        cy.get('#customer-email').type('madhumini98@longwapps.com')
            .should('have.attr', 'placeholder')
            .and('not.be.empty')

        // Check placeholder text in password field  
        cy.get('#customer-password').type('Test.1234')
            .should('have.attr', 'placeholder')
            .and('not.be.empty')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_014 - Verify case sensitivity of the password field', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Enter valid email and password with incorrect case
        cy.get('#customer-email').type('madhumini@longwapps.com')
        cy.get('#customer-password').type('TEST.1234')

        // Click sign in button
        cy.get('#sign-in').click()
        cy.wait(2000)

        // Verify error message for case-sensitive password
        cy.get('.alert-sub-title', { timeout: 10000 }).should('be.visible')
    })

    it('TC_GALUMA_MOBILE_SIGNIN_017 - Verify that the "Register" link redirects to the registration popup', () => {
        // Click on profile icon to navigate to sign-in page
        cy.get('.navbar_line_1 > .cart_icon_section > .cart_container > .profile_icon_section > .profile_icon_sign_in_mobile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        // Locate and click on the "Register" link
        cy.get('#register_button_user').should('be.visible').click()
        cy.wait(2000)

        // Verify that the registration popup is displayed
        // Look for registration-related content that should appear after clicking the register button
        cy.get('body').then(($body) => {
            const bodyText = $body.text()
            expect(bodyText).to.satisfy((text) =>
                text.includes('Register') ||
                text.includes('Sign Up') ||
                text.includes('Create Account') ||
                text.includes('Registration')
            )
        })
    })

})