function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  let min = Math.min(...numbers);
  let mIndex = numbers.indexOf(min);
  return numbers.filter((item, index, arr) => {
    return index !== mIndex;
  });
}
