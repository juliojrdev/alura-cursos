let listaProdutosCarrinho = [];
let listaValorProdutosCarrinho = [];
mostrarBotaoLimpar();

function limpar(){
    let confirma = confirm('[ ! ] Você tem certeza que deseja limpar todos os produtos do carrinho?')
    if(confirma === true){
        listaProdutosCarrinho = [];
        listaValorProdutosCarrinho = [];

        mostraProdutosNoCarrinho();
        mostrarValorTotalProdutosCarrinho();
        mostrarBotaoLimpar();
    }
}

function adicionar(){    
    let selectProduto = document.getElementById('produto');
    let optionSelecionada = selectProduto.options[selectProduto.selectedIndex];
    let valorProduto = parseFloat(optionSelecionada.value);
    let nomeProduto = optionSelecionada.text.split(' - ');
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if(!valorProduto){
        window.alert('[ ! ] Escolha um produto para adicionar ao carrinho.');
    }else if(!quantidade){
        window.alert(`[ ! ] Informe a quantidade do produto "${nomeProduto[0]}" que deseja adicionar ao carrinho.`);
    }else{
        adicionarNoCarrinho(quantidade, nomeProduto[0], nomeProduto[1], valorProduto);
    
    mostraProdutosNoCarrinho();
    mostrarValorTotalProdutosCarrinho();
    mostrarBotaoLimpar()    
    document.getElementById('quantidade').value = "";
    selectProduto.selectedIndex = 0;
    }
}

function adicionarNoCarrinho(qta, nome, nome2, valor){
    let item = `<span class="texto-azul">${qta}x</span> ${nome} - <span class="texto-azul">${nome2}</span>`;

    listaProdutosCarrinho.push(item);
    listaValorProdutosCarrinho.push(qta*valor);
}

function valorTotalCompraNoCarrinho(){
    let soma = 0;
    for(let i = 0; i < listaValorProdutosCarrinho.length; i++){
        soma += listaValorProdutosCarrinho[i];
    }
    return soma;    
}

function mostraProdutosNoCarrinho(){
    let listaCarrinho = document.querySelector('section.carrinho__produtos__produto');

    listaCarrinho.innerHTML = '';
    if(!listaProdutosCarrinho.length){
        listaCarrinho.innerHTML = `<span class="texto-azul">Não há produtos no carrinho</span>`;
    }else{
        for(let i = 0; i < listaProdutosCarrinho.length; i++){
            listaCarrinho.innerHTML += `${listaProdutosCarrinho[i]}<br>`;
        }
    }
}

function mostrarValorTotalProdutosCarrinho(){
    let spanDoValorTotal = document.querySelector('span#valor-total');
    let valorTotal = valorTotalCompraNoCarrinho();
    let valorFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    spanDoValorTotal.innerHTML = `${valorFormatado}`;
}

function mostrarBotaoLimpar() {
    let botaoLimpar = document.querySelector('button.botao-limpar');
    
    if (!listaProdutosCarrinho.length) {
        botaoLimpar.style.display = "none";
    }else{
        botaoLimpar.style.display = "block";
    }
}

/* ÁREA DE COMENTÁRIOS E TESTES DE IMPRESSÃO PARA VALIDAR FUNÇÕES */

//console.log(listaProdutosCarrinho); // teste de impressão
//console.log(listaValorProdutosCarrinho); // teste de impressão 
//console.log(valorTotalCompraNoCarrinho()); // teste de impressão
//console.log(quantidade); // teste de impressão
//console.log(`${quantidade}x ${nomeProduto[0]} - ${nomeProduto[1]}`) // teste de impressão
//let valorTotalProdutoSelecionado = quantidade * valorProduto; // teste de calculo e processamento
//console.log(`${valorTotalProdutoSelecionado}`) // teste de impressão
//console.log(nomeProduto[0]); // teste de impressão
//console.log(nomeProduto[1]); // teste de impressão
//console.log(valorProduto); // teste de impressão
//console.log(optionSelecionada); // teste de impressão

/* FIM DA ÁREA DE TESTES E COMENTÁRIOS */