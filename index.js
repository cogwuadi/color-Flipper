let colors = ["red", "blue", "yellow", "green", "orange"];

let btn = document.getElementById ("btn");
let color = document.querySelector ("#color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber];
    
    color.textContent = colors[randomNumber]
});

function getRandomNumber() {
    return Math.floor(Math.random () * colors.length);
}