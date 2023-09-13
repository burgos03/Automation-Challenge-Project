import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";

describe('Netflix Home Page Scenarios',() =>{
    it('Verify that Netflix home page can be navigated', () => {
        const homePage = new HomePage();
        homePage.visit();
        homePage.verifyTitleLogo();
    })

    it('Verify that Login page can be navigated', () => {
        const homePage = new HomePage();
        const loginPage = new LoginPage();

        homePage.visit();
        homePage.verifyTitleLogo();
        homePage.clickOnLoginButton();
        
        loginPage.verifyLoginTitle();
    })
})