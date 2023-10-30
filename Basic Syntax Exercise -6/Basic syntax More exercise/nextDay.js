function nextDay(year, month, day) {
	if (year === 1) {
		year = '1901';
	}

	let today = new Date(`${year}-${month}-${day}`);

	let nextDay = new Date(today);
	nextDay.setDate(today.getDate() + 1);
	let MyDateString =
		nextDay.getFullYear() +
		'-' +
		(nextDay.getMonth() + 1) +
		'-' +
		nextDay.getDate();

	console.log(MyDateString);
}
nextDay(1, 1, 1);
