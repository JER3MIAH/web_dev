function rollDice() {
    return getRandomInt(6);
}

let player1Roll = rollDice();
let player2Roll = rollDice();

document.querySelector('.img1').src = `images/dice${player1Roll}.png`
document.querySelector('.img2').src = `images/dice${player2Roll}.png`

if (player1Roll > player2Roll) {
    document.querySelector('h1').textContent = "Player 1 Wins!";
} else if (player1Roll < player2Roll) {
    document.querySelector('h1').textContent = "Player 2 Wins!";
} else {
    document.querySelector('h1').textContent = "Its a Tie!";
}

//* Helper functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1
}

