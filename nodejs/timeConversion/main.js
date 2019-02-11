function timeConversion(string = "07:05:45PM") {
	// get the HH:MM:SS section
	let timeArr = string.slice(0, string.length-2).split(":");
	// get the last two characters, AM/PM
	let ampm = string.slice(string.length-2, string.length);

	if (ampm.toUpperCase() === "PM") { // handle PM
		// 12pm doesn't need to change, but anything lower does
		if (Number(timeArr[0]) < 12) {
			timeArr[0] = Number(timeArr[0]) + 12;
		}
	} else { // handle AM
		// 12am should be 00
		if (Number(timeArr[0]) === 12) {
			timeArr[0] = "00";
		}
	}

	/*
	// lazy formatting
	return timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2];
	//*/

	// Better:
	return timeArr.join(":");
}