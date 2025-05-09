function highAndLow(numbers) {
  const res = numbers
    .split(" ")
    .map((i) => parseInt(i))
    .sort((a, b) => a - b);
  return res[res.length - 1].toString() + " " + res[0];
}
