/*
Codewars 8 Kyu Even or Odd
URL: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
    return number % 2 == 0 ? 'Even' : 'Odd'
}

console.log(evenOrOdd(3));
console.log(evenOrOdd(4));