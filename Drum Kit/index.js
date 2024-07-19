var allDrums = document.querySelectorAll(".drum");
const audioList = [
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3",
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
];

const keys = ["w", "a", "s", "d", "j", "k", "l"]

function playAudio(path) {
    const audio = new Audio(path);
    audio.play();
}

function animateButton(key) {
    document.querySelector("." + key).classList.add('pressed');

    setTimeout(() => {
        document.querySelector("." + key).classList.remove('pressed');
    }, 200);
}

for (let i = 0; i < allDrums.length; i++) {
    allDrums[i].addEventListener("click", function () {
        playAudio(audioList[i]);
        animateButton(`${keys[i]}`);
    });
    document.addEventListener("keydown", function (event) {
        const key = event.key.toLowerCase();

        switch (key) {
            case "w":
                playAudio(audioList[0]);
                animateButton("w");
                break;
            case "a":
                playAudio(audioList[1]);
                animateButton("a");
                break;
            case "s":
                playAudio(audioList[2]);
                animateButton("s");
                break;
            case "d":
                playAudio(audioList[3]);
                animateButton("d");
                break;
            case "j":
                playAudio(audioList[4]);
                animateButton("j");
                break;
            case "k":
                playAudio(audioList[5]);
                animateButton("k");
                break;
            case "l":
                playAudio(audioList[6]);
                animateButton("l");
                break;
            default:
                break;
        }
    });
}