function greatestCommonDiviser(a, b) {
	while (b !== 0) {
		let temp = b;
		b = a % b;
		a = temp;
	}
	console.log(a);
}
greatestCommonDiviser(15, 5);
