/*
Codewars 8 Kyu Reversed Strings
URL: https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

const solution = (str) => (str === "" ? "" : solution(str.substr(1)) + str.charAt(0));

console.log(solution("world"))