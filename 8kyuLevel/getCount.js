function getCount(str) {
  return str.split("").filter((i) => {
    return i == "a" || i == "i" || i == "e" || i == "o" || i == "u";
  }).length;
}
