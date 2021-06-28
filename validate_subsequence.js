//iterate through the sequence
//for every number in sequence, iterate through the array
//once we hit the same number, keep track of the index of that number to the array
//if the index is less than the current pointer, return false, if it is greater, update the index
//if we loop through without updating anything, return false


function isValidSubsequence(array, sequence) {
	let currentIndex = null;
	for (let i = 0; i < sequence.length; i++) {
		let seqNum = sequence[i];
		if (!array.includes(seqNum)) {
			return false;
		}
		if (currentIndex === null || array.indexOf(seqNum) > currentIndex) {
			currentIndex = array.indexOf(seqNum);
			array[array.indexOf(seqNum)] = '_';
		} else {
			return false
		}
	}
	return true;
}