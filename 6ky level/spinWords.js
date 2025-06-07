// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

function spinWords(string) {
  let arr = string.split(" ");
  return arr
    .map((i) => {
      if (i.length >= 5) return i.split("").reverse().join("");
      else return i;
    })
    .join(" ");
}
