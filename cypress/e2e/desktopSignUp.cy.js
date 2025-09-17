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

  // Note!!!!!!
  // For successful execution of TC_USER_REGISTRATION_FORM_SUBMISSION_002 and TC_COMPANY_EMPTY_016, 
  // use unique email addresses in the registration form to avoid existing email errors. 

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

  // For successful execution of TC_USER_REGISTRATION_FORM_SUBMISSION_002, use unique email addresses in the registration form to avoid existing email errors. 
  it('TC_USER_REGISTRATION_FORM_SUBMISSION_002 - Verify successful user account creation with complete registration form including personal information, address details, credentials, and agreement acceptance', () => {
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

  it('TC_EXISTING_EMAIL_REGISTRATION_VALIDATION_003 - Verify that attempting to register with an existing email address triggers an appropriate error message.', () => {
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

    // Fill in Email address field with existing email
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

    // Wait for alert to appear
    cy.wait(2000)

    // Verify error alert display and content
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'User already exists, try another email or sign in')
  })

  it('TC_EMPTYFIELD_FNAME_004 - Verify error message for empty first name field', () => {
    // Login link is already clicked in beforeEach
    // Verify we're on the login page
    cy.get('#customer-email').should('be.visible')

    // Click 'Register' link
    cy.get('#register_button_user').should('be.visible').click()

    // Wait for popup to appear
    cy.wait(1000)

    // Verify 'New Account' popup is displayed
    cy.get('.black_stripe').should('be.visible')

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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed for empty first name field
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty first name field
    cy.get('#register-fname-input-error').should('be.visible').should('contain.text', 'This field is required.')
  })

  it('TC_EMPTYFIELD_LNAME_005 - Ensure an error message is displayed when submitting the registration form with an empty last name field.', () => {
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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed for empty first name field
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty last name field
    cy.get('#register-lname-input-error').should('be.visible').should('contain.text', 'This field is required.')
  })

  it('TC_EMPTYFIELD_STREET_006 - Validate that an error message appears when the registration form is submitted with an empty street address field', () => {
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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error alert display and content
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty street address field
    cy.get('#register-street-input-error').should('be.visible').should('contain.text', 'This field is required.')
  })

  it('TC_EMPTYFIELD_STATE_007 - Confirm that an error message is shown when the registration form is submitted with an empty state field.', () => {
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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error alert display and content
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty state field
    cy.get('#register-state-input-error').should('be.visible').should('contain.text', 'This field is required.')
  })

  it('TC_EMPTYFIELD_CITY_008 - Verify that an error message is displayed when the registration form is submitted with an empty city field.', () => {
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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed for empty first name field
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty city field
    cy.get('#register-city-input-error').should('be.visible').should('contain.text', 'This field is required.')
  })

  it('TC_EMPTYFIELD_ZIP_009 - Ensure an error message appears when the registration form is submitted with an empty zip code field.', () => {
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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed for empty first name field
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty zip code field
    cy.get('#register-zip-input-error').should('be.visible').should('contain.text', 'This field is required.')
  })

  it('TC_EMPTYFIELD_EMAIL_010 - Validate that an error message is triggered when the registration form is submitted with an empty email address field.', () => {
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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed for empty first name field
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty email address field
    cy.get('#register-email-input-error').should('be.visible').should('contain.text', 'This field is required.')
  })

  it('TC_EMPTYFIELD_PHONE_011 - Confirm that an error message is displayed when the registration form is submitted with an empty phone number field.', () => {
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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed for empty first name field
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty phone number field
    cy.get('#register-phone-input-error').should('be.visible').should('contain.text', 'This field is required.')
  })

  it('TC_EMPTYFIELD_PASSWORD_012 - Verify that an error message appears when the registration form is submitted with empty password fields.', () => {
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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed for empty first name field
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty password field 
    cy.get('#register-password-input-error').should('be.visible').should('contain.text', 'This field is required.')
  })

  it('TC_EMPTYFIELD_CONFIRM_PASSWORD_013 - Ensure an error message is shown when the registration form is submitted with an empty confirm password field.', () => {
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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed for empty first name field
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')

    // Close the alert
    cy.get('.close-alert > .fa').should('be.visible').click()

    // Check for error message for empty confirm password field
    cy.get('#register-confirm-password-input-error').should('be.visible').should('contain.text', 'Please enter the same value again.')
  })

  it('TC_INVALID_EMAIL_014 - Verify error message for invalid email format', () => {
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

    // Fill in Email address field in invalid format
    cy.get('#register-email-input').should('be.visible').click().type('email.example.com')

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

    // Check for error message for invalid email format
    cy.get('#register-email-input-error').should('be.visible').should('contain.text', 'Please enter a valid email address.')

    // Click on "Create Account" button
    cy.get('#create_acc_register').should('be.visible').click()

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed 
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
      .should('contain.text', 'please enter valid details')
  })

  it('TC_CHECKBOX_EMPTY_015 - Verify button disability when consent checkbox is not checked', () => {
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

    // Verify agreement text visibility and content
    cy.get('.form-check-label').should('be.visible')
      .should('contain.text', 'By checking this box, I consent by electronic signature to recieve messages from Galuma Tires &')
      .should('contain.text', 'Wheels')
      .should('contain.text', 'Check our')
      .should('contain.text', 'Privacy Policy & Terms and Conditions')

    // Verify that Create account button is disabled when the checkbox is empty
    cy.get('#create_acc_register').should('be.disabled')
  })

  // For successful execution of TC_COMPANY_EMPTY_016, use unique email addresses in the registration form to avoid existing email errors. 
  it('TC_COMPANY_EMPTY_016 - Verify registration with optional company name', () => {
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

    // Fill in Street address field
    cy.get('#register-street-input').should('be.visible').click().type('50/5 Siripa Road, 05')

    // Fill in State field
    cy.get('#register-state-input').should('be.visible').click().type('Colombo')

    // Fill in City field
    cy.get('#register-city-input').should('be.visible').click().type('Ja-ela')

    // Fill in Zip code field
    cy.get('#register-zip-input').should('be.visible').click().type('81300')

    // Fill in Email address field
    cy.get('#register-email-input').should('be.visible').click().type('kidepewe731@fanwn.com')

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

  it('TC_PLACEHOLDER_TEXT_017 - Verify placeholder text in input fields', () => {
    // Login link is already clicked in beforeEach
    // Verify we're on the login page
    cy.get('#customer-email').should('be.visible')

    // Click 'Register' link
    cy.get('#register_button_user').should('be.visible').click()

    // Wait for popup to appear
    cy.wait(1000)

    // Verify 'New Account' popup is displayed
    cy.get('.black_stripe').should('be.visible')

    // Check placeholder text in First name field
    cy.get('#register-fname-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in Last name field
    cy.get('#register-lname-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in Company name field
    cy.get('#register-company-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in Street address field
    cy.get('#register-street-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in State field
    cy.get('#register-state-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in City field
    cy.get('#register-city-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in Zip code field
    cy.get('#register-zip-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in Email address field
    cy.get('#register-email-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in Phone field
    cy.get('#register-phone-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in Password field
    cy.get('#register-password-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')

    // Check placeholder text in Confirm password field
    cy.get('#register-confirm-password-input')
      .should('have.attr', 'placeholder')
      .and('not.be.empty')
  })

  it('TC_ALL_EMPTY_FIELD_018 - Verify error message for all empty required fields', () => {
    // Login link is already clicked in beforeEach
    // Verify we're on the login page
    cy.get('#customer-email').should('be.visible')

    // Click 'Register' link
    cy.get('#register_button_user').should('be.visible').click()

    // Wait for popup to appear
    cy.wait(1000)

    // Verify 'New Account' popup is displayed
    cy.get('.black_stripe').should('be.visible')

    // Fill in Company name field
    cy.get('#register-company-input').should('be.visible').click().type('LONGWApps')

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

    // Wait for error message to appear
    cy.wait(2000)

    // Verify error message is displayed 
    cy.get('.alert').should('be.visible')
      .should('contain.text', 'Error!')
  })

  //This scenario is getting error. Needs to update redirection to Privacy Policy page
  it('TC_PRIVACY_POLICY_LINK_019 - Validate that clicking the Privacy Policy link in the New Account popup redirects to the correct Privacy Policy page.', () => {
    // Login link is already clicked in beforeEach
    // Verify we're on the login page
    cy.get('#customer-email').should('be.visible')

    // Click 'Register' link
    cy.get('#register_button_user').should('be.visible').click()

    // Wait for popup to appear
    cy.wait(1000)

    // Verify 'New Account' popup is displayed
    cy.get('.black_stripe').should('be.visible')

    // Click on "Privacy Policy" link
    cy.get('span > a').should('be.visible').click()

    // Wait for navigation
    cy.wait(2000)

    // Verify redirection to Privacy Policy page
    cy.url().should('eq', 'https://dev.galumatires.com/privacy-policy')
  })

  //This scenario is getting error. Needs to update redirection to Terms and Conditions page
  it('TC_TERMS_CONDITIONS_LINK_020 - Confirm that clicking the Terms and Conditions link in the New Account popup redirects to the correct Terms and Conditions page.', () => {
    // Login link is already clicked in beforeEach
    // Verify we're on the login page
    cy.get('#customer-email').should('be.visible')

    // Click 'Register' link
    cy.get('#register_button_user').should('be.visible').click()

    // Wait for popup to appear
    cy.wait(1000)

    // Verify 'New Account' popup is displayed
    cy.get('.black_stripe').should('be.visible')

    // Click on "Terms and Conditions" link
    cy.get('span > a').should('be.visible').click()

    // Wait for navigation
    cy.wait(2000)

    // Verify redirection to Terms and Conditions page
    cy.url().should('eq', 'https://dev.galumatires.com/sales-terms-and-condition')
  })
  
})