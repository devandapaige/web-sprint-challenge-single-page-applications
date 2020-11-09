    //helpers to select elements:
    const pizzabtn = () => cy.get(`button[class="orderPizza"]`)
    const homebtn = () => cy.get(`button[class="homeButton"]`)
describe ('Testing two pages on local server', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
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
//Form Inputs:
const name = cy.get('input[name="name"]')
const size = cy.get('input[name="pizzaSize"]')
const sauce = cy.get('input[name="sauce"]')
const onions = cy.get('input[name="onions"]')
const basil = cy.get('input[name="basil"]')
const instructions = cy.get('input[name="instructions"]')
const submitZaBtn = cy.get(`button[class="addToOrder"]`)
describe ('Testing the pizza from inputs and submits', () => {
   cy.visit('http://localhost:3000')
    pizzabtn().click();
    name().should('exisit');
    name().should('have.value', '')
    .type('Amanda Nelson').should('have.value', 'Amanda Nelson');
    size().select("medium");
    sauce().select("GarlicRanch");
    onions().select("onions");
    basil().select("basil");
    instructions().type('None at this time, thanks!').should('have.value', 'None at this time, thanks!')
    submitZaBtn().click();
    name().should('have.value', '')
    instructions().should('have.value', '')
})