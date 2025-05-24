// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function (test, original) {
  if (test.length === original.length) {
    let l = test.length;
    test = test.toLowerCase();
    original = original.toLowerCase();
    for (let i = 0; i < l; i++) {
      if (original.includes(test[i])) {
        original = original.replace(test[i], "");
      }
    }
    if (original === "") return true;
  }

  return false;
};
