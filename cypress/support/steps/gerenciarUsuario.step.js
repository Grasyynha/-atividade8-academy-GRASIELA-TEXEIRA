import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import {faker} from '@faker-js/faker'
import gerenciar from '../pages/gerenciarUsuario.page'

const gerenciamento = new gerenciar()

const name = faker.person.fullName();
const email = faker.internet.email()
const password = faker.internet.password({length:8})



Given('que estou logado no sistema', () => { 
  cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')
  gerenciamento.enterEmail('maria@gmail.com')
  gerenciamento.enterPassword('123456')
  gerenciamento.elements.btnLogin()
}); 
When('acesso a página de edição de perfil', () => {
  gerenciamento.elements.btnPerfil()
  gerenciamento.elements.btnGerenciarConta()
})
Then('devo visualizar meus dados relevantes', () => {
  cy.get('.account-container')
})
When('devo poder editar meu nome e senha', () => {
  gerenciamento.elements.inputNome().clear().type('Maria Silva')
  gerenciamento.elements.btnAlterarSenha()
})
When('devo confirmar a nova senha', () => {
  gerenciamento.elements.inputSenha().type('123456')
  gerenciamento.elements.inputConfirmaSenha().type('123456')

})
When('devo salvar as alterações', () => {
  gerenciamento.elements.btnSalvar()
})
When('minhas informações devem ser atualizadas com sucesso', () => {
  cy.get('.modal-body > h3').should('have.text','Sucesso')
})
