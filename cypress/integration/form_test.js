describe('Testing the form inputs', () => {
    it('Tests the Name input', () => {
        cy
            .visit('http://localhost:3000')
            .get('[data-cy="name"]')
            .type('Kirsten Symanzik')
            .should('have.value', 'Kirsten Symanzik');
    })

    it('Tests the Email input', () => {
        cy
            .get('[data-cy="email"]')
            .type('ksymanzik@gmail.com')
            .should('have.value', 'ksymanzik@gmail.com');
    })

    it('Tests the Password input', () => {
        cy
            .get('[data-cy="password"]')
            .type('abc123')
            .should('have.value', 'abc123');
    })
})