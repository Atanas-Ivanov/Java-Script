function suppliesForSchool(input) {
	let packetPens = Number(input[0]);
	let packetMarkers = Number(input[1]);
	let boardCleaner = Number(input[2]);
	let discountValue = Number(input[3]);
	let singlePacketPens = 5.8;
	let singlePacketMarker = 7.2;
	let litreCleaner = 1.2;
	let totalPrice =
		packetPens * singlePacketPens +
		packetMarkers * singlePacketMarker +
		boardCleaner * litreCleaner;
	let priceWithDiscount = totalPrice - totalPrice * (discountValue / 100);
	console.log(priceWithDiscount);
}
suppliesForSchool(['2 ', '3 ', '4 ', '25 ']);
