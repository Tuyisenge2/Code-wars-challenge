function lovefunc(flower1, flower2) {
  // moment of truth
  return flower1 % 2 == 0 && flower2 % 2 == 0
    ? false
    : flower1 % 2 != 0 && flower2 % 2 != 0
    ? false
    : true;
}
