import { Header } from "../support/pages/header";
import { HomePage } from "../support/pages/homePage";
import { Search } from "../support/pages/Search";

describe(`check search`, () => {
    const homePage = new HomePage();
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
        search.checkSearchLink(); 
        search.clickSearchLink()
        search.checkSearchBarAttr();
        search.checkSearchFill();   
        search.checkResult();    
      });
    });