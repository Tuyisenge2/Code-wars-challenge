function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let a = Math.sqrt(sq);
  if (Number.isInteger(a)) {
    return (a + 1) * (a + 1);
  }
  return -1;
}
