///<reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  var email = `dany${Date.now()}@teste.com`;

  beforeEach(()  => {
    cy.visit('/')

  });
  
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.preencherCadastro('Dany', 'Teste', email, '11223355667788', 'Teste@11testecom')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso')
  });
  
  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Dany20', 'Teste', 'dany22@teste.com', '11223355667788', 'Teste@11testecom')
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Deve validar mensagem de erro com o campo sobrenome inválido', () => {
    cy.preencherCadastro('Dany', 'dwdw11', 'dany22@teste.com', '11223355667788', 'Teste@11testecom')
    cy.get('#signup-response').should('contain' , 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Deve validar mensagem de erro com o campo email já cadastrado', () => {
    cy.preencherCadastro('Dany', 'Teste', 'dany22@teste.com', '11223355667788', 'Teste@11testecom')
    cy.get('#signup-response').should('contain' , 'Este email já está cadastrado.')
  });

  it('Deve validar mensagem de erro com o campo email inválido', () => {
    cy.preencherCadastro('Dany', 'Teste', 'dany22teste.com', '11223355667788', 'Teste@11testecom')
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')
  });

  it('Deve validar mensagem de erro com o campo senha inválida', () => {
    cy.preencherCadastro('Dany', 'Teste', email , '11223355667788', 'Teste11testecom')
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  });
 

})

