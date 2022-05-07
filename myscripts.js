
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if(computerSelection == "rock"){
            alert("Computer chose: " + computerSelection)
            return ("Its a tie!")
        }
        else if(computerSelection == "scissors") {
            alert("Computer chose: " + computerSelection)
            return ("You win! rock beats scissors")  
        }
        else if(computerSelection == "paper") {
            alert("Computer chose: " + computerSelection)
            return ("You lose! paper beats rock")
        }
        else{
            return ("error")
        }
    }
    else if(playerSelection == "scissors"){
        if (computerSelection == "scissors") {
            alert("Computer chose: " + computerSelection)
            return ("Its a tie!") 
        }
        else if(computerSelection == "paper"){
            alert("Computer chose: " + computerSelection)
            return ("You win! Scissors beat paper")
        }
        else if(computerSelection == "rock"){
            alert("Computer chose: " + computerSelection)
            return ("You lose! Rock beats scissors")
        }
        else{
            return ("error")
        }
    }
    else if(playerSelection == "paper"){
        if (computerSelection == "paper") {
            alert("Computer chose: " + computerSelection)
            return ("Its a tie!") 
        }
        else if(computerSelection == "scissors"){
            alert("Computer chose: " + computerSelection)
            return ("You lose! Scissors beat paper")
        }
        else if(computerSelection == "rock"){
            alert("Computer chose: " + computerSelection)
            return ("You win! Paper beats rock")
        }
        else{
            return ("error")
        }
    }
}

const picks = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * picks.length);
const rValue = picks[random]
console.log(rValue)

let playerSelection = prompt("Rock, paper or scissors?")
const computerSelection = rValue;
console.log(playRound(playerSelection, computerSelection));
