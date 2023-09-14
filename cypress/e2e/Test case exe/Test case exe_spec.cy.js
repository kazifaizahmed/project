
const loginexcpageobjs =require("../page_objects/loginexc.page");
const signexcpageObjs =require("../page_objects/signexc.page");
beforeEach(() => {
    // open the application and verify elements
    cy.visit('https://automationexercise.com/payment');
});
describe(" accountcreation for User", () => {

    it("cheak home and login", () => {
        loginexcpageobjs .loginWrongFunctionality(); 
    });
    it("cheak home and login", () => {
        loginexcpageobjs.loginexcfunctionality();
    });
    it("product", () => {
        loginexcpageobjs.productfunctionality();
    });
    
    it("cheak home and login", () => {
        signexcpageObjs .homeAssertationspage();
        
    });
    it.only("cheak home and login", () => {
        loginexcpageobjs. productfunctionality();
        
    });

});