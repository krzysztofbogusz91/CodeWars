
function array_diff(a, b) {
  let reduceMe = [];
  
  if(b.length === 0){
    return a;
  }
  
  for(let i = 0; i < b.length; i ++){
    reduceMe = a.filter(x => x !== b[i] );
    }
  
  return reduceMe;

}
