function getComputerChoice() {
    var computerChoise = Math.floor(Math.random() * 3);
    if (computerChoise == 0) {
        return 'Rock';
    } 

    if (computerChoise == 1) {
        return 'Paper';
    }

    if (computerChoise == 2) {
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Paper")
        || (playerSelection == "Scissor" && computerSelection == "Rock")) {
        return ("You Lose! " + computerSelection + " beats " + playerSelection); 
    }

    if ((playerSelection == "Rock" && computerSelection == "Scissor")
        || (playerSelection == "Scissor" && computerSelection == "Paper")) {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }

    if (playerSelection == computerSelection) {
        return ("We need another round! Your's choise was " + playerSelection + " and computer's choise was " + computerSelection);
    }
}

function game(){
    for (var i = 1; i <= 5; i++) {
        console.log(i + " round");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

const playerSelection = prompt("Enter your choise (Rock, Paper or Scissor):");

game();