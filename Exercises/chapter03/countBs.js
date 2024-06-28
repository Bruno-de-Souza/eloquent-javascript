function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, 'B');
}

console.log(countChar('The result of the first function is: ' + 'BaBaBaBB', 'a'));
console.log(countBs(`The Result of the second function: ${'BaBaBaBB'}!`));