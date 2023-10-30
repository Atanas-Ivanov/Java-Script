function greenYards(input) {
	let metresGreen = Number(input[0]);
	let squareMeterPrice = 7.61;
	let discountPercentage = 0.18;
	let totalPrice = metresGreen * squareMeterPrice;
	let discountPrice = totalPrice * discountPercentage;
	let totalDiscountPrice = totalPrice - discountPrice;
	console.log(`The final price is: ${totalDiscountPrice} lv.`);
	console.log(`The discount is: ${discountPrice} lv.`);
}
greenYards(['150']);
