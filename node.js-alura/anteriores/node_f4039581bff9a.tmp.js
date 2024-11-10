const prompt = require('prompt-sync')();

const listaNomes = [];
const listaNotas = [];
const listaSituacao = [];
const listas = [listaNomes, listaNotas, listaSituacao];

for(let i = 0; i < 3; i++) {
        let resp = prompt('informe o nome do aluno: ');
        listaNomes.push(resp);
        resp = prompt('informe a nota do aluno: ');
        listaNotas.push(resp);
        resp = prompt('informe a situação aluno: ');
        listaSituacao.push(resp);
}

for(let i = 0; i < listas.length; i++) {
        for(let j = 0; j > listaNomes.length; j--) {
        console.log(listas[i][i][j]);
        }        
}