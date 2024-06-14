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
