/*
Codewars 7 Kyu No oddities here
URL: https://www.codewars.com/kata/514b92a657cdc65150000006

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds( values ){
    // Return all non-odd values
    return values.filter(el => el % 2 == 0);
}

console.log(noOdds([0,1]));