const originalHeader = "Press A Key to Start";
let myMoveSet = [];
let correctMoveSet = [];
let gameOver = false;
let level = 0;

const buttonList = ["red", "green", "yellow", "blue"];


$(document).keydown(function () {
    if ($("h1").text() === originalHeader || gameOver) {
        startGame();
    }
});

$(".btn").click(function () {
    if (!gameOver) {
        let buttonId = $(this).attr('id');
        animateButton(this);
        playSound(buttonId);
        myMoveSet.push(buttonId);
        console.log(myMoveSet);
        if (myMoveSet.length === correctMoveSet.length) {
            if (arraysEqual(myMoveSet, correctMoveSet)) {
                startRound();
            } else {
                gameIsOver();
            }
        }
    }
});

function startGame() {
    level = 0;
    startRound();
}

function startRound() {
    gameOver = false;
    level += 1;
    myMoveSet = [];
    let randomNumber = buttonList[getRandomInt(4)];
    showAddedMove(randomNumber);
    correctMoveSet.push(randomNumber);
    changeHeaderText(`Level ${level}`);
}

function showAddedMove(id) {
    setTimeout(() => {
        $(`#${id}`).addClass("pressed");
        setTimeout(() => {
            $(`#${id}`).removeClass("pressed");
        }, 200);
        playSound(id);
    }, 500);
}

function gameIsOver() {
    correctMoveSet = [];
    myMoveSet = [];
    gameOver = true;
    level = 0;
    playSound("wrong");
    changeHeaderText("Game Over, Press Any key to Restart");
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
}

//* ---------------------------- Helper functions ----------------------------

function animateButton(button) {
    $(button).addClass("pressed");
    setTimeout(() => {
        $(button).removeClass("pressed");
    }, 200);
}

function playSound(path) {
    const audio = new Audio(`sounds/${path}.mp3`);
    audio.play();
}

function changeHeaderText(text) {
    $("h1").text(text);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}