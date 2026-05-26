const myButton = document.getElementById("mybutton");
const myLabel = document.getElementById("mylabel");
const max = 6;
const min = 1;
let randomNumber;

myButton.onclick = function() {
    randomNumber = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNumber;
}
