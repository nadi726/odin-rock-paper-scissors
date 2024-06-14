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
    let input = prompt("Do you choose rock, paper or scissors? (1-3)");
    let choice;
    
    switch(input) {
        case "1":
            choice = "rock";
            break;
        case "2":
            choice = "paper";
            break;
        case "3":
            choice = "scissors";
            break;
        default:
            choice = null;
    }

    return choice;
}