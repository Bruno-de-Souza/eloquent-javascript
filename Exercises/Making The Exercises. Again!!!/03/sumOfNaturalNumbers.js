/*
    Write a recursive function that returns the sum of the first "n" natural numbers
    sumOfNaturalNumbers(5) = should return 15 because(1 + 2 + 3 + 4 + 5) 
*/
function sumOfNaturalNumbers(n) {
    if (n == 1) {
        return 1;
    } else if (n < 0 || n == 0) {
        return 'Value Invalid!';
    }
    else {
        return n + sumOfNaturalNumbers( n - 1);
    }
}
console.log(sumOfNaturalNumbers(5));

// Testing: 5 + 4 + 3 + 2 + 1 = 15