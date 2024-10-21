//função principal que inicia sorteio
function sortear() {
    var quantidade = parseInt(document.getElementById('quantidade').value); 
    var de = parseInt(document.getElementById('de').value);
    var ate = parseInt(document.getElementById('ate').value);
    //pega valores do html

    if (validarEntradas(quantidade, de, ate)) { //chama função sortear do botao no html
        var numerosSorteados = gerarNumerosUnicos(quantidade, de, ate); //chama a função através dos parametros passados e salva na variavel numerosSorteados.
        atualizarResultadoNaTela(numerosSorteados); //chama função atualização de tela com o parametro numerosSorteado
        alternarEstadoBotoes(true); //chama função com parametro "true" para alterar stado dos botos no html mudando cor e ativando funções - se true, desativa o botao sortear e ativa o botao reiniciar
    }
}

//função para validar os campos de entrada no html
function validarEntradas(quantidade, de, ate) {
    if (!quantidade || !de || !ate) { //se algum campo estiver vazio
        alert('[!] Informe todos os valores para prosseguir.');
        return false; // não executa a função sortear()
    }
    if ((ate - de + 1) < quantidade) { //se a quantidade de numero que quer apresentar for maior que o intervalo entre inicio e fim
        alert('[!] A quantidade de números a serem sorteados não pode ser maior que o intervalo.');
        return false; // não executa a função sortear()
    }
    if (de >= ate) { //se o valor final for maior que o valor inicial
        alert('[!] O valor final tem que ser maior que o valor inicial.');
        return false; // não executa a função sortear()
    }
    //caso passe pelas validações anteriores,
    return true; // executando a função sortear() e as funções aninhadas nesta função.
}

//função p/ gerar número aleatório dentro do intervalo
function gerarNumeroAleatorio(n1, n2) {
    return Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
}

//função p/ gera o array onde vai salvar os números aleatórios únicos
function gerarNumerosUnicos(qtd, n1, n2, listaExistente) {
    if (!listaExistente) { //se nãop for passado uma lista~array
        listaExistente = []; //cria um array vazio para receber os numero gerados aleatriamente
    }
    var novoNumero = gerarNumeroAleatorio(n1, n2); //chama função do numero p/ gerar numero aleatrotiro passando os parametros de inicio e fim

    if (listaExistente.includes(novoNumero)) { //se o valor gerado já existir na lista do array...
        return gerarNumerosUnicos(qtd, n1, n2, listaExistente); //tentar novamente executando de novo a função com os parametros
    }

    var novaLista = listaExistente.concat(novoNumero); // cria novo array para passar os valores do array anterior evitando mutação, seguindo conceitos de imutabilidade no paradigma funcional e deixando os valores integros para serem usados fora dessa função se necessario

    return novaLista.length < qtd //confere se a lista já atingiu o tamanho (quantiade de numero que o o usuario que apresentar)
        ? gerarNumerosUnicos(qtd, n1, n2, novaLista) //chama função gerando numero aleatorio e salvando na lista até atingir a quantidade de numero solicitados pelo usuario no campo html
        : novaLista; //apresenta os numeros salvos na lista quando atingir a quantidade
}

//função atualizar tela com números sorteados
function atualizarResultadoNaTela(numeros) { //executa função com o parametro informado dentro da função sortear()
    var resultado = document.getElementById('resultado'); //vincula no script o campo com id resultado no html
    var plural = numeros.length > 1; //se o array tiver mais de um indice, entende que as palavrasa a serem impressas serão no plural
    var palavraSorteado = plural ? 'sorteados' : 'sorteado'; //operador ternario para validar se a palavra será no singular ou plural 
    var palavraNumero = plural ? 'Números' : 'Número'; //operador ternario para validar se a palavra será no singular ou plural 

    resultado.innerHTML = `${palavraNumero} ${palavraSorteado}: ${numeros.join(', ')}`;
    //apresenta o resultado do sorteio no capo com id resultado no html utilizando template strings para concatenar e o metodo .join() para apresentar os valores do array todos juntos, em sequência, separados por virgulas e espaços conforme definido entre parenteses.

}

//função alternar estado dos botões (habilitar/desabilitar) sortear() e reiniciar()
function alternarEstadoBotoes(desabilitarSortear) {
    var btnReiniciar = document.getElementById('btn-reiniciar'); //chama o botão do html com id btn-reiniciar para ser manipulado dentro script .js
    var btnSortear = document.getElementById('btn-sortear'); //chama o botão do html com id btn-sortear para ser manipulado dentro script .js

    if (desabilitarSortear) { //se a função for chamada com o valor/parametro "true"
        btnSortear.className = 'container__botao-desabilitado'; //altera a calsse (.css) do botão sortear mudando de cor para simbolizar como "desabilitado". 
        btnSortear.setAttribute('onclick', ''); //remove a função sortear() do evento onclick para "desabilitar" a fução do botão
        btnReiniciar.className = 'container__botao'; //altera a calsse (.css) do botão reiniciar mudando de cor para simbolizar como "habilitado". 
        btnReiniciar.setAttribute('onclick', 'reiniciar()'); //inclui a função reiniciar() ao evento onclick para "habilitar" a fução do botão
    } else { //senão a função for chamada com o valor/parametro "false" 
        btnSortear.className = 'container__botao'; //altera a calsse (.css) do botão sortear mudando de cor para simbolizar como "habilitado". 
        btnSortear.setAttribute('onclick', 'sortear()'); //adiciona a função sortear() ao evento onclick para "habilitar" a fução do botão
        btnReiniciar.className = 'container__botao-desabilitado'; //altera a calsse (.css) do botão reiniciar mudando de cor para simbolizar como "desabilitado". 
        btnReiniciar.setAttribute('onclick', ''); //remove a função reiniciar() do evento onclick para "desabilitar" a fução do botão
    }
}

//função reiniciar sorteio
function reiniciar() {
    limparCampos(); //chama função limpaCampos, zerando os valores informados nos campos "quantidade", "do numero", "até o numero" e a mensagem contendo o resultado dos numeros sorteados.
    alternarEstadoBotoes(false); //chama função com parametro "false" para alterar stado dos botos no html mudando cor e ativando funções - se false, desativa o botao reiniciar e ativa novamente o botao sortear
}

//função limpar campos e resultados
function limparCampos() {
    document.getElementById('quantidade').value = ''; //apaga o valor digitado pelo usuario do campo "quantidade"
    document.getElementById('de').value = ''; //apaga o valor digitado pelo usuario do campo "de" 
    document.getElementById('ate').value = ''; //apaga o valor digitado pelo usuario do campo "ate" 
    document.getElementById('resultado').innerHTML = 'Nenhum número sorteado até agora.'; //apaga os numeros apresentados no campo resultado e retorna a mensagem 'Nenhum número sorteado até agora.' 
}