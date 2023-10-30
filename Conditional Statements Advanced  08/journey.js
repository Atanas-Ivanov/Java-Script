function journey(input) {
	let budget = Number(input[0]);
	let season = input[1];

	if (budget <= 100) {
		destination = 'Bulgaria';
		if (season == 'summer') {
			holidayType = 'Camp';
			moneySpend = (budget * 30) / 100;
		} else if (season == 'winter') {
			holidayType = 'Hotel';
			moneySpend = (budget * 70) / 100;
		}
	}
	if (budget <= 1000 && budget > 100) {
		destination = 'Balkans';
		if (season == 'summer') {
			holidayType = 'Camp';
			moneySpend = (budget * 40) / 100;
		} else if (season == 'winter') {
			holidayType = 'Hotel';
			moneySpend = (budget * 80) / 100;
		}
	}
	if (budget > 1000) {
		destination = 'Europe';
		holidayType = 'Hotel';
		moneySpend = (budget * 90) / 100;
	}

	console.log(`Somewhere in ${destination}`);

	console.log(`${holidayType} - ${moneySpend.toFixed(2)}`);
}
journey(['75', 'winter']);
