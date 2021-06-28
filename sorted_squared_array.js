function sortedSquaredArray(array) {
	let squareArr = array.map(num => {
		return num * num
	})
	let sortedSquareArr = squareArr.sort((a,b) => a-b)
  return squareArr;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;