/*
Reversing Words in a String
URL: https://www.codewars.com/kata/57a55c8b72292d057b00059418

You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!
*/

function reverse(string){
    //your code here
    // First Method
    return string.split(" ").reverse().join(" ");

    // Second Method
    // let result = [];
    // for (let index = word.length - 1; index >= 0; index--) {
    //     result.push(word[index]);
    // }
    // return result.join(" ");
}

console.log(reverse("This is so easy"));