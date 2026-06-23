// Variable
// let name = "shreeyash";
// console.log(name);
// console.log(typeof name);
// console.log(`My name is ${name}`);

// document.getElementById("nameid").textContent = `My name is ${name} Shrestha`;

// Arithmentic Operators

// let x = 10;

// x = x + 5;
// x= x - 5;
// x= x * 5;
// x= x / 5;
// x= x % 5;
// x= x ** 5;

//argumented operators

// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x **= 5;
// x %= 5;

// Increment and Decrement Operators

// x ++;
// x --;

//console.log(x);

// How to accept user input in JavaScript

// simple way to accept user input

// let username;
// username = window.prompt("What is your username?");
// console.log(username);

// Professional way to accept user input

// document.getElementById("submit").onclick = function(){
//     let username = document.getElementById("username").value;
//     document.getElementById("result").textContent = `Welcome ${username}`;
// }

// type Conversion

// let age = window.prompt("What is your age?");
// age = Number(age);
// console.log(age);
// console.log(typeof age);

// Const

// const pi = 3.14;
// pi = 3.14159;
// console.log(pi);

// Math

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3.8;
// let y = 3.2;
// let z;

// r = Math.round(y);
// f = Math.floor(x);
// c = Math.ceil(x);
// t = Math.trunc(x);
// p = Math.pow(x, 2);
// s = Math.sqrt(x);

// console.log(s);
// console.log(p);
// console.log(t);
// console.log(c);
// console.log(r);
// console.log(f);

// let min;
// let max;

// min = Math.min(x, y);
// console.log(min);

// max = Math.max(x, y);
// console.log(max);

// Random Number Generator

// let randomNumber = Math.floor(Math.random() * 6) +1;
// console.log(randomNumber);

// If else statement

// let age = 17;

// if(age<0){
//     console.log("Invalid age");
// }
// else if(age===0){
//     console.log("You are a newborn");
// }
// else if(age>=100){
//     console.log("You are a centenarian");
// }
// else if(age>=18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote");
// }

// .checked property

// const mycheckbox = document.getElementById("mycheckbox");
// const myesewa = document.getElementById("myesewa");
// const mykhalti = document.getElementById("mykhalti");
// const submit = document.getElementById("submit");
// const subresult = document.getElementById("subresult");
// const cardresult = document.getElementById("cardresult");

// submit.onclick = function(){
//     if(mycheckbox.checked){
//         subresult.textContent = "You have subscribed";
//     }else{
//         subresult.textContent = "You have unsubscribed";
//     }
//     if(myesewa.checked){
//         cardresult.textContent = "You have selected eSewa";
//     }else if(mykhalti.checked){
//         cardresult.textContent = "You have selected Khalti";
//     }else{
//         cardresult.textContent = "You have not selected any payment method";
//     }
// }

// Ternary Operator

// let age = 18;

// let eligible = age >= 18 ? "You are eligible to vote" : "You are not eligible";
// console.log(eligible);

// Switch statement

// let testscore = 85;
// let lettergrade;

// switch(true){
//     case testscore >= 90:
//         lettergrade = "A";
//         break;
    
//     case testscore >= 80:
//         lettergrade = "B";
//         break;  
    
//     case testscore >= 70:
//         lettergrade = "C";
//         break;
    
//     case testscore >= 60:
//         lettergrade = "D";
//         break;

//     default:
//         lettergrade = "F";  
    
// }

// console.log(lettergrade);

//String Methods

// CharAt()

// let username = "shreeyash";
// console.log(username.charAt(0));

// indexOf()

// let username = "shreeyash";
// console.log(username.indexOf("s"));

// lastIndexOf()

// let username = "shreeyash";
// console.log(username.lastIndexOf("s"));

//Length

// let username = "shreeyash";
// console.log(username.length);

// Trim()

// let username = "   shreeyash   ";
// console.log(username.length);
// username = username.trim();
// console.log(username.length);

// toUpperCase()

// let username = "shreeyash";
// username = username.toUpperCase();
// console.log(username);

// toLowerCase()

