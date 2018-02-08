// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

String.prototype.cou=function(s1) { 
    return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length;
}

function count (string) {  

  let ob = {};
  
  str = string.split('');
  str.forEach(e =>{
  if(!ob.e){
    ob[e] = string.cou(e);
    }
   
  });
  // The function code should be here
   return ob;
}

count('aab');
