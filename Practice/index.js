
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

//Switch statement

// let day = "pizza";

// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }

//String methods

// let username = "shreeyash   ";

// console.log(username.charAt(0));
// console.log(username.indexOf("s"));
// console.log(username.lastIndexOf("s"));
// console.log(username.length);

// let name = "shreeyash      ";
// console.log(name.length);
// name = name.trim();
// console.log(name);
// console.log(name.length);

// let username = "shreeyash";
// let result = username.startsWith(" ");
// let correct;
// console.log(result);
// console.log(username.length);

// if (result) {
//     correct = username.trim();
//     console.log(correct);
//     console.log(correct.length);
// }else{
//     console.log(username.length);
//     console.log(username);
// }

// let name = "shreeyash  ";
// let result = name.endsWith(" ");
// console.log(name.length);
// if (result) {
//     name = name.trim();
//     console.log(name);
//     console.log(name.length);
// }else{
//     console.log(name);
//     console.log(name.length);
// }

// let name = "shreeyash shrestha";
// let result = name.includes(" ");
// console.log(result);

// let phonenumber = "123-4456-789";
// let phonenumber2 = phonenumber.replaceAll("-","");
// console.log(phonenumber2);

// let phonenumber = "123-4456-789";
// let phonenumber2 = phonenumber.padStart(15,"0");
// console.log(phonenumber2);

// let phonenumber = "123-4456-789";
// let phonenumber2 = phonenumber.padEnd(15,"0");
// console.log(phonenumber2);

// String slicing

// let name = "shreeyash shrestha";
// let firstname = name.slice(0,9);
// console.log(firstname);

// let lastname = name.slice(10);
// console.log(lastname);

// const fullname = "shreeyash shrestha";
// let firstname = fullname.slice(0,fullname.indexOf(" "));
// console.log(firstname);

// let lastname = fullname.slice(fullname.indexOf(" ")+1);
// console.log(lastname);

// const email = "shreeyash@example.com";
// let username = email.slice(0, email.indexOf("@"));
// console.log(username);

// let domain = email.slice(email.indexOf("@")+1);
// console.log(domain);

// No method chaining

// let username = window.prompt("Enter your username: ");

// username = username.trim();
// let letter = username.charAt(0)
// letter = letter.toUpperCase();

// let extrachar = username.slice(1);
// extrachar = extrachar.toLowerCase();

// username = letter + extrachar;

// console.log(username);        

// Method chaining

// let username = window.prompt("Enter your username: ");
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

//logical operators
// let time =26;

// if (time >=1 && time <=12){
//     console.log("Good morning");
// }else if(time > 12 && time <=15){
//     console.log("Good afternoon");
// }else if (time >15 && time <=18){
//     console.log("Good evening");
// }else if (time >18 && time <=24){
//     console.log("Good night");
// }else{
//     console.log("Invalid time");
// }

// strict equality operator

// const PI = 3.14159;

// if(PI === "3.14159"){
//     console.log("This is Pi");
// }else{
//     console.log("This is not Pi");
// }

//While loop

// let username = "";
// while (username ===""){
//     console.log("username cannot be empty");
// }

// let username = "";

// while (username ==="" || username === null){
//     username = window.prompt("Enter your username: ");
// }
// console.log(`Your username is ${username}`);

// do while loop
// let username;

