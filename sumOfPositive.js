/*
Codewars 8 Kyu Sum of positive
URL: https://www.codewars.com/kata/5715eaedb436cf5606000381

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

const positiveSum = arr => arr.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum([2, 3, 4, -1]));