// JavaScript source code

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
//   display points based on chrome storage
    chrome.storage.local.get(['storedPoints'], function (result) {
        console.log("here stored points are: " + result.storedPoints);
        document.getElementById("points").innerHTML = (result.storedPoints) + " Points";
        console.log("THIS PART" + document.getElementById("points").innerHTML);
        unlocks();
    });

    function unlocks() {
        for (const itemId in wardrobePointUnlocks) {

            // get points
            var point = document.getElementById("points");    // points text
            console.log("point innerhtml is + " + point.innerHTML);
            const pt = point.textContent.split(" ");
            points = parseInt(pt[0]);

            // initial render
            if (points >= wardrobePointUnlocks[itemId]) {
                document.getElementById(itemId).classList.remove("locked");
            }

            // onclick event
            document.getElementById(itemId).onclick = () => {
                // if item is locked
                if (document.getElementById(itemId).classList.contains("locked")) {
                    // if user has enough points then unlock item
                    if (points >= wardrobePointUnlocks[itemId]) {
                        document.getElementById(itemId).classList.remove("locked");
                    } else {
                        console.log("we are returning because points are " + points)
                        return; // if not  enough points then do nothing
                    }
                }

                // toggle wear if item was unlocked or has now been unlocked
                console.log("about to togglewear")
                toggleWear(document.getElementById(itemId.slice(0, -3)));
            }
        }
    }
    
    function toggleWear(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
      }
    };

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

