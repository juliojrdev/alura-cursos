const estudante = {
    nome: 'José Siva',
    idade: 32,
    cpf: '11111111112',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5548999647566','5551999015269'],
    media: 7.5,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false;
    }
};

console.log(estudante.estaAprovado(7) === true ? 'Aprovado' : 'Reprovado');

