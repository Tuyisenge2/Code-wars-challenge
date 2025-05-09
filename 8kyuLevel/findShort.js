function findShort(s){
  let a = s.split(' ');
  let l=a[0].length

for(let i=0;i<a.length;i++){ 
  if(a[i].length < l){
      l=a[i].length
          }
  }
  return  l;

}