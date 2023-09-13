export default class HomePage {
    constructor() {
        this.loginButton = "div >a[id='signIn']";   
    }

    visit(){
        cy.visit("https://www.netflix.com/");
        cy.url().should('eq', 'https://www.netflix.com/bo-en/');
    }

    verifyTitleLogo(){
        cy.title().should('eq','Netflix Bolivia - Watch TV Shows Online, Watch Movies Online');
    }

    clickOnLoginButton(){
        cy.get(this.loginButton).click();
    }
    
}