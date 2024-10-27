let listaAmigos = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    
    adicionarNaLista(nomeAmigo);
    mostrarListaAmigos();
}

function adicionarNaLista(nome){
    listaAmigos.push(nome);
}

function mostrarListaAmigos(){
    let listaDeNomes = document.getElementById('lista-amigos');
    listaDeNomes.textContent = `${listaAmigos[0]}`;
    for (let i = 1; i < listaAmigos.length; i++){
        listaDeNomes.textContent += `, ${listaAmigos[i]}`;
        for (let j = 2; j < listaAmigos.length-1; j++){
            listaDeNomes.textContent += `, `;
        }
    }    
}

function sortear(){
    gerarNumeroAleatorio()
    while(listaAmigos.length){
        console.log(gerarNumeroAleatorio());
    }
}

let listaDeNumerosSorteados = [];
function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * listaAmigos.length + 1);
   
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
    }
}