// let username = "SHREEYASH";
// username = username.toLowerCase();
// console.log(username);

// repeat()

// let username = "shreeyash";
// username = username.repeat(3);
// console.log(username);

// startsWith()

// let username = " shreeyash";
// let result = username.startsWith(" ");

// if(result){
//     console.log("Your username can't begin with a space");
// }else{
//     console.log(username);
// }

// endsWith()

// let username = "shreeyash ";
// let result = username.endsWith(" ");

// if(result){
//     console.log("Your username can't end with a space");
// }else{
//     console.log(username);
// }

// replaceAll()

// let phonenumber = "123-456-7890";
// phonenumber = phonenumber.replaceAll("-", "");
// console.log(phonenumber);

// padStart()

// let phonenumber = "123-456-7890";
// phonenumber = phonenumber.padStart(15, "0");
// console.log(phonenumber);
// console.log(phonenumber.length);

// padEnd()

// let phonenumber = "123-456-7890";
// phonenumber = phonenumber.padEnd(15, "0");
// console.log(phonenumber);
// console.log(phonenumber.length);

// String slicing

// const fullname = "shreeyash shrestha";

// let firstname = fullname.slice(0, 9);
// console.log(firstname);

// let lastname = fullname.slice(10);
// console.log(lastname);

// let firstname = fullname.slice(0, fullname.indexOf(" "));
// console.log(firstname);

// let lastname = fullname.slice(fullname.indexOf(" ")+1);
// console.log(lastname);

// Method Chaining

// let username = window.prompt("What is your username?");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// While loop

// let username = "";

// while(username === "" || username === null){
//     username = window.prompt("Please enter your username");
// }
// console.log(`Welcome ${username}`);

