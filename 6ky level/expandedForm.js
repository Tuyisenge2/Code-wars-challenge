// # Write Number in Expanded Form
// # You will be given a number and you will need to return it as a string in Expanded Form. For example:

// #    12 --> "10 + 2"
// #    45 --> "40 + 5"
// # 70304 --> "70000 + 300 + 4"
// # NOTE: All numbers will be whole numbers greater than 0.

// # If you liked this kata, check out part 2!!

function expandedForm(num) {
  // Your code here
  return num.toString().split('').map((v,i,a)=>{
    return v!=='0'? v + '0'.repeat(a.length-i-1):null
  }).filter(i=> i).join(' + ')
      }