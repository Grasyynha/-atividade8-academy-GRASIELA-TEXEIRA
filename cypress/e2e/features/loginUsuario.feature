Feature: Login de usuario
     Como um usuário com registro no sistema
     Desejo efetuar login
     Para poder gerenciar minhas informações, avaliar filmes ou gerenciar o sistema


Scenario:  Logar usuario
Given que eu estou na página de login
When eu tenho uma conta registrada com email "joao@email.com" e senha "senha123"
And eu clico em "Entrar"
Then eu devo ser autenticado com sucesso
And eu devo ser redirecionado para a página inicial


Scenario: Login com credenciais incorretas
Given que eu estou na página de login
And eu tenho uma conta registrada com email "joao@email.com" e senha "senha123"
When eu preencho o campo de email com "joao@email.com" e o campo de senha com "senhaErrada"
And eu clico em "Entrar"
Then eu devo ver uma mensagem de erro informando que as credenciais estão incorretas