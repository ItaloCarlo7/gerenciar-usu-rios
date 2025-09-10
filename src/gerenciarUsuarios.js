

const usuarios =[
    {
     propriedadeNome:'Matheus',
     propriedadeEmail:'matheus7_14@gospel.com'   
    },
     {
        propriedadeNome:'Marcos',
        propriedadeEmail: 'marcos12_7@gospel.com'
    },
      {
        propriedadeNome:'Lucas',
        propriedadeEmail: 'lucas1_10@gospel.com'
    },
      {
        propriedadeNome:'João',
        propriedadeEmail: 'joao2_3@gospel.com'
    }];

function retornarUsuarios(){
    return usuarios;

};
function adicionarNovoUsusario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsusario
}         