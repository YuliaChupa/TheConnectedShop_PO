export class Search {
       searchLink = 'a[data-action="toggle-search"]';
       searchInput = 'input.Search__Input.Heading[name="q"]';
       searchResult = 'span.Heading.Text--subdued.u-h7'
       wrongSearchResult = ':nth-child(1) > .Segment > .Segment__Content > p'
       
       checkSearchLink() {
        cy.get(this.searchLink).first()
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href', '/search');
          
      }
        clickSearchLink() {
          cy.get(this.searchLink).first()
          .click();
        }
      checkSearchBarAttr() {
        cy.get(this.searchInput)
          .should('have.attr', 'type', 'search')
          .and('have.attr', 'name', 'q')
          .and('have.attr', 'autocomplete', 'off')
          .and('have.attr', 'autocorrect', 'off')
          .and('have.attr', 'autocapitalize', 'off')
          .and('have.attr', 'aria-label', 'Search...')
          .and('have.attr', 'placeholder', 'Search...')
          .and('have.attr', 'autofocus');
      }
    
      checkSearchFill() {
        cy.get(this.searchInput)
          .type('Water Leak Detector')
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
          })}

      checkSearcWronghFill() {
            cy.get(this.searchInput)     
            .type('W"at?er88')
            .should('have.value','W"at?er88');
          }

      checkWrongFillResult() {
            cy.get(':nth-child(1) > .Segment > .Segment__Content > p').eq(0)
              .should('have.text','No results could be found')
     }; 
     }
     