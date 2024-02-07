/*
Codewars 8 Kyu Array plus array
URL: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// function arrayPlusArray(arr1, arr2) {
//     let total = 0;
//     for(let i = 0; i < arr1.length; i++) {
//         total += arr1[i];
//     }

//     for(let i = 0; i < arr2.length; i++) {
//         total += arr2[i];
//     }

//     return total;
// }

// function arrayPlusArray(arr1, arr2) {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         for(let j = 0; j < arguments[i].length; j++){
//             total += arguments[i][j];
//         }
//     }
//     return total;
// }

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((accu, curr) => accu + curr);

console.log(arrayPlusArray([1,2,3], [4,5,6]))