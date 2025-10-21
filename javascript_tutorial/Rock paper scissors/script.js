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

updateScore()


function runGame(myChoice) {
    result.style.color = 'black';
    result.innerHTML = "Result:";
    

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    choicesDisplay.innerHTML = `${myChoice} vs ${computerChoice}`;


    if (myChoice === computerChoice) {
        result.style.color = 'darkblue';
        result.innerHTML = "Result: Tie";
        score.ties++;
        updateScore()
    } else if (winningMoves[myChoice] === computerChoice) {
        result.style.color = 'darkgreen';
        result.innerHTML = "Result: YOU WIN"
        score.wins++;
        updateScore()
    } else {
        result.style.color = 'darkred';
        result.innerHTML = "Result: YOU LOSE"
        score.loses++;
        updateScore()
    }

    localStorage.setItem('score', JSON.stringify(score));
    console.log(localStorage.getItem('score'))
}


function resetScore() {
    [score.loses, score.wins, score.ties] = [0, 0, 0];
    updateScore();
    result.innerHTML = "Result:"
    result.style.color = 'black';
    choicesDisplay.innerHTML = "? vs ?";
    localStorage.removeItem('score');
    console.log(localStorage.getItem('score'))
}

function updateScore() {
    winDisplay.innerHTML = `Wins: ${score.wins}`
    loseDisplay.innerHTML = `Loses: ${score.loses}`
    tieDisplay.innerHTML = `Ties: ${score.ties}`
}