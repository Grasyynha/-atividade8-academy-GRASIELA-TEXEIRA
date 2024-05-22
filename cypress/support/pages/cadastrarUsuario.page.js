export default class gerenciarUsuario { 

    elements = {

        emailInput    :           () => cy.get('input[name="email"]'),
        passwordInput    :        () => cy.get('input[name="password"]'),
        gerenciaBtn :             () => cy.get('button').contains('Salvar'),
        confirmPasswordInput    : () => cy.get('input[name="confirmPassword"]'),
        btnLogin                : () => cy.get('.login-button').click(),
        btnPerfil               : () => cy.get('[href="/profile"]').click(),
        btnGerenciarConta       : () => cy.get('[href="/account"]').click(),
        btnAlterarSenha         : () => cy.get('.account-password-button').click(),
        inputNome               : () => cy.get(':nth-child(1) > .profile-input').click(),
        inputEmail              : () => cy.get(':nth-child(2) > .profile-input').click(),
        inputSenha              : () => cy.get(':nth-child(5) > .profile-input').click(),
        inputConfirmaSenha      : () => cy.get(':nth-child(6) > .profile-input').click(),
        btnSalvar               : () => cy.get('.account-save-button').click()

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

  

  
   
  
    getErrorMessage() { 
  
      return cy.get('.error-message'); 
  
    } 
}
  
   
