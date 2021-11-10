const colors = ["green", "red", "yellow", "purple", "orange", "blue"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.textTransform = "uppercase"
});
function getRandom(){
    return Math.floor(Math.random() * colors.length);
}