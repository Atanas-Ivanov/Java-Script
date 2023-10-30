function cinema(input) {
	let type = input[0];
	let rows = Number(input[1]);
	let columns = Number(input[2]);
	let price = rows * columns;
	let income = 0;
	switch (type) {
		case 'Premiere':
			{
				income = income + price * 12;
			}
			break;

		case 'Normal':
			{
				income = income + price * 7.5;
			}
			break;

		case 'Discount':
			{
				income = income + price * 5;
			}
			break;
	}
	console.log(`${income.toFixed(2)} leva`);
}

cinema(['Normal', '21', '13']);
