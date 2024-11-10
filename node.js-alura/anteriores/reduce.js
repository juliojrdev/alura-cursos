const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notas) {
    // const somaNotas = notas.reduce((somador, nota) => {
    //     return somador + nota;
    // }, 0);
    
    ;
    //método reduce com callback em arrow function reduzida

    const media = somaNotas / notas.length;
    return media;
}

console.log(calculaMedia(salaJS))
console.log(calculaMedia(salaJava))
console.log(calculaMedia(salaPython))
