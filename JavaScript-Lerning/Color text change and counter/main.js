let titleDiv = document.getElementById('title');
const colors = document.querySelectorAll('.colorBtn');
const timeClicked = {'red': 0,'yellow': 0,'gray': 0}
colors.forEach(color => {
    
    color.onclick = () => {
        titleDiv.style.color = color.value;
        timeClicked[color.value] += 1;
        color.innerText = timeClicked[color.value];
    }
});


function clearGame() {
    timeClicked.red = 0;
    timeClicked.yellow = 0;
    timeClicked.gray = 0;
    colors.forEach(color => {color.innerText = 0});
    titleDiv.style.color = 'white';
}

const clear = document.getElementById('clearBtn');
clear.onclick = () => clearGame();
