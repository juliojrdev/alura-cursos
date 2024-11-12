const estudantes = require('./estudantes.json');

//função sort que ordena do mair para o menor
function ordenar(lista, propriedade){
    return lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) return -1;
        if(a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
};

const listaOrdenada = ordenar(estudantes, 'nome');

console.log(listaOrdenada)