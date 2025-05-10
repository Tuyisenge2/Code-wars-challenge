function nbYear(p0, percent, aug, p) {
  let count = 0;
  let np = p0;
  let pec = percent / 100;
  while (np < p) {
    np = Math.floor(np + np * pec + aug);
    count += 1;
  }

  return count;
}
