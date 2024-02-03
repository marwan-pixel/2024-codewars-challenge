/*
Codewars 6 kyu Reverse Vowels In A String
URL: https://www.codewars.com/kata/585db3e8eec141ce9a00008f

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/

function reverseVowels(str) {
  let vowels = str.match(/[aiueo]/gi);
  vowels ? vowels.reverse() : str;
  let vowIndex = 0;
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(/[aiueo]/gi.test(str[i])) {
        result += vowels[vowIndex++];
    } else {
        result += str[i];
    }
  }
  return result;
}

console.log(reverseVowels("Hello"));