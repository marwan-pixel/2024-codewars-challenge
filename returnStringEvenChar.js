/*
Codewars 7 Kyu Return a string's even charactersReturn a string's even characters
URL: https://www.codewars.com/kata/566044325f8fddc1c000002c

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/

function evenChars(string) {
    //keep coding!
    if(string.length < 2 || string.length > 100) {
        return "Invalid String";
    }
    return string;
}