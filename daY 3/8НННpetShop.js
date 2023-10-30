function petShop(input) {
	let dogFood = Number(input[0]);
	let catFood = Number(input[1]);
	let singlePriceDogFood = 2.5;
	let singlePriceCatFood = 4;
	let totalPrice = dogFood * singlePriceDogFood + catFood * singlePriceCatFood;
	console.log(totalPrice);
}
petShop(['5 ', '4 ']);
