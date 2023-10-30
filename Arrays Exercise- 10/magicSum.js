function printUniquePairs(array, sum) {
	let uniquePairs = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === sum) {
				uniquePairs.push([array[i], array[j]]);
			}
		}
	}

	let maxTwo = [];
	for (let i = 0; i < uniquePairs.length; i++) {
		if (uniquePairs[i][0] > uniquePairs[i][1]) {
			maxTwo.push(uniquePairs[i][0]);
		} else {
			maxTwo.push(uniquePairs[i][1]);
		}
	}
	maxTwo = Array.from(new Set(maxTwo)).sort((a, b) => b - a);
	maxTwo = maxTwo.slice(0, 2);

	console.log(maxTwo[0], maxTwo[1]);
	for (let i = 0; i < uniquePairs.length; i++) {
		if (
			uniquePairs[i][0] === maxTwo[0] ||
			uniquePairs[i][0] === maxTwo[1] ||
			uniquePairs[i][1] === maxTwo[0] ||
			uniquePairs[i][1] === maxTwo[1]
		) {
			console.log(uniquePairs[i][0], uniquePairs[i][1]);
		}
	}
}
printUniquePairs(
	[14, 20, 60, 13, 7, 19, 8],

	27
);
