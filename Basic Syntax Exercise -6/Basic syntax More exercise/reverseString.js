function solve(name) {
	let result = '';

	for (let i = name.length; i >= 0; i--) {
		result = result + name.charAt(i);
	}
	console.log(result);
}
solve('Hello');
