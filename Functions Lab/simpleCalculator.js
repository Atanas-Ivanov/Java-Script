const calculate = (numOne, numTwo, operator) => {
	switch (operator) {
		case 'add':
			return numOne + numTwo;
			break;
		case 'subtract':
			return numOne - numTwo;
			break;
		case 'multiply':
			return numOne * numTwo;
			break;
		case 'divide':
			return numOne / numTwo;
			break;
		default:
			return 'Invalid operator';
	}
};

console.log(calculate(5, 5, 'multiply'));
console.log(calculate(2, 4, 'subtract'));
console.log(calculate(2, 4, 'multiply'));
console.log(calculate(2, 4, 'divide'));
console.log(calculate(2, 4, 'invalid'));
