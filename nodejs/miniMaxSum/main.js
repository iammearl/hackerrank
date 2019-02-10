function miniMaxSum(arr = [1,2,3,4,5]) {
	let sumArr = Array(arr.length).fill(0),
		i = arr.length-1;
	while (i >= 0) {
		let j = arr.length - 1
		while (j >= 0) {
			if (j !== i) sumArr[i] += arr[j];
			j--;
		}
		i--;
	}
	sumArr.sort();
	// return [sumArr[0], sumArr[arr.length-1]];
	console.log(sumArr[0], sumArr[arr.length-1]);
}