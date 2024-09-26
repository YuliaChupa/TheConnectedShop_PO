import { HomePage } from "../support/pages/homePage"

describe(`Check Homepage`,()=>{
    const homePage=new HomePage();
    beforeEach(() => {
        cy.viewport(1280, 720); 
        homePage.visit();
        cy.on('uncaught:exception', (err, runnable) => { return false; }); });
it (`Check site and check title`,()=>{
        homePage.checkURL();
        homePage.checkTitle();

});
});