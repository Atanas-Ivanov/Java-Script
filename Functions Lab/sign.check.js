function checkProductSign(numOne, numTwo, numThree) {
	let result = 'Positive';
	if (
		(numOne < 0 && numTwo > 0 && numThree > 0) ||
		(numOne > 0 && numTwo < 0 && numThree > 0) ||
		(numOne > 0 && numTwo > 0 && numThree < 0) ||
		(numOne < 0 && numTwo < 0 && numThree < 0)
	) {
		result = 'Negative';
	}
	console.log(result);
}

checkSign(5, 12, -15);
