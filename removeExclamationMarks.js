/*
Codewars 8 Kyu Remove exclamation marks
URL: https://www.codewars.com/kata/57a0885cbb9944e24c00008e

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

const removeExclamationMarks = (s) => s.replaceAll('!', '');

console.log(removeExclamationMarks("Hello World!!"));