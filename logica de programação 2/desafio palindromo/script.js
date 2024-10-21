function conferir() {
    let texto = document.getElementById('areaTexto').value;

    let textoTratado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');


    if(textoTratado === textoTratado.split('').reverse().join('')){
        alert('[ok] É Palíndromo!!\n\n '+texto.split('').reverse().join(''));
    }else{
        alert("[!] Não é Palíndromo...")
    }   
}