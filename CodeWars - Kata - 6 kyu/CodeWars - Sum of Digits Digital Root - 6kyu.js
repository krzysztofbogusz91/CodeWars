function sum(arr){
  return arr.reduce((a,b)=>parseInt(a)+ parseInt(b));
}

function digital_root(n) {
  if(n<9){
    return n;
  }
  while(n>9){
    n = n.toString().split('');
    n = sum(n);
  }
  
  return n
}
