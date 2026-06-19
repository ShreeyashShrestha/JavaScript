
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
// function car (make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new car("Ford", "Mustang", 2024, "blue");
// const car2 = new car("Chevrolet", "Camaro", 2025, "orange");
// const car3 = new car("Dodge", "Charger", 2026, "black");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();

// class

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }
// const salesTax = 0.05;
// const Product1 = new Product("shirt", 150);
// const Product2 = new Product("Pants", 350);

// Product2.displayProduct();

// const total = Product2.calculateTotal(salesTax);
// console.log(`Total price (with tax): $ ${total}`);

// const Product = {
//     name: "Shirt",
//     price: 200,

//     displayProduct: function(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price}`);
//     }
// }

// console.log(Product.name);
// console.log(Product.price);
// Product.displayProduct();

// function Product(name, price){
//     this.name = name;
//     this.price = price;
//     this.displayProduct = function(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price}`);
//     };
// }

// const Product1 = new Product("Shirt", 200);
// const Product2 = new Product("Pants", 350);

// console.log(Product1.name);
// console.log(Product1.price);
// Product1.displayProduct();

// Object practice:

// const Student = {
//     name: "Shreeyash",
//     age: "22",
//     course: "computer",
// }

// const car = {
//     brand: "Nissan",
//     model: "GTR",
// }

// car.year = 2026,

// console.log(Student.name);
// console.log(Student.age);
// console.log(Student.course);

// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);

// const person = {
//     name: "Shreeyash",
//     city: "Kathmandu",
// }

// person.city = "Bhaktapur";

// console.log(person);
// console.log(person.city);

// const calculator = {
//     num1: 2,
//     num2: 3,
// }

// calculator.add = function(){
//     return this.num1 + this.num2;
// }

// console.log(calculator);

// console.log(calculator.add());

// const person = {
//     name: "Shreeyash",
//     age: 22,
//     city: "Kathmandu",
//     course: "BCS",
//     country: "Nepal"
// };

// const count = Object.keys(person).length;

// console.log(count);
// console.log(person);

// const book = {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 500,
//     genre: "Fiction"
// };

// for(let key in book){
//     console.log(key + ":" , book[key])
// }

// Constructor Practice:

// function Person(name, age){
//     this.name = name,
//     this.age = age
// }

// const Person1 = new Person("Shreeyash", 22);
// const Person2 = new Person("Ram", 21);

// console.log(Person1);
// console.log(Person2);

// function Employee (name, salary){
//     this.name = name,
//     this.salary = salary,
//     this.displayInfo = function(){
//         console.log(`Name: ${this.name}`);
//         console.log(`salary: ${this.salary}`);
//     }
// }

// const Employee1 = new Employee ("Shreeyash", 100000)
// const Empleyee2 = new Employee ("Ram", 50000)

// Employee1.displayInfo();
// Empleyee2.displayInfo();

// function rectangle(width, height){
//     this.width = width,
//     this.height = height,
//     this.getArea = function(){
//         return this.width * this.height;
//     }
// }

// const rectangle1 = new rectangle(2, 3);

// console.log(rectangle1.getArea());

// Class practice

// class student{
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }
// }

// const student1 = new student("Shreeyash", 22);
// const student2 = new student("ram", 22);

// console.log(student1.name);
// console.log(student1.age);

// class car{
//     constructor(brand, model){
//         this.brand = brand,
//         this.model = model
//     }
//         displaycar(){
//             console.log(`brand: ${this.brand}`);
//             console.log(`model: ${this.model}`);
//         }
// }

// const car1 = new car("Nissan", "GTR");

// car1.displaycar();

// class rectangle{
//     constructor(width, height){
//         this.width = width,
//         this.height = height
//     }

//     getArea(){
//         return this.height * this.width;
//     }

//     getPerimeter(){
//         return 2*(this.width + this.height);
//     }
// }

// const rectangle1 = new rectangle(2,3);

// console.log(rectangle1.getArea());
// console.log(rectangle1.getPerimeter());

// Static

// class MathUtil{
//     static PI = 3.1415;

//     static getDiameter(radius){
//         return radius * 2;
//     }

