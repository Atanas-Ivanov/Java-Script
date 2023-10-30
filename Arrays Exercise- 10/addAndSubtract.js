function addAndSubtract(input) {
	let resultArray = [];
	let inputArraySum = 0;
	let resultArraySum = 0;
	let inputLength = input.length;
	for (let i = 0; i < inputLength; i++) {
		let currentNumber = input[i];
		let odd = currentNumber - i;
		let even = currentNumber + i;
		if (currentNumber % 2 == 0) {
			resultArray.push(even);
		} else {
			resultArray.push(odd);
		}
		inputArraySum += currentNumber;
		resultArraySum += resultArray[i];
	}
	console.log(resultArray);
	console.log(inputArraySum);
	console.log(resultArraySum);
}
addAndSubtract([5, 15, 23, 56, 35]);

// function addAndSubtract(input) {
//   let inputArraySum = 0;
//   let resultArraySum = 0;
//   let resultArray = [];
//   for (let i = 0; i < input.length; i++) {
//     inputArraySum += input[i];
//     let currentNumber = input[i];
//     if (currentNumber % 2 === 0) {
//       resultArray.push(currentNumber + i);
//     } else {
//       resultArray.push(currentNumber - i);
//     }
//     resultArraySum += resultArray[i];
//   }
//   console.log(resultArray);
//   console.log(inputArraySum);
//   console.log(resultArraySum);
// }
