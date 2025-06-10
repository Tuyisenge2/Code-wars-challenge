// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples

function digitalRoot(n) {
  let sum = 0;
  let b = 0;
  let c = true;
  while (c) {
    let a =
      sum.toString().length == 1
        ? n.toString().split("")
        : sum.toString().split("");
    sum = a.reduce((a, b) => {
      b = parseInt(a) + parseInt(b);
      return b;
    });
    if (sum.toString().length == 1) c = false;
  }
  return parseInt(sum);
}
