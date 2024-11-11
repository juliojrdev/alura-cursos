//1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.

////2 - Crie um arquivo chamado dados.json contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.

const dados = require('./dados.json');

console.log(dados);
console.log('\n');
console.log(dados['produtos']);
console.log('\n');
console.log(dados['produtos'][0]);
console.log('\n');
console.log(dados['produtos'][1]);

console.log('\n\n\n');

console.log(dados.usuarios);
console.log('\n');
console.log(dados.usuarios[0]);
console.log('\n');
console.log(dados.usuarios[1]);

