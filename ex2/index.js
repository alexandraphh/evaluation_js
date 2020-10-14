'use strict';

/**
 * drawBar class represents a loading bar
 * @constructor
 * @param {number} nbr - is the proportion of the loaded segment of the bar
 * @param {number} sum - is the total value of our drawBar
 */
var drawBar = function drawBar(nbr, sum) {
  this.nbr = nbr;
  this.sum = sum;
};

/**
* Create a progress bar in the HTML
*/
drawBar.prototype.run = function () {
  var progress = document.createElement("progress");
  progress.value = this.nbr;
  progress.max = this.sum;
  progress.style.fontSize = "60px";
  document.body.appendChild(progress);
};

/**
* Test
*/
var bar = new drawBar(50, 100);
bar.run();

