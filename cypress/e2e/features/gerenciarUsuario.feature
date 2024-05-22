Feature: Gerenciamento de conta do usuário 
  Como um usuário do sistema 
  Eu desejo poder gerenciar minha conta 
  Para ter controle sobre minhas informações 

@ignore 
 Scenario: Apenas usuários autenticados podem acessar a edição de informações 

    Given que estou autenticado no sistema 
    When tento acessar a página de edição de informações da conta 
    Then devo ser redirecionado para a página de edição de informações 

 
@ignore
Scenario: Um usuário comum pode alterar apenas suas próprias informações 

    Given que estou autenticado no sistema como usuário comum 
    And estou na página de edição de informações da minha conta 
    Given tento alterar informações de outro usuário 
    Then devo receber uma mensagem informando que só posso alterar minhas próprias informações 

 
@ignore
Scenario: Um usuário pode atualizar apenas seu nome e senha através do gerenciamento de conta 

    Given que estou autenticado no sistema 
    And estou na página de edição de informações da minha conta preencho o campo de nome com "<novo_nome>" 
    E preencho o campo de senha com "<nova_senha>" 
    E preencho o campo de confirmação de senha com "<confirmacao_senha>" 
    E clico no botão de salvar 
    Então minha conta deve ser atualizada com o novo nome e senha 

@ignore 

 Scenario: O usuário deve preencher o campo de senha e confirmação de senha corretamente para alterar a senha 

    Given que estou autenticado no sistema 
    And estou na página de edição de informações da minha conta 
    When preencho o campo de senha com "<senha>" 
    And preencho o campo de confirmação de senha com "<confirmacao_senha_diferente>" 
    And clico no botão de salvar 
    Then devo receber uma mensagem informando que as senhas não coincidem 

 
@ignore
Scenario: O usuário deve ter visibilidade de todos os seus dados relevantes ao editar seu perfil 

    Given que estou autenticado no sistema 
    And estou na página de edição de informações da minha conta 
    Then devo ver todos os meus dados relevantes preenchidos nos campos de edição 