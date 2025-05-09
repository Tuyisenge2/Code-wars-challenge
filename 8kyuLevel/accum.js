function accum(s) {
  let e = "tito";
  let a = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0) {
        a += s[i].toUpperCas
        e();
      } else {
        a += s[i].toLowerCase();
      }
    }
    if (i == s.length - 1) break;
    a += "-";
  }
  console.log(a);
  // your code

  return a;
}
