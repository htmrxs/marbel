scroller = document.getElementById("return-up");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
        scroller.className = "show"
    } else {
        scroller.className = "hide"
    }
};

scroller.className = "hide"
window.addEventListener("scroll", myScrollFunc);