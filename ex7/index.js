'use strict';

/**
 * Compute the average of a array of notes
 * @param {number} notes is a array of notes
 */

function computeNotes(notes) {
  var sum = 0;
  for(var i=0; i<notes.length; i++){
  	sum += notes[i];
  }
  return sum/notes.length;
}
console.log(computeNotes([10, 13, 13, 12, 15, 12, 11, 16, 14]));

