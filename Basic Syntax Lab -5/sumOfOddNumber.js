function solve(n) {
	let totalSum = 0;
	for (let i = 0; i < n * 2; i++) {
		if (i % 2 === 1) {
			console.log(i);
			totalSum += i;
		}
	}
	console.log(`Sum: ${totalSum}`);
}
solve(5);
