function minValueII(n1 = 1, n2 = 2) {
    if (n1 < n2) {
        return n1;
    } else if (n2 < n1) {
        return n2;
    } else {
        return 'Values are equal!';
    }
}
console.log(minValueII(6));