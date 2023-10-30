function painting(input) {
	let nylon = Number(input[0]);
	let paintInL = Number(input[1]);
	let dissolver = Number(input[2]);
	let hoursForWork = Number(input[3]);

	let nylonPrice = (nylon + 2) * 1.5;
	let paintInLPrice = (paintInL + 0.1 * paintInL) * 14.5;
	let dissolverPrice = dissolver * 5;

	let bags = 0.4;

	let materialsPrice = nylonPrice + paintInLPrice + dissolverPrice + bags;
	let WorkersPrice = materialsPrice * 0.3 * hoursForWork;

	let totalPrice = materialsPrice + WorkersPrice;

	console.log(totalPrice);
}
painting(['10 ', '11 ', '4 ', '8 ']);
