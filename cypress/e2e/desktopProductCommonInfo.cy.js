describe('Galuma Desktop Product Common Information Tests', () => {
    beforeEach(() => {
        // Handle uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

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

    it('TC_PAYMENT_OPTIONS_DISPLAY_001 - Verify payment options section displays correctly with supported payment methods including digital wallets and major credit card providers', () => {
        // 1. Navigate to home page (already done in beforeEach)
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Scroll to Qty of tires section
        cy.get('.box.qty > .qty').scrollIntoView()
        cy.wait(1000)

        // 5. Select 1
        cy.get('.d-flex > :nth-child(1) > .btn').should('be.visible').click()
        cy.wait(1000)

        // 6. Select the 2nd random product from the list. Click on the overlay 'View Product' button
        cy.get('#tire-products-container').should('be.visible')
        cy.get('#tire-products-container').within(() => {
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').should('have.length.at.least', 2)
            // Hover over the 2nd product to reveal the overlay button
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
            cy.wait(500) // Wait for overlay to appear
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
                cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
            })
        })
        cy.wait(3000)

        // 7. Scroll to payment options bar
        cy.get('.payment_option').scrollIntoView()
        cy.wait(1000)

        // 8. Check visibility of payment options elements

        // 'Also available with' text visibility
        cy.get('.payment_option > :nth-child(1) > .sec-heading').should('be.visible')

        // 'Stripe' icon
        cy.get('.payment_option > :nth-child(2) > .img-fluid').should('be.visible')

        // 'Amazon pay' icon
        cy.get('.payment_option > :nth-child(3) > .img-fluid').should('be.visible')

        // 'iPay' icon
        cy.get('.payment_option > :nth-child(4) > .img-fluid').should('be.visible')

        // 'Master card' icon
        cy.get('.payment_option > :nth-child(6) > .img-fluid').should('be.visible')

        // 'Visa' icon
        cy.get('.payment_option > :nth-child(7) > .img-fluid').should('be.visible')
    })

    it('TC_DELIVERY_WARRANTY_INFO_002 - Verify delivery and warranty section displays comprehensive service information including inspection, shipping, email notifications, and guarantee details with corresponding icons', () => {
        // 1. Navigate to home page (already done in beforeEach)
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Scroll to Qty of tires section
        cy.get('.box.qty > .qty').scrollIntoView()
        cy.wait(1000)

        // 5. Select 1
        cy.get('.d-flex > :nth-child(1) > .btn').should('be.visible').click()
        cy.wait(1000)

        // 6. Select the 2nd random product from the list. Click on the overlay 'View Product' button
        cy.get('#tire-products-container').should('be.visible')
        cy.get('#tire-products-container').within(() => {
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').should('have.length.at.least', 2)
            // Hover over the 2nd product to reveal the overlay button
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
            cy.wait(500) // Wait for overlay to appear
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
                cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
            })
        })
        cy.wait(3000)

        // 7. Scroll to Delivery & Warranty section
        cy.get('.container > h5').scrollIntoView()
        cy.wait(1000)

        // 8. Check Inspection section
        cy.get('.magnify > p > strong').should('be.visible')
        cy.get('.magnify > p').should('contain.text', 'Each tire is inspect')
        cy.get('.magnify > p').should('contain.text', 'before publish')
        cy.get('.magnify > p').should('contain.text', 'before shipment')
        cy.get('.magnify > .img-holder > .img-responsive').should('be.visible')

        // 9. Check Shipping section
        cy.get('.lorry > p > strong').should('be.visible')
        cy.get('.lorry > p').should('contain.text', 'FedEx picks up your order')
        cy.get('.lorry > p').should('contain.text', 'same day shipping')
        cy.get('.lorry > p').should('contain.text', '4:30 PM ET')
        cy.get('.lorry > .img-holder > .img-responsive').should('be.visible')

        // 10. Check Email section
        cy.get('.envelope > p > strong').should('be.visible')
        cy.get('.envelope > p').should('contain.text', 'You recieve an e-mail')
        cy.get('.envelope > p').should('contain.text', 'order details')
        cy.get('.envelope > p').should('contain.text', 'traking information')
        cy.get('.envelope > .img-holder > .img-responsive').should('be.visible')

        // 11. Check Guarantee section
        cy.get('.shield > p > strong').should('be.visible')
        cy.get('.shield > p').should('contain.text', '1 year moneyback guarantee')
        cy.get('.shield > p').should('contain.text', 'tiresuntil they are')
        cy.get('.shield > .img-holder > .img-responsive').should('be.visible')
    })

    it('TC_WARRANTY_DISCLAIMER_NOTIFICATION_003 - Verify manufacturer warranty disclaimer displays correctly with warning text and icon for non-authorized dealer products', () => {
        // 1. Navigate to home page (already done in beforeEach)
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Scroll to Qty of tires section
        cy.get('.box.qty > .qty').scrollIntoView()
        cy.wait(1000)

        // 5. Select 1
        cy.get('.d-flex > :nth-child(1) > .btn').should('be.visible').click()
        cy.wait(1000)

        // 6. Select the 2nd random product from the list. Click on the overlay 'View Product' button
        cy.get('#tire-products-container').should('be.visible')
        cy.get('#tire-products-container').within(() => {
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').should('have.length.at.least', 2)
            // Hover over the 2nd product to reveal the overlay button
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
            cy.wait(500) // Wait for overlay to appear
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
                cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
            })
        })
        cy.wait(3000)

        // 7. Scroll to 'Galuma Tires is not an authorized Goodyear dealer.' notification section
        cy.get('.yellow-strap > .yellow-inside').scrollIntoView()
        cy.wait(1000)

        // 8. Check the text
        cy.get('.yellow-strap > .yellow-inside').should('contain.text', 'Galuma Tires is not an authorized')
        cy.get('.yellow-strap > .yellow-inside').should('contain.text', 'dealer')
        cy.get('.yellow-strap > .yellow-inside').should('contain.text', 'The manufacturer warranty does not apply')

        // 9. Check the icon
        cy.get('.yellow-strap > .yellow-inside > .img-responsive').should('be.visible')
    })

    it('TC_QUALITY_ASSURANCE_STEPS_004 - Verify three-step quality assurance process displays correctly with visual inspection, air pressure test, and leak detection procedures including step titles and corresponding images', () => {
        // 1. Navigate to home page (already done in beforeEach)
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Scroll to Qty of tires section
        cy.get('.box.qty > .qty').scrollIntoView()
        cy.wait(1000)

        // 5. Select 1
        cy.get('.d-flex > :nth-child(1) > .btn').should('be.visible').click()
        cy.wait(1000)

        // 6. Select the 2nd random product from the list. Click on the overlay 'View Product' button
        cy.get('#tire-products-container').should('be.visible')
        cy.get('#tire-products-container').within(() => {
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').should('have.length.at.least', 2)
            // Hover over the 2nd product to reveal the overlay button
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
            cy.wait(500) // Wait for overlay to appear
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
                cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
            })
        })
        cy.wait(3000)

        // 7. Scroll to 'Three Steps To Assure Perfect' section
        cy.get('.col-12 > .sec-heading > strong').scrollIntoView()
        cy.wait(1000)

        // 8. Verify text
        cy.get('.col-12 > .sec-heading > strong').should('contain.text', 'Three Steps To Assure Perfect')
        cy.get('.col-12 > .sec-heading > span').should('contain.text', 'quality tires')

        // 9. Verify steps
        // Step 1: Visual inspection
        cy.get(':nth-child(1) > .step > h4').should('contain.text', 'Visual inspection')
        cy.get(':nth-child(1) > .step > .img-fluid').should('be.visible')

        // Step 2: Air pressure test
        cy.get(':nth-child(2) > .step > h4').should('contain.text', 'Air pressure test')
        cy.get(':nth-child(2) > .step > .img-fluid').should('be.visible')

        // Step 3: Leak detection
        cy.get(':nth-child(3) > .step > h4').should('contain.text', 'Leak detection on tire')
        cy.get(':nth-child(3) > .step > h4').should('contain.text', 'by dunking in water')
        cy.get(':nth-child(3) > .step > .img-fluid').should('be.visible')

        // 10. Check the content visibility and text
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('be.visible')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'We inspect our tires visually')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'air pressure test under 60 psi')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'dunked into water for leak')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'detection')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'three stages of inspection')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'buying a USED tire')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'no sidewall repairs and no plugs')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'Professional repairs are safe to drive on')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'spray painted with a white color')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'We do not use stock or fake photos')
        cy.get('.single_product_page_web > .paragraph-product-details > .container > p').should('contain.text', 'high quality tires to our costumers')
    })

    it('TC_SHIPPING_INFORMATION_DETAILS_005 - Verify shipping information section displays complete delivery timeline details, warehouse locations, and redirects to shipping policy page via More Info button', () => {
        // 1. Navigate to home page (already done in beforeEach)
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Scroll to Qty of tires section
        cy.get('.box.qty > .qty').scrollIntoView()
        cy.wait(1000)

        // 5. Select 1
        cy.get('.d-flex > :nth-child(1) > .btn').should('be.visible').click()
        cy.wait(1000)

        // 6. Select the 2nd random product from the list. Click on the overlay 'View Product' button
        cy.get('#tire-products-container').should('be.visible')
        cy.get('#tire-products-container').within(() => {
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').should('have.length.at.least', 2)
            // Hover over the 2nd product to reveal the overlay button
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
            cy.wait(500) // Wait for overlay to appear
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
                cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
            })
        })
        cy.wait(3000)

        // 7. Scroll to 'Shipping information' section
        cy.get('.single_product_page_web > .cover-productPage').scrollIntoView()
        cy.wait(1000)

        // 8. Verify text visibility and content in shipping information section
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > p').should('be.visible')
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > p').should('contain.text', 'before 1pm EST')
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > p').should('contain.text', 'same day')
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > p').should('contain.text', 'after 1pm EST')
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > p').should('contain.text', 'following business day')
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > p').should('contain.text', '48 contiguous states')
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > p').should('contain.text', '1-6 business')
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > p').should('contain.text', 'Pennsylvania, Texas, and Florida')
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > p').should('contain.text', 'smaller warehouses')

        // 9. Check image visibility
        cy.get('.single_product_page_web > .cover-productPage').should('be.visible')

        // 10. Check 'More info' button functionality and verify redirection to shipping page
        cy.get('.single_product_page_web > .cover-productPage > .container > .row > .col-md-5 > .btn').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/shipping')
        cy.url().should('eq', 'https://dev.galumatires.com/shipping')
    })

    it.only('TC_BENEFITS_SECTION_FUNCTIONALITY_006 - Verify Benefits of Shopping at Galuma Tires section displays all service cards with icons, content text, and functional Read More links directing to appropriate policy pages', () => {
        // 1. Navigate to home page (already done in beforeEach)
        cy.url().should('include', 'galumatires.com')

        // 2. Click 'Shop Products'
        cy.get('#shopProducts > .nav-link').should('be.visible').click()
        cy.wait(2000)

        // 3. Click 'Browse All Tires'
        cy.get('.header-section-details > [href="/t"]').should('be.visible').click()
        cy.wait(3000)

        // 4. Scroll to Qty of tires section
        cy.get('.box.qty > .qty').scrollIntoView()
        cy.wait(1000)

        // 5. Select 1
        cy.get('.d-flex > :nth-child(1) > .btn').should('be.visible').click()
        cy.wait(1000)

        // 6. Select the 2nd random product from the list. Click on the overlay 'View Product' button
        cy.get('#tire-products-container').should('be.visible')
        cy.get('#tire-products-container').within(() => {
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').should('have.length.at.least', 2)
            // Hover over the 2nd product to reveal the overlay button
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).trigger('mouseover')
            cy.wait(500) // Wait for overlay to appear
            cy.get('div[class*="product"], div[class*="tire"], .product, .tire').eq(1).within(() => {
                cy.get('button, a').contains(/View Product|View Details|View|Quick View/).click({ force: true })
            })
        })
        cy.wait(3000)

        // 7. Scroll to Benefits of Shopping at Galuma Tires & Wheels section
        cy.get('.single_product_page_web > .benifits-productPage > .container').scrollIntoView()
        cy.wait(1000)

        // 8. Check "FREE AND FAST SHIPPING" box
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card > .card-body').should('be.visible')

        // Check icon visibility
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card > .card-body > .img-fluid').should('be.visible')

        // Check text visibility
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card > .card-body > .card-text').should('be.visible')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card > .card-body > .card-text').should('contain.text', 'Free and fast shipping')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card > .card-body > .card-text').should('contain.text', '4:30 pm (ET Time)')

        // Click on "Read more" button and verify redirection
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card > .card-body > .card-link').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/shipping')
        cy.go('back')
        cy.wait(2000)

        // Check "THE BEST INSTALLATION SERVICE" box
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card > .card-body').should('be.visible')

        // Check icon visibility
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card > .card-body > .img-fluid').should('be.visible')

        // Check text visibility
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card > .card-body > .card-text').should('be.visible')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card > .card-body > .card-text').should('contain.text', 'latest generation')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card > .card-body > .card-text').should('contain.text', 'machines')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card > .card-body > .card-text').should('contain.text', 'qualified personnel')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card > .card-body > .card-text').should('contain.text', 'installations')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card > .card-body > .card-text').should('contain.text', 'quality standards')

        // Click on "Read more" button and verify redirection
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card > .card-body > .card-link').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/services')
        cy.go('back')
        cy.wait(2000)

        // Check "CUSTOMER SERVICE" box
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > .card-container > .card > .card-body').should('be.visible')

        // Check icon visibility
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > .card-container > .card > .card-body > .img-fluid').should('be.visible')

        // Check text visibility
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > .card-container > .card > .card-body > .card-text').should('be.visible')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > .card-container > .card > .card-body > .card-text').should('contain.text', 'just call, chat or')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > .card-container > .card > .card-body > .card-text').should('contain.text', 'email')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > .card-container > .card > .card-body > .card-text').should('contain.text', 'help with any product')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > .card-container > .card > .card-body > .card-text').should('contain.text', 'questions')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > .card-container > .card > .card-body > .card-text').should('contain.text', 'technical issues')

        // Click on "Read more" button and verify redirection
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > .card-container > .card > .card-body > .card-link').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/help-n-advice')
        cy.go('back')
        cy.wait(2000)

        // Check "PERFECT FIT PROMISE" box
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > :nth-child(2) > .card > .card-body').should('be.visible')

        // Check icon visibility
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > :nth-child(2) > .card > .card-body > .img-fluid').should('be.visible')

        // Check text visibility
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > :nth-child(2) > .card > .card-body > .card-text').should('be.visible')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > :nth-child(2) > .card > .card-body > .card-text').should('contain.text', 'perfect fit is guaranteed')
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > :nth-child(2) > .card > .card-body > .card-text').should('contain.text', 'vehicle information')

        // Click on "Read more" button and verify redirection
        cy.get('.single_product_page_web > .benifits-productPage > .container > :nth-child(2) > :nth-child(2) > :nth-child(2) > .card > .card-body > .card-link').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/read-my-tires')
    })

})