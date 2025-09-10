const { gerenciarUsuarios, adicionarNovoUsusario, retornarUsuarios } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista',function () {
        
        // 1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsusario({
                propriedadeNome:'Maria',
                propriedadeEmail: 'mariademagdala@gospel.com'
            });
        
        // 2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();
        
        // 3. Verificar se o novo nome foi adicionado no fim da lista de usuários
       
      //expect(listaDeUsuarios.at(-1).propriedadeNome ).to.equal('Maria');
      //expect(listaDeUsuarios.at(-1).propriedadeEmail).to.equal('mariademagdala@gospel.com');
        expect(listaDeUsuarios.at(-1)).to.eql({
                propriedadeNome:'Maria',
                propriedadeEmail: 'mariademagdala@gospel.com'
            });
        
        
        // 4. Comparar se o ultimo nome adicionado está igual ao nome adicionado
        
    });
});