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