function longest(s1, s2) {
  // your code
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let res = "";
  for (let i = 0; i < arr1.length; i++) {
    if (!res.includes(arr1[i])) {
      res += arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!res.includes(arr2[i])) {
      res += arr2[i];
    }
  }

  return res.split("").sort().join("");
}
