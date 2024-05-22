import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import {faker} from '@faker-js/faker'
import logarUsuario from "../pages/loginUsuario.page"

const logar = new logarUsuario()

const email = faker.internet.email()
const password = faker.internet.password({length:8})
 

Given('que estou na página de login', () => { 

   cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login'); 

}); 
When('eu tenho uma conta registrada com email "joao@email.com" e senha "senha123"', () => {

    logar.enterEmail(email)
    logar.enterPassword(password)

}); 
When('eu clico no botão de login', () => { 
    logar.clickSubmit()

}); 

Then('eu devo ser redirecionado para a página inicial', () => { 
  cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com'); 

}); 

//Then('eu devo ver uma mensagem de erro informando que o email é inválido', () => { 

 ////  cy.get('').should('be.visible'); 

//}); 


//Then('eu devo ver uma mensagem de erro informando que a senha é inválida', () => { 
  // cy.get('').should('be.visible'); 

//}); 

// Then('eu devo ver uma mensagem de erro informando que todos os campos são obrigatórios', () => { 

 //  cy.get('').should('be.visible'); 

//}); 

 