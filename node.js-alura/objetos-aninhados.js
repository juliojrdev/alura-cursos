const estudante = {
    nome: 'José Siva',
    idade: 32,
    cpf: '11111111112',
    turma: 'JavaScript',
    bolsista: true,
    contato: {
        telefones: [
            '5548999647566',
             '5551999015269'
            ],
        email: 'jose@gmail.com',
    },
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }, {
        rua: 'Rua Jack Bauer',
        numero: '24',
        complemento: 'Apto 24h'
    }]
};

estudante.endereco.push({
rua: 'Dona Clotilde',
numero: '71',
    complemento: ''
})

console.log(estudante.endereco[2]);
