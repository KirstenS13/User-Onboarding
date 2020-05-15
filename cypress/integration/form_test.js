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
    //Test that will leave the email blank and test for error message
    it('Tests for form validation on the email input', () => {
        cy
            .get('[data-cy="name"]')
            .type('John Smith')
            .get('[data-cy="password"]')
            .type('abc123')
            .get('[data-cy="email"]')
            .type('jsmith@gmail.com')
            .get('[data-cy="submit"]')
            .click()
        cy.contains('Please accept Terms & Conditions')
    })
})