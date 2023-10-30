function printAndSum(start, end) {
	let sum = 0;
	let output = '';
	for (let currentNUmber = start; currentNUmber <= end; currentNUmber++) {
		sum += currentNUmber;
		output += `${currentNUmber} `;
	}
	console.log(output);
	console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
