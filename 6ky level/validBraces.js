// # All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// # What is considered Valid?
// # A string of braces is considered valid if all braces are matched with the correct brace.

// # Examples
// # "(){}[]"   =>  True
// # "([{}])"   =>  True
// # "(}"       =>  False
// # "[(])"     =>  False
// # "[({})](]" =>  False


function validBraces(braces){
  //TODO 
  let r=braces.split('')
  let x=0 
  let y=0
  let z=0
  let c=[]
  if(r.length %2 !==0 ) return false;
  
  for(let i =0;i<r.length;i++){

    if(r[i] === '('){
//  console.log(r[i],x,braces)    
      c.push('(')
    //  console.log(r[i],x,'b',braces,'b',c)  
      x++
    } else if(r[i]===')'){
  //    console.log(r[i],x,braces,c)     
if( c[c.length -1] ==='(' ) {  
     x--  
      c.pop()

}else return false
    }
    if(r[i] === '{'){
      c.push('{')
      
      y++
    } else if(r[i]==='}'  ){
           if( c[c.length -1] ==='{' ) {  
     y--  
      c.pop()
}else return false 
    }if(r[i] === '['){
      c.push('[')      
      z++
    } else if(r[i]===']' ){
      if( c[c.length -1] ==='[' ) {  
     z--  
      c.pop()

}else return false
      
    }
  }

  if(x===0 && y ===0 && z ===0 ){
            console.log(x,y,z,braces,c)

    return true;
  }
    return false;  
}