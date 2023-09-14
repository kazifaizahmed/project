class orange_loginpage{
element ={

  upperLogo: () => cy.get(`img[alt='company-branding']`),
  middleRightLogo: () => cy.get(`div[class='orangehrm-login-logo'] img[alt='orangehrm-logo']`),
  loginBtn: () => cy.get(`button[type='submit']`),
  usernameLabel: () => cy.xpath(`//label[normalize-space()='Username']`),
  usernameIcon: () => cy.get(`.oxd-icon.bi-person.oxd-input-group__label-icon`),
  passwordLabel: () => cy.xpath(`//label[normalize-space()='Password']`),
  passwordIcon:() => cy.get(`.oxd-icon.bi-key.oxd-input-group__label-icon`), 
  usernameInput: () => cy.get(`input[placeholder='Username']`),
  passwordInput: () => cy.get(`input[placeholder='Password']`),
  forogtpasswordLink: () => cy.get(`.oxd-text.oxd-text--p.orangehrm-login-forgot-header`),
  cancelBtn: () => cy.get(`button[type='button']`),
  invalidCredentialsAlert: () => cy.get(`.oxd-text.oxd-text--p.oxd-alert-content-text`),
  
}

loginPageAssertions() {
  this.element.upperLogo().should('be.visible');
  this.element.middleRightLogo().should('exist');
  this.element.usernameLabel().should('be.visible');
  this.element.usernameIcon().should('be.visible');
  this.element.passwordLabel().should('be.visible');
  this.element.passwordIcon().should('be.visible');
}

loginWrongFunctionality() {
  this.loginPageAssertions();
  this.element.usernameInput().should('be.empty').clear().type("Admin2");
  this.element. passwordInput().should('be.visible').type("admin1234");
  this.element.loginBtn().should('not.be.disabled').click();
  this.element.invalidCredentialsAlert().should('have.text', 'Invalid credentials');
  this.element.forogtpasswordLink().should('be.visible').click();
  cy.wait(2000);
  this.element.cancelBtn().should('not.be.disabled').click();
 
  
 
 
 

}


loginFunctionality() {
  this.loginPageAssertions();
  this.element.usernameInput().should('be.empty').clear().type("Admin");
  this.element. passwordInput().should('be.visible').type("admin123");
  this.element.loginBtn().should('not.be.disabled').click();
}


}

module.exports = new orange_loginpage();









