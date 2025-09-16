describe('Galuma Create Account Tests for Desktop', () => {
  beforeEach(() => {
    // Common setup for all test cases
    cy.viewport(1475, 750)
    cy.visit("https://dev.galumatires.com/", {
      auth: {
        username: 'galumadev',
        password: 'Test.123'
      }
    })
    cy.contains('Login').should('be.visible').click({ force: true })
    cy.wait(3000)
  })

  it('TC_USER_REGISTRATION_NAVIGATION_001 - Verify successful navigation to user registration through Login link and Register option displaying New Account popup correctly', () => {
    // Login link is already clicked in beforeEach
    // Verify we're on the login page
    cy.get('#customer-email').should('be.visible')

    // Click 'Register' link
    cy.get('#register_button_user').should('be.visible').click()

    // Wait for popup to appear
    cy.wait(1000)

    // Verify 'New Account' popup is displayed
    cy.get('.black_stripe').should('be.visible')
  })

  it.only('TC_USER_REGISTRATION_FORM_SUBMISSION_002 - Verify successful user account creation with complete registration form including personal information, address details, credentials, and agreement acceptance', () => {
    // Login link is already clicked in beforeEach
    // Verify we're on the login page
    cy.get('#customer-email').should('be.visible')

    // Click 'Register' link
    cy.get('#register_button_user').should('be.visible').click()

    // Wait for popup to appear
    cy.wait(1000)

    // Verify 'New Account' popup is displayed
    cy.get('.black_stripe').should('be.visible')

    // Fill in First name field
    cy.get('#register-fname-input').should('be.visible').click().type('Madhumini')

    // Fill in Last name field
    cy.get('#register-lname-input').should('be.visible').click().type('Kodithuwakku')

    // Fill in Company name field
    cy.get('#register-company-input').should('be.visible').click().type('LONGWApps')

    // Fill in Street address field
    cy.get('#register-street-input').should('be.visible').click().type('50/5 Siripa Road, 05')

    // Fill in State field
    cy.get('#register-state-input').should('be.visible').click().type('Colombo')

    // Fill in City field
    cy.get('#register-city-input').should('be.visible').click().type('Ja-ela')

    // Fill in Zip code field
    cy.get('#register-zip-input').should('be.visible').click().type('81300')

    // Fill in Email address field
    cy.get('#register-email-input').should('be.visible').click().type('kidepew731@fanwn.com')

    // Fill in Phone field
    cy.get('#register-phone-input').should('be.visible').click().type('+94702856789')

    // Fill in Password field
    cy.get('#register-password-input').should('be.visible').click().type('Test.123')

    // Fill in Confirm password field
    cy.get('#register-confirm-password-input').should('be.visible').click().type('Test.123')

    // Click on checkbox to accept registration agreement
    cy.get('#check-register-agreement').should('be.visible').click()

    // Verify agreement text visibility and content
    cy.get('.form-check-label').should('be.visible')
      .should('contain.text', 'By checking this box, I consent by electronic signature to recieve messages from Galuma Tires &')
      .should('contain.text', 'Wheels')
      .should('contain.text', 'Check our')
      .should('contain.text', 'Privacy Policy & Terms and Conditions')

    // Click on "Create Account" button
    cy.get('#create_acc_register').should('be.visible').click()

    // Wait for welcome popup to appear
    cy.wait(2000)

    // Verify welcome popup display
    cy.get('.img_container').should('be.visible')
  })

})