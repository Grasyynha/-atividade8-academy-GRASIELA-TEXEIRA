Feature: Cadastrar usuário
     Como uma pessoa qualquer 
     Desejo me cadastrar no sistema 
     Para conseguir avaliar filmes

@ignore
Scenario: Cadastro
Given que eu estou na página de cadastro
When eu preencho os campos obrigatórios com nome "João", email "joao@gmail.com" e senha "senha123"
And eu clico em "Registrar"
Then eu devo ser informado que o cadastro foi concluído

@ignore
Scenario: Cadastro com email já cadastrado
Given que acesso a pagina de cadastro
When eu digito um email previamente usado
Then recebo a mensagem de falha no cadastro, email já utilizado

@ignore
Scenario: Cadastro com formato de email inválido
Given que eu estou na página de cadastrar
When eu preencho os campos obrigatórios com nome "João", email "joaoemail.com" e senha "senha123"
And eu clico em "Registrar"
Then eu devo ver uma mensagem de erro informando falha ao cadastrar o usuario

Scenario: Tipo de usuário padrão no cadastro
Given que estou na página de cadastro
When eu preencho os campos obrigatórios com nome "João", email "joao@email.com" e senha "senha123"
And eu clico em "Registrar"
Then minha conta deve ser criada com o tipo de usuário "comum"




