var player1 = prompt("Player 1: Enter your name You will be blue");
var player1color= 'rgb(86, 151, 255)';

var player2 = prompt("Player 2: Enter your name You will be red");
var player2color= 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum){
  console.log("You won starting at this row,col")
  console.log(rowNum)
  console.log(colNum)
}

function colorChange(rowIndex, colIndex, color){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function reportColor(rowIndex, colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
  var report = reportColor(5, colindex)
    for (var row = 5; row < -1; row--) {
      report = reportColor(row,colIndex)
      if (report === 'rgb(128, 128, 128)'){
        return row
      }
    }
}

function colorMatchCheck(one, two, three,four){
  return (one === two && one===three && one==four && one!=='rgb(128, 128, 128)' && one!==undefined);
}

function horizontalMatch(){
  for (var row = 0; row<6 ; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col) , returnColor(row,col+1) , returnColor(row,col+2) , returnColor(row,col+3))){
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else{
        continue;
        }
    }
  }
}

function verticalMatch(){
  for (var col = 0; col<7 ; col++) {
    for (var col = 0; col<5 ; col++) {
      for (var row = 0; row < 7; row++) {
        if (colorMatchCheck(returnColor(row,col) , returnColor(row,col+1) , returnColor(row,col+2) , returnColor(row,col+3))){
          console.log('horiz');
          reportWin(row,col);
          return true;
        }else{
          continue;
        }
    }
  }
}
}

function diagonalMatch(){
  for (var col = 0; col<7 ; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col) , returnColor(row+1,col+1) , returnColor(row+2,col+2) , returnColor(row+3,col+3))){
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if(colorMatchCheck(returnColor(row,col) , returnColor(row-1,col+1) , returnColor(row-2,col+2) , returnColor(row-3,col+3))){
        console.log('diag');
        reportWin(row,col);
        return rue;
      }
      else{
        continue;
        }
    }
  }
}

/*Game Logic starts here */

var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$('h3').text(player1+" it is your turn, pick a column to drop in !")

$('.Board button').on('click', function(){
  var col = $(this).closest('td').index();

  var bottomAvail = checkBottom(col)

  changeColor(bottomAvail, col, currentColor)

  if(horizontalMatch() || verticalMatch() || diagonalMatch()){
    $('h1').text(currentName+" have won!");
    $('h2').fadeOut('fast');
    $('h3').fadeout('fast');
  }

  currentPlayer = currentPlayer * -1;

  if (currentPlayer === 1){
    currentName = player1;
    $('h3').text(currentName+" it is your turn.");
    currentColor = player1color
  }else{
    currentName = player2;
    $('h3').text(currentName+" it is your turn.");
    currentColor = player2color;
  }
} )
