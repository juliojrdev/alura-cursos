let cont = 0; 

function alterarStatus(game) {
    let poster = document.querySelector(`li#game-${game} div.dashboard__item__img`);
    let botao = document.querySelector(`li#game-${game} a.dashboard__item__button`);
    let nomeJogo = document.querySelector(`li#game-${game} p.dashboard__item__name`).textContent;  
    
    if (poster.classList.contains("dashboard__item__img--rented") &&  botao.classList.contains("dashboard__item__button--return")){
        let confirma = confirm(`[!]Você tem certeza que deseja DEVOLVER o jogo ${nomeJogo}?`);
        if(confirma == true){
            poster.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = 'Alugar';
        }   
    } else {
        let confirma = confirm(`[!]Você tem certeza que deseja ALUGAR o jogo ${nomeJogo}?`);
        if(confirma == true){
            cont++;
            let jogo = cont > 1 ? 'jogos' : 'jogo';
            alert(`Você já alugou ${cont} ${jogo}`);
            poster.classList.add("dashboard__item__img--rented");
            botao.classList.add("dashboard__item__button--return");
            botao.textContent = 'Devolver';
        };
        
    }
}
