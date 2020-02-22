//Restart game Button
var restart = document.querySelector('#b')

//grab all the Squares
var squares = document.querySelectorAll('td')

//Clear all the squares
function clearboard()
{
  for (var i=0; i<squares.length;i++){
    squares[i].textContent = '';
  }
}

 restart.addEventListener('click', clearboard);

//Check the square changeMarker
function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O';
  }else{
    this.textContent = '';
  }
}

for (var i=0; i<squares.length ; i++){
  squares[i].addEventListener('click' , changeMarker);
}

// For loop to add event listeners to all the squares
