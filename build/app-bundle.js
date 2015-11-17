(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _cipher = require('./modules/cipher');

var _cipher2 = _interopRequireDefault(_cipher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plainTextInput = $('#plainTextInput'),
    shiftEncrypt = $('#shiftEncrypt'),
    encryptButton = $('#encryptButton'),
    encryptedText = $('#encryptedText'),
    encryptedInput = $('#encryptedInput'),
    shiftDecrypt = $('#shiftDecrypt'),
    decryptButton = $('#decryptButton'),
    decryptedText = $('#decryptedText'),
    cipherTool = new _cipher2.default();

encryptButton.on('touchstart, click', function (e) {
	e.stopPropagation();
	e.preventDefault();
	var cipherText = cipherTool.cipherText(plainTextInput.val(), shiftEncrypt.val(), 'encrypt');
	encryptedText.text(cipherText);
});

decryptButton.on('touchstart, click', function (e) {
	e.stopPropagation();
	e.preventDefault();
	var plainText = cipherTool.cipherText(encryptedInput.val(), shiftDecrypt.val(), 'decrypt');
	decryptedText.text(plainText);
});

},{"./modules/cipher":2}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cipher = (function () {
	function Cipher() {
		_classCallCheck(this, Cipher);

		this.EXCEPTIONS = [32, 33, 40, 41, 44, 46, 58, 63];
	}

	_createClass(Cipher, [{
		key: 'cipherText',
		value: function cipherText(input, shiftNum, method) {
			var text = '',
			    key = parseInt(shiftNum) % 26,
			    shouldEncrypt = method === 'encrypt';

			for (var i = 0; i < input.length; i++) {
				var charASCII = input.charCodeAt(i),
				    newCharASCII = shouldEncrypt ? charASCII - key : charASCII + key,
				    isUpperCase = charASCII >= 65 && charASCII <= 90,
				    isLowerCase = charASCII >= 97 && charASCII <= 122,
				    isLetter = isUpperCase || isLowerCase,
				    addOffset = undefined;

				if (shouldEncrypt) {
					addOffset = isLowerCase && newCharASCII < 97 || isUpperCase && newCharASCII < 65;
				} else {
					addOffset = isLowerCase && newCharASCII > 122 || isUpperCase && newCharASCII > 90;
				}

				// If part of exception, continue
				if ($.inArray(charASCII, this.EXCEPTIONS) > -1) {
					text = text.concat(String.fromCharCode(charASCII));
					continue;
				}

				if (isLetter && addOffset) {
					newCharASCII = shouldEncrypt ? newCharASCII + 26 : newCharASCII - 26;
				}

				text = text.concat(String.fromCharCode(newCharASCII));
			}
			return text;
		}
	}]);

	return Cipher;
})();

exports.default = Cipher;

},{}]},{},[1]);