// do{
//     username = window.prompt("Enter your username: ");
// }while (username === "" || username === null);
// console.log(`Your username is ${username}`);

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn){
//     username = window.prompt("Enter your username: ");
//     password = window.prompt("Enter your password: ");

//     if (username === "admin" && password === "password123"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     } else {
//         console.log("Invalid username or password. Please try again.");
//     }
// }

// For loop

// for(let i = 0; i <=3; i++){
//     console.log(i);
// }

// for(let i = 10; i >=0; i--){
//     console.log(i);
// }
// console.log("Happy New Year!");

//Contine

// for (let i = 1; i <=20; i++){
//     if( i == 13){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

// for( let i = 1; i <=20; i++){
//     if(i ==13){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

// const min_num = 1;
// const max_num = 100;
// const answer = Math.random() * (max_num - min_num +1) + min_num;

// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`Guess a number between ${min_num} - ${max_num}: `);
//     guess = Number(guess);

//     if (isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }else if (guess < min_num || guess > max_num){
//         window.alert("Please enter a valid number");
//     }else{
//         attempts++;
//         if (guess < answer){
//             window.alert("Too low! Try again.");
//         }else if (guess > answer){
//             window.alert("Too high! Try again.");
//         }else{
//             window.alert(`Congratulations! You guessed the number in ${attempts} attempts!`);
//             running = false;
//         }
//     }
// }

// Function

// function happybirthday(username){
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday ${username}`)
// }

// happybirthday("Shreeyash");
// happybirthday("Alice");

// function add(num1, num2){
//     let sum = num1 +num2;
//     return sum;
// }
// console.log(add(3,4));

// function sub(num1, num2){
//     let difference = num1 - num2;
//     return difference;
// }

// console.log(sub(10,5));

// VARIABLE SCOPE

// let x = 10;

// function1();

// function function1(){
//     let x = 5;
//     console.log(x);
// }

// function function2(){
//     let x= 12;
//     console.log(x);
// }

// ARRAYs

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// fruits.push("grape");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift("grape");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// let numOfFruits = fruits.length;
// console.log(numOfFruits);

// let index = fruits.indexOf("orange");
// console.log(index);

// let fruits = ["apple", "banana", "orange"];

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// fruits.sort();
// console.log(fruits);

// fruits.sort().reverse();
// console.log(fruits);

//SPREAD OPERATOR

// let num = [1,2,3];

// let minNum = Math.min(...num);
// console.log(minNum);

// let maxNum = Math.max(...num);
// console.log(maxNum);

// let username = "shreeyash shrestha";
// let letters = [...username];
// console.log(letters);

// let letters2 = [...username].join("-");
// console.log(letters2);

// let fruits = ["apple", "banana", "orange"];
// let vegetables = ["carrot", "broccoli", "spinach"];

// let food = [...fruits, ...vegetables, "bread", "pizza", "burger"];

// console.log(food);

//REST PARAMETER

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "pasta";
// const food4 = "salad";
// const food5 = "sushi";

// function openfridge(...foods){
//     console.log(...foods);
// }

// openfridge(food1, food2, food3, food4, food5);

// function getfood(...foods){
//     return foods;
// }

// const foods = getfood(food1, food2, food3, food4, food5);
// console.log(foods);

//Random password generator

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     if(length <=0){
//         return `(password length must be atleast 1)`;
//     }
//     if(allowedChars.length === 0){
//         return `(at least 1 set of characters needs to be selected)`;
//     }

//     for(let i = 0; i< length; i++){
//         const randomIndex = Math.floor(Math.random()* allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
//     return password;
// }
// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
// console.log(`Generated password: ${password}`);


//Callback

// hello(bye);
// wait();

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function wait(){
//     console.log("Please wait...");
// }

// function bye(){
//     console.log("Goodbye!");
// }

// ForEach

// let numbers = [1,2,3,4,5];

// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "banana", "orange"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function uppercase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function lowercase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }

// function display(element){
//     console.log(element);
// }

// .map()

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square);
// console.log(squares);

// const cubes = numbers.map(cube);
// console.log(cubes);

// function cube(element){
//     return Math.pow(element, 3);
// }

// function square(element){
//     return Math.pow(element, 2);
// }

// const students = ["alice", "bob", "charlie", "david", "eve"];

// const capitalizedStudents = students.map(capitalize);

// console.log(students);
// console.log(capitalizedStudents);

// function capitalize(element){
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }

// .filter()

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let evennumbers = numbers.filter(isEven);
// console.log(evennumbers);

// let oddnumbers = numbers.filter(isOdd);
// console.log(oddnumbers);

// function isOdd(element){
//     return element % 2 !== 0;
// }
// function isEven(element){
//     return element % 2 === 0;
// }

// const ages = [15, 22, 18, 30, 12, 25];

// const adults = ages.filter(isAdult);
// console.log(adults);

// const minors = ages.filter(isMinor);
// console.log(minors);

// function isAdult(element){
//     return element >=18;
// }

// function isMinor(element){
//     return element < 18;
// }

// .reduce()

// const prices = [10, 20, 30, 40, 50];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum (accumulator, element){
//     return accumulator + element;
// }

// const grades = [85, 92, 78, 90, 88];

// const maxGrade = grades.reduce(findMax);
// console.log(`The highest grade is ${maxGrade}`);

// const minGrade = grades.reduce(findMin);
// console.log(`The lowest grade is ${minGrade}`);

// function findMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

// function findMin(accumulator, element){
//     return Math.min(accumulator, element);
// }

// function declaration:

// function hello(){
//     console.log("hello");
// }

// hello();

// function expressions:

// const hello = function(){
//     console.log("hello");
// }
// hello();

// setTimeout(function(){
//     console.log("hello");
// }, 3000);

// const numbers = [1,2,3,4,5,6];
// function declaration
// const sqrt = numbers.map(square)
// console.log(sqrt);
// function square(element){
//     return Math.pow(element, 2);
// }

//function expressions
// const sqrt = numbers.map(function(element){
//     return Math.pow(element, 2);
// })
// console.log(sqrt);

// const cube1 = numbers.map(cube);
// console.log(cube1);

// function cube(element){
//     return Math.pow(element, 3);
// }

// const even = numbers.filter(geteven);
// console.log(even);

// function geteven(element){
//     return element % 2 ===0;
// }

// const even = numbers.filter(function(element){
//     return element % 2 === 0;
// })
// console.log(even);

// const odd = numbers.filter(getodd);
// console.log(odd);

// function getodd(element){
//     return element % 2 !== 0;
// }

// const odd = numbers.filter(function(element){
//     return element % 2 !== 0;
// })
// console.log(odd);

// const total = numbers.reduce(add);
// console.log(total);
// function add(accumulator, element){
//     return accumulator + element;
// }

// const total = numbers.reduce(function(accumulator, element){
//     return accumulator + element;
// })
// console.log(total);

// Arrow function:

// ex of function declaration:
// const numbers = [1,2,3,4,5,6,7,8,9];
// const sqrt = numbers.map(square);
// console.log(sqrt);
// function square(element){
//     return Math.pow(element, 2);
// }

// ex of function expression:
// const sqrt = numbers.map(function(element){
//     return Math.pow(element, 2);
// })
// console.log(sqrt);

// ex of arrow function:
// const sqrt = numbers.map((element)=> Math.pow(element, 2));
// console.log(sqrt);

// const cube = numbers.map((element)=> Math.pow(element, 3));
// console.log(cube);

// const even = numbers.filter((element)=> element %2 === 0);
// console.log(even);

// const odd = numbers.filter((element)=> element % 2 !== 0);
// console.log(odd);

// const total = numbers.reduce((accumulator, element)=> accumulator + element);
// console.log(total);

// Object:

// const person = {
//     fullname: "Shreeyash Shrestha",
//     age: 22,
//     isEmployed: true,
//     sayHello: function(){console.log("Hello, My name is shreeyash shrestha")},
//     eat: ()=>console.log("I am eating burger"),
// }

// console.log(person.age);
// person.sayHello();
// person.eat();

// This
// const person = {
//     name: "shreeyash",
//     age: 22,
//     sayHello: function(){console.log(`Hello! My name is ${this.name} and my age is ${this.age}`)},
// }
// person.sayHello();

// Constructor
function car (make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new car("Ford", "Mustang", 2024, "blue");
const car2 = new car("Chevrolet", "Camaro", 2025, "orange");
const car3 = new car("Dodge", "Charger", 2026, "black");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();