let playButton = document.getElementById("playButton");
let playButtonClicksCounter = 0;
let interval;
let secondsElapsed = 0;
let playStatus = true;
let timer = 0;
playButton.addEventListener("click", playOrPause);

/* playButton.addEventListener("click", timer);

function timer() {
    playButtonClicksCounter++;
    interval = setInterval(countTime, 1000);

    console.log("hihi");
}

function countTime() {
    secondsElapsed++;
    console.log(secondsElapsed);
} */


function playOrPause() {
    playStatus = !playStatus;
    if (playStatus) {
        //increment timer every second
        interval = setInterval(function () {
            console.log(secondsElapsed);
            secondsElapsed++;
        }, 1000);

    } else {
        clearInterval(interval);
    }
}
