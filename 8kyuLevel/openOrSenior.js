function openOrSenior(data) {
  let res = data.map((i) => {
    return i[0] >= 55 && i[1] > 7 ? "Senior" : "Open";
  });
  return res;
}
