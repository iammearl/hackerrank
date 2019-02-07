const diagonalDifference = (input = [1, [11, 2, 4], [4, 5, 6], [10,8,-12]]) => {
	input.shift();
	let length = input.length,
		sumA = 0,
		sumB = 0;

	for (let i = 0; i < length; i++) {
		console.log(input[i][i], input[length - 1 - i][i]);
		sumA = sumA + input[i][i];
		sumB = sumB + input[length - 1 - i][i];
	}
	return Math.abs(sumA - sumB);
};