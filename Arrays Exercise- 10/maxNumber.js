function findTopIntegers(arr) {
	let result = [];
	let max = arr[arr.length - 1];
	result.push(max);
	for (let i = arr.length - 2; i >= 0; i--) {
		if (arr[i] > max) {
			max = arr[i];
			result.push(max);
		}
	}
	console.log(result.reverse().join(' '));
}

findTopIntegers([14, 24, 3, 19, 15, 17]);
