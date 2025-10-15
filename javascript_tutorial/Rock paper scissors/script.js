const choices = ['rock', 'paper', 'scissors'];
const winningMoves = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};


const choicesDisplay = document.querySelector(".choices-display")
// const computerChoiceDisplay = document.querySelector(".computer-choice")
const result = document.querySelector(".result")
let winCounter = 0;
let loseCounter = 0;
const winDisplay = document.querySelector(".win-display")
const loseDisplay = document.querySelector(".lose-display")


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function runGame(myChoice) {
    result.style.color = 'black';
    result.innerHTML = "Result:";
    
    choicesDisplay.innerHTML = `${myChoice} vs ...`;

    await delay(1000);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    choicesDisplay.innerHTML = `${myChoice} vs ${computerChoice}`;


    await delay(1000);
    if (myChoice === computerChoice) {
        result.style.color = 'black';
        result.innerHTML = "Result: Tie";

    } else if (winningMoves[myChoice] === computerChoice) {
        result.style.color = 'darkgreen';
        result.innerHTML = "Result: YOU WIN"
        winCounter++;
        // await delay(500);
        winDisplay.innerHTML = `Wins: ${winCounter}`;
    } else {
        result.style.color = 'darkred';
        result.innerHTML = "Result: YOU LOSE"
        loseCounter++;
        // await delay(500);
        loseDisplay.innerHTML = `Loses: ${loseCounter}`
    }

}



