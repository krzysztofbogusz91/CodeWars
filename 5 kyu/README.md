List of my 6 kyu kata:
- [Simple Pig Latin](#simple-pig-latin)
- [Moving Zeros To The End](#moving-zeros-to-the-end)


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
