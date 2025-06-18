// Replace With Alphabet Position

function alphabetPosition(text) {
  let engL = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let r = text
    .split("")
    .filter((i) => i != " ")
    .map((i) => {
      for (let j = 0; j < engL.length; j++) {
        if (i.toLowerCase() === engL[j]) {
          j++;
          return j;
          break;
        }
      }
    });
  return r.filter((i) => i).join(" ");
}