// For loop

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=10; i>=0; i--){
//     console.log(i);
// }

// continue

// for(let i=1; i<=10; i++){
//     if(i === 5){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

// break

// for(let i=1; i<=10; i++){
//     if(i === 5){
//         break;
//     }else{
//         console.log(i);
//     }
// }

// function

// function happybirthday(name, age){
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday dear ${name}`);
//     console.log("Happy birthday to you");
//     console.log(`You are now ${age} years old`);
// }

// happybirthday("Shreeyash", 21);

// array

// let fruits = ["apple", "banana", "cherry"];

// push()

// fruits.push("orange");

// pop()

// fruits.pop();

// unshift()

// fruits.unshift("grapes");

// shift()

// fruits.shift();

// console.log(fruits);

// length

// let fruits = ["apple", "banana", "cherry"];
// let numoffruits = fruits.length;
// console.log(numoffruits);

// indexOf()

// let fruits = ["apple", "banana", "cherry"];
// let index = fruits.indexOf("banana");
// console.log(index);

// iterating arrays

// let fruits = ["apple", "banana", "cherry"];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// spread operator: expands an array into seperate elements

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let max = Math.max(...numbers)
// let min = Math.min(numbers)

// console.log(max);
// console.log(min);

// let username = "shreeyash";
// let letters = [...username].join("-");
// console.log(letters);

// let fruits = ["apple", "mango", "grapes"];
// let vegetables = ["carrots", "potatoes"];

// let foods = [...fruits, ...vegetables, "eggs", "burger"];
// console.log(foods);

// Rest parameters: bundles seperate elements into an array

// function openfridge(...foods){
//     console.log(foods);
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "hotdog";
// const food4 = "ramen";

// openfridge(food1,food2,food3,food4);

// function getfood(...foods){
//     return foods;
// }
// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "hotdog";
// const food4 = "ramen";

// const foods = getfood(food1, food2, food3, food4)
// console.log(foods);

// practice

// let name;
// name = "shreeyash";
// console.log(`My name is ${name}`);

// let num1 = 10;
// let num2 = 20;
// let num3 = num1 + num2;
// console.log(num3);

// let age = 23;
// console.log(typeof age, age);

// let number1 = "100";
// number1 = Number(number1)
// console.log(typeof number1);

// let variable1 = 1;
// let variable2 = 2;

// variable1 = 2;
// variable2 = 1;

// console.log(variable1, variable2);

// let num = -5;

// if (num > 0){
//     console.log("Positive")
// }else if(num < 0){
//     console.log("Negative")
// }else{
//     console.log("Zero")
// }

// let num = 5;

// if(num % 2 === 0){
//     console.log("E");
// }else {
//     console.log("odd")
// }

// let number = [1,2,3,4,5];

// let max = Math.max(...number)
// console.log(max);

// let min = Math.min(...number)
// console.log(min);

// let a = 1;
// let b = 2;
// let c = 3;

// let max = Math.max(a,b,c);
// console.log(max);

// let testscore = 30;

// if(testscore >= 40){
//     console.log("Pass");
// }else{
//     console.log("fail");
// }

// for(i = 1; i<=10; i++){
//     console.log(i);
// }

// for(i=1;i<=20;i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// let sum = 0;
// for(i=1;i<=100;i++){
//     sum += i;
// }
// console.log(sum);

// for(let i=1;i<=10;i++){
   
//     console.log(`${5 * i}`)
// }

// let name = "shreeyash";

// for(let i = 0; i<=name.length; i++){
//     console.log(i);
// }

// function square(num){
//     return num * num;
// }

// console.log(square(5));

// function max(num1, num2){
//     if(num1 > num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }

// console.log(max(10, 20));
// console.log(max(7,3));

// let fruits = ["apple", "banana", "watermelon", "grapes", "orange"];

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// let numbers = [1,2,3,4,5,6,7,8];

// // let max = Math.max(...numbers);
// // console.log(max)
// let sum=0;
// for(i=0; i<=numbers.length; i++){
//     sum += i;
//     console.log(sum);
// }


// array

// let fruits = ["apple", "banana", "orange", "grapes"];

// fruits.push("pineapple");

// fruits.pop();

// fruits.unshift("pineapple");

// fruits.shift("pineapple");
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length;
// console.log(numOfFruits);

// let index = fruits.indexOf("apple");
// console.log(index);

// for(let i = 0; i<fruits.length; i ++){
//     console.log(fruits[i])
// }

// fruits.sort();
// console.log(fruits);

// fruits.sort().reverse();
// console.log(fruits)

// create an array of 5 favourite fruits and print all fruits

// let fruits = ["apple", "banana", "orange", "watermelon", "pineapple"];

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// find the length of an array

// const numbers = [10,20,30,40,50];

// let length = numbers.length;
// console.log(length);

// Print the first and last element of an array

// const fruits = ["apple", "banana", "orange", "watermelon", "pineapple"];

// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// const numbers = [10,20,30,40,50];

// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1])

//Add a new element to the end of an array
// let numbers = [10,20,30,40,50];
// numbers.push(60);
// console.log(numbers);

// Remove the last element.
// let numbers = [10,20,30,40,50];
// numbers.pop();
// console.log(numbers);

// Add an element to the begining
// let numbers = [10,20,30,40,50];
// numbers.unshift(0);
// console.log(numbers);

// Remove the first element
// let numbers = [10,20,30,40,50];
// numbers.shift();
// console.log(numbers);

// Loop through an array and print all elements.

// const numbers = [10,20,30,40,50];
// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i])
// }

// Find the sum of all numbers in an array
// const numbers = [10,20,30,40,50];
// let sum = 0;
// for(let i=0;i<numbers.length;i++){
//     sum += numbers[i];
//     console.log(sum);
// }

// find the average of numbers in an array

// const numbers = [10,20,30,40,50];
// let sum = 0;
// for(let i=0;i<numbers.length;i++){
//     sum += numbers[i];
// }

// const average = sum / numbers.length;

// console.log(average);

// Find the largest number in an array

// const numbers = [10,20,30,40,50];
// let max;

// max = Math.max(...numbers);
// console.log(max);

// Find the smallest number in an array

// const numbers = [10,20,30,40,50];

// let min = Math.min(...numbers);
// console.log(min);

// Count how many even numbers are in an array
// const numbers = [10,20,30,40,50];
// let count = 0;

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i] % 2 === 0){
//         count ++;
//     }
// }
// console.log(count);

// const numbers = [12, 7, 9, 20, 15, 8, 11, 4];
// let count = 0;
// for(let i = 0; i<numbers.length; i ++){
//     if(numbers[i] % 2 === 0){
//         count ++;
//     }
// }
// console.log(count);

// Count how many odd numbers are in an array.
// const numbers = [12, 7, 9, 20, 15, 8, 11, 4];
// let count = 0;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 !== 0){
//         count ++;
//     }
// }
// console.log(count);

// check if a given number exists in an array

// const numbers = [12, 7, 9, 20, 15, 8, 11, 4];
// let target = 0;

// let found = false;

// for(let i =0; i<numbers.length; i++){
//     if(numbers[i]===target){
//         found = true;
//         break;
//     }
// }

// if(found){
//     console.log("number found")
// }else{
//     console.log("number not found")
// }

// create a new array containing only even numbers
// const arr = [1, 2, 3, 2, 4, 2, 5];
// const even = []

// for(let i=0;i<arr.length;i++){
//     if(arr[i] %2=== 0){
//         even.push(arr[i]);
//     }
// }
// console.log(even);

// let num = [1,2,3,4,5];

// num.forEach(double);
// num.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function display(element){
//     console.log(element);
// }

// const grades = [75, 50, 90, 80, 65, 95];

// const max = grades.reduce(getMax);
// console.log(max);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

// hello(leave);

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function wait(){
//     console.log("wait!");
// }

// function leave(){
//     console.log("leave!");
// }

// let numbers = [1,2,3,4,5];

// function display(element){
//     console.log(element);
// }

// function double(element, index, array){
//     array[index]= element * 2;
// }

// numbers.forEach(double);
// numbers.forEach(display);

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square);

// function square(element){
//     return Math.pow (element, 2);
// }

// console.log(squares);

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let evenNum = numbers.filter(isEven);

// function isEven(element){
//     return element % 2 === 0;
// }

// console.log(evenNum);


// const prices = [5,30,10,25,15,20];
// const total = prices.reduce(sum);

// function sum(accumulator, element){
//     return accumulator + element;
// }

// console.log(total);

// function hello(){
//     console.log("hello");
// }

// hello();

// const hello = function(){
//     console.log("hello");
// }

// hello();

// const hello = ()=>console.log("Hello");
// hello();

// const person = {
//     firstName: "shreeyash",
//     lastName: "shrestha",
//     age: 22,
//     isEmployed: true,
//     sayHello: function(){
//         console.log("Hi")
//     },
//     eat: ()=>console.log("I am eating burger")
// }

// person.sayHello();
// person.eat();
// console.log(person.firstName);

// const person = {
//     name: "shreeyash",
//     favfood: "burger",
//     sayHello: function(){console.log(`Hi! I am ${this.favfood}`)},
// }

// person.sayHello();

// function car(make, model, year, color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new car("Ford","Mustang",2024,"black");

// car1.drive();
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price =price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price}`);
//     }
// }

