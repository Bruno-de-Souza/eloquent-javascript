const isEven = (n) => {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else if (isEven(n % 2 == 0)) {
        return false;
    } else {
        return true;
    }
}
console.log(isEven(11));