class cadastrarUsuario {

    elements = {

        usernameInput : () => cy.get('input[name="name"]'),      
        emailInput    : () => cy.get('input[name="email"]'),
        passwordInput    : () => cy.get('input[name="password"]'),
        confirmPasswordInput    : () => cy.get('input[name="confirmPassword"]'),    
        cadastroBtn :      () => cy.get('button').contains('Cadastrar'),
        successTxt :    () => cy.get('.modal-body > h3'),
        errorTxt :      () => cy.get('.modal-body > h3').should('have.text','Falha no cadastro.'),
        falhaCadastro:  () => cy.get('p').should('have.text','Não foi possível cadastrar o usuário.'),
        btnPerfil :     () => cy.get('a[href="/profile"]').click(),
        btnConta :      () => cy.get('a[href="/account"]').click(),
        tipoUsuario :   () => cy.get('select option:selected').should('have.text', 'Comum')
    }

    enterUsername(username)
    {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
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
        this.elements.cadastroBtn().click();
    }

}
export default cadastrarUsuario;