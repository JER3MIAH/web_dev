let doc = document.querySelectorAll(".drum");

for (let i = 0; i < doc.length; i++) {
    doc[i].addEventListener("click", onClick);
}

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

function onClick() {
    let buttonIndex = buttons.indexOf(this.textContent);

    if (buttonIndex >= 0) {
        let audio = new Audio(listOfAudio[buttonIndex]);
        audio.play();
    }
}

