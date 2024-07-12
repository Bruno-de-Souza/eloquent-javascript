/**
 * @author Bruno Moreira
 * 
 */
let hash = '#';
let counter = '';
for (line = 1; line <= 7; line++) {
    counter = counter + hash;
    console.log(counter);
}

// Better implementation
for (let line = '#'; line.length < 8; line += '#') {
    console.log(line);
}