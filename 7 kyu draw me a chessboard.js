function chessBoard(rows, columns) {
    return Array.from({length: rows}, (_,i) => Array.from({length: columns}, (_,j) => 'OX'[(i+j)%2]));
}