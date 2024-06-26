function countBs(n) {
    let characters = "BaBaB";
    for (let i = 0; i < characters.length; i++) {
        let count = '';
        if(characters[i] === 'B') {
            count += i;
            console.log(count);
        }
    }
}
console.log(countBs('BaBaBa'));