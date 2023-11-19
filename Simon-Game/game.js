const buttonColours = ["red", "blue", "green", "yellow"];
const buttonSounds = ["sounds/red.mp3", "sounds/blue.mp3", "sounds/green.mp3", "sounds/yellow.mp3"];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let gameStarted = false;

//* ---------------------------------------------------------------
$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    onButtonClick(this);
    audioPlay(this);
    checkAnswer(userClickedPattern.length - 1);
});


$(document).on("keydown", function () {
    if (!gameStarted) {
        nextSequence();
        gameStarted = true;
    }
});


//* Button sound and animation functions
function onButtonClick(element) {
    animate(element, "pressed", 100);
}

function audioPlay(element) {
    let buttonIndex = buttonColours.indexOf($(element).attr("id"));
    if (buttonIndex >= 0) {
        let audio = new Audio(buttonSounds[buttonIndex]);
        audio.play();
    }
}

//* next sequence
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    onButtonClick("#" + randomChosenColour);
    let audio = new Audio(buttonSounds[randomNumber]);
    audio.play();
}

//* ---------------------------------------------------------------
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        let audio = new Audio("sounds/wrong.mp3");
        audio.play();
        animate("body", "game-over", 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}

function animate(element, className, duration) {
    $(element).addClass(className);
    setTimeout(function () {
        $(element).removeClass(className);
    }, duration);
}