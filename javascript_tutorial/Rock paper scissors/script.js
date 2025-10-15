console.log("Scripts are working");

let myChoice = "";

const choices = ['rock', 'paper', 'scissors'];

console.log(choices.length)



function runGame(myChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];


    const myChoiceDisplay = document.querySelector(".my-choice")
    const computerChoiceDisplay = document.querySelector(".computer-choice")
    const result = document.querySelector(".result")

    myChoiceDisplay.innerHTML = `Me: ${myChoice}`;
    computerChoiceDisplay.innerHTML = `PC: ${computerChoice}`;


    const winningMoves = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };


    if (myChoice === computerChoice) {
        result.innerHTML = "Result: Tie";
    } else if (winningMoves[myChoice] === computerChoice) {
        result.innerHTML = "Result: I win";
    } else {
        result.innerHTML = "Result: Computer wins";
    }

}