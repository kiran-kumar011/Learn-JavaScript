// Practice different way of writing function
//  i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function

/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// function // Optional
// functionName // Optional
// (arguments) // Optional
// return // Optional

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);
let convertToString = n => {
  return String(n);
};

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

// Function decleration
function addOneToGivenNumber (n) {
	return n + 1;
}


// Function Expression
var addOneToGivenNumber1 = function(n) {
	return n + 1;
}


// Arrow function
var addOneToGivenNumber2 = (n) => n + 1;



/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */


//function decleration
function substractOne(num) {
	return num - 1;
}

// function expression
var substractOne1 = function(num){
	return num - 1;
}

// Arrow function 
var substractOne2 =  (num) => num - 1;

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

// function decleration
// var a = Number(prompt('type the number'));
// var b = Number(prompt('type the number'));
function addTwoNumber(a=0 ,b=0) {
	return a + b;
}

// function expression
var addTwoNumber1 = function(a,b){
	return a + b;
}

// Arrow function
var addTwoNumber2 = (a=0, b=0) => a + b;


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 // function decleration
 function substractSecondNumber(a=0, b=0) {
 		return a - b;
 }

 // function expression
 var substractSecondNumber1 = function (a,b){
 	return a - b;
 }

 // arrow function
 var substractSecondNumber2 = (a, b) => a - b;
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
// function decleration
function multiplyTwoNumber(a=0, b=0) {
	return a * b;
}

// Function expression
var multiplyTwoNumbers = function(a=0, b=0){
	return a * b;
} 

// Arrow function
var multiplyTwoNumbers = (a=0, b=0) => a * b;




/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

// function decleration
function divideFirstWithSecond(a=0, b=0) {
	return a / b;
}

// function expression
var divideFirstWithSecond1 = function(a=0, b=0) {
	return a / b;
}

// arrow function
var divideFirstWithSecond2 = (a=0, b=0) => a / b;


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
// function decleration
function multipliesSameNumber(a=0){
	return a * a;
}

// function expression
var multipliesSameNumber = function(a=0){
	return a * a;
} 

// arrow function
var multipliesSameNumber = (a=0) => a * a; 



/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

// function decleration
function mathematicalOperation(a=7, b=8){
	if (c === "add"){
		return `X + Y = ${x + y}`;
	} else if (c === "substract"){
		return a - b;
	} else if (c === "multiply"){
		return a * b;
	} else if (c === "divide") {
		return a / bz;
	}
}

// function expression
var mathematicalOperation = function(a=0, b=0) {
	if (c === "add"){
		return a + b;
	} else if (c === "substract"){
		return a - b;
	} else if (c === "multiply"){
		return a * b;
	} else if (c === "divide") {
		return a / b;
	}
}

