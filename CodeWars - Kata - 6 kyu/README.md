List of my 6 kyu kata:
- [Multiples of 3 or 5](#multiples-of-3-or-5)
- [Find the unique number](#find-the-unique-number)


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
