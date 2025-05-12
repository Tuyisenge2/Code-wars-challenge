function reverseWords(str) {
  // Go for it
  const a = str.split(" ");
  const b = a.map((i) => i.split("").reverse().join(""));
  return b.join(" ");
}
