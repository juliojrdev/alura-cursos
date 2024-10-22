let listaItensCarrinho = [];
let listaNomesProdutosCarrinho = [];
let listaValoresItensCarrinho = [];
let listaQuantidadeItensCarrinho = [];
let valorTotalCompra = 0;


function adicionar() {
    let listaProdutos = document.getElementById('produto');

    let itemSelecionado = listaProdutos.selectedIndex; // capta o índice da opção/produto selecionado
    listaItensCarrinho.push(itemSelecionado); // adiciona o indice n lista carrinho
        
    let nomeProduto = listaProdutos.options[itemSelecionado].text; // capta nome do produto selecionado
    nomeProduto = limpaNomeProduto(nomeProduto);
    listaNomesProdutosCarrinho.push(nomeProduto); // adiciona o nome do produto na lista do carrinho

    let valorProduto = listaProdutos.options[itemSelecionado].value; // capta o valor do produto
    valorProduto = formatarParaMoeda(parseFloat(valorProduto));
    listaValoresItensCarrinho.push(valorProduto); // adiciona na lista de valores do carrinho

    let quantidadeProduto = Number(document.getElementById('quantidade').value); // capta a quantidade de produtos escolhidos
    listaQuantidadeItensCarrinho.push(quantidadeProduto); // adiciona na lista de quantidade de produtos

    // Exibe no console o texto do produto selecionado
    console.log("Índice do produto selecionado: " + itemSelecionado + " " + listaItensCarrinho);    
    console.log("Texto do produto selecionado: " + nomeProduto + " " + listaNomesProdutosCarrinho);
    console.log("Valor do produto selecionado: "+ valorProduto + " " + listaValoresItensCarrinho);
    console.log("Quantidade do produto selecionado: " + quantidadeProduto + " " + listaQuantidadeItensCarrinho);

    addNaLista(itemSelecionado, nomeProduto, valorProduto, quantidadeProduto);
}



function atualizaListaCarrinho(iten, nome, valor, quantia){
    let carrinho = document.querySelector('section.carrinho__produtos__produto');
    carrinho.innerHTML = '';
    for(let i = 0; i < listaItensCarrinho.length; i++){
        addNaLista(iten, nome, valor, quantia);
    }
}
function addNaLista(iten, nome, valor, quantia) {
    let carrinho = document.querySelector('section.carrinho__produtos__produto');
    carrinho.innerHTML += `<br><span class="texto-azul">${quantia}x</span> ${nome} <span class="texto-azul">${valor}</span>`
}

function limpaNomeProduto(produto){
    let indice = produto.indexOf(' - '); // Encontra a posição do delimitador
    let nomeProduto = produto.substring(0, indice); // Extrai a substring até o delimitador
    return nomeProduto
}
