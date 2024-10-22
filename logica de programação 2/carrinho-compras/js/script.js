let carrinho = document.querySelector('section.carrinho__produtos__produto');

let valorTotalCompra = 0;


function adicionar(){   
    carrinho.innerHTML = '';  
    let listaProdutos = document.getElementById('produto');
    let itemSelecionado = listaProdutos.selectedIndex;
    let nomeProduto = listaProdutos.options[itemSelecionado].text;
    let valorProduto = Number(listaProdutos.options[itemSelecionado].value);  
    let quantidadeProduto = Number(document.getElementById('quantidade').value);
    let valorTotalProduto = valorProduto * quantidadeProduto;

    //console.log(quantidadeProduto + "x " + nomeProduto + " no valor de " + formatarParaMoeda(valorProduto) + " - Soma total do item: " + formatarParaMoeda(valorTotalProduto));  
    //addNaLista(nomeProduto, valorProduto, quantidadeProduto);

    valorTotalCompra += valorTotalProduto;

    carrinho.innerHTML += `<br><span class="texto-azul">${quantidadeProduto}x</span> ${limpaNomeProduto(nomeProduto)} <span class="texto-azul">${formatarParaMoeda(valorProduto)}</span>`

    //console.log("Valor total da compra: " + formatarParaMoeda(valorTotalCompra));
} 

function formatarParaMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function limpaNomeProduto(produto){
    let indice = produto.indexOf(' - '); // Encontra a posição do delimitador
    let nomeProduto = produto.substring(0, indice); // Extrai a substring até o delimitador
    return nomeProduto
}

function addNaLista(nome, valor, quantia) {
    carrinho.innerHTML += `<br><span class="texto-azul">${quantia}x</span> ${limpaNomeProduto(nome)} <span class="texto-azul">${formatarParaMoeda(valor)}</span>`
}