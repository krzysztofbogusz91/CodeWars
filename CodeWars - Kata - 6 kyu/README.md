List of my 6 kyu kata:
- [Multiples of 3 or 5](#multiples-of-3-or-5)
- [Find the unique number](#find-the-unique-number)
- [Tribonacci Sequence](#tribonacci-sequence)
- [Who likes it?](#who-likes-it?)


### Multiples of 3 or 5

[Kata URL](https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 Note: If the number is a multiple of both 3 and 5, only count it once.
 
```javascript

function solution(number){
    const placeholder = [];
    for(let i = number-1; i >= 1; i--){
      if( i % 3 === 0 || i % 5 === 0) placeholder.push(i)
    
    }
    
    return placeholder.length === 0 ? 0 : placeholder.reduce((a,b) => a + b );
  
}

```
### Find the unique number

[Kata URL](https://www.codewars.com/kata/find-the-unique-number-1/train/javascript)

 There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

```javascript

function findUniq(arr) {
  return arr.filter((a,i,ar)=> ar.indexOf(a) === ar.lastIndexOf(a))[0];
}

```
### Tribonacci Sequence

[Kata URL](https://www.codewars.com/kata/tribonacci-sequence/train/javascript)

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified ;)

```javascript

function tribonacci(signature,n){
  let counter = 1;
  let target = 0;
  const arr = [];

  while(counter <= n){
    if(typeof signature[counter-1] === "number"){
      arr.push(signature[counter-1]);
    }else{
      let nextInSequence = arr[target] + arr[target + 1] + arr[target + 2];
      arr.push(nextInSequence)
      target++;
    }
    counter ++;
  }
  return arr;
}

```
### Who likes it?

[Kata URL](https://www.codewars.com/kata/who-likes-it/train/javascript)

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.


```javascript

function likes(names) {
  switch(names.length){
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
      break;
  }
}

```


