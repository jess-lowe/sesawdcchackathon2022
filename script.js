// JavaScript source code

// NB: js "style" attribute != css file - use class instead for e.g. ".lock" 

// // if no item
// if (localStorage.getItem('storedPoints') == null) {
//     localStorage.setItem('storedPoints', "0");
// }

// unhardcode this tmr
let wardrobePointUnlocks = {
    "cowboyhatbtn": 0,
    "beaniebtn": 2000,
    "bowbtn": 3000,
    "bunnybtn": 4000,
    "necklacebtn": 5000,
    "sockbtn": 6000,
};

window.onload = function() {
    // render based on localstorage of unlocks ??

    for (const itemId in wardrobePointUnlocks) {
        document.getElementById(itemId).onclick = () => {
            // if item is locked
            if (document.getElementById(itemId).classList.contains("locked")) {
                // if user has enough points then unlock item
                var point = document.getElementById("points");
                const pt = point.textContent.split(" ");
                points = parseInt(pt[0]);
                console.log("points are" + localStorage.getItem('storedPoints'));
                if (points >= wardrobePointUnlocks[itemId]) {
                    document.getElementById(itemId).classList.remove("locked");
                } else {
                    console.log("NOT ENOUGH POINTS!");
                    return;
                }
            }

            toggleWear(document.getElementById(itemId.slice(0, -3)));   // this slice is kinda bad
        }
    }

    let pointsInterval = setInterval(displayPoints, 10000);

    function displayPoints(){
        chrome.storage.local.get(['storedPoints'], function (result) {
            console.log('Value currently is ' + result.storedPoints);
            document.getElementById("points").innerHTML = result.storedPoints + " Points";

        });
    }
    
    function toggleWear(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden")
        }
        console.log(element)
    }   
    
    // changes bean to mr bean after 10 clicks on the bean
    let bean = document.getElementById("bean");

    let count = 0;

    bean.addEventListener("click", function () {
        count += 1;

        if (count == 10) {
            bean.style.display = "none";
            document.getElementById("mrbean").style.display = "block";
            document.getElementById("shadow").style.display = "none";
        }
    });

    document.getElementById("mrbean").addEventListener("click", function () {
        bean.style.display = "block";
        document.getElementById("mrbean").style.display = "none";
        document.getElementById("shadow").style.display = "block";
        count = 0;
    })

}



