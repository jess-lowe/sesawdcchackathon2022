// JavaScript source code

// NB: js "style" attribute != css file - use class instead for e.g. ".lock"

// // if no item
// if (localStorage.getItem('storedPoints') == null) {
//     localStorage.setItem('storedPoints', "0");
// }

// unhardcode this tmr
let wardrobePointUnlocks = {
  cowboyhatbtn: 0,
  beaniebtn: 1000,
  bowbtn: 2000,
  bunnybtn: 2000,
  necklacebtn: 3000,
  sockbtn: 3000,
  duckbtn: 4000,
  sunglassesbtn: 4000,
  tophatbtn: 5000,
  flowerbtn: 5000,
  scarfbtn: 6000,
  butterflybtn: 6000,
};

window.onload = function () {
    document.getElementById("dot1").onclick = function slide1() {
        let slides1 = document.getElementById("firstSlide");
        let slides2 = document.getElementById("secondSlide");
        let dots1 = document.getElementById("dot1");
        let dots2 = document.getElementById("dot2");

        slides2.classList.add("hideItem");
        dots2.className = dots1.className.replace(" active", "");

        slides1.classList.remove("hideItem");
        dots1.className += " active";
    }

    document.getElementById("dot2").onclick = function slide2() {
        let slides1 = document.getElementById("firstSlide");
        let slides2 = document.getElementById("secondSlide");
        let dots1 = document.getElementById("dot1");
        let dots2 = document.getElementById("dot2");

        slides1.classList.add("hideItem");
        dots1.className = dots1.className.replace(" active", "");

        slides2.classList.remove("hideItem");
        dots2.className += " active";
    }
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
          console.log("NOT ENOUGH POINTS!");
          return;
        }
      }

      toggleWear(document.getElementById(itemId.slice(0, -3))); // this slice is kinda bad
    };
  

  function toggleWear(element) {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
    console.log(element);
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
  });



