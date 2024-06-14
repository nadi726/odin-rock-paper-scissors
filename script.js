let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choiceNum = Math.random() * 100 + 1

    if (choiceNum <= 33) {
        return "rock"
    } else if (choiceNum <= 66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let input = prompt("Do you choose rock, paper or scissors?");
    let choice;
    
    switch(input.toLowerCase()) {
        case "rock":
        case "paper":
        case "scissors":
            choice = input;
            break;
        default:
            choice = null;
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Proceed only for valid values
    if (!humanChoice) {
        console.log("Oops! something went wrong...")
        return;
    }

    let winnerInt = getWinner(humanChoice, computerChoice);
    
    let msg = getRoundMessage(winnerInt);
    console.log("You chose " + humanChoice);
    console.log("The computer chose " + computerChoice);
    console.log(msg);
    
    if (winnerInt === 1) {
        humanScore++;
    } else if (winnerInt === -1) {
        computerScore++;
    }
}


/**
 * Calculates the winner of a rock-paper-scissors game based on the choices.
 *
 * @param {string} humanChoice - The choice made by the human player.
 * @param {string} computerChoice - The choice made by the computer player.
 * @return {number} The result indicating the winner: 1 for human, -1 for computer, 0 for a tie.
 */
function getWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return 0;
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            return -1;
        }
        return 1;
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            return -1;
        }
        return 1;
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            return -1;
        }
        return 1;
    }
}


function getRoundMessage(winnerInt) {
    switch (winnerInt) {
        case 1:
            return "You won!";
        case -1:
            return "You lost!";
        case 0:
            return "It's a tie!";
    }
}