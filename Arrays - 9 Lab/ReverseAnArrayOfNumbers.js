function ReverseAnArrayOfNumbers(count, numbers) {
	let result = [];
	for (let i = 0; i < count; i++) {
		result[count - 1 - i] = numbers[i];
	}

	console.log(result.join(' '));
}
ReverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
