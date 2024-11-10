/* 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6
Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa. 
*/

console.log('\n---------------------');
console.log('Resultado Exercíco 1:');
console.log('--------------------- \n');

const pessoa = {
    nome: 'Julio Junior',
    notas: [9, 8, 10, 6, 5],
    calcularMedia: function () {
        let somaNotas = this.notas.reduce((somador, nota) => {
            return somador += nota
        }, 0);
        let media = somaNotas / this.notas.length;
        return media;
    },
    classificarDesempenho: function () {
        const media = this.calcularMedia();
        if(media >= 9){
            return "Desempenho EXCELENTE!";
        }else if(media >= 7.5 || media < 9){
            return "BOM Desempenho!";
        }else if(media >= 6 || media < 7.5){
            return "Desempenho REGULAR.";
        }else{
            return "Desempenho INSUFICIENTE.";
        }
    }
}

console.log(pessoa.calcularMedia());
console.log(pessoa.classificarDesempenho());

/*
2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro.
Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
*/

console.log('\n---------------------');
console.log('Resultado Exercíco 2:');
console.log('--------------------- \n');

const carro = {
    marca: 'Ford',
    modelos: 'Fusion',
    ano: 2016,
    cor: 'Branco Pérola'
}

for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

console.log('\n-----------------\n')

carro.motor = '2.0 Escobuster AWD';
carro.cambio = 'Automático';
carro.rodas = 17;
carro.opcionais = {
    tetoSolar: true,
    escapamentoDuplo: true,
    multimidia: true
}

for (const chave in carro) {
    if(typeof(carro[chave]) === "object"){
        console.log(`${chave}: {`);
        for (const subchave in carro[chave]) {
            console.log(`   ${subchave}: ${carro[chave][subchave]}`)
        }
        console.log('}');
    }else{
        console.log(`${chave}: ${carro[chave]}`);
    }
}

/*
3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.
*/

console.log('\n---------------------');
console.log('Resultado Exercíco 3:');
console.log('--------------------- \n');

const veiculo = {
    marca: 'Ford',
    modelo: 'Fusion',
    ano: 2016,
    cor: 'Branco Pérola',
    ligado: false,
    botaoLigar: function() {
        if(this.ligado){
            return 'O Veiculo já está LIGADO!';
        }else{
            this.ligado = true;
            return 'O Veículo foi LIGADO!';
        }
    },
    botaoDesligar: function() {
        if(this.ligado == false){
            return 'O Veiculo já está DESLIGADO!';
        }else{
            this.ligado = false;
            return 'O Veículo foi DESLIGADO!';
        }
    },
    obterDetalhes: function() {
        const status = this.ligado ? "Veículo Ligado!" : "Veículo Desligado!";
        return `Detalhes do Veívulo:\n  Marca: ${this.marca};\n  Modelo: ${this.modelo};\n  Ano: ${this.ano};\n  Cor: ${this.cor};\n  Status do Motor: ${status}`;
    }
};

/*Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.*/

//chamando função ligar:
console.log(veiculo.botaoLigar);
console.log(veiculo.botaoLigar());
//chamando NOVAMENTE função ligar para testar aviso de erro
console.log(veiculo.botaoLigar);
console.log(veiculo.botaoLigar());
/*//chamando função desligar
console.log(veiculo.botaoDesligar);
console.log(veiculo.botaoDesligar());
//chamando NOVAMENTE função desligar para testar aviso de erro.
console.log(veiculo.botaoDesligar);
console.log(veiculo.botaoDesligar());*/

console.log('\n');

console.log(veiculo.obterDetalhes());

;

/* 
4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
*/

console.log('\n---------------------');
console.log('Resultado Exercíco 4:');
console.log('--------------------- \n')

veiculo.placa = 'ITE8D71';

Object.defineProperty(veiculo, 'placa', {
    enumerable: false  // Isso faz com que a propriedade não seja exibida nos loops
});

//Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

for (const chave in veiculo) {
    if(typeof(veiculo[chave]) !== 'function'){
        console.log(`${chave}: ${veiculo[chave]}`);
        if(typeof(veiculo[chave]) === "object"){
            console.log(`${chave}: {`);
            for (const subchave in veiculo[chave]) {
                console.log(`   ${subchave}: ${veiculo[chave][subchave]}`)
            }
            console.log('}');
        }
    }
}

console.log('\n---------- \n');

//Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

const chavesEnumeradas = Object.keys(veiculo);

console.log(chavesEnumeradas);

console.log('\n---------- \n');
//Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.

console.log('PLACA: ' +veiculo.placa);

//----

console.log('\n---------------------');
console.log('Resultado Exercíco 5:');
console.log('--------------------- \n')

//5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
    //marca (string): marca do novo carro.
    //modelo (string): modelo do novo carro.
    //ano (number): ano de fabricação do novo carro.
    //cor (string): cor do novo carro.

const carroNovo = {
    marca: 'Volkswagem',
    modelo: 'Golf GTI',
    ano: 2019,
    cor: 'Vermelho'
}

//Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

const carroComNovosDetalhes = {...veiculo, ...carroNovo};

//Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

console.log(carroComNovosDetalhes);
console.log('\n-----\n'); // pula linha

//Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.

carroComNovosDetalhes.ano = 2020;

console.log(carroComNovosDetalhes);