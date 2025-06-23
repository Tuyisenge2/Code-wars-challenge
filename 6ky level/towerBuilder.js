// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  // build here
  let r = [];
  let a = "";
  let l = nFloors * 2 - 1;
  //let r=2
  for (let i = 1; i <= nFloors; i++) {
    a = "";

    // console.log(i,nFloors)
    a =
      " ".repeat(l > 1 ? l - i - 1 : 0) +
      "*".repeat(2 * i - 1) +
      " ".repeat(l > 1 ? l - i - 1 : 0);
    //   console.log( ,'*'.repeat((2*i)-1))
    console.log(a);
    r.push(a);
  }
  console.log(r);

  return r;
}

// function towerBuilder(nFloors) {
//   // build here
//   //let r=[]
//   let a=''
//   let l=(nFloors*2)-1
//   let r=2
//   for(let i =1 ;i<=nFloors;i++){
//     a=''
// //   for(let j =1 ;j<=i;j++){
// //   //  console.log(i,a ,'is')
// //    if(j==1){a='*'} else{ a+='*' }
// //   }
//    console.log(i)
//    console.log(// ' '.repeat(l>0? l-i:0) ,
//                '*'.repeat((2*i)-1))
//   // if(l>0) l--;
//   }
//   return ['*']
// }
