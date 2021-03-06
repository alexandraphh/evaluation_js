'use strict';

/**
* Check if phoneNumber begins with 01, 06 or 07 and is composed of 10 numbers
* @param {number} phone number
*/

function isValidPhoneNumber(phoneNumber){
  return !phoneNumber.search(/(01|06|07)[0-9]{8}/g);
}

/**
* Test
*/
console.log(isValidPhoneNumber('0123456789'));
console.log(isValidPhoneNumber('0395194'));
