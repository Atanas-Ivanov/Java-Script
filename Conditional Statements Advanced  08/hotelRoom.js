function hotelRoom(input) {
	let month = input[0];
	let nightsCount = Number(input[1]);

	switch (month) {
		case 'May':
			let studioPrice = 50;
			let apartmentPrice = 65;
			apartmentTotal = apartmentPrice * nightsCount;
			studioTotal = studioPrice * nightsCount;
			if (nightsCount > 7) {
				apartmentTotal = (apartmentTotal * 5) / 100;
				studioTotal = (studioTotal * 5) / 100;
			} else if (nightsCount > 14) {
				apartmentTotal = (apartmentTotal * 10) / 100;
				studioTotal = (studioTotal * 30) / 100;
			}

			break;
		case 'October':
			studioPrice = 50;
			apartmentPrice = 65;
			break;
		case 'June':
			studioPrice = 75.2;
			apartmentPrice = 68.7;
			break;
		case 'September':
			studioPrice = 75.2;
			apartmentPrice = 68.7;
			break;
		case 'July':
			studioPrice = 76;
			apartmentPrice = 77;
			break;
		case 'August':
			studioPrice = 76;
			apartmentPrice = 77;
			break;
	}
	console.log(apartmentTotal);
	console.log(nightsCount);
	console.log(`“Apartment: ${apartmentTotal.toFixed(2)} lv.`);

	console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
}
hotelRoom(['May', '15']);
