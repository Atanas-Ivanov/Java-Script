function vacationBooksList(input) {
	let pages = Number(input[0]);
	let pagesPerHour = Number(input[1]);
	let daysReading = Number(input[2]);
	let totalHours = pages / pagesPerHour;
	let totalHoursPerDay = totalHours / daysReading;
	console.log(totalHoursPerDay);
}
vacationBooksList(['212 ', '20 ', '2 ']);