// const product1 = new Product("Shirt", 1500);
// const product2 = new Product("Pants", 3000);

// product1.displayProduct();
// console.log(product1.name);

// class MathUtils{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getCircumference(radius){
//         return 2 * this.PI * radius * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtils.PI);
// console.log(MathUtils.getDiameter(10));
// console.log(MathUtils.getCircumference(10));
// console.log(MathUtils.getArea(10));

// class Animal{
//    constructor(name,age){
//     this.name = name;
//     this.age = age;
//    }

//    move(speed){
//     console.log(`This ${this.name} moves at a speed of ${speed}mph`);
//    }
// }

// class Rabbit extends Animal{
//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} is running`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal{
//    constructor(name,age,swimSpeed){
//     super(name,age);
//     this.swimSpeed = swimSpeed;
//    }

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//         super.move(this.swimSpeed);
//     }
// }

// const rabbit = new Rabbit("rabbit",1 ,25);
// const fish = new Fish("fish",2,12);

// rabbit.run();
// fish.swim();

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length>0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error("first name must be a non empty string");
//         }
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length>0){
//             this._lastName = newLastName;
//         }
//         else{
//             console.error("last name must be a non empty string");
//         }
//     }

//     set age(newAge){
//         if (typeof newAge === "number" && newAge>=0){
//             this._age = newAge;
//         }
//         else{
//             console.error("age must be a non negative number");
//         }
//     }

//     get firstName(){
//         return this._firstName;
//     }

//     get lastName(){
//         return this._lastName;
//     }

//     get fullName(){
//         return this._firstName + this._lastName;
//     }

//     get age(){
//         return this._age;
//     }
// }

// const person1 = new Person("Shreeyash", "Shrestha", 22);

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.fullName);


