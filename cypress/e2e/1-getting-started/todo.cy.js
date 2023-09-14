describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('https://www.automationexercise.com/login')
  })

  it('new user sign up', () => {
    cy.get(`a[href='/login']`).click();
    cy.get(`[data-qa='signup-name']`).type(`Udenix`);
    cy.get(`input[data-qa='signup-email']`).type(`sadnan@gmail.com`);
    cy.get(`button[data-qa='signup-button']`).click();
    cy.get(`label[for='id_gender2']`).click();
    cy.get(`#password`).type(`sadnan`);
    cy.get(`label[for='newsletter']`).click();
    cy.get(`#first_name`).click();
    cy.get(`#first_name`).type(`kazi`);
    cy.get(`#last_name`).click();
    cy.get(`#last_name`).type(`Ahmed`);
    cy.get(`#company`).click();
    cy.get(`#company`).type(`Udenix`);
    cy.get(`#address1`).click();
    cy.get(`#address1`).type(`Dhanmondi`);
    cy.get(`#address2`).click();
    cy.get(`#address2`).type(`Dhanmondi dhaka`);
    cy.get(`#state`).click();
    cy.get(`#state`).type(`DHAKA`);
    cy.get(`#city`).click();
    cy.get(`#city`).type(`OLD DHAKA`);
    cy.get(`#zipcode`).click();
    cy.get(`#zipcode`).type(`0095`);
    cy.get(`#mobile_number`).click();
    cy.get(`#mobile_number`).type(`01971825788`);
    cy.get(`button[data-qa='create-account']`).click();








      
    })

})
require('cypress-xpath') 