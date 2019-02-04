// Write a JavaScript function to check whether an `input` is a string or not.
function checkInputType(input){
	var inputType = typeof input;
	return inputType;
}

// Write a JavaScript function to check whether a string is blank or not.
function checkInputType(string){
	var length = string.length
	if (length === 0){
		return `Empty string`;
	} else {
		return `${length} string length`;
	}
}

// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']

function splitString(string){
	var wordsCopy = string.split(' ');
	console.log(wordsCopy);
}


// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"
function sliceString(string){
	var output = string.slice(, 4);
	console.log(output);
}


// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)

function convertString(name){
	var words = name.split(' ');
	var word1 = name.split(words[1]);
	console.log(word1[0]);
}


// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"



// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower
function parameterize(string){
	var splitted = string.split(' ');
	var lowerCaseJoin = splitted.join('-').toLowerCase();
	return lowerCaseJoin;	
}	


// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'

//Old Approach
function capitalizeString(string){
	var words = string.split(' ');
	var words0 = words[0];
	var output0= words0.charAt(0).toUpperCase() + words0.substring(1);

	var words1 = words[1];
	var output1 =  words1.charAt(0).toUpperCase() + words1.substring(1); 
	var words2 = words[2];
	var output2 = words2.charAt(0).toUpperCase() + words2.substring(1);

	var words3 = words[3];
	var output3 =  words3.charAt(0).toUpperCase() + words3.substring(1);
	console.log(`${output0} ${output1} ${output2} ${output3}`);
}

//new approach
var string = 'hello Batman from India';
var splitted = string.split(' ');
var result = splitted.map(value => {
	var splitArr = value.split('');
	splitArr[0] = splitArr[0].toUpperCase();
	console.log(splitArr);
	return splitArr.join('');
	console.log(splitArr.join(''));
});
result.join(' ');


// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'

function letterCaseInverse(string){
	var length = string.length;
	var output = "";
	for (i = 0; i < length; i++){
		if (string[i]=== string[i].toLowerCase()){
			output = output + string[i].toUpperCase();
		} else if (string[i]=== string[i].toUpperCase()){
			output = output + string[i].toLowerCase();
		}
	} return output;
}

// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'
var strings = "Learning about js";
var splitted = strings.split(' ');
	var result = splitted.map((value, index) => {
		if (index === 0){
			console.log(value.toLowerCase());
			return value.toLowerCase();
			
		} else {
			var splitArr = value.split('');
			console.log(splitArr);
			splitArr[0] = splitArr[0].toUpperCase();
			return splitArr.join('');
}
	})
result.join('');

// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'
function convertStringToCamelCase(string){
	var length = string.length;
	var result = string[0];
	for (i = 1; i < length; i++){
		if (string[i]!= string[i].toUpperCase()){
			result = result + string[i];
		}else if(string[i] === string[i].toUpperCase()){
			result = result + " " + string[i];
		}
	}return result;
}



// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'
function concatString(string){
	return string.repeat(2);
}

// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd


