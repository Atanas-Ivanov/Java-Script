function projectsCreation(input) {
	let name = input[0];
	let countProjects = Number(input[1]);
	let needTime = countProjects * 3;
	console.log(
		`The architect ${name} will need ${needTime} hours to complete ${countProjects} project/s.`
	);
}
projectsCreation(['George', '4']);
