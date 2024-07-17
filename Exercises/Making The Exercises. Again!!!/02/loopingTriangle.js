/**
 * @author bruno.souza
 * 
 */

/*
let hash = '#';
let counter = '';
for (line = 1; line <= 7; line++) {
    counter = counter + hash;
    console.log(counter);
}
*/

// Better implementation
for (let line = '#'; line.length <= 10; line += '#') {
    console.log(line);
}