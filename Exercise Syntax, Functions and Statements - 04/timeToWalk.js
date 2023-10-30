function timeToWalk(steps, stepsLength, speedKM) {
	distanceInMeters = steps * stepsLength;
	speedMetersPerSecond = speedKM / 3.6;
	let rest = Math.floor(distanceInMeters / 500) * 60;
	let time = distanceInMeters / speedMetersPerSecond + rest;
	let hours = Math.floor(time / 3600);
	let minuets = Math.floor(time / 60);
	let seconds = Math.round(time % 60);

	console.log(
		`${hours < 10 ? '0' : ''}${hours}:${minuets < 10 ? '0' : ''}${minuets}:${
			seconds < 10 ? '0' : ''
		}${seconds}`
	);
}
timeToWalk(4000, 0.6, 5);
