/*
Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

//My solution
function isPangram(string) {

    string = string.toLowerCase().replace(/\s/g, "").split("");

    var charArr = [];
    for (var i = 97; i <= 122; i++) {
        charArr.push(String.fromCharCode(i));
    }


    charArr = charArr.filter(function (a, index) {
        if (string.indexOf(a) === -1) {
            return a;
        }
    });

    return charArr.length === 0;
}
