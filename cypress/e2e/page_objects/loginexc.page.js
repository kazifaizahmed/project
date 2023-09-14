class automation_loginexc{
    element={
        EmailAdress: () => cy.get(`input[data-qa='login-email']`),
        Password:() => cy.get(`input[data-qa='login-password']`),
        LoginBtn: () => cy.xpath(`//button[normalize-space()='Login']`),
        productBtn: () => cy.get(`a[href='/products']`),
        Searchbar: () => cy.get(`#search_product`),
        SearchBtn: () => cy.get(`.fa.fa-search`),
        Viewproduct: () => cy.xpath(`//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]`),
        Quantity: () => cy.get(`#quantity`),
        Addtocard: () => cy.get(`button[type='button'] i[class='fa fa-shopping-cart']`),
        Viewchart: () => cy.xpath(`//u[normalize-space()='View Cart']`),
        procedtocheckout: () => cy.get(`.btn.btn-default.check_out`),
        placeorder: () => cy.get(`.btn.btn-default.check_out`), 
        Nameoncard: () => cy.xpath(`//input[@name='name_on_card']`),  
        cardnum: () => cy.get(`input[name='card_number']`),  
        cvc: () => cy.get(`input[placeholder='ex. 311']`), 
        expiration: () => cy.get(`input[placeholder='MM']`), 
        year: () => cy.xpath(`//input[@placeholder='YYYY']`), 
        payandconfirm: () => cy.get(`#submit`), 
        Downloadinvoice: () => cy.get(`.btn.btn-default.check_out`), 
        continoue: () => cy.get(`.btn.btn-primary`), 

        
    }


    loginWrongFunctionality() {
        
        this.element.EmailAdress().should('be.empty').clear().type("sadnaan@gmail.com");
        this.element.Password().should('be.empty').clear().type("sadnanzayan");
        this.element.LoginBtn().should('not.be.disabled').click();
      }

    loginexcfunctionality(){
        this.element.EmailAdress().should('be.empty').clear().type("SADNAN@gmail.com");
        this.element.Password().should('be.empty').clear().type("sadnanzayan");
        this.element.LoginBtn().should('be.visible').click();
    }
    productfunctionality(){
        
        this.element.productBtn().should('be.visible').click();
        this.element.Searchbar().should('be.visible');
        this.element.SearchBtn().should('be.visible').click();
        this.element.Viewproduct().should('be.visible').click();
        this.element.Quantity().should('be.visible').click();
        this.element.Addtocard().should('be.visible').click();
        this.element.Viewchart().should('be.visible').click();
        this.element.procedtocheckout().should('be.visible').click();
        this.element.placeorder().should('be.visible').click({force: true});
        
    }
    productfunctionality(){

        this.element.Nameoncard().should('be.empty').clear().type("sadnan");
        this.element.cardnum().should('be.empty').clear().type("007");
        this.element.cvc().should('be.empty').clear().type("ex2020");
        this.element.expiration().should('be.empty').clear().type("02");
        this.element.year().should('be.empty').clear().type("2020");
        this.element.payandconfirm().should('be.visible').click();
        this.element.Downloadinvoice().should('be.visible').click();
        this.element.continoue().should('be.visible').click();
    }
}
module.exports = new automation_loginexc();