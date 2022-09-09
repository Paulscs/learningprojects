let player = 0 ;
let pc = 0;
playerSelection = 0;
computerSelection = 0;

const picks = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector('.piedra');
const paperBtn = document.querySelector('.papel');
const scissorsBtn = document.querySelector('.tijeras');
const startBtn = document.querySelector('.rectangle');
const scoreplayer = document.querySelector(".scoreboard__score")
const scorepc = document.querySelector(".scoreboard__score2")

//function to assign a random pick for the pc
function pcpick(){
    const random = Math.floor(Math.random() * picks.length);
        const option = picks[random]
        console.log('Computer chooses: ' + option);
        return option;
}

//player selects 
function playerpick(){
    alert("Take your pick");
    option2.addEventListener("click", )
    const option2 = prompt("Rock, Paper, or Scissors?");
    console.log('You chose: ' + option2);
    return option2;
}

//game function for the 5 rounds
function game(){
    for (let i = 0; i < 50; i++) {
        playRound();
        console.log("You have " + player +" points")
        console.log("The opponent has " + pc +" points" )
        if (player == 3) {
            console.log("You win!")
            break;
        }
        else if (pc == 3) {
            console.log("You lost!")
            break;
        }
    }
}

function playRound() {
    let playerSelection = playerpick();
    let computerSelection = pcpick();
    if (playerSelection == computerSelection) {
        console.log('TIE GAME! Round restarts');
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('player wins!');
        player++
        console.log("Next round stards...")
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('player wins!');
        console.log("Next round stards...")
        player++
    } 
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('player wins!');
        console.log("Next round stards...")
        player++
    } 
    else {
        console.log('You Lose!');
        pc++
    }
}

startBtn.addEventListener("click", game);


