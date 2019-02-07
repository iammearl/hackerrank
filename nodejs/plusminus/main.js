// Complete the plusMinus function below.
function plusMinus(arr) {
	let pos = 0,
		neg = 0,
		zero = 0,
		len = arr.length;

	for (let num of arr) {
		if (num > 0) {
			pos++;
		}
		if (num < 0) {
			neg++;
		}
		if (num === 0) {
			zero++;
		}
	}
	let pout = pos / len,
		nout = neg / len,
		zout = zero / len;
	console.log(`${pout.toFixed(6)}\n${nout.toFixed(6)}\n${zout.toFixed(6)}`);

}