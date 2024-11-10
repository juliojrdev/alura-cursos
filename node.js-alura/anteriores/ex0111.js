//1 - Crie uma função que receba dois arrays e os concatene em um único array.

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];
const array3 = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(array3);

//2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

const num = [1,2,3,4,5,6,7,8,9,10];
const partNums = num.slice(3, 7);
console.log(partNums);

/*3 - Dado o array frutas contendo frutas que desejamos comprar na feira:

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.*/

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2,2);
console.log(frutas);

/*4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.*/

const menuPrincipal = ['churrasco', 'lazanha', 'pizza', 'macarrão'];
const menuDeSobremesas = ['sagu', 'pudim', 'torta'];
const menuComplet = menuPrincipal.concat(menuDeSobremesas);
console.log(menuPrincipal);
console.log(menuDeSobremesas);
console.log(menuComplet);

/*5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
Dicas:

comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
você pode resolver usando um for dentro de outro for.*/
const linha1 = ['l1c1', 'l1c2', 'l1c3'];
const linha2 = ['l2c1', 'l2c2', 'l2c3'];
const linha3 = ['l3c1', 'l3c2', 'l3c3'];
const matriz = [linha1, linha2, linha3];

for(let l = 0; l < matriz.length; l++){
    let linha = '';
    for(let c = 0; c < matriz[l].length; c++){
    linha += `${matriz[l][c]} `;
    }
    console.log(linha);
}

//6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

console.log(matriz[1][2]);

//7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

matriz[2].splice(1,1, 15);

for(let l = 0; l < matriz.length; l++){
    let linha = '';
    for(let c = 0; c < matriz[l].length; c++){
    linha += `${matriz[l][c]} `;
    }
    console.log(linha);
}