function alterarStatus(game) {
    let poster = document.querySelector(`li#game-${game} div.dashboard__item__img`);
    let botao = document.querySelector(`li#game-${game} a.dashboard__item__button`);
    
    if (poster.classList.contains("dashboard__item__img--rented") &&  botao.classList.contains("dashboard__item__button--return")){
        poster.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = 'Alugar';
    } else {
        poster.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = 'Devolver';
    }
}