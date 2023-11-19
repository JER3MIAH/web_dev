let gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];
const buttonSounds = ["sounds/red.mp3", "sounds/blue.mp3", "sounds/green.mp3", "sounds/yellow.mp3"];


// let randomChosenColour = buttonColours[nextSequence()];
// gamePattern.push(randomChosenColour);

// function nextSequence() {
//     return Math.floor(Math.random() * 4);
// }

// let btnTapped = $("#" + randomChosenColour);

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
    if (buttonIndex) {
        let audio = new Audio(buttonSounds[buttonIndex]);
        audio.play();
    }
}