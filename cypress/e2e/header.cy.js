import { Header } from "../support/pages/header";
import { HomePage } from "../support/pages/homePage";

describe(`check header`, () => {
    

    beforeEach(() => {
        cy.viewport(1280, 720);
        homePage.visit();
        cy.on('uncaught:exception', (err, runnable) => { return false; });
    });

    it
    (`Check header elements`, () => {    
        
        header.checkSearchLink();
        header.checkLogo();
        header.checkSearchLink() ;
        header.checkCartButton() ;
        header.checkStickyHeader() ; 
        header.checkaccountButton() ;  
        header.checkHomeButton() ; 
        header.checkNewInButton() ;  
        header.checkCollectionsButton() ;  
        header.checkPersonalButton() ;    
        header.checkBusinessesButton() ;       
        header.checkTechTalkButton() ;    
        header.checkAboutUsButton() ;
        header.checkContactButton() ;   
        header.checkCallButton()
        })             
    
    });
