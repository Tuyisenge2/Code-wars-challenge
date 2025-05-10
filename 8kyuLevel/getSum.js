function getSum(a, b) {
  let index = a < b ? a : b;
  let l = a > b ? a : b;
  let sum = 0;
  for (let i = index; i <= l; i++) {
    sum += i;
  }
  return sum;

  //Good luck!
}
