class logarUsuario {

    elements = {

            emailInput    : () => cy.get('input[name="email"]'),
            passwordInput    : () => cy.get('input[name="password"]'),
            loginBtn :      () => cy.get('button').contains('Login'),



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
    
    clickSubmit() {
        this.elements.loginBtn().click();
    }

    
}
export default logarUsuario;