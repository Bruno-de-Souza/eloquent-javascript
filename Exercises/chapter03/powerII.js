//If I do not pass the second argument when I call the function power, the exponent parameter will be the value of '2';
function power (base, exponent = 2) {
    let result = 1;

    for (let count = 0; count < exponent; count++) {
        result *= base;
    }

    return result;
}

console.log(power(5));