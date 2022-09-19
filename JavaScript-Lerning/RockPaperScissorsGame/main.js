// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function computerChoice() {
    let rpsChoice = ['Rock','Paper','Scissors'];
    let randomChoice = Math.floor(Math.random() * rpsChoice.length);
    return rpsChoice[randomChoice];
}



// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function result(playerChoice, computerChoice) {
    let score;

    if (playerChoice == computerChoice) {
        score = 0;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        score = 1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        score = 1;
    } else {
        score = -1;
    }

    return score
}



// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResults(score, playerChoice, computerChoice) {
    let result = document.getElementById('result');
    switch (score) {
        case -1:
            result.innerText = 'You Lose!';
            break;
        case 1:
            result.innerText = 'You Win!';
            break;
        case 0:
            result.innerText = 'Draw!';
    }
    let playerscore = document.getElementById('score');
    let hands = document.getElementById('hands');
    playerscore.innerText = `${Number(playerscore.innerText) + score}`;
    hands.innerText = `${playerChoice} VS ${computerChoice}`;
}



// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = computerChoice();
    const score = result(playerChoice.value, computerChoice);
    showResults(score, playerChoice.value, computerChoice)
}



// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton');

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton)
    })
}



// ** endGame function clears all the text on the DOM **
function restart() {

}
