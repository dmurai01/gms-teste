///<reference types="cypress"/>

describe('US-001-Funcionalidade: Buscar filmes válido', () => {
  it('Deve buscar filmes de acordo com a palavra chave', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('inception')
    cy.get('#search-button').click()
  })
})

describe('US-001-Funcionalidade: Limpar busca', () => {
  it('Deve limpar o campo de busca e a listagem de filmes', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#clear-button').click()
  })
})

describe('US-001-Funcionalidade: Buscar filmes inválido', () => {
  it('Deve buscar filmes de acordo com a palavra chave não existente', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('testando')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('contain' , 'Filme não encontrado')
  })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Daniela')
    cy.get('#signup-lastname').type('Testando')
    cy.get('#signup-email').type('teste@teste31.com')
    cy.get('#signup-phone').type('112233445566')
    cy.get('#signup-password').type('Teste@@11')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso')
  })
})

