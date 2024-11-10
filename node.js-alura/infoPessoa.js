//'1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:


const pessoa = {
    nome: 'Julio Cesar de Souza Junior',
    idade: 32,
    solteiro: false,
    hobbies: ['Estudar proramação', 'séries', 'carros']
}

function mostrarInfoPessoa(nomePessoa){
    //se o objeto(pessoa) contiver 'nomePessoa' no elemento 'nome' =>
    if(pessoa.nome.includes(nomePessoa)){
        //para cada elemento dentro do objeto pessoa =>
        for (let element in pessoa) {
            //se o elemento que está sendo iterado for do tipo 'objeto/array' faça =>
            if(typeof(pessoa[element]) === 'object'){
                //para cada subelemento dentro do elemento do tupo objeto faça =>
                for (let subelement in pessoa[element]) {
                    //mostre no console o nome do subelemento, o conteúdo do subelemento e o tipo primitivo dele =>
                    console.log(`${subelement}: ${pessoa[element][subelement]} = ${typeof(pessoa[element][subelement])}`);
                }
            //se o elemento que está sendo iterado não for do tipo 'objeto/array' faça =>
            }else{
                //mostre no console o nome do elemento, conteúdo do elemento e o tipo primitivo do elemento =>
                console.log(`${element}: ${pessoa[element]} = ${typeof(pessoa[element])}`);
            }
        }
    }
}

//2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:


//adicionando um novo elemento chamado 'endereco:' no objeto pessoas com subelementos =>
pessoa.endereco = { 
    //subelementos do elemento 'endereco:'
    rua: 'Rua Euclides da Cunha',
    numero: 204,
    cidade: 'Palhoça',
    estado: 'SC'
}

//mostrarInfoPessoa('Julio')

//3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

const pessoas = []

let cadastroPessoa = {
    nome: 'Julio Cesar de Souza Junior',
    idade: 32,
    cidade: 'Palhoça'
}

pessoas.push(cadastroPessoa);

cadastroPessoa = {
    nome: 'Caroline Muller Quoos',
    idade: 31,
    cidade: 'Palhoça'
}

pessoas.push(cadastroPessoa);

cadastroPessoa = {
    nome: 'Toy Muller de Souza',
    idade: 11,
    cidade: 'Palhoça'
}

pessoas.push(cadastroPessoa);

// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

function mostrarListaPessoas(arrayObj) {
    for(let i = 0; i < arrayObj.length; i++ ){
        console.log(`# Informações de usuário ${i+1} : `);
        console.log(`  Nome: ${arrayObj[i]['nome']}`);
        console.log(`  Idade: ${arrayObj[i]['idade']}`);
        console.log(`  Cidade: ${arrayObj[i]['cidade']} \n`);
    }    
}

// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

cadastroPessoa = {
    nome: 'Dona Clotilde',
    idade: 71,
    cidade: 'Vila do Chaves'
}

pessoas.push(cadastroPessoa);


//c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

//mostrarListaPessoas(pessoas);

//d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

function filtrarArrayChaveValor(array, chave, valor){
    for(let i = 0; i < array.length; i++){
        if(array[i][chave].includes(valor)){
            console.log(`# Informações de usuário ${i+1} : `);
            console.log(`  Nome: ${array[i]['nome']}`);
            console.log(`  Idade: ${array[i]['idade']}`);
            console.log(`  Cidade: ${array[i]['cidade']} \n`);
        }
    }
}

//Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.

//filtrarArrayChaveValor(pessoas, 'cidade', 'Pal')

//4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

const calculadora = {
    soma: function(valor1, valor2){
        return valor1 + valor2;
    },
    subtracao: function(valor1, valor2){
        return valor1 - valor2;
    },
    multiplicacao: (valor1, valor2) => valor1 * valor2,
    divisao: (valor1, valor2) => {
        if(valor1 == 0 || valor2 == 0){
            return 'Impossivel dividir um valor por 0';
        }else{
            return valor1 / valor2;
        }
    }
}

//a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
//console.log(calculadora.divisao(8,0));

//b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
calculadora.calcularMedia = function(array){
        const soma = array.reduce((somador, numero) => somador + numero, 0);
        const media = soma / array.length;
        return media;
    };


// console.log(calculadora.calcularMedia([10, 20, 30, 40]));

//5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

const contaBancaria = {
    titular: 'Julio Cesar de Souza Junior',
    saldo: 250,
    depositar: function(valor) {
        let novoSaldo = this.saldo + valor;
        this.saldo = novoSaldo;
        return `Deposito de ${valor} realizado! \n Seu novo saldo é de ${this.saldo}`;
    },
    sacar: function(valor) {
        if(this.saldo >= valor){            
            let novoSaldo = this.saldo - valor;
            this.saldo = novoSaldo;
            return `Saque de ${valor} realizado! \n Seu novo saldo é de ${this.saldo}`;
        }else{
            return 'Impossivel sacar valor mairo que saldo';
        }
    }
}

//console.log(contaBancaria.sacar(4654654654));


//Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

let cliente = {
    nome: 'Julio',
    conta: contaBancaria
}

function mostrarSaldo(nomeObj){
    console.log('Cliente: '+ nomeObj['nome']);
    console.log('Saldo em conta: '+nomeObj.conta['saldo']);

}
    
console.log(contaBancaria.sacar(100));

console.log(contaBancaria.depositar(300));

mostrarSaldo(cliente);



