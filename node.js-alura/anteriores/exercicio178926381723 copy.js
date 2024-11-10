const numeros = [11, 25, 398, 45, 12, 97, 0, 4, 52, 198];

function confereNumero(numero) {
    let localizou = numeros.includes(numero);
    if(localizou){
        console.log('Numero existente na lista');
    }
    indiceNumero(numero);
}

function indiceNumero(num){
    console.log(`o indice do numero na lista é ${numeros.indexOf(num)}`);
}


console.log(confereNumero(12));