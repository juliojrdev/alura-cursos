const nomesTurmaA = ['João Silva','Maria Santos','Pedro Almeida'];
  
  const nomesTurmaB = ['Carlos Oliveira','Ana Souza','Lucas Fernandes'];

  const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

  console.log(todasAsTurmas);

  function buscarAluno(nomeAluno){
    const aluno = todasAsTurmas.find(aluno => aluno == nomeAluno);
    if(aluno){
        return `Aluno presente na lista`
    }else{
        return `Aluno não encontrado`
    }
  }

  console.log(buscarAluno('João Silva'));