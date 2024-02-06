/*
Codewars 6 Kyu Multiples by permutations
URL: https://www.codewars.com/kata/55f1a53d9c77b0ed4100004e

The number 1035 is the smallest integer that exhibits a non frequent property: one its multiples, 3105 = 1035 * 3, has its same digits but in different order, in other words, 3105, is one of the permutations of 1035.

The number 125874 is the first integer that has this property when the multiplier is 2, thus: 125874 * 2 = 251748

Make the function search_perm_mult(), that receives an upper bound, n_max and a factor k and will output the amount of pairs bellow n_max that are permuted when an integer of this range is multiplied by k. The pair will be counted if the multiple is less than n_max, too

Let'see some cases:

search_perm_mult(10000, 7) === 1 # because we have the pair 1359, 9513
search_perm_mult(5000, 7) === 0 # no pairs found, as 9513 > 5000

search_perm_mult(10000, 4) === 2 # we have two pairs (1782, 7128) and (2178, 8712)
search_perm_mult(8000, 4) === 1 # only the pair (1782, 7128) 

search_perm_mult(5000, 3) === 1 # only the pair (1035, 3105)
search_perm_mult(10000, 3) === 2 # found pairs (1035, 3105) and (2475, 7425)
Features of the random Tests:

10000 <= n_max <= 100000
3 <= k <= 7
*/

function search_permMult(nMax, k) {
    // put your code here
    let count = 0;
    let sorted_number, sorted_multiple;
    for (let index = 1; index < nMax; index++) {
        let multiple = index * k;
        if(multiple < nMax) {
            sorted_number = String(index).split('').sort().join('');
            sorted_multiple = String(multiple).split('').sort().join('');
            if(sorted_number === sorted_multiple) {
                count++;
            }
        }
    }
    return count;
}

console.log(search_permMult(10, 7));
// console.log(search_permMult(5000, 7));
// console.log(search_permMult(10000, 4));
// console.log(search_permMult(8000, 4));
// console.log(search_permMult(5000, 3));
// console.log(search_permMult(10000, 3));