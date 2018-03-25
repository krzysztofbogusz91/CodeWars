List of my 6 kyu kata:
- [Multiples of 3 or 5](#multiples-of-3-or-5)
- [Find the unique number](#find-the-unique-number)
- [Tribonacci Sequence](#tribonacci-sequence)


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

