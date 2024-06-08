let space = ' ';
let hash = '#';
for (let i = 0; i < 4; i++) {
    console.log((space + hash) + (space + hash) + (space + hash) + (space + hash));
    console.log((hash + space) + (hash + space) + (hash + space) + (hash + space));
}

console.log('########################################');

let chessBoard = '';
for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        if ((x + y) % 2 == 0) {
            chessBoard += ' ';
        } else {
            chessBoard += '#';
        }
    }
    chessBoard += '\n';
}
console.log(chessBoard);