// function greet(name, callback){
//     console.log(`Hello, ${name}`);
//     callback();
// }

// function welcome(){
//     console.log("Welcome!");
// }

// greet("shreeyash", welcome);

// function calculate(num1, num2, operation){
//     return operation(num1, num2);
// }

// function add(a, b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// function multiply(a,b){
//     return a*b;
// }

// console.log(`addition: ${calculate(10,5,add)}`);
// console.log(`subtraction: ${calculate(10,5,sub)}`)
// console.log(`multiplication: ${calculate(10,5,multiply)}`)


// let fruits = ["apple", "banana", "orange", "grapes", "watermelon"];
// fruits.forEach(display);
// function display(element){
//     console.log(element);
// }


// let numbers = [1,2,3,4,5];
// numbers.forEach(multiply);
// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }
// function multiply(element, index, array){
//     array[index] = element * 2;
// }

// let names = ["john", "alice", "bob"];

// names.forEach(function(element){
//     console.log(element);
// })

// names.forEach((element)=>console.log(element));


// let numbers = [10,20,30,40,50];
// let sum=0

// // numbers.forEach(function(numbers){
// //     sum += numbers;
// // })

// numbers.forEach((numbers)=>sum += numbers)

// console.log(sum)

// const numbers = [1,2,3,4,5];

// const double = numbers.map((element)=>element * 2);
// console.log(double);

// const names = ["Alice", "Bob", "Charlie", "David"];

// const uppernames = names.map(function(names){
//     return names.toUpperCase();
// })

// console.log(uppernames)

// const prices = [100,200,300];
// const newprices = prices.map(convert);

// function convert(element){
//     return "$" + element;
// }
// console.log(newprices)

// const numbers = [1,2,3,4,5];
// const squarenums = numbers.map(squares);
// console.log(squarenums);
// function squares(element){
//     return Math.pow(element, 2);
// }

// let nums = [1,2,3,4,5];
// let evennums = nums.filter(getEven);
// console.log(evennums)
// function getEven(element){
//     return element % 2 === 0;
// }

// function task(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Task1 Completed");
//         },2000);
//     });
// }

// task().then (value=>{console.log(value)})

// function rejection(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const allGood = false;
//             if (allGood){
//                 resolve("All task completed");
//             }
//             else{
//                 reject("Something went wrong");
//             }
//         },1000);
//     })
// }

// rejection().then(value=>{console.log(value)})
//             .catch(error=>{console.error(error)});

// function checknumber(num){
//     return new Promise((resolve, reject)=>{
//         if(num >=0){
//             resolve("Positive number");
//         }
//         else{
//             reject("Negative number");
//         }
//     })
// }

// checknumber(2).then(value=>{console.log(value)})
//                 .catch(error=>{console.log(error)});


// function login(){
//     return new Promise((resolve, reject)=>{
//         let username = document.getElementById("username").value;
//         if(username === "admin"){
//             resolve("Login successful");
//         }
//         else{
//             reject("Invalid username");
//         }
//     })
// }

// function handleLogin() {
//     login().then(value => {console.log(value)})
//         .catch(error => {console.error(error)})
// }

// function greetings(name){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(`Hello, ${name}`);
//         },3000);
//     })
// }

// greetings("shreeyash").then(value=>{console.log(value)})

// async function welcome() {
//     return "Welcome to javacript";
// }

