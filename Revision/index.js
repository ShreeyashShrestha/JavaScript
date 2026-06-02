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

