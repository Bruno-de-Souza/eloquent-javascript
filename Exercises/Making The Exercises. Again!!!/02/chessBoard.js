let count = '';
for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
        if ((i + j) % 2 == 0) {
            count += ' ';
        }  else {
            count += '#';
        }
    }
    count += '\n';
}
console.log(count);