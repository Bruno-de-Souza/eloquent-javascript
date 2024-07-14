let size = 16;

let chessboard = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            chessboard += ' ';
        }  else {
            chessboard += '#';
        }
    }
    chessboard += '\n';
}
console.log(chessboard);