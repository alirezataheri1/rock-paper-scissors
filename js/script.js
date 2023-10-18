const $ = document;

const userScorElem = $.querySelector('.score__user');
const computerScoreElem = $.querySelector('.score__computer');
const computerMoveElem = $.querySelector('.computer-move');
const userMoveElem = $.querySelector('.your-move');
const rockImg = $.getElementById('rock');
const paperImg = $.getElementById('paper');
const scissorsImg = $.getElementById('scissors');
const resetGameBtn = $.querySelector('.reset-game');
const playAgainBtn = $.querySelector('.play-again');
const modalParent = $.querySelector('.modal-parent');
const winnerTxt = $.querySelector('.winner-txt');

const movesArray = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
const maxScore = 3; //it means 3 score is winner

function getUserMove(e) {
    let userMove = e.target.dataset.name;

    userMoveElem.innerHTML = 'You: ' + userMove;

    return userMove;
}

function getComputerMove() {
    let randIndex = Math.floor(Math.random() * movesArray.length);
    let computerMove = movesArray[randIndex];

    computerMoveElem.innerHTML = 'Computer: ' + computerMove;

    return computerMove;
}

function determineWinner(e) {
    let userMove = getUserMove(e);
    let computerMove = getComputerMove();

    if (userMove === 'rock') {
        if (computerMove === 'scissors') {
            userScore++;
        } else if (computerMove === 'paper') {
            computerScore++;
        }
    } else if (userMove === 'paper') {
        if (computerMove === 'rock') {
            userScore++;
        } else if (computerMove === 'scissors') {
            computerScore++;
        }
    } else { // userMove === 'scissors'
        if (computerMove === 'paper') {
            userScore++;
        } else if (computerMove === 'rock') {
            computerScore++;
        }
    }

    userScorElem.innerHTML = userScore;
    computerScoreElem.innerHTML = computerScore;

    chekEnd();
}

function chekEnd() {
    if (computerScore === 3 || userScore === 3) {
        gameOver();
    }
}

function gameOver() {
    $.querySelector('.score__user-modal').innerHTML = userScore;
    $.querySelector('.score__computer-modal').innerHTML = computerScore;

    if (userScore === 3) {
        winnerTxt.innerHTML = 'You Won :)';
    } else {
        winnerTxt.innerHTML = 'you lost :(';
    }
    $.querySelector('main').style.filter = 'blur(10px)';
    modalParent.style.display = 'block';
}

function  resetGame() {
    modalParent.style.display = 'none'; 
    $.querySelector('main').style.filter = 'blur(0)';
    
    computerMoveElem.innerHTML = '';
    userMoveElem.innerHTML = '';
    userScore = 0;
    computerScore = 0;
    userScorElem.innerHTML = userScore;
    computerScoreElem.innerHTML = computerScore;
}

rockImg.addEventListener('click', determineWinner);
paperImg.addEventListener('click', determineWinner);
scissorsImg.addEventListener('click', determineWinner);
resetGameBtn.addEventListener('click', resetGame);
playAgainBtn.addEventListener('click', resetGame);























