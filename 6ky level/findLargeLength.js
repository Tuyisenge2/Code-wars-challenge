function longestConsec(strarr, k) {
    // your code
  if(k<=0 || k>strarr.length ||strarr.length ==0) return ''
  let largeStringLength=0
  let joinedString=''
  let largestWord=''
  if(k>0)
  strarr.forEach((word,index,array)=>{
    joinedString=word
    for(let count=1;count<k;count++){
      if(!array[index+count] || index+count> array.length)continue;
      if (word==='3452'){
        console.log(array[index+1],index+1,index)
      }
    joinedString =joinedString.concat(array[index+count])
    }
    if(largeStringLength<joinedString.length){
      largeStringLength=joinedString.length
    largestWord=joinedString
    }
   // console.log(joinedString,largeStringLength,largestWord)
  })
  console.log(strarr,largestWord,k)
  return largestWord
}