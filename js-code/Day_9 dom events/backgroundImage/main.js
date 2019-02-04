// Make a webpage where when you click the background of the page shoud change to some different color.
document.body.addEventListener('click', color);
function color(){
	document.body.style.background = 'blue';
}

// * Bonus
// Make a function to randomly generate the background color using combination of hex code.
document.body.addEventListener('click', random);
function random(){
	var generator = Math.floor(Math.random() * 10000);
	var color = `#ee${generator}`;
	document.body.style.background = `${color}`;
}





