function nonConstructibleChange(coins) {
	// set currentchange to zero
	//sort the input array
	//loop through the input array
	//if the number is greater than current change plus 1 return current change plus 1
	//if not set current change to the value of the number plus current change
	
	let currentChange = 0
	coins = coins.sort((a, b) => a - b)
	
	for (let i = 0; i < coins.length; i++) {
		if (coins[i] > currentChange + 1) {
			return currentChange + 1
		} else {
			currentChange += coins[i]
		}
	}
	return currentChange + 1
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;