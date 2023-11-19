let gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];


let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

function nextSequence() {
    return Math.floor(Math.random() * 4);
}

let btnTapped = $("#" + randomChosenColour);

$(".btn").on("click", function () {
    let $this = $(this);
    $this.addClass("pressed");
    setTimeout(function () {
        $this.removeClass("pressed");
    }, 100);
});


