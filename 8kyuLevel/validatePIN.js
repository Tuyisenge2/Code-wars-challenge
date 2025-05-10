function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  let a = pin.split("").map((i) => {
    return parseInt(i);
  });
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    if (!Number.isInteger(a[i])) {
      return false;
    }
  }
  return true;
}
