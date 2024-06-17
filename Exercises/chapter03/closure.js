function wrapValue (n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(3);
let wrap2 = wrapValue(4);
console.log('This is the wrap1:', wrap1());
console.log('This is the wrap2:', wrap2());

/**
 * 
 * @closures
 */

function multiplier (factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log('Calling the twice binding:', twice(10));