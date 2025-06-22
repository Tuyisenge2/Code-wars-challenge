// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function findMissingLetter(array) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let f = alpha.findIndex((i) => i === array[0].toLowerCase());
  let l = alpha.findIndex((i) => i === array[array.length - 1].toLowerCase());
  let p =
    array[0] === alpha[f].toUpperCase()
      ? alpha
          .slice(f, l + 1)
          .join("")
          .toUpperCase()
          .split("")
      : alpha.slice(f, l + 1);
  let r = p.find((v) => {
    return array.indexOf(v) === -1;
  });
  return r;
}
