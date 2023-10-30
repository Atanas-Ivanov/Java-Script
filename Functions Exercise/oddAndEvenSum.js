function oddAndEvenSum(number) {
	let oddSum = 0;
	let evenSum = 0;

	function findOddSum(num) {
		let strNum = num.toString();
		for (let i = 0; i < strNum.length; i++) {
			let digit = parseInt(strNum[i]);

			if (digit % 2 !== 0) {
				oddSum += digit;
			}
		}
		return oddSum;
	}

	function findEvenSum(num) {
		let strNum = num.toString();
		for (let i = 0; i < strNum.length; i++) {
			let digit = parseInt(strNum[i]);
			if (digit % 2 == 0) {
				evenSum += digit;
			}
		}
		return evenSum;
	}
	let sumOdd = findOddSum(number);
	let sumEven = findEvenSum(number);

	console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(1000435);
