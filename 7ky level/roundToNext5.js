// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

function roundToNext5(n) {
  if (n % 5 == 0) return n;
  let i = 0;
  let t = n;
  let c = false;
  while (!c) {
    t++;
    i = t % 5;
    if (i == 0) c = !c;
  }
  return t;
}
