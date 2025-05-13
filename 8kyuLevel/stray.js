function stray(numbers) {
 numbers.sort((a,b)=>{ return a-b})
 console.log(numbers)
  return numbers[0]===numbers[1]? numbers[numbers.length-1]:numbers[0];
}