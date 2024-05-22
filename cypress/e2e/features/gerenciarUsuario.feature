Feature: Gerenciar Conta

  Scenario: Gerenciar dados de conta
    Como um usuário autenticado
    Quero atualizar minhas informações
    Para ter controle sobre meus dados.

    Given que estou logado no sistema
    When acesso a página de edição de perfil
    Then devo visualizar meus dados relevantes
    And devo poder editar meu nome e senha
    And devo confirmar a nova senha
    And devo salvar as alterações
    And minhas informações devem ser atualizadas com sucesso
