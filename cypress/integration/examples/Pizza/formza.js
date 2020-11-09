describe ('Testing two pages on local server', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    //helpers to select elements:
    const pizzabtn = () => cy.get(`button[class="orderPizza"]`)
    const homebtn = () => cy.get(`button[class="homeButton"]`)
    //
    it('Visits a new page on local server from Pizza? button', () => {
        pizzabtn().click();
        cy.contains(/Build Your Own Pizza/i).should('exist');
        cy.url().should('include', 'pizza')
    }
    )
    it('Visits Home Page again', () => {
        homebtn().click();
        cy.url().should('not.include', 'pizza')
    })
})
describe ('Testing the pizza from inputs and submits', () => {

})