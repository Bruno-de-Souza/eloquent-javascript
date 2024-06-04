let total = 0;
let count = 1;

while (count <= 10) {
    total += count;
    console.log('Total: ' + total);
    count += 1;
    console.log(`Count: ` + count);
}

console.log(`Final Total: ${total}`);