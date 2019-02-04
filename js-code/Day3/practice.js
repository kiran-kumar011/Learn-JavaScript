

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.


// function decleration
function calculateDogAge(puppyAge = 0, humanAge = 7){
  var dogAge = (puppyAge * humanAge);
  return `your dog is ${dogAge} old in dog years!`;
}


// function expression
var calculateDogAge1 = function(puppyAge = 0, humanAge = 7){
  var dogAge = (puppyAge * humanAge);
  return `your dog is ${dogAge} old in dog years!`;
}

// arrow function
var calculateDogAge2 = (puppyAge = 0, humanAge = 7) => {
  var dogAge = (puppyAge * humanAge);
  return `your dog is ${dogAge} old in dog years!`;
}




// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.

// function decleration
function calculateSupply(age, ammountPerDay){
  var maxAge = (80 - age ) * 365;
  var ammountConsumedForTheRestOfLife = (maxAge * ammountPerDay);
  return `You will need ${ammountConsumedForTheRestOfLife} to last you untill the ripe old age of 80`;
}

// function expression
var calculateSupply1 = function(age, ammountPerDay){
  var maxAge = (80 - age ) * 365;
  var ammountConsumedForTheRestOfLife = (maxAge * ammountPerDay);
  return `You will need ${ammountConsumedForTheRestOfLife} to last you untill the ripe old age of 80`;
}

// arrow function
var calculateSupply2 = (age, ammountPerDay) => {
  var maxAge = (80 - age ) * 365;
  var ammountConsumedForTheRestOfLife = (maxAge * ammountPerDay);
  return `You will need ${ammountConsumedForTheRestOfLife} to last you untill the ripe old age of 80`;
}

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

// function decleration
function farenheitToCelsius(fahrenheit){
  var celsius = ((fahrenheit − 32) * (5/9));
  return celsius;
}


function celsiusToFahrenheit(celsius){
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit; 
}
//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

// Is there any difference in the behavior of these two variants?
// no diffrence observed

// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Do you have your parents permission to access this page?");
  }
}
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

// function decleration
function checkAge1(age){
 (age > 18)? 'Welcome to the website': 'Did parents allow you?';
  return;
}

// // function expression
function checkAge1(age){
let msg ='';
 (age > 18  && (msg ='Welcome to the website') ) || (msg = "hello");
return msg;
 
}


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.


// function decleration
function pow(x,n){
  sum = x;
  for (i=1; i<n; i++){
    sum = x * sum;
  } return sum;
}


// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
// function decleration
function countNumberOfVowels(n){
  var length = n.length;
  for (i = 0; i <= length; i++){
    var count = 0;
    if (n[i]=== "a" || n[i] === "e" || n[i] === "i" || n[i] === "o" || n[i] === "u"){
      count = sum + i;
    }
  }return count;
}


// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.

// Show the following output using one loop.
// 1, 2, 3, 4, 5
// 6, 7, 8, 9, 10

// function decleration
function oneLoopOutput(n){
  let sum = '';
  for (i = 1; i <=n ; i++){
    sum = sum + i + ' ';
    //console.log(i);

    if(i%5==0){
    console.log(sum);
    sum = '';
    }
  }
} 
// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

// Write a function that returns the largest element in a list.

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

function sumOfNumbers(n) {
  var sum = 0;
  for (i = 1; i <= n; i++) {
    sum = i + sum;
    console.log(sum);
  } return sum;
}
// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

// function decleration
function sumOfDivisibleNumFiveSeven(n){
  var sum = 0;
  for (i = 1; i <= n; i++){
    if (i % 5 === 0 || i % 7 === 0) {
      sum = i + sum;
    }
  }return sum;
}

// Write a program that takes a number under (25) and prints the multiplication table for the number.

// function decleration
function numbersTable(num){
  if (num <= 25) {
    for (i = 1; i <= 10; i++) {
      // console.log(num + "X" + i + " = " i * num);
      console.log(`${num} X ${i} = ${i * num}`);
    } else if 
  }
}






