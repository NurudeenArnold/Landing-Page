let headerBackgrounds = document.querySelectorAll(".background");
let imageIndex = 0;

function changeBackground() {
    headerBackgrounds[imageIndex].classList.remove("showing");
    imageIndex++;
    if (imageIndex >= headerBackgrounds.length) {
        imageIndex = 0;
    }
    headerBackgrounds[imageIndex].classList.add("showing");
}
setInterval(changeBackground, 5000);

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX
    +"px; top: " + e.clientY + "px;";
});