//Selectors
// - getElementById
var header = document.getElementById('firstHeader');

header.innerText = 'JS changed the header';
header.style.color = 'red';
var rem = '4rem'
header.style.fontSize = rem;
header.innerHTML = "<div>bla</div><div>BLO</div>"

// getElementsByClassName
let hioushs = document.getElementsByClassName('hioush');

console.log('hioushs')
console.dir(hioushs);

for (let i = 0; i < hioushs.length; i++) {
  hioushs[i].style.color = 'green';
}

//getElementsByTagName + specific element
let myId = document.getElementById('specialDiv');
let listItmesInMyID = myId.getElementsByTagName('li');
for (let i = 0; i < listItmesInMyID.length; i++) {
  listItmesInMyID[i].style.background = 'orange'
}

//querySelectorAll
var paragraphs = document.querySelectorAll('p');

console.dir(paragraphs)

for (let i = 0; i < paragraphs.length; i++) {

  paragraphs[i].innerText = 'paragraph was changed by JS: ' + i;
  paragraphs[i].style.color = 'blue';

}

// ------ Create Elements ----- 

var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'newDiv');
newDiv.innerText = 'I am the new guy in the bla';
document.body.appendChild(newDiv);


