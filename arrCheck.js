/*
Codewars 7 Kyu Is every value in the array an array?
URL: https://www.codewars.com/kata/582c81d982a0a65424000201

Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/

const arrCheck = value => value.map((el) => Array.isArray(el));

console.log(arrCheck(["", []]));