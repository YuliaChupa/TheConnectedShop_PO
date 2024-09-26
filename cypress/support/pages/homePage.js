export class HomePage{
// відкриваємо домашню сторінку
    visit(){
        cy.visit('https://theconnectedshop.com/')
    };
// перевіряємо правильність адреси    
    checkURL(){
        cy.url()
          .should('include','theconnectedshop.com/');
    };
//перевірка заголовку
    checkTitle(){
            cy.title()
              .should('eq','The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');     
          };
};