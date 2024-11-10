const notas = [10, 9.5, 8, 7, 6];

/*
const notasAtualiuzadas = notas.map(function (nota) {
    if (nota <= 9) {
        return nota + 1;
    }else{
        return nota = 10;
    }
})
*/
/*
const notasAtualiuzadas = notas.map((nota) => {
    if (nota <= 9) {
        return nota + 1;
    }else{
        return nota = 10;
    }
})
*/

const notasAtualiuzadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);
// operador ternário verifica se a soma de nota + 1 for marior ou = a 10 (true) ele manter o valor em 10, caso contrario (false), apresenta o resultado da soma de nota + 1.

console.log(notasAtualiuzadas);