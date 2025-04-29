///<reference types="cypress"/>

describe('US-001-Funcionalidade: Buscar filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });
  
   /* it('Deve buscar filmes com sucesso', () => {
        cy.get('#search-input').type('inception')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain' , 'inception')
    });*/

    it('Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes').then ((filmes) => {
            cy.get('#search-input').type(filmes[1].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain' , filmes[1].titulo)
        })
    });

    it('Deve buscar filmes com sucesso da lista inteira', () => {
        cy.fixture('filmes').each ((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain' , filmes.titulo)
        })
    });

    it('Deve limpar o campo de busca e a listagem de filmes', () => {
      cy.get('#clear-button').click()
    });
  
    it('Deve buscar filmes de acordo com a palavra chave não existente', () => {
      cy.get('#search-input').type('testando')
      cy.get('#search-button').click()
      cy.get('#results-section > p').should('contain' , 'Filme não encontrado')
    })
});