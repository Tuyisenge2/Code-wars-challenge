// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


function isPrime(num) {
  //TODO
  if(num <=1) return false
  let c=1
  let r=true
  console.log(Math.sqrt(num))
   while(c <= Math.sqrt(num)){
     if( num %c === 0 && c!=1 )  return false
     c++
   }  
  return true
}

