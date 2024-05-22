Feature: Login de usuario
     Como um usuário com registro no sistema
     Desejo efetuar login
     Para poder gerenciar minhas informações, avaliar filmes ou gerenciar o sistema

Scenario: Login com sucesso
Given que eu estou na página de login
When eu tenho uma conta registrada com email "joao@email.com" e senha "senha123"
And eu clico no botão de login
Then eu devo ser redirecionado para a página inicial


Scenario: Login com credenciais incorretas
Dado que eu estou na página de login
E eu tenho uma conta registrada com email "joao@email.com" e senha "senha123"
Quando eu preencho o campo de email com "joao@email.com" e o campo de senha com "senhaErrada"
E eu clico em "Entrar"
Então eu devo ver uma mensagem de erro informando que as credenciais estão incorretas