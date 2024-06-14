const power = (base, exponent) => {
    let result = 1;

    for (let count = 1; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log('Arrwow function power: ', power(3, 3));

const sqaure1 = (x) => { return x * x };
console.log('Arrow function squere1: ', sqaure1(3, 3) );

const sqaure2 = x => x * x;
console.log('Arrow function sqaure2: ', sqaure2(3, 3));

const horn = () => {
    console.log('Arrow function horn: Toot');
}