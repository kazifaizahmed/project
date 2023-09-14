class automation_signexc{
element={

   homelogo: () => cy.get(`header[id='header'] li:nth-child(1) a:nth-child(1)`),
   signuploginlogo: () => cy.get(`a[href='/login']`),
   Newusersignup: () => cy.get(`div[class='signup-form'] h2`),
   NameInput: () => cy.get(`input[placeholder='Name']`),
   EmailAdress: () => cy.get(`input[data-qa='signup-email']`),
   SignUp: () => cy.xpath(`//button[normalize-space()='Signup']`),
   Title: () => cy.get(`div[class='login-form'] form`),
   PasswordInput: () => cy.xpath(`//input[@id='password']`),
   Date:() => cy.xpath(`//select[@id='days']`),
   Month:() => cy.get(`#months`),
   Year:() => cy.xpath(`//select[@id='years']`),
   Password:() => cy.xpath(`//input[@id='password']`),
   selector:() => cy.get(`label[for='newsletter']`),
   Gender:() => cy.get(`#uniform-id_gender1`),
   Firstname:() => cy.get(`#first_name`),
   Lastname:() => cy.get(`#last_name`),
   Companyname:() => cy.get(`#company`),
   ADRESS:() => cy.get(`#address1`),
   COUNTRY:() => cy.get(`#country`),
   Zipcode:() => cy.get(`#zipcode`),
   MobileNum:() => cy.get(`#mobile_number`),
   STATE:() => cy.get(`#state`),
   CITY:() => cy.get(`#city`),
   ADRESS2:() => cy.get(`#address2`),
   //CreateAccount:() => cy.get(`button[data-qa='create-account']`),
}


homeAssertationspage(){
this.element.homelogo().should('be.visible');
this.element.signuploginlogo().should('be.visible').click();
this.element.Newusersignup().should('be.visible');
this.element. NameInput().should('be.empty').clear().type("zayan");
this.element.EmailAdress ().should('be.empty').clear().type("zayan@gmail.com");
this.element. SignUp().should('be.visible').click();
this.element.Title().should('be.visible');
this.element. PasswordInput().should('be.empty').clear().type("zayan");
this.element. Date().select(["2"]);
this.element. Month().select(["8"]);
this.element. Year().select(["2000"]);
this.element.Password ().should('be.empty').clear().type("zayan");
this.element.selector().should('be.visible').click();
this.element.Gender().should('be.visible').click();
this.element. Firstname().should('be.visible').type("KAZI");
this.element. Lastname().should('be.visible').type("AHMED");
this.element.Companyname ().should('be.visible').type("NUMEDIC");
this.element.ADRESS ().should('be.visible').type("DHANMONDI");
this.element. COUNTRY().select(["India"]);
this.element. Zipcode().should('be.empty').clear().type("2233");
this.element. MobileNum().should('be.empty').clear().type("01971825788");
this.element. STATE().should('be.empty').clear().type("DELHI");
this.element. CITY().should('be.empty').clear().type("DELHI");
this.element. ADRESS2().should('be.empty').clear().type("DELHI");
//this.element.CreateAccount().should('be.visible').click();




}

}
module.exports = new automation_signexc();