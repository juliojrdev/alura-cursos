let cont = 0; 

function alterarStatus(game) {
    let poster = document.querySelector(`li#game-${game} div.dashboard__item__img`);
    let botao = document.querySelector(`li#game-${game} a.dashboard__item__button`);
    let nomeJogo = document.querySelector(`li#game-${game} p.dashboard__item__name`).textContent;  

    if (poster.classList.contains("dashboard__item__img--rented") && botao.classList.contains("dashboard__item__button--return")) {
        let confirma = confirm(`[!] Você tem certeza que deseja DEVOLVER o jogo ${nomeJogo}?`);
        if (confirma) {
            poster.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = 'Alugar';
            cont--; // Decrementa a contagem ao devolver
        }   
    } else {
        let confirma = confirm(`[!] Você tem certeza que deseja ALUGAR o jogo ${nomeJogo}?`);
        if (confirma) {
            cont++; // Incrementa a contagem ao alugar
            let jogo = cont === 1 ? 'jogo' : 'jogos'; // Define 'jogo' ou 'jogos' aqui
            alert(`Você já alugou ${cont} ${jogo}`);
            poster.classList.add("dashboard__item__img--rented");
            botao.classList.add("dashboard__item__button--return");
            botao.textContent = 'Devolver';
        }
    }
}
