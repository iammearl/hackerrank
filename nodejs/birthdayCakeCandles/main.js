// Fails test 8... hmm.
function birthdayCakeCandles_FAILS(arr = [1,2,3,1,1,1,4,4,1,3]) {
	// sort array small to large, so highest is at end 
	arr.sort();

	// filter the array to list out only the quantity of the
	// highest candle / value (now last based on sort)
	return arr.filter(value => value === arr[arr.length-1]).length;
}

// in reading into .sort(), it isn't the best for finding max, and
// it reorders the array, which in realworld probably isn't good
// this works, though:

// calc max with es6 array destructuring instead (works 100%)
function birthdayCakeCandles(arr = [1,2,3,1,1,1,4,4,1,3]) {
	// find max int in array
	let max = Math.max(...arr);

	// return length of a filtered array of instances of max
	return arr.filter(value => value === max).length;
}