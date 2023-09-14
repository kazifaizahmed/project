const loginPageObjs = require("../page_objects/Login.page");
const HomepagePageObjs = require("../page_objects/Home.page");
const MyinfoPageObjs = require("../page_objects/Myinfo.page");
beforeEach(() => {
    // open the application and verify elements
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
describe("login Verification for User", () => {
    it("Check Login Pages", () => {
        loginPageObjs.loginWrongFunctionality();
    });
    
    it("Check Login Pages", () => {
        loginPageObjs.loginFunctionality();
        HomepagePageObjs.homePageAssertions();
    });
    


});
describe("update of My Info", () => {
    it("Check Login Pages", () => {
 loginPageObjs.loginFunctionality();       
HomepagePageObjs.myInfoMenuClicked();
MyinfoPageObjs.addMyInfo();
MyinfoPageObjs.addFile();

    });

});
