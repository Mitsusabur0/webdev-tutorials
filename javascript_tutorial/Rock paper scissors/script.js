const choices = ['rock', 'paper', 'scissors'];
const winningMoves = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};


const choicesDisplay = document.querySelector(".choices-display")
const result = document.querySelector(".result")
const winDisplay = document.querySelector(".win-display")
const loseDisplay = document.querySelector(".lose-display")
const tieDisplay = document.querySelector(".tie-display")
const score = {
    wins: 0,
    loses: 0,
    ties: 0,
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function runGame(myChoice) {
    result.style.color = 'black';
    result.innerHTML = "Result:";
    
    choicesDisplay.innerHTML = `${myChoice} vs ...`;

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    choicesDisplay.innerHTML = `${myChoice} vs ${computerChoice}`;


    if (myChoice === computerChoice) {
        result.style.color = 'darkblue';
        result.innerHTML = "Result: Tie";
        score.ties++;
        tieDisplay.innerHTML = `Ties: ${score.ties}`;
    } else if (winningMoves[myChoice] === computerChoice) {
        result.style.color = 'darkgreen';
        result.innerHTML = "Result: YOU WIN"
        score.wins++;
        winDisplay.innerHTML = `Wins: ${score.wins}`;
    } else {
        result.style.color = 'darkred';
        result.innerHTML = "Result: YOU LOSE"
        score.loses++;
        loseDisplay.innerHTML = `Loses: ${score.loses}`
    }

}


function resetScore() {
    score.loses = 0;
    score.wins = 0;
    score.ties = 0;
    loseDisplay.innerHTML = `Loses: 0`
    winDisplay.innerHTML = `Wins: 0`;
    tieDisplay.innerHTML = `Ties: 0`;
    result.innerHTML = "Result:"
    result.style.color = 'black';
    choicesDisplay.innerHTML = ``;
}