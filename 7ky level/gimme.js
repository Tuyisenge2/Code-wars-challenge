// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
  let t = 0;
  let r = triplet.map((i, index) => {
    return { [index]: i };
  });
  for (let i = 0; i < triplet.length; i++) {
    for (let j = 0; j < triplet.length; j++) {
      if (triplet[j] < triplet[j + 1]) {
        t = triplet[j];
        triplet[j] = triplet[j + 1];
        triplet[j + 1] = t;
      }
    }
  }
  let a = Object.keys(r).find((k) => r[k][k] == triplet[1]);
  return parseInt(a);
}
