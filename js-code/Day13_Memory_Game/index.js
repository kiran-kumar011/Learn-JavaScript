// random li generator
let firstFlip = null;
let secondFlip = null;
let movesAndTime = document.querySelector('.movesAndTime');
const lists = document.querySelector('ul');
const listElm = [`<li class="card" data-type='bomb'><i class="fas fa-bomb"></i></li>`,
  `<li class="card" data-type='gem'><i class="fas fa-gem"></i></li>`,
  `<li class="card" data-type='bicycle'><i class="fas fa-bicycle"></i></li>`,
  `<li class="card" data-type='bolt'><i class="fas fa-bolt"></i></li>`,
  `<li class="card" data-type='plane'><i class="fas fa-paper-plane"></i></li>`,
  `<li class="card" data-type='jet'><i class="fas fa-fighter-jet"></i></li>`,
  `<li class="card" data-type='leaf'><i class="fab fa-canadian-maple-leaf"></i></li>`,
  `<li class="card" data-type='anchor'><i class="fas fa-anchor"></i></li>`,
  `<li class="card" data-type='bomb'><i class="fas fa-bomb"></i></li>`,
  `<li class="card" data-type='gem'><i class="fas fa-gem"></i></li>`,
  `<li class="card" data-type='bicycle'><i class="fas fa-bicycle"></i></li>`,
  `<li class="card" data-type='bolt'><i class="fas fa-bolt"></i></li>`,
  `<li class="card" data-type='plane'><i class="fas fa-paper-plane"></i></li>`,
  `<li class="card" data-type='jet'><i class="fas fa-fighter-jet"></i></li>`,
  `<li class="card" data-type='leaf'><i class="fab fa-canadian-maple-leaf"></i></li>`,
  `<li class="card" data-type='anchor'><i class="fas fa-anchor"></i></li>`];

lists.innerHTML = listElm.sort(value => 0.5 - Math.random()).join('');

function displayCard(e) {
  const type = e.target;
  if (e.target.className === 'card') {
    e.target.classList.add('cardDisabled');
    compareElm(type);
  }
}
var moves = 0;

function compareElm(elm) {
  if (firstFlip === null) {
    firstFlip = elm;
    return;
  } else if (secondFlip === null) {
    secondFlip = elm;
    moves = moves + 1;
    if (firstFlip.dataset.type !== secondFlip.dataset.type) {
      const firstFlipcopy = firstFlip; const secondFlipcopy = secondFlip;
      setTimeout(() => {
        firstFlipcopy.classList.remove('cardDisabled');
        secondFlipcopy.classList.remove('cardDisabled');
      }, 1000);
      firstFlip = null, secondFlip = null;
    } else if (firstFlip.dataset.type === secondFlip.dataset.type) {
      firstFlip = null, secondFlip = null;
      
    }
  }
  const movesCount = document.querySelector('.movesCount');
  movesCount.textContent = `${moves} Moves`;
  movesAndTime.appendChild(movesCount);
}
setInterval(displayTime, 1000);
lists.addEventListener('click', displayCard);

// displaying the timer
let counter = 0;
const timer = document.querySelector('.timer');

function convertSeconds(s) {
  const min = Math.floor(s / 60);
  const sec = s % 60;
  return `${min} min : ${sec} sec`;
}
function displayTime() {
  counter++;
  timer.textContent = convertSeconds(counter);
}



// function displayTime() {
//   var date = new Date();
//   // var h = date.getHours();
//   var m = date.getMinutes();
//   var s = date.getSeconds();
//   var time = m + ':' + s;
//   var timer = document.querySelector('.timer');
//   // console.dir(m);
//   timer.textContent = time;
//   movesAndTime.appendChild(timer);
// }
