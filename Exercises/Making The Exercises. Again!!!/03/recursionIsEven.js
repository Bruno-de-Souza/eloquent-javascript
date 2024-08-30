function isEven(n) {
    if(n % 2 == 0) {
        return 'Even';     
    } if (n % 2 != 0 && n > 1) {
        return 'Odd';
    } else {
        return 'Invalid';
    }
}
console.log(isEven(-1));