//Select the section with an id of container without using querySelector.
var container = document.getElementsByTagName('section');

//Select the section with an id of container using querySelector.
var container1 = document.querySelector('#container');


//Select all of the list items with a class of "second".
var container2 = document.getElementsByClassName('second');


//Select a list item with a class of third, but only the list item inside of the ol tag.
var container3 = document.getElementsByClassName('third');



//Give the section with an id of container the text "Hello!".
var para = document.createElement('p');
para.innerText = 'Hello';
container1.appendChild(para);


//Add the class main to the div with a class of footer.
var footerClass = document.querySelector('.footer');
footerClass.classList.add('main');



//Remove the class main on the div with a class of footer.
footerClass.classList.remove('main');


//Create a new li element.
var newLi = document.createElement('li');



//Give the li the text "four".
newLi.innerText = 'four';



//Append the li to the ul element.
var ul = document.querySelector('ul');
ul.appendChild(newLi);



//Loop over all of the list inside the ol tag and give them a background color of "green".
var ol = document.querySelector('ol');
Array.from(ol.children).forEach(value => {
	value.style.background = 'green';
})



//Remove the div with a class of footer.
footerClass.classList.remove('footer');








