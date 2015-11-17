import Cipher from './modules/cipher';
let plainTextInput = $('#plainTextInput'),
	shiftEncrypt = $('#shiftEncrypt'),
	encryptButton = $('#encryptButton'),
	encryptedText = $('#encryptedText'),
	encryptedInput = $('#encryptedInput'),
	shiftDecrypt = $('#shiftDecrypt'),
	decryptButton = $('#decryptButton'),
	decryptedText = $('#decryptedText'),
	cipherTool = new Cipher();

encryptButton.on('touchstart, click', (e) => {
	e.stopPropagation();
	e.preventDefault();
	let cipherText = cipherTool.cipherText(plainTextInput.val(), shiftEncrypt.val(), 'encrypt');
	encryptedText.text(cipherText);
});

decryptButton.on('touchstart, click', (e) => {
	e.stopPropagation();
	e.preventDefault();
	let plainText = cipherTool.cipherText(encryptedInput.val(), shiftDecrypt.val(), 'decrypt');
	decryptedText.text(plainText);
});
