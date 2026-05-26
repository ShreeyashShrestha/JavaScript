const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");
let age;
myButton.onclick = function() {
    age = myInput.value; 
    age = Number(age);
    if(age >=100) {
        result.textContent = "You are too old!";
    } else if (age == 0){
        result.textContent = "You are not born yet!";
    }else if(age >= 18){
        result.textContent = "Welcome to the site!";
    }
    else if (age <0){
        result.textContent = "Invalid age!";
    }else{
        result.textContent = "You must be 18+ to enter this site.";
    }
}