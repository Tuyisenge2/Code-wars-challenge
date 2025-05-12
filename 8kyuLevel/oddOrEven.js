function oddOrEven(array) {
  //enter code here
  const sum = array.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum % 2 == 0 ? "even" : "odd";
}
