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