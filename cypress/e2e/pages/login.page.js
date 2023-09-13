export default class LoginPage {
    constructor() {
        this.loginTextTitle = "div >h1[data-uia='login-page-title']";   
    }

    verifyLoginTitle(){
        cy.get(this.loginTextTitle).contains('Sign In')
    }
    
}