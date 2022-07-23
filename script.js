// JavaScript source code

// NB: js "style" attribute != css file - use class instead for e.g. ".lock" 

// // if no item
// if (localStorage.getItem('storedPoints') == null) {
//     localStorage.setItem('storedPoints', "0");
// }

// unhardcode this tmr
let wardrobePointUnlocks = {
    "cowboyhatbtn": 1000,
    "beaniebtn": 2000,
    "bowbtn": 3000,
    "bunnybtn": 4000,
    "necklacebtn": 5000,
    "sockbtn": 6000,
};

window.onload = function() {
    for (const itemId in wardrobePointUnlocks) {
        document.getElementById(itemId).onclick = () => {
            if (document.getElementById(itemId).classList.contains("locked")) {
                let points = localStorage.getItem('storedPoints');
                console.log("POOR");
            }

            toggleWear(document.getElementById(itemId.slice(0, -3)));
        }
    }

//     // listen for clicks on wardrobe div
// document.getElementById("wardrobe").onclick = (event) => {

//     // if click wasn't on a grid item, return
//     console.log(event.target.classList);
//     if (!(event.target.tagName == "BUTTON" || event.target.tagName == "IMG")) {
//         return;
//     }

//     // if item is currently locked
//     if (event.target.classList.contains("locked")) {
//         console.log("LOCKED UR POOR AF");
//         // check if we can unlock it
//         // if we can then remove class, store result in local storage
//         // otherwise return i guess...
//     }
//     // toggleWear(event.target.classList.contains("hidden"));
// };

// // document.getElementById("cowboyhatbtn").onclick = (event) => {
// //     // if item is currently locked
// //     if (event.target.classList.includes("locked")) {
// //         // check if we can unlock it
// //         // if we can then remove class, store result in local storage
// //         // otherwise return i guess...
// //     }
// //     toggleWear(event.target.classList.includes("hidden"));
// // };

// // document.getElementById("beaniebtn").onclick = function show() {

// //     var x = document.getElementById('beanie');
// //     console.log("HELLO")
// //     if (x.style.display === "none") {
// //         x.style.display = "block";
// //         } else {
// //         x.style.display = "none";
// //     }
    
// // };

// // document.getElementById("bowbtn").onclick = function show() {

// //     var x = document.getElementById('bow');
// //     // if (x.style.display === "none") {
// //     //     x.style.display = "block";
// //     //     } else {
// //     //     x.style.display = "none";
// //     // }
    
// // };

// // document.getElementById("bunnybtn").onclick = function show() {

// //     var x = document.getElementById('bunny');
// //     // if (x.style.display === "none") {
// //     //     x.style.display = "block";
// //     //     } else {
// //     //     x.style.display = "none";
// //     // }
    
// // };

// // document.getElementById("necklacebtn").onclick = function show() {

// //     var x = document.getElementById('necklace');
// //     // if (x.style.display === "none") {
// //     //     x.style.display = "block";
// //     //     } else {
// //     //     x.style.display = "none";
// //     // }
    
// // };

// // document.getElementById("sockbtn").onclick = function show() {

// //     var x = document.getElementById('sock');
// //     // if (x.style.display === "none") {
// //     //     x.style.display = "block";
// //     //     } else {
// //     //     x.style.display = "none";
// //     // }
    
// // };


    function toggleWear(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden")
        }
        console.log(element)
    }
}


