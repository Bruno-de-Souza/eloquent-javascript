const minValue = function(a, b) {
    return Math.min(a, b);
}
console.log(minValue(0, 10)); 


const minValueII = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(minValueII(0, 10));

const minValueIII = function(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(minValueIII(3, -2));