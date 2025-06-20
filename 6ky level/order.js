// # Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// # Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// # If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


function order(words){
  return words.length === ""? "":  words.split(" ").sort(function(a,b){
     let x= a.split('').sort()[0]
     let y=b.split('').sort()[0]
     console.log(x,y)
     return x-y
   }).join(" ")    
}