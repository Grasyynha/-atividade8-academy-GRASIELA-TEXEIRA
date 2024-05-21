import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import {faker} from '@faker-js/faker'
import logarUsuario from "../pages/loginUsuario.page"

const logar = new logarUsuario()
const email = faker.internet.email()
const password = faker.internet.password({length:8})


Given('que eu estou na página de login', () => {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')

})
When('eu tenho uma conta registrada com email "joao@email.com" e senha "senha123"', () => {
    logar.enterEmail('grasy.mst@gmail.com')
    logar.enterPassword('123456')
    logar.clickSubmit()

})
