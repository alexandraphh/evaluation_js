'use strict';

/**
 * Generates a grid of size xAxis * yAxis
 * @param {number} xAxis
 * @param {mumber} yAxis
 */
function gridGenerator(xAxis, yAxis){
  var grid = document.createElement('table');
  grid.style.borderCollapse = 'collapse';
    for (var i=0; i<xAxis; i++){
      var tr = document.createElement('tr');
      for(var j=0; j<yAxis; j++){
        var td = document.createElement('td');
        td.style.height = '50px';
        td.style.width = '50px';
        td.style.border = '2px solid black'
        tr.appendChild(td);
      }
      grid.appendChild(tr);
    }
    document.querySelector('body').appendChild(grid);
}

/**
* Set a random color for each cell of the generated grid
*/
function setRandomColor(){
  var td = document.querySelectorAll('td');
  td.forEach(function(td){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    td.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  });
}

/**
* Test
*/
gridGenerator(2,3);
setInterval(setRandomColor, Math.random()*1000 + 1000);