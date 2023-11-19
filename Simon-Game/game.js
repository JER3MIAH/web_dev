let gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];


let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

function nextSequence() {
    return Math.floor(Math.random() * 4);
}

