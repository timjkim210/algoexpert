//Solution 1 - iterate using two for loops

function twoNumberSum(array, targetSum) {
	//iterate through the array
	//for each number, iterate through the rest of the array
	//check if the two numbers add to the target sum
	//if they do return the array with the two numbers immediately
	//after iterating completlely through, means there were not two numbers
	//return empty array
  // Write your code here.
	
	for (let i = 0; i <= array.length - 1; i++) {
		let firstNum = array[i];
		for (let j = i+1; j <= array.length; j++) {
			let secondNum = array[j];
			if (firstNum + secondNum === targetSum) {
				return [firstNum, secondNum]
			}
		}
	}
		return [];
}


//--------------------------------------------------------------

//Solution 2

// Write your code here.
  //sort the array
  //initialize pointers at the left most and right most element
  //start a while loop, while left element is less than right element
  //check if they equal each other
  //if sum is less than target, move left pointer to left
  //if sum is greater than target move right pointer to left
  //repeat
  //if exits the while loop return empty array

function twoNumberSum(array, targetSum) {
	debugger
	
	let sortedArr = array.sort((a,b) => a-b);
	let left = sortedArr[0];
	let right = sortedArr[sortedArr.length - 1]
	
	while (sortedArr.indexOf(left) < sortedArr.indexOf(right)) {
		let sum = left + right;
		if (sum === targetSum) {
			return [right, left]
		} else if (sum > targetSum) {
			right = sortedArr[sortedArr.indexOf(right) - 1]
		} else if (sum < targetSum) {
			left = sortedArr[sortedArr.indexOf(left) + 1]
		}
	}
	
	return [];
}

