function divisors(integer) {
  const a = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) {
      a.push(i);
    }
  }
  return a.length > 0 ? a : integer + " is prime";
}
