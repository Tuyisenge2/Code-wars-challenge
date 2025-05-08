function squareDigits(num) {
  const res = num.toString();
  const r = res.split("");
  const d = r.map((i) => {
    return parseInt(i) * parseInt(i);
  });
  return Number(d.join(""));
}
