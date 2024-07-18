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

function playAudio(path) {
    const audio = new Audio(path);
    audio.play();
}

for (let i = 0; i < allDrums.length; i++) {
    allDrums[i].addEventListener("click", function () {
        playAudio(audioList[i]);
    });
    allDrums[i].addEventListener("keydown", function (event) {
        const key = event.key.toLowerCase();

        switch (key) {
            case "w":
                playAudio(audioList[0]);
                break;
            case "a":
                playAudio(audioList[1]);
                break;
            case "s":
                playAudio(audioList[2]);
                break;
            case "d":
                playAudio(audioList[3]);
                break;
            case "j":
                playAudio(audioList[4]);
                break;
            case "k":
                playAudio(audioList[5]);
                break;
            case "l":
                playAudio(audioList[6]);
                break;
            default:
                break;
        }
    });
}