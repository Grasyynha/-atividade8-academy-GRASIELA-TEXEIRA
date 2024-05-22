export class gerenciarUsuario { 

    elements = {

        emailInput    : () => cy.get('input[name="email"]'),
        passwordInput    : () => cy.get('input[name="password"]'),
        gerenciaBtn :      () => cy.get('button').contains('Salvar'),
        confirmPasswordInput    : () => cy.get('input[name="confirmPassword"]'), 

    }
   
    enterEmail(email)
    {
    this.elements.emailInput().clear();
    this.elements.emailInput().type(email);
    }
    enterPassword(password)
    {
    this.elements.passwordInput().clear();
    this.elements.passwordInput().type(password);
    }
     
    enterConfirmPassword(confirmPassword)
    {
    this.elements.confirmPasswordInput().clear();
    this.elements.confirmPasswordInput().type(confirmPassword);
    }
  
   
  
    clickSubmit() {
        this.elements.gerenciaBtn().click();
    }

  
    } 
  
   
  
   

  
   
