const choices = ['rock', 'paper', 'scissors'];

const winningMoves = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0,
};

const choicesDisplay = document.querySelector(".choices-display")
const result = document.querySelector(".result")
const winDisplay = document.querySelector(".win-display")
const loseDisplay = document.querySelector(".lose-display")
const tieDisplay = document.querySelector(".tie-display")
const gameButtons = document.querySelectorAll(".btn-run-game");
const resetButton = document.querySelector(".btn-reset-score");
updateScore()


gameButtons.forEach(button => {
    button.addEventListener('click', () => {
        runGame(button.dataset.decision)
    })
})

resetButton.addEventListener('click', () => {
    resetScore();
})

function runGame(myChoice) {
    result.innerHTML = "Result:";

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    choicesDisplay.textContent = `${myChoice} vs ${computerChoice}`;

    if (myChoice === computerChoice) {
        result.textContent = "Result: Tie";
        score.ties++;
        updateScore()
    } else if (winningMoves[myChoice] === computerChoice) {
        result.textContent = "Result: YOU WIN"
        score.wins++;
        updateScore()
    } else {
        result.textContent = "Result: YOU LOSE"
        score.loses++;
        updateScore()
    }
    localStorage.setItem('score', JSON.stringify(score));
    console.log(localStorage.getItem('score'))
}


function resetScore() {
    [score.loses, score.wins, score.ties] = [0, 0, 0];
    updateScore();
    result.textContent = "Result:"
    choicesDisplay.textContent = "? vs ?";
    localStorage.removeItem('score');
    console.log(localStorage.getItem('score'))
}

function updateScore() {
    winDisplay.textContent = `Wins: ${score.wins}`
    loseDisplay.textContent = `Loses: ${score.loses}`
    tieDisplay.textContent = `Ties: ${score.ties}`
}