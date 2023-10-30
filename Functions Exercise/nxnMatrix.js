function nxnMatrix(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		let result = '';
		for (let k = 1; k <= num; k++) {
			result += `${num} `;
		}
		arr.push(result);
	}
	console.log(arr.join('\n'));
}
nxnMatrix([3]);
