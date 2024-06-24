let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const WIN_SCORE = 5;


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

function setDisplay(msg) {
    let displayDiv = document.querySelector("#display");
    let scoreText = `\nComputer: ${computerScore}, Player: ${humanScore}\nRound: ${rounds}`
    displayDiv.textContent = msg + scoreText;

}

function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase()
    // Proceed only for valid values
    if (!humanChoice) {
        console.log("Oops! something went wrong...")
        return;
    }

    let computerChoice = getComputerChoice();
    let winnerInt = getWinner(humanChoice, computerChoice);
    
    rounds++;
    if (winnerInt === 1) {
        humanScore++;
    } else if (winnerInt === -1) {
        computerScore++;
    }

    let msg = "You chose " + humanChoice;
    msg += "\nThe computer chose " + computerChoice;
    msg += "\n" + getRoundMessage(winnerInt);
    setDisplay(msg);
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


function onClick(e) {
    playRound(e.target.textContent)
    
    if (humanScore == WIN_SCORE || computerScore == WIN_SCORE) {
        onGameEnd()
    }
}

function onGameEnd() {
    let msg = "Game ended!"
    if (humanScore > computerScore) {
        msg += "\nYou won the game! Congratulations!";
    } else if (computerScore > humanScore) {
        msg += "\nYou lost! better luck next time...";
    } else {
        msg += "\nIt's a tie! Wow, that's kinda rare";
    }
    setDisplay(msg);

    rounds = 0;
    humanScore = 0;
    computerScore = 0;
}


buttons = document.querySelectorAll("#buttons > button");
buttons.forEach(element => {
    element.addEventListener("click", onClick)
});