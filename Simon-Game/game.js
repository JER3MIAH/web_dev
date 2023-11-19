const buttonColours = ["red", "blue", "green", "yellow"];
const buttonSounds = ["sounds/red.mp3", "sounds/blue.mp3", "sounds/green.mp3", "sounds/yellow.mp3"];

let gamePattern = [];
let userClickedPattern = [];

//* Button sound and animation functions
$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    onButtonClick(this);
    audioPlay(this);
    checkAnswer(userClickedPattern.length - 1);
});

function onButtonClick(element) {
    $(element).addClass("pressed");
    setTimeout(function () {
        $(element).removeClass("pressed");
    }, 100);
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

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    onButtonClick("#" + randomChosenColour);
    let audio = new Audio(buttonSounds[randomNumber]);
    audio.play();
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        console.log("success userClickedPattern: " + userClickedPattern);

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong userClickedPattern: " + userClickedPattern);
        console.log("wrong");
    }
}

let level = 0;
let gameStarted = false;

$(document).on("keydown", function () {
    if (!gameStarted) {
        nextSequence();
        gameStarted = true;
        $("#level-title").text("Level " + level);
    }
});


