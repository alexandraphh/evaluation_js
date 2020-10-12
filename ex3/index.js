'use strict';

//Constructor
var MyMorpionXO = function MyMorpionXO(playerScore1, playerScore2, currentPlayer) {
  this.playerScore1 = playerScore1;
  this.playerScore2 = playerScore2;
  this.currentPlayer = currentPlayer;
};

//Generate the game
MyMorpionXO.prototype.run = function(){
  this.gridGenerator();
  this.setOnClick();
};

//Grid Generator (HTML)
MyMorpionXO.prototype.gridGenerator = function(){
  var grid = document.createElement('table');
  grid.style.borderCollapse = 'collapse';
  for (var i=0; i<3; i++){
    var tr = document.createElement('tr');
    for(var j=0; j<3; j++){
      var td = document.createElement('td');
      td.style.height = '50px';
      td.style.width = '50px';
      td.style.border = '1px solid black';
      tr.appendChild(td);
    }
    grid.appendChild(tr);
  }
  document.querySelector('body').appendChild(grid);
};

// Create an Event on click 
MyMorpionXO.prototype.setOnClick = function(){
  var grid = document.querySelectorAll('td');
  var game = this;
  grid.forEach(function(cell){
    cell.onclick = function(){
      if(cell.style.backgroundColor === ''){
        game.setSymbol(cell);
        if(game.isWinner()){
          game.updateWinnerScore();
          setTimeout(game.resetGrid, 1000);
          game.verifyGameWinner();
        } else {
          game.changeCurrentPlayer();
          if(game.isDraw()){
            setTimeout(game.resetGrid, 1000);
          }
        }
      }
    };
  })
};

MyMorpionXO.prototype.setSymbol = function(cell){
  if(this.currentPlayer === 1){
    cell.style.backgroundColor = 'red';
  } else {
    cell.style.backgroundColor = 'blue';
  }
};

MyMorpionXO.prototype.isWinner = function(){
  var grid = document.querySelectorAll('td');
  if (grid[0].style.backgroundColor && grid[1].style.backgroundColor && grid[2].style.backgroundColor) {
    return true;
  } else if (grid[3].style.backgroundColor && grid[4].style.backgroundColor && grid[5].style.backgroundColor) {
    return true;
  } else if (grid[6].style.backgroundColor && grid[7].style.backgroundColor && grid[8].style.backgroundColor) {
    return true;
  } else if (grid[0].style.backgroundColor && grid[3].style.backgroundColor && grid[6].style.backgroundColor) {
    return true;
  } else if (grid[1].style.backgroundColor && grid[4].style.backgroundColor && grid[7].style.backgroundColor) {
    return true;
  } else if (grid[2].style.backgroundColor && grid[5].style.backgroundColor && grid[8].style.backgroundColor) {
    return true;
  } else if (grid[0].style.backgroundColor && grid[4].style.backgroundColor && grid[8].style.backgroundColor) {
    return true;
  } else if (grid[2].style.backgroundColor && grid[4].style.backgroundColor && grid[6].style.backgroundColor) {
    return true;
  } else {
    return false;
  }
};

MyMorpionXO.prototype.isDraw = function() {
  var grid = document.querySelectorAll('td');
  for (var i = 0; i < grid.length; i++) {
    if (grid[i].style.backgroundColor === '') {
      return false;
    }
  }
  return true;
};

MyMorpionXO.prototype.resetGrid = function(){
  var grid = document.querySelectorAll('td');
  grid.forEach(function(cell){
    cell.style.backgroundColor = '';
  });
};

MyMorpionXO.prototype.updateWinnerScore = function(){
  if(this.currentPlayer === 1){
    this.playerScore1++;
  } else {
    this.playerScore2++;
  }
};

MyMorpionXO.prototype.verifyGameWinner = function(){
  if(this.playerScore1 === 3 || this.playerScore2 === 3){
    alert('Le joueur ' + this.currentPlayer + ' a gagn\é la partie !');
  }
};

MyMorpionXO.prototype.changeCurrentPlayer = function(){
  if(this.currentPlayer === 1){
    this.currentPlayer = 2;
  } else {
    this.currentPlayer = 1;
  }
};

//Test
var game = new MyMorpionXO(0,0,1);
game.run();