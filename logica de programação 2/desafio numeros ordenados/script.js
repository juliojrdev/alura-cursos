let listaNumeros = [];

for(let i = 0; i < 3;i++){
    let numero = prompt(`Informe o primeiro ${i+1}º valor:`)
    listaNumeros.push(numero)
}

alert(`${listaNumeros.sort()}`)