let name = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");


document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;

function playAgain() {
    location.href = "index.html";
    localStorage.clear();
}
