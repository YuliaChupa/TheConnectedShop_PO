import { Header } from "../support/pages/header";
import { HomePage } from "../support/pages/homePage";
import { Search } from "../support/pages/Search";

describe(`check search`, () => {
    const homePage = new HomePage();
    const header = new Header();
    const search = new Search();

    beforeEach(() => {
        cy.viewport(1280, 720);
        homePage.visit();
        cy.on('uncaught:exception', (err, runnable) => { 
          return false; 
        });
      });

    it
    (`Check Search`, () => { ;
        header.checkSearchLink(); 
        search.checkSearchBar();  
        search.checkEnterQuery();   
        search.checkResult();    
      });
    });