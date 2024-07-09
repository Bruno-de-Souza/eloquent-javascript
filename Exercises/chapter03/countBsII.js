function countCharII(string, ch) {
    let counter = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] == ch) {
            counter += 1;
        }
    }
    return counter;
}

function countBsII(string) {
    return countCharII(string, 'B')
}

console.log(countCharII('bbb', 'b'));
console.log(countBsII('Bruno', 'B'));