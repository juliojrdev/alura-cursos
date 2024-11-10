const notas1 = [10, 9, 8, 7]; //8,5 2,42
const notas2 = [10, 9, 8,]; //9 4,03
const notas3 = [9, 8, 7, 6]; //7,5 2,09

const notasGerais = [notas1, notas2, notas3];

let media = 0;

for (let lin = 0; lin < notasGerais.length; lin++) {
    for (let i = 0; i < notasGerais[lin].length; i++){
        media += notasGerais[lin][i]/notasGerais[lin].length;
    }
}

media = media/notasGerais.length;
console.log(media);