// async function run() {
//     const result = await welcome();
//     console.log(result);
// }

// run();

// function getMessage(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve ("Task completed")
//         },2000);
//     });
// };

// async function run() {
//     const result = await getMessage();
//     console.log(result);
// };

// run();

// function checkNumber(num){
//     return new Promise((resolve,reject)=>{
//         if(num >=0){
//             resolve("Positive number");
//         }
//         else{
//             reject("Negative number");
//         }
//     })
// }

// async function check(num) {
//     try{
//         const result = await checkNumber(num);
//         console.log(result);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// check(-80);
// check(5);

// async function greet() {
//     await new Promise((resolve)=>{
//         setTimeout(resolve,2000);
//     });
//     console.log("hello");
// }

// greet();


// function getData(){
//     return new Promise((reject)=>{
//         reject("Something went wrong");
//     })
// }

// async function fetchData() {
//     try {
//         const result = await getData();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();

// async function task1(){
//     setTimeout(()=>{
//         console.log("Task 1 completed");
//     },1000)
// }

// async function task2() {
//     setTimeout(()=>{
//         console.log("Task 2 completed")
//     },2000)
// }

// async function task3() {
//     setTimeout(()=>{
//         console.log("Task 3 completed")
//     },3000)
// }

// async function run() {
//     await task1();
//     await task2();
//     await task3();
// };

// run();

// function task1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Task 1 completed");
//             resolve();
//         },1000);
//     });
// };

// function task2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Task 2 completed");
//             resolve();
//         },2000);
//     });
// };

// function task3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Task 3 completed");
//             resolve();
//         },3000);
//     });
// };

// async function run() {
//     await task1();
//     await task2();
//     await task3();
// }

// run();

// function task1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Task 1 completed");
//         },1000);
//     })
// }

// function task2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Task 2 completed");
//         },2000);
//     })
// }

// function task3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Task 3 completed");
//         },3000);
//     })
// }

// async function run() {
//     const result = await Promise.all([
//         task1(),
//         task2(),
//         task3()   
//     ]);

//     console.log(result);
// }

// run();



// const student = {
//     name: "shreeyash",
//     age: 22,
//     course: "IT"
// };

// console.log(student);

// const string = JSON.stringify(student);
// console.log(string);

// const jsonData = `{"name":"shreeyash","age":22}`;

// console.log(jsonData);

// const parseData = JSON.parse(jsonData);
// console.log(parseData);

// const jsonData = `{
//     "name":"shreeyash",
//     "age":22,
//     "city":"London"
// }`;

// console.log(jsonData);

// const parseData = JSON.parse(jsonData);

// console.log(parseData.name);
// console.log(parseData.age);
// console.log(parseData.city);

// const jsonData = `[
//   {"name":"Apple","price":2},
//   {"name":"Banana","price":1},
//   {"name":"Orange","price":3}
// ]`;

// const fruits = JSON.parse(jsonData);
// fruits.forEach(fruit => {
//     console.log(fruit.name);
// })

// const jsonData = `[
//   {"name":"Apple","price":2},
//   {"name":"Banana","price":1},
//   {"name":"Orange","price":3}
// ]`;

// const fruits = JSON.parse(jsonData);

// let totalPrice = 0;

// fruits.forEach(fruit => {
//     totalPrice += fruit.price;
// })

// console.log(`Total Price: ${totalPrice}`);

// const jsonData = `{
//   "name":"John",
//   "address":{
//     "city":"New York",
//     "country":"USA"
//   }
// }`;

// const details = JSON.parse(jsonData);

// console.log(details.address.city)

// const person = '{"name":"Tom","age":22}';

// const parseData = JSON.parse(person);

// parseData.course = "IT";

// const updateParseData = JSON.stringify(parseData);
// console.log(updateParseData);

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   });

// async function getFirstPosition() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data[0].title);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getFirstPosition()

// async function getTotalPosts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data.length);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getTotalPosts();


// async function getEmails() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     users.forEach(user => {
//       console.log(user.email);
//     });
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getEmails();