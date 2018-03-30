List of my 6 kyu kata:
- [Simple Pig Latin](#simple-pig-latin)
- [Moving Zeros To The End](#moving-zeros-to-the-end)
- [Convert string to camel case](#convert-string-to-camel-case)
- [Human Readable Time](#human-readable-time)


### Simple Pig Latin 

[KATA URL](https://www.codewars.com/kata/simple-pig-latin/train/javascript)

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !
```

```javascript

function pigIt(str){
  return str.split(' ').map(a => a.length > 1 ? a.substring(1) + a.substring(0,1) + "ay" : a ).join(" "); 
}

```




### Moving Zeros To The End 

[KATA URL](https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript)

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```javascript



var moveZeros = function (arr) {
let counter = 0;
arr = arr.filter(a =>{
    if(a === null){
      return true;
    }
    if(a === false){
      return true;
    }
    if(a === 0 ){
      counter++
    }else{
      return a;
    }
  });
if(counter > 0){
  let set = 0
  while(set < counter){
    arr.push(0);
    set++
  }
}
 return arr;
}

```

### Convert string to camel case

[KATA URL](https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript)

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")

```javascript

function toCamelCase(str){
  if(str === ""){
    return ""
  }
  
  str = str.split("").map(a => a === "-" || a === "_" ? a = " " : a).join("").split(" ");
  
  return str.map((a, i)=>{
    if(i > 0){
      a = a.split("");
      console.log(a);
      a[0] = a[0].toUpperCase();
      a = a.join("");
      }
    return a;
  }).join("");

}

```

### Human Readable Time

[KATA URL](https://www.codewars.com/kata/human-readable-time/train/javascript)

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

```javascript

function humanReadable(seconds) {
const solution = {
      h: "",
      m: "",
      s: ""
}

solution.h = Math.floor(seconds/3600).toString();

//count left seconds
seconds = seconds - (3600 * Math.floor(seconds/3600));

solution.h.length > 1 ? solution.h : solution.h = "0" + solution.h

solution.m = Math.floor(seconds/60).toString();

seconds = seconds - (60 * Math.floor(seconds/60));

solution.m.length > 1 ? solution.m : solution.m = "0" + solution.m

solution.s = Math.floor(seconds).toString();

solution.s.length > 1 ? solution.s : solution.s = "0" + solution.s

 return `${solution.h}:${solution.m}:${solution.s}` ;
}

```
