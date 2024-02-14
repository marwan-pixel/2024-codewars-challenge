/*
Codewars 7 Kyu Driving School Series #1
URL: https://www.codewars.com/kata/58999425006ee3f97c00011f

very month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


Example:

[10,10,10,18,20,20] --> 12
*/

const passed = (list) => {
    let demerit = list.filter(el => el < 19);
    return demerit.length > 0 ? Math.round(demerit.reduce((accu, curr) => accu + curr) / demerit.length) : "No pass scores registered.";
}

console.log(passed([3,22,9,13,20,18,2,14,20,8,23,12,7,21,21,19,20,11,18,7,13,22,11,20,9]));