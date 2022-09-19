// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function fComputerChoice() {
    let rpsChoice = ['Rock','Paper','Scissors'];
    let randomChoice = Math.floor(Math.random() * rpsChoice.length);
    return rpsChoice[randomChoice];
}
// 
// 
// 
// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function fPlayGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton');
    console.log(rpsButtons);

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => fOnClickRPS(rpsButton.value);
    })

    let reset = document.getElementById('reset');
    reset.onclick = () => fRestart();
}
// 
// 
// 
// ** Calculate who won and show it on the screen **
function fOnClickRPS(playerChoice) {
    const computerChoice = fComputerChoice();
    const score = fResult(playerChoice, computerChoice);
    fShowResults(score, playerChoice, computerChoice)
    console.log({computerChoice});
    console.log({playerChoice});
}
// 
// 
// 
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function fResult(playerChoice, computerChoice) {
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
    
    return score;
}
// 
// 
// 
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function fShowResults(score, playerChoice, computerChoice) {
    let result = document.getElementById('result');
    let playerscore = document.getElementById('score');
    let hands = document.getElementById('hands');

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
    
    playerscore.innerText = `${Number(playerscore.innerText) + score}`;
    hands.innerText = `${playerChoice} VS ${computerChoice}`;
}
// 
// 
// 
// ** endGame function clears all the text on the DOM **
function fRestart() {
    let result = document.getElementById('result');
    let playerscore = document.getElementById('score');
    let hands = document.getElementById('hands');
    result.innerText = '';
    playerscore.innerText = '';
    hands.innerText = '';
}
// 
// 
// 
fPlayGame();

