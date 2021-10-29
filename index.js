const piedra = document.querySelector('#piedra');
piedra.addEventListener('click', () => {
    game('piedra')
})
const papel = document.querySelector('#papel');
papel.addEventListener('click', () => {
    game('papel')
})
const tijera = document.querySelector('#tijera');
tijera.addEventListener('click', () => {
    game('tijera')
})

const textoResultado = document.querySelector('#textoResultado');
const tiradas = document.querySelector('#tiradas');
const puntosUsuario = document.querySelector('#puntosUsuario');
const puntosComputer = document.querySelector('#puntosComputer');
const todosLosBotones = document.querySelectorAll('.todosLosBotones')

var playerScore = 0;
var computerScore = 0;
var gamePlayed = 0;

function computerPlay() {
    let resultadoComputer = ['piedra', 'papel', 'tijera'];
    let computerSelection = resultadoComputer[Math.floor(Math.random() * resultadoComputer.length)]
    return computerSelection;
}

function rondaDeJuego(playerSelection, computerSelection) {
    
    result = ''
    if(playerSelection === computerSelection) {
        result = 'Empate, sigamos!'
        gamePlayed++
    } else if(playerSelection == 'piedra' && computerSelection == 'tijera') {
        playerScore++
        gamePlayed++
        result = "Punto para vos, piedra le gana a tijera";
        console.log(result)
    } else if(playerSelection == 'piedra' && computerSelection == 'papel') {
        computerScore++
        gamePlayed++
        result = "Punto para la PC, papel le gana a piedra";
        console.log(result)
    } else if(playerSelection == 'papel' && computerSelection == 'piedra') {
        playerScore++
        gamePlayed++
        result = "Punto para vos, papel le gana a piedra";
        console.log(result)
    } else if(playerSelection == 'papel' && computerSelection == 'tijera') {
        computerScore++
        gamePlayed++
        result = "Punto para la PC, tijera le gana a papel";
        console.log(result)
    } else if(playerSelection == 'tijera' && computerSelection == 'papel') {
        playerScore++
        gamePlayed++
        result = "Punto para vos, tijera le gana a papel";
        console.log(result)
    } else if(playerSelection == 'tijera' && computerSelection == 'piedra') {
        computerScore++
        gamePlayed++
        result = "Punto para la PC, piedra le gana a tijera";
        console.log(result)
    } 
    return result;
}   

function disabledButon() {
    todosLosBotones.forEach(elemento => {
        elemento.disabled = true;
    })
}

function game(eleccionDelUsuario) {
    textoResultado.textContent = rondaDeJuego(eleccionDelUsuario,computerPlay());
    tiradas.textContent = 'Numero de tiradas: ' + gamePlayed;
    puntosUsuario.textContent = 'Tus puntos: ' + playerScore;
    puntosComputer.textContent = 'Puntos de la PC: ' + computerScore;

    if(playerScore === 3) {
        textoResultado.textContent = 'GANASTE CAPO MAGIA!'
        disabledButon();
    } else if(computerScore === 3) {
        textoResultado.textContent = 'PERDISTE, FUISTE VENCIDO POR UN PROGRAMA DE COMPUTACIÓN!'
        disabledButon();
    }
    
}
