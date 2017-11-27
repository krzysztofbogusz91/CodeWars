/*The idea for this Kata came from 9gag today.here

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

Input: If you can read

Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

Some notes

Keep the punctuation, and remove the spaces.
Use Xray without dash or space.*/

//, ,, , , , , , , , , , , , , , , 
   
   
   
function to_nato(words) {
  
   words = words.replace(/ /g,'').toUpperCase().split("");
     

    	function trans(a){
    if(a === "A"){
       return "Alfa";   
    }else if(a==="B"){
      return "Bravo";
    }else if(a==="C"){
      return "Charlie";
    }else if(a==="D"){
      return "Delta";
    }else if(a==="E"){
      return "Echo";
    }else if(a==="F"){
      return "Foxtrot";
    }else if(a==="G"){
      return "Golf";
    }else if(a==="H"){
      return "Hotel";
    }else if(a==="I"){
      return "India";
    }  else if(a==="J"){
      return "Juliett";
    }else if(a==="K"){
      return "Kilo";
    }else if(a==="L"){
      return "Lima";
    }else if(a==="M"){
      return "Mike";
    }else if(a==="N"){
      return "November";
    }else if(a==="O"){
      return "Oscar";
    }else if(a==="P"){
      return "Papa";
    }else if(a==="Q"){
      return "Quebec";
    }else if(a==="R"){
      return "Romeo";
    }else if(a==="S"){
      return "Sierra";
    }else if(a==="T"){
      return "Tango";
    }else if(a==="U"){
      return "Uniform";
    }else if(a==="V"){
      return "Victor";
    }else if(a==="W"){
      return "Whiskey";
    }else if(a==="X"){
      return "Xray";
    }else if(a==="Y"){
      return "Yankee";
    }else if(a==="Z"){
      return "Zulu";
    }else{return a}
  }
  for(let i = 0; i<words.length; i++){
  words[i] = trans(words[i]);
}

  return words.join(" "); 

}

