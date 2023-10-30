// function addSndSubtract(num1, num2, num3) {
// 	let sum = num1 + num2;
// 	let substraction = sum - num3;
// 	console.log(substraction);
// }
// addSndSubtract(23, 6, 10);

function addSndSubtract(number1, number2, number3) {
	function add(num1, num2) {
		let sumOfNumbers = num1 + num2;
		return sumOfNumbers;
	}

	let sum = add(number1, number2);

	function subtract(sumOfTwo, numberThree) {
		return sumOfTwo - numberThree;
	}
	let finalResult = subtract(sum, number3);
	console.log(finalResult);
}

addSndSubtract(23, 6, 10);
