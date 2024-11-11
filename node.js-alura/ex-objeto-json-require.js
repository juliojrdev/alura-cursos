//3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:


const produto = [{
    id: 1,
    nome: 'Casaco Moleton',
    preco: 125.90
},{
    id: 2,
    nome: 'Blusa Xadrez',
    preco: 69.90
},{
    id: 3,
    nome: 'Boné Trucker',
    preco: 89.90
}]

const produtoString = JSON.stringify(produto);

console.log(produtoString);