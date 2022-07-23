// JavaScript source code

window.onload = function () {

    accessoryArray['cowboyhat', 'beanie', 'bow', 'bunny', 'necklace', 'sock'];

    // if not null get prev saved state - load all trues
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
        } else {
            x.style.display = "none";
        }
        //save state
    };

    document.getElementById("beaniebtn").onclick = function show() {

        var x = document.getElementById('beanie');
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    };

    document.getElementById("bowbtn").onclick = function show() {

        var x = document.getElementById('bow');
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    };

    document.getElementById("bunnybtn").onclick = function show() {

        var x = document.getElementById('bunny');
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    };

    document.getElementById("necklacebtn").onclick = function show() {

        var x = document.getElementById('necklace');
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    };

    document.getElementById("sockbtn").onclick = function show() {

        var x = document.getElementById('sock');
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    };
}

// save state of bean on click
function saveBeanState() {
    if 
    chrome.storage.sync.set({ key: value }, function () {
        console.log('Value is set to ' + value);
    });
}





