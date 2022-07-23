// JavaScript source code

window.onload = function () {

    accessoryArray['cowboyhat', 'beanie', 'bow', 'bunny', 'necklace', 'sock'];

    // get prev saved state - load all trues
    for (accessory of accessoryArray) {
        accessoryState = chrome.storage.sync.get([accessory], function (result) {
            console.log('Value ' + accessory + result.accessory);
        });
        if (accessoryState != null) {
            if (accessoryState == true) {
                document.getElementById(accessory).style.display = "block";
            } else {
                document.getElementById(accessory).style.display = "none";
            }
        }
    }

    document.getElementById("cowboyhatbtn").onclick = function show() {

        var x = document.getElementById('cowboyhat');
        if (x.style.display === "none") {
            x.style.display = "block";
            state = true;
        } else {
            x.style.display = "none";
            state = false;
        }
        saveBeanState('cowboyhat', state);
    };

    document.getElementById("beaniebtn").onclick = function show() {

        var x = document.getElementById('beanie');
        if (x.style.display === "none") {
            x.style.display = "block";
            state = true;
        } else {
            x.style.display = "none";
            state = false;
        }
        saveBeanState('beanie', state);

    };

    document.getElementById("bowbtn").onclick = function show() {

        var x = document.getElementById('bow');
        if (x.style.display === "none") {
            x.style.display = "block";
            state = true;
        } else {
            x.style.display = "none";
            state = false;
        }
        saveBeanState('bow', state);

    };

    document.getElementById("bunnybtn").onclick = function show() {

        var x = document.getElementById('bunny');
        if (x.style.display === "none") {
            x.style.display = "block";
            state = true;
        } else {
            x.style.display = "none";
            state = false;
        }
        saveBeanState('bunny', state);

    };

    document.getElementById("necklacebtn").onclick = function show() {

        var x = document.getElementById('necklace');
        if (x.style.display === "none") {
            x.style.display = "block";
            state = true;
        } else {
            x.style.display = "none";
            state = false;
        }
        saveBeanState('necklace', state);

    };

    document.getElementById("sockbtn").onclick = function show() {

        var state;
        var x = document.getElementById('sock');
        if (x.style.display === "none") {
            x.style.display = "block";
            state = true;
        } else {
            x.style.display = "none";
            state = false;
        }
        saveBeanState('sock', state);

    };
}

// save state of bean on click
function saveBeanState(accessory, state) {
    chrome.storage.sync.set({ accessory: state }, function () {
        console.log(accessory + ' is set to ' + state);
    });
}





