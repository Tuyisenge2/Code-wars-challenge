function XO(str) {
  //  const regex=[x]
  //code here
  let a = 0,
    b = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "o") {
      a++;
    } else if (str[i].toLowerCase() == "x") {
      b++;
    }
  }
  return a == b ? true : false;
}
