var firstBtn = document.getElementById('firstButton');

firstBtn.addEventListener('click',function(e){
  //Good list of events can be seen here: https://developer.mozilla.org/en-US/docs/Web/Events
  console.dir(e)  
});

firstBtn.addEventListener('dblclick', function(e){
  console.log("dbl click")
});

function changeMyColor(){
  var button = document.getElementById('secondButton');
  var colors = ['yellow','red','blue', 'pink','black','blueviolet', 'chocolate', 'coral'];
  button.style.background = colors[Math.floor(Math.random() * colors.length)];
}

function rotate(){  

  var rotateAngle = rotateText('secondButton',45);  
  document.getElementById('secondButton').style.transition = 'all 1s'
  document.getElementById('secondButton').style.transform = 'rotate('+rotateAngle+'deg)';

}

function rotateText(buttonID, rotateBy){

  //extract rotation angle
  var currentTextRotation = document.getElementById(buttonID).style.transform;  
  var rotateEndOfNumber = currentTextRotation.search('deg');  
  var rotateAngleString = currentTextRotation.substr(7,rotateEndOfNumber-7);  
  var rotateAngle = parseInt(rotateAngleString);

  //check that angle is valid, and correct if invalid

  if(!rotateAngle || rotateAngle >= 360){

    if (rotateAngle>=360){
      rotateAngle = rotateAngle-360;
    } else{
      rotateAngle = 0;
    }    
  };

  //new rotation angle
  rotateAngle += rotateBy;

  return rotateAngle;
}

// --- input text event ---

//set input and output elements
var inputElement = document.getElementById('inputName');
var outputElement = document.getElementById('output');

//input from input-text
inputElement.addEventListener('keyup', function(e){  

  
  var textInp = '';
  // if enter send to....
  if(e.keyCode === 13){
    textInp = 'send: ';    
  } 

  //output to output-element
    
  textInp += e.target.value; 
  outputElement.innerText = textInp; 

})

//prevent reload of the page
inputElement.addEventListener('keydown', function(e){
  if(e.keyCode === 13){
    e.preventDefault();
  }
})

//submit button

document.getElementById('inputNameSubmit').addEventListener('click', function(){

  outputElement.innerText = 'submit: '+inputElement.value

})

