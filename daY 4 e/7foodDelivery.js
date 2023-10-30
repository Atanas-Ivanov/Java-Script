function foodDelivery(input) {
	let chicken = Number(input[0]);
	let fish = Number(input[1]);
	let vegan = Number(input[2]);
	let chickenPrice = chicken * 10.35;
	let fishPrice = fish * 12.4;
	let veganPrice = vegan * 8.15;
	let totalFoodPrice = chickenPrice + fishPrice + veganPrice;
	let desertPrice = totalFoodPrice * 0.2;
	let deliveryPrice = 2.5;
	let totalPrice = totalFoodPrice + desertPrice + deliveryPrice;
	console.log(totalPrice);
}
foodDelivery(['2 ', '4 ', '3 ']);
