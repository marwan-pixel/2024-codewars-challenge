/*
Codewars 7 Kyu Simple string reversal
URL: https://www.codewars.com/kata/5a71939d373c2e634200008e

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!
*/

function solve(str){
    let result = str.split(' ').map(word => word.split('').reverse().join('')).reverse().join(' ');
    return result;
}

console.log(solve("i love codewars"));

