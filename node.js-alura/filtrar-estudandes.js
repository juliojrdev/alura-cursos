const estudante = require('./estudantes.json');

function filtrarPorProriedade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtrarPorProriedade(estudante, 'cep');

console.log(listaEnderecosIncompletos);