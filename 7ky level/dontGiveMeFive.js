function dontGiveMeFive(start, end)
{
  let r=[]
  for(let i=start; i<=end ;i++){
  if( !i.toString().includes('5')) r.push(i);
  }
  return r.length;
}
