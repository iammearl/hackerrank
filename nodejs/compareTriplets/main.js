function compareTriplets(a, b) {
	let aScore = 0,
		bScore = 0;

	for (const i in a) {
		if (a[i] === b[i]) continue;
		if (a[i] > b[i]) aScore++;
		if (a[i] < b[i]) bScore++;
	}
	return [aScore, bScore];
}