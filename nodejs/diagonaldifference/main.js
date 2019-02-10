// initalize with dummy data
const diagonalDifference = (input = [1, [11, 2, 4], [4, 5, 6], [10,8,-12]]) => {
	// drop the first value, since we have array.length
	input.shift();

	// init length for performance, and output vars
	let length = input.length,
		sumA = 0,
		sumB = 0;

	for (let i = 0; i < length; i++) {
		// since we're always dealing with a square, [i][i]
		// can be used to traverse diagonally, top left to
		// bottom right
		console.log(input[i][i], input[length - 1 - i][i]);
		sumA = sumA + input[i][i];

		// go top right to bottom left
		sumB = sumB + input[length - 1 - i][i];
	}
	return Math.abs(sumA - sumB);
};