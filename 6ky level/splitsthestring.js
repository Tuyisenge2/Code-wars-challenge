// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  let a = "";
  let b = "";
  let c = "";
  return str
    .split("")
    .map((v, i, a) => {
      c = a[i + 1] !== undefined ? a[i + 1] : "_";
      b = i % 2 === 0 ? a[i] + c : null;
      return b;
    })
    .filter((i) => i != null);
}
