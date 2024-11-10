const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

let media = 0;

for (let i = 0; i < numeros.length; i++) {
   media += numeros[i];
}

media = media / numeros.length;

console.log(`a média é  igual a ${media}`);
