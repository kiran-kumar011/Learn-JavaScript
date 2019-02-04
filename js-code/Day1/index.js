
alert("I'm Learning Javascript");
function displayalert() {
	var userName = prompt("what is your name");
	// alert(userName)
	var element = document.querySelector(".input");
	element.textContent = "Hello " + userName;
}