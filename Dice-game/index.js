let rand1 = (Math.random() * 6);
let rand2 = (Math.random() * 6);
const randomNumber1 = Math.floor(rand1) + 1;
const randomNumber2 = Math.floor(rand2) + 1;

const diceRoll1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

const diceRoll2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins";
} else {
    document.querySelector("h1").textContent = "It's a tie!";
}