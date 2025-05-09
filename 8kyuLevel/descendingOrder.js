function descendingOrder(n) {
  let a = n.toString().split("").reverse();
  let b = a.map((i) => parseInt(i));
  return parseInt(b.sort((a, b) => b - a).join(""));
}
