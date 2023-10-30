function fishingBoat(input) {
	let budget = Number(input[0]);
	let season = input[1];
	let peopleCount = Number(input[2]);

	if (season == 'Spring') {
		price = 3000;
		if (peopleCount <= 6) {
			discount = (price * 10) / 100;
			price = price - discount;
		} else if (peopleCount >= 7 && peopleCount <= 11) {
			discount = (price * 15) / 100;
			price = price - discount;
		} else if (peopleCount >= 12) {
			discount = (price * 25) / 100;
			price = price - discount;
		}
		if (peopleCount % 2 == 0) {
			discount = (price * 5) / 100;
			price = price - discount;
		}
	} else if (season == 'Summer') {
		price = 4200;
		if (peopleCount <= 6) {
			discount = (price * 10) / 100;
			price = price - discount;
		} else if (peopleCount >= 7 && peopleCount <= 11) {
			discount = (price * 15) / 100;
			price = price - discount;
		} else if (peopleCount >= 12) {
			discount = (price * 25) / 100;
			price = price - discount;
		}
		if (peopleCount % 2 == 0) {
			discount = (price * 5) / 100;
			price = price - discount;
		}
	} else if (season == 'Autumn') {
		price = 4200;
		if (peopleCount <= 6) {
			discount = (price * 10) / 100;
			price = price - discount;
		} else if (peopleCount >= 7 && peopleCount <= 11) {
			discount = (price * 15) / 100;
			price = price - discount;
		} else if (peopleCount >= 12) {
			discount = (price * 25) / 100;
			price = price - discount;
		}
	} else if (season == 'Winter') {
		price = 2600;
		if (peopleCount <= 6) {
			discount = (price * 10) / 100;
			price = price - discount;
		} else if (peopleCount >= 7 && peopleCount <= 11) {
			discount = (price * 15) / 100;
			price = price - discount;
		} else if (peopleCount >= 12) {
			discount = (price * 25) / 100;
			price = price - discount;
		}
		if (peopleCount % 2 == 0) {
			discount = (price * 5) / 100;
			price = price - discount;
		}
	}
	if (budget > price) {
		moneyLeft = budget - price;

		console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
	} else if (price > budget) {
		sumNeeded = price - budget;
		console.log(`Not enough money! You need ${sumNeeded.toFixed(2)} leva.`);
	}
}
fishingBoat(['2000', 'Winter', '13']);
