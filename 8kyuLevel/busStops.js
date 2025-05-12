var number = function (busStops) {
  // Good Luck!
  let sum = 0;
  let a = busStops.map((i, c, arr) => {
    sum += i[0];
    sum -= i[1];

    return i;
  });
  return sum;
};
