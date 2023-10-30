function echoTypes(number) {
	let numberAsString = number.toString();
	let sumOfDigits = 0;
	for (let i = 0; i < numberAsString.length; i++) {
		currentDigit = Number(numberAsString[i]);
		sumOfDigits += currentDigit;
	}
	console.log(sumOfDigits);
}

echoTypes(245678);
