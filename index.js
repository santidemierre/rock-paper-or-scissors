const resultado = ['piedra','papel','tijera'];
var playerScore = 0;
var computerScore = 0;


function rondaDeJuego() {
    
    var btn = document.querySelectorAll('button');
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(playerSelection.id)
        })
    })
    let playerSelection = btn    
    let computerSelection = resultado[Math.floor(Math.random() * resultado.length)] 
    
    console.log(`Elegiste: ${btn}`)
    console.log(`La computadora eligio: ${computerSelection}`)

    let result = ''
 
    if(playerSelection == 'piedra' && computerSelection == 'piedra') {
        result = 'Empate';
    } else if(playerSelection == 'papel' && computerSelection == 'papel') {
        result = 'Empate';
    } else if(playerSelection == 'tijera' && computerSelection == 'tijera') {
        result = 'Empate';
    } else if(playerSelection == 'piedra' && computerSelection == 'tijera') {
        playerScore++
        result = "Ganaste, piedra le gana a tijera";
        console.log(result)
    } else if(btn == 'piedra' && computerSelection == 'papel') {
        computerScore++
        result = "Perdiste, papel le gana a piedra";
        console.log(result)
    } else if(btn == 'papel' && computerSelection == 'piedra') {
        playerScore++
        result = "Ganaste, papel le gana a piedra";
        console.log(result)
    } else if(btn == 'papel' && computerSelection == 'tijera') {
        computerScore++
        result = "Perdiste, tijera le gana a papel";
        console.log(result)
    } else if(btn == 'tijera' && computerSelection == 'papel') {
        playerScore++
        result = "Ganaste, tijera le gana a papel";
        console.log(result)
    } else if(btn == 'tijera' && computerSelection == 'piedra') {
        computerScore++
        result = "Perdiste, piedra le gana a tijera";
        console.log(result)
    } 
    return result;

}

/* function game() {

    for(let i = 0; i < 5; i++) {
        rondaDeJuego();
        console.log(`Puntaje Usuario: ${playerScore}. Puntaje compu: ${computerScore}`);
    } 
    return (playerScore > computerScore) ? "Ganaste capo :)!" : 
    (playerScore < computerScore) ? "Perdiste :(!" : 
    "Empate, intentalo nuevamente!"
} */

/* const gameContador = game()
console.log(gameContador) */

const ronda = rondaDeJuego()