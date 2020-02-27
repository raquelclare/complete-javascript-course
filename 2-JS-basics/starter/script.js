// console.log("Hello World!!!");

/* ****************************
* VARIABLES AND DATA TYPES

var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = "John and Mark";
*/

/*********************************
 * VARIABLE MUTATION AND TYPE COERCION
 

var firstName = "John";
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(firstName + ' is a ' + 28 + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = "twenty eight";
job = "driver";

alert(firstName + ' is a ' + 28 + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/

/************************************
* BASIC OPERATORS
 
var year, yeaJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "hey");
var x;
console.log(typeof x);
*/

/************************************
* OPERATOR PRECEDENCE
 */

 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

// Multiple operators 
 var isFullAge = now - yearJohn >= fullAge; // true
 console.log(isFullAge);

// Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

 // More operators
x *= 2; // x = x * 2
console.log(x);
x += 10; // x = x + 10
console.log(x);
x++ // x += 1 // x = x + 1
console.log(x);

// Coding challenge 1 - calculating BMI

// 1. Store Mark's and John's mass and height in variables
var massMark, massJohn, heightMark, heightJohn;
massMark = 81;
massJohn = 90;
heightMark = 1.9;
heightJohn = 1.8;

console.log(massMark, massJohn, heightMark, heightJohn);

// 2. Calculate both their BMIs
var bmiMark, bmiJohn;
bmiMark = massMark / heightMark**2;
bmiJohn = massJohn / heightJohn**2;

console.log("Mark's BMI is " + bmiMark);
console.log("John's BMI is " + bmiJohn);

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John
var isMarksBMIhigherThanJohns = bmiMark > bmiJohn;

console.log(isMarksBMIhigherThanJohns);

// 4. Print a string to the console containing the variable from step 3. 
console.log("Is Mark's BMI higher than Johns? " + isMarksBMIhigherThanJohns);

// ****************** If/else statements ******************

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + " will hopefull marry soon :)");
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + " will hopefull marry soon :)");
}

// Rewrite the Coding Challenge 1 - calculating BMI
 
if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's.")
} else {
    console.log("John's BMI is higher than Mark's");
}

// ****************** Boolean Logic ******************
var firstName = "John";
var age = 20;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) { // Between the ages of 13 - 20 // age >= 13 && age < 20
    console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
    console.log(firstName + " is a young man.");
}else {
    console.log(firstName + " is a man.");
}