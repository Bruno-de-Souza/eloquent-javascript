function countBsII(string, ch) {
    let counter = 0;
    for(let i = 0; i < string.lenght; i++) {
        if(string[i] == ch) {
            counter += 1;
        }
    }
    return counter;
}
console.log(countBsII('bbb', 'b'));