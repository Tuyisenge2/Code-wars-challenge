// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let c = 0;
  return string
    .split(/[A-Z]/)
    .map((v, i, a) => {
      if (i === 0) {
        c += v.length;
        return v;
      } else {
        let a = string.slice(c);
        c += v.length + 1;
        return a[0] + v;
      }
    })
    .join(" ");
}
