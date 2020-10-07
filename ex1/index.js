'use strict';

/*
 * Generates a grid of size xAxis * yAxis
 * @param {number} xAxis
 * @param {mumber} yAxis
 */
function gridGenerator(xAxis, yAxis){
  var grid = document.createElement('table');
    for (var i=0; i<xAxis; i++){
      var tr = document.createElement('tr');
      for(var j=0; j<yAxis; j++){
        var td = document.createElement('td');  
        tr.appendChild(td);
      }
      grid.appendChild(tr);
    }
    document.querySelector('body').appendChild(grid);
}
