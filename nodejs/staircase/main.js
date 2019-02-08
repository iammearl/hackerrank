function staircase(n) {
	let i = n,
		str = "";
	while (i) {
		// minus 1 and plus 1 handle top not being 0
		// and ensuring there is a base of n
		str = " ".repeat(i - 1) + "#".repeat(n - i + 1);
		console.log(str);
		i--;
	}
}


/* not working, array fill doesn't seem to like strings.
function staircase(n) {
    let array = [];
    array.fill("#", 0, n - 1);
    //    console.log(array);

    for (let i = n; i < n; i--) {
		array = array.unshift(" ");
		array = array.pop();
    	console.log(""+array);
    }
}
//*/