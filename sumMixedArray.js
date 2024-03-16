/*
Codewars Kyu 8 Sum Mixed Array
URL:https://www.codewars.com/kata/57eaeb9578748ff92a000009

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

const sumMix = (x) => x.reduce((accu, curr) => accu + +curr, 0);

console.log(sumMix([9, 3, '7', '3']));