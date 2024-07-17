/**
 * @author bruno.moreira
 */

/*for (let counter = 1; counter <= 100; counter++) {
    let number = '';
    if (counter % 3 == 0) {
        console.log('Fizz')
    } else if (counter % 5 == 0) {
        console.log('Buzz');
    } else if (counter % 3 == 0 && counter % 5 == 0) {
        console.log('FizzBuzz');
    } else {
        number += counter;
        console.log(number);
    }
}*/

// Better implementation
for (let i = 1; i <= 100; i++) {
    let numbers = '';
    if (i % 3 == 0) numbers += 'Fizz';
    if (i % 5 == 0) numbers += 'Buzz';
    console.log(numbers || i);
}