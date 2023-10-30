function checkPassword(password) {
	let hasCorrectLength = password.length >= 6 && password.length <= 10;
	let hasOnlyLettersAndDigits = /^[a-zA-Z0-9]+$/.test(password);
	let hasAtLeastTwoDigits = (password.match(/\d/g) || []).length >= 2;

	if (hasCorrectLength && hasOnlyLettersAndDigits && hasAtLeastTwoDigits) {
		console.log('Password is valid');
	} else {
		if (!hasCorrectLength) {
			console.log('Password must be between 6 and 10 characters');
		}
		if (!hasOnlyLettersAndDigits) {
			console.log('Password must consist only of letters and digits');
		}
		if (!hasAtLeastTwoDigits) {
			console.log('Password must have at least 2 digits');
		}
	}
}
checkPassword('MyPass123');