//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount ++;
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`); 
//     }

//     sayHello(){
//         console.log(`hello, ${this.username}`)
//     }
// }

// const user1 = new User("Shreeyash");
// const user2 = new User("Ram");

// console.log(user1.username);
// console.log(user2.username);
// console.log(User.userCount);
// User.getUserCount();
// user1.sayHello();

// class MathUtils{
//     static add(a, b){
//         return a + b;
//     }
// }

// console.log(MathUtils.add(2,3));

// class calculator{
//     static sub(a, b){
//         return a-b;
//     }
// }

// console.log(calculator.sub(5, 2));

// class operations{
//     static multiply(a,b){
//         return a * b;
//     }
// }
// console.log(operations.multiply(2,5))

// class NumberHelper{
//     static square(n){
//         return Math.pow(n, 2);
//     }
// }
// console.log(NumberHelper.square(2));

// class Temperature{
//     static celsiusToFahrenheit(c){
//         return (c * 9/5) + 32;
//     }
// }

// console.log(Temperature.celsiusToFahrenheit(20));

// Inheritance

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal{
//     name = "fish";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal{
//     name = "hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// hawk.fly();

//Super keyword

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`This ${this.name} moves at a speed of ${speed} mph`);
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name,age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }

// const rabbit = new Rabbit("rabbit", 3, 25);
// const fish = new Fish("fish", 1, 10);

// // console.log(rabbit.name);
// // console.log(fish.name);
// // console.log(fish);
// // console.log(rabbit);

// rabbit.run();
// fish.swim();

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }
//     speak(){
//         console.log(`${this.name} barks`);
//     }
// }

// const animal = new Animal("Dog");
// const dog = new Dog("puppy");

// animal.speak();
// dog.speak();

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     displayInfo(){
//         console.log(`This ${this.name} is ${this.age} yrs old`);
//     }
// }

// class Vehicle{
//     constructor(brand){
//         this.brand = brand;
//     }
//     showBrand(){
//         console.log(`Brand: ${this.brand}`);
//     }
// }

// class Car extends Vehicle{
//     constructor(brand, model){
//         super(brand);
//         this.model = model;
//     }
//     showDetails(){
//         super.showBrand();
//         console.log(`Model: ${this.model}`);
//     }
// }

// const car1 = new Car("Toyota","Corolla");

// car1.showDetails();

// class Employee{
//     constructor(name, salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     displayEmployee(){
//         console.log(`name: ${this.name} salary: ${this.salary}`);
//     }
// }

// class Manager extends Employee{
//     constructor(name, salary, department){
//         super(name, salary);
//         this.department = department;
//     }
//     displayManager(){
//         super.displayEmployee();
//         console.log(`Department: ${this.department}`);
//     }
// }

// const manager1 = new Manager("Shreeyash", 100000, "IT");

// manager1.displayManager();

// Getter and Setter

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0 ){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be a postitive number");
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be a positive number");
//         }
//     }

//     get width(){
//         return `${this._width.toFixed(1)}cm`;
//     }

//     get height(){
//         return `${this._height.toFixed(1)}cm`;
//     }

//     get area(){
//         return `${(this._width * this._height.toFixed(1))}cm^2`;
//     }
// }

// const rectangle = new Rectangle(3,4);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error("first name must be a non-empty string");
//         }
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }
//         else{
//             console.error("last name must be a non-empty string");
//         }
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge >=0){
//             this._age = newAge;
//         }
//         else{
//             console.error("age must be a non-negative number");
//         }
//     }

//     get firstName(){
//         return this._firstName;
//     }

//     get lastName(){
//         return this._lastName;
//     }

//     get age(){
//         return this._age;
//     }

//     get fullname(){
//         return this._firstName + " " + this._lastName;
//     }
// }

// const person = new Person("shreeyash", "shrestha", 22);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullname);
// console.log(person.age);

// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     set name(newName){
//         if(typeof newName === "string" && newName.length >0){
//             this._name = newName;
//         }
//         else{
//             console.error("Name must be a non empty string");
//         }
//     }

//     get name(){
//         return this._name;
//     }
// }

// const person = new Person("shreeyash");

// console.log(person.name);

// class Student{
//     constructor(name, grade){
//         this.name = name;
//         this.grade = grade;
//     }

//     set name(newName){
//         if(typeof newName === "string" && newName.length > 0 ){
//             this._name = newName;
//         }
//         else{
//             console.error("name must be a non empty string");
//         }
//     }

//     set grade(newGrade){
//         if(typeof newGrade === "number" && newGrade >= 0){
//             this._grade = newGrade;
//         }
//         else{
//             console.error("grades must not be below 0");
//         }
//     }

//     get name(){
//         return this._name;
//     }

//     get grade(){
//         return this._grade;
//     }
// }

// const student = new Student("shreeyash", 100);

// console.log(student.name);
// console.log(student.grade);

// class User{
//     constructor(username, password){
//         this.username = username;
//         this.password = password;
//     }

//     set username(newUsername){
//         if(typeof newUsername === "string" && newUsername.length > 0){
//             this._username = newUsername;
//         }
//         else{
//             console.error("username must be a non empty string");
//         }
//     }

//     set password(newPassword){
//         if(typeof newPassword === "string" && newPassword.length >= 8){
//             this._password = newPassword;
//         }
//         else{
//             console.log("Password must be at least 8 characters long");
//         }
//     }

//     get username(){
//         return this._username;
//     }

//     get password(){
//         return this._password;
//     }
// }

// const user = new User("shreeyash", "shderewas");

// console.log(user.username);
// console.log(user.password);

// Destructuring:

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a,b]=[b,a];

// console.log(a);
// console.log(b);

// const colors = ["red","blue","green","yellow","black","white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// const colors = ["red","blue","green","yellow","black","white"];

// const[firstColor, secondColor, thirdColor, ...extraColors]=colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// const person1 = {
//     firstName: "shreeyash",
//     lastName: "shrestha",
//     age: 22,
//     job: "Data Engineer",
// }

// const person2 = {
//     firstName: "Ram",
//     lastName: "Shrestha",
//     age: 34,
// }

// const{firstName, lastName, age, job="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// function displayPerson({firstName,lastName,age,job="Unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// const person1 = {
//     firstName: "shreeyash",
//     lastName: "shrestha",
//     age: 22,
//     job: "Data Engineer",
// }

// const person2 = {
//     firstName: "Ram",
//     lastName: "Shrestha",
//     age: 34,
// }

// displayPerson(person2);


//nested objects

// const person = {
//     fullName: "shreeyash shrestha",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "gym", "cooking"],
//     address: {
//         street: "old baneshwor",
//         city: "kathmandu",
//         country: "Nepal"
//     }
// }

// console.log(person.hobbies);
// console.log(person.address);
// console.log(person.address.city);


// class person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new person("shreeyash", 22, "baneshwor", "kathmandu", "Nepal");

// console.log(person1.name);
// console.log(person1.age)
// console.log(person1.address)
// console.log(person1.address.street)

//ARRAYS OF OBJECTS:

// const fruits = [{name: "apple", color: "red", calories: 95},
//                 {name: "banana", color:"yellow", calories: 105},
//                 {name: "pineapple", color: "yellow", calories: 120},
//                 {name: "orange", color:"orange", calories: 85}];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[0].name);
// console.log(fruits[2].color);

// fruits.push({name:"grapes", color:"purple", calories: 62});
// console.log(fruits)

// fruits.pop();
// console.log(fruits);

// fruits.splice(1.2);
// console.log(fruits);

// fruits.forEach(fruit => console.log(fruit));
// fruits.forEach(fruit => console.log(fruit.name));

// const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);

// const fruitColor = fruits.map(fruit => fruit.color);
// console.log(fruitColor);

// const fruitCalories = fruits.map((fruit)=>fruit.calories);
// console.log(fruitCalories);

// SORT

// let fruits = ["apple", "orange", "grapes", "banana"];

// fruits.sort();
// console.log(fruits);

// let numbers = [10,1,5,6,2,8,3,7,4,9];

// numbers.sort((a,b)=> a - b);
// numbers.sort((a,b)=>b-a);
// console.log(numbers);

// const people = [{name: "shreeyash", age:22, gpa:4.0},
//                 {name: "Ram", age:30, gpa: 3.0},
//                 {name:"Hari", age:18, gpa:2.0}];

// people.sort((a,b)=> a.age-b.age);
// people.sort((a,b)=> b.age-a.age);
// people.sort((a,b)=> a.gpa-b.gpa);
// people.sort((a,b)=> b.gpa-a.gpa);
// people.sort((a,b)=> a.name.localeCompare(b.name));
// people.sort((a,b)=>b.name.localeCompare(a.name));

// console.log(people);

// DATE OBJECTS

// const date = new Date();
// console.log(date);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const min = date.getMinutes();
// const seconds = date.getSeconds();
// const dayofweeks = date.getDay();
// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hour)
// console.log(min)
// console.log(seconds)
// console.log(dayofweeks)

// CLOSURE

// function outer(){
//     let message = "Hello";

//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// outer();

// function createGame(){
//     let score = 0;

//     function increaseScore(points){
//         score += points;
//         console.log(`+${points}pts`);
//     }

//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points}pts`);
//     }

