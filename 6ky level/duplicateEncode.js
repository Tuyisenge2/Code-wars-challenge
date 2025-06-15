// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  // ...
  let c = 0;
  const arr = word.toLowerCase().split("");
  const res = arr.map((i) => {
    c = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) c++;
    }
    return c > 1 ? ")" : "(";
  });
  return res.join("");
}
