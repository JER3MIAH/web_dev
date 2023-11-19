const buttonColours = ["red", "blue", "green", "yellow"];
const buttonSounds = ["sounds/red.mp3", "sounds/blue.mp3", "sounds/green.mp3", "sounds/yellow.mp3"];

let gamePattern = [];
let userClickedPattern = [];

//* Button sound and animation functions
$(".btn").on("click", function () {
    onButtonClick(this);
    audioPlay(this);
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
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    onButtonClick("#" + randomChosenColour);
    let audio = new Audio(buttonSounds[randomNumber]);
    audio.play();
}

let level = 0;
let gameStarted = false;



$(document).on("keydown", function () {
    nextSequence()
});


$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});