//     function getScore(){
//         return score;
//     }

//     return {increaseScore, decreaseScore, getScore};

// }

// const game = createGame();

// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);

// console.log(`The final Score is ${game.getScore()}pts`);

// ES6 MODULE:

// import {PI, getCircumference, getArea} from './mathUtil.js';

// console.log(PI);

// const Circumference = getCircumference(10);
// const Area = getArea(10);

// console.log(`${Circumference.toFixed(2)}cm`);
// console.log(`${Area.toFixed(2)}cm^2`);

// Synchronous code:

// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

//ASYNCHRONOUS CODE:

// function func1 (callback){
//     setTimeout(()=>{console.log("Task 1");
//                     callback()},3000);
// }

// function func2(){
//     console.log("task 2");
//     console.log("task 3");

// }

// func1(func2);

// ERROR HANDLING

// try{
//     console.log(x);
// }

// catch(error){
//     console.error(error);
// }

// finally{
//     console.log("This always executes");
// }

// console.log("You have reached the end!");

// DOM: Document Object Model

// const username = "";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? `Guest` : username;

// console.dir(document);

// DOM NAVIGATION:

// .firstElementChild

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// }) 

// .lastElementChild

// const element = document.getElementById("vegetables");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "red";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement =>{
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "red";
// });

