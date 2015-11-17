export default class Cipher {

	constructor() {
		this.EXCEPTIONS = [32, 33, 40, 41, 44, 46, 58, 63];
	}

	cipherText(input, shiftNum, method) {
		let text = '',
			key = parseInt(shiftNum)%26,
			shouldEncrypt = method === 'encrypt';

		for (let i=0; i < input.length; i++) {
			let charASCII = input.charCodeAt(i),
				newCharASCII = shouldEncrypt ? charASCII - key : charASCII + key,
				isUpperCase = (charASCII >= 65) && (charASCII <=90),
				isLowerCase = (charASCII >= 97) && (charASCII <= 122),
				isLetter = isUpperCase || isLowerCase,
				addOffset;

				if (shouldEncrypt) {
					addOffset = (isLowerCase && newCharASCII < 97) || (isUpperCase && newCharASCII < 65);
				} else {
					addOffset = (isLowerCase && newCharASCII > 122) || (isUpperCase && newCharASCII > 90);
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
}