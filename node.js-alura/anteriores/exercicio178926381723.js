const numeros = [10, 20, 30, 40, 50];
let soma = 0;

function executaOperacaoEmArray(numero){
    soma += numero;
}

//numeros.forEach(executaOperacaoEmArray);

/* metodo com função callback normal
numeros.forEach(function(numero){
    soma += numero
})

numeros.forEach(function(num){
    console.log(num * num);
})
*/

numeros.forEach(num => console.log(num * num)); 

console.log(soma);