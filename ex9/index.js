'use strict';

/**
* Check if my String is a palindrome
* @param {string} str
*/
function checkPalindrome(str) {
	var regex = /[^A-Za-z]/g;
	str = str.toLowerCase().replace(regex, '');
	for (var i = 0; i < str.length/2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
/**
* Test
*/
console.log(checkPalindrome("ressasser"));
console.log(checkPalindrome("ressasser"));

