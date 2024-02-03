/*
Codewars 8 Kyu Is there a vowel in there?
URL: https://www.codewars.com/kata/57cff961eca260b71900008f

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(params) {
    const result = [];
    for (let i = 0; i < params.length; i++) {
        switch (params[i]) {
            case 97:
                result.push('a');
                break;
            case 105:
                result.push('i');
                break;
            case 117:
                result.push('u');
                break;
            case 101:
                result.push('e');
                break;
            case 111:
                result.push('o');
                break;
            default:
                result.push(params[i]);
                break;
        }
    }
    return result;
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));