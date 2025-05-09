function dnaStrand(dna) {
  let a = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") a += "T";
    else if (dna[i] === "T") a += "A";
    else if (dna[i] === "C") a += "G";
    else a += "C";
  }
  return a;
}
