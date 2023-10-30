function sameNumbers(num) {
	let numToStr = num.toString();
	let firstNum = numToStr[0];
	let allSame = true;
	let sum = 0;
	for (let i = 0; i < numToStr.length; i++) {
		if (numToStr[i] !== firstNum) {
			allSame = false;
		}
		sum += parseInt(numToStr[i]);
	}
	console.log(allSame);
	console.log(sum);
}
sameNumbers(1234);
//sameNumbers(1234);
