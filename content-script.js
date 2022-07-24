let newSeconds = 0;
let pointsFactor = 1;  // calculation: total seconds / pointsFactor = points


// get primary video player element
let video = document.getElementById("primaryVideo");


// interval for points counter
let counterInterval;

// count points every second while lecture plays
video.onplay = () => {
    counterInterval = setInterval(() => {
        console.log(newSeconds);
        newSeconds++;
    }, 1000);
}


// clear counting interval if lecture paused
video.onpause = () => {
    clearInterval(counterInterval);
}

// interval for storing points every 10s
let storePointsInterval = setInterval(storePoints, 10000);

// update (int) storedPoints by adding new points accumulated since last update
function storePoints() {
    let newPoints = Math.round(newSeconds / pointsFactor);  // calculate (rounded) new points accumulated

    // if at least 1 accumulated, update storage and reset newSeconds
    if (newPoints > 0) {
        chrome.storage.local.get(['storedPoints'], function (result) {
            console.log('Value currently is ' + result.storedPoints);

            let storedPoints = newPoints + parseInt(result.storedPoints || 0);

            chrome.storage.local.set({ storedPoints: storedPoints.toString() }, function () {
                console.log('Value is set to ' + storedPoints.toString());
            });
        });
        
        newSeconds = 0;
        // call update points display
    }
}
