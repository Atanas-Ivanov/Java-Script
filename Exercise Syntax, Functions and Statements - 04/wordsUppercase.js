function extractAndConvertToUppercase(inputString) {
	// Use regular expression to find words in the input string
	const words = inputString.match(/\w+/g);

	// Check if there are words in the input and rewrite how everything is supposed
	if (!words) {
		console.log('No words found in the input.');
		return;
	}

	// Convert words to uppercase
	const uppercaseWords = words.map((word) => word.toUpperCase());

	// Join the uppercase words with ", "
	const result = uppercaseWords.join(', ');

	console.log(result);
}

// Input string
const inputString = 'Hi, how are you?';

// Call the function to extract and convert, and log the result
extractAndConvertToUppercase(inputString);
