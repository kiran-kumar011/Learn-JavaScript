// Arrays to work on
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods


// Find largest number in numbers
numbers.sort(function(a, b){
	return a - b;
});
console.log(numbers[numbers.length-1]);



// Find longest string in strings
var strings = ['this','is','a','collection','of','words'];
var count = strings.map(x => x.length);
count.sort(function(a,b){
	return a - b;
});
var result = strings.filter(x => x.length > count[count.length-1]-1);



// Find all the even numbers
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
function evenNumbers(numbers){
	store = '';
	for (i = 0; i < numbers.length; i++){
		if (numbers[i] % 2 === 0){
			store = store +' '+numbers[i];			
		}
	}return store;
}

// Find all the odd numbers
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
function oddNumbers(numbers){
	var store = '';
	for (i = 0; i < numbers.length; i++){
		if (numbers[i] % 2 != 0){
			store	= store + ' ' + numbers[i];
			console.log(store);
		}
	}
}

// Find all the words that contain 'is' use string method 'contains'
var strings = ['this','is','a','collection','of','words'];
var word = 'is';
console.log(`The word '${word}' '${strings.includes(word)? 'is': 'is not'}' the strings`);


// Find all the words that contain 'is' use string method 'indexOf'
var strings = ['this','is','a','collection','of','words'];
var word = 'is';
var indexOfFirst = strings.indexOf(word);
console.log(indexOfFirst);


// Check if all the numbers in numbers array are divisible by three use array method (every)
function divisibleArray(currentValue){
	return (currentValue % 3 === 0);
}
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
console.log(numbers.every(divisibleArray));



//  Sort Array from smallest to largestvar strings = ['this','is','a','collection','of','words'];
var strings = ['this','is','a','collection','of','words'];
strings.sort(function(a,b){
	return a.length - b.length;
});



// Remove the last word in strings
var strings = ['this','is','a','collection','of','words'];
console.log(strings.pop());

// Add a new word in the array
var strings = ['this','is','a','collection','of','words'];
console.log(strings.push('array'));


// Remove the first word in the array
var strings = ['this','is','a','collection','of','words'];
console.log(strings.shift());

// Place a new word at the start of the array use (upshift)
var strings = ['this','is','a','collection','of','words'];
console.log(strings.unshift('Hello'))


// Make a subset of numbers array [18,9,7,11]
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
console.log(numbers.slice(3,7));

// Make a subset of strings array ['a','collection']
var strings = ['this','is','a','collection','of','words'];
console.log(strings.slice(2,4));

// Replace 12 & 18 with 1221 and 1881
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var replaced = numbers.splice(1, 1, 1221);
numbers.splice(3,1,1881);

// Replace words with string in strings array
var strings = ['this','is','a','collection','of','words'];
strings.splice(5, 1, 'string');


// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'
var firstName = customers.map(value => (firstname[0] ==='J'){
	return firstName;
});

// Create new array with firstname and lastname


// Sort the array created above alphabetically

