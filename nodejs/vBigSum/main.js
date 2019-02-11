// refactorer
function aVeryBigSum(arr) {
	return arr.reduce((acc, current) => acc + current);
}

// refactor
function aVeryBigSumSECOND(arr) {
	const acc = (acc, current) => acc + current;
	return arr.reduce(acc);
}

function aVeryBigSumFIRST(ar) {
	let total = 0;
	for (const int of ar) {
		total = total + int;
	}
	return total;
}