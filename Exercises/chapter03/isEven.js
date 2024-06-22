const isEven = (n) => {
    let even = 0;
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else if (isEven(even % 2 == 0)) {
        n = even;
        return true;
    } else {
        return false;
    }
}
console.log(isEven(52));