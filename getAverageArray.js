/*
Codewars 8 Kyu Get the mean of an array
URL: https://www.codewars.com/kata/563e320cee5dddcf77000158

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

// function getAverage(marks){
//     //TODO : calculate the downward rounded average of the marks array
//     let total = 0;
//     for (let i = 0; i < marks.length; i++) {
//         total += marks[i];
//     }
//     return Math.floor(total / marks.length);
// }

const getAverage = (marks) => Math.floor(marks.reduce((accu, curr) => accu + curr, 0) / marks.length);

console.log(getAverage([1,1,1,1,1,1,1,2]))