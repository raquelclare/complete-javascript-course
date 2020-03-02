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

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

// // Multiple operators
//  var isFullAge = now - yearJohn >= fullAge; // true
//  console.log(isFullAge);

// // Grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

//  // Multiple assignments
//  var x, y;
//  x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
//  console.log(x, y);

//  // More operators
// x *= 2; // x = x * 2
// console.log(x);
// x += 10; // x = x + 10
// console.log(x);
// x++ // x += 1 // x = x + 1
// console.log(x);

// // Coding challenge 1 - calculating BMI

// // 1. Store Mark's and John's mass and height in variables
// var massMark, massJohn, heightMark, heightJohn;
// massMark = 81;
// massJohn = 90;
// heightMark = 1.9;
// heightJohn = 1.8;

// console.log(massMark, massJohn, heightMark, heightJohn);

// // 2. Calculate both their BMIs
// var bmiMark, bmiJohn;
// bmiMark = massMark / heightMark**2;
// bmiJohn = massJohn / heightJohn**2;

// console.log("Mark's BMI is " + bmiMark);
// console.log("John's BMI is " + bmiJohn);

// // 3. Create a boolean variable containing information about whether Mark has a higher BMI than John
// var isMarksBMIhigherThanJohns = bmiMark > bmiJohn;

// console.log(isMarksBMIhigherThanJohns);

// // 4. Print a string to the console containing the variable from step 3.
// console.log("Is Mark's BMI higher than Johns? " + isMarksBMIhigherThanJohns);

// // ****************** If/else statements ******************

// var firstName = "John";
// var civilStatus = "single";

// if (civilStatus === "married") {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + " will hopefull marry soon :)");
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + " will hopefull marry soon :)");
// }

// // Rewrite the Coding Challenge 1 - calculating BMI

// if (bmiMark > bmiJohn) {
//     console.log("Mark's BMI is higher than John's.")
// } else {
//     console.log("John's BMI is higher than Mark's");
// }

// // ****************** Boolean Logic ******************
// var firstName = "John";
// var age = 20;

// if (age < 13) {
//     console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) { // Between the ages of 13 - 20 // age >= 13 && age < 20
//     console.log(firstName + " is a teenager.");
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + " is a young man.");
// }else {
//     console.log(firstName + " is a man.");
// }

// ******************** The Ternary Operator and Switch Statements ************
// Useful for long if/else statements
var firstName = "John";
var age = 21;

// Ternary operator
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// This would be the long form of the ternary operator
// if (age >= 18) {
//     var drink = "beer";
// } else {
//     var drink = "juice";
// }

// Switch statement
var job = "instructor"; // Usually is the case that you compare a string with some variable
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Lisbon.");
    break;
  case "designer":
    console.log(firstName + " designs beautiful websites.");
    break;
  default:
    console.log(firstName + " does something else.");
}

// Re-doing earlier if/else statement into a switch statement
age = 22;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
}

// That was 3 ways of writing conditional statements
// 1. if/else statements
// 2. Ternary operator
// 3. Switch statements

// **************** Truthy and Falsy Values and equality operators **************
// Falsy values are values that are considered false when evaluated in an if/else statement condition
// Falsy values include: undef, null, 0, '', NAN
// Truth values are values that are considered true when evaluated in an if/else statement
// Truthy values include: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// Equality operators
// === is used for strict quality comparisons. Strict quality operator
// == does type coercion - means that the datat types of both variables do NOT have to match

if (height == "23") {
  // Converts the string of '23' to a number 23
  console.log("The == operator does type coercion!");
}

// '23' == 23 => true
// '23' === 23 => false

// *************** CODING CHALLENGE 2 ***************

// 1. Calculate the average score for each team
var johnAvgScore, mikeAvgScore;
johnAvgScore = (89 + 120 + 103) / 3;
mikeAvgScore = (116 + 94 + 123) / 3;

console.log("John's team has averaged " + johnAvgScore + " points.");
console.log("Mike's team has averaged " + mikeAvgScore + " points.");

