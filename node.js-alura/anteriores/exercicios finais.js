/*1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).*/

const lista1 = [1, 2, 3,];
const lista2 = [9, 8, 7, 6];
const lista3 = [10, 20, 30, 40];

const listaUnica = [...lista1,...lista2,...lista3];
console.log(listaUnica);

/*2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.*/

const valores = [10, 20, 30, 40];

//const soma = valores.reduce((somador, valor) => somador += valor, 0);

// ou

const soma = valores.reduce((somador, valor) => {
    return somador + valor;
}, 0)

console.log(soma);

/*
3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
*/

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const listaCores = new Set([...new Set(coresLista1), ...new Set(coresLista2)]);

console.log(listaCores);

//4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//const listaPares = numeros.filter((num) => num % 2 == 0);

//ou

const listaPares = numeros.filter(function (num){
    return num % 2 == 0;
});

console.log(listaPares);

//5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const numerosVarios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const lista3e5 = numerosVarios.filter(function (num){
    return num % 3 == 0 && num > 5;
});
//ou
const listaDiv3 = numerosVarios.filter((num) => num % 3 == 0 && num > 5);

console.log(lista3e5);
console.log(listaDiv3);

//6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.


const valoresParaSomar = [10, 20, 30, 40];

function somaValoresArray(array){
    let somador = 0;
    array.forEach(element =>{
        somador += element
    });
    return somador;
}

console.log(somaValoresArray(valoresParaSomar));