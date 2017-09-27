/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/

//My solution
function getCount(str) {
    var vowelsCount = 0;


    str = str.split("");

    for (i = 0; i < str.length; i++) {

        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "u" || str[i] === "o") {
            vowelsCount = vowelsCount + 1;
        }

    }



    return vowelsCount;
}
