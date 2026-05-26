
// console.log(`Hello World!`);
// console.log(`I like burgers`);

// window.alert(`This is an alert!`); 
// window.alert(`I like burger!`);


// // document.getElementById(`myH1`).textContent = `Hello World!`;
// // document.getElementById(`myP`).textContent = `I like burgers!`;

//Variables
// let name = `shreeyash`;

// console.log(name);
// console.log(`My name is ${name}`);
// console.log(typeof name);

// let age = 23;

// console.log(typeof age);
// console.log(age);
// console.log(`my age is: ${age}`);

// let gpa = 3.5;

// console.log(gpa);
// console.log(typeof gpa);
// console.log(`my gpa is ${gpa}`);

// let isStudent = true;

// console.log(typeof isStudent);
// console.log(isStudent);
// console.log(`shreeyash is a student: ${isStudent}`);

// let name = `shreeyash`;
// let age = 23;


// document.getElementById(`p1`).textContent = `My name is ${name}`;
// document.getElementById(`p2`).textContent = `My age is ${age} years old`;

// Arithmetic operators

//let students = 30;

//students = students + 1;
//students += 2;
//students++;

//students = students - 1;
//students -= 2;
//students --;

//students = students *2;
//students *=2;

//students = students /2;
//students /=2;

//students = students ** 2;
//students **= 2;

//students = students % 2;
//students %= 2;


//console.log(students);

// User input

// let username = window.prompt(`What is your username?`);

// console.log(`Your username is ${username}`);

// let username;

// document.getElementById(`mySubmit`).onclick = function () {
//     username = document.getElementById(`myText`).value;
//     console.log(username);
//     document.getElementById("myH1").textContent = `Welcome, ${username}!`;
// }

// const PI =3.14159;
// let radius;
// let circumference;

// radius = window.prompt(`Enter the radius of the circle: `);
// circumference = 2 * PI * radius;

// console.log(`The circumference of the circle is ${circumference}`);

// const PI = 3.14159;
// let radius;
// let circumference;


// document.getElementById('calculate').onclick = function() {
//     radius = document.getElementById('input').value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     // console.log(`The circumference of the circle is ${circumference}`);
//     document.getElementById('myh1').textContent = `The circumference of the circle is ${circumference}` + "cm";

// }

//Math object
// console.log(Math.PI);
// console.log(Math.E);

// let x = 3.6;
// let y = 2;
// let z =4;

// // z = Math.round(x);
// // z= Math.floor(x);
// // z= Math.ceil(x);
// // z= Math.trunc(x);
// // z=Math.pow(x,y);
// // z= Math.sqrt(x);
// // z=Math.log(x);
// // z=Math.abs(x);

// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);

// // console.log(z);
// console.log(max);
// console.log(min);

// Random number generator

// let randomNum = Math.random();
// console.log(randomNum);

// let randomNum =Math.floor(Math.random() * 6) + 1;
// console.log(randomNum);

// If statements

// let age = -1;
// if (age >=100) {
//     console.log("You're too old");
// }else if (age == 0) {
//     console.log("You're not born yet");
// }else if (age >=18) {
//     console.log("You can enter this site");
// }else if(age < 0 ){
//     console.log("Invalid age");
// }else {
//     console.log("You must be 18+ to enter this site");
// }

// .checked property
// const mycheckbox = document.getElementById("mycheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick= function(){
//     if (mycheckbox.checked){
//         subResult.textContent="You are subscribed";
//     }else{
//         subResult.textContent="You are not subscribed";
//     }
//     if (visaBtn.checked){
//         paymentResult.textContent="You are paying with visa card";
//     }else if (mastercardBtn.checked){
//         paymentResult.textContent="You are paying with mastercard";
//     }else if (paypalBtn.checked){
//         paymentResult.textContent="You are paying with paypal account";
//     }else{
//         paymentResult.textContent="You have not selected a payment method";
//     }
// }

// ternary operator

// let age = 17
// let message = age >=18 ? "You can enter this site" : "You must be 18+ to enter this site";

// console.log(message);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);