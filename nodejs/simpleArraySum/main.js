// refactorer
function simpleArraySum(arr) {
	// refactored with anon func
	return arr.reduce((acc, current) => acc + current);
}

// refactor, works on v big sum, too
function simpleArraySumSecond(arr) {
	// use reduce, which remembers the last output value
	const reducer = (reducer, current) => reducer + current;
	return arr.reduce(reducer);
}

// First attempt
function simpleArraySumFIRST(ar) {
	// set output
	let sum = 0;

	for (let digit of ar) {
		// increment output by current digit
		sum = sum + digit;
	}

	// return output
	return sum;
}