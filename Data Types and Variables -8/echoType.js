function solve(param) {
	let type = typeof param;
	if (type === 'string' || type === 'number') {
		console.log(param);
	} else {
		console.log('Parameter is not suitable for printing');
	}
}
solve('Hello, JavaScript!');
