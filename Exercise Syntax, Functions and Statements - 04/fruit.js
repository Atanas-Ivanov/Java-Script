function fruit(type, weightGr, priceKg) {
	let weightKg = weightGr / 1000;
	let finalPrice = priceKg * weightKg;
	console.log(
		`I need $${finalPrice.toFixed(2)} to buy ${weightKg.toFixed(
			2
		)} kilograms ${type}.`
	);
}

fruit('orange', 2500, 1.8);
//I need $4.50 to buy 2.50 kilograms orange.
