

// First Solution
const twoNumberSum = (array, targetSum) => {
    if (typeof array !== 'object' || array.length < 2) return []
    if (typeof targetSum !== 'number') return []

    const result = []

    for (let i = 0; i <= array.length - 1; i++) {
        for (let j = 0; j <= array.length - 1; j++) {
            if (array[i] == array[j])
                continue;
            else if (array[i] + array[j] === targetSum) {
                result.push(array[i], array[j])
                return result
            }
        }
    }

    return result;
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)) // [-1, 11]
console.log(twoNumberSum([4, 6], 10)) // [4, 6]
console.log(twoNumberSum([4, 6, 1], 5)) // [4, 1]
console.log(twoNumberSum([4, 6, 1, -3], 3)) // [-3, 6]