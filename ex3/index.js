'use strict';

/**
 * MyMorpion is a game with 2 players X and O
 * @constructor
 * @param {number} nbr - Score of player 1
 * @param {number} nbr - Score of player 2
 */
var MyMorpionXO = function MyMorpionXO(playerScore1, playerScore2) {
  this.playerScore1 = playerScore1;
  this.playerScore2 = playerScore2;
  this.currentPlayer = 1;
};

/**
* Generate the game
* Run
*/
MyMorpionXO.prototype.run = function(){
  this.gridGenerator();
  this.setOnClick();
};

/**
* Grid Generator (HTML)
*/
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
      td.style.textAlign = "center";
      td.style.fontSize = "40px";
      tr.appendChild(td);
    }
    grid.appendChild(tr);
  }
  var playerScore1 = document.createElement('span');
  playerScore1.innerHTML = 'Player 1: 0';
  var playerScore2 = document.createElement('span');
  playerScore2.innerHTML = 'Player 2: 0';

  var body = document.querySelector('body');
  body.appendChild(grid);
  body.appendChild(playerScore1);
  body.appendChild(document.createElement('br'));
  body.appendChild(playerScore2);
};

/**
* Create an Event on click 
*/
MyMorpionXO.prototype.setOnClick = function(){
  var grid = document.querySelectorAll('td');
  var game = this;
  grid.forEach(function(td){
    td.onclick = function(){
      if(td.innerHTML === ''){
        game.setSymbol(td);
        if(game.hasWinner()){ 
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

MyMorpionXO.prototype.setSymbol = function(td){
  if(this.currentPlayer === 1){
    td.innerHTML = 'X';
  } else {
    td.innerHTML = 'O';
  }
};

/**
* Conditions for a win 
*/
MyMorpionXO.prototype.hasWinner = function(){
  var grid = document.querySelectorAll('td');
  if (grid[0].innerHTML !== '' && grid[0].innerHTML === grid[1].innerHTML && grid[1].innerHTML === grid[2].innerHTML) {
    return true;
  } else if (grid[3].innerHTML !== '' && grid[3].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[5].innerHTML) {
    return true;
  } else if (grid[6].innerHTML !== '' && grid[6].innerHTML === grid[7].innerHTML && grid[7].innerHTML === grid[8].innerHTML) {
    return true;
  } else if (grid[0].innerHTML !== '' && grid[0].innerHTML === grid[3].innerHTML && grid[3].innerHTML === grid[6].innerHTML) {
    return true;
  } else if (grid[1].innerHTML !== '' && grid[1].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[7].innerHTML) {
    return true;
  } else if (grid[2].innerHTML !== '' && grid[2].innerHTML === grid[5].innerHTML && grid[5].innerHTML === grid[8].innerHTML) {
    return true;
  } else if (grid[0].innerHTML !== '' && grid[0].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[8].innerHTML) {
    return true;
  } else if (grid[2].innerHTML !== '' && grid[2].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[6].innerHTML) {
    return true;
  } else {
    return false;
  }
};

MyMorpionXO.prototype.isDraw = function() {
  var grid = document.querySelectorAll('td');
  for (var i = 0; i < grid.length; i++) {
    if (grid[i].innerHTML === '') {
      return false;
    }
  }
  return true;
};

MyMorpionXO.prototype.resetGrid = function(){
  var grid = document.querySelectorAll('td');
  grid.forEach(function(td){
    td.innerHTML = '';
  });
};

/**
* Display and update the number of win of players
*/
MyMorpionXO.prototype.updateWinnerScore = function(){
  if(this.currentPlayer === 1){
    this.playerScore1++;
  } else {
    this.playerScore2++;
  }

  var scores = document.querySelectorAll('span');
  scores[0].innerHTML = 'Player 1: ' + this.playerScore1;
  scores[1].innerHTML = 'Player 2: ' + this.playerScore2;
};

/**
* Case of winner of the game : 3 wins 
*/
MyMorpionXO.prototype.verifyGameWinner = function(){
  if(this.playerScore1 === 3 || this.playerScore2 === 3){
    alert('Le joueur ' + this.currentPlayer + ' a gagn\é la partie !');
  }
};

/**
* Change player if no winner yet
**/
MyMorpionXO.prototype.changeCurrentPlayer = function(){
  if(this.currentPlayer === 1){
    this.currentPlayer = 2;
  } else {
    this.currentPlayer = 1;
  }
};

/**
*Test
*/
var game = new MyMorpionXO(0,0);
game.run();