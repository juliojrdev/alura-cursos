let listaNumerosEscolhidos = [];

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //console.log(`Quantidade: ${quantidade}\n De: ${de} até: ${ate}`);    
    if(!quantidade || !de || !ate){
        window.alert('[!] Informe todo os valores para prosseguir.');
    }else{
        if((ate-de+1) < quantidade){
            window.alert('[!] A quantidade de números a serem apresentados não pode ser maior que o intervalo.');
        }else if(de >= ate){
            window.alert('[!] O valo final tem que ser maior que o valor inicial.')
        }else{            
            gerarNumeroAleatorio(quantidade, de, ate);
            escreverNaTela(quantidade);
        }
    }
}

function gerarNumeroAleatorio(qtd, n1, n2) {
    for(let i = 0; i < qtd; i++){

        let numeroAletorio = parseInt(Math.random() * (n2 - n1 + 1)) + n1;

        while(listaNumerosEscolhidos.includes(numeroAletorio)){
            numeroAletorio = parseInt(Math.random() * (n2 - n1 + 1)) + n1; 
        }
        listaNumerosEscolhidos.push(numeroAletorio);
        //console.log(listaNumerosEscolhidos);
    }
}

function escreverNaTela(qtd) {
    let resultado = document.getElementById('resultado');
    let palavraSorteado = listaNumerosEscolhidos.length > 1 ? 'sorteados' : 'sorteado';
    let palavraNumero = listaNumerosEscolhidos.length > 1 ? 'Números' : 'Número';
    resultado.innerHTML = `${palavraNumero} ${palavraSorteado}: ${listaNumerosEscolhidos.join(', ')}`;
    alterarBotao("btn-reiniciar", "container__botao", "reiniciar()"); //habilita botao reiniciar
    alterarBotao("btn-sortear", "container__botao-desabilitado", ""); //desabilita botao sortear
}

function reiniciar(){
    limparCampos();
    alterarBotao("btn-reiniciar", "container__botao-desabilitado", ""); //desabilita o botao reiniciar
    alterarBotao("btn-sortear", "container__botao", "sortear()"); //habilita o botao sortear
    listaNumerosEscolhidos = [];
    quantidade.focus();
}

function limparCampos(){
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    resultado.innerHTML = `Nenhum número sorteado até agora.`;
}

function alterarBotao(id, classe, funcao){
    let botao = document.getElementById(id);
    botao.setAttribute("class", classe);
    botao.setAttribute("onclick", funcao);
}