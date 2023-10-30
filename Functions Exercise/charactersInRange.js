// function charactersInRange(firstChar, secondChar) {
// 	let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
// 	let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

// 	let resultString = '';

// 	for (
// 		let currentChar = rangeStart + 1;
// 		currentChar < rangeEnd;
// 		currentChar++
// 	) {
// 		let singleChar = String.fromCharCode(currentChar);
// 		resultString += `${singleChar} `;
// 	}
// 	console.log(resultString);
// }

function charactersInRange(firstChar, secondChar) {
	let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
	let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

	let charactersArray = [];

	for (
		let currentChar = rangeStart + 1;
		currentChar < rangeEnd;
		currentChar++
	) {
		let singleChar = String.fromCharCode(currentChar);
		charactersArray.push(singleChar);
	}
	console.log(charactersArray.join(' '));
}
charactersInRange('#', ':');
