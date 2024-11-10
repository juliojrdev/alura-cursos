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

const chavesObjetos = Object.keys(estudante);
console.log(chavesObjetos);

if(!chavesObjetos.includes('endereco')){
    console.log('Sem endereço')
}