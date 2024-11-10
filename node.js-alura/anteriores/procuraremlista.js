const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listas = [alunos, medias];

function localizarAluno(nome) {
    if(!listas[0].includes(nome)) {
        return 'Aluno não encontrado';
    }else{
        let i = listas[0].indexOf(nome);
        return `O aluno ${nome} tem nota ${listas[1][i]}.`;
    }
}

console.log(localizarAluno('Caio'));