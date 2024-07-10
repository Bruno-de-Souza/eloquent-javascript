let number = 0;

while (number <= 10) {
    console.log('Using the while: ' + number);
    number += 2;
}

for (let number = 0; number <= 10; number = number + 2) {
    console.log('Using the for loop: ' +number);
}

let result = 1;
/*let counter = 0;

while (counter < 10) {
    result *= 2;
    counter += 1;
}

console.log('Using the while: ' + result);
*/
for (let counter = 0; counter < 10; counter++) {
    result *= 2;
}

console.log('Using the for loop: ' + result);

//JS value for exponetiation

console.log('Result with exponietation: ' + 2 ** 10);