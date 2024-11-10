const numeros = [9, 8, 16, 64, 20, 54, 1, 32, 79];

const numerosOrdenados = [];


for(let i = 0; i < numeros.length; i++) {
    let temp1 = 0;
    let temp2 = 0;
    if (numeros[i] > numeros[i+1]) {
        temp1 = numeros[i];
        temp2 = numeros[i+1];
        numeros[i] = temp2;
        numeros[i+1] = temp1;
    }
}

console.log(numerosOrdenados);
