        export class Header {
            logo = '.Header__LogoLink';
            mainNavLinks = 'nav[aria-label="Main navigation"] ul.HorizontalList li a';
            searchButton = 'a[data-action="toggle-search"]';
        
            checkLogo() {
                cy.get(this.logo)
                    .should('exist')
                    .and('be.visible');
            }
        
            checkNavigationLinks() {
                cy.get(this.mainNavLinks)
                    .should('exist')
                    .and('be.visible');
            }
        
            checkSearchButton() {
                cy.get(this.searchButton)
                    .should('exist')
                    .and('be.visible');
            }
        }