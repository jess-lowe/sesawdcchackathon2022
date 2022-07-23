// JavaScript source code

const btns = ["cowboyhatbtn", "beaniebtn", "bowbtn", "bunnybtn", "necklacebtn", "sockbtn"];

window.onload = function () {

    // gets the integer point value
    var point = document.getElementById("points");
    const pt = point.textContent.split(" ");
    point = parseInt(pt[0]);

    // calculates which buttons should be locked based on points
    for (let i = point / 10; i < btns.length; i++) {
        document.getElementById(btns[i]).style.backgroundColor = "rgba(0,0,0,.5)";
        document.getElementById(btns[i]).disabled = true;
    }

    // for each button on click the item appears on bean
    for (let i = 0; i < btns.length; i++){
        document.getElementById(btns[i]).onclick = function show() {

            pos = btns[i].search("btn");
            item = btns[i].slice(0, pos);
            var x = document.getElementById(item);
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }

        };
    }

    // changes bean to mr bean after 10 clicks on the bean
    let bean = document.getElementById("bean");

    let count = 0;

    bean.addEventListener("click", function () {
        count += 1;

        if(count == 10){
            bean.style.display = "none";
            document.getElementById("mrbean").style.display = "block";
            document.getElementById("shadow").style.display = "none";
        }
    });

    document.getElementById("mrbean").addEventListener("click", function (){
        bean.style.display = "block";
        document.getElementById("mrbean").style.display = "none";
        document.getElementById("shadow").style.display = "block";
        count = 0;
    })
    
}



