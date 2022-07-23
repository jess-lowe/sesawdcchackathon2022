// initialise points
let newPoints = 0;
let storedPoints;

if (localStorage.getItem('storedPoints') == null) {
    localStorage.setItem('storedPoints', "0");
}

let interval;

// get primary video player element
let video = document.getElementById("primaryVideo");

video.onplay = (event) => {
    interval = setInterval(function () {
        console.log(newPoints);
        newPoints++;
    }, 1000);
}

video.onpause = (event) => {
    clearInterval(interval);
}

let storePointsInterval = setInterval(storePoints, 10000);

function storePoints() {
    storedPoints = newPoints + parseInt(localStorage.getItem('storedPoints'));
    localStorage.setItem('storedPoints', storedPoints.toString());
    newPoints = 0;
}

