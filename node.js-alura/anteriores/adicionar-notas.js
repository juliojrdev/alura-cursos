const prompt = require('prompt-sync')();

const listaNomes = ['maria', 'joao', 'pedro'];
const listaNotas = ['9', '8', '5'];
const listaSituacao = ['ap', 'ap', 'rp'];
const listas = [listaNomes, listaNotas, listaSituacao];

/*
for(let i = 0; i < listaNomes.length; i++) {
        let nome = listas[0][i];
        let nota = listas[1][i];
        let situacao = listas[2][i];
        console.log(nome + " " + nota + " " + situacao);
}
*/

for(let i = 0; i < listaNomes.length; i++) {
        for(let j = 0; j < listas.length; j++){
                let ${info+i} = listas[j][i];
        }
        
        let nota = listas[1][i];
        let situacao = listas[2][i];
        console.log(nome + " " + nota + " " + situacao);
}
//console.log(listas[0][0] + listas[1][0] + listas[2][0]);
//console.log(listas[0][1] + listas[1][1] + listas[2][1]);    

