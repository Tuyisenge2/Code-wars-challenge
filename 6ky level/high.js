// <!-- Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid. -->

function high(x){
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
    "m",//13
    "n",//14
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
  let r= x.split(' ').map((v)=>{
    let a = [...v]
    let sum=0 
    a.forEach((b)=>{
sum+=engL.indexOf(b) +1
    })
    return sum
  })
  let n = r.find((v,i,a)=>{
    return a.every(j=> j<=v)
  })
 return x.split(' ')[r.indexOf(n)]
  }