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

var submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", function(event){
    event.preventDefault()

    var email = document.getElementById("email").value;
    console.log(email);

    Swal.fire({
        title: "Thank you for signing up for the Valorant beta!",
        text: "Your interest in joining our community is truly appreciated. We'll keep you updated on any developments and look forward to having you join us in the game soon. Stay tuned for more updates!",
        color: "#ffffff",
        icon: "success",
        confirmButtonColor: "#ff3333",
        iconColor: "#ff3333",
        confirmButtonText: "Okay",
        /* footer: '<a href="https://playvalorant.com/en-gb/" target="_blank" style="color: white;">Learn More</a>' */
        footer: '<a href="https://nurudeenportfolio.netlify.app/" target="_blank" style="color: white;">Learn More</a>'
      });
    document.getElementById("email").value = "";
});