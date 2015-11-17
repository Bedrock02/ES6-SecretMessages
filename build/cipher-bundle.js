'use strict';

var plainTextInput = $('#plainTextInput');
var shiftEncrypt = $('#shiftEncrypt');
var encryptButton = $('#encryptButton');
var encryptedText = $('#encryptedText');
var encryptedInput = $('#encryptedInput');
var shiftDecrypt = $('#shiftDecrypt');
var decryptButton = $('#decryptButton');
var decryptedText = $('#decryptedText');

encryptButton.on('touchstart, click', function (e) {
	e.stopPropagation();
	e.preventDefault();
	// Some funciton here;
	console.log('ENCRYPT!');
});

decryptButton.on('touchstart, click', function (e) {
	e.stopPropagation();
	e.preventDefault();
	// Some Function here
	console.log('DECRYPT');
});
