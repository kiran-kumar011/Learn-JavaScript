// random li generator
let firstFlip = null;
let secondFlip = null;
const lists = document.querySelector('ul');
function displayCard(e) {
  const type = e.target;
  if (e.target.className === 'card') {
  	e.target.classList.add('cardDisabled');
    compareElm(type);
  }
}
function compareElm(elm) {
  // console.log(elm.type);
	if(firstFlip === null){
		firstFlip = elm;
	console.dir(firstFlip);
		return;
	}else if (secondFlip === null) {
		secondFlip = elm;
		console.log(secondFlip, 'sec')
		if(firstFlip.dataset.type != secondFlip.dataset.type) {
			let firstFlipcopy = firstFlip; let secondFlipcopy = secondFlip; 
			setTimeout(() => {
			firstFlipcopy.classList.remove('cardDisabled');
			secondFlipcopy.classList.remove('cardDisabled');
			console.log(firstFlipcopy.dataset.type);
			}, 1000)
			firstFlip = null, secondFlip = null;
		}else if (firstFlip.dataset.type === secondFlip.dataset.type){
			firstFlip = null, secondFlip = null;
		}
	}
}


lists.addEventListener('click', displayCard);
