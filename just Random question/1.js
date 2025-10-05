// You are a molecular biologist working in a research laboratory that studies protein folding patterns. You have a square matrix representing a microscopic view of a protein structure, where each cell contains one of three possible molecular states: 0 (inactive), 1 (partially active), or 2 (fully active).

// Your research has identified a specific molecular pattern that indicates optimal protein stability - a "Y-shaped" molecular pathway. This pattern consists of two diagonal molecular chains extending from the upper corners down to the center, plus a vertical chain extending downward from the center.

// Your task is to determine the minimum number of molecular state changes required to transform the current protein matrix into one that exhibits this stable Y-pattern.

// The Y-pattern is achieved when:

// all molecular states along the diagonals from the upper-left and upper-right corners down to the center are identical;
// all molecular states along the vertical path from the center downward are identical to the diagonal states;
// all other molecular states (the background) are identical to each other but different from the Y-pattern states.
// Note: For a square matrix of size n × n, there are exactly 6 possible Y-pattern configurations. The Y-pattern states and background states can be any combination of the three molecular states (0, 1, 2) as long as they are different from each other.

// Below, you can see an example of the Y-pattern for a 5 × 5 matrix:
// Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(n2) will fit within the execution time limit.

// Example

// For

// proteinMatrix = [
//   [1, 0, 2],
//   [1, 2, 0],
//   [0, 2, 0]
// ]
// the output should be solution(proteinMatrix) = 2.

// Explanation:

// The optimal transformation is to change the 1 in the 0th row to 2 and the 1 in the 1st row to 0.
// 2s form the Y-pattern molecular pathway and 0s form the background.
// The final matrix is shown below.
// proteinMatrix = [
//   [2, 0, 2],
//   [0, 2, 0],
//   [0, 2, 0]
// ]
// For

// proteinMatrix = [
//   [2, 0, 0, 0, 2],
//   [1, 2, 1, 2, 0],
//   [0, 1, 2, 1, 0],
//   [0, 0, 2, 1, 1],
//   [1, 1, 2, 1, 1]
// ]
// the output should be solution(proteinMatrix) = 8.

// Explanation:

// The 2s here form the Y-pattern molecular pathway.
// The optimal solution is to change all of the 0s (total of 8) to 1s to create a uniform background.
// The final matrix is shown below.
// proteinMatrix = [
//   [2, 1, 1, 1, 2],
//   [1, 2, 1, 2, 1],
//   [1, 1, 2, 1, 1],
//   [1, 1, 2, 1, 1],
//   [1, 1, 2, 1, 1]
// ]
// Expand to see the example images.


// Note: If you are not able to see the image, use this link to access it.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.array.integer proteinMatrix

// The square matrix n × n (where n is odd) representing the protein structure, where each cell contains one of three molecular states: 0 (inactive), 1 (partially active), or 2 (fully active).

// Guaranteed constraints:
// 3 ≤ proteinMatrix.length ≤ 99,
// 0 ≤ proteinMatrix[i][j] ≤ 2.

// [output] integer

// The minimum number of molecular state changes required to transform the protein matrix into one that exhibits the stable Y-pattern.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }
