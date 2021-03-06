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

// var bill1, bill2, bill3;
// bill1 = 124;
// bill2 = 48;
// bill3 = 268;

// var bills = [124, 48, 268];
// var tips = [];
// var totals = [];

// function calculateTotals(bill) {
//     if  (bill < 50) {
//         var tip = bill * 0.2;
//         tips.push(tip);
//         var total = bill + tip;
//         totals.push(total);
//     } else if (bill >= 50 && bill < 200) {
//         var tip = bill * .15;
//         tips.push(tip);
//         var total = bill + tip;
//         totals.push(total);
//     } else {
//         var tip = bill * .1;
//         tips.push(tip);
//         var total = bill + tip;
//         totals.push(total);
//     }
// }

// calculateTotals(bills[0]);
// calculateTotals(bills[1]);
// calculateTotals(bills[2]);

// console.log("The tips are: " + tips);
// console.log("The bill totals, including tip, are: " + totals);

// ***************** Objects and Properties *****************
// Define key/value pairs
// Group together different variables that belong together and that have no particular order
// In arrays, order matters. In objects, order does not matter.

// 2 ways of defining objects
// 1. object literal
var john = {
    // firstName is a property of the john object
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);

// accessing these properties using dot notation
console.log(john.firstName);
// accessing these properties using bracket notation
console.log(john['lastName']);
// accessing these properties using variables
var x = 'birthYear';
console.log(john[x]);

// mutating the data/properties
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// 2. object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

// ***************** Objects and Methods *****************
// We can also attach functions to objects - Methods

var melissa = {
    firstName: 'Melissa',
    lastName: 'Janiga',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'engineer',
    isMarried: false,
    calcAge: function(birthYear) {
        // function expression
        // this function is now a method of john
        // return 2018 - this.birthYear;
        // this = the object on which we have defined calcAge
        this.age = 2018 - this.birthYear;
    }
};

// below is the progression of using this and functions
// console.log(melissa.calcAge());
// var age = melissa.calcAge();
// john.age = melissa.calcAge();
melissa.calcAge();
console.log(melissa);

// *************** CODING CHALLENGE 4 ***************
// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Add a method to each object to calculate the BMI. Same the BMI to the object and also return it from the method.

var chris = {
    firstName: 'Chris',
    lastName: 'Kettle',
    mass: 80,
    height: 1.7,
    calcBMI: function(mass, height) {
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
};
// chris.calcBMI();
// console.log(chris);

var bob = {
    firstName: 'Bob',
    lastName: 'Bubble',
    mass: 90,
    height: 1.5,
    calcBMI: function(mass, height) {
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
};
// bob.calcBMI();
// console.log(bob);

// 3. Log to the console who has the hightest BMI, together with the full name and their respective BMI.

// console.log(chris.calcBMI());
// console.log(bob.calcBMI());
function compareBMI() {
    if (chris.calcBMI() === bob.calcBMI()) {
        console.log(chris.firstName + ' and ' + bob.firstName + ' have the same BMI!');
    } else if (chris.calcBMI() > bob.calcBMI()) {
        console.log(chris.firstName + ' has a higher BMI than Bob, with a BMI of ' + chris.calcBMI());
    } else {
        console.log(bob.firstName + ' has a higher BMI than Chris, with a BMI of ' + bob.calcBMI());
    }
}

compareBMI();

// ******************** Loops and iteration ********************
// Automate repetitive tasks

// For loop
// Has 3 parts:
// 1. initial value of a counter
// 2. a condition that is evaluated before each loop iteration to check if the loop should still be executed
// 3. a counter update

for (var i = 0; i < 10; i++) {
    // Loop block
    console.log(i);
}

// i  = 0, 0 < 10 is true, log i to console, counter updated i++
// i = 1, 1 < 10 is true, log i to console, counter updated
// i = 2, 2 < 10 is true, log i to console, counter updated
// ...
// i = 9, 9 < 10 is true, log i to console, counter updated
// i 10, 10 < 10 is FALSE ==> exits the loop

var margarita = ['Margarita', 'Barron', 1990, 'designer', false];

for (var i = 0; i < margarita.length; i++) {
    console.log(margarita[i]);
}

// Looping through arrays is usually one of the biggest uses of a for loop

// While loop
// In while loop, we only pass in the condition
var i = 0;
while (i < margarita.length) {
    console.log(margarita[i]);
    i++;
}

// continue and break statements
// continue will quit the current iteration and continue onto the next. Seems like a skip
// break will quit the loop entirely once the condition passed is met
var ivana = ['Ivana', 'Hicks', 1990, 'blogger', false];
for (var i = 0; i < ivana.length; i++) {
    if (typeof ivana[i] !== 'string') continue;
    // can also be written
    // if (typeof ivana[i] !== 'string') {
        // continue 
        //}
    console.log(ivana[i]);
}

var mayra = ['Mayra', 'Roman', 1990, 'student', false];
for (var i = 0; i < mayra.length; i++) {
    if (typeof mayra[i] !== 'string') break;
    console.log(mayra[i]);
}

// Looping backwards
for (var i = ivana.length - 1; i >= 0; i--) {
    console.log(ivana[i]);
}

// *************** CODING CHALLENGE 5 ***************
// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid pills and do the tip calculations
// 4. As an outpus, create:
    // 1) a new array containing all tips
    // 2) an array containing final paid amounts
    
var johnsFamilyBill = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calculateTip: function(bill) {
        for (i = 0; i < this.bills.length; i++) {
            if  (this.bills[i] < 50) {
                var tip = this.bills[i] * 0.2;
                this.tips.push(tip);
                var total = this.bills[i] + tip;
                this.totals.push(total);
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                var tip = this.bills[i] * .15;
                this.tips.push(tip);
                var total = this.bills[i] + tip;
                this.totals.push(total);
            } else {
                var tip = this.bills[i] * .1;
                this.tips.push(tip);
                var total = this.bills[i] + tip;
                this.totals.push(total);
            }
        }
        // console.log(this.bills);
        console.log('All tips: ' + this.tips + '\n' + 'Final paid amounts: ' + this.totals);
        // console.log(this.totals);
        // return [this.bills, this.tips, this.totals];
    }
}
johnsFamilyBill.calculateTip();

// EXTRA
// 5. Implement same functionality for Mark's family holiday trip using Marks tipping rules

var marksFamilyBill = {
    bills: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calculateTip: function(bill) {
        for (i = 0; i < this.bills.length; i++) {
            if  (this.bills[i] < 100) {
                var tip = this.bills[i] * 0.2;
                this.tips.push(tip);
                var total = this.bills[i] + tip;
                this.totals.push(total);
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                var tip = this.bills[i] * .1;
                this.tips.push(tip);
                var total = this.bills[i] + tip;
                this.totals.push(total);
            } else {
                var tip = this.bills[i] * .25;
                this.tips.push(tip);
                var total = this.bills[i] + tip;
                this.totals.push(total);
            }
        }
        console.log('All tips: ' + this.tips + '\n' + 'Final paid amounts: ' + this.totals);
    }
}
marksFamilyBill.calculateTip();

// 6. Create a function to calculate the average of a given array of tips

function calculateAverage(array) {
    var avg;
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = (sum / array.length);
    // console.log(avg);
    return avg;
} 

// 7. Calculate the average tip for each family
var johnsFamilyTipAverage = calculateAverage(johnsFamilyBill.tips);
var marksFamilyTipAverage = calculateAverage(marksFamilyBill.tips);

// 8. Log to the console which family paid the highest tips on average
function highestTipAverage() {
    if (johnsFamilyTipAverage > marksFamilyTipAverage){
        console.log('Johns Family paid the highest tips on average.');
    } else {
        console.log('Marks Family paid the highest tips on average.');
    }
}

highestTipAverage();