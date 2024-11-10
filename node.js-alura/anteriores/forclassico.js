const notas = [10, 8.5, 5, 6.5, 8, 7.5];
let linha1 = '';
let linha2 = '';

for(let j = 0; j < notas.length; j++) {
    linha1 += `| i${j}  `;
    linha2 += `| ${notas[j]}  `;      
}

linha1 += `|`;
linha2 += `|`;

console.log(linha1);
console.log(linha2);