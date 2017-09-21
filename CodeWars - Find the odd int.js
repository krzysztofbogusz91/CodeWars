/*

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

//My solution


function findOdd(A) {
    //happy coding!
    var list = A;
    var oddNum = 1;

    //finds how meny times an element is in arr
    function countInArray(array, what) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === what) {
                count++;
            }
        }
        return count;
    }

    //finds an odd one
    for (var j = 0; j < list.length; j++) {

        if (countInArray(list, list[j]) % 2 !== 0) {
            oddNum = list[j];
        }
    }

    return oddNum;

}
