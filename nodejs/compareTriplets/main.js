function compareTriplets(a, b) {
	// init output
	let aScore = 0,
		bScore = 0;

	for (const i in a) {
		// don't record or check if equal
		if (a[i] === b[i]) continue;

		// increment respective score
		if (a[i] > b[i]) aScore++;
		if (a[i] < b[i]) bScore++;
	}

	// return scores
	return [aScore, bScore];
}