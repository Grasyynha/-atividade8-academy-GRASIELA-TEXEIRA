import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import {faker} from '@faker-js/faker'
import cadastroPage from '../pages/cadastrarUsuario.page'

const cadastrar = new cadastroPage()

const name = faker.person.fullName();
const email = faker.internet.email()
const password = faker.internet.password({length:8})

 
Given ('que eu estou na página de cadastro', () => {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/register')

})
When('eu preencho os campos obrigatórios com nome "João", email "joao@gmail.com" e senha "senha123"', () => {
    cadastrar.enterUsername(name)
    cadastrar.enterEmail(email)
    cadastrar.enterPassword(password)
    cadastrar.enterConfirmPassword(password)
 
})    
When('eu clico em "Registrar"', () => {
    
    cadastrar.clickSubmit()
})
Then('eu devo ser informado que o cadastro foi concluído', () => {
    cadastrar.elements.successTxt().should('have.text','Sucesso')
})

Given('que acesso a pagina de cadastro', () => {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/register')

})
When('eu digito um email previamente usado', () => {
    cadastrar.enterUsername(name)
    cadastrar.enterEmail(email)
    cadastrar.enterPassword(password)
    cadastrar.enterConfirmPassword(password)
    cadastrar.clickSubmit()
    cy.intercept('POST', 'https://raromdb-3c39614e42d4.herokuapp.com/api/users', {fixture: 'emailDuplicado.json'}).as('duplicado')
})
Then('recebo a mensagem de falha no cadastro, email já utilizado', () => {
    cadastrar.elements.errorTxt()
})

Given('que eu estou na página de cadastrar', () => {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/register')

})
When('eu preencho os campos obrigatórios com nome "João", email "joaoemail.com" e senha "senha123"', () => {
    cadastrar.enterUsername(name)
    cadastrar.enterEmail('joaoemail.com')
    cadastrar.enterPassword(password)
    cadastrar.enterConfirmPassword(password)
    cadastrar.clickSubmit()

})
Then('eu devo ver uma mensagem de erro informando falha ao cadastrar o usuario', () => {
    cadastrar.elements.errorTxt()
    cadastrar.elements.falhaCadastro()
    
})

Given('que estou na página de cadastro', () => {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/register')

})
When('eu preencho os campos obrigatórios com nome "João", email "joao@email.com" e senha "senha123"', () => {
    cadastrar.enterUsername(name)
    cadastrar.enterEmail(email)
    cadastrar.enterPassword(password)
    cadastrar.enterConfirmPassword(password)
    cadastrar.clickSubmit()

})
Then('minha conta deve ser criada com o tipo de usuário "comum"', () => {
    cadastrar.elements.btnPerfil()
    cadastrar.elements.btnConta()
    cadastrar.elements.tipoUsuario()
    

})

    