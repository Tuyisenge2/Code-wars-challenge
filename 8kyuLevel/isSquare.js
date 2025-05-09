var isSquare = function (n) {
  if (n < 0) {
    return false;
  } else if (Number.isInteger(Math.sqrt(parseInt(n)))) {
    return true;
  } else {
    return false;
  } // fix me
};
