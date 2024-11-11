const estudante = require('./estudante.json');

//convertenso um arquivo.json em string para ser tresmitido através do metodo http:
const stringEstudante = JSON.stringify(estudante);

//console.log(stringEstudante);
//console.log(typeof  stringEstudante);

//convertendo uma string (.json) em objeto para poder ser manitupado dentro do codigo
const objEstudante = JSON.parse(stringEstudante);

console.log(objEstudante);
console.log(typeof objEstudante);

console.log(objEstudante.nome); //agora consegue acessar as chaves/propriedades da string(.json) importado e convertido objeto.