///<reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Daniela')
    cy.get('#signup-lastname').type('Testando')
    cy.get('#signup-email').type('teste@teste32.com')
    cy.get('#signup-phone').type('112233445566')
    cy.get('#signup-password').type('Teste@@11')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso')
  })
})