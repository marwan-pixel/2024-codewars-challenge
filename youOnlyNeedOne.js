/*
Codewars 8 Kyu You only need one - Beginner
URL:https://www.codewars.com/kata/57cc975ed542d3148f00015b

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// function check(a, x) {
//     // your code here
//   for (const i of a) {
//     if(x === i) {
//         return true;
//     }
//   }
//   return false;
// }

function check(a, x) {
    // your code here
  return a.filter(el => el === x).length > 0 ? true : false ;
}

// function check(a, x) {
//     // your code here
//   return a.includes(x) ;
// }

console.log(check(['what', 'a', 'great', 'kata'], 'kat'));