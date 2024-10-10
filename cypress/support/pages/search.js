export class Search {
       searchLink = '#section-header > div > div:nth-child(3) > nav > ul > li:nth-child(2) > a';
       searchBar = 'input.Search__Input.Heading[name="q"]';
       searchResult = 'span.Heading.Text--subdued.u-h7'
       
     
       checkSearchLink() {
        cy.get(this.searchLink).eq(0)
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href', '/search')
          .click();
      }
    
      checkSearchBar() {
        cy.get(this.searchBar)
          .should('have.attr', 'type', 'search')
          .and('have.attr', 'name', 'q')
          .and('have.attr', 'autocomplete', 'off')
          .and('have.attr', 'autocorrect', 'off')
          .and('have.attr', 'autocapitalize', 'off')
          .and('have.attr', 'aria-label', 'Search...')
          .and('have.attr', 'placeholder', 'Search...')
          .and('have.attr', 'autofocus');
      }
    
      checkEnterQuery() {
        cy.get(this.searchBar)
          .type('Water Leak Detector',{ force: true })
          .should('have.value', 'Water Leak Detector');
      }
    
      checkResult() {
        cy.get(this.searchResult).eq(0)
          .should('exist')
          .and('be.visible')
          .invoke('text')
          .then((text) => {
            const resultsNumber = parseInt(text);
            expect(resultsNumber).to.be.greaterThan(1);
          });
      }
    }