
let listaProdutosCarrinho = [];
let listaValorProdutosCarrinho = [];

function limpar(){
    listaProdutosCarrinho = [];
    listaValorProdutosCarrinho = [];

    mostraProdutosNoCarrinho();
    mostrarValorTotalProdutosCarrinho();
}

function adicionar(){
    let selectProduto = document.getElementById('produto');
    let optionSelecionada = selectProduto.options[selectProduto.selectedIndex];

    //console.log(optionSelecionada); // teste de impressão

    let valorProduto = parseFloat(optionSelecionada.value);

    //console.log(valorProduto); // teste de impressão

    let nomeProduto = optionSelecionada.text.split(' - ');

    //console.log(nomeProduto[0]); // teste de impressão
    //console.log(nomeProduto[1]); // teste de impressão

    let quantidade = parseInt(document.getElementById('quantidade').value);

    //console.log(quantidade); // teste de impressão

    //console.log(`${quantidade}x ${nomeProduto[0]} - ${nomeProduto[1]}`) // teste de impressão
    //let valorTotalProdutoSelecionado = quantidade * valorProduto; // teste de calculo e processamento
    //console.log(`${valorTotalProdutoSelecionado}`) // teste de impressão

    adicionarNoCarrinho(quantidade, nomeProduto[0], nomeProduto[1], valorProduto);
    //console.log(listaProdutosCarrinho); // teste de impressão
    //console.log(listaValorProdutosCarrinho); // teste de impressão
    //console.log(valorTotalCompraNoCarrinho()); // teste de impressão
    
    mostraProdutosNoCarrinho();
    mostrarValorTotalProdutosCarrinho();
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