function disemvowel(str) {
  let regex = /[^aeiuoOAIUE]/g;
  let res = str.match(regex);
  return res.join("");
}
