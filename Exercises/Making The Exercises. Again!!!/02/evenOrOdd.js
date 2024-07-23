let arr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [];
let odds = [];

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evens.push(arr[i]);
    } else {
        odds.push(arr[i]);
    }
}

console.log('Evens: ' + evens);
console.log('Odds: ' + odds);