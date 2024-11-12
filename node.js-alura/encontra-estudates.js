const estudantes = require('./estudantes.json');

//console.log(typeof estudantes); //object~array

function buscaInformacao(lista, chave, valor){
    return lista.find((estudante) => estudante[chave].includes(valor));//includes vai procurar tanto no string quanto no array
}

const estudanteEncontrado = buscaInformacao(estudantes, 'telefone', '3569848931');
console.log(estudanteEncontrado);