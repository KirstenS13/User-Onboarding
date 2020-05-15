describe('Testing the form inputs and submit button', () => {
    //Test for the Name input
    it('Tests the Name input', () => {
        cy
            .visit('http://localhost:3000')
            .get('[data-cy="name"]')
            .type('Kirsten Smith')
            .should('have.value', 'Kirsten Smith');
    })

    //Test for the Email input
    it('Tests the Email input', () => {
        cy
            .get('[data-cy="email"]')
            .type('ksmith@gmail.com')
            .should('have.value', 'ksmith@gmail.com');
    })

    //Test for the Password input
    it('Tests the Password input', () => {
        cy
            .get('[data-cy="password"]')
            .type('abc123')
            .should('have.value', 'abc123');
    })

    //Test for the Terms & Conditions checkbox
    it('Tests the Terms & Conditions checkbox', () => {
        cy
            .get('[data-cy="terms"]')
            .check()
            .should('be.checked');
    })

    //Test for the Submit button
    it('Tests the Submit button', () => {
        cy
            .get('[data-cy="submit"]')
            .click()
            .get('[data-cy="response"]')
            .should('not.equal', []) 
    })
})

describe('Testing the form validation', () => {
    //visits the page before every test
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    //Test that will start typing then delete the name and test for an error message
    it('Tests for form validation on the name input', () => {
        cy
            .get('[data-cy="name"]')
            .type("J")
            .clear()
            .get('[data-cy="email"]')
            .type('John Smith')
            .get('[data-cy="password"]')
            .type('abc123')
            .get('[data-cy="terms"]')
            .check()
        cy.contains('Please provide your full name')
    })

    //Test that will start typing then delete the email and test for an error message
    it('Tests for form validation on the email input', () => {
        cy
            .get('[data-cy="name"]')
            .type('John Smith')
            .get('[data-cy="email"]')
            .type('j')
            .clear()
            .get('[data-cy="password"]')
            .type('abc123')
            .get('[data-cy="terms"]')
            .check()
        cy.contains('Please enter your email address')
    })

    //Test that will start typing then delete the password and test for an error message
    it('Tests for form validation on the password input', () => {
        cy
            .get('[data-cy="name"]')
            .type('John Smith')
            .get('[data-cy="email"]')
            .type('jsmith@gmail.com')
            .get('[data-cy="password"]')
            .type('a')
            .clear()
            .get('[data-cy="terms"]')
            .check()
        cy.contains('Please create a password')
    })
})