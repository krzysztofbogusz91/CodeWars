/*

Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.

Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverseWords "An example!"    -- "nA !elpmaxe"
reverseWords "double  spaces" -- "elbuod  secaps"


*/

//My solution
function reverseWords(str) {
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {

        str[i] = str[i].split("").reverse().join("");

    }

    return str.join(" ");
}
