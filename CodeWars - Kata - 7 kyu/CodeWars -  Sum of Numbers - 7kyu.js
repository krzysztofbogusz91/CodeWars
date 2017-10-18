/*
Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

//My solution
function GetSum(a, b) {
    if (a === b) {
        return a;
    }
    var arr = [a, b];

    arr = arr.sort(function (a, b) {
        return a - b
    });

    var arr2 = [];
    for (var i = arr[0]; i <= arr[1]; i++) {
        arr2.push(i);
    }

    var sum = arr2.reduce(function (a, b) {
        return a + b
    });

    return sum;


}
