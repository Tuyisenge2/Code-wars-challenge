function rowSumOddNumbers(n) {
  let init = n * (n - 1) + 1;
  let last = n * (n + 1) - 1;
  let sum = init;
  let a = [];
  for (let i = init; i <= last; i += 2) {
    a.push(i);
  }
  let b = a.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(b);
  return b;
}
