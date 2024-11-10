let tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  function exibirTabuleiro() {
    for (let i = 0; i < tabuleiro.length; i++) {
      console.log(tabuleiro[i].join(' | '));
    }
    console.log('\n');
  }
  
  function fazerMovimento(linha, coluna, jogador) {
    if (tabuleiro[linha][coluna] === '') {
      tabuleiro[linha][coluna] = jogador;
    } else {
      console.log('Posição já ocupada! Tente novamente.');
    }
  }
  
  function verificarVencedor() {
    for (let i = 0; i < 3; i++) {
      if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== '') {
        return tabuleiro[i][0];
      }
    }
  
    for (let i = 0; i < 3; i++) {
      if (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i] && tabuleiro[0][i] !== '') {
        return tabuleiro[0][i];
      }
    }
  
    if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== '') {
      return tabuleiro[0][0];
    }
    if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== '') {
      return tabuleiro[0][2];
    }
  
    return null;
  }
  
  function verificarEmpate() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tabuleiro[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }
  
  function jogar() {
    let jogadorAtual = 'X';
    let vencedor = null;
  
    while (!vencedor && !verificarEmpate()) {
      exibirTabuleiro();
      let linha = prompt(`Jogador ${jogadorAtual}, escolha a linha (0, 1 ou 2):`);
      let coluna = prompt(`Jogador ${jogadorAtual}, escolha a coluna (0, 1 ou 2):`);
      
      fazerMovimento(linha, coluna, jogadorAtual);
  
      vencedor = verificarVencedor();
      
      if (!vencedor) {
        jogadorAtual = (jogadorAtual === 'X') ? 'O' : 'X';
      }
    }
  
    exibirTabuleiro();
    if (vencedor) {
      console.log(`Parabéns! O jogador ${vencedor} venceu!`);
    } else {
      console.log('O jogo terminou em empate!');
    }
  }
  
  jogar();
  