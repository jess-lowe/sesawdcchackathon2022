let points = 0;
let storedPoints = 0;


function playOrPause() {
    playStatus = !playStatus;
    if (playStatus) {
        //increment timer every second
        interval = setInterval(function () {
            console.log(secondsElapsed);
            secondsElapsed++;
            points++;
        }, 1000);

    } else {
        clearInterval(interval);
    }
}

let storePointsInterval = setInterval(storePoints, 10000);

function storePoints() {
    storedPoints = points + parseInt(localStorage.getItem('storedPoints'));
    localStorage.setItem('storedPoints', storedPoints.toString);
    points = 0;
}

