function palindromeIntegers(arr) {
	arr.forEach((num) => {
		let numStr = num.toString();
		let reverseStr = numStr.split('').reverse().join('');
		if (numStr === reverseStr) {
			console.log('true');
		} else {
			console.log('false');
		}
	});
}

palindromeIntegers([123, 323, 421, 121]);
