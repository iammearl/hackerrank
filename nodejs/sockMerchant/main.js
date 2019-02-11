function sockMerchant(n, ar) {
	let sockColors = {},
		pairs = 0;
	for (let sock of ar) {
		if (sockColors[sock]) {
			pairs = pairs + 1;
			sockColors[sock] = undefined;
		} else {
			sockColors[sock] = sock;
		}
	}
	return pairs;
}