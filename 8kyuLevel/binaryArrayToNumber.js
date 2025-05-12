const binaryArrayToNumber = (arr) => {
  // your code
  let sum = 0;
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    a = Math.pow(2, arr.length - i - 1) * arr[i];
    sum += a;
  }
  return sum;
};
