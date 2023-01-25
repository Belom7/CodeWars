const POINTS_PER_COL = [0, 0, 0, 50, 150, 300];
const WINNING_ROWS = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [0, 1, 2, 1, 0],
    [2, 1, 0, 1, 2],
];

function calculateWin(lines) {
    return WINNING_ROWS.reduce((res, rows) => {
        let cols = 0, symbol = lines[rows[0]][0];
        while (cols < rows.length && lines[rows[cols]][cols] === symbol) cols++;
        return res + POINTS_PER_COL[cols];
    }, 0);
}