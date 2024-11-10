const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceitoBi = 8;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceitoBi + notaQuartoBi) / 4;


if(media <= 7){
    media += (media * 0.1);
}

console.log('A média é ' + media.toFixed(2));