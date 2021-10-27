function cumputerPlay() {
    let numero = Math.floor(Math.random() * 3);
    if(numero === 0) {
        return computerSelection = 'Piedra';
    } else if(numero === 1) {
        return computerSelection = 'Papel';
    } else {
        return computerSelection = 'Tijera'
    };
};


function rondaDeJuego(playerSelection, computerSelection) {  

    if(usuarioPuntos.textContent < 5 && compuPuntos.textContent < 5) {
        if(playerSelection === computerSelection) {
            resultados.textContent = 'Empataron!';
        } else if(playerSelection == 'piedra' && computerSelection == 'tijera') {
            resultados.textContent = "Ganaste, piedra le gana a tijera";
            usuarioPuntos.textContent = +usuarioPuntos.textContent + 1; 
            console.log(resultados)
        } else if(playerSelection == 'piedra' && computerSelection == 'papel') {
            resultados.textContent = "Perdiste, papel le gana a piedra";
            compuPuntos.textContent = +compuPuntos.textContent + 1;
            console.log(resultados)
        } else if(playerSelection == 'papel' && computerSelection == 'piedra') {
            usuarioPuntos.textContent = "Ganaste, papel le gana a piedra";
            usuarioPuntos.textContent = +usuarioPuntos.textContent + 1;
            console.log(resultados)
        } else if(playerSelection == 'papel' && computerSelection == 'tijera') {
            compuPuntos.textContent = "Perdiste, tijera le gana a papel";
            compuPuntos.textContent = +compuPuntos.textContent + 1;
            console.log(resultados)
        } else if(playerSelection == 'tijera' && computerSelection == 'papel') {
            usuarioPuntos.textContent = "Ganaste, tijera le gana a papel";
            usuarioPuntos.textContent = +usuarioPuntos + 1;
            console.log(resultados)
        } else if(playerSelection == 'tijera' && computerSelection == 'piedra') {
            compuPuntos.textContent = "Perdiste, piedra le gana a tijera";
            compuPuntos.textContent = +compuPuntos + 1;
            console.log(resultados)
        } 
    }
    
    if(compuPuntos.textContent == 5) {
        resultadoDelJuego.textContent = 'Perdiste el juego! Intentalo nuevamente...';
    } else if (usuarioPuntos.textContent == 5) {
        resultadoDelJuego.textContent = 'Ganaste capo, buen juego!'
    }
}

// Me traigo los botones del html y le agrego un escuchador de eventos
const btn = document.querySelectorAll('.playButton');
btn.forEach((button) => {
    button.addEventListener('click', (evento) => {
        cumputerPlay();
        rondaDeJuego(evento.target.textContent, computerSelection);
    })
});

resetButton.addEventListener('click', () => {
    usuarioPuntos.textContent = 0;
    compuPuntos.textContent = 0;
    resultadoDelJuego.textContent = ""; 
    resultados.textContent = "";
});

// Me traigo del html la clase donde se van a sumar los puntos del usuario
const usuarioPuntos = document.querySelector('.usuarioPuntos')
const compuPuntos = document.querySelector('.compuPuntos')
// Me traigo del html la clase donde voy computando los resultados individuales:
const resultados = document.querySelector('.resultados');
const resultadoDelJuego = document.querySelector('.resultadoDelJuego');