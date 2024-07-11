/**
 * @author Bruno Moreira
 * 
 */

/*function loopingTriangle(line) {
    let hash = '#';
    let counter = '';
    for (line = 1; line <= 7; line++) {
        counter = counter + hash;
        console.log(counter);
    }
    return '';
}
console.log(loopingTriangle(7));*/

// Better implementation
for (let i = 1; i <= 7; i++ ) {
    let hash = '#';
    hash += i;
    console.log(hash);
}