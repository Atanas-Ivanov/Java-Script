function multiplicationTable(n) {
	let sum = 0;
	for (let i = 1; i <= 10; i++) {
		sum = i * n;
		console.log(`${n} X ${i} = ${sum}`);
	}
}
multiplicationTable(5);
