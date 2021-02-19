document.addEventListener("DOMContentLoaded", function(event) {
var thebtn = document.getElementById("btn");
var pageBody = document.getElementById("theBody");
thebtn.addEventListener("click", function clicked() {
    alert("Haa!!! You Clicked. Now click OK");
    if (pageBody.className == "light") {
        pageBody.className = "dark";
    }
    else {
        pageBody.className = "light";
    }
})
});