// arrow function
var mathematicalOperation2 = (a=0, b=0) => {
	if (c === "add"){
		return a + b;
	} else if (c === "substract"){
		return a - b;
	} else if (c === "multiply"){
		return a * b;
	} else if (c === "divide") {
		return a / b;
	}
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
// function decleration
function greaterValue(a, b) {
	if (a > b) {
		return true;
	} else  {
		return false; 
	}
}


//  function expression
var greaterValue1 = function(a, b) {
	if (a > b) {
		return true;
	} else  {
		return false; 
	}
}

// arrow function
var greaterValue2 = (a,b) => {
	if (a > b) {
		return true;
	} else  {
		return false; 
	}
}


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

// function decleration
function leastValue(a, b) {
	if (a < b) {
		return true;
	} else  {
		return false; 
	}
}


// function expression
var leastValue2 = function(a,b) {
	if (a < b) {
		return true;
	} else  {
		return false; 
	}
}

// arrow function
var leastValue3 = (a,b) => {
	if (a < b) {
		return true;
	} else  {
		return false; 
	}
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

// function decleration
function equalValue(a,b) {
	if (a === b){
		return "equal";
	} else {
		return 'value is not equal to a'
	}
}

// function expression
var equalValue1 = function(a,b){
	if (a === b){
		return "equal";
	} else {
		return 'value is not equal to a'
	}
}

// arrow function
var equalValue2 = (a,b) => {
	if (a === b){
		return "equal";
	} else {
		return 'value is not equal to a'
	}
}


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

// function decleration
function leastValueOfTwoNumber(a,b) {
	if(a < b){
		return `${a} 'the smallest value`;
	} else if (b < a) {
		return `${b}  'the smallest value`;
	}
}

// function expression
var leastValueOfTwoNumber1 = function(a,b) {
	if(a < b){
		return `${a} 'the smallest value`;
	} else if (b < a) {
		return `${b}  'the smallest value`;
	}
}

// arrow function
var leastValueOfTwoNumber2 = (a,b) => {
	if(a < b){
		return `${a} 'the smallest value`;
	} else if (b < a) {
		return `${b}  'the smallest value`;
	}
}


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 // function decleration
 function largestValueOfTwo(x,y) {
 	if (x > y) {
 		return `X is the largest number`;
 	} else if (y > x) {
 		return `Y is the largest number`;
 	}
 }

// function expression
var largestValueOfTwo1 = function(x,y) {
	if (x > y) {
 		return `X is the largest number`;
 	} else if (y > x) {
 		return `Y is the largest number`;
 	}
}

// arrow function
var largestValueOfTwo2 = (x,y) => {
	if (x > y) {
 		return `X is the largest number`;
 	} else if (y > x) {
 		return `Y is the largest number`;
 	}
}
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 // function decleration
function evenNumber(n){
	if (n%2 ===0){
		return true;
	} 
}

// function expression
var evenNumber1 = funcion(n){
	if (n%2 ===0){
		return true;
	}
}
// if the else if condition n%2 !=0 then it still returns the value even if its not typed.
// arrow function
var evenNumber2 = (n) => {
	if (n%2 ===0){
		return true;
	}
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

// if the else if condition n%2 !=0 then it still returns the value even if its not typed.
// function decleration
function oddNumber(n){
	if (n%2 != 0){
		return true;
	}
}

// function expression
var oddNumber1 = function(n){
	if (n%2 != 0){
		return true;
	}
}

// arrow function
var oddNumber2 = (n) => {
	if (n%2 != 0){
		return true;
	}
}


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
// function decleration
function gradeReturn(score=0, maxScore=100){
	var percentage = (score / maxScore)*100;
	if (percentage >90 && percentage<= 100){
		return `Grade A`;
	} else if (percentage>80 && percentage<= 90){
		return `Grade B`;
	} else if (percentage>70 && percentage<= 80){
		return `Grade C`; 
	} else if (percentage>60 && percentage<= 70){
		return `Grade D`;
	}else if (percentage>0 && percentage<= 60){
		return `Grade F`;
	}
}

// function expression
var gradeReturn1 = function (score=0, maxScore = 100){
	var percentage = (score / maxScore)*100;
	if (percentage >90 && percentage<= 100){
		return `Grade A`;
	} else if (percentage>80 && percentage<= 90){
		return `Grade B`;
	} else if (percentage>70 && percentage<= 80){
		return `Grade C`; 
	} else if (percentage>60 && percentage<= 70){
		return `Grade D`;
	}else if (percentage>0 && percentage<= 60){
		return `Grade F`;
	}
}

// arrow function
var gradeReturn2 = (score = 0, maxScore = 100) => {
	var percentage = (score / maxScore)*100;
	if (percentage >90 && percentage<= 100){
		return `Grade A`;
	} else if (percentage>80 && percentage<= 90){
		return `Grade B`;
	} else if (percentage>70 && percentage<= 80){
		return `Grade C`; 
	} else if (percentage>60 && percentage<= 70){
		return `Grade D`;
	}else if (percentage>0 && percentage<= 60){
		return `Grade F`;
	}
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
// function decleration
function joiningTwoStrings(str1, str2){
	var str1 = prompt('write two to three words');
	var str2 = prompt('write two to three words');
	return `${str1} ${str2}`;
}

// function expression
var joiningTwoStrings1 = function(str1, str2){
	var str1 = prompt('write two to three words');
	var str2 = prompt('write two to three words');
	return `${str1} ${str2}`;
}

// arrow function
var joiningTwoStrings2 = (str1, str2) => {
	var str1 = prompt('write two to three words');
	var str2 = prompt('write two to three words');
	return `${str1} ${str2}`;
}

 
/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

// function decleration
function circleObject(radius){
	var circumference = 2 * Math.PI * radius;
	var area = Math.PI * radius*radius;
	var circle = radius * 2;
	return `${circle} is circle diameter, ${circumference} is circumferential area and ${area} is the area of the circle.`;
}

// function expression
var circleObject1 = function(radius){
	var circumference = 2 * Math.PI * radius;
	var area = Math.PI * radius*radius;
	var circle = radius * 2;
	return `${circle} is circle diameter, ${circumference} is circumferential area and ${area} is the area of the circle.`;
}

// arrow function
var circleObject2 = (radius) => {
	var circumference = 2 * Math.PI * radius;
	var area = Math.PI * radius*radius;
	var circle = radius * 2;
	return `${circle} is circle diameter, ${circumference} is circumferential area and ${area} is the area of the circle.`;
}


















