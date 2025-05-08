function sum(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  return numbers.reduce((a, r) => a + r, 0);
}
