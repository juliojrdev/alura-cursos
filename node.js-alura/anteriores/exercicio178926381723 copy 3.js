// 5 - Considere um array de números inteiros. Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

const num = [6, 9, 12, 15, 18, 21]; 


num.forEach(function (algoritimo) {
   algoritimo *= 3; 
   console.log(algoritimo);
});

function encontrarIndice(value) {
    let indice = num.indexOf(value);
    return indice; 
}

console.log(encontrarIndice(18));