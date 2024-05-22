import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import {faker} from '@faker-js/faker'
import gerenciar from '../pages/gerenciarUsuario.page'

const gerenciamento = new gerenciar()

const name = faker.person.fullName();
const email = faker.internet.email()
const password = faker.internet.password({length:8})



Given('que estou autenticado no sistema', () => { 

  // Implemente a autenticação aqui, se necessário 

}); 

 

Given('estou na página de edição de informações da minha conta', () => { 

  

}); 

 

When('tento acessar a página de edição de informações da conta', () => { 

 
}); 
 

When('tento alterar informações de outro usuário', () => { 



}); 


When('preencho o campo de nome com {string}', (name) => { 

    gerenciar.enterUsername(name)
 
}); 


When('preencho o campo de senha com {string}', (password) => { 

    gerenciar.enterPassword(password)

}); 
 

When('preencho o campo de confirmação de senha com {string}', (password) => { 

    cadastrar.enterConfirmPassword(password)

}); 

 

When('clico no botão de salvar', () => { 

    gerenciar.clickSubmit()

}); 

 

Then('minha conta deve ser atualizada com o novo nome e senha', () => { 

  // Implemente a verificação de atualização da conta aqui 

}); 

 

Then('devo receber uma mensagem informando que só posso alterar minhas próprias informações', () => { 

   

}); 

 

Then('devo receber uma mensagem informando que as senhas não coincidem', () => { 

 

}); 

 

Then('devo ver todos os meus dados relevantes preenchidos nos campos de edição', () => { 

  

}); 