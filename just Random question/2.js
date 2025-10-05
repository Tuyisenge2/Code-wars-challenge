// Imagine a group of young engineers trying to solve a puzzle involving sequences of lights on a giant circuit board. Each light sequence is represented by a non-negative integer, where reversing the digits in the integer represents reversing the light sequence. The reversal process flipDigits involves flipping the order of the digits and removing any leading zeroes from the result. For instance:

// flipDigits(5070) = 705
// flipDigits(800) = 8
// flipDigits(123) = 321
// Some special pairs of light sequences can be combined in a unique way that makes them equivalent, no matter which sequence starts the combination.

// Given an array of non-negative integers arr, the engineers need to calculate how many pairs (i, j) exist such that i ≤ j and arr[i] + flipDigits(arr[j]) = arr[j] + flipDigits(arr[i]).

// Example

// For arr = [1, 20, 2, 11], the output should be solution(arr) = 7.

// For (i, j) = (0, 0) equality holds: 1 + 1 = 1 + 1,
// For (i, j) = (0, 1) equality doesn't hold: 1 + 2 ≠ 20 + 1,
// For (i, j) = (0, 2) equality holds: 1 + 2 = 2 + 1,
// For (i, j) = (0, 3) equality holds: 1 + 11 = 11 + 1,
// For (i, j) = (1, 1) equality holds: 20 + 2 = 20 + 2,
// For (i, j) = (1, 2) equality doesn't hold: 20 + 2 ≠ 2 + 2,
// For (i, j) = (1, 3) equality doesn't hold: 20 + 11 ≠ 11 + 2,
// For (i, j) = (2, 2) equality holds: 2 + 2 = 2 + 2,
// For (i, j) = (2, 3) equality holds: 2 + 11 = 11 + 2,
// For (i, j) = (3, 3) equality holds: 11 + 11 = 11 + 11,
// So the total number of such pairs is 7.

// For arr = [32, 332, 100], the output should be solution(arr) = 4.

// For (i, j) = (0, 0) equality holds: 32 + 23 = 32 + 23,
// For (i, j) = (0, 1) equality doesn't hold: 32 + 233 ≠ 332 + 23,
// For (i, j) = (0, 2) equality doesn't hold: 32 + 1 ≠ 100 + 23,
// For (i, j) = (1, 1) equality holds: 332 + 233 = 332 + 233,
// For (i, j) = (1, 2) equality holds: 332 + 1 = 100 + 233,
// For (i, j) = (2, 2) equality holds: 100 + 1 = 100 + 1,
// So the total number of such pairs is 4.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer arr

// An array of non-negative integers representing the light sequences on the circuit board.

// Guaranteed constraints:
// 2 ≤ arr.length ≤ 105,
// 0 ≤ arr[i] ≤ 109.

// [output] integer64

// The number of pairs (i, j) for which arr[i] + flipDigits(arr[j]) = arr[j] + flipDigits(arr[i]).

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }