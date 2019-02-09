function compareTriplets(a, b) {
	let aScore = 0,
		bScore = 0;

	for (const i in a) {
		if (a[i] > b[i]) aScore++;
		if (a[i] < b[i]) bScore++;
		if (a[i] === b[i]) continue;
	}
	return [aScore, bScore];
}