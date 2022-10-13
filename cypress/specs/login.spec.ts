describe('First Cypress Test', () => {

    it('should login successfully', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login');
  
      cy.get('#username').type('student'); 
      cy.get('#password').type('Password123');
      cy.get('#submit').click();
  
      cy.get('.post-title').should('be.visible');
    })
  
    it('should fail to login because of username', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login');
  
      cy.get('#username').type('wrongstudent'); 
      cy.get('#password').type('Password123');
      cy.get('#submit').click();
  
      cy.get('#error').should('be.visible');
      cy.get('#error').invoke('text').should('match', /^Your username is invalid!/);
    })
  
    it('should fail to login because of password', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login');
  
      cy.get('#username').type('student'); 
      cy.get('#password').type('Password456');
      cy.get('#submit').click();
  
      cy.get('#error').should('be.visible');
      cy.get('#error').invoke('text').should('match', /^Your password is invalid!/);
    })
    
  })