        export class Header {
            logo = '.Header__LogoLink';
            mainNavLinks = 'nav[aria-label="Main navigation"] ul.HorizontalList li a';
            searchButton = 'a[data-action="toggle-search"]';
            searchInput = 'input[type="search"]';
            cartButton = 'a[data#section-header > div > div:nth-child(3) > nav > ul > li:nth-child(3) > a-drawer-id="sidebar-cart"]';
            stickyHeader = 'div.Header__Wrapper';
            accountButton = '#section-header > div > div:nth-child(3) > nav > ul > li:nth-child(1) > a';
            homeButton = '#section-header > div > div:nth-child(1) > nav > ul > li.HorizontalList__Item.is-active';
            newInButton = '#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(2) > a';
            collectionsButton = '#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(3) > a';
            personalButton = '#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(4) > a';
            businessesButton = '#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(5) > a';
            techTalkButton = '#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(6) > a';
            aboutUsButton =  '#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(7) > a';
            contactButton = '#section-header > div > div:nth-child(1) > nav > ul > li:nth-child(8) > a';
            callButton = '#section-header > div > div:nth-child(1) > nav > ul > li.HorizontalList__Item.is-expanded';

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
            checkCartButton() {
                cy.get(this.cartButton) 
                .should('exist')
                .and('be.visible');
            }
            checkCartDrawer() {
                cy.get(this.cartDrawer) 
                .should('exist')
                .and('be.visible');
            }
            checkStickyHeader() {
                cy.get(this.stickyHeader) 
                .should('exist')
                .and('be.visible');
            }
            checkaccountButton() {
                cy.get(this.accountButton) 
                .should('exist')
                .and('be.visible');
            }  
            checkHomeButton() {
                cy.get(this.homeButton) 
                .should('exist')
                .and('be.visible');
            }  
            checkNewInButton() {
                cy.get(this.newInButton) 
                .should('exist')
                .and('be.visible');
            }  
            checkCollectionsButton() {
                cy.get(this.collectionsButton) 
                .should('exist')
                .and('be.visible');
            } 
            checkPersonalButton() {
                cy.get(this.personalButton) 
                .should('exist')
                .and('be.visible');
           
            }     
            checkBusinessesButton() {
                cy.get(this.businessesButton) 
                .should('exist')
                .and('be.visible');

            }     
            checkTechTalkButton() {
                cy.get(this.techTalkButton) 
                .should('exist')
                .and('be.visible');

            }   
            checkAboutUsButton() {
                cy.get(this.aboutUsButton) 
                .should('exist')
                .and('be.visible')
            }
           checkContactButton() {
                cy.get(this.contactButton) 
                .should('exist')
                .and('be.visible');
           }
            checkCallButton() {
                cy.get(this.callButton) 
                .should('exist')
                .and('be.visible')      
               
            }    
        }         