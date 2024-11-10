const estudante = {
    nome: 'José Siva',
    idade: 32,
    cpf: '11111111112',
    turma: 'JavaScript',
    bolsista: true,
    telefones: [
        '5548999647566',
        '5551999015269'
        ],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }, 
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: ''
    }]
}

for (let chave in estudante) {
    if(typeof(estudante[chave]) !== 'object' && typeof(estudante[chave]) !== 'function'){
        const texto = `A chave ${chave} tem o valor: ${estudante[chave]}`;
        console.log(texto);
    }
}



