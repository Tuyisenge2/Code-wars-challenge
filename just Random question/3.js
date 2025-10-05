// Imagine you're a curator organizing a digital art exhibition featuring sculptures of various heights, each represented by a unique number in the array heights. We define a sculpture height as a highlight if it is taller than its neighboring sculptures. Formally, heights[i] is a highlight if it meets these criteria:

// heights[i] > heights[i - 1] or heights[i - 1] doesn't exist;
// heights[i] > heights[i + 1] or heights[i + 1] doesn't exist.
// The task is to compile an array (let's call it highlightOrder) based on these steps:

// Identify the smallest highlight in heights.
// Remove this highlight from heights and add it to the end of the highlightOrder.
// Keep repeating the above steps until heights has no highlights left.
// NOTE: Since each sculpture height is unique, there will be no tie when selecting the smallest highlight.

// Also note that you are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(heights.length3) will fit within the execution time limit.

// Example

// For heights = [2, 7, 8, 5, 1, 6, 3, 9, 4], the output should be solution(heights) = [6, 8, 7, 5, 2, 9, 4, 3, 1].
// Note: If you are not able to see the video, use this link to access it.

// Initially heights = [2, 7, 8, 5, 1, 6, 3, 9, 4], where the highlights are heights[2] = 8, heights[5] = 6, and heights[7] = 9. The smallest highlight is 6, so it is moved to highlightOrder. After this step, highlightOrder = [6].
// On the next pass, heights = [2, 7, 8, 5, 1, 3, 9, 4], with highlights heights[2] = 8 and heights[6] = 9. The smallest is 8. highlightOrder becomes [6, 8].
// For heights = [2, 7, 5, 1, 3, 9, 4], the highlights are heights[1] = 7 and heights[5] = 9. The smallest is 7. So, highlightOrder = [6, 8, 7].
// For heights = [2, 5, 1, 3, 9, 4], with highlights heights[1] = 5 and heights[4] = 9, the smallest is 5. The new highlightOrder is [6, 8, 7, 5].
// For heights = [2, 1, 3, 9, 4], with highlights heights[0] = 2 and heights[3] = 9, the smallest is 2. So, highlightOrder = [6, 8, 7, 5, 2].
// For heights = [1, 3, 9, 4], the only highlight is heights[2] = 9. highlightOrder = [6, 8, 7, 5, 2, 9].
// For heights = [1, 3, 4], the only highlight is heights[2] = 4. highlightOrder = [6, 8, 7, 5, 2, 9, 4].
// For heights = [1, 3], the only highlight is heights[1] = 3. highlightOrder = [6, 8, 7, 5, 2, 9, 4, 3].
// For heights = [1], the only highlight is heights[0] = 1. Once it's removed, heights is empty, leaving no more highlights. Hence, highlightOrder = [6, 8, 7, 5, 2, 9, 4, 3, 1] is the final output.
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer heights

// An array of distinct positive integers representing sculpture heights.

// Guaranteed constraints:
// 1 ≤ heights.length ≤ 100,
// 1 ≤ heights[i] ≤ 109.

// [output] array.integer

// An array highlightOrder built following the described procedure.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }


//
