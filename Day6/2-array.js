var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'crocodils',
  'pearl',
  'orchard',
  'crackpot'
];


//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var count = words.map(x => x.length);
count.sort(function(a, b){
  return a.length - b.length;
});
var result = words.find(x => x.length > count[count.length-1]);

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
var reducer = (accumulator, currentValue) => accumulator + currentValue;
var result = numbers1.reduce(reducer);

var resultAvg = result/ numbers1.length;




//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2){
  var sum = 0;
  for (i = 0; i < numbers2.length; i++){
  sum = sum + numbers2[i];
  } return `${sum / numbers2.length}`;
} 


// ===============================================

var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(){
  var stringLength = words2.map(x => x.length);
  var sum = 0;
 for (i = 0; i < stringLength.length; i++){
    sum = sum + stringLength[i];
   } 
}




var stringLength = words2.map(x => x.length)
 var sum = 0;
 for (i = 0; i < stringLength.length; i++){
    sum = sum + stringLength[i];
  }
var result = sum / word2.length;
