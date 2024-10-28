
let listaNomesAmigos = [];
iniciar();

function adicionar() {
    let inputNomeAmigo = document.getElementById('nome-amigo');
    let nomeAmigo = inputNomeAmigo.value;
    salvarNomeAmigoNaLista(nomeAmigo);
    imprimirNomeAmigoNaLista();
    document.getElementById('nome-amigo').value = '';
    document.getElementById('nome-amigo').focus();
    visibilidadeBotoes();
}

function salvarNomeAmigoNaLista(nome) {
    if(listaNomesAmigos.length == 8){
        window.alert('[ ! ] Seu amigo secreto atingiu o limite máximo de participantes.');
    }else if(!nome){
        window.alert('[ ! ] Informe o nome de um amigo para adicionar na lista.');
    }else if(!listaNomesAmigos.includes(nome)){
        listaNomesAmigos.push(nome);
    }else{
        window.alert(`[ ! ] O amigo ${nome} já está na lista.`);
    }    
    console.log(nome);
    console.log(listaNomesAmigos);
}

function imprimirNomeAmigoNaLista() {
    let campoListaAmigosAdiconado = document.getElementById('lista-amigos');
    campoListaAmigosAdiconado.textContent = '';

        for(let i = 0; i < listaNomesAmigos.length; i++){
        campoListaAmigosAdiconado.textContent = `${listaNomesAmigos.join(", ")}`;
    }
}

function embaralharNomes(nomes) {
    // Criar uma cópia do array para não alterar o original
    let copiaNomes = nomes.slice();
    let n = copiaNomes.length;
    // Algoritmo Fisher-Yates para embaralhar
    for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // Trocar os elementos nas posições i e j
        let temp = copiaNomes[i];
        copiaNomes[i] = copiaNomes[j];
        copiaNomes[j] = temp;
    }
    return copiaNomes; // Retorna o array embaralhado
}

function sortear() {    
    let listaNomes = embaralharNomes(listaNomesAmigos);
    let lista = listaNomesAmigos.length;
    let campoListaSorteio = document.getElementById('lista-sorteio');

    if(lista <= 2){
        window.alert('[ ! ] Para que o sorteio seja realizado, deve ter mais do que 2 amigos participando.');
    }else{
        campoListaSorteio.textContent = '';
        for(let i = 0; i < lista; i++){
            let j = i+1;
            if(j >= lista){
                campoListaSorteio.innerHTML += `${listaNomes[i]} -> ${listaNomes[0]}<br>`;
            }else{
                campoListaSorteio.innerHTML += `${listaNomes[i]} -> ${listaNomes[j]}<br>`;
            }
        }
    }
}

function reiniciar() {
    let confirma = window.confirm('[ ! ] Você tem certeza que deseja reiniciar o sorteio?\n Todos os dados enviados serão apagados.');
    if(confirma == true){
        iniciar();
    }
    document.getElementById('nome-amigo').value = '';
    document.getElementById('nome-amigo').focus();
}

function iniciar() {
    document.getElementById('lista-sorteio').textContent = 'O sorteio ainda não foi realizado.';
    document.getElementById('lista-amigos').textContent = 'Nenhum nome foi adicionado.';
    listaNomesAmigos = [];    
    document.getElementById('nome-amigo').value = '';
    document.getElementById('nome-amigo').focus();
    visibilidadeBotoes();
}

function visibilidadeBotoes() {
    if(!listaNomesAmigos.length){
        document.querySelector('.form__link').style.display = "none";
        document.querySelector('.secondary').style.display = "none";
    }else{        
        document.querySelector('.form__link').style.display = "block";
        document.querySelector('.secondary').style.display = "block";
    }
}