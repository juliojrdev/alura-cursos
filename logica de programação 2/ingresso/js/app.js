let qtaPista = 100;
let qtaSuperior = 200;
let qtaInferior = 400;
atualizaQuantidadeDisponivel();

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let tipoIngresso = tipo.options[tipo.selectedIndex].value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    if(!tipoIngresso) {
        alert(`[ ! ] Selecione qual o tipo de ingresso que deseja comprar.`); 
    }else if(!quantidade) {
        alert(`[ ! ] Informe a quantidade de ingressos que deseja comprar.`); 
    }else{
        calculoIngressos(tipoIngresso, quantidade);
        atualizaQuantidadeDisponivel();
        document.getElementById('qtd').value = '';
        tipo.selectedIndex = 0;
    }
}

function calculoIngressos(tipoIngresso, quantidade) {
    if(tipoIngresso == 'pista') {
        if(quantidade <= qtaPista){
            qtaPista -= quantidade;
            alert(`[ OK ] Compra realizada com sucesso!`); 
        }else
        alert(`[ ! ] Quantidade de ingresso disponível para Pista é menor do que ${quantidade}`);  
    }else if(tipoIngresso == 'superior') {
        if(quantidade <= qtaSuperior){
            qtaSuperior -= quantidade;
            alert(`[ OK ] Compra realizada com sucesso!`); 
        }else
        alert(`[ ! ] Quantidade de ingresso disponível para Cadeira Inferior é menor do que ${quantidade}`); 
    }else if(tipoIngresso == 'inferior') {
        if(quantidade <= qtaInferior){
            qtaInferior -= quantidade;
            alert(`[ OK ] Compra realizada com sucesso!`); 
        }else
        alert(`[ ! ] Quantidade de ingresso disponível para Cadeira Inferior é menor do que ${quantidade}`);
    }
}

function atualizaQuantidadeDisponivel(){    
    document.getElementById('qtd-pista').textContent = `${qtaPista}`;
    document.getElementById('qtd-superior').textContent = `${qtaSuperior}`;
    document.getElementById('qtd-inferior').textContent = `${qtaInferior}`;
}


