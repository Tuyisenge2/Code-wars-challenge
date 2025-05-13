function SeriesSum(n) {
  // Happy Coding ^_^
  if(n==0){
let a=0
    return a.toFixed(2).toString();
    
  }
  let s=1;
  for (let i=1; i<n;i++){
  s=s+( 1/(1+(i*3)))       
  }
  return s.toFixed(2).toString();
}