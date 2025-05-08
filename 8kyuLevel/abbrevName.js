function abbrevName(name){
    const res= name.split(' ');
      const res2= res[0].split('')
    const res3=res[1].split('')
      // code away
      return res2[0].toUpperCase()+'.'+res3[0].toUpperCase();
    }