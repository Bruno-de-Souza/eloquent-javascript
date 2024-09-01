/*
    Write a recursive function that returns the sum of the first "n" natural numbers
*/
function sumOfNaturalNumbers(n) {
    if (n == 1) {
        return 1;
    } else {
        return sumOfNaturalNumbers(n);
    }
}
console.log(sumOfNaturalNumbers(2));