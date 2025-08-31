function comp(array1, array2){
  //your code here
  if(!array1 || !array2 )return false;
  array1.sort((a,b)=>a-b)
  array2.sort((a,b)=>a-b)
  let currentRoot=0
  const isSame=array2.every((squarredNum,index)=>{
    let squareRoot=Math.sqrt(squarredNum)
    let isRootExist =array1.some(i=>i===squareRoot)
    currentRoot=array1.indexOf(squareRoot)
    array1.splice(currentRoot,1)
 return isRootExist
  })
  
 console.log('RRRsojmiemieow',array1,array2)
  return isSame
}