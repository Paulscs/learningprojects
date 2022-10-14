let player = 0 ;
let pc = 0;
option = ""
option2 = ""
playerSelection = 0;
computerSelection = 0;


const picks = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector('.piedra');
const paperBtn = document.querySelector('.papel');
const scissorsBtn = document.querySelector('.tijeras');
const startBtn = document.querySelector('.rectangle');
const scoreplayer = document.querySelector(".scoreboard__score");
const scorepc = document.querySelector(".scoreboard__score2");
const consola = document.querySelector('.textbox');


//function to assign a random pick for the pc
function pcpick(){
    const random = Math.floor(Math.random() * picks.length);
        const option = picks[random]
        console.log('Computer chooses: ' + option);
        return option;
}

//player selects 
function playerpick(){
    consola.innerHTML = "Take your pick";
    rockBtn.addEventListener("click", rockpick);
    paperBtn.addEventListener("click", paperpick)
    scissorsBtn.addEventListener("click", scissorspick);
}

//rock
function rockpick(){
    option2 = "rock";
    consola.innerHTML = "You chose: " + option2;
    return option2
}

//paper
function paperpick(){
    option2 = "paper";
    consola.innerHTML = "You chose: " + option2;
    return option2
}

//scissors
function scissorspick(){
    option2 = "scissors";
    consola.innerHTML = "You chose: " + option2;
    return option2
}


//game function for the 5 rounds
function game(){
    for (let i = 0; i < 5; i++) {
        playRound();
        if (player == 3) {
            consola.innerHTML = "You win!";
            break;
        }
        else if (pc == 3) {
            consola.innerHTML = "You lose!";
            break;
        }
    }
}


function playRound() {
    let playerSelection = playerpick();
    let computerSelection = pcpick();
    console.log(playerSelection);

    if (playerSelection == computerSelection) {
        console.log('TIE GAME! Round restarts');
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        consola.innerHTML = 'player wins!';
        player++
        scoreplayer.innerHTML = player;
        consola.innerHTML += "Next round starts...";
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        consola.innerHTML = 'player wins!';
        player++
        scoreplayer.innerHTML = player;
        consola.innerHTML += "Next round starts...";
    } 
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        consola.innerHTML = 'player wins!';
        player++
        scoreplayer.innerHTML = player;
        consola.innerHTML += " Next round starts...";
    } 
    else {
        consola.innerHTML = 'You lose!';
        pc++
        scorepc.innerHTML = pc;
    }
}

startBtn.addEventListener("click", game);


