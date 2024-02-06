/*
Codewars 8 Kyu Abbreviate a Two Word NameAbbreviate a Two Word Name
URL: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/ruby

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name) {
    let split = name.toUpperCase().split(' ');
    return `${split[0][0]}.${split[1][0]}`;
}

console.log(abbrevName("Sam Harris"));