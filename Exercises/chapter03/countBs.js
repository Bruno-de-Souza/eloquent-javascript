function countBs(n) {
    let str = String(n);
    for (let i = 0; i < str.length; i++) {
        if (str[0] == 'B') {
            str += i;
            return str;
        } else {
            null;
        }
    }
}
console.log(countBs());
