let playerScore = 0;
let computerScore = 0;
const maxRounds = 5;

function playGame(userChoice) {
    if (playerScore >= 3 || computerScore >= 3) {
        return;
    }

    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a Draw!";
    } else if ((userChoice === 'stone' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'stone') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You Win!";
        playerScore++;
    } else {
        result = "You Lose!";
        computerScore++;
    }

    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('result').innerText = `Computer chose ${computerChoice}. ${result}`;

    checkWinner();
}

function checkWinner() {
    if (playerScore === 3) {
        document.getElementById('winner').innerText = "Congratulations! You won the Best of 5!";
        document.getElementById('restartButton').style.display = "block";
    } else if (computerScore === 3) {
        document.getElementById('winner').innerText = "Game Over! Computer won the Best of 5!";
        document.getElementById('restartButton').style.display = "block";
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('result').innerText = "";
    document.getElementById('winner').innerText = "";
    document.getElementById('restartButton').style.display = "none";
}
