// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

function persistence(num) {
  let count = 0;
  let b = true;
  let a = num.toString();
  let r;
  let m = 1;
  if (a.length == 1) return count;
  while (b) {
    r = a.split("").map((i) => {
      m = m * i;
      return i;
    });
    count++;
    a = m.toString();
    m = 1;
    if (count != 0 && a.length == 1) b = false;
  }
  return count;
}
