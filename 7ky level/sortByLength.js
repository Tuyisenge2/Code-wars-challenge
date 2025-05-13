function sortByLength(array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest
  let t = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j]?.length > array[j + 1]?.length) {
        t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;
      }
    }
  }

  return array;
}