// 2. Decide which teams wins in average, and print the winner to the console. Also include the average score in the output
if (johnAvgScore > mikeAvgScore) {
  console.log(
    "John's team wins in average number of points per game with a total of " +
      johnAvgScore +
      " points!"
  );
} else if (johnAvgScore < mikeAvgScore) {
  console.log(
    "Mikes's team wins in average number of points per game with a total of " +
      mikeAvgScore +
      " points!"
  );
} else {
  console.log("Looks like a tie!");
}
// 3. Change the scores to show different winners. Don't forget to take into account there might be a draw.
johnAvgScore = (100 + 112 + 99) / 3;
mikeAvgScore = (89 + 103 + 90) / 3;

console.log("John's team has averaged " + johnAvgScore + " points.");
console.log("Mike's team has averaged " + mikeAvgScore + " points.");

johnAvgScore > mikeAvgScore
  ? console.log(
      "John's team wins in average number of points per game with a total of " +
        johnAvgScore +
        " points!"
    )
  : console.log(
      "Mikes's team wins in average number of points per game with a total of " +
        mikeAvgScore +
        " points!"
    );

// 4. Mary also plays!
var maryAvgScore = (97 + 134 + 105) / 3;

console.log("Mary's team has averaged " + maryAvgScore + " points.");

if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
  console.log(
    "John's team wins in average number of points per game with a total of " +
      johnAvgScore +
      " points!"
  );
} else if (johnAvgScore < mikeAvgScore && maryAvgScore < mikeAvgScore) {
  console.log(
    "Mikes's team wins in average number of points per game with a total of " +
      mikeAvgScore +
      " points!"
  );
} else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore) {
  console.log(
    "Mary's team wins in average number of points per game with a total of " +
      maryAvgScore +
      " points!"
  );
} else {
  console.log("Looks like a tie somewhere!");
}

// ******************** Functions ********************
// Like containors that hold some lines of code and we can pass args into them which can return us a result

function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageRaquel = calculateAge(1990);
var ageSpany = calculateAge(1989);
var ageKezia = calculateAge(1988);
console.log(ageRaquel, ageSpany, ageKezia);

// Keep your functions "DRY" - Don't Repeat Yourself
// Functions can call other functions and don't need to return anything

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "Lo");
yearsUntilRetirement(1996, "Sarah");
yearsUntilRetirement(1948, "Dufus");

// ******************** Function Statements and Expressions ********************

// Function declaration
// function whatDoYouDo(job, firstName){}

// Function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
        return firstName + ' teaches kids how to code.'; // return keyword also exits the funtion
    case "driver":
        return firstName + ' drives a cab in NYC.'
    case "designer":
        return firstName + ' designs beautiful websites.'
    default:
        return firstName + ' does something else.'
  }
};

console.log(whatDoYouDo('teacher', 'Blair'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Dumbass'));

// JS statements and expressions are not only applied to functions. They are a global concepts.
// JS expression are pieces of code that always produce a value, as long as the code results in a single value.
// JS statements produce actions, but don't produce any immediate value/result. E.g. if/else statements, while loops, etc.

// ******************** Arrays ********************
// Collections of variables that can have different data types

var names = ['John', 'Mark', 'Jane']; // an array of names with 3 elements
var years = new Array(1990, 1969, 1948); // calling the Array function

console.log(names[0]);
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
names[6] = "Raquel" // skipping an index
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.'); // adds to beg of array
console.log(john);

john.pop(); 
john.pop();
john.shift(); // removes from beg
console.log(john);

console.log(john.indexOf(1990)); // returns the position of the element within the array
// most useful for telling you whether a certain element is in an array

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
// remember that -1 indicates that an element is not present in an array

// *************** CODING CHALLENGE 3 ***************

// In the end, John would like to have 2 arrays
// 1. Containing all three tips
// 2. Containing all three final paid amounts (bill + tip)

var bill1, bill2, bill3;
bill1 = 124;
bill2 = 48;
bill3 = 268;

var bills = [124, 48, 268];
var tips = [];
var totals = [];

function calculateTotals(bill) {
    if  (bill < 50) {
        var tip = bill * 0.2;
        tips.push(tip);
        var total = bill + tip;
        totals.push(total);
    } else if (bill >= 50 && bill < 200) {
        var tip = bill * .15;
        tips.push(tip);
        var total = bill + tip;
        totals.push(total);
    } else {
        var tip = bill * .1;
        tips.push(tip);
        var total = bill + tip;
        totals.push(total);
    }
}

calculateTotals(bill1);
calculateTotals(bill2);
calculateTotals(bill3);
console.log("The tips are: " + tips);
console.log("The bill totals, including tip, are: " + totals);