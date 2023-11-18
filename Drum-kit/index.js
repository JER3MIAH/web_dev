//* Variables
const listOfAudio = [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3"
];

const buttons = ["w", "a", "s", "d", "j", "k", "l"];


//* Add event listeners for button clicks
let doc = document.querySelectorAll(".drum");

for (let i = 0; i < doc.length; i++) {
    doc[i].addEventListener("click", function () {
        handleButtonClick(this.textContent);
        buttonAnimation(this.textContent);
    });
}


//* Add event listener for keydown events on the document
document.addEventListener("keydown", function (event) {
    // Check if the pressed key corresponds to one of the drum buttons
    const keyPressed = event.key.toLowerCase();
    if (buttons.includes(keyPressed)) {
        handleButtonClick(keyPressed);
        buttonAnimation(keyPressed)
    }
});

function handleButtonClick(buttonText) {
    let buttonIndex = buttons.indexOf(buttonText);
    if (buttonIndex >= 0) {
        let audio = new Audio(listOfAudio[buttonIndex]);
        audio.play();
    }
}


//* Animation
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}