
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

const PI = 3.14159;
let radius;
let circumference;


document.getElementById('calculate').onclick = function() {
    radius = document.getElementById('input').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    // console.log(`The circumference of the circle is ${circumference}`);
    document.getElementById('myh1').textContent = `The circumference of the circle is ${circumference}` + "cm";

}