// .nextElementSibling

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// .previousElementSibling

// const element = document.getElementById("desserts");
// const perviousSibling = element.previousElementSibling;
// perviousSibling.style.backgroundColor = "yellow";

// .parentElement

// const element = document.getElementById("cake");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// .children

// const element = document.getElementById("fruits");
// const childern = element.children;

// Array.from(childern).forEach(child => {
//     child.style.backgroundColor = "yellow";
// });

// childern[1].style.backgroundColor = "yellow";

// console.log(childern);

// ADD & CHANGE HTML

// const newListItem = document.createElement("li");

// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "green";

//document.body.append(newListItem);
//document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana)

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[3]);

// document.getElementById("fruits").removeChild(newListItem);


// MOUSE EVENTS
// eventListener

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "OUCH! 🥲";
// });

// myBox.addEventListener("click", (event)=>{
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "OUCH! 🥲";
// })

// myBox.addEventListener("mouseover", (event)=>{
//     event.target.style.backgroundColor = "Yellow";
//     event.target.textContent = "Don't do it! 😨";
// })

// myBox.addEventListener("mouseout", (event)=>{
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click me 😊";
// })

// myButton.addEventListener("click", ()=>{
//     myBox.style.backgroundColor = "red";
//     myBox.textContent = "OUCH! 🥲";
// })

// myButton.addEventListener("mouseover", ()=>{
//     myBox.style.backgroundColor = "Yellow";
//     myBox.textContent = "Don't do it! 😨";
// })

// myButton.addEventListener("mouseout", ()=>{
//     myBox.style.backgroundColor = "lightgreen";
//     myBox.textContent = "Click me 😊"
// })


// KEY EVENTS

// const myBox = document.getElementById("myBox");

// document.addEventListener("keydown", event => {
//     myBox.textContent = "😨";
//     myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//     myBox.textContent = "😊";
//     myBox.style.backgroundColor = "lightBlue";
// })

// HIDE/SHOW HTML

// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {

//     if(myImg.style.display === "none"){
//         myImg.style.display = "block";
//         myButton.textContent = "Hide";
//     }
//     else{
//         myImg.style.display = "none";
//         myButton.textContent = "Show";
//     }
// })

// NODE LIST

// let buttons = document.querySelectorAll(".myButton");

// console.log(buttons);

//Add html / css properties
// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😊";
// });

// CLICK EVENTLISTENER
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.currentTarget.style.backgroundColor = "red";
//     })
// });

// mouse over + mouse out eventlistener

// buttons.forEach(button =>{
//     button.addEventListener("mouseover", event =>{
//         event.target.style.backgroundColor = "red";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor ="hsl(205, 100%, 60%)";
//     })
// })

// Add an element

// const newButton = document.createElement("button");

// newButton.textContent = "Button 5";
// newButton.classList = "myButton";

// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myButton");

// console.log(buttons);


// Remove an element

// buttons.forEach(button => {
//     button.addEventListener("click", event=> {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButton");
//         console.log(buttons);
//     })
// })

// CLASS LIST

// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event=>{
//     event.target.classList.add("hover");
// })

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// })

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event =>{
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("click", event=>{
//     event.target.classList.replace("enabled", "disabled");
// })

// myButton.addEventListener("click", event=>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😒";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// })

// let myButton = document.querySelectorAll(".myButton");
// console.log(myButton)

// myButton.forEach(button =>{
//     button.classList.toggle("enabled");
// });

// myButton.forEach(button =>{
//     button.addEventListener("mouseover", event =>{
//         event.target.classList.toggle("hover");
//     })
// })

// myButton.forEach(button =>{
//     button.addEventListener("mouseout", event =>{
//         event.target.classList.toggle("hover");
//     })
// });

// myButton.forEach(button =>{
//     button.addEventListener("click", event=>{
//         event.target.classList.replace("enabled", "disabled");
//     })
// })

// myButton.forEach(button =>{
//     button.addEventListener("click", event=>{
//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "😒";
//         }
//         else{
//             event.target.classList.replace("enabled", "disabled");
//         }
//     })
// })

// CALLBACK HELL

// function task1(callback){
//     setTimeout(()=>{
//         console.log("Task 1 complete");
//         callback();
//     },2000);
// }

// function task2(callback){
//     setTimeout(()=>{
//         console.log("Task 2 complete");
//         callback();
//     },1500);
// }

// function task3(callback){
//     setTimeout(()=>{
//         console.log("Task 3 complete");
//         callback();
//     },3000);
// }

// function task4(callback){
//     setTimeout(()=>{
//         console.log("Task 4 complete");
//         callback();
//     },1500);
// }

// function task5(callback){
//     setTimeout(()=>{
//         console.log("Task 5 complete");
//         callback();
//     },2000);
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 task5(()=>{
//                     console.log("All task completed");
//                 })
//             })
//         })
//     })
// });

// PROMISE:

// function walkDog(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dogwalked = true;

//             if(dogwalked){
//                 resolve("You walk the dog");
//             }
//             else{
//                 reject("You didn't walk the dog");
//             }
//         }, 1500);
//     });
    
// };

// function cleanKitchen(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const kitchenCleaned = true;
//             if(kitchenCleaned){
//                 resolve("You clean the Kitchen");
//             }
//             else{
//                 reject("You didn't cleaned the kitchen");
//             }
//         }, 2500);
//     });

// };

// function takeOutTrash(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const trashTakenOut = false;
//             if(trashTakenOut){
//                 resolve("You take out the trash");
//             }
//             else{
//                 reject("You didn't take out the trash");
//             }
//         }, 500);
//     });

// };

// walkDog().then(value=>{console.log(value); return cleanKitchen()})
//         .then(value=>{console.log(value); return takeOutTrash()})
//         .then(value=>{console.log(value); console.log("You finished all the task")})
//         .catch(error => console.error(error));


// ASYNC/AWAIT:

// function walkDog(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dogWalked = true;

//              if(dogWalked){
//                 resolve("You did walk the dog");
//              }
//             else{
//                 reject("You didn't walk the dog");
//             }
//         }, 1500);
//     });
// };

// function cleanKitchen(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const kitchenCleaned = true;
//             if(kitchenCleaned){
//                 resolve("You did cleaned the kitchen");
//             }
//             else{
//                 reject("You didn't cleaned the kitchen");
//             }
//         }, 2500);
//     });
// };

// function takeOutTrash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const trashTakenOut = true;
//             if(trashTakenOut){
//                 resolve("You did take out the trash");
//             }
//             else{
//                 reject("You didn't take out the trash");
//             }
//         }, 500);
//     });
// };

// async function doChores() {
//     try{
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);

//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);

//         console.log("You finished all the chores");
//     }

// catch(error){
//     console.error(error);
// }
// };

// doChores();

// JSON:

// const names = ["Shreeyash","Ram","Sita","Hari"];
// const peoples = {
//     "name": "Shreeyash",
//     "age": 22,
//     "isEmployed": false,
//     "hobbies": ["eating", "sleeping", "cooking"]
// };
// const persons = [{
//     "name": "shreeyash",
//     "age": 22,
//     "isEmployed": false
// },
// {
//     "name": "Ram",
//     "age": 30,
//     "isEmployed": true
// },
// {
//     "name": "Sita",
//     "age": 29,
//     "isEmployed":true
// }];

// const jsonString1 = JSON.stringify(names);
// const jsonString2 = JSON.stringify(peoples);
// const jsonString3 = JSON.stringify(persons);

// console.log(jsonString1);
// console.log(jsonString2);
// console.log(jsonString3);

// const names = `["Shreeyash","Ram","Sita","Hari"]`;

// const parsedData = JSON.parse(names);

// console.log(names);
// console.log(parsedData);

// FETCH

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response =>{
//         if(!response.ok){
//             throw new Error("Could not fetch resources");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


