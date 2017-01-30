/*	
	Problem: 
	Given an integer array, output all pairs that sum up to a specific value `x`. 
	Consider the fact that the same number can add up to `x` with its duplicates in the array and print the pair only once.

	Example 1: [1, 1, 2, 3, 4] and the desired sum is 4
	Output: is [[1, 3]] not [[1, 3], [3, 1]]

	Example 2: [3, 4, 5, 4, 4] and the desired sum is 8
	Output: is [[3, 5], [4, 4], [4, 4], [4, 4]]
*/ 

function findPairSum(arr, sum) {
	if (arr.length < 1 || sum === undefined) return new Error("Array of numbers or sum is not present");
	var tempArr = [];
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			var sumString = arr[i] + ", " + arr[j];
			var sumStringReverse = arr[j] + ", " + arr[i];
			if (!obj[sumString] && !obj[sumStringReverse] && (arr[i] + arr[j]) === sum) {
				if (arr[i] !== arr[j]) {
					obj[sumString] = true;
					obj[sumStringReverse] = true;
				}
				tempArr.push([arr[i], arr[j]]);
			}
		}
	}
	return tempArr;
}

// Example
findPairSum([3, 4, 5, 4, 4], 8); // [[3, 5], [4, 4], [4, 4], [4, 4]]

findPairSum([3, 4, 5, 6, 7], 10); // [[4, 6], [3, 7]]

findPairSum([1, 1, 2, 3, 4], 4); // [[1, 3]]